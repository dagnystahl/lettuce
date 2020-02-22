// content.js

const meatWords = [
    "bacon",
    "beef",
    "bologna",
    "bratwurst",
    "bresaola",
    "butifarra negra",
    "capocollo",
    "caviar",
    "cervelat",
    "chicken",
    "chorizo",
    "coppa",
    "culatello",
    "finocchiona",
    "guanciale",
    "ham",
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
    "pork",
    "poultry",
    "prosciutto",
    "ribs",
    "roe",
    "sausage",
    "salami",
    "saucisson d'arles",
    "soppressata",
    "soujouk",
    "steak",
    "veal",
    "venison",
    "zungenwurst"
];

const vegetableWords = [
    "alfalfa sprouts",
    "apple",
    "apricot",
    "artichoke",
    "asian pear",
    "asparagus",
    "atemoya",
    "avocado",
    "bamboo shoots",
    "banana",
    "bean sprouts",
    "beans",
    "beets",
    "belgian endive",
    "bell peppers",
    "bitter melon",
    "blackberries",
    "blueberries",
    "bok choy",
    "boniato",
    "boysenberries",
    "broccoflower",
    "broccoli",
    "brussels sprouts",
    "cabbage",
    "cactus pear",
    "cantaloupe",
    "carambola",
    "carrots",
    "casaba melon",
    "cauliflower",
    "celery",
    "chayote",
    "cherimoya",
    "cherries",
    "coconuts",
    "collard greens",
    "corn",
    "cranberries",
    "cucumber",
    "dates",
    "dried plums",
    "eggplant",
    "endive",
    "escarole",
    "feijoa",
    "fennel",
    "figs",
    "garlic",
    "gooseberries",
    "grapefruit",
    "grapes",
    "green beans",
    "green onions",
    "greens",
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
    "kumquat",
    "leeks",
    "lemons",
    "lettuce",
    "lima beans",
    "limes",
    "longan",
    "loquat",
    "lychee",
    "madarins",
    "malanga",
    "mandarin oranges",
    "mangos",
    "mulberries",
    "mushrooms",
    "napa",
    "nectarines",
    "okra",
    "onion",
    "oranges",
    "papayas",
    "parsnip",
    "passion fruit",
    "peaches",
    "pears",
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
    "shallots",
    "snow peas",
    "spinach",
    "sprouts",
    "squash",
    "strawberries",
    "string beans",
    "sweet potato",
    "tangelo",
    "tangerines",
    "tomatillo",
    "tomato",
    "turnip",
    "ugli fruit",
    "water chestnuts",
    "watercress",
    "watermelon",
    "waxed beans",
    "yams",
    "yellow squash",
    "yuca",
    "zucchini squash",
]

// String alternation of all meat words.
var meatWordString = "";

meatWords.forEach(element => {
    meatWordString += element +'|';
});
meatWordString = meatWordString.slice(0, -1);

alert(getRandVegWord());

/**
 * Get a random vegetable word.
 */
function getRandVegWord() {
    return vegetableWords[Math.floor(Math.random() * vegetableWords.length)];
}

var meatRegex = new RegExp(`${meatWordString}`, "gi");

document.body.innerHTML = document.body.innerHTML.replace(meatRegex, getRandVegWord());
