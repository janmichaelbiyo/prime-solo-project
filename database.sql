-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "inclusive_features" (
  "id" SERIAL PRIMARY KEY,
  "feature" varchar
);

CREATE TABLE "review" (
  "id" SERIAL PRIMARY KEY,
  "review_analysis" varchar (250),
  "user_id" integer,
  "location_id" integer
);

CREATE TABLE "location" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "address" varchar,
  "info" varchar,
  "type" varchar,
  "lat" float,
  "long" float
);

CREATE TABLE "location_inclusive_features" (
  "id" SERIAL PRIMARY KEY,
  "location_id" integer,
  "inclusive_features_id" integer,
  "status" bool
);

INSERT INTO "inclusive_features" ("feature")
VALUES 
('Inclusive swing'), 
('Accessible play area'),
('Inclusive sensory play panel'),
('Inclusive Rollerslide'),
('Sway fun Glider'),
('Omnispin spinner'),
('Adaptive playground surface'),
('Accessible splash pad'),
('Accessible trails'),
('Omnispin spinner'),
('We-saw'),
('Accessible walkway to waterfront'),
('Beach wheelchair'),
('Modern restrooms'),
('Accessible fishing pier'),
('Accessible picnic area'),
('Accessible visitor center'),
('Accessible kayak launch area'),
('Accessible yurt'),
('Accessible cabins & lodges'),
('Accessible boat launch'),
('Accessible mini cabin'),
('Accessible beach house'),
('Accessible sanitation station in campground'),
('Accessible visitor center'),
('Accessible observation platforms'),
('Adaptive enChroma viewer'),
('adaptive sit ski rental'),
('Accessible shooting range');

