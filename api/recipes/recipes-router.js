const router = require('express').Router();
const Recipes = require('./recipes-model');
const restricted = require('../auth/restricted-middleware');

router.get('/:id', async (req, res, next) => {
  try {
      const recipe = await Recipes.getRecipeById(req.params.id)
      res.status(200).json(recipe)
  } catch (err){
      next(err)
  }
}); 

router.get('/', async (req, res, next) => {
  try {
    const recipe = await Recipes.getRecipes(req.params.id)
    res.status(200).json(recipe)
} catch (err){
    next(err)
}
});

// router.get('/:id',  (req, res) => {
//  const recipeId = req.params.id
//  const userId = req.params.user_id // are you sure? req.user.id

//   Recipes
//     .getRecipeById(recipeId, userId)
//     .then(recipe => {
//       if(!recipe) {
//         res.status(404).json({message: 'No recipe found with this ID for current user.'})
//       } else {
//         res.status(200).json({recipe});
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({err})
//     });
// });

router.post('/', restricted, (req, res) => {
  const recipe = req.body;
  const userId = req.user.id
  // console.log(recipe);

  Recipes
    .addRecipe(recipe, userId)
    .then(recipes => {
      res.status(201).json(recipes);
    })
    .catch(err => {
      // s
      res.status(500).json({err})
    });
});

router.delete('/:id', restricted, (req, res) => {

  const recipeId = req.params.id;
  const userId = req.user.id;

  Recipes
    .deleteRecipe(recipeId, userId)
    .then(recipes => {
      res.status(204).json(recipes)
    })
    .catch( err => {
      res.status(500).json({message: 'Recipe not found.'})
    });
});

router.put('/:id', restricted, (req, res) => {
  const recipeId = req.params.id;
  const userId = req.user.id;
  const recipeUpdate = req.body;

  Recipes
    .updateRecipe(recipeId, userId, recipeUpdate)
    .then(result => {
      if(!result) {
        res.status(404).json({message: 'No recipe found with this ID for current user.'})
      } else {
        res.status(200).json(result);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;