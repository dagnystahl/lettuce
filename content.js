// content.js

const meatWords = [
    "raw",
    "butcher",
    "milk",
    "aquarium",
    "firearm",
    "rifle",
    "gun",
    "shoot",
    "pelt",
    "leather",
    "poaching",
    "murder",
    "torture",
    "trap",
    "slaughter",
    "kill",
    "hunt",
    "gelatin",
    "egg",
    "cream",
    "butter",
    "yogurt",
    "cheese",
    "animal",
    "steak",
    "bacon",
    "beef",
    "fish",
    "pork",
    "ham",
    "chicken",
    "bologna",
    "flesh",
    "bratwurst",
    "bresaola",
    "butifarra negra",
    "capocollo",
    "caviar",
    "cervelat",
    "chorizo",
    "coppa",
    "culatello",
    "finocchiona",
    "guanciale",
    "hamburger",
    "hot dog",
    "jamon iberico",
    "kabanos",
    "landjager",
    "lap cheong",
    "lard",
    "lardo",
    "liverwurst",
    "lozino",
    "meat",
    "mortadella",
    "nduja",
    "paio",
    "pancetta",
    "pastrami",
    "pepperoni",
    "poultry",
    "prosciutto",
    "ribs",
    "roe",
    "sausage",
    "salami",
    "saucisson d'arles",
    "soppressata",
    "soujouk",
    "veal",
    "venison",
    "zungenwurst",
    "lamb",
    "mutton",
    "ribeye",
    "filet",
    "filet mignon",
    "foie gras",
    "barbacoa",
    "carne",
    "brisket",
    "ricotta",
    "chevre",
    "mascarpone",
    "mozzarella",
    "burrata",
    "provolone",
    "brie",
    "camembert",
    "havarti",
    "muenster",
    "gorgonzola",
    "cheddar",
    "gouda",
    "gruyere",
    "parmesan",
    "manchego",
    "scallops",
    "shrimp",
    "calamari",
    "crab",
    "lobster",
    "anchovies",
    "honey",
    "corn dog",
    "corndog",
    "cottage cheese",
    "t-bone",
    "charcuterie",
    "wagyu",
    "anchovy",
    "bone",
    "spam",
    "sashimi"

];

