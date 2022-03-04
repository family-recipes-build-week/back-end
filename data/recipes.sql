--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 9.6.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: _ingredients; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._ingredients (
    ingredients_id smallint,
    ingredient_name character varying(39) DEFAULT NULL::character varying
);


ALTER TABLE public._ingredients OWNER TO rebasedata;

--
-- Name: _instructions; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._instructions (
    instructions_id smallint,
    instruction_steps character varying(81) DEFAULT NULL::character varying
);


ALTER TABLE public._instructions OWNER TO rebasedata;

--
-- Name: _knex_migrations; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._knex_migrations (
    id smallint,
    name character varying(25) DEFAULT NULL::character varying,
    batch smallint,
    migration_time character varying(10) DEFAULT NULL::character varying
);


ALTER TABLE public._knex_migrations OWNER TO rebasedata;

--
-- Name: _knex_migrations_lock; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._knex_migrations_lock (
    index smallint,
    is_locked smallint
);


ALTER TABLE public._knex_migrations_lock OWNER TO rebasedata;

--
-- Name: _recipes; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._recipes (
    id smallint,
    user_id smallint,
    title character varying(30) DEFAULT NULL::character varying,
    source character varying(10) DEFAULT NULL::character varying,
    notes character varying(48) DEFAULT NULL::character varying
);


ALTER TABLE public._recipes OWNER TO rebasedata;

--
-- Name: _sqlite_sequence; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._sqlite_sequence (
    name character varying(20) DEFAULT NULL::character varying,
    seq smallint
);


ALTER TABLE public._sqlite_sequence OWNER TO rebasedata;

--
-- Name: _tags; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._tags (
    tags_id smallint,
    tag character varying(8) DEFAULT NULL::character varying
);


ALTER TABLE public._tags OWNER TO rebasedata;

--
-- Name: _users; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public._users (
    id smallint,
    username character varying(7) DEFAULT NULL::character varying,
    password character varying(29) DEFAULT NULL::character varying
);


ALTER TABLE public._users OWNER TO rebasedata;

--
-- Data for Name: _ingredients; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._ingredients (ingredients_id, ingredient_name) FROM stdin;
1	Milk - Buttermilk
2	Asparagus - Frozen
3	Cheese - Comte
4	The Pop Shoppe - Black Cherry
5	Tilapia - Fillets
6	Pastry - Baked Scones - Mini
7	Wine - Beringer Founders Estate
8	Broom - Corn
9	Squash - Pattypan, Yellow
10	Bread - Rosemary Focaccia
11	Pickerel - Fillets
12	Sugar - Indivingredients_idual Portions
13	Cheese - Havarti, Roasted Garlic
14	Mountain Dew
15	Spinach - Frozen
16	Soy Protein
17	Cabbage - Nappa
18	Napkin White - Starched
19	Pineapple - Golden
20	Cheese - Brie, Cups 125g
21	Island Oasis - Raspberry
22	Rosemary - Primerba, Paste
23	Mushroom - Shitake, Fresh
24	Stock - Veal, Brown
25	Wine - Baron De Rothschild
26	Spring Roll Veg Mini
27	Pork - Sausage Casing
28	Glaze - Apricot
29	Wine - Wyndham Estate Bin 777
30	Crush - Orange, 355ml
31	Sauce - Roasted Red Pepper
32	Cookie Chocolate Chip With
33	Venison - Denver Leg Boneless
34	Salad Dressing
35	Sloe Gin - Mcguinness
36	Juice - Orange, 341 Ml
37	Onions - Red
38	Wine - Chardonnay South
39	Cassis
40	Bread - Sour Sticks With Onion
41	Onions Granulated
42	Mushroom - Crimini
43	Shrimp - 21/25, Peel And Deviened
44	Island Oasis - Mango Daiquiri
45	Foam Espresso Cup Plain White
46	Wine - Carmenere Casillero Del
47	Quail Eggs - Canned
48	Tuna - Canned, Flaked, Light
49	Longos - Greek Salad
50	Shrimp - Baby, Warm Water
\.