INSERT INTO "location" ("title", "address", "info", "type", "lat", "long")
VALUES 
('All Kids Playground', 
'825 South Williams Lake Road, Waterford, MI 48329',
'A farm themed playground',
'playground',
42.6276494,
-83.4398909),
('Anybodies playground',
'1400 Captial Avenue NE, Battle Creek, MI 49017',
'This is a Boundless™ Playground, funded in part by the W.K. Kellogg Foundation.',
'playground',
42.3427944,
-85.1540748),
('Bachmayer Little League park',
'110 Veterans Ave, Blissfield, MI 49228',
'This is a Boundless Playground, funded in part by the W.K. Kellogg Foundation for its Able to Play project in honor of the Foundations 75th anniversary.',
'playground',
41.8245786,
-83.8636632),
('Boundless Playground at High Point School',
'1735 S. Wagner Road, Ann Arbor, MI 48106',
'This was an Able to Play project whose criteria included that children with physical disabilities be able to play on, and with, at least 70 percent of the play activities in order to strive for greater “integration” of all children.',
'playground',
42.2603483,
-83.7970431),
('Children Play Farm',
'Inglenook Park Twelve Mile Road, Southfield, MI 48076',
'The new Play Farm will be the largest playground in the city, complimenting the existing fitness trails, ball diamonds and the restored Miller Barn at the 42-acre Inglenook Park.',
'playground',
42.5001226,
-83.2520137),
('Cooke School Playground',
'21200 Taft Road, Northville, MI 48167',
'Cooke School in Northville, Michigan, offers a fully inclusive and accessible playground for children ages 5 to 12. Kids are thrilled with the wide range of sensory-rich play activities.',
'playground',
42.4414713,
-83.4913751),
('Dad Butler Playfield',
'2034 East 8 Mile Road, Detroit, MI 48234',
'The playground has climbing structures, slides, and swings, and is located adjacent to soccer fields, baseball diamonds, and a picnic area.',
'playground',
42.4464392,
-83.0801687),
('Delray Community House',
'420 Leigh Street, Detroit, MI 48209',
'This is a Boundless™ Playground, funded in part by the W.K. Kellogg Foundations Able to Play project in honor of the Foundations 75th anniversary',
'playground',
42.2907504,
-83.1282317),
('Frog village',
'2050 Metro Court, Wyoming, MI 49509',
'This Boundless™ Playground was funded in part by the W.K. Kellogg Foundation Able to Play project in honor of the Foundations 75th anniversary.',
'playground',
42.8546547,
-85.714817),
('John M Patriarch Park ',
'960 Alton Road, East Lansing, MI 48823',
'A new, fully accessible, 1.2-acre playground was built at Patriarche Park with the help of hundreds of community volunteers in 2014. The Playground in the Park “Re-Imagined” project was the result of a great partnership between the City of East Lansing and the Rotary Club of East Lansing; and could not have been built without the tremendous support of the community.',
'playground',
42.7448027,
-84.4696712),
('Kids Dream',
'520 S. Main St, Lawton, MI 49065',
'It is wood playground with steps, bridges, monkey bars, rope ladders, shaky platforms and more. There is only one entrance and exit, making it easier to keep track of children. There is a separate Tot Lot area with small steps, a slide, a sandbox, monkey bars and large wooden cars to “drive.” The playground is nicely shaded.',
'playground',
42.162775,
-85.8489606),
('Let Them Play Playground',
'2280 W. Clarkston Road, Lake Orion, MI 48360',
'The playground includes two fully accessible wheelchair swings, a Jam Box and a variety of auto-sensory elements that allow children to have fun while improving physical, sensory and cognitive abilities. The area will also include a garden that is accessible by wheelchair. Playground opened in September 2014',
'playground',
42.7661537,
-83.2904645),
('Longfellow-Summerfield Play Area',
'1360 Melbourne Avenue, Flint, MI 48504',
'The Longfellow/Summerfield Play Area was rated in the Top 5 Best Playgrounds in Flint in 2011.',
'playground',
43.0264781,
-83.7203334),
('Marshbank Park',
'2805 Hiller Road West, Bloomfield, MI 48324',
'The entire park is designed to be universally accessible and barrier free. There are no steps or ramps for any of the facilities or features in the park and may be used by any individual regardless of their ability or lack of ability.',
'playground',
42.5950203,
-83.395216),
('New Buffalo Welcome Center 707',
'I-94, New Buffalo, MI 49117',
'A Boundless™ Playground located at the New Buffalo Welcome Center on Interstate Hwy 94 East.',
'playground',
41.779080048453,
-86.7245890780957),
('North School Community Playground',
'333 E. Miller Road, Lansing, MI 48911',
'This is a Boundless™ Playground, funded in part by the W.K. Kellogg Foundations Able to Play project in honor of the Foundations 75th anniversary.',
'playground',
42.6699892,
-84.5478073),
('Paradise Peninsula',
'1702 Scott Lake Road, Waterford, MI 48328',
'This universally-accessible playscape was designed after the many beautiful and unique landscapes found in Michigan-the Great Lakes State.',
'playground',
42.6642854,
-83.3451961),
('Patriarche Park',
'1100 Alton St, East Lansing, MI 48823',
'The 1.2-acre playground, which opened in 2014, is accessible, has a rubberized play surface, walkways and a rain garden.',
'playground',
42.7452059,
-84.4717445),
('Play 4 All',
'35700 John St, Wayne, MI 48184',
'Completed in 2009, this universally accessible playground is located within and existing neighborhood park and provides a wide range of recreational, sensory, and learning opportunities for both parents and children of the surrounding community.',
'playground',
42.2710221,
-83.3904915),
('Rainbow End',
'5600 Cardinal Square Blvd, Saginaw, MI 48604',
'This is a Boundless™ Playground, funded in part by the W.K. Kellogg Foundations Able to Play project in honor of the Foundations 75th anniversary.',
'playground',
43.4891295,
-83.964378),
('Ramona Park',
'8601 S Sprinkle Rd, Portage, MI 49002',
'The playground is located at the back of the park, by Long Lake. Ramona Park has a fully-staffed and lifeguarded beach. The playground has both a large play structure for five- to 12-year-olds and a smaller play structure.',
'playground',
42.19222,
-85.5403289),
('Rotary Playground',
'313 Fairbanks Ave, Holland, MI 49423',
'A Boundless™ Playground donated by the Rotary resides in Smallenburg Park. This is a family oriented park and playground adjoined by the Bouws outdoor community pool and the Holland Municipal Stadium which is used for interscholastic football and soccer for area schools and Hope College.',
'playground',
42.785573,
-86.089587),
('Sandusky City Park Boundless Playground',
'95-169 S Custer St, Sandusky, MI 48471',
'This playground was funded in part by the W.K. Kellogg Foundation Able to Play project in honor of the Foundations 75th anniversary.',
'playground',
43.4193242,
-82.8346694),
('The Monroe Welcome Center Playground',
'I-75 NB,  Monroe Charter Twp, MI 48161',
'A Boundless™ Playground located at the Monroe Welcome Center off of I-75 Northbound at 10 Mile Marker',
'playground',
41.8635277777778,
-83.40525),
('Thornton Creek Elementary',
'46180 W 9 Mile Road, Novi, MI 48374',
'Thornton Creek Elementary School created its playground after winning the grand prize of the School Grounds. Playgrounds. Common Ground.™ essay contest held in partnership with the National Association of Elementary School Principals Foundation (NAESPF) in 2012.',
'playground',
42.4535004,
-83.5042877),
('Tiger Paw Park',
'East Progress Street, Hillman, MI 49746',
'This is a Boundless™ Playground, funded in part by the W.K. Kellogg Foundation Able to Play project in honor of the Foundation s 75th anniversary.',
'playground',
45.0672489763465,
-83.8891464977774),
('Upjohn Park',
'1018 Walter St, Kalamazoo, MI 49001',
'A Boundless™ Playground and includes a Sway Fun Glider. Upjohn Park is 18 acre park that contains Kik Pool which is the only 50 meter outdoor swimming pool in the Kalamazoo area.',
'playground',
42.2809917,
-85.5760118),
('Versluis Park',
'3650 Versluis Park NE, Grand Rapids, MI 49525',
'Versluis Park was created on the shore of a 50 acre man-made lake and designed to provide a fully accessible recreational experience.',
'playground',
43.0605478186558,
-85.5771446228027),
('Western Up Boundless Playground',
'N. 4720 Highway US-45, Watersmeet, MI 49969',
'This is a Boundless™ Playground, funded in part by the W.K. Kellogg Foundations Able to Play project in honor of the Foundations 75th anniversary.',
'playground',
46.2826982,
-89.1784044),
('Wing Lake Development Center Playground',
'6490 Wing Lake Rd, Bloomfield Hills MI 48301',
'Located at Wing Lake which is one of several programs in Oakland County serving students with severe cognitive impairments (SCI) and severe multiple impairments (SXI) from age three through twenty-six years of age.',
'playground',
42.5453571,
-83.2974155),
('Bald Mountain Recreation Area',
'1330 E. Greenshield Road, Lake Orion MI, 48360-2307',
'Bald Mountain Recreation Area is home to some of the steepest hills and most rugged terrain in southeastern Michigan. Camping is limited to rustic cabins, but the extensive trails, inland lakes, trout streams and wild game provide year-round recreation opportunities.',
'park',
42.743036,
-83.2183308),
('Bay City State Park',
'3582 State Park Dr, Bay City, MI 48706',
'Bay city state park is a 2389 acre state park located on the shore of saginaw bay near bay city in bay county, michigan.  The Tobacco Marsh, one of the largest remaining freshwater, coastal wetlands on the Great Lakes is located in the park',
'park',
43.6678250455921,
-83.904572725296),
('Brighton Recreation Area',
'6360 Chilson Rd, Howell, MI 48843',
'Located in southeast Michigan, the park is home to nine lakes, five campgrounds, a designated swim beach, 35 miles of trails, boating access sites, picnic areas and a disc golf course, as well as fishing, boating and paddling amenities.',
'park',
42.5059828,
-83.8595071),
('Dodge 4 State Park',
'4250 Parkway St, Waterford Twp, MI 48328',
'139-acre preserve with a mile of shoreline also has boating docks & cross-country skiing trails.',
'park',
42.6175557,
-83.369903),
('Fort Custer Reaction Area',
'5163 Fort Custer Dr, Augusta, MI 49012',
'Fort Custer State Recreation Area is a 3,033-acre park located between Battle Creek and Kalamazoo. The park features three lakes, the Kalamazoo River, a modern and equestrian campground, a swimming beach, more than 40 miles of trails, paddling and fishing opportunities, and much more.',
'park',
42.3247986,
-85.3514613),
('Grand Haven State Park',
'1001 S Harbor Dr, Grand Haven, MI 49417',
'Grand Haven State Park is set along a half-mile of sandy Lake Michigan shoreline along the west side of the park and the Grand River along the north side of the park.',
'park',
43.0547473,
-86.2480228),
('Harrisville State Park',
'248 State Park Rd, Harrisville, MI 48740',
'Harrisville State Park is set along the sandy shores of Lake Huron and is home to a day-use area, a modern campground, a designated swim beach, trails, overnight lodging options and more.',
'park',
44.6475102,
-83.2969317),
('Hoffmaster State Park',
'6585 Lake Harbor Rd, Norton Shores, MI 49441',
'Located in Muskegon, the park is situated on 3 miles of stunning Lake Michigan shoreline and features a modern campground, towering dunes, 10 miles of scenic trails and the Gillette Sand Dune Visitor Center.',
'park',
43.1263134,
-86.2741323),
('Holland State Park',
'2398 Ottawa Beach Rd, Holland, MI 49424',
'The park is best known for sugar sand beaches, beautiful sunsets and views of the iconic “Big Red” lighthouse.',
'park',
42.7729978,
-86.2045601),
('Holly Recreation Area',
'8100 Grange Hall Rd, Holly, MI 48442',
'The parks more than 8,000 acres of rolling woodlands and open fields provide opportunities for a variety of outdoor activities, including hiking, camping, disc golf, fishing, mountain biking and much more.',
'park',
42.8138737,
-83.5416009),
('Interlochen State Park',
'4167 J. Maddy Pkwy, Interlochen, MI 49643',
'Interlochen State Park is located on two fishing and swimming lakes: Green Lake and Duck Lake in Northern Michigan.',
'park',
44.6286068,
-85.7615288),
('Island Lake',
'6301 Kensington Road, Brighton MI, 48116',
'Sprawling 4,000-acre park with meadows & mature woodlands features a hot air balloon launch point.',
'park',
42.5114252,
-83.6735919),
('Lakeport State Park',
'7605 Lakeshore Road, Lakeport MI, 48059',
'Lakeport State Park located on Lake Huron with two distinct units separated by the village of Lakeport. A total of 250 sites are divided between the two campgrounds. I-94 east to M-25 north, 15 miles north, entrance on the east side of M-25.',
'park',
43.1315435,
-82.5020297),
('Ludington State Park',
'8800 W. M-116, Ludington MI, 49431',
'The park is home to three campgrounds, sandy beaches, scenic sand dunes, an iconic lighthouse, wetlands, marshlands and forests. It is situated between Hamlin Lake and Lake Michigan, with several miles of beautiful shoreline along both lakes.',
'park',
44.0336539,
-86.5038789),
('Mclain State Park',
'18350 Highway M-203, Hancock MI, 49930',
'McLain State Park centrally located between the cities of Calumet and Hancock is situated in the heart of the Keweenaw Peninsula along 2 miles of sandy beach on Lake Superior.',
'park',
47.2359693,
-88.6091654),
('Mears State Park',
'400 West Lowell Street, Pentwater MI, 49449',
'Mears State Park, situated along the Lake Michigan shoreline, is known for its stunning sunsets and close proximity to Pentwater.',
'park',
43.7831292,
-86.4405593),
('Metamora-Hadley Recreation Area',
'3871 Herd Road, Metamora MI, 48455',
'Located just 8 miles south of Lapeer, the park surrounds Lake Minnawanna and is home to a modern campground, overnight lodging, a designated swim area, a fishing pier, picnic areas, 6 miles of trails, paddling and fishing opportunities, and more.',
'park',
42.9452593,
-83.3550675),
('Muskegon State Park',
'3560 Memorial Drive, North Muskegon MI, 49445',
'The park is home to 3 miles of breathtaking shoreline (2 miles along Lake Michigan and 1 mile on Muskegon Lake), Snug Harbor, forested dunes, two campgrounds, picnic areas, multiple trails and more.',
'park',
43.2491697,
-86.3340911),
('North Higgins Lake State Park',
'11747 N. Higgins Lake Drive, Roscommon MI, 48653',
'North Higgins Lake State Park – located along the north shore of Higgins Lake at the former site of the worlds largest seedling nurseries is home to a modern campground, mini cabins, a boating access site, a designated swim beach, a picnic area and trails popular for hiking and cross-county skiing',
'park',
44.5157586,
-84.7614834),
('Otsego Lake State Park',
'7136 Old 27 S, Gaylord MI, 49735',
'The park is located just south of Gaylord on Otsego Lake and is known for its half-mile sandy beach, popular boat launch, lakeside picnic area and campground.',
'park',
44.9292156,
-84.6890775),
('Petoskey State Park',
'2475 M-119 Hwy, Petoskey MI, 49770',
'Situated on Little Traverse Bay and home to 1 mile of beautiful beach along Lake Michigan, two modern campgrounds and trails, the park is a popular destination for those wanting to find Petoskey stones.',
'park',
45.4070653,
-84.9037779),
('Pontiac Lake Recreation Area',
'7800 Gale Road, Waterford MI, 48327',
'Pontiac Lake is a 3,745-acre park located in Oakland County. Camping, horseback riding, picnicking, swimming, hiking, biking, paddling, hunting, fishing and sightseeing are popular activities enjoyed by visitors. The park is home to the longest beach in southeast Michigan at just over half a mile.',
'park',
42.6761416,
-83.4395906),
('Porcupine Mountains Wilderness State Park',
'33303 Headquarters Road, Ontonagon MI, 49953-9087',
'This 60,000-acres is home to a 35,000-acre old-growth forest, roaring waterfalls, miles of rivers and streams, 90-plus miles of hiking trails, a modern and rustic campground, backcountry camping, the Lake Superior shoreline and more. The visitor center is just 3 miles west of Silver City on M-107.',
'park',
46.8131678,
-89.6252353),
('Port Crescent State Park',
'1775 Port Austin Road, Port Austin, MI 48467',
'Port Crescent State Park, located at the tip of Michigans “thumb,” is set along 3 miles of sandy Lake Huron. The park features a dark sky preserve, a modern campground, lodging facilities, trails and much more.',
'park',
44.0071606,
-83.049313),
('Rifle River Recreation Area',
'2550 E. Rose City Road, Lupton MI, 48635-0098',
'The park is home to the Rifle River and 10 no-wake lakes and ponds and provides year-round recreational opportunities, including fishing, paddling, camping, swimming, hiking, mountain biking and more.',
'park',
44.4198458,
-84.0233801),
('Seven Lakes State Park',
'14390 Fish Lake Road, Holly MI, 48442',
'An endless variety of topography and ecosystems form the area called Seven Lakes. Its land was a combination of farmland, rolling hills and forests. About 230 acres of water with several miles of shoreline await the park user. The dam, formed one large lake from seven small lakes.',
'park',
42.8184801,
-83.6600931),
('Silver Lake State Park',
'9679 W. State Park Road, Mears MI, 49436',
'Silver Lake State Park encompasses 3,000 acres along the Lake Michigan shoreline. It’s home to nearly 2,000 acres of sand dunes, a modern campground, a day-use area on inland Silver Lake and a popular 500-acre ORV scramble area.',
'park',
43.6505456,
-86.518237),
('South Higgins State park',
'106 State Park Drive, Roscommon MI, 48653',
'South Higgins Lake State Park, situated on 1 mile of shoreline along Higgins Lake, boasts one of the largest Michigan state park campgrounds, a popular boat launch and a popular day-use area.',
'park',
44.4254103,
-84.6808239),
('Tawas Point State Park',
'686 Tawas Beach Road, East Tawas MI, 48730',
'The park, situated on the end of a sand spit that forms Tawas Bay along Lake Huron, has been referred to as the “Cape Cod of the Midwest.” The Tawas Point Lighthouse serves as the sole representative of a true Victorian-era style station on the Great Lakes.',
'park',
44.2604477,
-83.4418026),
('Traverse City State Park',
'1132 US-31 N., Traverse City MI, 49686',
'Traverse City State Park is a popular urban park located on on the east arm of the Grand Traverse Bay, just 2 miles from downtown Traverse City. This popular urban park is located directly across U.S. 31 and features a quarter-mile of sandy beach and is located along the TART Trail.',
'park',
44.7478778,
-85.5543242),
('Warren Dunes State Park',
'12032 Red Arrow Highway, Sawyer MI, 49125',
'The park is home to 3 miles of Lake Michigan shoreline, 6 miles of hiking trails and two campgrounds. A rugged dune formation rises 260 feet above the lake and offers spectacular views.',
'park',
41.9013715,
-86.5952374),
('Wilderness State park',
'903 Wilderness Park Drive, Carp Lake MI, 49718',
'Wilderness State Park, located near Mackinaw City, is home to 26 miles of beautiful Lake Michigan shoreline, a vast trail system and unique camping opportunities.',
'park',
45.733984,
-84.9176216),
('William G Miliken State Park and Harbor',
'1900 Atwater Street, Detroit MI, 48207',
'Located in the heart of Detroit, along a portion of the citys Detroit Riverwalk, William G. Milliken State Park and Harbor is conveniently located near many major downtown attractions and rovides easy access for fishing, biking, walking and rollerblading on a paved trail.',
'park',
42.3331366,
-83.0257791);