const vegetableWords = [
    "raw",
    "farmer",
    "juice",
    "water prison",
    "shovel",
    "boom stick",
    "bubble gun",
    "hug",
    "kelp",
    "fruit leather",
    "rescuing",
    "love",
    "nourish",
    "help",
    "celebrate",
    "pet",
    "garden",
    "agar",
    "applesauce",
    "coconut cream",
    "margerine",
    "coconut milk yogurt",
    "cashew cheese",
    "plant",
    "asian pear",
    "broccoli",
    "asparagus",
    "alfalfa sprout",
    "kumquat",
    "cantaloupe",
    "garlic",
    "apple",
    "apricot",
    "artichoke",
    "atemoya",
    "avocado",
    "bamboo shoot",
    "banana",
    "bean sprout",
    "bean",
    "beet",
    "belgian endive",
    "bell pepper",
    "bitter melon",
    "blackberry",
    "blueberry",
    "bok choy",
    "boniato",
    "boysenberry",
    "broccoflower",
    "brussels sprout",
    "cabbage",
    "cactus pear",
    "carambola",
    "carrot",
    "casaba melon",
    "cauliflower",
    "celery",
    "chayote",
    "cherimoya",
    "cherry",
    "coconut",
    "corn",
    "cranberry",
    "cucumber",
    "dates",
    "dried plum",
    "eggplant",
    "endive",
    "escarole",
    "feijoa",
    "fennel",
    "fig",
    "gooseberry",
    "grapefruit",
    "grape",
    "green bean",
    "green onion",
    "guava",
    "hominy",
    "honeydew melon",
    "horned melon",
    "iceberg lettuce",
    "jerusalem artichoke",
    "jicama",
    "kale",
    "kiwifruit",
    "kohlrabi",
    "leeks",
    "lemon",
    "lettuce",
    "lima bean",
    "limes",
    "longan",
    "loquat",
    "lychee",
    "madarin",
    "malanga",
    "mandarin orange",
    "mangos",
    "mulberry",
    "mushroom",
    "napa",
    "nectarine",
    "okra",
    "onion",
    "orange",
    "papaya",
    "parsnip",
    "passion fruit",
    "peach",
    "pear",
    "peas",
    "peppers",
    "persimmons",
    "pineapple",
    "plantains",
    "plums",
    "pomegranate",
    "potatoes",
    "prickly pear",
    "prunes",
    "pummelo",
    "pumpkin",
    "quince",
    "radicchio",
    "radishes",
    "raisins",
    "raspberries",
    "red cabbage",
    "rhubarb",
    "romaine lettuce",
    "rutabaga",
    "shallot",
    "snow pea",
    "spinach",
    "sprout",
    "squash",
    "strawberry",
    "string bean",
    "sweet potato",
    "tangelo",
    "tangerine",
    "tomatillo",
    "tomato",
    "turnip",
    "ugli fruit",
    "water chestnut",
    "watercress",
    "watermelon",
    "waxed bean",
    "yams",
    "yellow squash",
    "yuca",
    "zucchini squash",
    "tofu",
    "tempeh",
    "leaf",
    "acorn",
    "cilantro",
    "pinecone",
    "kush",
    "shrub",
];
const veggiepics = [
    "https://cdn.britannica.com/s:800x450,c:crop/63/186963-138-AEE87658/vegetables.jpg",
    "https://images.ctfassets.net/wy4h2xf1swlt/asset_23248/0567bc627554de56cd6f8f555f7fc18f/Fruits-and-vegetables-for-mental-health-1.jpg",
    "https://d.newsweek.com/en/full/1524036/produce-farmers-market.jpg",
    "https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/11088.jpg",
    "https://www.washingtonian.com/wp-content/uploads/2019/04/HSt_MarketShot.jpg",
    "https://cdn.vox-cdn.com/thumbor/K7pJk3lLSH60zEbktRL0AQ-jNfA=/0x0:4500x2994/1200x900/filters:focal(1890x1137:2610x1857)/cdn.vox-cdn.com/uploads/chorus_image/image/65219436/6329735393_3a905a118a_o.0.jpg",
    "https://cleanfoodcrush.com/wp-content/uploads/2016/08/Summer-Tomato-Avocado-Salad.jpg",
    "https://3.bp.blogspot.com/-ZJINoHXcexU/Tks0xzU7PGI/AAAAAAAACT4/XBKI34V1lEg/s400/daja+dressing+2+lighter.jpg",
    "https://d1alt1wkdk73qo.cloudfront.net/images/guide/0415e1056b18472ea3a0e3b20464c977/640x478_ac.jpg",
    "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2012/8/28/1346149759217/A-pine-cone-008.jpg?width=300&quality=85&auto=format&fit=max&s=791d03cc5d099498725332b027ab7645",
    "https://moneydotcomvip.files.wordpress.com/2015/10/151013_em_pinecone.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
    "https://www.incimages.com/uploaded_files/image/970x450/getty_621260708_200013331653767347333_403742.jpg",
    "https://assets3.thrillist.com/v1/image/2798273/size/tmg-article_tall;jpeg_quality=20.jpg",
    "https://previews.123rf.com/images/annavee/annavee0911/annavee091100001/5837418-sticks-and-stones.jpg",
    "https://wwhd.files.wordpress.com/2014/04/sticks-a.jpg",
    "https://www.thespruceeats.com/thmb/9gwx_SdIeczh03IOaKb1sL81Tkc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Root-Vegetables-579bd87a3df78c32767b86fb.jpg",
    "https://www.coconutandberries.com/wp-content/uploads/2014/02/DSC_0903.jpg",
    "https://www.welcometothetable.coop/sites/default/files/styles/article_node/public/wp-content/uploads/2011/06/Root_Vegetables1_0.jpg?itok=1vv3sDeY",
    "https://www.growingagreenerworld.com/wp-content/uploads/2014/05/Blueberries1CROP.jpg",
    "https://d1nw62gticy6e9.cloudfront.net/uploads/Ebony_King_Blackberry_Plant-280x280.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2008/7/14/1/gby1702_3-citrus.jpg.rend.hgtvcom.1280.960.suffix/1400943180412.jpeg",
    "https://media.pixcove.com/I/5/9/Apple-Orchard-Drink-Food-Apple-Tree-Apple-Healthy--2683.jpg",
    "https://i.kinja-img.com/gawker-media/image/upload/s--QfBy0oxk--/c_scale,f_auto,fl_progressive,q_80,w_800/ryi0hwusznuzg1oybdeq.jpg",
    "https://cdn.shopify.com/s/files/1/0159/0942/1110/articles/yogacrystals-crystalsforyoga.jpg?v=1566569373",
    "https://i.etsystatic.com/9182597/r/il/754727/1128879412/il_570xN.1128879412_7bg6.jpg",
    "https://cdn-img-3.wanelo.com/p/f78/bb7/336/7704bfc9848e637c9bce969/x354-q80.jpg",
    "https://iowagirleats.com/wp-content/uploads/2012/03/Homemade-Chewy-Granola-Bars-iowagirleats-Featured.jpg",
    "https://static1.squarespace.com/static/566f5fb52399a3b449f78ee7/5d71b5e9432141000131024b/5cf0260e9f4019000164a1ac/1568129033558/Trail+Mix+Granola+Bars.jpg",
    "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155",
    "https://outdoorgearpicks.com/wp-content/uploads/2018/12/Mens-Hiking-Short.jpg",
    "https://www.4freephotos.com/medium/2015/Happy-ducks-5767.jpg",
    "https://external-preview.redd.it/_chQqJrGlKRRxQLhjmlH9WI5XCaq8frSw72TYsxIcb8.jpg?auto=webp&s=66f677585ec83955173ff9aca40a4c7a59456ffc",
    "https://images.squarespace-cdn.com/content/v1/54ff0211e4b0331c7906899c/1562872639356-EK7TV9XUWN1NQ0ZRUXIM/ke17ZwdGBToddI8pDm48kCACiNHwZxNA5EYHoTamDGxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx68V1CVyQuPgr3wrMs_xe2llNzmoKqU4kkq2nC44WTRwoq23Bs_v67cGU2M9TmqPs/happy-cows.jpg",
    "https://theforkedspoon.com/wp-content/uploads/2019/01/bok-choy-4.jpg",
    "https://tipbuzz.com/wp-content/uploads/Bok-Choy-thumbnail.jpg",
    "https://images.pexels.com/photos/299113/pexels-photo-299113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://schoolgardening.rhs.org.uk/getmedia/4437b04a-0ab9-4869-81c2-a0534ed38f07/AS-growing-vegetables-in-schools?width=960&height=640&ext=.jpg",
    "https://offgridworld.com/wp-content/uploads/2018/03/fastest-growing-vegetables-5.jpg",
    "https://www.thespruce.com/thmb/KK4oVWYFYHZ3ItzYYgJY2ESjOZU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/mans-hand-planting-tomato-plant-in-a-bed-735896015-5b357011c9e77c0037cffaf8.jpg",
    "https://s3-wp-lyleprintingandp.netdna-ssl.com/wp-content/uploads/2018/04/26152504/vegetables-1363033_1280.jpg",
    "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/vegetable_garden_planner-tomatoes.jpg?itok=YBhqS0lR",
    "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/satay-sweet-potato-curry_1.jpg",
    "https://images.immediate.co.uk/production/volatile/sites/2/2019/07/OLI-0919-Everyday_AubergineDhansak_32634-1ac4843.jpg?quality=90&crop=24px%2C2746px%2C5437px%2C2339px&resize=960%2C408",
    "https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/06/1517948690-resized-zucchini.jpg",
    "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/279/279359/two-eggplants-on-a-wooden-table.jpg?w=1155&h=1444",
    "https://cdn.morphsuits.co.uk/media/catalog/product/cache/3/image/930x/9df78eab33525d08d6e5fb8d27136e95/m/c/mcgiep.1572875458.jpg",
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561494857-51n2BY7jL96L.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/halloween-fruits-friends-run-1571150729.jpg?resize=480:*",
    "https://api.time.com/wp-content/uploads/2017/01/healthy-and-filling-cauliflower-rev.jpg",
    "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/01/precutVeggies-530494050-770x553-650x428.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg",
    "https://storage.ning.com/topology/rest/1.0/file/get/2955675254?profile=original",
    "https://www.justataste.com/wp-content/uploads/2018/02/best-fruit-salad-honey-lime-dressing.jpg",
    "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325550/all-fruit-contains-sugar-but-generally-less-that-sweetened-food.jpg?w=1155&h=1541",
    "https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/75162/bc19f795-93ff-4e94-bfc8-71363e677d35.jpg",
    "https://www.gannett-cdn.com/presto/2020/01/23/USAT/ff2e3445-a247-456a-a551-c54fa577b522-AP_California_Monarch_Butterflies.JPG",
    "https://natgeo.imgix.net/subject-monarchbutterfly.jpg?auto=compress,format&w=1920&h=960&fit=crop",
    "https://www.rei.com/media/product/139714",
    "https://1mple1hxjby2dz9z41kz5j71-wpengine.netdna-ssl.com/wp-content/uploads/2019/01/Non-Dairy-Milk-S.Ferreira-2-1030x773.jpg",
    "https://grist.files.wordpress.com/2017/01/plant-milks-shutterstock-c.jpg?w=1024&h=576&crop=1",
    "https://images.agoramedia.com/everydayhealth/gcms/All-About-Bananas-Nutrition-Facts-Health-Benefits-Recipes-and-More-RM-722x406.jpg",
    "https://earthporm.com/wp-content/uploads/2014/02/Happy-Pigs-Swimming-Are-Already-Bizarre-But-When-You-Hear-How-They-Got-There...-WOW1.jpg",
    "https://www.irelandbeforeyoudie.com/wp-content/uploads/2015/03/happy-pigs.jpg",
    "https://lh3.googleusercontent.com/proxy/ZZI_W9Hair6amGI4bIMRJn_HfJcdyeTQLFjSaCczHXeKnCdIT4YilxfFnNm4BYmyr9qLbhJju9i5ecDhNt4aTbcV47rWGp4kv5qcx9l20nqUsA",
    "https://cdn.shoplightspeed.com/shops/612892/files/12565379/800x1024x1/incense-holder-shapes.jpg",
    "https://cdn.mindful.org/Meditation_Goleman.jpg?q=80&fm=jpg&fit=crop&w=1400&h=875",
    "https://tg-cdn.azureedge.net/sites/default/files/2019-10/meadow-3375052_1920-%281%29.jpg",
    "https://www.snowsfarm.com/wp-content/uploads/2018/02/hay-mulch-hay-bales.jpg",
    "https://pics.me.me/beep-beep-lettuce-58531716.png",
    "https://i.pinimg.com/originals/0b/d0/93/0bd093d9bbd96cfe0ce13b61985af35a.jpg"
]

