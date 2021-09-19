/* Simple Hello World in Node.js */
var fs = require("fs");
// var fileContent = "hello";

let cl = [
    {
        "country": "Aruba",
        "languages": [
            "Dutch",
            "English",
            "Papiamento",
            "Spanish"
        ]
    },
    {
        "country": "Afghanistan",
        "languages": [
            "Balochi",
            "Dari",
            "Pashto",
            "Turkmenian",
            "Uzbek"
        ]
    },
    {
        "country": "Angola",
        "languages": [
            "Ambo",
            "Chokwe",
            "Kongo",
            "Luchazi",
            "Luimbe-nganguela",
            "Luvale",
            "Mbundu",
            "Nyaneka-nkhumbi",
            "Ovimbundu"
        ]
    },
    {
        "country": "Anguilla",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Albania",
        "languages": [
            "Albaniana",
            "Greek",
            "Macedonian"
        ]
    },
    {
        "country": "Andorra",
        "languages": [
            "Catalan",
            "French",
            "Portuguese",
            "Spanish"
        ]
    },
    {
        "country": "Netherlands Antilles",
        "languages": [
            "Dutch",
            "English",
            "Papiamento"
        ]
    },
    {
        "country": "United Arab Emirates",
        "languages": [
            "Arabic",
            "Hindi"
        ]
    },
    {
        "country": "Argentina",
        "languages": [
            "Indian Languages",
            "Italian",
            "Spanish"
        ]
    },
    {
        "country": "Armenia",
        "languages": [
            "Armenian",
            "Azerbaijani"
        ]
    },
    {
        "country": "American Samoa",
        "languages": [
            "English",
            "Samoan",
            "Tongan"
        ]
    },
    {
        "country": "Antigua and Barbuda",
        "languages": [
            "Creole English",
            "English"
        ]
    },
    {
        "country": "Australia",
        "languages": [
            "Arabic",
            "Canton Chinese",
            "English",
            "German",
            "Greek",
            "Italian",
            "Serbo-Croatian",
            "Vietnamese"
        ]
    },
    {
        "country": "Austria",
        "languages": [
            "Czech",
            "German",
            "Hungarian",
            "Polish",
            "Romanian",
            "Serbo-Croatian",
            "Slovene",
            "Turkish"
        ]
    },
    {
        "country": "Azerbaijan",
        "languages": [
            "Armenian",
            "Azerbaijani",
            "Lezgian",
            "Russian"
        ]
    },
    {
        "country": "Burundi",
        "languages": [
            "French",
            "Kirundi",
            "Swahili"
        ]
    },
    {
        "country": "Belgium",
        "languages": [
            "Arabic",
            "Dutch",
            "French",
            "German",
            "Italian",
            "Turkish"
        ]
    },
    {
        "country": "Benin",
        "languages": [
            "Adja",
            "Aizo",
            "Bariba",
            "Fon",
            "Ful",
            "Joruba",
            "Somba"
        ]
    },
    {
        "country": "Burkina Faso",
        "languages": [
            "Busansi",
            "Dagara",
            "Dyula",
            "Ful",
            "Gurma",
            "Mossi"
        ]
    },
    {
        "country": "Bangladesh",
        "languages": [
            "Bengali",
            "Chakma",
            "Garo",
            "Khasi",
            "Marma",
            "Santhali",
            "Tripuri"
        ]
    },
    {
        "country": "Bulgaria",
        "languages": [
            "Bulgariana",
            "Macedonian",
            "Romani",
            "Turkish"
        ]
    },
    {
        "country": "Bahrain",
        "languages": [
            "Arabic",
            "English"
        ]
    },
    {
        "country": "Bahamas",
        "languages": [
            "Creole English",
            "Creole French"
        ]
    },
    {
        "country": "Bosnia and Herzegovina",
        "languages": [
            "Bosnian"
        ]
    },
    {
        "country": "Belarus",
        "languages": [
            "Belorussian",
            "Polish",
            "Russian",
            "Ukrainian"
        ]
    },
    {
        "country": "Belize",
        "languages": [
            "English",
            "Garifuna",
            "Maya Languages",
            "Spanish"
        ]
    },
    {
        "country": "Bermuda",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Bolivia",
        "languages": [
            "Aimar√°",
            "Guaran√≠",
            "Ket¬öua",
            "Spanish"
        ]
    },
    {
        "country": "Brazil",
        "languages": [
            "German",
            "Indian Languages",
            "Italian",
            "Japanese",
            "Portuguese"
        ]
    },
    {
        "country": "Barbados",
        "languages": [
            "Bajan",
            "English"
        ]
    },
    {
        "country": "Brunei",
        "languages": [
            "Chinese",
            "English",
            "Malay",
            "Malay-English"
        ]
    },
    {
        "country": "Bhutan",
        "languages": [
            "Asami",
            "Dzongkha",
            "Nepali"
        ]
    },
    {
        "country": "Botswana",
        "languages": [
            "Khoekhoe",
            "Ndebele",
            "San",
            "Shona",
            "Tswana"
        ]
    },
    {
        "country": "Central African Republic",
        "languages": [
            "Banda",
            "Gbaya",
            "Mandjia",
            "Mbum",
            "Ngbaka",
            "Sara"
        ]
    },
    {
        "country": "Canada",
        "languages": [
            "Chinese",
            "Dutch",
            "English",
            "Eskimo Languages",
            "French",
            "German",
            "Italian",
            "Polish",
            "Portuguese",
            "Punjabi",
            "Spanish",
            "Ukrainian"
        ]
    },
    {
        "country": "Cocos (Keeling) Islands",
        "languages": [
            "English",
            "Malay"
        ]
    },
    {
        "country": "Switzerland",
        "languages": [
            "French",
            "German",
            "Italian",
            "Romansh"
        ]
    },
    {
        "country": "Chile",
        "languages": [
            "Aimar√°",
            "Araucan",
            "Rapa nui",
            "Spanish"
        ]
    },
    {
        "country": "China",
        "languages": [
            "Chinese",
            "Dong",
            "Hui",
            "Mant¬öu",
            "Miao",
            "Mongolian",
            "Puyi",
            "Tibetan",
            "Tujia",
            "Uighur",
            "Yi",
            "Zhuang"
        ]
    },
    {
        "country": "Ivory Coast",
        "languages": [
            "Akan",
            "Gur",
            "Kru",
            "Malinke",
            "[South]Mande"
        ]
    },
    {
        "country": "Cameroon",
        "languages": [
            "Bamileke-bamum",
            "Duala",
            "Fang",
            "Ful",
            "Maka",
            "Mandara",
            "Masana",
            "Tikar"
        ]
    },
    {
        "country": "Congo, The Democratic Republic of the",
        "languages": [
            "Lingala",
            "Kikongo",
            "Swahili",
            "Tshiluba"
        ]
    },
    {
        "country": "Congo",
        "languages": [
            "Kongo",
            "Mbete",
            "Mboshi",
            "Punu",
            "Sango",
            "Teke"
        ]
    },
    {
        "country": "Cook Islands",
        "languages": [
            "English",
            "Maori"
        ]
    },
    {
        "country": "Colombia",
        "languages": [
            "Arawakan",
            "Caribbean",
            "Chibcha",
            "Creole English",
            "Spanish"
        ]
    },
    {
        "country": "Comoros",
        "languages": [
            "Comorian",
            "Comorian-Arabic",
            "Comorian-French",
            "Comorian-madagassi",
            "Comorian-Swahili"
        ]
    },
    {
        "country": "Cape Verde",
        "languages": [
            "Crioulo",
            "Portuguese"
        ]
    },
    {
        "country": "Costa Rica",
        "languages": [
            "Chibcha",
            "Chinese",
            "Creole English",
            "Spanish"
        ]
    },
    {
        "country": "Cuba",
        "languages": [
            "Spanish"
        ]
    },
    {
        "country": "Christmas Island",
        "languages": [
            "Chinese",
            "English"
        ]
    },
    {
        "country": "Cayman Islands",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Cyprus",
        "languages": [
            "Greek",
            "Turkish"
        ]
    },
    {
        "country": "Czech Republic",
        "languages": [
            "Czech",
            "German",
            "Hungarian",
            "Moravian",
            "Polish",
            "Romani",
            "Silesiana",
            "Slovak"
        ]
    },
    {
        "country": "Germany",
        "languages": [
            "German",
            "Greek",
            "Italian",
            "Polish",
            "Southern Slavic Languages",
            "Turkish"
        ]
    },
    {
        "country": "Djibouti",
        "languages": [
            "Afar",
            "Arabic",
            "Somali"
        ]
    },
    {
        "country": "Dominica",
        "languages": [
            "Creole English",
            "Creole French"
        ]
    },
    {
        "country": "Denmark",
        "languages": [
            "Arabic",
            "Danish",
            "English",
            "German",
            "Norwegian",
            "Swedish",
            "Turkish"
        ]
    },
    {
        "country": "Dominican Republic",
        "languages": [
            "Creole French",
            "Spanish"
        ]
    },
    {
        "country": "Algeria",
        "languages": [
            "Arabic",
            "Berberi"
        ]
    },
    {
        "country": "Ecuador",
        "languages": [
            "Ket¬öua",
            "Spanish"
        ]
    },
    {
        "country": "Egypt",
        "languages": [
            "Arabic",
            "Sinaberberi"
        ]
    },
    {
        "country": "Eritrea",
        "languages": [
            "Afar",
            "Bilin",
            "Hadareb",
            "Saho",
            "Tigre",
            "Tigrigna"
        ]
    },
    {
        "country": "Western Sahara",
        "languages": [
            "Arabic"
        ]
    },
    {
        "country": "Spain",
        "languages": [
            "Basque",
            "Catalan",
            "Galecian",
            "Spanish"
        ]
    },
    {
        "country": "Estonia",
        "languages": [
            "Belorussian",
            "Estonian",
            "Finnish",
            "Russian",
            "Ukrainian"
        ]
    },
    {
        "country": "Ethiopia",
        "languages": [
            "Amharic",
            "Gurage",
            "Oromo",
            "Sidamo",
            "Somali",
            "Tigrigna",
            "Walaita"
        ]
    },
    {
        "country": "Finland",
        "languages": [
            "Estonian",
            "Finnish",
            "Russian",
            "Saame",
            "Swedish"
        ]
    },
    {
        "country": "Fiji Islands",
        "languages": [
            "Fijian",
            "Hindi"
        ]
    },
    {
        "country": "Falkland Islands",
        "languages": [
            "English"
        ]
    },
    {
        "country": "France",
        "languages": [
            "Arabic",
            "French",
            "Italian",
            "Portuguese",
            "Spanish",
            "Turkish"
        ]
    },
    {
        "country": "Faroe Islands",
        "languages": [
            "Danish",
            "Faroese"
        ]
    },
    {
        "country": "Micronesia, Federated States of",
        "languages": [
            "Kosrean",
            "Mortlock",
            "Pohnpei",
            "Trukese",
            "Wolea",
            "Yap"
        ]
    },
    {
        "country": "Gabon",
        "languages": [
            "Fang",
            "Mbete",
            "Mpongwe",
            "Punu-sira-nzebi"
        ]
    },
    {
        "country": "United Kingdom",
        "languages": [
            "English",
            "Gaeli",
            "Kymri"
        ]
    },
    {
        "country": "Georgia",
        "languages": [
            "Abhyasi",
            "Armenian",
            "Azerbaijani",
            "Georgiana",
            "Osseetti",
            "Russian"
        ]
    },
    {
        "country": "Ghana",
        "languages": [
            "Akan",
            "Ewe",
            "Ga-adangme",
            "Gurma",
            "Joruba",
            "Mossi"
        ]
    },
    {
        "country": "Gibraltar",
        "languages": [
            "Arabic",
            "English"
        ]
    },
    {
        "country": "Guinea",
        "languages": [
            "Ful",
            "Kissi",
            "Kpelle",
            "Loma",
            "Malinke",
            "Susu",
            "Yalunka"
        ]
    },
    {
        "country": "Guadeloupe",
        "languages": [
            "Creole French",
            "French"
        ]
    },
    {
        "country": "Gambia",
        "languages": [
            "Diola",
            "Ful",
            "Malinke",
            "Soninke",
            "Wolof"
        ]
    },
    {
        "country": "Guinea-Bissau",
        "languages": [
            "Balante",
            "Crioulo",
            "Ful",
            "Malinke",
            "Mandyako",
            "Portuguese"
        ]
    },
    {
        "country": "Equatorial Guinea",
        "languages": [
            "Bubi",
            "Fang"
        ]
    },
    {
        "country": "Greece",
        "languages": [
            "Greek",
            "Turkish"
        ]
    },
    {
        "country": "Grenada",
        "languages": [
            "Creole English"
        ]
    },
    {
        "country": "Greenland",
        "languages": [
            "Danish",
            "Greenlandic"
        ]
    },
    {
        "country": "Guatemala",
        "languages": [
            "Cakchiquel",
            "Kekch√≠",
            "Mam",
            "Quich√©",
            "Spanish"
        ]
    },
    {
        "country": "French Guiana",
        "languages": [
            "Creole French",
            "Indian Languages"
        ]
    },
    {
        "country": "Guam",
        "languages": [
            "Chamorro",
            "English",
            "Japanese",
            "Korean",
            "Philippene Languages"
        ]
    },
    {
        "country": "Guyana",
        "languages": [
            "Arawakan",
            "Caribbean",
            "Creole English"
        ]
    },
    {
        "country": "Hong Kong",
        "languages": [
            "Canton Chinese",
            "Chiu chau",
            "English",
            "Fukien",
            "Hakka"
        ]
    },
    {
        "country": "Honduras",
        "languages": [
            "Creole English",
            "Garifuna",
            "Miskito",
            "Spanish"
        ]
    },
    {
        "country": "Croatia",
        "languages": [
            "Serbo-Croatian",
            "Slovene"
        ]
    },
    {
        "country": "Haiti",
        "languages": [
            "French",
            "Haiti Creole"
        ]
    },
    {
        "country": "Hungary",
        "languages": [
            "German",
            "Hungarian",
            "Romani",
            "Romanian",
            "Serbo-Croatian",
            "Slovak"
        ]
    },
    {
        "country": "Indonesia",
        "languages": [
            "Bahasa",
            "Bali",
            "Banja",
            "Batakki",
            "Bugi",
            "Javanese",
            "Madura",
            "Malay",
            "Minangkabau",
            "Sunda"
        ]
    },
    {
        "country": "India",
        "languages": [
            "Asami",
            "Bengali",
            "Gujarati",
            "Hindi",
            "Kannada",
            "Malayalam",
            "Marathi",
            "Odia",
            "Punjabi",
            "Tamil",
            "Telugu",
            "Urdu",
            "Sanskrit",
            "English",
            "Konkani",
            "Nepali",
            "Bodo",
            "Kashmiri",
            "Maithili",
            "Santali",
            "Sindhi"
        ]
    },
    {
        "country": "Ireland",
        "languages": [
            "English",
            "Irish"
        ]
    },
    {
        "country": "Iran",
        "languages": [
            "Arabic",
            "Azerbaijani",
            "Bakhtyari",
            "Balochi",
            "Gilaki",
            "Kurdish",
            "Luri",
            "Mazandarani",
            "Persian",
            "Turkmenian"
        ]
    },
    {
        "country": "Iraq",
        "languages": [
            "Arabic",
            "Assyrian",
            "Azerbaijani",
            "Kurdish",
            "Persian"
        ]
    },
    {
        "country": "Iceland",
        "languages": [
            "English",
            "Icelandic"
        ]
    },
    {
        "country": "Israel",
        "languages": [
            "Arabic",
            "Hebrew",
            "Russian"
        ]
    },
    {
        "country": "Italy",
        "languages": [
            "Albaniana",
            "French",
            "Friuli",
            "German",
            "Italian",
            "Romani",
            "Sardinian",
            "Slovene"
        ]
    },
    {
        "country": "Jamaica",
        "languages": [
            "Creole English",
            "Hindi"
        ]
    },
    {
        "country": "Jordan",
        "languages": [
            "Arabic",
            "Armenian",
            "Circassian"
        ]
    },
    {
        "country": "Japan",
        "languages": [
            "Ainu",
            "Chinese",
            "English",
            "Japanese",
            "Korean",
            "Philippene Languages"
        ]
    },
    {
        "country": "Kazakhstan",
        "languages": [
            "German",
            "Kazakh",
            "Russian",
            "Tatar",
            "Ukrainian",
            "Uzbek"
        ]
    },
    {
        "country": "Kenya",
        "languages": [
            "Gusii",
            "Kalenjin",
            "Kamba",
            "Kikuyu",
            "Luhya",
            "Luo",
            "Masai",
            "Meru",
            "Nyika",
            "Turkana"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "languages": [
            "Kazakh",
            "Kirgiz",
            "Russian",
            "Tadzhik",
            "Tatar",
            "Ukrainian",
            "Uzbek"
        ]
    },
    {
        "country": "Cambodia",
        "languages": [
            "Chinese",
            "Khmer",
            "T¬öam",
            "Vietnamese"
        ]
    },
    {
        "country": "Kiribati",
        "languages": [
            "Kiribati",
            "Tuvalu"
        ]
    },
    {
        "country": "Saint Kitts and Nevis",
        "languages": [
            "Creole English",
            "English"
        ]
    },
    {
        "country": "South Korea",
        "languages": [
            "Chinese",
            "Korean"
        ]
    },
    {
        "country": "Kuwait",
        "languages": [
            "Arabic",
            "English"
        ]
    },
    {
        "country": "Laos",
        "languages": [
            "Lao",
            "Lao-Soung",
            "Mon-khmer",
            "Thai"
        ]
    },
    {
        "country": "Lebanon",
        "languages": [
            "Arabic",
            "Armenian",
            "French"
        ]
    },
    {
        "country": "Liberia",
        "languages": [
            "Bassa",
            "Gio",
            "Grebo",
            "Kpelle",
            "Kru",
            "Loma",
            "Malinke",
            "Mano"
        ]
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "languages": [
            "Arabic",
            "Berberi"
        ]
    },
    {
        "country": "Saint Lucia",
        "languages": [
            "Creole French",
            "English"
        ]
    },
    {
        "country": "Liechtenstein",
        "languages": [
            "German",
            "Italian",
            "Turkish"
        ]
    },
    {
        "country": "Sri Lanka",
        "languages": [
            "Mixed Languages",
            "Singali",
            "Tamil"
        ]
    },
    {
        "country": "Lesotho",
        "languages": [
            "English",
            "Sotho",
            "Zulu"
        ]
    },
    {
        "country": "Lithuania",
        "languages": [
            "Belorussian",
            "Lithuanian",
            "Polish",
            "Russian",
            "Ukrainian"
        ]
    },
    {
        "country": "Luxembourg",
        "languages": [
            "French",
            "German",
            "Italian",
            "Luxembourgish",
            "Portuguese"
        ]
    },
    {
        "country": "Latvia",
        "languages": [
            "Belorussian",
            "Latvian",
            "Lithuanian",
            "Polish",
            "Russian",
            "Ukrainian"
        ]
    },
    {
        "country": "Macao",
        "languages": [
            "Canton Chinese",
            "English",
            "Mandarin Chinese",
            "Portuguese"
        ]
    },
    {
        "country": "Morocco",
        "languages": [
            "Arabic",
            "Berberi"
        ]
    },
    {
        "country": "Monaco",
        "languages": [
            "English",
            "French",
            "Italian",
            "Monegasque"
        ]
    },
    {
        "country": "Moldova",
        "languages": [
            "Bulgariana",
            "Gagauzi",
            "Romanian",
            "Russian",
            "Ukrainian"
        ]
    },
    {
        "country": "Madagascar",
        "languages": [
            "French",
            "Malagasy"
        ]
    },
    {
        "country": "Maldives",
        "languages": [
            "Dhivehi",
            "English"
        ]
    },
    {
        "country": "Mexico",
        "languages": [
            "Mixtec",
            "N√°huatl",
            "Otom√≠",
            "Spanish",
            "Yucatec",
            "Zapotec"
        ]
    },
    {
        "country": "Marshall Islands",
        "languages": [
            "English",
            "Marshallese"
        ]
    },
    {
        "country": "Macedonia",
        "languages": [
            "Albaniana",
            "Macedonian",
            "Romani",
            "Serbo-Croatian",
            "Turkish"
        ]
    },
    {
        "country": "Mali",
        "languages": [
            "Bambara",
            "Ful",
            "Senufo and Minianka",
            "Songhai",
            "Soninke",
            "Tamashek"
        ]
    },
    {
        "country": "Malta",
        "languages": [
            "English",
            "Maltese"
        ]
    },
    {
        "country": "Myanmar",
        "languages": [
            "Burmese",
            "Chin",
            "Kachin",
            "Karen",
            "Kayah",
            "Mon",
            "Rakhine",
            "Shan"
        ]
    },
    {
        "country": "Mongolia",
        "languages": [
            "Bajad",
            "Buryat",
            "Dariganga",
            "Dorbet",
            "Kazakh",
            "Mongolian"
        ]
    },
    {
        "country": "Northern Mariana Islands",
        "languages": [
            "Carolinian",
            "Chamorro",
            "Chinese",
            "English",
            "Korean",
            "Philippene Languages"
        ]
    },
    {
        "country": "Mozambique",
        "languages": [
            "Chuabo",
            "Lomwe",
            "Makua",
            "Marendje",
            "Nyanja",
            "Ronga",
            "Sena",
            "Shona",
            "Tsonga",
            "Tswa"
        ]
    },
    {
        "country": "Mauritania",
        "languages": [
            "Ful",
            "Hassaniya",
            "Soninke",
            "Tukulor",
            "Wolof",
            "Zenaga"
        ]
    },
    {
        "country": "Montserrat",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Martinique",
        "languages": [
            "Creole French",
            "French"
        ]
    },
    {
        "country": "Mauritius",
        "languages": [
            "Bhojpuri",
            "Creole French",
            "French",
            "Hindi",
            "Marathi",
            "Tamil"
        ]
    },
    {
        "country": "Malawi",
        "languages": [
            "Chichewa",
            "Lomwe",
            "Ngoni",
            "Yao"
        ]
    },
    {
        "country": "Malaysia",
        "languages": [
            "Chinese",
            "Dusun",
            "English",
            "Iban",
            "Malay",
            "Tamil"
        ]
    },
    {
        "country": "Mayotte",
        "languages": [
            "French",
            "Mahor√©",
            "Malagasy"
        ]
    },
    {
        "country": "Namibia",
        "languages": [
            "Afrikaans",
            "Caprivi",
            "German",
            "Herero",
            "Kavango",
            "Nama",
            "Ovambo",
            "San"
        ]
    },
    {
        "country": "New Caledonia",
        "languages": [
            "French",
            "Malenasian Languages",
            "Polynesian Languages"
        ]
    },
    {
        "country": "Niger",
        "languages": [
            "Ful",
            "Hausa",
            "Kanuri",
            "Songhai-zerma",
            "Tamashek"
        ]
    },
    {
        "country": "Norfolk Island",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Nigeria",
        "languages": [
            "Bura",
            "Edo",
            "Ful",
            "Hausa",
            "Ibibio",
            "Ibo",
            "Ijo",
            "Joruba",
            "Kanuri",
            "Tiv"
        ]
    },
    {
        "country": "Nicaragua",
        "languages": [
            "Creole English",
            "Miskito",
            "Spanish",
            "Sumo"
        ]
    },
    {
        "country": "Niue",
        "languages": [
            "English",
            "Niue"
        ]
    },
    {
        "country": "Netherlands",
        "languages": [
            "Arabic",
            "Dutch",
            "Fries",
            "Turkish"
        ]
    },
    {
        "country": "Norway",
        "languages": [
            "Danish",
            "English",
            "Norwegian",
            "Saame",
            "Swedish"
        ]
    },
    {
        "country": "Nepal",
        "languages": [
            "Bhojpuri",
            "Hindi",
            "Maithili",
            "Nepali",
            "Newari",
            "Tamang",
            "Tharu"
        ]
    },
    {
        "country": "Nauru",
        "languages": [
            "Chinese",
            "English",
            "Kiribati",
            "Nauru",
            "Tuvalu"
        ]
    },
    {
        "country": "New Zealand",
        "languages": [
            "English",
            "Maori"
        ]
    },
    {
        "country": "Oman",
        "languages": [
            "Arabic",
            "Balochi"
        ]
    },
    {
        "country": "Pakistan",
        "languages": [
            "Balochi",
            "Brahui",
            "Hindko",
            "Pashto",
            "Punjabi",
            "Saraiki",
            "Sindhi",
            "Urdu"
        ]
    },
    {
        "country": "Panama",
        "languages": [
            "Arabic",
            "Creole English",
            "Cuna",
            "Embera",
            "Guaym√≠",
            "Spanish"
        ]
    },
    {
        "country": "Pitcairn",
        "languages": [
            "Pitcairnese"
        ]
    },
    {
        "country": "Peru",
        "languages": [
            "Aimar√°",
            "Ket¬öua",
            "Spanish"
        ]
    },
    {
        "country": "Philippines",
        "languages": [
            "Bicol",
            "Cebuano",
            "Hiligaynon",
            "Ilocano",
            "Maguindanao",
            "Maranao",
            "Pampango",
            "Pangasinan",
            "Pilipino",
            "Waray-waray"
        ]
    },
    {
        "country": "Palau",
        "languages": [
            "Chinese",
            "English",
            "Palau",
            "Philippene Languages"
        ]
    },
    {
        "country": "Papua New Guinea",
        "languages": [
            "Malenasian Languages",
            "Papuan Languages"
        ]
    },
    {
        "country": "Poland",
        "languages": [
            "Belorussian",
            "German",
            "Polish",
            "Ukrainian"
        ]
    },
    {
        "country": "Puerto Rico",
        "languages": [
            "English",
            "Spanish"
        ]
    },
    {
        "country": "North Korea",
        "languages": [
            "Chinese",
            "Korean"
        ]
    },
    {
        "country": "Portugal",
        "languages": [
            "Portuguese"
        ]
    },
    {
        "country": "Paraguay",
        "languages": [
            "German",
            "Guaran√≠",
            "Portuguese",
            "Spanish"
        ]
    },
    {
        "country": "Palestine",
        "languages": [
            "Arabic",
            "Hebrew"
        ]
    },
    {
        "country": "French Polynesia",
        "languages": [
            "Chinese",
            "French",
            "Tahitian"
        ]
    },
    {
        "country": "Qatar",
        "languages": [
            "Arabic",
            "Urdu"
        ]
    },
    {
        "country": "Reunion",
        "languages": [
            "Chinese",
            "Comorian",
            "Creole French",
            "Malagasy",
            "Tamil"
        ]
    },
    {
        "country": "Romania",
        "languages": [
            "German",
            "Hungarian",
            "Romani",
            "Romanian",
            "Serbo-Croatian",
            "Ukrainian"
        ]
    },
    {
        "country": "Russian Federation",
        "languages": [
            "Avarian",
            "Bashkir",
            "Belorussian",
            "Chechen",
            "Chuvash",
            "Kazakh",
            "Mari",
            "Mordva",
            "Russian",
            "Tatar",
            "Udmur",
            "Ukrainian"
        ]
    },
    {
        "country": "Rwanda",
        "languages": [
            "French",
            "Rwanda"
        ]
    },
    {
        "country": "Saudi Arabia",
        "languages": [
            "Arabic"
        ]
    },
    {
        "country": "Sudan",
        "languages": [
            "Arabic",
            "Bari",
            "Beja",
            "Chilluk",
            "Dinka",
            "Fur",
            "Lotuko",
            "Nubian Languages",
            "Nuer",
            "Zande"
        ]
    },
    {
        "country": "Senegal",
        "languages": [
            "Diola",
            "Ful",
            "Malinke",
            "Serer",
            "Soninke",
            "Wolof"
        ]
    },
    {
        "country": "Serbia",
        "languages": [
            "Serbian",
            "Hungarian",
            "Slovak",
            "Romanian",
            "Croatian",
            "Rusyn", 
            "Albanian",
            "Bulgarian", 
            "English"
        ]
    },
    {
        "country": "Singapore",
        "languages": [
            "Chinese",
            "Malay",
            "Tamil"
        ]
    },
    {
        "country": "Saint Helena",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Svalbard and Jan Mayen",
        "languages": [
            "Norwegian",
            "Russian"
        ]
    },
    {
        "country": "Solomon Islands",
        "languages": [
            "Malenasian Languages",
            "Papuan Languages",
            "Polynesian Languages"
        ]
    },
    {
        "country": "Sierra Leone",
        "languages": [
            "Bullom-sherbro",
            "Ful",
            "Kono-vai",
            "Kuranko",
            "Limba",
            "Mende",
            "Temne",
            "Yalunka"
        ]
    },
    {
        "country": "El Salvador",
        "languages": [
            "Nahua",
            "Spanish"
        ]
    },
    {
        "country": "San Marino",
        "languages": [
            "Italian"
        ]
    },
    {
        "country": "Somalia",
        "languages": [
            "Arabic",
            "Somali"
        ]
    },
    {
        "country": "Saint Pierre and Miquelon",
        "languages": [
            "French"
        ]
    },
    {
        "country": "Sao Tome and Principe",
        "languages": [
            "Crioulo",
            "French"
        ]
    },
    {
        "country": "Suriname",
        "languages": [
            "Hindi",
            "Sranantonga"
        ]
    },
    {
        "country": "Slovakia",
        "languages": [
            "Czech and Moravian",
            "Hungarian",
            "Romani",
            "Slovak",
            "Ukrainian and Russian"
        ]
    },
    {
        "country": "Slovenia",
        "languages": [
            "Hungarian",
            "Serbo-Croatian",
            "Slovene"
        ]
    },
    {
        "country": "Sweden",
        "languages": [
            "Arabic",
            "Finnish",
            "Norwegian",
            "Southern Slavic Languages",
            "Spanish",
            "Swedish"
        ]
    },
    {
        "country": "Swaziland",
        "languages": [
            "Swazi",
            "Zulu"
        ]
    },
    {
        "country": "Seychelles",
        "languages": [
            "English",
            "French",
            "Seselwa"
        ]
    },
    {
        "country": "Syria",
        "languages": [
            "Arabic",
            "Kurdish"
        ]
    },
    {
        "country": "Turks and Caicos Islands",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Chad",
        "languages": [
            "Arabic",
            "Gorane",
            "Hadjarai",
            "Kanem-bornu",
            "Mayo-kebbi",
            "Ouaddai",
            "Sara",
            "Tandjile"
        ]
    },
    {
        "country": "Togo",
        "languages": [
            "Ane",
            "Ewe",
            "Gurma",
            "Kaby√©",
            "Kotokoli",
            "Moba",
            "Naudemba",
            "Watyi"
        ]
    },
    {
        "country": "Thailand",
        "languages": [
            "Chinese",
            "Khmer",
            "Kuy",
            "Lao",
            "Malay",
            "Thai"
        ]
    },
    {
        "country": "Tajikistan",
        "languages": [
            "Russian",
            "Tadzhik",
            "Uzbek"
        ]
    },
    {
        "country": "Tokelau",
        "languages": [
            "English",
            "Tokelau"
        ]
    },
    {
        "country": "Turkmenistan",
        "languages": [
            "Kazakh",
            "Russian",
            "Turkmenian",
            "Uzbek"
        ]
    },
    {
        "country": "East Timor",
        "languages": [
            "Portuguese",
            "Sunda"
        ]
    },
    {
        "country": "Tonga",
        "languages": [
            "English",
            "Tongan"
        ]
    },
    {
        "country": "Trinidad and Tobago",
        "languages": [
            "Creole English",
            "English",
            "Hindi"
        ]
    },
    {
        "country": "Tunisia",
        "languages": [
            "Arabic",
            "Arabic-French",
            "Arabic-French-English"
        ]
    },
    {
        "country": "Turkey",
        "languages": [
            "Arabic",
            "Kurdish",
            "Turkish"
        ]
    },
    {
        "country": "Tuvalu",
        "languages": [
            "English",
            "Kiribati",
            "Tuvalu"
        ]
    },
    {
        "country": "Taiwan",
        "languages": [
            "Ami",
            "Atayal",
            "Hakka",
            "Mandarin Chinese",
            "Min",
            "Paiwan"
        ]
    },
    {
        "country": "Tanzania",
        "languages": [
            "Chaga and Pare",
            "Gogo",
            "Ha",
            "Haya",
            "Hehet",
            "Luguru",
            "Makonde",
            "Nyakusa",
            "Nyamwesi",
            "Shambala",
            "Swahili"
        ]
    },
    {
        "country": "Uganda",
        "languages": [
            "Acholi",
            "Ganda",
            "Gisu",
            "Kiga",
            "Lango",
            "Lugbara",
            "Nkole",
            "Rwanda",
            "Soga",
            "Teso"
        ]
    },
    {
        "country": "Ukraine",
        "languages": [
            "Belorussian",
            "Bulgariana",
            "Hungarian",
            "Polish",
            "Romanian",
            "Russian",
            "Ukrainian"
        ]
    },
    {
        "country": "United States Minor Outlying Islands",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Uruguay",
        "languages": [
            "Spanish"
        ]
    },
    {
        "country": "United States",
        "languages": [
            "Chinese",
            "English",
            "French",
            "German",
            "Italian",
            "Japanese",
            "Korean",
            "Polish",
            "Portuguese",
            "Spanish",
            "Tagalog",
            "Vietnamese"
        ]
    },
    {
        "country": "Uzbekistan",
        "languages": [
            "Karakalpak",
            "Kazakh",
            "Russian",
            "Tadzhik",
            "Tatar",
            "Uzbek"
        ]
    },
    {
        "country": "Holy See (Vatican City State)",
        "languages": [
            "Italian"
        ]
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "languages": [
            "Creole English",
            "English"
        ]
    },
    {
        "country": "Venezuela",
        "languages": [
            "Goajiro",
            "Spanish",
            "Warrau"
        ]
    },
    {
        "country": "Virgin Islands, British",
        "languages": [
            "English"
        ]
    },
    {
        "country": "Virgin Islands, U.S.",
        "languages": [
            "English",
            "French",
            "Spanish"
        ]
    },
    {
        "country": "Vietnam",
        "languages": [
            "Chinese",
            "Khmer",
            "Man",
            "Miao",
            "Muong",
            "Nung",
            "Thai",
            "Tho",
            "Vietnamese"
        ]
    },
    {
        "country": "Vanuatu",
        "languages": [
            "Bislama",
            "English",
            "French"
        ]
    },
    {
        "country": "Wallis and Futuna",
        "languages": [
            "Futuna",
            "Wallis"
        ]
    },
    {
        "country": "Samoa",
        "languages": [
            "English",
            "Samoan",
            "Samoan-English"
        ]
    },
    {
        "country": "Yemen",
        "languages": [
            "Arabic",
            "Soqutri"
        ]
    },
    {
        "country": "South Africa",
        "languages": [
            "Afrikaans",
            "English",
            "Ndebele",
            "Northsotho",
            "Southsotho",
            "Swazi",
            "Tsonga",
            "Tswana",
            "Venda",
            "Xhosa",
            "Zulu"
        ]
    },
    {
        "country": "Zambia",
        "languages": [
            "Bemba",
            "Chewa",
            "Lozi",
            "Nsenga",
            "Nyanja",
            "Tongan"
        ]
    },
    {
        "country": "Zimbabwe",
        "languages": [
            "English",
            "Ndebele",
            "Nyanja",
            "Shona"
        ]
    }
]

let cc = [
    {
        "country": "Afghanistan",
        "continent": "Asia"
    },
    {
        "country": "Albania",
        "continent": "Europe"
    },
    {
        "country": "Algeria",
        "continent": "Africa"
    },
    {
        "country": "American Samoa",
        "continent": "Oceania"
    },
    {
        "country": "Andorra",
        "continent": "Europe"
    },
    {
        "country": "Angola",
        "continent": "Africa"
    },
    {
        "country": "Anguilla",
        "continent": "North America"
    },
    {
        "country": "Antarctica",
        "continent": "Antarctica"
    },
    {
        "country": "Antigua and Barbuda",
        "continent": "North America"
    },
    {
        "country": "Argentina",
        "continent": "South America"
    },
    {
        "country": "Armenia",
        "continent": "Asia"
    },
    {
        "country": "Aruba",
        "continent": "North America"
    },
    {
        "country": "Australia",
        "continent": "Oceania"
    },
    {
        "country": "Austria",
        "continent": "Europe"
    },
    {
        "country": "Azerbaijan",
        "continent": "Asia"
    },
    {
        "country": "Bahamas",
        "continent": "North America"
    },
    {
        "country": "Bahrain",
        "continent": "Asia"
    },
    {
        "country": "Bangladesh",
        "continent": "Asia"
    },
    {
        "country": "Barbados",
        "continent": "North America"
    },
    {
        "country": "Belarus",
        "continent": "Europe"
    },
    {
        "country": "Belgium",
        "continent": "Europe"
    },
    {
        "country": "Belize",
        "continent": "North America"
    },
    {
        "country": "Benin",
        "continent": "Africa"
    },
    {
        "country": "Bermuda",
        "continent": "North America"
    },
    {
        "country": "Bhutan",
        "continent": "Asia"
    },
    {
        "country": "Bolivia",
        "continent": "South America"
    },
    {
        "country": "Bosnia and Herzegovina",
        "continent": "Europe"
    },
    {
        "country": "Botswana",
        "continent": "Africa"
    },
    {
        "country": "Bouvet Island",
        "continent": "Antarctica"
    },
    {
        "country": "Brazil",
        "continent": "South America"
    },
    {
        "country": "British Indian Ocean Territory",
        "continent": "Africa"
    },
    {
        "country": "Brunei",
        "continent": "Asia"
    },
    {
        "country": "Bulgaria",
        "continent": "Europe"
    },
    {
        "country": "Burkina Faso",
        "continent": "Africa"
    },
    {
        "country": "Burundi",
        "continent": "Africa"
    },
    {
        "country": "Cambodia",
        "continent": "Asia"
    },
    {
        "country": "Cameroon",
        "continent": "Africa"
    },
    {
        "country": "Canada",
        "continent": "North America"
    },
    {
        "country": "Cape Verde",
        "continent": "Africa"
    },
    {
        "country": "Cayman Islands",
        "continent": "North America"
    },
    {
        "country": "Central African Republic",
        "continent": "Africa"
    },
    {
        "country": "Chad",
        "continent": "Africa"
    },
    {
        "country": "Chile",
        "continent": "South America"
    },
    {
        "country": "China",
        "continent": "Asia"
    },
    {
        "country": "Christmas Island",
        "continent": "Oceania"
    },
    {
        "country": "Cocos (Keeling) Islands",
        "continent": "Oceania"
    },
    {
        "country": "Colombia",
        "continent": "South America"
    },
    {
        "country": "Comoros",
        "continent": "Africa"
    },
    {
        "country": "Congo",
        "continent": "Africa"
    },
    {
        "country": "Cook Islands",
        "continent": "Oceania"
    },
    {
        "country": "Costa Rica",
        "continent": "North America"
    },
    {
        "country": "Croatia",
        "continent": "Europe"
    },
    {
        "country": "Cuba",
        "continent": "North America"
    },
    {
        "country": "Cyprus",
        "continent": "Asia"
    },
    {
        "country": "Czech Republic",
        "continent": "Europe"
    },
    {
        "country": "Denmark",
        "continent": "Europe"
    },
    {
        "country": "Djibouti",
        "continent": "Africa"
    },
    {
        "country": "Dominica",
        "continent": "North America"
    },
    {
        "country": "Dominican Republic",
        "continent": "North America"
    },
    {
        "country": "East Timor",
        "continent": "Asia"
    },
    {
        "country": "Ecuador",
        "continent": "South America"
    },
    {
        "country": "Egypt",
        "continent": "Africa"
    },
    {
        "country": "El Salvador",
        "continent": "North America"
    },
    {
        "country": "England",
        "continent": "Europe"
    },
    {
        "country": "Equatorial Guinea",
        "continent": "Africa"
    },
    {
        "country": "Eritrea",
        "continent": "Africa"
    },
    {
        "country": "Estonia",
        "continent": "Europe"
    },
    {
        "country": "Ethiopia",
        "continent": "Africa"
    },
    {
        "country": "Falkland Islands",
        "continent": "South America"
    },
    {
        "country": "Faroe Islands",
        "continent": "Europe"
    },
    {
        "country": "Fiji Islands",
        "continent": "Oceania"
    },
    {
        "country": "Finland",
        "continent": "Europe"
    },
    {
        "country": "France",
        "continent": "Europe"
    },
    {
        "country": "French Guiana",
        "continent": "South America"
    },
    {
        "country": "French Polynesia",
        "continent": "Oceania"
    },
    {
        "country": "French Southern territories",
        "continent": "Antarctica"
    },
    {
        "country": "Gabon",
        "continent": "Africa"
    },
    {
        "country": "Gambia",
        "continent": "Africa"
    },
    {
        "country": "Georgia",
        "continent": "Asia"
    },
    {
        "country": "Germany",
        "continent": "Europe"
    },
    {
        "country": "Ghana",
        "continent": "Africa"
    },
    {
        "country": "Gibraltar",
        "continent": "Europe"
    },
    {
        "country": "Greece",
        "continent": "Europe"
    },
    {
        "country": "Greenland",
        "continent": "North America"
    },
    {
        "country": "Grenada",
        "continent": "North America"
    },
    {
        "country": "Guadeloupe",
        "continent": "North America"
    },
    {
        "country": "Guam",
        "continent": "Oceania"
    },
    {
        "country": "Guatemala",
        "continent": "North America"
    },
    {
        "country": "Guinea",
        "continent": "Africa"
    },
    {
        "country": "Guinea-Bissau",
        "continent": "Africa"
    },
    {
        "country": "Guyana",
        "continent": "South America"
    },
    {
        "country": "Haiti",
        "continent": "North America"
    },
    {
        "country": "Heard Island and McDonald Islands",
        "continent": "Antarctica"
    },
    {
        "country": "Holy See (Vatican City State)",
        "continent": "Europe"
    },
    {
        "country": "Honduras",
        "continent": "North America"
    },
    {
        "country": "Hong Kong",
        "continent": "Asia"
    },
    {
        "country": "Hungary",
        "continent": "Europe"
    },
    {
        "country": "Iceland",
        "continent": "Europe"
    },
    {
        "country": "India",
        "continent": "Asia"
    },
    {
        "country": "Indonesia",
        "continent": "Asia"
    },
    {
        "country": "Iran",
        "continent": "Asia"
    },
    {
        "country": "Iraq",
        "continent": "Asia"
    },
    {
        "country": "Ireland",
        "continent": "Europe"
    },
    {
        "country": "Israel",
        "continent": "Asia"
    },
    {
        "country": "Italy",
        "continent": "Europe"
    },
    {
        "country": "Ivory Coast",
        "continent": "Africa"
    },
    {
        "country": "Jamaica",
        "continent": "North America"
    },
    {
        "country": "Japan",
        "continent": "Asia"
    },
    {
        "country": "Jordan",
        "continent": "Asia"
    },
    {
        "country": "Kazakhstan",
        "continent": "Asia"
    },
    {
        "country": "Kenya",
        "continent": "Africa"
    },
    {
        "country": "Kiribati",
        "continent": "Oceania"
    },
    {
        "country": "Kuwait",
        "continent": "Asia"
    },
    {
        "country": "Kyrgyzstan",
        "continent": "Asia"
    },
    {
        "country": "Laos",
        "continent": "Asia"
    },
    {
        "country": "Latvia",
        "continent": "Europe"
    },
    {
        "country": "Lebanon",
        "continent": "Asia"
    },
    {
        "country": "Lesotho",
        "continent": "Africa"
    },
    {
        "country": "Liberia",
        "continent": "Africa"
    },
    {
        "country": "Libyan Arab Jamahiriya",
        "continent": "Africa"
    },
    {
        "country": "Liechtenstein",
        "continent": "Europe"
    },
    {
        "country": "Lithuania",
        "continent": "Europe"
    },
    {
        "country": "Luxembourg",
        "continent": "Europe"
    },
    {
        "country": "Macao",
        "continent": "Asia"
    },
    {
        "country": "North Macedonia",
        "continent": "Europe"
    },
    {
        "country": "Madagascar",
        "continent": "Africa"
    },
    {
        "country": "Malawi",
        "continent": "Africa"
    },
    {
        "country": "Malaysia",
        "continent": "Asia"
    },
    {
        "country": "Maldives",
        "continent": "Asia"
    },
    {
        "country": "Mali",
        "continent": "Africa"
    },
    {
        "country": "Malta",
        "continent": "Europe"
    },
    {
        "country": "Marshall Islands",
        "continent": "Oceania"
    },
    {
        "country": "Martinique",
        "continent": "North America"
    },
    {
        "country": "Mauritania",
        "continent": "Africa"
    },
    {
        "country": "Mauritius",
        "continent": "Africa"
    },
    {
        "country": "Mayotte",
        "continent": "Africa"
    },
    {
        "country": "Mexico",
        "continent": "North America"
    },
    {
        "country": "Micronesia, Federated States of",
        "continent": "Oceania"
    },
    {
        "country": "Moldova",
        "continent": "Europe"
    },
    {
        "country": "Monaco",
        "continent": "Europe"
    },
    {
        "country": "Mongolia",
        "continent": "Asia"
    },
    {
        "country": "Montenegro",
        "continent": "Europe"
    },
    {
        "country": "Montserrat",
        "continent": "North America"
    },
    {
        "country": "Morocco",
        "continent": "Africa"
    },
    {
        "country": "Mozambique",
        "continent": "Africa"
    },
    {
        "country": "Myanmar",
        "continent": "Asia"
    },
    {
        "country": "Namibia",
        "continent": "Africa"
    },
    {
        "country": "Nauru",
        "continent": "Oceania"
    },
    {
        "country": "Nepal",
        "continent": "Asia"
    },
    {
        "country": "Netherlands",
        "continent": "Europe"
    },
    {
        "country": "Netherlands Antilles",
        "continent": "North America"
    },
    {
        "country": "New Caledonia",
        "continent": "Oceania"
    },
    {
        "country": "New Zealand",
        "continent": "Oceania"
    },
    {
        "country": "Nicaragua",
        "continent": "North America"
    },
    {
        "country": "Niger",
        "continent": "Africa"
    },
    {
        "country": "Nigeria",
        "continent": "Africa"
    },
    {
        "country": "Niue",
        "continent": "Oceania"
    },
    {
        "country": "Norfolk Island",
        "continent": "Oceania"
    },
    {
        "country": "North Korea",
        "continent": "Asia"
    },
    {
        "country": "Northern Ireland",
        "continent": "Europe"
    },
    {
        "country": "Northern Mariana Islands",
        "continent": "Oceania"
    },
    {
        "country": "Norway",
        "continent": "Europe"
    },
    {
        "country": "Oman",
        "continent": "Asia"
    },
    {
        "country": "Pakistan",
        "continent": "Asia"
    },
    {
        "country": "Palau",
        "continent": "Oceania"
    },
    {
        "country": "Palestine",
        "continent": "Asia"
    },
    {
        "country": "Panama",
        "continent": "North America"
    },
    {
        "country": "Papua New Guinea",
        "continent": "Oceania"
    },
    {
        "country": "Paraguay",
        "continent": "South America"
    },
    {
        "country": "Peru",
        "continent": "South America"
    },
    {
        "country": "Philippines",
        "continent": "Asia"
    },
    {
        "country": "Pitcairn",
        "continent": "Oceania"
    },
    {
        "country": "Poland",
        "continent": "Europe"
    },
    {
        "country": "Portugal",
        "continent": "Europe"
    },
    {
        "country": "Puerto Rico",
        "continent": "North America"
    },
    {
        "country": "Qatar",
        "continent": "Asia"
    },
    {
        "country": "Reunion",
        "continent": "Africa"
    },
    {
        "country": "Romania",
        "continent": "Europe"
    },
    {
        "country": "Russian Federation",
        "continent": "Europe"
    },
    {
        "country": "Rwanda",
        "continent": "Africa"
    },
    {
        "country": "Saint Helena",
        "continent": "Africa"
    },
    {
        "country": "Saint Kitts and Nevis",
        "continent": "North America"
    },
    {
        "country": "Saint Lucia",
        "continent": "North America"
    },
    {
        "country": "Saint Pierre and Miquelon",
        "continent": "North America"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "continent": "North America"
    },
    {
        "country": "Samoa",
        "continent": "Oceania"
    },
    {
        "country": "San Marino",
        "continent": "Europe"
    },
    {
        "country": "Sao Tome and Principe",
        "continent": "Africa"
    },
    {
        "country": "Saudi Arabia",
        "continent": "Asia"
    },
    {
        "country": "Scotland",
        "continent": "Europe"
    },
    {
        "country": "Senegal",
        "continent": "Africa"
    },
    {
        "country": "Serbia",
        "continent": "Europe"
    },
    {
        "country": "Seychelles",
        "continent": "Africa"
    },
    {
        "country": "Sierra Leone",
        "continent": "Africa"
    },
    {
        "country": "Singapore",
        "continent": "Asia"
    },
    {
        "country": "Slovakia",
        "continent": "Europe"
    },
    {
        "country": "Slovenia",
        "continent": "Europe"
    },
    {
        "country": "Solomon Islands",
        "continent": "Oceania"
    },
    {
        "country": "Somalia",
        "continent": "Africa"
    },
    {
        "country": "South Africa",
        "continent": "Africa"
    },
    {
        "country": "South Georgia and the South Sandwich Islands",
        "continent": "Antarctica"
    },
    {
        "country": "South Korea",
        "continent": "Asia"
    },
    {
        "country": "South Sudan",
        "continent": "Africa"
    },
    {
        "country": "Spain",
        "continent": "Europe"
    },
    {
        "country": "Sri Lanka",
        "continent": "Asia"
    },
    {
        "country": "Sudan",
        "continent": "Africa"
    },
    {
        "country": "Suriname",
        "continent": "South America"
    },
    {
        "country": "Svalbard and Jan Mayen",
        "continent": "Europe"
    },
    {
        "country": "Swaziland",
        "continent": "Africa"
    },
    {
        "country": "Sweden",
        "continent": "Europe"
    },
    {
        "country": "Switzerland",
        "continent": "Europe"
    },
    {
        "country": "Syria",
        "continent": "Asia"
    },
    {
        "country": "Tajikistan",
        "continent": "Asia"
    },
    {
        "country": "Tanzania",
        "continent": "Africa"
    },
    {
        "country": "Thailand",
        "continent": "Asia"
    },
    {
        "country": "The Democratic Republic of Congo",
        "continent": "Africa"
    },
    {
        "country": "Togo",
        "continent": "Africa"
    },
    {
        "country": "Tokelau",
        "continent": "Oceania"
    },
    {
        "country": "Tonga",
        "continent": "Oceania"
    },
    {
        "country": "Trinidad and Tobago",
        "continent": "North America"
    },
    {
        "country": "Tunisia",
        "continent": "Africa"
    },
    {
        "country": "Turkey",
        "continent": "Asia"
    },
    {
        "country": "Turkmenistan",
        "continent": "Asia"
    },
    {
        "country": "Turks and Caicos Islands",
        "continent": "North America"
    },
    {
        "country": "Tuvalu",
        "continent": "Oceania"
    },
    {
        "country": "Uganda",
        "continent": "Africa"
    },
    {
        "country": "Ukraine",
        "continent": "Europe"
    },
    {
        "country": "United Arab Emirates",
        "continent": "Asia"
    },
    {
        "country": "United Kingdom",
        "continent": "Europe"
    },
    {
        "country": "United States",
        "continent": "North America"
    },
    {
        "country": "United States Minor Outlying Islands",
        "continent": "Oceania"
    },
    {
        "country": "Uruguay",
        "continent": "South America"
    },
    {
        "country": "Uzbekistan",
        "continent": "Asia"
    },
    {
        "country": "Vanuatu",
        "continent": "Oceania"
    },
    {
        "country": "Venezuela",
        "continent": "South America"
    },
    {
        "country": "Vietnam",
        "continent": "Asia"
    },
    {
        "country": "Virgin Islands, British",
        "continent": "North America"
    },
    {
        "country": "Virgin Islands, U.S.",
        "continent": "North America"
    },
    {
        "country": "Wales",
        "continent": "Europe"
    },
    {
        "country": "Wallis and Futuna",
        "continent": "Oceania"
    },
    {
        "country": "Western Sahara",
        "continent": "Africa"
    },
    {
        "country": "Yemen",
        "continent": "Asia"
    },
    {
        "country": "Zambia",
        "continent": "Africa"
    },
    {
        "country": "Zimbabwe",
        "continent": "Africa"
    }
]




// let cl = [
//     {
//         "country": "Aruba",
//         "languages": [
//             "Dutch",
//             "English",
//             "Papiamento",
//             "Spanish"
//         ]
//     },
//     {
//         "country": "Afghanistan",
//         "languages": [
//             "Balochi",
//             "Dari",
//             "Pashto",
//             "Turkmenian",
//             "Uzbek"
//         ]
//     },
//     {
//         "country": "Angola",
//         "languages": [
//             "Ambo",
//             "Chokwe",
//             "Kongo",
//             "Luchazi",
//             "Luimbe-nganguela",
//             "Luvale",
//             "Mbundu",
//             "Nyaneka-nkhumbi",
//             "Ovimbundu"
//         ]
//     },
// ]

// let cc=[
//     {
//     "country": "Afghanistan",
//     "continent": "Asia"
// },
// {
//     "country": "Albania",
//     "continent": "Europe"
// },
// {
//     "country": "Algeria",
//     "continent": "Africa"
// }
// ]


let newArr=[];
for(let el of cc){
    for(let it of cl){
        if(el.country == it.country){
            el.lan=it.languages;
            newArr.push(el);
        }
    }
}
console.log("Hello World", newArr);

fs.writeFileSync('./sample.json', JSON.stringify(obj, null, 2) , 'utf-8');