--
-- Data for Name: _instructions; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._instructions (instructions_id, instruction_steps) FROM stdin;
1	ultrices enim lorem ipsum dolor sit
2	maecenas leo odio condimentum instructions_id luctus nec molestie sed justo
3	sit amet consectetuer adipiscing elit proin risus praesent
4	erat fermentum justo nec condimentum neque sapien
5	justo maecenas rhoncus aliquam lacus morbi quis tortor
6	rhoncus sed vestibulum sit amet cursus instructions_id
7	augue vestibulum rutrum rutrum neque aenean auctor gravinstructions_ida sem
8	interdum in ante vestibulum ante ipsum
9	pede ullamcorper augue a suscipit nulla elit
10	lorem instructions_id ligula suspendisse ornare
11	ultrices libero non mattis pulvinar
12	erat quisque erat eros viverra eget congue eget
13	vel nisl duis ac nibh
14	blandit lacinia erat vestibulum sed magna at nunc commodo
15	eu felis fusce posuere felis sed lacus
16	morbi vestibulum velit instructions_id pretium iaculis diam erat
17	quis orci nullam molestie nibh in lectus pellentesque at nulla
18	condimentum neque sapien placerat ante nulla justo aliquam
19	sed interdum venenatis turpis enim blandit mi in
20	felis eu sapien cursus vestibulum proin
21	volutpat erat quisque erat eros viverra eget congue
22	pretium iaculis diam erat fermentum
23	diam in magna bibendum imperdiet nullam orci
24	bibendum morbi non quam nec dui luctus rutrum
25	posuere cubilia curae mauris viverra diam vitae
26	luctus ultricies eu nibh quisque instructions_id justo sit amet sapien
27	felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet
28	amet eros suspendisse accumsan tortor quis turpis
29	nibh in hac habitasse platea dictumst aliquam augue
30	tincinstructions_idunt eget tempus vel pede morbi porttitor
31	augue quam sollicitudin vitae consectetuer eget
32	sem mauris laoreet ut rhoncus
33	ut at dolor quis odio consequat
34	potenti cras in purus eu magna vulputate luctus
35	lorem ipsum dolor sit amet
36	natoque penatibus et magnis dis parturient montes nascetur rinstructions_idiculus
37	vel ipsum praesent blandit lacinia erat vestibulum sed magna at
38	lorem vitae mattis nibh ligula nec sem duis aliquam convallis
39	dapibus augue vel accumsan tellus nisi
40	nec sem duis aliquam convallis nunc proin
41	penatibus et magnis dis parturient montes nascetur rinstructions_idiculus
42	at ipsum ac tellus semper interdum mauris ullamcorper purus sit
43	morbi vestibulum velit instructions_id pretium iaculis
44	ut nulla sed accumsan felis
45	risus auctor sed tristique in tempus
46	amet consectetuer adipiscing elit proin
47	vel nulla eget eros elementum pellentesque quisque porta
48	mattis egestas metus aenean fermentum donec ut mauris eget
49	mauris vulputate elementum nullam varius nulla
50	varius nulla facilisi cras non velit nec nisi vulputate nonummy
\.


--
-- Data for Name: _knex_migrations; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._knex_migrations (id, name, batch, migration_time) FROM stdin;
17	20220302162105_recipes.js	1	2022-03-03
\.


--
-- Data for Name: _knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._knex_migrations_lock (index, is_locked) FROM stdin;
1	0
\.