INSERT INTO "location_inclusive_features" ("location_id", "inclusive_features_id", "status")
VALUES 
(1, 1, 'true'), (1, 2, 'true'), (1, 3, 'true'),
(2, 1, 'true'), (2, 2, 'true'), (2, 3, 'true'), (2, 4, 'true'),
(3, 1, 'true'), (3, 2, 'true'), (3, 3, 'true'),
(4, 1, 'true'), (4, 2, 'true'), (4, 3, 'true'),
(5, 1, 'true'), (5, 2, 'true'), (5, 3, 'true'), (5, 4, 'true'), (5, 5, 'true'),
(6, 1, 'true'), (6, 2, 'true'), (6, 3, 'true'), (6, 4, 'true'), (6, 5, 'true'), (6, 6, 'true'), (6, 7, 'true'),
(7, 1, 'true'), (7, 2, 'true'), (7, 3, 'true'), 
(8, 1, 'true'), (8, 2, 'true'), (8, 3, 'true'), 
(9, 1, 'true'), (9, 2, 'true'), (9, 3, 'true'), 
(10, 1, 'true'), (10, 2, 'true'), (10, 7, 'true'), 
(11, 1, 'true'), (11, 8, 'true'),
(12, 1, 'true'), (12, 2, 'true'), (12, 3, 'true'),
(13, 1, 'true'), (13, 2, 'true'), 
(14, 1, 'true'), (14, 2, 'true'), (14, 7, 'true'), 
(15, 1, 'true'), (15, 7, 'true'), 
(16, 1, 'true'), (16, 2, 'true'), 
(17, 1, 'true'), (17, 7, 'true'), (17, 9, 'true'), 
(18, 1, 'true'), (18, 2, 'true'), (18, 7, 'true'), 
(19, 1, 'true'), (19, 2, 'true'), (19, 3, 'true'), (19, 5, 'true'), (19, 7, 'true'), 
(20, 1, 'true'), (20, 2, 'true'), (20, 7, 'true'), 
(21, 1, 'true'), (21, 7, 'true'), (21, 5, 'true'), 
(22, 1, 'true'), (22, 7, 'true'), 
(23, 1, 'true'), (23, 7, 'true'), (23, 8, 'true'), 
(24, 1, 'true'), (24, 7, 'true'), 
(25, 1, 'true'), (25, 7, 'true'), (25, 3, 'true'), (25, 6, 'true'), (25, 10, 'true'), 
(26, 1, 'true'), (26, 7, 'true'), 
(27, 1, 'true'), (27, 3, 'true'), (27, 7, 'true'), 
(28, 1, 'true'), (28, 2, 'true'), 
(29, 1, 'true'), (29, 2, 'true'), (29, 7, 'true'), 
(30, 1, 'true'), (30, 2, 'true'), (30, 7, 'true'), (30, 5, 'true'), 
(31, 20, 'true'), (31, 14, 'true'), (31, 15, 'true'), (31, 28, 'true'), 
(32, 11, 'true'), (32, 12, 'true'), (32, 13, 'true'), (32, 14, 'true'), (32, 15, 'true'), (32, 16, 'true'), (32, 1, 'true'), (32, 7, 'true'), 
(33, 11, 'true'), (33, 12, 'true'), (33, 9, 'true'), (33, 17, 'true'), (33, 18, 'true'), (33, 15, 'true'), (33, 14, 'true'), (33, 19, 'true'), 
(34, 12, 'true'), (34, 20, 'true'), (34, 14, 'true'), (34, 11, 'true'), 
(35, 11, 'true'), (35, 20, 'true'), (35, 14, 'true'), (35, 21, 'true'), (35, 15, 'true'), 
(36, 11, 'true'), (36, 12, 'true'), (36, 22, 'true'), (36, 13, 'true'), (36, 7, 'true'), 
(37, 11, 'true'), (37, 19, 'true'), (37, 15, 'true'), (37, 23, 'true'), 
(38, 12, 'true'), (38, 24, 'true'), 
(39, 11, 'true'), (39, 12, 'true'), (39, 22, 'true'), (39, 20, 'true'), (39, 13, 'true'), (39, 15, 'true'), (39, 7, 'true'), (39, 1, 'true'), 
(40, 11, 'true'), (40, 22, 'true'), (40, 14, 'true'), (40, 13, 'true'), (40, 15, 'true'), (40, 7, 'true'), 
(41, 11, 'true'), (41, 12, 'true'), (41, 17, 'true'), (41, 13, 'true'), 
(42, 11, 'true'), (42, 22, 'true'), (42, 14, 'true'), (42, 15, 'true'), (42, 7, 'true'), (42, 9, 'true'), 
(43, 11, 'true'), (43, 19, 'true'), (43, 13, 'true'), 
(44, 11, 'true'), (44, 12, 'true'), (44, 17, 'true'), (44, 22, 'true'), (44, 25, 'true'), (44, 15, 'true'), (44, 26, 'true'), (44, 9, 'true'), 
(45, 11, 'true'), (45, 15, 'true'), 
(46, 11, 'true'), (46, 12, 'true'), (46, 14, 'true'), (46, 13, 'true'), (46, 7, 'true'), 
(47, 11, 'true'), (47, 14, 'true'), (47, 13, 'true'), 
(48, 11, 'true'), (48, 12, 'true'), (48, 14, 'true'), (48, 22, 'true'), (48, 13, 'true'), (48, 25, 'true'), (48, 15, 'true'), 
(49, 11, 'true'), (49, 12, 'true'), (49, 22, 'true'), (49, 21, 'true'), (49, 15, 'true'), (49, 13, 'true'), 
(50, 11, 'true'), (50, 12, 'true'), (50, 20, 'true'), (50, 14, 'true'), (50, 21, 'true'), (50, 15, 'true'), 
(51, 11, 'true'), (51, 12, 'true'), 
(52, 14, 'true'), (52, 13, 'true'), (52, 15, 'true'), (52, 28, 'true'), 
(53, 27, 'true'), (53, 24, 'true'), (53, 7, 'true'), (53, 25, 'true'), (53, 26, 'true'), 10
(54, 11, 'true'), 
(55, 11, 'true'), (55, 12, 'true'), (55, 20, 'true'), (55, 14, 'true'), (55, 13, 'true'),
(56, 11, 'true'), (56, 22, 'true'), (56, 20, 'true'), (56, 14, 'true'), (56, 13, 'true'), (56, 7, 'true'), 
(57, 22, 'true'), (57, 13, 'true'), (57, 7, 'true'), (57, 1, 'true'), 
(58, 11, 'true'), (58, 12, 'true'), (58, 20, 'true'), (58, 13, 'true'), (58, 15, 'true'), 
(59, 11, 'true'), (59, 19, 'true'), (59, 22, 'true'), (59, 21, 'true'), (59, 15, 'true'), (59, 7, 'true'), 
(60, 11, 'true'), (60, 12, 'true'), (60, 19, 'true'), (60, 13, 'true'), (60, 7, 'true'), 
(61, 11, 'true'), (61, 12, 'true'), (61, 15, 'true'), (61, 13, 'true'), 
(62, 11, 'true'), (62, 12, 'true'), 
(63, 25, 'true'), (63, 26, 'true'), (63, 15, 'true'), (63, 9, 'true');