var replacementMap = {}
var counter = 0;

meatWords.forEach(element =>{
    replacementMap[element] = vegetableWords[counter];
    counter++;
});

// String alternation of all meat words.
var meatWordString = "";

meatWords.forEach(element => {
    meatWordString += element +'|';
});
meatWordString = meatWordString.slice(0, -1);

var domImgs = document.querySelectorAll('img');
var imageIndex = 0;
for (var img of domImgs) {
    img.id = `vegwillreplaceyou${imageIndex}`;
    chrome.runtime.sendMessage({"image": img.src, "imageNodeIndex": imageIndex});
    imageIndex++;
}

chrome.runtime.onMessage.addListener(function(msg) {
    var classString = "";
    for(const classStr in msg.imageTags.images[0].classifiers[0].classes) {
        classString +=  msg.imageTags.images[0].classifiers[0].classes[classStr].class;
    }
    replaceIfMeat(classString, msg.imageNodeIndex);
});

function replaceIfMeat(classStr, imgIndex) {
    if (classStr.match(meatWordString)) {
        document.getElementById(`vegwillreplaceyou${imgIndex}`).src =  veggiepics[Math.floor(Math.random()* veggiepics.length)];
    }
}

var replacementMap = {}
var counter = 0;

meatWords.forEach(element =>{
    replacementMap[element] = vegetableWords[counter];
    counter++;
});

/**
 * Get a random vegetable word.
 */
function getRandVegWord() {
    return vegetableWords[Math.floor(Math.random() * vegetableWords.length)];
}

function getReplacementString(input) {
    return replacementMap[input.toLowerCase()];
}

var meatRegex = new RegExp(Object.keys(replacementMap).join('|'), 'igs');

var elementsInBody = [...document.body.getElementsByTagName('*')];

/**
 * Replace all meat words with vegetable words in text elements.
 */
document.title = document.title.replace(meatRegex, getReplacementString)
function findAndReplaceMeatWords(){
    elementsInBody.forEach(element =>{
        element.childNodes.forEach(child =>{
            if(child.nodeType === 3){
                child.nodeValue = child.nodeValue.replace(meatRegex, getReplacementString);
            }
        });
    });
}
  
window.onload = findAndReplaceMeatWords();