--
-- Data for Name: _recipes; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._recipes (id, user_id, title, source, notes) FROM stdin;
1	4	Appetizer - Spring Roll, Veg	Jennilee	Reverse-engineered secondary capacity
2	1	Pomello	Lester	Re-engineered empowering workforce
3	5	Nantuket Peach Orange	Gasparo	Digitized demand-driven flexibility
4	5	Dikon	Theresita	Universal multimedia process improvement
5	5	Bar Mix - Pina Colada, 355 Ml	Opaline	Self-enabling asymmetric artificial intelligence
6	2	Halibut - Steaks	Gram	Enterprise-wide object-oriented adapter
7	1	Wine - Ej Gallo Sierra Valley	Winnie	Function-based global attitude
8	5	Pasta - Elbows, Macaroni, Dry	Malinde	Inverse logistical algorithm
9	1	Bread - Kimel Stick Poly	Kelcie	Triple-buffered bottom-line monitoring
10	1	Vinegar - Tarragon	Roana	Public-key optimal help-desk
11	2	Cheese - Comte	Jackie	Seamless foreground algorithm
12	1	Muffin Carrot - Individual	Marybeth	User-centric radical system engine
13	1	Aromat Spice / Seasoning	Berri	Multi-lateral intermediate flexibility
14	2	Cake - Mini Potato Pancake	Jacob	Triple-buffered cohesive database
15	4	Flower - Dish Garden	Meir	Public-key mission-critical frame
16	2	Muffin Batt - Ban Dream Zero	Alyda	Inverse transitional support
17	4	Beer - Rickards Red	Jodie	Robust scalable parallelism
18	3	Cheese - Parmesan Cubes	Euell	Up-sized mission-critical interface
19	1	Beef - Sushi Flat Iron Steak	Julita	Universal responsive project
20	1	Crab Brie In Phyllo	Viv	Face to face analyzing implementation
21	3	Wine - Winzer Krems Gruner	Nigel	Optimized scalable protocol
22	1	Cheese - Fontina	Jane	Digitized discrete parallelism
23	1	Table Cloth 54x72 Colour	Cazzie	Inverse 3rd generation attitude
24	4	Monkfish - Fresh	Dorthy	Optional 4th generation service-desk
25	1	Pepper - Cayenne	Drusie	Face to face contextually-based hierarchy
26	1	Appetizer - Chicken Satay	Peder	Adaptive asynchronous installation
27	4	Evaporated Milk - Skim	Ricki	Expanded national monitoring
28	2	Soup - Clam Chowder, Dry Mix	Kassia	Configurable intermediate local area network
29	2	Tortillas - Flour, 12	Charlean	Total actuating focus group
30	2	Pie Shells 10	Alexa	Implemented radical conglomeration
31	3	Muffin - Bran Ind Wrpd	Jorrie	Grass-roots holistic productivity
32	3	Fish - Soup Base, Bouillon	Verile	Seamless dynamic support
33	5	Cheese - Ricotta	Elene	Mandatory mission-critical migration
34	4	Teriyaki Sauce	Stephani	Monitored eco-centric success
35	1	Wine - Saint - Bris 2002, Sauv	Valentina	Advanced 4th generation flexibility
36	4	Pears - Fiorelle	Nathalia	Phased asynchronous info-mediaries
37	5	Shrimp, Dried, Small / Lb	Ole	User-centric contextually-based success
38	2	Irish Cream - Baileys	Osbert	Proactive 24 hour analyzer
39	1	Tumeric	Lemmy	Future-proofed clear-thinking system engine
40	1	Gatorade - Xfactor Berry	Aldo	User-friendly foreground extranet
41	3	Bread Crumbs - Panko	Cameron	Diverse executive toolset
42	1	Gingerale - Schweppes, 355 Ml	Elsi	Stand-alone secondary encryption
43	3	Longos - Grilled Chicken With	Sharron	Sharable eco-centric contingency
44	2	Quail - Whole, Boneless	Ab	Profound fault-tolerant definition
45	3	Beef - Flank Steak	Bondy	Distributed uniform help-desk
46	5	Plasticforkblack	Jessika	Phased transitional policy
47	2	Octopus	Moore	De-engineered responsive installation
48	2	Pineapple - Golden	Westbrooke	Devolved disintermediate productivity
49	2	Wine - Ej Gallo Sonoma	Dru	Configurable analyzing interface
50	3	Club Soda - Schweppes, 355 Ml	Teodor	Synergized dynamic local area network
\.


--
-- Data for Name: _sqlite_sequence; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._sqlite_sequence (name, seq) FROM stdin;
knex_migrations_lock	1
knex_migrations	17
ingredients	50
instructions	50
recipes	50
tags	50
users	4
\.


--
-- Data for Name: _tags; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._tags (tags_id, tag) FROM stdin;
1	seafood
2	desserts
3	stew
4	desserts
5	sandwich
6	seafood
7	sandwich
8	sandwich
9	salad
10	soup
11	pie
12	pasta
13	soup
14	soup
15	pie
16	seafood
17	stew
18	sandwich
19	stew
20	stew
21	sandwich
22	desserts
23	stew
24	pie
25	seafood
26	sandwich
27	desserts
28	desserts
29	sandwich
30	soup
31	desserts
32	pie
33	pasta
34	stew
35	seafood
36	desserts
37	stew
38	pie
39	pie
40	pie
41	soup
42	desserts
43	pasta
44	soup
45	stew
46	pasta
47	sandwich
48	soup
49	soup
50	salad
\.


--
-- Data for Name: _users; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public._users (id, username, password) FROM stdin;
1	keisha	$2a$31$vj2aWeooz7lHOusaG2C7ye
2	wallace	1234
3	kei	$2a$31$nQr/EJNqFNopgptOKXroeu
4	bloom	$2a$31$46qguYFuLbegX4GBOPktie
\.


--
-- PostgreSQL database dump complete
--

