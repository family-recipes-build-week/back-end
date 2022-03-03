
exports.seed = function(knex, Promise) {

  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {

      // Inserts seed entries
      return knex('instructions').insert([
        {
          "instructions_id":1,"instruction_steps":"ultrices enim lorem ipsum dolor sit"
        },
        {
          "instructions_id":2,"instruction_steps":"maecenas leo odio condimentum instructions_id luctus nec molestie sed justo"
        },
        {
          "instructions_id":3,"instruction_steps":"sit amet consectetuer adipiscing elit proin risus praesent"
        },
        {
          "instructions_id":4,"instruction_steps":"erat fermentum justo nec condimentum neque sapien"
        },
        {
          "instructions_id":5,"instruction_steps":"justo maecenas rhoncus aliquam lacus morbi quis tortor"
        },
        {
          "instructions_id":6,"instruction_steps":"rhoncus sed vestibulum sit amet cursus instructions_id"
        },
        {
          "instructions_id":7,"instruction_steps":"augue vestibulum rutrum rutrum neque aenean auctor gravinstructions_ida sem"
        },
        {
          "instructions_id":8,"instruction_steps":"interdum in ante vestibulum ante ipsum"
        },
        {
          "instructions_id":9,"instruction_steps":"pede ullamcorper augue a suscipit nulla elit"
        },
        {
          "instructions_id":10,"instruction_steps":"lorem instructions_id ligula suspendisse ornare"
        },
        {
          "instructions_id":11,"instruction_steps":"ultrices libero non mattis pulvinar"
        },
        {
          "instructions_id":12,"instruction_steps":"erat quisque erat eros viverra eget congue eget"
        },
        {
          "instructions_id":13,"instruction_steps":"vel nisl duis ac nibh"
        },
        {
          "instructions_id":14,"instruction_steps":"blandit lacinia erat vestibulum sed magna at nunc commodo"
        },
        {
          "instructions_id":15,"instruction_steps":"eu felis fusce posuere felis sed lacus"
        },
        {
          "instructions_id":16,"instruction_steps":"morbi vestibulum velit instructions_id pretium iaculis diam erat"
        },
        {
          "instructions_id":17,"instruction_steps":"quis orci nullam molestie nibh in lectus pellentesque at nulla"
        },
        {
          "instructions_id":18,"instruction_steps":"condimentum neque sapien placerat ante nulla justo aliquam"
        },
        {
          "instructions_id":19,"instruction_steps":"sed interdum venenatis turpis enim blandit mi in"
        },
        {
          "instructions_id":20,"instruction_steps":"felis eu sapien cursus vestibulum proin"
        },
        {
          "instructions_id":21,"instruction_steps":"volutpat erat quisque erat eros viverra eget congue"
        },
        {
          "instructions_id":22,"instruction_steps":"pretium iaculis diam erat fermentum"
        },
        {
          "instructions_id":23,"instruction_steps":"diam in magna bibendum imperdiet nullam orci"
        },
        {
          "instructions_id":24,"instruction_steps":"bibendum morbi non quam nec dui luctus rutrum"
        },
        {
          "instructions_id":25,"instruction_steps":"posuere cubilia curae mauris viverra diam vitae"
        },
        {
          "instructions_id":26,"instruction_steps":"luctus ultricies eu nibh quisque instructions_id justo sit amet sapien"
        },
        {
          "instructions_id":27,"instruction_steps":"felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet"
        },
        {
          "instructions_id":28,"instruction_steps":"amet eros suspendisse accumsan tortor quis turpis"
        },
        {
          "instructions_id":29,"instruction_steps":"nibh in hac habitasse platea dictumst aliquam augue"
        },
        {
          "instructions_id":30,"instruction_steps":"tincinstructions_idunt eget tempus vel pede morbi porttitor"
        },
        {
          "instructions_id":31,"instruction_steps":"augue quam sollicitudin vitae consectetuer eget"
        },
        {
          "instructions_id":32,"instruction_steps":"sem mauris laoreet ut rhoncus"
        },
        {
          "instructions_id":33,"instruction_steps":"ut at dolor quis odio consequat"
        },
        {
          "instructions_id":34,"instruction_steps":"potenti cras in purus eu magna vulputate luctus"
        },
        {
          "instructions_id":35,"instruction_steps":"lorem ipsum dolor sit amet"
        },
        {
          "instructions_id":36,"instruction_steps":"natoque penatibus et magnis dis parturient montes nascetur rinstructions_idiculus"
        },
        {
          "instructions_id":37,"instruction_steps":"vel ipsum praesent blandit lacinia erat vestibulum sed magna at"
        },
        {
          "instructions_id":38,"instruction_steps":"lorem vitae mattis nibh ligula nec sem duis aliquam convallis"
        },
        {
          "instructions_id":39,"instruction_steps":"dapibus augue vel accumsan tellus nisi"
        },
        {
          "instructions_id":40,"instruction_steps":"nec sem duis aliquam convallis nunc proin"
        },
        {
          "instructions_id":41,"instruction_steps":"penatibus et magnis dis parturient montes nascetur rinstructions_idiculus"
        },
        {
          "instructions_id":42,"instruction_steps":"at ipsum ac tellus semper interdum mauris ullamcorper purus sit"
        },
        {
          "instructions_id":43,"instruction_steps":"morbi vestibulum velit instructions_id pretium iaculis"
        },
        {
          "instructions_id":44,"instruction_steps":"ut nulla sed accumsan felis"
        },
        {
          "instructions_id":45,"instruction_steps":"risus auctor sed tristique in tempus"
        },
        {
          "instructions_id":46,"instruction_steps":"amet consectetuer adipiscing elit proin"
        },
        {
          "instructions_id":47,"instruction_steps":"vel nulla eget eros elementum pellentesque quisque porta"
        },
        {
          "instructions_id":48,"instruction_steps":"mattis egestas metus aenean fermentum donec ut mauris eget"
        },
        {
          "instructions_id":49,"instruction_steps":"mauris vulputate elementum nullam varius nulla"
        },
        {
          "instructions_id":50,"instruction_steps":"varius nulla facilisi cras non velit nec nisi vulputate nonummy"
        },
      ]);
    
    });

  };
