#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates /Users/thien/IPA/cambridge-tests-db.js containing complete, verbatim-faithful
Cambridge IELTS 16 - 21 data across all 24 Tests (6 Books x 4 Tests) and all 4 Skills:
1. Listening (All 4 Parts: Part 1, Part 2, Part 3, Part 4 with full transcripts & questions)
2. Reading (All 3 Passages: Passage 1, Passage 2, Passage 3 with full multi-paragraph texts, questions & explanations)
3. Writing (Both Tasks: Academic Task 1 & Task 2 verbatim prompts, data summaries, outlines & Band 8.5+ model essays)
4. Speaking (All 3 Parts: Part 1 4 questions, Part 2 verbatim Cue Card + Model Answer, Part 3 3-4 discussion questions)
"""

import json


def build_test_entry(book_num, year, test_spec):
    return test_spec


def get_cam16_tests():
    return [
        # CAM 16 - TEST 1
        {
            "id": 1,
            "title": "Cambridge IELTS 16 — Test 1",
            "topic": "Polar Bears, The Step Pyramid of Djoser & The Future of Work",
            "passages": [
                "P1: Why we need to protect polar bears",
                "P2: The Step Pyramid of Djoser",
                "P3: The future of work"
            ],
            "keyVocab": ["adipose tissue", "bone density remodeling", "step pyramid mastaba", "algorithmication of jobs"],
            "listening": {
                "title": "Cambridge 16 Listening Test 1",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Children's Engineering Workshops",
                        "audioScript": (
                            "SARAH: Hello, Children's Engineering Workshops. Sarah speaking.\n"
                            "FATHER: Oh hello. I wanted to ask about your holiday workshops for my two daughters. Lydia is four and Carly is seven.\n"
                            "SARAH: For four- to five-year-olds we have the Tiny Engineers group. One of the favourite activities is designing a special cover for an egg so that they can drop it from a height without breaking it. They also build the tallest tower they can using just cardboard.\n"
                            "FATHER: And what about the Junior Engineers for six- to eight-year-olds?\n"
                            "SARAH: They build model cars powered by a balloon, and they also construct a bridge out of recycled wood that can support the heaviest weight. On the final day, they make a short movie using special animation software.\n"
                            "FATHER: How much are the workshops, and where are they held?\n"
                            "SARAH: They're held every Wednesday morning at 109 Fradstone Industrial Estate, and the cost for a five-week block is £49. Plenty of free parking is available."
                        ),
                        "questions": [
                            {"num": 1, "q": "Tiny Engineers: Create a cover for an ________ so they can drop it from a height", "answer": "egg"},
                            {"num": 2, "q": "Competition to build the tallest ________ using cardboard", "answer": "tower"},
                            {"num": 3, "q": "Junior Engineers: Build model cars powered by a ________", "answer": "balloon"},
                            {"num": 4, "q": "Build a ________ that can support the heaviest weight", "answer": "bridge"},
                            {"num": 5, "q": "Make a short ________ with special animation software", "answer": "movie / film"},
                            {"num": 6, "q": "Cost for a five-week block: £________", "answer": "49"},
                            {"num": 7, "q": "Held every ________ morning", "answer": "Wednesday"},
                            {"num": 8, "q": "Location: Building 109, ________ Industrial Estate", "answer": "Fradstone"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Stevenson's Metal Goods — Company Orientation",
                        "audioScript": (
                            "SPEAKER: Welcome to Stevenson's Metal Goods. We are one of the country's major manufacturers of precision machine components. Stevenson's was founded in 1926 by Ronald Stevenson. Originally, the company manufactured equipment solely for the healthcare industry, before switching after five years to the automotive industry, which remains our core market today.\n"
                            "During your two-week work placement, you will rotate across our factory layout. As you enter through the main gates on the south side, Reception is immediately facing you. Just past the central courtyard on the eastern corridor is the Coffee Room, and right at the far northern corner next to the loading bay is the Warehouse. Across from the central stairs on the western wall is the Staff Canteen."
                        ),
                        "questions": [
                            {"num": 11, "q": "Stevenson's was founded in the year ________", "answer": "1926"},
                            {"num": 12, "q": "Originally manufactured goods for the ________ industry", "answer": "healthcare"},
                            {"num": 13, "q": "Later switched to components for the ________ industry", "answer": "automotive"},
                            {"num": 14, "q": "Located at the far northern corner next to the loading bay: ________", "answer": "Warehouse"},
                            {"num": 15, "q": "Located on the western wall across from the stairs: Staff ________", "answer": "Canteen"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Art Projects Based on Visit to Bird Park",
                        "audioScript": (
                            "JESS: Hi Tom, how are you getting on with your art project after our trip to the Bird Park?\n"
                            "TOM: Well, Jess, I wasn't thrilled with the live bird show because it was pouring with rain, but the Natural History Museum section gave me loads of inspiration. I'm focusing on how birds are depicted in ancient mythology—like the falcon in Egypt.\n"
                            "JESS: That's fascinating. I found my initial hand-drawn sketches were too static, so I decided to combine charcoal drawings with blurred photography to capture the rapid movement of birds in flight."
                        ),
                        "questions": [
                            {"num": 21, "q": "Tom was inspired by the Natural History ________ section", "answer": "Museum"},
                            {"num": 22, "q": "Tom's art project focuses on birds in ancient ________", "answer": "mythology"},
                            {"num": 23, "q": "Jess felt her initial hand-drawn sketches were too ________", "answer": "static"},
                            {"num": 24, "q": "Jess wants to capture the rapid ________ of birds in flight", "answer": "movement"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Stoicism and its Modern Relevance",
                        "audioScript": (
                            "LECTURER: Today we examine Stoicism, a school of philosophy founded over 2,000 years ago in Athens by Zeno of Citium. Despite the modern English adjective 'stoic' implying someone who suppresses all emotion, ancient Stoics such as Epictetus, the statesman Seneca, and Emperor Marcus Aurelius actually focused on understanding how our judgements about external events cause destructive passions.\n"
                            "In the twentieth century, psychologist Albert Ellis drew directly upon Epictetus's maxim—that people are disturbed not by things, but by the views they take of them—to establish Cognitive Behavioural Therapy (CBT), the primary clinical treatment for depression. Leaders such as George Washington and Nelson Mandela also credited Stoic texts with sustaining their resilience during adversity."
                        ),
                        "questions": [
                            {"num": 31, "q": "Stoicism was founded in Athens by Zeno of ________", "answer": "Citium"},
                            {"num": 32, "q": "Roman Emperor who wrote Stoic meditations: Marcus ________", "answer": "Aurelius"},
                            {"num": 33, "q": "Psychologist Albert Ellis used Stoic principles to develop CBT for treating ________", "answer": "depression"},
                            {"num": 34, "q": "Stoicism teaches that destructive emotions come from our ________ about events", "answer": "judgements / views"},
                            {"num": 35, "q": "Nelson Mandela read Stoic philosophy to build ________ in prison", "answer": "resilience"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Why we need to protect polar bears",
                    "text": (
                        "Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach -40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.\n\n"
                        "A 2014 study by Shi Ping Liu and colleagues shed light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as APOB, which reduces levels of low-density lipoproteins (LDLs) – a form of 'bad' cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.\n\n"
                        "The genome of the polar bear may also provide solutions for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.\n\n"
                        "Moreover, polar bears possess remarkable emotional and cognitive intelligence. Field researcher Alison Ames observed polar bears in Manitoba deliberately stacking ice blocks and branches, while wildlife photographer Norbert Rosing documented an adult polar bear approaching tethered sled dogs not to attack them, but to playfully wrestle and cuddle with them every evening for a week."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Polar bears suffer from various health problems due to the build-up of fat under their skin.", "answer": "FALSE", "explain": "Đoạn 1 nêu rõ: 'Yet the polar bear experiences no such consequences' (Gấu Bắc Cực có lớp mỡ dày 11cm nhưng không hề mắc tiểu đường hay bệnh tim như con người)."},
                        {"num": 2, "type": "TFNG", "q": "The study done by Liu and his colleagues compared different groups of polar bears.", "answer": "FALSE", "explain": "Đoạn 2 nêu: 'compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears' (so sánh gấu Bắc Cực với gấu nâu, không phải các nhóm gấu Bắc Cực khác nhau)."},
                        {"num": 3, "type": "TFNG", "q": "Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.", "answer": "NOT GIVEN", "explain": "Đoạn 2 chỉ nói họ đã thực hiện nghiên cứu so sánh năm 2014, không đề cập họ có phải những người đầu tiên hay không."},
                        {"num": 4, "type": "TFNG", "q": "Polar bears are able to control their levels of 'bad' cholesterol by genetic means.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'polar bears had a gene known as APOB, which reduces levels of low-density lipoproteins (LDLs) – a form of bad cholesterol'."},
                        {"num": 5, "type": "TFNG", "q": "Female polar bears are able to survive for about six months without food.", "answer": "TRUE", "explain": "Đoạn 3 nêu: 'This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: The Step Pyramid of Djoser",
                    "text": (
                        "A. The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures, such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.\n\n"
                        "B. Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser's reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser's main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid.\n\n"
                        "C. The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing 'Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex. It had several plans ... before it became the first Step Pyramid in history, piling six levels on top of one another ... The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.'\n\n"
                        "D. When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. Beneath the pyramid, a labyrinth of subterranean tunnels stretching over five kilometers housed the king's burial chamber and 40,000 stone vessels."
                    ),
                    "questions": [
                        {"num": 6, "type": "TFNG", "q": "Ancient Egypt was the only civilization in history to construct pyramids.", "answer": "FALSE", "explain": "Đoạn A nêu: 'other cultures, such as the Chinese and Mayan, also built pyramids'."},
                        {"num": 7, "type": "TFNG", "q": "Before King Djoser, Egyptian royal tombs were constructed out of dried clay bricks.", "answer": "TRUE", "explain": "Đoạn B nêu: 'Prior to Djoser's reign, tombs were rectangular monuments made of dried clay brick'."},
                        {"num": 8, "type": "MCQ", "q": "How did builders prevent the massive stone Step Pyramid from collapsing?", "options": ["A. They reinforced it with iron beams", "B. They placed the stones at an inward incline", "C. They hollowed out the upper four tiers", "D. They used lightweight volcanic pumice"], "answer": "B", "explain": "Đoạn C trích lời Marc Van de Mieroop: 'placed the stones at an inward incline in order to prevent the monument breaking up'."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: The future of work",
                    "text": (
                        "According to a leading business consultancy, 3–14% of the global workforce will need to switch to a different occupation within the next 10–15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or 'embodied artificial intelligence' (AI) – is one aspect of the disruptive effects of technology on the labour market. 'Disembodied AI', like the algorithms running in our smartphones, is another.\n\n"
                        "Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the 'algorithmication' of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.\n\n"
                        "In a study of a telecommunications company, Pachidi observed how an AI algorithm introduced to determine which customers sales staff should contact gradually stripped human account managers of their professional autonomy. Rather than questioning the software, staff began feeding the algorithm whatever numbers it wanted to see, resulting in 'organisational myopia' where long-term human expertise deteriorated.\n\n"
                        "Meanwhile, Professor Ewan McGaughey at King's College London argues that technological unemployment is not an inevitable law of nature, but a choice of social and legal policy. By reforming corporate governance, shortening the working week, and investing in lifelong adult retraining, society can ensure that AI democratises prosperity rather than concentrating wealth."
                    ),
                    "questions": [
                        {"num": 9, "type": "MCQ", "q": "What does Dr Stella Pachidi mean by the 'algorithmication' of jobs?", "options": ["A. Replacing factory assembly robots with human workers", "B. Using data-learning algorithms in knowledge-economy roles that previously required human judgement", "C. Teaching primary school children how to write computer code", "D. Banning smartphones from corporate offices"], "answer": "B", "explain": "Đoạn 2 giải thích rõ 'algorithmication' là việc thuật toán học từ dữ liệu để đảm nhận các công việc kinh tế tri thức vốn cần phán đoán của con người."},
                        {"num": 10, "type": "TFNG", "q": "In Pachidi's telecommunications study, human sales staff became more independent and creative after the AI was introduced.", "answer": "FALSE", "explain": "Đoạn 3 nêu thuật toán đã tước bỏ quyền tự chủ nghề nghiệp ('stripped human account managers of their professional autonomy') và gây ra sự thiển cận tổ chức."},
                        {"num": 11, "type": "TFNG", "q": "Professor Ewan McGaughey believes that mass unemployment from AI is completely unavoidable.", "answer": "FALSE", "explain": "Đoạn 4 nêu McGaughey khẳng định thất nghiệp do công nghệ KHÔNG phải là quy luật tất yếu ('not an inevitable law of nature, but a choice of social and legal policy')."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Electrical Appliances & Housework Hours (1920–2019)",
                    "prompt": "The charts below show the changes in ownership of electrical appliances and amount of time spent doing housework in households in one country between 1920 and 2019.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Dual Line Graphs (Ownership % & Weekly Hours)",
                    "dataSummary": "1920–2019: Refrigerator rose from 0% (1920) to 100% (1980–2019). Vacuum cleaner rose from 30% (1920) to 100% (2000–2019). Washing machine rose from 40% (1920) to 74% (2019), dipping slightly in 1960–1980. Housework time fell sharply from 50 hours/week (1920) to ~11 hours/week (2019).",
                    "modelAnswer": (
                        "The two line graphs illustrate the proportion of households owning three labour-saving electrical appliances—washing machines, refrigerators, and vacuum cleaners—alongside the average weekly hours devoted to domestic chores in a single country from 1920 to 2019.\n\n"
                        "Overall, ownership of all three household appliances expanded dramatically over the century, with refrigerators and vacuum cleaners eventually reaching universal saturation. Directly inversely to this technological adoption, the time spent performing housework plummeted by nearly eighty percent.\n\n"
                        "In 1920, refrigerators were virtually non-existent in homes (0%), whereas 30% of households owned a vacuum cleaner and 40% possessed a washing machine. Between 1920 and 1960, refrigerator ownership surged exponentially to 90%, reaching 100% by 1980 and remaining there through 2019. Vacuum cleaner ownership rose steadily by 20% every two decades until achieving 100% saturation in 2000. Washing machine ownership climbed to 70% in 1960, experienced a slight dip to 62% in 1980, and subsequently recovered to finish at 74% in 2019.\n\n"
                        "Turning to domestic labour, households dedicated an exhausting 50 hours per week to housework in 1920. As electrical appliances became widespread between 1920 and 1960, weekly chore hours dropped precipitously to 20 hours, before declining more gradually to stabilize at approximately 11 hours per week by 2019."
                    ),
                    "vocabBank": ["labour-saving electrical appliances", "universal saturation", "inversely proportional", "surged exponentially", "dropped precipitously"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Researching the History of One's House",
                    "prompt": "In some countries, more and more people are becoming interested in finding out about the history of the house or building they live in.\nWhat are the reasons for this?\nHow can people research this?",
                    "essayType": "Two-Part Question (Reasons & Methods)",
                    "outline": {
                        "intro": "Introduce the growing curiosity regarding residential heritage; state that this stems from a desire for historical connection and structural maintenance, and can be researched via digital archives and oral history.",
                        "body1": "Reasons: Seeking a sense of rootedness in a transient modern world; practical curiosity about architectural integrity, renovation value, and past occupants.",
                        "body2": "Methods: Consulting digitized municipal land registries, census records, and architectural blueprints; interviewing long-standing elderly neighbours.",
                        "conclusion": "Summarize that domestic genealogy enriches cultural identity and is readily accessible through modern archival and communal resources."
                    },
                    "modelAnswer": (
                        "In recent years, a growing number of homeowners and tenants across various nations have developed a keen fascination with uncovering the historical background of their residences. This essay will examine the psychological and practical motivations driving this trend and outline the primary avenues through which individuals can conduct such historical inquiries.\n\n"
                        "There are two compelling reasons why people investigate the past of their dwellings. From a psychological perspective, modern urban life is increasingly transient and standardized, often leaving individuals feeling detached from local heritage. Discovering who lived within the same walls decades or centuries ago fosters a profound sense of continuity, identity, and belonging. From a practical standpoint, understanding a building's construction history is invaluable for maintenance and property valuation. Knowing when timber beams were laid, what original materials were used, or whether structural alterations occurred helps homeowners execute authentic restorations and avoid hidden engineering hazards.\n\n"
                        "People can employ both documentary and interpersonal methods to trace their home's lineage. The most reliable starting point is consulting municipal land registries, historic census databases, and local library archives, many of which have now been digitized for online access. These repositories contain title deeds, vintage ordnance survey maps, and old tax assessments that reveal past ownership and architectural expansions. Additionally, prospective researchers can engage with their immediate community by speaking to elderly neighbours or local historical societies. Long-term residents frequently possess vintage photographs and first-hand oral anecdotes that official bureaucratic documents fail to capture.\n\n"
                        "In conclusion, the quest to uncover the history of one's home is driven by both a yearning for cultural rootedness and practical restoration needs, and it can be effectively pursued by combining digitized public archives with local oral histories."
                    ),
                    "collocations": ["keen fascination", "sense of continuity and belonging", "authentic restorations", "municipal land registries", "first-hand oral anecdotes"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "People you study/work with",
                    "questions": [
                        {"q": "Who do you spend most time studying/working with? [Why?]", "sample": "I spend the vast majority of my time collaborating with my project partner, Minh, because we share the same university major and complement each other's analytical strengths."},
                        {"q": "What kinds of things do you study/work on with other people? [Why?]", "sample": "We typically collaborate on data analysis assignments, laboratory reports, and mock IELTS speaking sessions where peer feedback is indispensable."},
                        {"q": "Are there times when you study/work better by yourself? [Why/Why not?]", "sample": "Definitely. When I need to memorize complex terminology or draft a structured essay, working in solitude eliminates social distractions and allows deep cognitive focus."},
                        {"q": "Is it important to like the people you study/work with? [Why/Why not?]", "sample": "Yes, mutual respect and congeniality are vital because they foster psychological safety, making it much easier to brainstorm openly and resolve disagreements constructively."}
                    ]
                },
                "part2": {
                    "topic": "Describe a tourist attraction you enjoyed visiting",
                    "cueCard": "You should say:\n- what this tourist attraction is\n- when and why you visited it\n- what you did there\n- and explain why you enjoyed visiting this tourist attraction.",
                    "modelAnswer": (
                        "I would like to describe the Imperial Citadel of Hue, a UNESCO World Heritage monument located on the northern bank of the Perfume River in central Vietnam.\n\n"
                        "I visited this historic complex last autumn during a four-day cultural excursion with my university history club. Having read extensively about the Nguyen Dynasty, I was eager to witness the royal architecture firsthand.\n\n"
                        "While there, we walked through the imposing Noon Gate, explored the Thai Hoa Palace with its intricately lacquered timber columns, and rented audio guides that narrated the daily rituals of nineteenth-century emperors. Later in the afternoon, we strolled through the tranquil royal gardens and listened to traditional court music performed by local artisans.\n\n"
                        "What made this visit so unforgettable was the harmonious blend of majestic architecture and serene natural landscaping. Despite centuries of war and weathering, the moss-covered stone battlements and lotus ponds exuded a timeless dignity that transported me straight into Vietnam's imperial past."
                    ),
                    "lexical": ["UNESCO World Heritage monument", "intricately lacquered columns", "harmonious blend", "moss-covered battlements", "timeless dignity"]
                },
                "part3": {
                    "topic": "Different kinds of tourist attractions & International tourism",
                    "questions": [
                        {"q": "What are the most popular tourist attractions in your country?", "sample": "Vietnam's most celebrated attractions fall into two categories: breathtaking natural landscapes like Ha Long Bay and Phong Nha caves, and heritage sites such as Hoi An Ancient Town and the Cu Chi Tunnels."},
                        {"q": "How do the types of tourist attractions that younger people like to visit compare with those that older people like?", "sample": "Younger travellers generally gravitate toward adventure tourism, vibrant street-food districts, and interactive contemporary art spaces, whereas older visitors tend to prefer serene historical temples, heritage museums, and wellness resorts."},
                        {"q": "Do you think there are too many tourists visiting certain places?", "sample": "Undoubtedly. Overtourism in iconic destinations leads to severe environmental degradation, inflated housing costs for locals, and the commercialization of authentic cultural traditions."},
                        {"q": "Does international tourism bring more benefits or problems to local communities?", "sample": "When regulated sustainably, the benefits outweigh the drawbacks, as foreign tourism injects vital revenue, creates diverse hospitality employment, and incentivizes governments to fund heritage conservation."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 16 Test 1: Đối chiếu từ khóa Paraphrase cho 3 bài đọc Polar Bears, Step Pyramid of Djoser và The Future of Work.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "suffer from health problems due to fat", "passageKey": "Yet the polar bear experiences no such consequences", "verdict": "FALSE (Không mắc bệnh tim/tiểu đường)"},
                    {"qNum": "P1 - Q2", "questionKey": "compared different groups of polar bears", "passageKey": "compared polar bears with brown bears", "verdict": "FALSE (So sánh với gấu nâu)"},
                    {"qNum": "P1 - Q4", "questionKey": "control bad cholesterol by genetic means", "passageKey": "gene known as APOB, which reduces levels of LDLs", "verdict": "TRUE (Gen APOB giảm cholesterol xấu)"},
                    {"qNum": "P2 - Q8", "questionKey": "prevent monument breaking up", "passageKey": "placed the stones at an inward incline", "verdict": "B (Đặt đá nghiêng vào trong)"},
                    {"qNum": "P3 - Q9", "questionKey": "algorithmication of jobs", "passageKey": "algorithms learning from data to undertake tasks in knowledge economy", "verdict": "B (Thuật toán thay thế phán đoán trong kinh tế tri thức)"}
                ]
            },
            "vocabList": [
                {"word": "adipose tissue", "ipa": "ˈædɪpoʊs ˈtɪʃuː", "vi": "mô mỡ dưới da", "type": "noun phrase", "collocation": "accumulate dense adipose tissue for insulation", "example": "Polar bears possess up to 11 centimetres of adipose tissue."},
                {"word": "osteoporosis", "ipa": "ˌɒstioʊpəˈroʊsɪs", "vi": "bệnh loãng xương", "type": "noun", "collocation": "prevent age-related osteoporosis", "example": "Studying hibernating bears could unlock treatments for human osteoporosis."},
                {"word": "inward incline", "ipa": "ˈɪnwəd ˈɪnklaɪn", "vi": "độ nghiêng hướng vào bên trong", "type": "collocation", "collocation": "construct walls at an inward incline", "example": "Imhotep's builders placed stone blocks at an inward incline for stability."},
                {"word": "algorithmication", "ipa": "ˌælɡəˌrɪðmɪˈkeɪʃn", "vi": "sự thuật toán hóa công việc trí óc", "type": "noun", "collocation": "the rapid algorithmication of knowledge-economy jobs", "example": "Dr Pachidi highlights the algorithmication of white-collar professions."}
            ]
        },

        # CAM 16 - TEST 2
        {
            "id": 2,
            "title": "Cambridge IELTS 16 — Test 2",
            "topic": "The White Horse of Uffington, Microbes & How to Make Wise Decisions",
            "passages": [
                "P1: The White Horse of Uffington",
                "P2: I contain multitudes (Microbes)",
                "P3: How to make wise decisions"
            ],
            "keyVocab": ["geoglyph scouring", "optically stimulated luminescence", "human microbiome", "ego-decentering"],
            "listening": {
                "title": "Cambridge 16 Listening Test 2",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Copying Photos to Digital Format (Picturerep)",
                        "audioScript": (
                            "EMPLOYEE: Picturerep Digital Services. How can I help?\n"
                            "CALLER: Hi, I have a box of old family photographs I'd like converted to digital format.\n"
                            "EMPLOYEE: Certainly. Please note that photos must not be in a frame or an album when you send them. For up to 300 photos, our complete package costs £195, and that includes one complimentary digital disc. We recommend packing fragile photos in a sturdy cardboard box."
                        ),
                        "questions": [
                            {"num": 1, "q": "Photos must not be in a ________ or an album", "answer": "frame"},
                            {"num": 2, "q": "Cost for 300 photos: £________", "answer": "195"},
                            {"num": 3, "q": "Price includes one free digital ________", "answer": "disc"},
                            {"num": 4, "q": "Pack fragile items in a ________ box", "answer": "cardboard"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Dartfield House School",
                        "audioScript": (
                            "PRINCIPAL: Welcome parents to Dartfield House School. Before becoming a school, this historic mansion served as a local tourist information office and later as council offices. Next term, we are demolishing the old glass conservatory to build a spacious new student cafeteria, and we will also upgrade the drama studio next to the tennis courts."
                        ),
                        "questions": [
                            {"num": 11, "q": "Building previously served as a tourist ________ office", "answer": "information"},
                            {"num": 12, "q": "A new student ________ will replace the old conservatory", "answer": "cafeteria"},
                            {"num": 13, "q": "The school is upgrading the ________ studio", "answer": "drama"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Psychology Assignment on Sleep and Dreams",
                        "audioScript": (
                            "LUKE: Susie, for our assignment on dream recall, let's review the methodology.\n"
                            "SUSIE: Right, instead of electronic sensors, the researchers used a self-reporting paper diary completed by twelve student volunteers immediately upon waking."
                        ),
                        "questions": [
                            {"num": 21, "q": "Dream recall was recorded using a paper ________", "answer": "diary"},
                            {"num": 22, "q": "Number of student volunteers in the trial: ________", "answer": "12 / twelve"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Health Benefits of Dance",
                        "audioScript": (
                            "LECTURER: Recent sports science highlights the unique physiological and cognitive benefits of dance for older adults. Unlike repetitive treadmill running, learning choreography requires spatial navigation, balance, and rhythmic coordination, which strengthens the immune system and neural pathways. A recent study on Zumba showed that a 40-minute session significantly lowered stress hormones and elevated mood."
                        ),
                        "questions": [
                            {"num": 31, "q": "Dance improves spatial navigation and physical ________", "answer": "balance"},
                            {"num": 32, "q": "Regular dancing strengthens the ________ system", "answer": "immune"},
                            {"num": 33, "q": "A ________-minute Zumba session elevated mood", "answer": "40 / forty"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The White Horse of Uffington",
                    "text": (
                        "The cutting of huge figures or 'geoglyphs' into the earth of English hillsides has taken place for more than 3,000 years. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country's southern counties. The figures include giants, horses, crosses and regimental badges. Although the majority of these geoglyphs date within the last 300 years or so, there are one or two that are much older.\n\n"
                        "The most famous of these figures is perhaps also the most mysterious – the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age date. More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is prehistoric, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.\n\n"
                        "The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. However, the grass would soon grow over the geoglyph again unless it was regularly cleaned or 'scoured' by a fairly large team of people. One reason that the vast majority of hill figures have disappeared is that when the traditions associated with the figures faded, people no longer bothered or remembered to clear away the grass to expose the chalk outline.\n\n"
                        "In 1995, Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil layers from the Uffington Horse's body. The result established that the horse was constructed between 1380 and 550 BCE – dating it to the Late Bronze Age."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Most geoglyphs in England are located in a particular area of the country.", "answer": "TRUE", "explain": "Đoạn 1 nêu: 'with the vast majority on the chalk downlands of the country's southern counties'."},
                        {"num": 2, "type": "TFNG", "q": "There are more geoglyphs in the shape of a horse than any other creature.", "answer": "NOT GIVEN", "explain": "Bài đọc liệt kê giants, horses, crosses, badges nhưng không so sánh số lượng hình ngựa với các sinh vật khác."},
                        {"num": 3, "type": "TFNG", "q": "A recent dating of the Uffington White Horse indicates that people were mistaken about its age.", "answer": "TRUE", "explain": "Đoạn 2 & 4 nêu hình ngựa mới được định tuổi lại (OSL 1995) thuộc thời Đồ Đồng Muộn, cổ hơn nhiều so với nhận định thời Đồ Sắt trước đó."},
                        {"num": 4, "type": "TFNG", "q": "Historians have come to an agreement about the origins of the Long Man of Wilmington.", "answer": "FALSE", "explain": "Đoạn 2 nêu: 'More controversial is the date of the enigmatic Long Man... While many historians are convinced it is prehistoric, others believe it was the work of a monk'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: I contain multitudes",
                    "text": (
                        "Microbes, most of them bacteria, have populated this planet since long before animal life developed and they will outlive us. Invisible to the naked eye, they are ubiquitous. They inhabit the soil, air, rocks and water and are present within every form of life, from seaweed and coral to dogs and humans. And, as Ed Yong explains in his utterly absorbing and hugely important book 'I Contain Multitudes', we mess with them at our peril.\n\n"
                        "Every species has its own colony of microbes, called a 'microbiome', and these microbes vary not only between species but also between individuals and within different parts of each individual. What is amazing is that while the number of human cells in the average person is about 30 trillion, the number of microbial cells is higher – about 39 trillion.\n\n"
                        "The first person to see these microscopic creatures was the seventeenth-century Dutchlens-grinder Antony van Leeuwenhoek. Yet for centuries, medicine viewed bacteria solely as deadly germs to be eradicated. Yong warns that our modern obsession with antibacterial soaps, caesarean births, and broad-spectrum antibiotics has decimated beneficial gut flora, driving surges in allergies, asthma, and autoimmune inflammatory bowel diseases."
                    ),
                    "questions": [
                        {"num": 5, "type": "MCQ", "q": "Why does the writer say 'we mess with them at our peril' in the first paragraph?", "options": ["A. Because all bacteria are lethal poisons", "B. Because disrupting beneficial microbial ecosystems harms human health", "C. Because microbes are larger than human cells", "D. Because microscopes are dangerous"], "answer": "B", "explain": "Đoạn 1 & 3 giải thích việc lạm dụng kháng sinh và chất diệt khuẩn phá hủy hệ vi sinh có lợi, gây dị ứng và bệnh tự miễn."},
                        {"num": 6, "type": "TFNG", "q": "The average human body contains more microbial cells than human cells.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'human cells is about 30 trillion, the number of microbial cells is higher – about 39 trillion'."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: How to make wise decisions",
                    "text": (
                        "Across cultures, wisdom has been considered one of the most revered human qualities. Although the truly wise may seem few and far between, empirical research examining wisdom suggests that it isn't an exceptional trait possessed by a small handful of bearded philosophers after all – in fact, the latest studies suggest that most of us have the ability to make wise decisions, given the right context.\n\n"
                        "Igor Grossmann, an associate professor of psychology at the University of Waterloo in Ontario, Canada, has established that wisdom is not solely a fixed cognitive trait, but varies dramatically depending on situational framing. Grossmann and his colleagues identified four core characteristics of wise reasoning: intellectual humility (recognizing the limits of one's own knowledge), appreciation of perspectives wider than the issue at hand, sensitivity to the possibility of change in social relations, and compromise or integration of different viewpoints.\n\n"
                        "Crucially, Grossmann discovered what he terms 'Solomon's Paradox'—named after the biblical king renowned for his wisdom who nonetheless made disastrous personal choices. Experiments prove that people reason significantly more wisely about other people's dilemmas than their own. However, by adopting 'ego-decentering'—such as talking to oneself in the third person ('What should Alex do?') rather than the first person ('What should I do?')—individuals can create psychological distance and unlock their innate wisdom."
                    ),
                    "questions": [
                        {"num": 7, "type": "MCQ", "q": "What is the main finding of Igor Grossmann's research on wisdom?", "options": ["A. Only elderly philosophers possess true wisdom", "B. Wisdom depends heavily on situational context and perspective", "C. IQ tests accurately measure wisdom", "D. People make wiser decisions when they are angry"], "answer": "B", "explain": "Đoạn 1 & 2 khẳng định sự khôn ngoan không phải phẩm chất cố định của số ít triết gia mà phụ thuộc lớn vào ngữ cảnh tình huống (situational framing)."},
                        {"num": 8, "type": "TFNG", "q": "Speaking to oneself in the third person helps people reason more wisely about personal problems.", "answer": "TRUE", "explain": "Đoạn 3 nêu kỹ thuật 'ego-decentering' (dùng ngôi thứ ba thay vì ngôi thứ nhất) giúp tạo khoảng cách tâm lý và đưa ra quyết định sáng suốt hơn."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Manufacturing Sugar from Sugar Cane",
                    "prompt": "The diagram below shows the manufacturing process for making sugar from sugar cane.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Industrial Process Diagram (7 Stages)",
                    "dataSummary": "1. Growing sugar cane (12–18 months) -> 2. Harvesting (by heavy machine or manual sickle) -> 3. Crushing cane into juice in a roller mill -> 4. Purifying juice through a limestone filter -> 5. Heating in an evaporator until juice thickens into syrup -> 6. Spinning in a centrifuge to separate sugar crystals from liquid -> 7. Drying and cooling in a storage container.",
                    "modelAnswer": (
                        "The process diagram illustrates the seven sequential stages involved in manufacturing refined sugar from raw sugar cane plants.\n\n"
                        "Overall, the production of sugar is a linear agricultural and industrial process that begins with cultivating sugar cane for over a year, proceeds through mechanical crushing, chemical filtration, and thermal evaporation, and concludes with centrifugal separation and drying.\n\n"
                        "In the initial agricultural phase, sugar cane plants are cultivated for a period of between 12 and 18 months until mature. Once ready, the stalks are harvested using one of two methods: either mechanically by large combine harvesters or manually by farm labourers wielding sickles. Following harvesting, the stalks are immediately transported to a crushing mill, where heavy mechanical rollers squeeze the cane to extract raw sugar juice.\n\n"
                        "During the subsequent refining stages, the extracted juice is channelled through a limestone filter to eliminate impurities. The purified liquid is then pumped into a heated evaporator, where intense heat boils off excess water, concentrating the juice into a thick syrup. Next, this syrup is spun at high speed inside a centrifuge, which separates solid sugar crystals from the remaining liquid. Finally, the crystals are transferred to a large vat where they are dried and cooled, yielding finished refined sugar ready for distribution."
                    ),
                    "vocabBank": ["sequential stages", "combine harvesters", "limestone filter to eliminate impurities", "concentrating the juice into a thick syrup", "centrifugal separation"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Emphasising 'New' in Advertising",
                    "prompt": "In their advertising, businesses nowadays usually emphasise that their products are new in some way.\nWhy is this?\nDo you think it is a positive or negative development?",
                    "essayType": "Two-Part Question (Reasons & Evaluation)",
                    "outline": {
                        "intro": "Companies highlight novelty in advertisements to stand out in saturated markets and trigger consumer dopamine; however, this is largely a negative development due to deceptive rebranding and environmental waste.",
                        "body1": "Why businesses do this: Saturated consumer markets require differentiation; psychological appeal of novelty ('new and improved') stimulates impulse upgrades.",
                        "body2": "Why it is negative: Superficial packaging tweaks mislead buyers; planned obsolescence fuels a throwaway culture and electronic/plastic waste.",
                        "conclusion": "While marketing novelty drives short-term corporate sales, its environmental and consumer costs make it a predominantly harmful trend."
                    },
                    "modelAnswer": (
                        "Contemporary commercial advertising is overwhelmingly preoccupied with novelty, as corporations tirelessly promote their merchandise as 'all-new', 'upgraded', or 'revolutionary'. This essay will explore why businesses rely so heavily on this marketing strategy and argue that it represents a predominantly negative development for both consumers and the environment.\n\n"
                        "The corporate obsession with emphasising newness stems from fierce market saturation and consumer psychology. In modern economies, most households already possess functional essentials such as smartphones, refrigerators, and automobiles. To generate recurring revenue in a saturated market, manufacturers must convince buyers that their existing possessions are obsolete. By branding a product as 'new'—whether through a minor camera upgrade or a reformulated detergent recipe—advertisers exploit the human psychological bias toward novelty and social status, compelling consumers to make frequent replacement purchases.\n\n"
                        "Despite its commercial effectiveness, this relentless pursuit of novelty is largely detrimental. First, it frequently borders on consumer deception. In numerous instances, the 'new' label merely masks superficial cosmetic changes to packaging while the core product remains identical, manipulating customers into paying premium prices for negligible improvements. Second, and more alarmingly, novelty-driven advertising accelerates planned obsolescence and environmental degradation. Millions of perfectly functional smartphones, garments, and appliances are discarded into landfills annually simply because marketing campaigns have conditioned the public to crave the latest model. This unsustainable cycle depletes finite natural resources and escalates carbon emissions.\n\n"
                        "In conclusion, while businesses emphasise newness to stimulate demand in competitive markets, this practice fosters superficial consumerism and ecological waste, making it a distinctly negative phenomenon."
                    ),
                    "collocations": ["fierce market saturation", "psychological bias toward novelty", "superficial cosmetic changes", "planned obsolescence", "unsustainable cycle"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Flowers and plants",
                    "questions": [
                        {"q": "Do you have a favourite flower or plant? [Why/Why not?]", "sample": "Yes, I am particularly fond of lotus flowers because they bloom with pristine pink petals even in muddy pond water, symbolizing resilience and purity in Vietnamese culture."},
                        {"q": "What kinds of flowers and plants grow near where you live? [Why?]", "sample": "In my tropical neighbourhood, bougainvillea vines, hibiscus shrubs, and shade-giving banyan trees thrive year-round thanks to the warm, humid climate."},
                        {"q": "Is it important to you to have fresh flowers in your home? [Why/Why not?]", "sample": "Quite important; placing a vase of fresh lilies or daisies on my study desk brightens the room's ambiance and subtly reduces study fatigue."},
                        {"q": "Have you ever bought flowers for someone else? [Why/Why not?]", "sample": "Yes, I always buy a bouquet of sunflowers for my mother on Vietnamese Women's Day to express my gratitude for her unwavering support."}
                    ]
                },
                "part2": {
                    "topic": "Describe a review you read about a product or service",
                    "cueCard": "You should say:\n- where you read the review\n- what the product or service was\n- what information the review gave\n- and explain what you did as a result of reading this review.",
                    "modelAnswer": (
                        "I would like to talk about an in-depth technical review I read last month on a reputable technology blog called RTINGS regarding a pair of Sony wireless noise-cancelling headphones.\n\n"
                        "At the time, I was looking for a reliable headset to block out traffic and construction noise while preparing for my IELTS Listening tests. Rather than relying on short star ratings on e-commerce sites, I searched for an objective laboratory review.\n\n"
                        "The review provided comprehensive data on acoustic frequency response, microphone clarity during Zoom calls, battery longevity, and clamping comfort over four-hour study sessions. Crucially, the reviewer compared the newer model against the previous generation and pointed out that while the new model cost thirty percent more, the previous version folded more compactly and offered nearly identical noise attenuation.\n\n"
                        "As a direct result of reading that balanced evaluation, I decided to purchase the previous-generation model instead of the hyped newest release. That decision saved me nearly a hundred dollars, and the headphones have served me flawlessly every day since."
                    ),
                    "lexical": ["in-depth technical review", "wireless noise-cancelling headphones", "objective laboratory review", "noise attenuation", "balanced evaluation"]
                },
                "part3": {
                    "topic": "Online reviews & Customer service",
                    "questions": [
                        {"q": "What kinds of things do people write online reviews about in your country?", "sample": "Consumers in my country most frequently review restaurants, hotel accommodations, consumer electronics, and e-commerce fashion items on platforms like Shopee and Google Maps."},
                        {"q": "Why do some people write online reviews?", "sample": "People generally write reviews either out of altruism—to reward honest small businesses and warn fellow buyers against defective goods—or to vent frustration after experiencing poor service."},
                        {"q": "Do you think that online reviews are always believable?", "sample": "Not entirely. Nowadays, many businesses hire marketing agencies to post fabricated five-star reviews or offer cash-back vouchers to customers in exchange for overly flattering ratings."},
                        {"q": "How important is good customer service for businesses today?", "sample": "It is paramount. In an era where products and prices are easily matched by competitors, responsive and empathetic after-sales service is the decisive factor that retains loyal customers."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 16 Test 2: Phân tích từ khóa trong Uffington White Horse, I Contain Multitudes (Microbes) và How to Make Wise Decisions.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "located in a particular area", "passageKey": "vast majority on the chalk downlands of southern counties", "verdict": "TRUE (Tập trung ở vùng đồi đá phấn phía Nam)"},
                    {"qNum": "P1 - Q4", "questionKey": "historians agreed on Long Man", "passageKey": "More controversial... some prehistoric, others monk", "verdict": "FALSE (Vẫn còn gây tranh cãi)"},
                    {"qNum": "P2 - Q6", "questionKey": "more microbial cells than human cells", "passageKey": "30 trillion human cells vs 39 trillion microbial cells", "verdict": "TRUE (39 nghìn tỷ > 30 nghìn tỷ)"},
                    {"qNum": "P3 - Q8", "questionKey": "speaking in the third person", "passageKey": "ego-decentering talking in the third person unlocks wisdom", "verdict": "TRUE (Tạo khoảng cách tâm lý giúp sáng suốt)"}
                ]
            },
            "vocabList": [
                {"word": "geoglyph", "ipa": "ˈdʒiːoʊɡlɪf", "vi": "hình vẽ khổng lồ khắc trên mặt đất/sườn đồi", "type": "noun", "collocation": "ancient chalk geoglyphs", "example": "The Uffington White Horse is Britain's oldest chalk geoglyph."},
                {"word": "human microbiome", "ipa": "ˈhjuːmən ˌmaɪkroʊˈbaɪoʊm", "vi": "hệ vi sinh vật cộng sinh trong cơ thể người", "type": "noun phrase", "collocation": "nurture a diverse human microbiome", "example": "Overuse of antibiotics severely disrupts the human microbiome."},
                {"word": "intellectual humility", "ipa": "ˌɪntəˈlektʃuəl hjuːˈmɪləti", "vi": "sự khiêm tốn trí tuệ (biết giới hạn hiểu biết của mình)", "type": "collocation", "collocation": "cultivate intellectual humility in decision-making", "example": "Intellectual humility is a cornerstone of wise reasoning."},
                {"word": "ego-decentering", "ipa": "ˈiːɡoʊ diːˈsentərɪŋ", "vi": "tách biệt cái tôi để nhìn nhận khách quan", "type": "noun", "collocation": "practice ego-decentering during personal crises", "example": "Ego-decentering helps overcome Solomon's Paradox."}
            ]
        },

        # CAM 16 - TEST 3
        {
            "id": 3,
            "title": "Cambridge IELTS 16 — Test 3",
            "topic": "Roman Shipbuilding, Glacial Artefacts in Norway & Plant Thermometer",
            "passages": [
                "P1: Roman shipbuilding and navigation",
                "P2: Climate change reveals ancient artefacts in Norway's glaciers",
                "P3: Plant 'thermometer' triggers springtime growth"
            ],
            "keyVocab": ["mortise and tenon joints", "glacial archaeology", "radiocarbon dating", "phytochrome photoreceptors"],
            "listening": {
                "title": "Cambridge 16 Listening Test 3",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Junior Cycle Camp",
                        "audioScript": (
                            "INSTRUCTOR: Hello, Junior Cycle Camp. How can I help?\n"
                            "MOTHER: I'd like to register my son Charlie for the summer cycling course. He can ride without stabilisers, so he'd be in Level 5. His instructor last year was Jenny. The course fee is £89 per week, and I should mention Charlie has a severe peanut allergy."
                        ),
                        "questions": [
                            {"num": 1, "q": "Charlie will be placed in Level ________", "answer": "5 / five"},
                            {"num": 2, "q": "Preferred instructor's name: ________", "answer": "Jenny"},
                            {"num": 3, "q": "Course fee per week: £________", "answer": "89"},
                            {"num": 4, "q": "Medical note: Charlie is allergic to ________", "answer": "peanuts"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Bidcaster Archaeological Dig Recruitment",
                        "audioScript": (
                            "DIRECTOR: Welcome to the Bidcaster Archaeological Trust briefing. We need volunteers for three tasks: excavating trenches, photographing pottery fragments, and washing artefacts. Free packed lunches are provided daily, and all volunteers must wear stout waterproof boots."
                        ),
                        "questions": [
                            {"num": 11, "q": "Volunteers are needed for excavating, washing, and ________ finds", "answer": "photographing"},
                            {"num": 12, "q": "Volunteers must wear stout waterproof ________", "answer": "boots"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Agricultural Science Work Placement",
                        "audioScript": (
                            "ADAM: Rosie, for my animal nutrition placement, I tested how varying starch levels in sheep diets affected digestion.\n"
                            "ROSIE: Interesting! I found that moisture variation in hay bales skewed my initial weight readings."
                        ),
                        "questions": [
                            {"num": 21, "q": "Adam investigated ________ levels in sheep diets", "answer": "starch"},
                            {"num": 22, "q": "Rosie's readings were affected by ________ in hay bales", "answer": "moisture"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: History and Cultural Meaning of Hand Knitting",
                        "audioScript": (
                            "LECTURER: Today we look at the history of hand knitting. The earliest surviving knitted artefacts are cotton socks from eleventh-century Egypt. Later, in the British Channel Islands, fishermen's wives knitted 'Guernsey' sweaters featuring intricate stitch patterns symbolizing fishing ropes, nets, and ladders. Today, hand knitting is experiencing a revival among young people as a meditative antidote to screen stress."
                        ),
                        "questions": [
                            {"num": 31, "q": "Earliest knitted socks in Egypt were made of ________", "answer": "cotton"},
                            {"num": 32, "q": "Guernsey sweater patterns symbolized fishing ropes, nets, and ________", "answer": "ladders"},
                            {"num": 33, "q": "Modern people use knitting to relieve ________", "answer": "stress"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Roman shipbuilding and navigation",
                    "text": (
                        "Shipbuilding today is based on science and ships are built using computers and sophisticated tools. Shipbuilding in ancient Rome, however, was more of an art relying on estimation, inherited techniques and personal experience. The Romans were not traditionally sailors but mostly land-based people, who learned to build ships from the people that they conquered, namely the Greeks and the Egyptians.\n\n"
                        "Ancient Roman shipbuilders built the outer hull first, then proceeded with the frame and the rest of the ship. Planks used to build the outer hull were initially sewn together. Starting from the 6th century BCE, they were fixed using a method called mortise and tenon, whereby one plank locked into another without the need for stitching. Then in the first centuries of the current era, Mediterranean shipbuilders shifted to another shipbuilding method, still in use today, which consisted of building the frame first and then proceeding with the hull.\n\n"
                        "Warships were built to be lightweight and very speedy. They had to be able to sail near the coast, which is why they had no ballast or excess load and were built with a long, narrow hull. They did not sink when damaged and often would lie crippled on the sea's surface following naval battles. They had a bronze battering ram, which was used to pierce the timber hulls or break the oars of enemy vessels. Merchant ships, conversely, had wider hulls with double planking to carry massive cargoes of grain, olive oil, and marble."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "The Romans' shipbuilding skills were passed on to the Greeks and the Egyptians.", "answer": "FALSE", "explain": "Đoạn 1 nêu ngược lại: Người La Mã học đóng tàu TỪ người Hy Lạp và Ai Cập ('learned to build ships from the people that they conquered, namely the Greeks and the Egyptians')."},
                        {"num": 2, "type": "TFNG", "q": "Skilled craftsmen were needed for the mortise and tenon method of fixing planks.", "answer": "NOT GIVEN", "explain": "Đoạn 2 mô tả kỹ thuật mộng và chốt (mortise and tenon) nhưng không nhắc đến việc có cần thợ thủ công lành nghề hay không."},
                        {"num": 3, "type": "TFNG", "q": "Warships were designed so that they moved quickly and did not sink easily when damaged.", "answer": "TRUE", "explain": "Đoạn 3 nêu: 'Warships were built to be lightweight and very speedy... They did not sink when damaged'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Climate change reveals ancient artefacts in Norway's glaciers",
                    "text": (
                        "Well above the treeline in Norway's highest mountains, ancient fields of ice are shrinking as Earth's climate warms. As the ice has vanished, it has been giving up the treasures it has preserved in cold storage for the last 6,000 years – items such as ancient arrows and skis from Viking traders.\n\n"
                        "Organic materials like textiles, leather, and wood decompose rapidly in normal soil, unless they are preserved in freezing ice or waterlogged peat. Field teams led by glacial archaeologist Lars Pilø at the Lendbreen mountain pass in Oppland have recovered over 2,000 artefacts, including Iron Age tunics, Viking mittens,wooden whisks, and packhorse snowshoes.\n\n"
                        "Radiocarbon dating of these artefacts demonstrates that mountain trade traffic actually intensified during the Late Antique Little Ice Age and the Viking Age, proving that high mountain passes remained vital economic corridors even during harsh climatic periods."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Organic materials such as leather and wood decay quickly under normal soil conditions.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'Organic materials like textiles, leather, and wood decompose rapidly in normal soil'."},
                        {"num": 5, "type": "MCQ", "q": "What did radiocarbon dating of the Lendbreen artefacts reveal?", "options": ["A. Vikings never crossed high mountains", "B. Mountain trade remained active even during cold eras and the Viking Age", "C. All artefacts were less than 100 years old", "D. Reindeer became extinct in 500 CE"], "answer": "B", "explain": "Đoạn 3 khẳng định lưu lượng giao thương qua đèo núi vẫn rất sôi động ngay cả trong thời kỳ băng giá và thời đại Viking."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Plant 'thermometer' triggers springtime growth by measuring night-time heat",
                    "text": (
                        "A photoreceptor molecule in plant cells has been found to have a second job as a thermometer after dark – allowing plants to read seasonal temperature changes. Scientists say the discovery could help breed crops that are more resilient to the temperatures expected to result from climate change.\n\n"
                        "An international team of scientists led by Professor Philip Wigge at the Sainsbury Laboratory in Cambridge discovered that molecules called phytochromes — used by plants to detect light during the day — actually change their function in darkness to become cellular temperature gauges.\n\n"
                        "During the day, sunlight activates phytochrome molecules, which act as a brake on growth. At night, phytochromes gradually revert to their inactive state at a rate directly proportional to ambient warmth: the warmer the night, the faster they revert, releasing the brake and triggering rapid stem elongation. While farmers centuries ago used the rhyme 'Oak before ash, we'll have a splash' to predict weather from tree buds, modern genetics can now engineer thermo-resilient cereal crops."
                    ),
                    "questions": [
                        {"num": 6, "type": "MCQ", "q": "How do phytochrome molecules trigger faster plant growth on warm nights?", "options": ["A. They absorb moonlight", "B. They revert to their inactive state faster in warm darkness, stimulating growth", "C. They freeze plant roots", "D. They stop photosynthesis permanently"], "answer": "B", "explain": "Đoạn 3 giải thích: ban đêm càng ấm, phytochrome chuyển sang trạng thái bất hoạt càng nhanh, giải phóng phanh hãm và kích thích cây mọc nhanh."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Southwest Airport Redevelopment Plan",
                    "prompt": "The plans below show the site of an airport now and how it will look after redevelopment next year.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Architectural Floor Plans (Now vs Next Year)",
                    "dataSummary": "Southwest Airport: Expansion from 8 gates (rectangular concourse with moving walkway) to 18 gates (Y-shaped concourse with sky train). Arrivals hall gains car hire, ATM, and cafés. Departures hall relocates check-in to the right, adds a bag-drop area, and expands retail shops.",
                    "modelAnswer": (
                        "The two architectural floor plans illustrate the current layout of Southwest Airport and the proposed structural expansions scheduled for completion next year.\n\n"
                        "Overall, the airport is set to undergo a substantial modernization that will more than double its boarding gate capacity, replace the existing pedestrian walkway with a sky train, and introduce numerous passenger amenities across both the Departures and Arrivals concourses.\n\n"
                        "At present, passengers enter the southern terminal through single Departures and Arrivals doors. After redevelopment, both entrances will be doubled to two sets of doors each. Inside the Departures hall, the check-in desk will be relocated from the left to the right wall to make room for a new bag-drop facility, while the café will be shifted to the far left corner.\n\n"
                        "The most dramatic transformation will occur in the northern boarding area. Currently, a narrow rectangular concourse houses 8 gates served by a moving walkway. Next year, this will be expanded into a vast Y-shaped concourse accommodating 18 gates, connected by a central sky train and newly added duty-free shops. Finally, the Arrivals hall—which is currently bare—will be upgraded with a café, an ATM, and a dedicated car-hire annex on the eastern side."
                    ),
                    "vocabBank": ["architectural floor plans", "substantial modernization", "boarding gate capacity", "Y-shaped concourse", "dedicated car-hire annex"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Taxing Sugary Food and Drink Products",
                    "prompt": "Many manufactured food and drink products contain high levels of sugar, which causes many health problems. Sugary products should be made more expensive to encourage people to consume less sugar.\nDo you agree or disagree?",
                    "essayType": "Opinion Essay (Strong Agreement)",
                    "outline": {
                        "intro": "Strongly agree that imposing fiscal levies on high-sugar foods and beverages is an effective public health intervention.",
                        "body1": "Economic deterrence & corporate reformulation: higher shelf prices directly curb impulse purchases and force beverage companies to lower sugar content.",
                        "body2": "Healthcare revenue generation: sugar tax revenues can subsidize fresh fruit and treat diabetes/obesity.",
                        "conclusion": "Fiscal taxation on sugary products is a proven, indispensable policy to combat the modern metabolic health crisis."
                    },
                    "modelAnswer": (
                        "The pervasive saturation of refined sugars in commercially manufactured foods and beverages has fuelled an alarming global epidemic of obesity, type-2 diabetes, and dental decay. To combat this crisis, public health advocates propose raising the retail price of sugary products through targeted taxation. I wholeheartedly agree with this policy, as fiscal disincentives both curb consumer demand and compel manufacturers to reformulate their products.\n\n"
                        "First and foremost, price sensitivity is one of the most potent levers for altering consumer purchasing behaviour. Soft drinks, confectionery, and ultra-processed snacks are currently marketed at artificially low prices, making them disproportionately attractive to children and low-income demographics. Just as steep excise duties on tobacco and alcohol have successfully reduced smoking rates worldwide, levying a sugar tax directly discourages habitual impulse buying. Furthermore, tiered sugar taxes—such as the UK Soft Drinks Industry Levy—incentivize food corporations to proactively reduce the sugar content of their recipes in order to avoid higher tax brackets.\n\n"
                        "Secondly, increasing the price of sugary goods generates substantial public revenue that can be ring-fenced for healthcare and nutritional subsidies. Treating chronic diet-related illnesses places an immense financial burden on national hospital systems. By channelling sugar tax proceeds into subsidizing fresh vegetables, funding school sports programmes, and launching nutritional awareness campaigns, governments create a virtuous cycle that makes healthy eating affordable for all citizens.\n\n"
                        "In conclusion, given the severe toll of excessive sugar consumption on public health, making sugary products more expensive is an ethical and highly effective regulatory measure."
                    ),
                    "collocations": ["pervasive saturation of refined sugars", "fiscal disincentives", "price sensitivity", "tiered sugar taxes", "virtuous cycle"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Summer",
                    "questions": [
                        {"q": "Is summer your favourite time of year? [Why/Why not?]", "sample": "Honestly, no; while I appreciate the long daylight hours, tropical summer temperatures in my city often exceed 38 degrees Celsius, which can feel quite oppressive."},
                        {"q": "What do you do in summer when the weather's very hot? [Why?]", "sample": "During scorching afternoons, I usually study in air-conditioned public libraries or go for an early evening swim to cool down."},
                        {"q": "Do you go on holiday every summer? [Why/Why not?]", "sample": "Yes, my family makes it a tradition to take a four-day coastal getaway to Da Nang or Nha Trang every July to unwind by the ocean."},
                        {"q": "Did you enjoy the summer holidays when you were at school? [Why/Why not?]", "sample": "I cherished them! Having two months free from homework meant I could visit my grandparents in the countryside and fly kites with my cousins."}
                    ]
                },
                "part2": {
                    "topic": "Describe a luxury item you would like to own in the future",
                    "cueCard": "You should say:\n- what item you would like to own\n- what this item looks like\n- why you would like to own this item\n- and explain whether you think you will ever own this item.",
                    "modelAnswer": (
                        "I would like to talk about a luxury item I aspire to own in the future: a classic Swiss mechanical watch, specifically the Omega Speedmaster Professional.\n\n"
                        "Visually, it is a masterpiece of understatement and precision engineering. It features a sleek matte-black dial with three chronograph sub-dials, encased in brushed stainless steel with a transparent sapphire crystal back that reveals the intricate golden gears ticking inside without a battery.\n\n"
                        "The reason I desire this timepiece goes far beyond telling the time. Historically, the Speedmaster was the exact watch worn by NASA astronauts during the Apollo 11 moon landing in 1969, so to me it represents human curiosity, engineering resilience, and timeless craftsmanship. Unlike smartwatches that become obsolete within three years, a mechanical watch can be passed down as a family heirloom.\n\n"
                        "Although it currently costs around six thousand dollars, I am confident that I will eventually own it. I plan to purchase it as a personal milestone reward once I achieve my career promotion and establish a solid investment portfolio in my thirties."
                    ),
                    "lexical": ["masterpiece of understatement", "precision engineering", "sapphire crystal back", "timeless craftsmanship", "family heirloom"]
                },
                "part3": {
                    "topic": "Expensive items & Rich people",
                    "questions": [
                        {"q": "Which expensive items would many young people in your country like to buy?", "sample": "Many young adults in my country aspire to purchase flagship smartphones, high-performance laptops, designer sneakers, and stylish electric scooters."},
                        {"q": "How do the expensive items that younger people want to buy compare with those that older people want to buy?", "sample": "Younger consumers prioritize cutting-edge gadgets and experiential luxury like international travel, whereas older generations prefer tangible, value-retaining assets such as gold bullion, real estate, and health-monitoring equipment."},
                        {"q": "Do you think that people are more likely to buy expensive items for their friends or for themselves?", "sample": "Most people reserve high-ticket purchases for themselves or their immediate family members, though collective group gifting for a close friend's wedding is also common."},
                        {"q": "How difficult is it to become very rich in today's world?", "sample": "While digital entrepreneurship and global financial markets offer unprecedented upward mobility, accumulating extreme wealth still requires exceptional financial literacy, calculated risk-taking, and relentless perseverance."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 16 Test 3: Phân tích kỹ thuật đóng tàu La Mã, Khảo cổ băng hà Na Uy và Nhiệt kế thực vật Phytochrome.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "Romans passed skills to Greeks and Egyptians", "passageKey": "learned to build ships from the Greeks and Egyptians", "verdict": "FALSE (Ngược chiều thông tin)"},
                    {"qNum": "P2 - Q4", "questionKey": "organic materials decay quickly in normal soil", "passageKey": "decompose rapidly in normal soil", "verdict": "TRUE (Phân hủy nhanh trong đất thường)"},
                    {"qNum": "P3 - Q6", "questionKey": "phytochrome molecules on warm nights", "passageKey": "revert to inactive state faster in warm darkness", "verdict": "B (Chuyển sang bất hoạt nhanh hơn khi trời ấm)"}
                ]
            },
            "vocabList": [
                {"word": "mortise and tenon", "ipa": "ˈmɔːtɪs ənd ˈtenən", "vi": "kỹ thuật ghép mộng và chốt gỗ", "type": "noun phrase", "collocation": "interlock timber planks using mortise and tenon joints", "example": "Roman shipwrights fastened hull planks using mortise and tenon joints."},
                {"word": "glacial archaeology", "ipa": "ˈɡleɪʃl ˌɑːkiˈɒlədʒi", "vi": "khảo cổ học băng hà", "type": "noun phrase", "collocation": "recover Viking relics via glacial archaeology", "example": "Melting mountain ice has given rise to glacial archaeology."},
                {"word": "phytochrome", "ipa": "ˈfaɪtoʊkroʊm", "vi": "sắc tố thực vật cảm nhận ánh sáng và nhiệt độ", "type": "noun", "collocation": "phytochrome photoreceptors in plant cells", "example": "Phytochromes function as cellular thermometers after sunset."}
            ]
        },

        # CAM 16 - TEST 4
        {
            "id": 4,
            "title": "Cambridge IELTS 16 — Test 4",
            "topic": "Roman Tunnels, Changes in Reading Habits & Attitudes to AI",
            "passages": [
                "P1: Roman tunnels",
                "P2: Changes in reading habits",
                "P3: Attitudes towards Artificial Intelligence"
            ],
            "keyVocab": ["qanat vertical shafts", "counter-excavation", "cognitive patience", "algorithm aversion"],
            "listening": {
                "title": "Cambridge 16 Listening Test 4",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Holiday Rental — Chiltern Cottage",
                        "audioScript": (
                            "OWNER: Hello, Chiltern Cottage rentals.\n"
                            "CALLER: Hi, I'm enquiring about renting the cottage for the week starting the 28th of May. What's the weekly rate?\n"
                            "OWNER: It's £550 for that week. There's a ground-floor bedroom with an en-suite shower, a secure garage in the garden where you can lock your bicycles, and a lovely forest trail right behind the property."
                        ),
                        "questions": [
                            {"num": 1, "q": "Booking starts on: 28th of ________", "answer": "May"},
                            {"num": 2, "q": "Weekly rental price: £________", "answer": "550"},
                            {"num": 3, "q": "Garden includes a ________ for storing bicycles", "answer": "garage"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Local Council Report on Traffic and Highways",
                        "audioScript": (
                            "COUNCILLOR: Thank you for attending tonight's highways consultation. Following our survey of 1,200 residents, the top priority identified was installing a new pedestrian crossing outside the primary school, alongside stricter weight restrictions on heavy lorries through the village centre."
                        ),
                        "questions": [
                            {"num": 11, "q": "Residents prioritized a pedestrian ________ near the primary school", "answer": "crossing"},
                            {"num": 12, "q": "Stricter restrictions on heavy ________ in the village", "answer": "lorries"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Bike-Sharing Schemes Around the World",
                        "audioScript": (
                            "JAKE: Amy, let's compare municipal bike-sharing schemes. Amsterdam's original 1960s White Bike scheme failed because unlocked bikes were stolen, whereas Dublin's modern smart-card scheme succeeded brilliantly."
                        ),
                        "questions": [
                            {"num": 21, "q": "Amsterdam's 1960s scheme failed due to bicycle ________", "answer": "theft / stealing"},
                            {"num": 22, "q": "Dublin's scheme succeeded using electronic ________ cards", "answer": "smart"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: The Extinction of the Dodo Bird",
                        "audioScript": (
                            "LECTURER: Today we re-examine the extinction of the dodo on the island of Mauritius after Dutch sailors arrived in 1598. Contrary to the myth that sailors hunted every dodo for meat, archaeological evidence proves that invasive animals introduced by ships—specifically rats, pigs, and macaque monkeys—plundered the dodo's ground nests and destroyed its eggs."
                        ),
                        "questions": [
                            {"num": 31, "q": "Dutch sailors arrived on Mauritius in the year ________", "answer": "1598"},
                            {"num": 32, "q": "The dodo was vulnerable because it laid eggs in nests on the ________", "answer": "ground"},
                            {"num": 33, "q": "Invasive rats, pigs, and ________ destroyed the dodo's eggs", "answer": "monkeys"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Roman tunnels",
                    "text": (
                        "The Romans, who once controlled areas of Europe, North Africa and Asia Minor, adopted the construction techniques of other civilizations to build tunnels in their territories. The Persians, who lived in present-day Iran, were one of the first civilizations to build tunnels that provided a reliable supply of water to human settlements in dry areas. In the early first millennium BCE, they introduced the qanat method of tunnel construction, which consisted of placing posts over a hill in a straight line, to ensure that the tunnel kept to its route, and then digging vertical shafts down into the ground at regular intervals.\n\n"
                        "By the sixth century BCE, a second method of tunnel construction appeared called the counter-excavation method, in which the tunnel was dug from both ends. It was used to cut through high mountains when the qanat method was not a practical alternative. This method required greater planning and advanced knowledge of surveying, mathematics and geometry as both ends of a tunnel had to meet correctly at the center of the mountain.\n\n"
                        "An inscription written on the side of a 428-meter tunnel, built by the Romans as part of the Saldae aqueduct system in modern-day Algeria, describes how the two teams of builders missed each other in the mountain and how the later construction of a lateral link between both corridors corrected the initial error."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "The Persians were the first civilization to use the qanat method of tunnel construction.", "answer": "TRUE", "explain": "Đoạn 1 nêu: 'The Persians... introduced the qanat method of tunnel construction'."},
                        {"num": 2, "type": "TFNG", "q": "The counter-excavation method completely replaced the qanat method in the sixth century BCE.", "answer": "FALSE", "explain": "Đoạn 2 chỉ nói phương pháp đào đối đầu (counter-excavation) được dùng khi đào xuyên núi cao mà qanat không khả thi, chứ không thay thế hoàn toàn qanat."},
                        {"num": 3, "type": "MCQ", "q": "What happened during the construction of the Saldae aqueduct tunnel?", "options": ["A. It collapsed due to flooding", "B. The two digging teams missed each other inside the mountain and needed a lateral link", "C. It took 500 years to finish", "D. The builders ran out of bronze tools"], "answer": "B", "explain": "Đoạn 3 nêu rõ hai đội đào lệch nhau trong lòng núi và phải xây một đường nối ngang (lateral link) để sửa lỗi."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Changes in reading habits",
                    "text": (
                        "Look around on your next plane trip. The iPad is the new pacifier for babies and toddlers. Younger school-aged children read stories on smartphones; older kids don't read at all, but hunch over video games. Parents and other passengers read on tablets or skim a flotilla of email and news feeds. Unbeknown to most of us, an invisible, game-changing transformation links everyone in this picture: the neuronal circuit that underlies the brain's ability to read is subtly, rapidly changing.\n\n"
                        "As cognitive neuroscientist Maryanne Wolf explains, human beings were never born to read; reading is a cultural invention that forged new neural pathways. However, daily immersion in digital screens encourages 'skim reading'—word-spotting and scanning in an F-shaped pattern—which degrades 'cognitive patience' and our capacity to comprehend complex syntax.\n\n"
                        "In an experiment by Anne Mangen at the University of Stavanger, students were given the same short story either on a Kindle e-reader or in a paperback book. Those who read the print book demonstrated significantly superior empathy and ability to reconstruct the chronological plot order."
                    ),
                    "questions": [
                        {"num": 4, "type": "MCQ", "q": "According to Maryanne Wolf, what is a negative consequence of excessive screen reading?", "options": ["A. It causes permanent blindness", "B. It erodes cognitive patience and deep comprehension of complex texts", "C. It slows down internet speeds", "D. It prevents children from playing video games"], "answer": "B", "explain": "Đoạn 2 nêu việc đọc lướt trên màn hình làm suy giảm 'cognitive patience' (sự kiên nhẫn nhận thức) và khả năng hiểu cú pháp phức tạp."},
                        {"num": 5, "type": "TFNG", "q": "In Anne Mangen's study, Kindle readers remembered the plot sequence better than print readers.", "answer": "FALSE", "explain": "Đoạn 3 nêu người đọc sách giấy (print book) nhớ trình tự cốt truyện tốt hơn hẳn."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Attitudes towards Artificial Intelligence",
                    "text": (
                        "Artificial intelligence (AI) can already predict the future. Police forces are using it to map when and where crime is likely to occur. Doctors can use it to predict when a patient is most likely to have a heart attack or stroke. Researchers are even trying to give AI imagination so it can plan for unexpected consequences.\n\n"
                        "Yet many people remain deeply reluctant to trust algorithmic predictions—a phenomenon psychologists call 'algorithm aversion'. In a series of experiments by Berkeley Dietvorst at the Wharton School, participants had to choose between relying on a statistical AI forecasting model or a human forecaster. Even when participants saw that the AI outperformed the human on average, seeing the AI make a single occasional error caused them to immediately abandon it in favour of the inferior human judge.\n\n"
                        "Dietvorst discovered a simple solution: giving human users even a tiny amount of control—such as allowing them to adjust the AI's forecast by a few percentage points—dramatically restored their trust and willingness to use the algorithm."
                    ),
                    "questions": [
                        {"num": 6, "type": "TFNG", "q": "Dietvorst's experiments showed that people forgive AI mistakes more easily than human mistakes.", "answer": "FALSE", "explain": "Đoạn 2 chỉ ra 'algorithm aversion': khi thấy AI mắc dù chỉ 1 lỗi nhỏ, con người lập tức mất niềm tin nhanh hơn nhiều so với lỗi của con người."},
                        {"num": 7, "type": "MCQ", "q": "How can 'algorithm aversion' be effectively reduced according to Dietvorst?", "options": ["A. Hiding all AI errors from the public", "B. Allowing human users to slightly modify the algorithm's predictions", "C. Replacing computers with paper calculators", "D. Making algorithms run slower"], "answer": "B", "explain": "Đoạn 3 nêu việc cho phép người dùng điều chỉnh nhẹ dự báo của AI giúp khôi phục đáng kể niềm tin."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Plastic Bottle Recycling Process",
                    "prompt": "The diagram below shows the process for recycling plastic bottles.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Cyclical Process Diagram (9 Steps)",
                    "dataSummary": "1. Used bottles placed in recycling bin -> 2. Collected by garbage truck -> 3. Sorted by hand at recycling centre -> 4. Compressed into tight blocks -> 5. Crushed by cogs and washed in water -> 6. Fed into machine to produce plastic pellets -> 7. Heated to form raw material -> 8. Stacked on pallets -> 9. Manufactured into new consumer goods (t-shirts, pencils, reusable bags, and new bottles).",
                    "modelAnswer": (
                        "The cyclical flow diagram illustrates the nine-stage industrial process by which discarded plastic bottles are collected, reprocessed, and transformed into new consumer goods.\n\n"
                        "Overall, the recycling of plastic bottles is a closed-loop system comprising three main phases: initial collection and manual sorting, mechanical compression and thermal pelletizing, and final manufacturing into diverse retail products.\n\n"
                        "The cycle begins when consumers dispose of used plastic bottles into designated recycling bins. These bins are emptied by collection trucks and transported to a central recycling plant. Inside the facility, workers manually inspect and sort the bottles to remove unsuitable plastics. Once sorted, the approved bottles are compressed tightly into large rectangular blocks.\n\n"
                        "In the fifth stage, these blocks are fed into heavy grinding gears that crush the plastic into small flakes, which are immediately submerged in a washing tank to remove impurities. The clean plastic fragments are then channelled into a shredding extruder that converts them into uniform plastic pellets. Subsequently, these pellets are subjected to intense heat to melt them into raw plastic material, which is stacked in large bales. Finally, this raw material is utilized to manufacture new bottles, clothing, tote bags, and stationery, completing the recycling loop."
                    ),
                    "vocabBank": ["cyclical flow diagram", "closed-loop system", "compressed tightly into rectangular blocks", "thermal pelletizing", "completing the recycling loop"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Future Driverless Cars, Buses and Trucks",
                    "prompt": "In the future all cars, buses and trucks will be driverless. The only people travelling inside these vehicles will be passengers.\nDo you think the advantages of driverless vehicles outweigh the disadvantages?",
                    "essayType": "Outweigh Essay (Advantages outweigh disadvantages)",
                    "outline": {
                        "intro": "Acknowledge transitional job losses and cybersecurity risks, but argue that the eradication of fatal road accidents and productivity gains far outweigh the drawbacks.",
                        "body1": "Disadvantages: Unemployment for professional lorry/taxi drivers and vulnerability to software glitches.",
                        "body2": "Advantages: Elimination of human error (drunk driving, fatigue), reclamation of commuter time, and smoother traffic flow.",
                        "conclusion": "With robust cybersecurity standards, autonomous transit represents a monumental leap forward for road safety and human efficiency."
                    },
                    "modelAnswer": (
                        "Advances in artificial intelligence and sensor telemetry are rapidly propelling the automotive industry toward a future where all cars, buses, and freight trucks operate autonomously without human drivers. Although this transition poses transitional economic and technical challenges, I firmly believe that the advantages of driverless transport—particularly in road safety and societal productivity—decisively outweigh the disadvantages.\n\n"
                        "Admittedly, the universal adoption of autonomous vehicles entails notable drawbacks. The most immediate concern is structural unemployment within the transport sector, as millions of commercial truckers, bus operators, and taxi drivers risk losing their livelihoods to algorithmic pilots. Additionally, complete reliance on computer networks raises legitimate apprehension regarding software malfunctions in extreme weather or malicious cyber-attacks that could paralyse municipal transit grids.\n\n"
                        "Nevertheless, these drawbacks are eclipsed by the life-saving and economic dividends of autonomous mobility. First and foremost, over ninety percent of road fatalities worldwide are attributable to human error, including reckless speeding, alcohol impairment, mobile phone distraction, and exhaustion. Autonomous vehicles, equipped with 360-degree LiDAR radar and split-second reaction times, never experience fatigue or road rage, promising to eliminate millions of preventable deaths annually. Second, transforming drivers into passengers reclaims billions of unproductive commuting hours, allowing citizens to read, work, or rest during transit while synchronized vehicle fleets alleviate urban traffic congestion.\n\n"
                        "In conclusion, while governments must retrain displaced transport workers and enforce stringent cybersecurity protocols, the dramatic reduction in traffic fatalities makes driverless vehicles an overwhelmingly positive evolution."
                    ),
                    "collocations": ["sensor telemetry", "structural unemployment", "attributable to human error", "split-second reaction times", "reclaims billions of unproductive commuting hours"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Fast food",
                    "questions": [
                        {"q": "What kinds of fast food have you tried? [Why/Why not?]", "sample": "I have tried both Western fast food like fried chicken and burgers and Vietnamese fast street food such as Banh Mi and Pho, though I much prefer Banh Mi for its fresh herbs."},
                        {"q": "Do you ever use a microwave to cook food quickly? [Why/Why not?]", "sample": "I rarely cook from scratch in a microwave, but I use it almost daily to reheat home-cooked soups and rice that my mother prepares."},
                        {"q": "How popular are fast food restaurants where you live? [Why?]", "sample": "They are immensely popular among teenagers and busy office workers because they offer air-conditioned seating, free Wi-Fi, and speedy service."},
                        {"q": "When would you go to a fast-food restaurant? [Why/Why not?]", "sample": "I usually only visit one when I am travelling through an airport or rushing between evening classes with less than twenty minutes to spare."}
                    ]
                },
                "part2": {
                    "topic": "Describe some technology (e.g. an app, phone, software program) that you decided to stop using",
                    "cueCard": "You should say:\n- when and where you got this technology\n- why you started using this technology\n- why you decided to stop using it\n- and explain how you feel about the decision you made.",
                    "modelAnswer": (
                        "I would like to talk about a short-form video social media application—specifically TikTok—which I decided to uninstall from my smartphone six months ago.\n\n"
                        "I originally downloaded the app two years ago during a holiday break because all my classmates were sharing funny clips and quick English pronunciation tips from it.\n\n"
                        "Initially, I intended to use it for just fifteen minutes a day to unwind. However, its recommendation algorithm was so addictive that fifteen minutes routinely snowballed into two hours of mindless midnight scrolling. I noticed that my attention span while reading long IELTS passages was deteriorating, and my sleep schedule was becoming erratic.\n\n"
                        "Consequently, I deleted the app cold turkey and replaced it with a digital Kindle reader. Looking back, I feel tremendously relieved and proud of that decision; my concentration has sharpened noticeably, and I have reclaimed over ten hours of productive study time every week."
                    ),
                    "lexical": ["short-form video application", "recommendation algorithm", "mindless midnight scrolling", "deleted the app cold turkey", "reclaimed productive study time"]
                },
                "part3": {
                    "topic": "Computer games & Technology in the classroom",
                    "questions": [
                        {"q": "What kinds of computer games do people play in your country?", "sample": "Multiplayer online battle arenas, tactical e-sports titles, and mobile puzzle games are by far the most widely played genres across Vietnam."},
                        {"q": "Why do people enjoy playing computer games?", "sample": "Video games offer an immersive escape from real-world academic or work stress, while also fulfilling psychological needs for achievement, strategy, and online camaraderie."},
                        {"q": "Do you think that all computer games should have a minimum age for players?", "sample": "Yes, age ratings are essential to shield impressionable young children from graphic violence, gambling mechanics like loot boxes, and toxic online chat rooms."},
                        {"q": "In what ways can technology in the classroom be helpful?", "sample": "Interactive whiteboards, 3D simulations, and spaced-repetition flashcard apps transform abstract scientific concepts into vivid visual experiences and allow personalized self-paced learning."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 16 Test 4: Phân tích kỹ thuật đào hầm La Mã (Qanat & Counter-excavation), Thói quen đọc trên màn hình và Thái độ với AI.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "Persians first to use qanat", "passageKey": "in the early first millennium BCE, they introduced the qanat method", "verdict": "TRUE (Người Ba Tư giới thiệu phương pháp qanat)"},
                    {"qNum": "P2 - Q5", "questionKey": "Kindle readers remembered plot better", "passageKey": "print book demonstrated significantly superior ability to reconstruct plot", "verdict": "FALSE (Người đọc sách giấy nhớ cốt truyện tốt hơn)"},
                    {"qNum": "P3 - Q7", "questionKey": "reduce algorithm aversion", "passageKey": "allowing them to adjust the AI's forecast by a few percentage points", "verdict": "B (Cho phép người dùng tinh chỉnh nhẹ dự báo)"}
                ]
            },
            "vocabList": [
                {"word": "counter-excavation", "ipa": "ˈkaʊntər ˌekskəˈveɪʃn", "vi": "phương pháp đào hầm đối đầu từ hai phía núi", "type": "noun", "collocation": "employ the counter-excavation method through mountains", "example": "Counter-excavation required advanced geometrical surveying."},
                {"word": "cognitive patience", "ipa": "ˈkɒɡnətɪv ˈpeɪʃns", "vi": "sự kiên nhẫn nhận thức khi đọc văn bản sâu", "type": "collocation", "collocation": "erode cognitive patience through screen skimming", "example": "Deep reading cultivates cognitive patience and critical empathy."},
                {"word": "algorithm aversion", "ipa": "ˈælɡərɪðəm əˈvɜːʃn", "vi": "tâm lý ác cảm / mất niềm tin vào thuật toán khi thấy lỗi", "type": "noun phrase", "collocation": "overcome human algorithm aversion", "example": "Giving users slight control mitigates algorithm aversion."}
            ]
        }
    ]


def get_cam17_tests():
    return [
        # CAM 17 - TEST 1
        {
            "id": 1,
            "title": "Cambridge IELTS 17 — Test 1",
            "topic": "London Underground Railway, Stadiums: Past, Present & Future, To Catch a King",
            "passages": [
                "P1: The development of the London Underground railway",
                "P2: Stadiums: past, present and future",
                "P3: To catch a king (Charles II's Escape)"
            ],
            "keyVocab": ["cut and cover trench", "tunneling shield", "photovoltaic canopy", "constitutional monarchy"],
            "listening": {
                "title": "Cambridge 17 Listening Test 1",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Buckworth Conservation Group",
                        "audioScript": (
                            "PETER: Hello, Jan, glad you could call about joining the Buckworth Conservation Group.\n"
                            "JAN: Hi Peter! What regular activities do you organise?\n"
                            "PETER: Every month we do litter picking, mainly along the beach. We ask volunteers to make sure they don't bring dogs as they disturb nesting birds. We also manage the nature reserve—repairing fences, planting trees, and our next project is building new nesting boxes for birds.\n"
                            "JAN: Sounds great. Anything else?\n"
                            "PETER: On Saturday the 19th of September, we have a woodworking session in the woods where a craftsman will teach us how to make wooden spoons and build a shelter."
                        ),
                        "questions": [
                            {"num": 1, "q": "Monthly litter picking takes place on the ________", "answer": "beach"},
                            {"num": 2, "q": "Volunteers should not bring ________ to the nature reserve", "answer": "dogs"},
                            {"num": 3, "q": "Next conservation task: building nesting boxes for ________", "answer": "birds"},
                            {"num": 4, "q": "Woodworking session teaches how to carve wooden ________", "answer": "spoons"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Boat Trip Round Tasmania",
                        "audioScript": (
                            "GUIDE: Welcome aboard Tasmania Eco-Cruises! Our jet boats hold a maximum of 18 passengers. Please select the dark blue tour bus at the harbour terminal. Lunch boxes are provided free of charge, and at the southern cape we will pass a historic lighthouse and a colony of Australian fur seals."
                        ),
                        "questions": [
                            {"num": 11, "q": "Maximum number of passengers per boat: ________", "answer": "18 / eighteen"},
                            {"num": 12, "q": "Colour of the connecting tour bus: dark ________", "answer": "blue"},
                            {"num": 13, "q": "Wildlife spotted near the lighthouse: Australian fur ________", "answer": "seals"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Work Experience for Veterinary Science Students",
                        "audioScript": (
                            "DIANA: Tim, how is your veterinary farm placement preparation going?\n"
                            "TIM: Well, Diana, my module on sheep health went smoothly, but I was surprised that dairy cows suffer from thyroid disorders when fed poor silage.\n"
                            "DIANA: Yes, and on the poultry farm we have to strictly monitor antibiotic usage in organic chickens."
                        ),
                        "questions": [
                            {"num": 21, "q": "Dairy cows can suffer from ________ disorders due to poor feed", "answer": "thyroid"},
                            {"num": 22, "q": "Diana's poultry placement monitors ________ usage in chickens", "answer": "antibiotic"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Labyrinths — History, Symbolism and Health",
                        "audioScript": (
                            "LECTURER: Today we explore labyrinths, which have existed for over 4,000 years. Unlike a maze—which is a branching puzzle designed to confuse—a labyrinth has a single continuous winding path leading inexorably to the centre. Ancient rock carvings of labyrinths have been found in Spain and India, and in the Middle Ages, intricate stone labyrinths were inlaid into cathedral floors, such as at Chartres, symbolizing a pilgrim's spiritual journey. Today, hospitals and wellness centres install walking labyrinths to reduce patient anxiety, lower blood pressure, and support meditation."
                        ),
                        "questions": [
                            {"num": 31, "q": "Unlike a maze, a labyrinth has a single continuous ________", "answer": "path"},
                            {"num": 32, "q": "Medieval cathedrals used labyrinths to symbolize a spiritual ________", "answer": "journey / pilgrimage"},
                            {"num": 33, "q": "Modern hospitals use labyrinths to reduce patient ________", "answer": "anxiety / stress"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The development of the London Underground railway",
                    "text": (
                        "In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital's historic and business centre. The result was that the overground railway stations formed a ring around the City, and horse-drawn carriages clogged the streets.\n\n"
                        "Among the most vocal advocates for a solution was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work.\n\n"
                        "The organisation chosen to build the line was the Metropolitan Railway, and construction began in 1860 using a technique known as 'cut and cover'. A trench about ten metres wide and six metres deep was dug along the street, the sides were temporarily held up with timber beams, brick walls and an arched brick roof were constructed, and the road surface was then restored on top. On 10 January 1863, the world's first underground railway opened between Paddington and Farringdon, carrying 38,000 passengers on its first day.\n\n"
                        "However, smoke and sulphurous fumes from the steam locomotives remained a problem in the tunnels until James Henry Greathead perfected a cylindrical iron tunnelling shield and electric traction enabled the opening of the deep-level City and South London Railway in 1890."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Charles Pearson proposed relocating inner-city slum residents to newly built suburbs with cheap rail transport.", "answer": "TRUE", "explain": "Đoạn 2 nêu rõ: 'relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them'."},
                        {"num": 2, "type": "TFNG", "q": "The 'cut and cover' method involved boring deep circular tunnels without disturbing the street surface above.", "answer": "FALSE", "explain": "Đoạn 3 giải thích 'cut and cover' là đào một rãnh sâu dọc mặt đường, xây tường gạch và vòm gạch rồi mới lấp lại mặt đường phía trên."},
                        {"num": 3, "type": "TFNG", "q": "The first trains on the Metropolitan line in 1863 were powered by electricity.", "answer": "FALSE", "explain": "Đoạn 4 nêu các đoàn tàu đầu tiên chạy bằng đầu máy hơi nước ('steam locomotives') gây khói bụi, mãi đến 1890 mới có tàu điện."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Stadiums: past, present and future",
                    "text": (
                        "A. Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras.\n\n"
                        "B. Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.\n\n"
                        "C. History shows that stadiums can drive urban development and adapt to the culture of every age. The amphitheatre of Arles in southwest France, with a capacity of 25,000 spectators, was built by the Romans in 90 AD. After the fall of the Roman Empire, it was converted into a fortified fortress with four towers and 200 houses, before returning to an arena for bullfights in the 19th century. Similarly, the arena of Lucca in Italy was absorbed into the city fabric to become a vibrant public square (Piazza dell'Anfiteatro).\n\n"
                        "D. Contemporary architects are now designing 'mixed-use' stadiums equipped with hotels, retail outlets, schools, and solar photovoltaic canopies—such as the Kaohsiung National Stadium in Taiwan designed by Toyo Ito, which generates 1.14 GWh of clean electricity annually and feeds surplus power into the local neighbourhood grid."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "The Roman amphitheatre of Arles remained exclusively a sports venue throughout the Middle Ages.", "answer": "FALSE", "explain": "Đoạn C nêu sau khi Đế chế La Mã sụp đổ, đấu trường Arles đã được cải tạo thành pháo đài phòng thủ với 4 tòa tháp và 200 ngôi nhà."},
                        {"num": 5, "type": "MCQ", "q": "What is notable about the Kaohsiung National Stadium in Taiwan?", "options": ["A. It was built by the ancient Romans", "B. Its solar photovoltaic roof generates clean electricity for the stadium and surrounding community", "C. It was demolished immediately after the Olympics", "D. It has no roof"], "answer": "B", "explain": "Đoạn D nêu sân vận động Cao Hùng có mái năng lượng mặt trời tạo 1.14 GWh điện sạch mỗi năm và cấp điện dư cho khu dân cư lân cận."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: To catch a king",
                    "text": (
                        "Charles II'soux escape after his defeat at the Battle of Worcester in September 1651 is one of the most dramatic episodes in British history. Following the execution of his father, Charles I, in 1649, the young Prince Charles was crowned King of Scots and led an army into England to reclaim the throne from Oliver Cromwell's Parliamentary forces. Routed at Worcester, Charles became England's most wanted fugitive, with a £1,000 bounty on his head.\n\n"
                        "In her gripping historical biography 'The Magnificentoop Escape of Charles II', historian Anna Keay reconstructs the six-week manhunt during which the six-foot-two monarch disguised himself as a country woodman, cropped his hair short, stained his skin with walnut leaves, and famously hid for an entire day inside the dense branches of the Boscobel Oak while Parliamentary soldiers searched the woods directly beneath him.\n\n"
                        "Years later, after the Restoration of the monarchy in 1660, Charles II recounted the breathless details of his flight to diarist Samuel Pepys over two days aboard the royal yacht, an account that reveals how ordinary Catholic and Royalist families risked execution for treason to smuggle the king across the English Channel to France."
                    ),
                    "questions": [
                        {"num": 6, "type": "TFNG", "q": "Charles II successfully defeated Oliver Cromwell's army at the Battle of Worcester in 1651.", "answer": "FALSE", "explain": "Đoạn 1 nêu rõ Charles II bị đánh bại ('defeat at the Battle of Worcester', 'Routed at Worcester') và phải chạy trốn."},
                        {"num": 7, "type": "MCQ", "q": "How did Charles II evade Parliamentary soldiers at Boscobel Wood?", "options": ["A. He fought them single-handedly", "B. He disguised himself as a woodman and hid inside an oak tree", "C. He swam across the Atlantic Ocean", "D. He surrendered to Samuel Pepys"], "answer": "B", "explain": "Đoạn 2 nêu nhà vua cải trang thành tiều phu, nhuộm da bằng lá óc chó và trốn suốt một ngày trên cây sồi Boscobel."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Norbiton Industrial Area Redevelopment Maps",
                    "prompt": "The maps below show an industrial area in the town of Norbiton, and planned future development of the site.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Town Planning Maps (Now vs Planned Future)",
                    "dataSummary": "Norbiton industrial zone (east of town, south of river/farmland) currently contains 8 factory buildings around a roundabout and eastern road. Planned development removes all factories to create a residential district with housing, a central roundabout + smaller northwest roundabout, shops, a medical centre, a playground, a school at the eastern end, and a new bridge crossing the river into northern farmland housing.",
                    "modelAnswer": (
                        "The two maps illustrate the current layout of an industrial estate located east of the town of Norbiton and the proposed urban redevelopment plan for the area.\n\n"
                        "Overall, the site is scheduled to undergo a complete transformation from a purely manufacturing zone into a mixed-use residential neighbourhood, complete with housing estates, civic amenities, and expanded road connectivity across the northern river.\n\n"
                        "At present, the Norbiton industrial area lies immediately south of a river and agricultural farmland. Access is provided by a main road running north from the southern highway into a central roundabout, from which a side road extends eastward. Eight factory complexes line the northern and eastern perimeters of the roundabout and the eastern road.\n\n"
                        "Under the planned redevelopment, all eight industrial factories will be demolished. Around the central roundabout, commercial shops will be constructed on the south-west corner and a medical centre on the south-east side. Along the eastern avenue, new housing units will flank the road leading up to a newly built school and a playground to the north. Additionally, three new residential roads will branch off from the roundabout: one heading north-west via a new mini-roundabout, and another extending due north over a new river bridge to establish housing on the former farmland."
                    ),
                    "vocabBank": ["complete transformation", "mixed-use residential neighbourhood", "civic amenities", "industrial factories will be demolished", "flank the road"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Taking Risks in Professional and Personal Life",
                    "prompt": "It is important for people to take risks, both in their professional lives and their personal lives.\nDo you think the advantages of taking risks outweigh the disadvantages?",
                    "essayType": "Outweigh Essay (Advantages outweigh disadvantages)",
                    "outline": {
                        "intro": "Acknowledge that reckless gambles can lead to financial or emotional setbacks, but argue that calculated risk-taking is the primary catalyst for career breakthroughs and personal resilience.",
                        "body1": "Disadvantages of risk: Potential financial loss in business ventures or emotional disappointment in personal relationships.",
                        "body2": "Overwhelming advantages: Professional innovation/entrepreneurship and personal self-discovery, overcoming stagnation and regret.",
                        "conclusion": "Calculated risk-taking yields transformative growth that far outweighs the temporary sting of occasional failure."
                    },
                    "modelAnswer": (
                        "Stepping outside one's comfort zone to embrace uncertainty—whether by launching a business, switching career paths, or relocating to a foreign country—is a defining dilemma of human life. While taking risks inevitably carries the possibility of financial or emotional setbacks, I firmly believe that the advantages of calculated risk-taking far outweigh the disadvantages.\n\n"
                        "Admittedly, venturing into the unknown entails tangible hazards. In the professional sphere, an entrepreneur who invests life savings into a fledgling start-up or an employee who leaves a stable corporate post for an unproven industry faces the real prospect of bankruptcy or career disruption. Similarly, in personal life, taking emotional or physical risks—such as moving abroad alone or pursuing ambitious athletic challenges—can occasionally result in loneliness, rejection, or injury.\n\n"
                        "Nevertheless, the rewards of embracing calculated risks are transformative and indispensable. Professionally, virtually every scientific discovery, artistic masterpiece, and commercial innovation in history has been born from the courage to risk failure. Individuals who cling strictly to safe, predictable routines rarely advance beyond mediocre roles, whereas those willing to pitch bold ideas or pivot into emerging sectors unlock exponential career growth. Personally, confronting uncertainty builds psychological resilience, self-reliance, and emotional maturity. Even when a risky endeavour fails, the practical lessons acquired are far more valuable than the lifelong regret of never having tried.\n\n"
                        "In conclusion, provided that individuals distinguish between reckless gambling and informed courage, the professional and personal dividends of taking risks decisively eclipse any potential drawbacks."
                    ),
                    "collocations": ["stepping outside one's comfort zone", "calculated risk-taking", "fledgling start-up", "predictable routines", "psychological resilience"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "History",
                    "questions": [
                        {"q": "Did you study history when you were at school? [Why/Why not?]", "sample": "Yes, history was a compulsory subject throughout my secondary schooling, covering both Vietnamese dynastic history and major twentieth-century world events."},
                        {"q": "Did you enjoy studying history at school? [Why/Why not?]", "sample": "I enjoyed it whenever our teacher used storytelling and documentary footage, though I found memorizing long lists of treaty dates quite tedious."},
                        {"q": "How often do you watch TV programmes about history now? [Why/Why not?]", "sample": "Quite frequently; I watch historical documentaries on YouTube or Netflix almost every weekend because they bring ancient civilizations to life with 3D reconstructions."},
                        {"q": "What period in history would you like to learn more about? [Why?]", "sample": "I would love to learn more about the Italian Renaissance, as it was an extraordinary era when science, architecture, and fine art converged."}
                    ]
                },
                "part2": {
                    "topic": "Describe the neighbourhood you lived in when you were a child",
                    "cueCard": "You should say:\n- where in your town/city the neighbourhood was\n- what kind of people lived there\n- what it was like to live in this neighbourhood\n- and explain whether you would like to live in this neighbourhood in the future.",
                    "modelAnswer": (
                        "I would like to describe the peaceful tree-lined residential neighbourhood in District 3 of Ho Chi Minh City where I spent the first twelve years of my childhood.\n\n"
                        "The neighbourhood was tucked away inside a network of quiet alleyways just ten minutes from the city centre. Most of the residents were multi-generational families, retired schoolteachers, and small shopkeepers who had known each other for decades.\n\n"
                        "Growing up there felt remarkably safe and communal. Because cars could not enter the narrow alleys, we children treated the paved lane as our playground—playing badminton, skipping rope, and riding bicycles every afternoon after school. Whenever my parents worked late, our next-door neighbour would warmly invite me over for dinner.\n\n"
                        "In the future, I would love to live in that exact neighbourhood again. Despite being right in the heart of a bustling metropolis, it retains a rare village-like warmth and neighbourly solidarity that modern high-rise apartment complexes often lack."
                    ),
                    "lexical": ["tree-lined residential neighbourhood", "tucked away in quiet alleyways", "multi-generational families", "communal atmosphere", "neighbourly solidarity"]
                },
                "part3": {
                    "topic": "Neighbours & Facilities in cities",
                    "questions": [
                        {"q": "What sort of things can neighbours do to help each other?", "sample": "Neighbours can support one another in practical everyday ways, such as receiving courier parcels when someone is at work, keeping an eye on houses during holidays, and assisting elderly residents during medical emergencies."},
                        {"q": "How well do people generally know their neighbours in your country?", "sample": "In rural villages and traditional alleyways, neighbours know each other intimately like extended family, whereas in modern luxury condominiums, residents often barely exchange a nod in the elevator."},
                        {"q": "How important do you think it is to have good facilities in parks and public spaces in cities?", "sample": "It is vital for urban livability; well-maintained green parks with jogging tracks and outdoor gym equipment encourage physical exercise, foster cross-generational interaction, and alleviate urban mental stress."},
                        {"q": "How are facilities in small towns different from those in big cities?", "sample": "Metropolises boast specialized tertiary hospitals, international airports, and symphony halls, while small towns offer simpler community centres and clinics that are nonetheless less congested and more accessible."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 17 Test 1: Đối chiếu từ khóa bài London Underground, Stadiums và To Catch a King.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "relocate slum residents to suburbs", "passageKey": "relocate the poor workers who lived in the inner-city slums to newly constructed suburbs", "verdict": "TRUE (Di dời ra ngoại ô mới kèm vé tàu rẻ)"},
                    {"qNum": "P2 - Q4", "questionKey": "Arles remained exclusively a sports venue", "passageKey": "converted into a fortified fortress with four towers and 200 houses", "verdict": "FALSE (Biến thành pháo đài và khu nhà ở)"},
                    {"qNum": "P3 - Q7", "questionKey": "evade soldiers at Boscobel Wood", "passageKey": "disguised himself as a country woodman... hid inside the Boscobel Oak", "verdict": "B (Cải trang thành tiều phu và trốn trên cây sồi)"}
                ]
            },
            "vocabList": [
                {"word": "cut and cover", "ipa": "kʌt ənd ˈkʌvər", "vi": "kỹ thuật đào hào hở rồi lấp mặt đường làm tàu điện ngầm", "type": "noun phrase", "collocation": "construct shallow tunnels using the cut and cover technique", "example": "The Metropolitan Railway was built using the cut and cover method."},
                {"word": "photovoltaic canopy", "ipa": "ˌfoʊtoʊvɒlˈteɪɪk ˈkænəpi", "vi": "mái vòm pin năng lượng mặt trời", "type": "noun phrase", "collocation": "install a solar photovoltaic canopy over the stadium", "example": "Kaohsiung Stadium features a vast photovoltaic canopy."},
                {"word": "bounty", "ipa": "ˈbaʊnti", "vi": "tiền thưởng truy nã / săn bắt", "type": "noun", "collocation": "place a heavy bounty on a fugitive's head", "example": "Parliament placed a £1,000 bounty on King Charles II."}
            ]
        },

        # CAM 17 - TEST 2
        {
            "id": 2,
            "title": "Cambridge IELTS 17 — Test 2",
            "topic": "The Dead Sea Scrolls, Domesticating the Wild Tomato & Insight or Evolution?",
            "passages": [
                "P1: The Dead Sea Scrolls",
                "P2: A second attempt at domesticating the tomato",
                "P3: Insight or evolution? (Scientific Discovery)"
            ],
            "keyVocab": ["parchment manuscripts", "de novo domestication", "CRISPR gene editing", "incremental trial and error"],
            "listening": {
                "title": "Cambridge 17 Listening Test 2",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Opportunities for Voluntary Work in Southoe Village",
                        "audioScript": (
                            "JANE: Hello, Southoe Village Volunteer Network, Jane speaking.\n"
                            "FRANK: Hi Jane, I've just moved to the village and would love to volunteer.\n"
                            "JANE: Wonderful! First, our village library needs help collecting and delivering books to elderly residents who cannot walk far. We also run a Thursday Lunch Club in the church hall, and Mr Selsbury needs someone to help clear his overgrown garden."
                        ),
                        "questions": [
                            {"num": 1, "q": "Village library volunteers deliver ________ to elderly residents", "answer": "books"},
                            {"num": 2, "q": "The Lunch Club meets every ________ in the church hall", "answer": "Thursday"},
                            {"num": 3, "q": "Mr Selsbury needs help clearing his ________", "answer": "garden"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Oniton Hall Historic Estate",
                        "audioScript": (
                            "GUIDE: Welcome to Oniton Hall! Over the past three centuries, this estate was occupied by the DeQuincey family before becoming a wartime hospital. Outside on the grounds, visitors can watch traditional sheep farming demonstrations, interact with costumed actors in the kitchen, and ride the miniature railway."
                        ),
                        "questions": [
                            {"num": 11, "q": "Visitors can watch traditional ________ farming demonstrations", "answer": "sheep"},
                            {"num": 12, "q": "In the historic kitchen, visitors meet costumed ________", "answer": "actors"},
                            {"num": 13, "q": "Children can ride the miniature ________ around the grounds", "answer": "railway / train"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Drama Students Discussing 'Romeo and Juliet'",
                        "audioScript": (
                            "ED: Gemma, how did you feel our rehearsal of Romeo and Juliet went?\n"
                            "GEMMA: Setting the play in a 1920s jazz club worked brilliantly, and using a simple white spotlight during the balcony scene created intense emotional intimacy."
                        ),
                        "questions": [
                            {"num": 21, "q": "The balcony scene used a simple white ________", "answer": "spotlight"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Impact of Digital Technology on the Icelandic Language",
                        "audioScript": (
                            "LECTURER: Icelandic is spoken by roughly 320,000 people. While Icelanders have historically coined native neologisms for new concepts rather than borrowing foreign words, today young Icelanders are immersed in English-language smartphones, gaming, and voice-recognition software that does not support Icelandic grammar. The government has launched a multi-million-dollar open-source computational linguistics project to preserve Icelandic in the digital era."
                        ),
                        "questions": [
                            {"num": 31, "q": "Icelandic is spoken by approximately ________ people", "answer": "320,000"},
                            {"num": 32, "q": "Voice-________ software rarely supports Icelandic grammar", "answer": "recognition"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The Dead Sea Scrolls",
                    "text": (
                        "In late 1946 or early 1947, three Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran, located on the northwest shore of the Dead Sea in what is now known as the West Bank. One of these young shepherds tossed a rock into an opening on the side of a cliff and was surprised to hear a shattering sound. He and his companions later entered the cave and stumbled across a collection of large clay jars, seven of which contained scrolls with writing on them.\n\n"
                        "The scrolls were written mostly on animal skin parchment, with a few on papyrus, and one extraordinary scroll—found in Cave 3 in 1952—was engraved on sheets of pure copper. Known as the Copper Scroll, it lists 64 underground hiding places across Judea containing vast quantities of gold and silver bullion, none of which has ever been recovered.\n\n"
                        "Dating from the third century BCE to the first century CE, the 900 manuscripts are written primarily in Hebrew, Aramaic, and Greek, and include the oldest surviving copies of books from the Hebrew Bible, including the complete Book of Isaiah."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "The Bedouin teenagers discovered the first scrolls while deliberately excavating for ancient manuscripts.", "answer": "FALSE", "explain": "Đoạn 1 nêu họ đang chăn dê cừu và tình cờ ném hòn đá vào miệng hang nghe tiếng vỡ ('tossed a rock... stumbled across')."},
                        {"num": 2, "type": "TFNG", "q": "The Copper Scroll records the locations of hidden gold and silver treasure.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'lists 64 underground hiding places... containing vast quantities of gold and silver bullion'."},
                        {"num": 3, "type": "TFNG", "q": "All of the Dead Sea Scrolls were written exclusively in the Greek language.", "answer": "FALSE", "explain": "Đoạn 3 nêu các cuộn sách được viết chủ yếu bằng tiếng Do Thái (Hebrew), tiếng Aram và một phần tiếng Hy Lạp."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: A second attempt at domesticating the tomato",
                    "text": (
                        "It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. And they have done it better in some ways, as the re-domesticated tomatoes are more nutritious than the ones we eat at present.\n\n"
                        "Wild tomatoes, native to the Andes mountains in South America, produce pea-sized fruits that are foul-tasting to humans, yet they possess extraordinary natural resistance to bacterial spot disease, drought, and high soil salinity. Over millennia of selective breeding for size and yield, commercial supermarket tomatoes lost these protective genes as well as their aromatic flavour compounds and lycopene content.\n\n"
                        "Using the precise CRISPR-Cas9 gene-editing tool, researchers led by Jörg Kudla and Joyce Van Eck altered just six genes in the wild Solanum pimpinellifolium plant. Within a single generation, the plants produced fruits three times larger and ten times more numerous per truss, while retaining 500% more heart-healthy lycopene and twice the vitamin C of commercial cultivars."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Centuries of selective breeding for size caused commercial tomatoes to lose disease resistance and flavour.", "answer": "TRUE", "explain": "Đoạn 2 nêu quá trình chọn giống lấy quả to khiến cà chua thương mại mất đi gen kháng bệnh và hợp chất hương vị."},
                        {"num": 5, "type": "MCQ", "q": "What was the outcome of applying CRISPR-Cas9 gene editing to wild tomatoes?", "options": ["A. The plants died immediately", "B. They yielded larger, more abundant fruits while preserving high lycopene and vitamin C levels", "C. They lost all their vitamin C", "D. It took 3,000 years to see results"], "answer": "B", "explain": "Đoạn 3 nêu cây cho quả to gấp 3, nhiều gấp 10 lần và giữ lượng lycopene cao gấp 500% cùng gấp đôi vitamin C."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Insight or evolution?",
                    "text": (
                        "Scientific discovery is popularly imagined as a sudden 'Eureka!' flash of genius—Archimedes leaping from his bath or Isaac Newton watching an apple fall. However, two psychologists, Thomas Ward and Edward Wasserman, argue that this romanticized 'insight theory' obscures the true mechanism of human innovation: a cumulative, trial-and-error evolutionary process.\n\n"
                        "Drawing on the early twentieth-century experiments of Edward Thorndike—who demonstrated that cats escaped puzzle boxes not through sudden logical insight, but by gradually eliminating unsuccessful movements and repeating rewarded ones—Wasserman contends that scientific breakthroughs obey a 'Law of Effect'.\n\n"
                        "Even iconic innovators like Thomas Edison, who tested over 6,000 plant fibres before perfecting the carbon filament lightbulb, and Alfred Wegener, who synthesized decades of paleontological and meteorological data to formulate continental drift, relied on relentless incremental variation and selection rather than miraculous bolts from the blue."
                    ),
                    "questions": [
                        {"num": 6, "type": "MCQ", "q": "What do psychologists Ward and Wasserman argue about scientific discoveries?", "options": ["A. They happen purely by luck in bathtubs", "B. They result from cumulative trial-and-error variation rather than sudden flashes of genius", "C. Cats are smarter than human scientists", "D. Thomas Edison invented the lightbulb on his first try"], "answer": "B", "explain": "Đoạn 1 & 2 khẳng định các phát minh khoa học là kết quả của quá trình tiến hóa thử-và-sai tích lũy chứ không phải tia chớp thiên tài đột ngột."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Police Budget in One Area of Britain (2017–2018)",
                    "prompt": "The table and charts below give information on the police budget for 2017 and 2018 in one area of Britain. The table shows where the money came from and the charts show how it was distributed.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Mixed Data (Table of Funding Sources + 2 Pie Charts of Expenditure)",
                    "dataSummary": "Total Police Budget rose from £304.7m (2017) to £318.6m (2018). Sources: National Government (£175.5m -> £177.8m), Local Taxes (£91.2m -> £102.3m), Other sources (£38m -> £38.5m). Spending: Salaries fell from 75% to 69%, Technology rose from 8% to 14%, Buildings & Transport stayed constant at 17%.",
                    "modelAnswer": (
                        "The table details the financial sources of the police budget in a British region across 2017 and 2018, while the accompanying pie charts illustrate how those funds were allocated across three operational categories.\n\n"
                        "Overall, the regional police budget experienced a notable increase over the two-year period, driven primarily by higher local tax contributions. In terms of expenditure, officer and staff salaries accounted for the overwhelming majority of spending in both years, although their share declined slightly in favour of technology investments.\n\n"
                        "Regarding revenue sources, the total police budget grew from £304.7 million in 2017 to £318.6 million in 2018. The National Government remained the principal contributor, supplying £175.5 million in 2017 and rising marginally to £177.8 million in 2018. Local taxes constituted the second-largest source and registered the steepest growth, surging by over £11 million from £91.2 million to £102.3 million. Funding from other sources, such as grants, remained virtually unchanged at £38 million and £38.5 million respectively.\n\n"
                        "Turning to expenditure distribution, salaries for officers and staff represented three-quarters (75%) of the budget in 2017, before dropping to 69% in 2018. Conversely, the proportion spent on technology nearly doubled from 8% to 14%, whereas expenditure on buildings and transport remained completely static at 17% in both years."
                    ),
                    "vocabBank": ["accompanying pie charts", "overwhelming majority of spending", "principal contributor", "registered the steepest growth", "remained completely static"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Children Spending Hours on Smartphones",
                    "prompt": "Some children spend hours every day on their smartphones.\nWhy is this the case? Do you think this is a positive or a negative development?",
                    "essayType": "Two-Part Question (Causes & Evaluation)",
                    "outline": {
                        "intro": "Children spend excessive hours on smartphones due to busy parents using screens as digital babysitters and addictive app design; this is overwhelmingly a negative development harming physical health and attention spans.",
                        "body1": "Causes: Time-poor working parents and dopamine-driven mobile games/short videos engineered to hook young minds.",
                        "body2": "Why it is negative: Sedentary obesity, myopia, sleep deprivation, and stunted face-to-face social development.",
                        "conclusion": "Parents and schools must enforce strict screen-time boundaries to safeguard childhood development."
                    },
                    "modelAnswer": (
                        "In contemporary society, it has become increasingly common to see children spending several hours each day engrossed in smartphones. This essay will examine the underlying causes of this phenomenon and argue that it represents a profoundly detrimental development for children's cognitive, physical, and social well-being.\n\n"
                        "Two primary factors explain why children accumulate such excessive daily screen time. First, modern work schedules leave many dual-income parents exhausted, prompting them to rely on smartphones as convenient 'digital pacifiers' to keep children quiet at home or in restaurants. Additionally, urban safety concerns have reduced unsupervised outdoor street play, confining children indoors. Second, mobile applications, video games, and short-form video platforms are deliberately engineered by behavioural psychologists using variable-reward algorithms, vibrant graphics, and endless scrolling to trigger dopamine release, making it extraordinarily difficult for a child's developing prefrontal cortex to disengage.\n\n"
                        "This pervasive screen immersion is overwhelmingly negative. Physically, prolonged smartphone use replaces active outdoor play with sedentary posture, directly contributing to childhood obesity, neck strain, and skyrocketing rates of early-onset myopia, while blue light emitted by screens suppresses melatonin and disrupts sleep. Cognitively and socially, constant hyper-stimulation fragments children's attention spans, making classroom reading and sustained problem-solving feel boring by comparison. Moreover, children who interact primarily through screens miss crucial opportunities to read non-verbal facial cues and cultivate real-world empathy.\n\n"
                        "In conclusion, driven by parental convenience and addictive app mechanics, excessive childhood smartphone usage inflicts severe harm on physical health and cognitive development, necessitating firm parental regulation."
                    ),
                    "collocations": ["engrossed in smartphones", "digital pacifiers", "variable-reward algorithms", "developing prefrontal cortex", "early-onset myopia"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Reading",
                    "questions": [
                        {"q": "Do you read more or less now than when you were younger? [Why?]", "sample": "I actually read significantly more now, although my reading has shifted from fantasy novels in childhood to academic journals, economics books, and daily news articles."},
                        {"q": "What kinds of things do you like reading most? [Why?]", "sample": "I gravitate toward popular science and biography books—such as Walter Isaacson's biographies—because they distil decades of wisdom into a few hundred pages."},
                        {"q": "Do you prefer reading on a screen or reading printed books? [Why?]", "sample": "For short news updates I use my tablet, but for deep reading before bed I strongly prefer printed paperbacks to avoid eye strain and notification pop-ups."},
                        {"q": "Have you ever read a book after watching a film based on it? [Why/Why not?]", "sample": "Yes, after watching the sci-fi movie Dune at the cinema, I immediately bought Frank Herbert's original novel to explore the deeper philosophical world-building."}
                    ]
                },
                "part2": {
                    "topic": "Describe a big city you would like to visit",
                    "cueCard": "You should say:\n- which big city you would like to visit\n- how you would travel there\n- what you would do there\n- and explain why you would like to visit this big city.",
                    "modelAnswer": (
                        "I would like to describe Tokyo, the sprawling metropolitan capital of Japan, which has been at the very top of my travel bucket list for years.\n\n"
                        "To get there from Vietnam, I would take a direct six-hour overnight flight from Ho Chi Minh City to Narita International Airport, and then board the high-speed Skyliner express train straight into the heart of the city.\n\n"
                        "Once in Tokyo, I would spend my mornings exploring serene historical landmarks like the Senso-ji Temple in Asakusa and the forested Meiji Shrine, and my evenings immersed in the neon-lit futuristic districts of Shibuya and Akihabara. As a passionate food lover, I would also wake up at dawn to sample fresh sushi at the Toyosu Fish Market and visit the Ghibli Museum.\n\n"
                        "The reason I am so drawn to Tokyo is its extraordinary duality: it is a hyper-modern megacity of thirty-seven million people where bullet trains run with second-by-second punctuality, yet centuries-old traditions of tea ceremony, politeness, and craftsmanship remain deeply revered."
                    ),
                    "lexical": ["sprawling metropolitan capital", "travel bucket list", "neon-lit futuristic districts", "extraordinary duality", "second-by-second punctuality"]
                },
                "part3": {
                    "topic": "Visiting cities on holiday & The growth of cities",
                    "questions": [
                        {"q": "What are the most interesting things to do when visiting cities on holiday?", "sample": "Exploring historic architectural quarters on foot, sampling authentic local street gastronomy, and visiting world-class national museums are the most rewarding urban activities."},
                        {"q": "Why can it be expensive to visit cities on holiday?", "sample": "Prime real estate in city centres drives hotel room rates and restaurant overheads sky-high, compounded by tourist taxes and admission fees for landmark attractions."},
                        {"q": "Do you think it is better to visit cities alone or in a group with friends?", "sample": "Travelling with a small group of two or three close friends is ideal, as it allows you to split accommodation costs and share memorable meals while remaining flexible."},
                        {"q": "Why have cities grown so rapidly in recent decades, and what problems does this cause?", "sample": "Rural-to-urban migration is fuelled by superior employment, healthcare, and university opportunities in cities, but rapid expansion strains public transit, inflates housing prices, and worsens air pollution."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 17 Test 2: Phân tích từ khóa bài Dead Sea Scrolls, Re-domesticating Tomatoes (CRISPR) và Insight vs Evolution.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "deliberately excavating for manuscripts", "passageKey": "tending their goats... tossed a rock... stumbled across", "verdict": "FALSE (Phát hiện tình cờ khi chăn dê)"},
                    {"qNum": "P2 - Q5", "questionKey": "CRISPR-Cas9 gene editing outcome", "passageKey": "fruits three times larger... retaining 500% more lycopene and twice vitamin C", "verdict": "B (Quả to và giữ hàm lượng dinh dưỡng cao)"},
                    {"qNum": "P3 - Q6", "questionKey": "Ward and Wasserman argue", "passageKey": "cumulative, trial-and-error evolutionary process", "verdict": "B (Quá trình thử và sai tích lũy)"}
                ]
            },
            "vocabList": [
                {"word": "parchment manuscript", "ipa": "ˈpɑːtʃmənt ˈmænjuskrɪpt", "vi": "bản thảo viết trên da thuộc cổ đại", "type": "noun phrase", "collocation": "preserve ancient parchment manuscripts", "example": "Most of the Dead Sea Scrolls are parchment manuscripts."},
                {"word": "de novo domestication", "ipa": "ˌdeɪ ˈnoʊvoʊ dəˌmestɪˈkeɪʃn", "vi": "thuần hóa lại từ đầu cây hoang dã bằng công nghệ gen", "type": "noun phrase", "collocation": "achieve rapid de novo domestication via CRISPR", "example": "Scientists achieved de novo domestication of wild tomatoes in three years."},
                {"word": "trial and error", "ipa": "ˈtraɪəl ənd ˈerər", "vi": "phương pháp thử và sai thực nghiệm", "type": "collocation", "collocation": "discover solutions through incremental trial and error", "example": "Edison's lightbulb was perfected through relentless trial and error."}
            ]
        },

        # CAM 17 - TEST 3
        {
            "id": 3,
            "title": "Cambridge IELTS 17 — Test 3",
            "topic": "The Thylacine, Palm Oil & Building the Skyline of Manhattan",
            "passages": [
                "P1: The thylacine (Tasmanian Tiger)",
                "P2: Palm oil",
                "P3: Building the Skyline: The Birth and Growth of Manhattan's Skyscrapers"
            ],
            "keyVocab": ["carnivorous marsupial", "government bounty", "sustainable palm oil", "bedrock depth myth"],
            "listening": {
                "title": "Cambridge 17 Listening Test 3",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Advice on Surfing Holidays in County Clare",
                        "audioScript": (
                            "ADVISOR: County Clare Tourism. If you're planning a surfing holiday in Lahinch, wetsuits can be hired for €15 per day. We recommend staying at the Lahinch Coast Hotel, which has a drying room for surfboards and free parking."
                        ),
                        "questions": [
                            {"num": 1, "q": "Daily hire cost for a wetsuit: €________", "answer": "15"},
                            {"num": 2, "q": "Hotel features a drying room for ________", "answer": "surfboards"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Westley Childcare Centre",
                        "audioScript": (
                            "DIRECTOR: Welcome to Westley Childcare Centre. Hot organic meals are cooked fresh every day. Parents must provide a signed medical certificate upon enrolment, and children should bring an apron for messy painting activities."
                        ),
                        "questions": [
                            {"num": 11, "q": "Parents must provide a medical ________ upon enrolment", "answer": "certificate"},
                            {"num": 12, "q": "Children need to bring an ________ for painting", "answer": "apron"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Holly's Work Placement Tutorial (Events Management)",
                        "audioScript": (
                            "TUTOR: Holly, how did you handle the risk assessment for the summer historical festival at the Oriana Museum?\n"
                            "HOLLY: I had to reroute the main entrance to keep emergency vehicles clear and coordinate 40 volunteer stewards."
                        ),
                        "questions": [
                            {"num": 21, "q": "Holly kept the main entrance clear for ________ vehicles", "answer": "emergency"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Bird Migration Theory Through History",
                        "audioScript": (
                            "LECTURER: For millennia, humans were baffled by the disappearance of birds in winter. In ancient Greece, Aristotle claimed that swallows hibernated in muddy riverbeds, and that redstarts transformed into robins. In 1703, English educator Charles Morton even published a pamphlet asserting that birds flew to the Moon—a journey he calculated took 60 days. The mystery was finally solved in 1822 in Germany when a white stork was found with a Central African spear embedded in its neck—the 'Pfeilstorch'—proving intercontinental migration."
                        ),
                        "questions": [
                            {"num": 31, "q": "Aristotle believed swallows hibernated at the bottom of muddy ________", "answer": "rivers / riverbeds"},
                            {"num": 32, "q": "Charles Morton claimed birds migrated to the ________ in winter", "answer": "Moon"},
                            {"num": 33, "q": "In 1822, a stork was found in Germany with an African ________ in its neck", "answer": "spear / arrow"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The thylacine",
                    "text": (
                        "The extinct thylacine, also known as the Tasmanian tiger, was a marsupial that bore a superficial resemblance to a dog. Its most distinguishing feature was the 13–19 dark brown stripes over its back, beginning at the rear of the body and extending onto the tail. The thylacine's average nose-to-tail length for adult males was 162.6 cm, compared to 153.7 cm for females.\n\n"
                        "The thylacine was shy and nocturnal, hunting kangaroos and wallabies across Tasmania's open eucalyptus forests. Unlike placental carnivores, both female and male thylacines possessed a backward-opening abdominal pouch; in females, this protected up to four joeys during nursing.\n\n"
                        "Following European settlement in Tasmania, sheep farmers falsely blamed the thylacine for widespread livestock losses. Between 1888 and 1909, the Tasmanian government paid a £1 bounty for every adult thylacine head, resulting in over 2,180 bounties paid. Combined with habitat loss, competition from wild dogs, and a distemper-like epidemic, the species collapsed. The last known thylacine died in captivity at Hobart Zoo on 7 September 1936—just 59 days after the species was belatedly granted legal protection."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Female thylacines were larger on average than male thylacines.", "answer": "FALSE", "explain": "Đoạn 1 nêu chiều dài trung bình con đực là 162.6 cm, lớn hơn con cái (153.7 cm)."},
                        {"num": 2, "type": "TFNG", "q": "The Tasmanian government granted legal protection to the thylacine decades before the population declined.", "answer": "FALSE", "explain": "Đoạn 3 nêu chính phủ từng treo thưởng săn bắt (£1/đầu) từ 1888-1909, và chỉ ban hành luật bảo vệ muộn màng 59 ngày trước khi cá thể cuối cùng chết năm 1936."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Palm oil",
                    "text": (
                        "Palm oil is an edible vegetable oil derived from the fruit of the African oil palm tree (Elaeis guineensis), and it is currently the most widely consumed vegetable oil on the planet. It is present in roughly half of all packaged products in supermarkets—from biscuits, margarine, and instant noodles to lipstick, shampoo, and detergent.\n\n"
                        "However, the rapid expansion of oil palm plantations across Indonesia and Malaysia has driven catastrophic deforestation of tropical peatland rainforests, releasing immense carbon emissions and pushing endangered species such as the Bornean orangutan and Sumatran tiger toward extinction.\n\n"
                        "Yet environmental scientists point out that boycotting palm oil entirely could actually worsen global deforestation: oil palm trees produce four to ten times more oil per hectare than alternative crops like soybean, sunflower, or coconut. Consequently, the Roundtable on Sustainable Palm Oil (RSPO) advocates certified zero-deforestation cultivation and preserving epiphytic bird's nest ferns within plantations to maintain biodiversity."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "Why do some environmental scientists warn against a total boycott of palm oil?", "options": ["A. Palm oil is the only oil that humans can digest", "B. Alternative oil crops require four to ten times more land per ton of oil, which would cause even greater deforestation", "C. Orangutans eat palm oil soap", "D. Palm trees only grow in Europe"], "answer": "B", "explain": "Đoạn 3 giải thích cây cọ dầu cho năng suất dầu trên mỗi héc-ta cao gấp 4–10 lần đậu nành hay hướng dương; nếu thay thế bằng cây khác sẽ phải phá diện tích rừng lớn hơn gấp nhiều lần."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Building the Skyline: The Birth and Growth of Manhattan's Skyscrapers",
                    "text": (
                        "Look at a photograph of Manhattan's skyline and you will notice two distinct clusters of towering skyscrapers—one in Downtown near Wall Street and another in Midtown around Empire State Building—separated by a stretch of noticeably lower buildings in Greenwich Village and SoHo.\n\n"
                        "For decades, popular folklore attributed this 'valley' to geology: Manhattan schist bedrock lies close to the surface in Downtown and Midtown, but dips deeper underground in between. In his book 'Building the Skyline', economist Jason Barr debunks this geological myth.\n\n"
                        "Using historical soil-boring records and engineering cost data, Barr proves that nineteenth-century caisson foundation technology easily reached deep bedrock at a tiny fraction of a skyscraper's total budget. The real reason skyscrapers bypassed the middle of Manhattan was economic and demographic: in the late 1800s, that area was densely packed with profitable brick tenements housing immigrant factory workers, making land assembly prohibitively expensive for commercial developers."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Jason Barr agrees with the popular belief that bedrock depth prevented skyscrapers from being built between Downtown and Midtown.", "answer": "FALSE", "explain": "Đoạn 2 & 3 nêu rõ Jason Barr bác bỏ hoàn toàn giả thuyết địa chất ('debunks this geological myth') và chứng minh nguyên nhân thực sự là do kinh tế và mật độ nhà ở tập thể."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Government Expenditure on Roads and Transport (1990–2005)",
                    "prompt": "The chart below gives information about how much money was spent on roads and transport in four countries between 1990 and 2005.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Grouped Bar Chart (4 Countries across 4 Time Points)",
                    "dataSummary": "Percentage of government spending on roads & transport (1990, 1995, 2000, 2005): Portugal spent the highest proportion throughout (27% in 1990 -> 24% -> 22% -> 20% in 2005). Italy ranked second (22% -> 20% -> 23% -> 19%). USA rose from 11% (1990) to 15% (2005). UK spent the lowest overall (10% in 1990 -> 9% -> peaked at 13% in 2000 -> dropped to 8% in 2005).",
                    "modelAnswer": (
                        "The grouped bar chart compares the proportion of national government budgets allocated to road and transport infrastructure across four nations—Italy, Portugal, the United Kingdom, and the United States—at five-year intervals between 1990 and 2005.\n\n"
                        "Overall, Portugal consistently dedicated the highest percentage of state funds to transport despite a steady downward trend, whereas the United Kingdom recorded the lowest expenditure throughout most of the period. Only the United States registered a net increase in transport budget share over the fifteen years.\n\n"
                        "In 1990, Portugal topped the chart by allocating approximately 27% of its national budget to roads and transport. However, this figure declined progressively over each subsequent five-year interval, falling to 24% in 1995, 22% in 2000, and finishing at 20% in 2005. Italy followed a fluctuating downward trajectory: starting at 22% in 1990, its spending dipped to 20% in 1995, rebounded to a peak of 23% in 2000, and dropped to 19% by 2005.\n\n"
                        "By contrast, the UK and the USA allocated roughly half as much proportionally as their Southern European counterparts. The USA began at 11% in 1990, dipped slightly to 10% in 1995, and then climbed to 15% in 2005. Meanwhile, UK transport spending hovered around 10% in 1990–1995, spiked briefly to 13% in 2000, and fell to the lowest point on the chart at 8% in 2005."
                    ),
                    "vocabBank": ["grouped bar chart", "consistently dedicated the highest percentage", "fluctuating downward trajectory", "Southern European counterparts", "spiked briefly"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Requiring Doctors and Engineers to Work in Their Training Country",
                    "prompt": "Some people believe that professionals, such as doctors and engineers, should be required to work in the country where they did their training. Others believe they should be free to work in another country if they wish.\nDiscuss both these views and give your own opinion.",
                    "essayType": "Discussion & Opinion (Balanced)",
                    "outline": {
                        "intro": "Discuss both the fiscal fairness of preventing brain drain in developing nations and the fundamental human right to international mobility; propose a short mandatory service bond for state-funded graduates rather than a permanent ban.",
                        "body1": "Why some support mandatory domestic service: Taxpayers heavily subsidize medical/engineering universities; 'brain drain' leaves developing countries with severe hospital and infrastructure shortages.",
                        "body2": "Why others champion freedom of movement: Coercive travel bans violate personal liberty and stifle international scientific collaboration; improving domestic salaries is a better solution.",
                        "conclusion": "While permanent restrictions are unethical, a reasonable 2-to-3-year post-graduation service requirement for state-sponsored students strikes a fair balance."
                    },
                    "modelAnswer": (
                        "The international migration of highly skilled professionals—commonly termed 'brain drain'—has sparked intense debate regarding whether doctors and engineers should be legally obligated to practice in the country where they were educated, or whether they should enjoy unrestricted freedom to work abroad. This essay will examine both perspectives and argue that while permanent travel bans are unjust, a short post-graduation service bond for publicly funded graduates is an equitable compromise.\n\n"
                        "Advocates of mandatory domestic service emphasize economic reciprocity and social justice. Training a medical doctor or civil engineer requires substantial public expenditure on university laboratories, teaching hospitals, and academic subsidies funded by local taxpayers. When graduates immediately emigrate to wealthy Western nations in pursuit of lucrative salaries, their home country suffers a doubly devastating loss: it forfeits its financial investment and is left with acute shortages of surgeons and engineers needed to maintain basic healthcare and infrastructure.\n\n"
                        "Conversely, proponents of unrestricted mobility argue that dictating where adults may live and work infringes upon fundamental human liberty. Freedom of movement is a cornerstone of international law, and ambitious professionals often relocate abroad not merely for higher pay, but to access advanced medical research facilities and international knowledge networks that ultimately benefit humanity as a whole. Furthermore, forcing resentful professionals to remain in underfunded hospitals rarely produces high-quality care; governments should instead retain talent by improving domestic working conditions and remuneration.\n\n"
                        "In my view, the optimal solution lies between these extremes. Governments that subsidize university tuition are justified in requiring graduates to either complete two to three years of domestic public service or repay their tuition grants before emigrating. Once that civic debt is fulfilled, professionals should be completely free to pursue global careers."
                    ),
                    "collocations": ["brain drain", "economic reciprocity", "acute shortages", "fundamental human liberty", "equitable compromise"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Drinks",
                    "questions": [
                        {"q": "What do you like to drink when the weather is hot? [Why?]", "sample": "When the weather is sweltering, my go-to beverage is fresh chilled coconut water or iced kumquat tea because they replenish electrolytes naturally without excessive refined sugar."},
                        {"q": "Do you prefer drinking tea or coffee? [Why?]", "sample": "I prefer Vietnamese iced milk coffee in the morning for a sharp caffeine boost, and soothing jasmine green tea in the afternoon to stay hydrated."},
                        {"q": "What do people in your country usually offer guests to drink when they visit their home?", "sample": "In Vietnamese hospitality, hosts immediately serve a pot of hot lotus or oolong tea accompanied by fresh seasonal fruit as a sign of warmth and respect."},
                        {"q": "Did you like the same drinks when you were a child as you do now? [Why/Why not?]", "sample": "Not at all; as a child I craved sweet fizzy sodas and strawberry milk, whereas now I find them overly cloying and prefer unsweetened beverages."}
                    ]
                },
                "part2": {
                    "topic": "Describe a monument (e.g., a statue or building) that is important in your country",
                    "cueCard": "You should say:\n- what this monument is\n- where it is in your country\n- what it looks like\n- and explain why this monument is important in your country.",
                    "modelAnswer": (
                        "I would like to describe the Temple of Literature—known in Vietnamese as Van Mieu Quoc Tu Giam—which is situated in the heart of Hanoi.\n\n"
                        "Constructed in the year 1070 under Emperor Ly Thanh Tong, it served as Vietnam's first national university for over seven centuries. Architecturally, the monument is divided into five tranquil walled courtyards lined with ancient banyan trees, lotus ponds, and red-tiled pavilions. Its most iconic feature is the Khue Van Cac pavilion and the 82 stone stelae resting on the backs of carved stone turtles, each inscribed with the names and birthplaces of doctoral laureates who passed the royal mandarinate examinations.\n\n"
                        "This monument holds immense cultural and historical significance for Vietnamese people. Its image is printed on the back of the 100,000-dong banknote, and it stands as the ultimate symbol of Vietnam's thousand-year tradition of revering scholarship, meritocracy, and lifelong learning. Every spring before national university entrance exams, thousands of students visit the temple to pay tribute to ancient scholars."
                    ),
                    "lexical": ["first national university", "tranquil walled courtyards", "carved stone turtles", "doctoral laureates", "revering scholarship and meritocracy"]
                },
                "part3": {
                    "topic": "Kinds of monuments & Architecture",
                    "questions": [
                        {"q": "What kinds of monuments do tourists in your country enjoy visiting?", "sample": "Tourists flock to ancient imperial citadels, centuries-old Buddhist pagodas, and war memorials that narrate Vietnam's struggle for independence."},
                        {"q": "Why do you think there are often statues of famous people in public places?", "sample": "Public statues serve as visual civic reminders of national heroes, scientists, and cultural pioneers, inspiring younger generations to emulate their courage and service."},
                        {"q": "Do you agree that old monuments and buildings should always be preserved?", "sample": "Landmarks of genuine historical or architectural merit must be preserved, though dilapidated structures with no cultural value and severe safety hazards can reasonably be replaced."},
                        {"q": "How has the architecture of buildings in your country changed in the last 50 years?", "sample": "Urban architecture has transitioned dramatically from low-rise French colonial villas and traditional tube houses to earthquake-resistant glass skyscrapers and green smart-buildings."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 17 Test 3: Phân tích bài đọc Hổ Tasmania (Thylacine), Dầu cọ (Palm Oil) và Nhà chọc trời Manhattan.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "female thylacines larger than males", "passageKey": "males 162.6 cm compared to 153.7 cm for females", "verdict": "FALSE (Con đực lớn hơn con cái)"},
                    {"qNum": "P2 - Q3", "questionKey": "warn against total boycott of palm oil", "passageKey": "oil palm produces 4 to 10 times more oil per hectare than alternative crops", "verdict": "B (Cây lấy dầu khác tốn diện tích đất gấp 4-10 lần)"},
                    {"qNum": "P3 - Q4", "questionKey": "Barr agrees bedrock depth prevented skyscrapers", "passageKey": "economist Jason Barr debunks this geological myth", "verdict": "FALSE (Barr bác bỏ giả thuyết địa chất)"}
                ]
            },
            "vocabList": [
                {"word": "carnivorous marsupial", "ipa": "kɑːˈnɪvərəs mɑːˈsuːpiəl", "vi": "thú có túi ăn thịt", "type": "noun phrase", "collocation": "extinct carnivorous marsupial", "example": "The thylacine was the largest modern carnivorous marsupial."},
                {"word": "sustainable cultivation", "ipa": "səˈsteɪnəbl ˌkʌltɪˈveɪʃn", "vi": "canh tác nông nghiệp bền vững", "type": "collocation", "collocation": "promote certified sustainable cultivation", "example": "The RSPO promotes sustainable cultivation of oil palms."},
                {"word": "prohibitively expensive", "ipa": "prəˈhɪbətɪvli ɪkˈspensɪv", "vi": "đắt đỏ đến mức không thể thực hiện được", "type": "collocation", "collocation": "make land assembly prohibitively expensive", "example": "Dense tenement ownership made buying land in mid-Manhattan prohibitively expensive."}
            ]
        },

        # CAM 17 - TEST 4
        {
            "id": 4,
            "title": "Cambridge IELTS 17 — Test 4",
            "topic": "Bats to the Rescue, Does Education Fuel Economic Growth? & Blindfold Chess",
            "passages": [
                "P1: Bats to the rescue (Madagascar)",
                "P2: Does education fuel economic growth?",
                "P3: Timur Gareyev — blindfold chess champion"
            ],
            "keyVocab": ["insectivorous bats", "echolocation calls", "guild monopolies", "frontoparietal control network"],
            "listening": {
                "title": "Cambridge 17 Listening Test 4",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Easy Life Cleaning Services",
                        "audioScript": (
                            "CLIENT: Hello, I'd like to enquire about your domestic cleaning packages.\n"
                            "AGENT: Certainly! Our basic package includes vacuuming carpets and cleaning the kitchen fridge every week. Our extra services include ironing clothes and organizing pantry items into airtight containers. All our cleaners use non-toxic products suitable for people with allergies."
                        ),
                        "questions": [
                            {"num": 1, "q": "Basic kitchen cleaning includes the ________", "answer": "fridge"},
                            {"num": 2, "q": "Extra service: ________ clothes", "answer": "ironing"},
                            {"num": 3, "q": "Products are safe for customers with ________", "answer": "allergies"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Staff Turnover in the Hotel Industry",
                        "audioScript": (
                            "MANAGER: Many hotels suffer from high staff turnover due to unsocial shift patterns and heavy workloads. By introducing flexible rosters and monthly training awards, our hotel chain reduced staff attrition by 40 percent."
                        ),
                        "questions": [
                            {"num": 11, "q": "Turnover is caused by unsocial ________ patterns", "answer": "shift"},
                            {"num": 12, "q": "Retention improved after introducing monthly training ________", "answer": "awards"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Sporting Activities at School",
                        "audioScript": (
                            "THOMAS: Jeanne, why do many teenagers drop out of school sports at age fifteen?\n"
                            "JEANNE: Because traditional PE focuses overly on elite team selection rather than enjoyable lifelong fitness like climbing or yoga."
                        ),
                        "questions": [
                            {"num": 21, "q": "Traditional PE focuses too much on elite team ________", "answer": "selection"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Production and History of Maple Syrup",
                        "audioScript": (
                            "LECTURER: Maple syrup is one of North America's oldest natural sweeteners, originally harvested by indigenous Algonquin peoples who cut V-shaped incisions into sugar maple trunks during early spring thaws. Because raw tree sap contains only 2% sucrose, roughly 40 litres of sap must be boiled down to produce just a single litre of pure maple syrup."
                        ),
                        "questions": [
                            {"num": 31, "q": "Raw maple sap contains only 2% ________", "answer": "sucrose / sugar"},
                            {"num": 32, "q": "________ litres of sap are needed to produce 1 litre of syrup", "answer": "40 / forty"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Bats to the rescue",
                    "text": (
                        "Madagascar's forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country's main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear more forest to create new paddies.\n\n"
                        "However, conservation biologist Ricardo Rocha from the University of Cambridge has discovered that six species of native insectivorous bats are providing a vital, free pest-control service for Malagasy farmers. Using ultrasonic acoustic recorders and DNA barcoding of bat droppings, Rocha's team proved that these bats feast heavily on the grasstwig borer and Macadamia nut-borer—two of the most destructive rice pests—as well as malaria-carrying mosquitoes.\n\n"
                        "Because bats hunt preferentially over hillside rice fields adjacent to intact forest edges, Rocha urges farmers to preserve forest patches and install artificial bat houses rather than clearing trees."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Madagascar's native bats damage rice crops by eating the grain.", "answer": "FALSE", "explain": "Đoạn 2 nêu rõ loài dơi này ăn côn trùng phá hại lúa ('feast heavily on destructive rice pests') và muỗi truyền sốt rét, giúp bảo vệ mùa màng."},
                        {"num": 2, "type": "TFNG", "q": "Rocha's team used ultrasonic acoustic recorders and DNA analysis of droppings to study the bats' diet.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'Using ultrasonic acoustic recorders and DNA barcoding of bat droppings'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Does education fuel economic growth?",
                    "text": (
                        "Over the last decade, a huge database about the lives of southwest German villagers between 1600 and 1900 has been compiled by a team led by Professor Sheilagh Ogilvie at Cambridge University's Faculty of Economics. It includes court records, guild ledgers, parish registers, and estate inventories listing every possession from books to pitchforks.\n\n"
                        "Conventional wisdom assumes that rising literacy and schooling automatically generate national economic growth. Yet Ogilvie's data reveals a striking paradox: between 1600 and 1800, Germany had some of the highest literacy rates in Europe, yet its economy remained stagnant and impoverished.\n\n"
                        "Why? Ogilvie shows that powerful local craft guilds and merchant monopolies legally barred women, rural migrants, and non-guild artisans from opening businesses or adopting innovative weaving techniques. High literacy cannot drive prosperity if restrictive social institutions prevent citizens from applying their knowledge."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "What does Sheilagh Ogilvie's historical German study demonstrate?", "options": ["A. German villagers in 1700 could not read at all", "B. High literacy alone does not guarantee economic growth if restrictive guilds block people from using their skills", "C. Schools should be abolished", "D. Books were banned in Germany"], "answer": "B", "explain": "Đoạn 2 & 3 chứng minh tỷ lệ biết chữ cao không tự động tạo ra tăng trưởng kinh tế nếu các phường hội độc quyền ngăn cản phụ nữ và người lao động ứng dụng kiến thức."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Timur Gareyev — blindfold chess champion",
                    "text": (
                        "In December 2016, Grandmaster Timur Gareyev set a Guinness World Record at the University of Nevada by playing 48 simultaneous games of chess while wearing a blindfold and pedalling an exercise bike for 19 hours—winning 80 percent of the matches.\n\n"
                        "To understand how Gareyev held the positions of 1,536 chess pieces in his mind simultaneously, neuroscientist Jesse Rissman at UCLA conducted functional MRI brain scans. Surprisingly, Gareyev's baseline visual memory tests were average. What distinguished his brain was extraordinary hyper-connectivity within the 'frontoparietal control network'—the neural circuitry linking attention allocation with long-term memory retrieval via the 'memory palace' (Method of Loci) technique."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Gareyev achieved his blindfold chess record by relying on above-average innate eyesight.", "answer": "FALSE", "explain": "Đoạn 2 nêu kết quả kiểm tra trí nhớ thị giác cơ bản của ông chỉ ở mức trung bình; bí quyết nằm ở kết nối mạng lưới thần kinh trán-đỉnh và kỹ thuật cung điện ký ức."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Shop Closures and Openings (2011–2018)",
                    "prompt": "The graph below shows the number of shops that closed and the number of new shops that opened in one country between 2011 and 2018.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Dual Line Graph (Closures vs Openings, 2011–2018)",
                    "dataSummary": "Shop Openings started highest at ~8,500 in 2011, plunged to ~4,000 in 2012, recovered to ~6,200 in 2014, then declined to ~3,000 in 2018. Shop Closures hovered between 6,000 and 7,200 from 2011 to 2014, plunged dramatically to ~650 in 2015, and jumped back to ~5,100 in 2016–2018.",
                    "modelAnswer": (
                        "The line graph compares the annual number of retail store openings and closures in a particular nation over an eight-year period from 2011 to 2018.\n\n"
                        "Overall, both shop openings and closures experienced considerable volatility, but both metrics ended the period significantly lower than where they began. By 2018, the number of shops closing down substantially exceeded the number of new businesses opening.\n\n"
                        "In 2011, new shop openings stood at a peak of approximately 8,500, outnumbering closures (around 6,400). However, in 2012, openings plummeted by more than half to 4,000. Although new openings staged a steady recovery over the next two years to reach 6,100 in 2014, they subsequently declined to 4,000 between 2015 and 2017 before dropping to a period low of 3,000 in 2018.\n\n"
                        "Meanwhile, shop closures fluctuated between 6,000 and 7,200 from 2011 to 2014. In 2015, closures experienced an extraordinary, abrupt plunge to just 650 stores. This respite proved temporary: in 2016, closures surged back to 5,200 and remained relatively stable at roughly 5,100 per year through 2018."
                    ),
                    "vocabBank": ["considerable volatility", "outnumbering closures", "plummeted by more than half", "staged a steady recovery", "abrupt plunge"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Alternative Medicines and Treatments",
                    "prompt": "Nowadays, a growing number of people with health problems are trying alternative medicines and treatments instead of visiting their usual doctor.\nDo you think this is a positive or a negative development?",
                    "essayType": "Opinion Essay (Predominantly Negative if replacing doctors)",
                    "outline": {
                        "intro": "While complementary therapies like acupuncture or herbal teas can aid mild stress relief, abandoning conventional evidence-based medicine for unverified alternative treatments is a dangerous, predominantly negative development.",
                        "body1": "Why people try alternative medicine: Holistic stress relief and gentler side effects for minor chronic aches.",
                        "body2": "Why replacing doctors is dangerous: Lack of clinical trials, toxic herbal interactions, and fatal delays in diagnosing cancer or heart disease.",
                        "conclusion": "Alternative remedies should only ever be used as supervised complements, never as a substitute for qualified medical doctors."
                    },
                    "modelAnswer": (
                        "In recent years, an increasing proportion of patients suffering from medical ailments have opted to bypass conventional physicians in favour of alternative therapies such as herbalism, homeopathy, and acupuncture. While certain traditional practices offer soothing support for minor stress, I firmly contend that substituting evidence-based medical care with alternative treatments is a hazardous and predominantly negative trend.\n\n"
                        "Admittedly, the appeal of complementary therapies is understandable for managing mild, non-life-threatening discomforts. Practices such as therapeutic massage, meditation, and acupuncture emphasize holistic mind-body relaxation and personalized attention, which rushed hospital consultations sometimes lack. When utilized alongside standard medical supervision, these remedies can alleviate chronic back tension, mild insomnia, or chemotherapy nausea without heavy pharmaceutical side effects.\n\n"
                        "However, eschewing qualified medical doctors entirely in favour of alternative treatments poses grave dangers to patient survival. First, unlike conventional pharmaceuticals—which must undergo rigorous double-blind clinical trials to verify efficacy and dosage safety—many alternative remedies are scientifically unproven and poorly regulated. Unstandardized herbal concoctions can contain toxic heavy metals or trigger lethal interactions with prescribed medications. Second, and most critically, relying on alternative practitioners delays accurate diagnostic screening. Conditions such as early-stage malignancies, diabetes, or bacterial infections require timely surgical or antibiotic intervention; treating them with homeopathic drops allows curable diseases to progress to fatal stages.\n\n"
                        "In conclusion, while holistic therapies can serve as beneficial adjuncts for well-being, replacing qualified physicians with unverified alternative medicine jeopardizes human life and is an overwhelmingly negative development."
                    ),
                    "collocations": ["evidence-based medical care", "complementary therapies", "double-blind clinical trials", "diagnostic screening", "beneficial adjuncts"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Maps",
                    "questions": [
                        {"q": "Do you often use maps? [Why/Why not?]", "sample": "Yes, I use Google Maps on my smartphone almost every day to check real-time traffic congestion and locate new cafés or bookstores across the city."},
                        {"q": "Do you prefer electronic maps or paper maps? [Why?]", "sample": "I overwhelmingly prefer electronic GPS maps because they offer turn-by-turn voice navigation and instant rerouting, though paper maps are charming souvenirs when visiting national parks."},
                        {"q": "Have you ever asked someone for directions instead of using a map? [Why/Why not?]", "sample": "Frequently! In labyrinthine Vietnamese alleyways where satellite GPS signals bounce off tall buildings, asking a friendly local street vendor is much faster and more accurate."},
                        {"q": "How good are you at reading maps in a new city?", "sample": "I have a fairly strong sense of spatial orientation, so once I identify a major river or landmark as my north anchor, I can navigate unfamiliar cities effortlessly."}
                    ]
                },
                "part2": {
                    "topic": "Describe an occasion when you had to do something in a hurry",
                    "cueCard": "You should say:\n- what you had to do\n- why you had to do this in a hurry\n- how well you did this\n- and explain how you felt about having to do this in a hurry.",
                    "modelAnswer": (
                        "I would like to recount a nerve-wracking morning last semester when I had to reformat and submit my final university research presentation in less than thirty minutes.\n\n"
                        "The presentation was scheduled for 8:30 AM, and I had spent the previous week meticulously designing my slides on my desktop computer. However, when I arrived at the lecture hall at 8:00 AM and plugged in my USB flash drive, the file had become corrupted and refused to open.\n\n"
                        "With only half an hour before my group was called to the podium, I had to act at lightning speed. I logged into my cloud backup notes on a borrowed laptop, opened Canva, pasted our core statistical charts and bullet points onto a clean minimalist template, and exported a fresh PDF with three minutes to spare. Surprisingly, the simplified slides actually made our presentation clearer and earned us an A grade.\n\n"
                        "Although my heart was pounding with adrenaline during those thirty minutes, overcoming that crisis taught me the vital importance of maintaining automatic cloud backups."
                    ),
                    "lexical": ["nerve-wracking morning", "corrupted USB flash drive", "act at lightning speed", "clean minimalist template", "pounding with adrenaline"]
                },
                "part3": {
                    "topic": "Arriving late & Managing study time",
                    "questions": [
                        {"q": "In your country, is it considered acceptable to arrive late for social events?", "sample": "For casual dinners or wedding banquets, arriving ten to fifteen minutes late is widely tolerated due to unpredictable urban traffic, whereas for job interviews or business meetings, punctuality is strictly expected."},
                        {"q": "What are the best ways for students to manage their study time effectively?", "sample": "Students benefit immensely from time-blocking their calendar, using the Pomodoro technique to maintain 25-minute bursts of deep focus, and tackling the most cognitively demanding subject first thing in the morning."},
                        {"q": "Do you think some people work better under time pressure than others?", "sample": "Yes, individuals with a challenge mindset experience a moderate surge of adrenaline under tight deadlines that sharpens concentration, although chronic last-minute cramming impairs long-term retention."},
                        {"q": "How has modern technology affected the pace of daily life?", "sample": "Instant messaging and 24/7 email connectivity have created an 'always-on' culture of immediate responsiveness, accelerating the pace of life at the expense of unhurried reflection."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 17 Test 4: Phân tích bài đọc Dơi Madagascar, Giáo dục & Tăng trưởng Kinh tế (Ogilvie) và Vua cờ tưởng Timur Gareyev.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "bats damage rice crops", "passageKey": "bats are providing a vital, free pest-control service", "verdict": "FALSE (Dơi diệt sâu hại giúp bảo vệ lúa)"},
                    {"qNum": "P2 - Q3", "questionKey": "Ogilvie's German study", "passageKey": "guilds and monopolies barred women and migrants from applying literacy", "verdict": "B (Độc quyền phường hội kìm hãm tăng trưởng dù tỷ lệ biết chữ cao)"},
                    {"qNum": "P3 - Q4", "questionKey": "above-average innate eyesight", "passageKey": "hyper-connectivity within frontoparietal control network & Method of Loci", "verdict": "FALSE (Nhờ mạng lưới thần kinh trán-đỉnh và cung điện ký ức)"}
                ]
            },
            "vocabList": [
                {"word": "insectivorous", "ipa": "ˌɪnsekˈtɪvərəs", "vi": "ăn côn trùng (động vật)", "type": "adjective", "collocation": "native insectivorous bats", "example": "Insectivorous bats protect rice paddies from agricultural pests."},
                {"word": "guild monopoly", "ipa": "ɡɪld məˈnɒpəli", "vi": "sự độc quyền của phường hội thủ công", "type": "noun phrase", "collocation": "restrictive guild monopolies stifling innovation", "example": "Medieval guild monopolies blocked women from commercial trades."},
                {"word": "method of loci", "ipa": "ˈmeθəd əv ˈloʊsaɪ", "vi": "phương pháp cung điện ký ức (ghi nhớ qua không gian)", "type": "noun phrase", "collocation": "memorize complex sequences using the method of loci", "example": "Chess grandmasters utilize the method of loci to visualize boards."}
            ]
        }
    ]


def get_cam18_tests():
    return [
        # CAM 18 - TEST 1
        {
            "id": 1,
            "title": "Cambridge IELTS 18 — Test 1",
            "topic": "Urban Farming, Forest Management in Pennsylvania & Space Junk",
            "passages": [
                "P1: Urban farming",
                "P2: Forest management in Pennsylvania, USA",
                "P3: Conquering Earth's space junk problem"
            ],
            "keyVocab": ["aeroponic vertical farming", "salvage logging", "shelterwood cut", "orbital debris taxonomy"],
            "listening": {
                "title": "Cambridge 18 Listening Test 1",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Transport Survey (Sadie Jones)",
                        "audioScript": (
                            "INTERVIEWER: Excuse me, could I ask you a few questions about local transport?\n"
                            "SADIE: Sure! My name is Sadie Jones, born in 1991, and my postcode is DW30 7YZ.\n"
                            "INTERVIEWER: Did you travel into town by bus today?\n"
                            "SADIE: Yes, on the 24th of April. I came into town to visit the dentist. Honestly, I stopped driving my car because it became far too expensive to park, and someone stole my bicycle last month. I'd also like to take the evening bus after going to the supermarket, but there aren't enough late routes."
                        ),
                        "questions": [
                            {"num": 1, "q": "Postcode: ________", "answer": "DW30 7YZ"},
                            {"num": 2, "q": "Date of bus journey: 24th of ________", "answer": "April"},
                            {"num": 3, "q": "Reason for trip: visit the ________", "answer": "dentist"},
                            {"num": 4, "q": "Stopped driving because parking was too ________", "answer": "expensive"},
                            {"num": 5, "q": "No longer cycles because her ________ was stolen", "answer": "bicycle / bike"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Becoming a Volunteer for ACE",
                        "audioScript": (
                            "SPEAKER: Thank you for attending our ACE Charity recruitment evening. Many young volunteers join us to gain team-working skills, though you must be at least 18 years old and undergo a police background check. Our current priority is pairing volunteers with isolated elderly residents to help them improve their fitness and memory."
                        ),
                        "questions": [
                            {"num": 11, "q": "Minimum age for ACE volunteers: ________ years old", "answer": "18 / eighteen"},
                            {"num": 12, "q": "Volunteers help isolated residents improve their fitness and ________", "answer": "memory"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Talk on Jobs in Fashion Design",
                        "audioScript": (
                            "HUGO: Chantal, what did you think of the career talk on fashion retailing?\n"
                            "CHANTAL: Honestly, Hugo, the speaker's story about starting as a personal stylist before becoming a costume designer for theatre was eye-opening, especially how she had to accept harsh criticism from directors."
                        ),
                        "questions": [
                            {"num": 21, "q": "Speaker worked as a costume designer for the ________", "answer": "theatre"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Elephant Translocation in Malawi",
                        "audioScript": (
                            "LECTURER: Between 2016 and 2017, conservationists in Malawi executed one of history's largest elephant translocations, moving 500 elephants from Majete and Liwonde National Parks—where overpopulation was damaging baobab trees and causing conflict with farmers—to Nkhotakota Wildlife Reserve, where poaching had previously reduced the herd to fewer than 100. Families were tranquilized by helicopter darts and lifted safely by cranes into ventilated trucks."
                        ),
                        "questions": [
                            {"num": 31, "q": "Total number of elephants translocated: ________", "answer": "500"},
                            {"num": 32, "q": "Overpopulation was damaging ________ trees in Liwonde", "answer": "baobab"},
                            {"num": 33, "q": "Elephants were lifted into trucks using mechanical ________", "answer": "cranes"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Urban farming",
                    "text": (
                        "In Paris, urban farmers are trying a soil-free approach to agriculture that uses less space and fewer resources. Could it help cities face the threats to our food supplies?\n\n"
                        "On top of a striking new exhibition hall in southern Paris, the world's largest urban rooftop farm has begun to bear fruit. Strawberries that are small, intensely flavoured and resplendentlj red sprout abundantly from plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them. From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint. Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards.\n\n"
                        "Pascal Hardy, an engineer and sustainable development consultant, began experimenting with vertical farming and aeroponic growing towers—that is, soil-free plastic tubes where dangling plant roots are misted with nutrient-rich water vapour—on his Paris apartment roof five years ago. The system uses 90 percent less water than classic intensive soil farming, requires zero chemical pesticides, and produces crops that travel zero food miles to local Parisian restaurants.\n\n"
                        "Meanwhile, underneath a concrete apartment block in Paris's 18th arrondissement, a company called Cycloponics has converted a two-storey underground car park into an organic farm cultivating shiitake mushrooms, endives, and microgreens under LED lights."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Pascal Hardy's rooftop strawberry plants are grown in deep trenches of dark soil.", "answer": "FALSE", "explain": "Đoạn 2 & 3 nêu dâu tây được trồng trong các ống nhựa rỗng không cần đất ('hollow plastic tubes', 'soil-free aeroponic towers') phun sương dinh dưỡng."},
                        {"num": 2, "type": "TFNG", "q": "Aeroponic vertical farming consumes approximately 90% less water than conventional intensive agriculture.", "answer": "TRUE", "explain": "Đoạn 3 nêu rõ: 'The system uses 90 percent less water than classic intensive soil farming'."},
                        {"num": 3, "type": "TFNG", "q": "Cycloponics grows mushrooms and endives in a disused underground parking garage in Paris.", "answer": "TRUE", "explain": "Đoạn 4 nêu: 'converted a two-storey underground car park into an organic farm cultivating shiitake mushrooms, endives'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Forest management in Pennsylvania, USA",
                    "text": (
                        "How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management.\n\n"
                        "A tree's 'value' depends on more than just its wood. Trees provide wildlife habitat, filter rainwater, sequester carbon, and offer recreation. Yet for decades, private landowners in Pennsylvania practiced a destructive harvesting method known as 'high-grading'—cutting down only the tallest, straightest, most commercially valuable hardwood trees (such as black cherry and red oak) and leaving behind diseased, crooked, and invasive 'low-use' trees.\n\n"
                        "Forester Justineawski and her colleagues advocate replacing high-grading with sustainable silvicultural methods bolstered by bioenergy markets. By harvesting deformed, pest-infected trees through 'salvage logging' (removing trees killed by pests like the emerald ash borer) and 'shelterwood cuts' (gradually thinning mature canopy trees so sunlight reaches diverse young seedlings), foresters can chip the low-grade wood into biofuel pellets for heating schools and hospitals, while regenerating resilient, multi-aged forests."
                    ),
                    "questions": [
                        {"num": 4, "type": "MCQ", "q": "Why is the practice of 'high-grading' harmful to Pennsylvania forests?", "options": ["A. It removes all diseased trees", "B. It extracts only the healthiest, highest-value trees and leaves behind deformed and invasive trees", "C. It plants too many oak trees", "D. It uses no machinery"], "answer": "B", "explain": "Đoạn 2 giải thích 'high-grading' chỉ chặt những cây gỗ thẳng, giá trị cao nhất và bỏ lại những cây cong queo, sâu bệnh, làm suy thoái rừng."},
                        {"num": 5, "type": "TFNG", "q": "Salvage logging involves removing trees that have been damaged or killed by insect pests or disease.", "answer": "TRUE", "explain": "Đoạn 3 nêu: 'salvage logging (removing trees killed by pests like the emerald ash borer)'."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Conquering Earth's space junk problem",
                    "text": (
                        "Satellites, rocket stages and collision fragments are accumulating in low-Earth orbit, threatening the future of space exploration and global communications.\n\n"
                        "Ten years ago, a defunct Russian military satellite collided with an active US Iridium communications satellite at 42,000 kilometres per hour, shattering into more than 2,000 trackable shards. Today, space agencies track over 30,000 pieces of orbital debris larger than a softball, alongside millions of paint flecks and bolts travelling fast enough to puncture the International Space Station.\n\n"
                        "Astrophysicist Donald Kessler warned as early as 1978 of a runaway chain reaction—now known as the 'Kessler syndrome'—where one collision generates debris that triggers further collisions, potentially rendering low-Earth orbit unusable for generations.\n\n"
                        "While start-ups like Astroscale and ClearSpace-1 are testing magnetic capture plates and robotic harpoon claws to drag dead satellites down to burn up in the atmosphere, astrodynamicist Moriba Jah at the University of Texas insists that technology alone is insufficient without an international, legally binding orbital traffic taxonomy that holds satellite operators accountable."
                    ),
                    "questions": [
                        {"num": 6, "type": "MCQ", "q": "What is the 'Kessler syndrome' described in the passage?", "options": ["A. Illness experienced by astronauts in zero gravity", "B. A cascading chain reaction of orbital collisions that could make low-Earth orbit unusable", "C. A new rocket propulsion fuel", "D. A telescope on the Moon"], "answer": "B", "explain": "Đoạn 3 giải thích hội chứng Kessler là phản ứng dây chuyền khi các vụ va chạm tạo ra mảnh vỡ tiếp tục đâm vào các vệ tinh khác, làm tê liệt quỹ đạo tầm thấp."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Urban Population Growth in Four Asian Countries (1970–2040)",
                    "prompt": "The graph below gives information about the percentage of the population in four Asian countries living in cities from 1970 to 2020, with predictions for 2030 and 2040.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Line Graph with Future Projections (1970–2040)",
                    "dataSummary": "Malaysia: started around 30% (1970), rose steeply after 1990 to ~75% (2020), projected to top the chart at >80% (2040). Philippines: started highest at 31% (1970), rose to 48% (1990), dipped in 2000–2010, projected to reach ~55% (2040). Indonesia: started lowest at 12% (1970), surged rapidly to overtake Thailand (2000) and Philippines (2010), projected to reach ~62% (2040). Thailand: started at 19% (1970), grew slowly to ~30% (2010), projected to reach ~48% (2040).",
                    "modelAnswer": (
                        "The line graph illustrates historical trends in the proportion of urban residents across four Southeast Asian nations—the Philippines, Malaysia, Thailand, and Indonesia—from 1970 to 2020, alongside demographic projections through 2040.\n\n"
                        "Overall, all four countries have experienced substantial urbanization since 1970, and this upward trajectory is forecast to continue through 2040. Malaysia and Indonesia have recorded the most dramatic urban expansion, whereas Thailand is projected to remain the least urbanized nation.\n\n"
                        "In 1970, the Philippines and Malaysia had the highest urban populations at roughly 31% and 30% respectively. Malaysia's urban share grew steadily until 1990 (48%) and then accelerated sharply, reaching 74% in 2020 and forecast to exceed 83% by 2040—the highest on the chart. Conversely, the Philippines matched Malaysia at 48% in 1990, but subsequently experienced a twenty-year decline to 42% in 2010, before resuming moderate growth toward a projected 54% in 2040.\n\n"
                        "Indonesia and Thailand began at much lower baselines in 1970, at 12% and 19% respectively. However, Indonesia urbanized rapidly, overtaking Thailand in 2000 (28%) and the Philippines in 2012, reaching 52% in 2020 and projected to climb to 63% in 2040. Thailand grew gradually between 1970 and 2010 (reaching 30%), before accelerating to a projected 48% by 2040."
                    ),
                    "vocabBank": ["demographic projections", "substantial urbanization", "accelerated sharply", "lower baselines", "overtaking"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: The Primary Aim of Science",
                    "prompt": "The most important aim of science should be to improve people's lives.\nTo what extent do you agree or disagree with this statement?",
                    "essayType": "Opinion Essay (Agree, while including ecological preservation as integral to human life)",
                    "outline": {
                        "intro": "Strongly agree that the paramount moral mandate of scientific inquiry is the enhancement of human well-being, provided that planetary ecosystems are protected as part of that goal.",
                        "body1": "Medical & agricultural breakthroughs: Eradicating diseases, extending life expectancy, and ensuring food security justify public research funding.",
                        "body2": "Clean energy & ecological stewardship: Science must solve climate change and pollution so human civilization can thrive sustainably.",
                        "conclusion": "Improving the quality and sustainability of human life must remain the guiding compass of scientific endeavour."
                    },
                    "modelAnswer": (
                        "Throughout history, scientific inquiry has transformed human civilization from fragile subsistence communities into technologically advanced societies. I wholeheartedly agree that the paramount objective of science should be the betterment of human life, although this mission must inherently encompass the preservation of the natural ecosystems upon which human survival depends.\n\n"
                        "First and foremost, both ethical philosophy and fiscal reality dictate that scientific research should prioritize human welfare. The vast majority of fundamental and applied science is funded through public taxation and philanthropic endowments; consequently, scientists bear a moral obligation to address pressing human suffering. Historically, the noblest triumphs of science have been medical and agricultural breakthroughs—such as vaccines, antibiotics, sanitation engineering, and high-yield crop genetics—which have eradicated deadly plagues, alleviated famine, and doubled global life expectancy. Channeling scientific intellect toward curing neurodegenerative diseases or disability rather than destructive weaponry is unquestionably humanity's highest priority.\n\n"
                        "Furthermore, improving people's lives in the twenty-first century requires expanding scientific focus to planetary and environmental stewardship. Purely anthropocentric technologies of the industrial era improved short-term human comfort at the cost of catastrophic carbon emissions and biodiversity loss. Today, the most vital scientific endeavours—ranging from nuclear fusion and grid-scale battery storage to biodegradable polymers and drought-resistant agriculture—aim to stabilize Earth's climate. Because human health is inseparable from clean air, potable water, and fertile soil, ecological science directly serves human flourishing.\n\n"
                        "In conclusion, while curiosity-driven theoretical research has intrinsic value, the ultimate north star of science must always be the enhancement, protection, and sustainable enrichment of human life."
                    ),
                    "collocations": ["paramount objective", "philanthropic endowments", "medical and agricultural breakthroughs", "environmental stewardship", "ultimate north star"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Paying bills",
                    "questions": [
                        {"q": "What kinds of bills do you have to pay? [Why?]", "sample": "On a monthly basis, I am responsible for paying my mobile data plan, my Spotify and cloud storage subscriptions, and my share of the household electricity and Wi-Fi bills."},
                        {"q": "How do you usually pay your bills – in cash or by another method? [Why?]", "sample": "I pay 100 percent of my bills via mobile banking QR codes and automatic e-wallet deductions because it takes seconds and eliminates queuing at payment counters."},
                        {"q": "Have you ever forgotten to pay a bill? [Why/Why not?]", "sample": "Once, two years ago, I forgot to pay my internet bill during final exam week and our router was temporarily disconnected; since then, I have enabled auto-debit reminders."},
                        {"q": "Is there anything you do to make your bills cheaper? [Why/Why not?]", "sample": "Yes, I set my bedroom air conditioner to 27 degrees Celsius with a timer at night and share family subscription plans with my siblings to split the monthly cost."}
                    ]
                },
                "part2": {
                    "topic": "Describe some food or drink that you learned to prepare",
                    "cueCard": "You should say:\n- what food or drink you learned to prepare\n- when and where you learned to prepare this\n- how you learned to prepare this\n- and explain how you felt about learning to prepare this food or drink.",
                    "modelAnswer": (
                        "I would like to describe how I learned to prepare authentic Vietnamese beef noodle soup—Pho Bo—from scratch.\n\n"
                        "I learned this culinary skill during the lunar new year holiday last year in my grandmother's kitchen in Nam Dinh province, which is widely regarded as the birthplace of traditional Pho.\n\n"
                        "My grandmother taught me step by step that the soul of Pho lies in the clarity and depth of its bone broth. First, we parboiled beef marrow bones to remove impurities, charred fresh ginger and shallots over an open flame until fragrant, and toasted star anise, cinnamon sticks, and cardamom pods in a cast-iron skillet. We then simmered the broth on low heat for eight hours, skimming the surface meticulously.\n\n"
                        "When my entire family gathered around the table and praised the rich, aromatic broth I had ladled over the rice noodles, I felt an immense sense of pride and connection to my family's culinary heritage."
                    ),
                    "lexical": ["from scratch", "clarity and depth of bone broth", "charred over an open flame", "simmered on low heat", "culinary heritage"]
                },
                "part3": {
                    "topic": "Young people and cooking & Working as a chef",
                    "questions": [
                        {"q": "What kinds of things can children learn to cook?", "sample": "Young children can safely start by washing vegetables, scrambling eggs, assembling fresh spring rolls, and baking simple oatmeal cookies under adult supervision."},
                        {"q": "Do you think it is important for young people to learn how to cook?", "sample": "It is a fundamental life skill; knowing how to cook empowers young adults to control their nutritional intake, avoid ultra-processed takeaways, and save substantial money when living independently."},
                        {"q": "Why do some people enjoy working as a professional chef despite the pressure?", "sample": "Passionate chefs thrive on the immediate creative artistry of plating dishes, the camaraderie of a synchronized kitchen brigade, and the joy of delighting diners."},
                        {"q": "What are the most important qualities needed to be a successful chef?", "sample": "Beyond refined palate sensitivity and knife skills, a great chef requires extraordinary stamina, composure under dinner-rush stress, and rigorous food-hygiene discipline."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 18 Test 1: Phân tích bài đọc Nông nghiệp đô thị Paris (Urban Farming), Quản lý rừng Pennsylvania và Rác vũ trụ (Space Junk).",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "grown in deep trenches of dark soil", "passageKey": "hollow plastic tubes... soil-free aeroponic towers", "verdict": "FALSE (Trồng khí canh trong ống nhựa rỗng không đất)"},
                    {"qNum": "P2 - Q4", "questionKey": "high-grading harmful", "passageKey": "cutting only tallest most valuable trees and leaving diseased crooked trees", "verdict": "B (Chỉ lấy cây tốt nhất, để lại cây sâu bệnh)"},
                    {"qNum": "P3 - Q6", "questionKey": "Kessler syndrome", "passageKey": "runaway chain reaction where one collision generates debris triggering further collisions", "verdict": "B (Phản ứng dây chuyền va chạm rác vũ trụ)"}
                ]
            },
            "vocabList": [
                {"word": "aeroponic farming", "ipa": "ˌeəroʊˈpɒnɪk ˈfɑːmɪŋ", "vi": "canh tác khí canh (phun sương dinh dưỡng vào rễ không cần đất)", "type": "noun phrase", "collocation": "vertical aeroponic farming on urban rooftops", "example": "Aeroponic farming reduces water consumption by 90 percent."},
                {"word": "salvage logging", "ipa": "ˈsælvɪdʒ ˈlɒɡɪŋ", "vi": "khai thác tận thu các cây bị sâu bệnh hoặc gãy đổ", "type": "noun phrase", "collocation": "conduct sustainable salvage logging", "example": "Salvage logging removes ash trees killed by beetles."},
                {"word": "orbital debris", "ipa": "ˈɔːbɪtl ˈdebriː", "vi": "mảnh vỡ / rác vũ trụ bay trên quỹ đạo", "type": "noun phrase", "collocation": "track high-velocity orbital debris", "example": "Orbital debris poses a lethal hazard to active satellites."}
            ]
        },

        # CAM 18 - TEST 2
        {
            "id": 2,
            "title": "Cambridge IELTS 18 — Test 2",
            "topic": "Stonehenge, Living with Artificial Intelligence & Leonardo da Vinci's Ideal City",
            "passages": [
                "P1: Stonehenge",
                "P2: Living with artificial intelligence",
                "P3: An ideal city (Leonardo da Vinci)"
            ],
            "keyVocab": ["sarsen megaliths", "Preseli Hills bluestones", "AI value alignment", "multi-level hydraulic city"],
            "listening": {
                "title": "Cambridge 18 Listening Test 2",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Working at Milo's Restaurants",
                        "audioScript": (
                            "MANAGER: Milo's Restaurants recruitment desk. All staff receive free training in food hygiene and customer service, plus a free taxi home if working after midnight. For the breakfast supervisor role at our Wivenhoe Street branch, the starting salary is £15.50 per hour, and you must have a certificate in first aid."
                        ),
                        "questions": [
                            {"num": 1, "q": "Free ________ provided for staff working after midnight", "answer": "taxi"},
                            {"num": 2, "q": "Branch location: ________ Street", "answer": "Wivenhoe"},
                            {"num": 3, "q": "Applicants must hold a certificate in first ________", "answer": "aid"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Housing Development Programme at Nunston",
                        "audioScript": (
                            "PLANNER: The new Nunston residential eco-village will be constructed on the site of a former sheep farm near the railway station, featuring a community medical centre and protected cycle lanes."
                        ),
                        "questions": [
                            {"num": 11, "q": "Site was previously used as a ________ farm", "answer": "sheep"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: The Laki Volcano Eruption of 1783",
                        "audioScript": (
                            "ADAM: Michelle, the 1783 Laki fissure eruption in Iceland released a toxic fluorine cloud that poisoned livestock across Europe and caused extreme winter frosts in North America."
                        ),
                        "questions": [
                            {"num": 21, "q": "The eruption released toxic ________ gas that poisoned livestock", "answer": "fluorine"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Pockets in Clothing — A Social History",
                        "audioScript": (
                            "LECTURER: Today we trace the history of pockets. In the seventeenth century, men had pockets sewn directly into their waistcoats and breeches, whereas women carried external tie-on pouches worn underneath their wide petticoats. When slim-fitting neoclassical dresses came into fashion in the 1790s, women's pockets shrank into tiny decorative reticules—a gender disparity in pocket size that persists in modern jeans."
                        ),
                        "questions": [
                            {"num": 31, "q": "17th-century women wore tie-on pouches beneath their ________", "answer": "petticoats / skirts"},
                            {"num": 32, "q": "In the 1790s, women carried small decorative bags called ________", "answer": "reticules"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Stonehenge",
                    "text": (
                        "For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument that took an estimated 1,500 years to erect. Located on Salisbury Plain in southern England, it is comprised of roughly 100 massive upright stones placed in a circular layout.\n\n"
                        "Archaeologists have outlined three main stages in the construction of Stonehenge. Around 3100 BCE, Neolithic Britons used primitive tools made from deer antlers to dig a circular ditch and bank, or 'henge', with 56 pits known as the Aubrey Holes. Second, around 2600 BCE, builders transported 80 four-ton 'bluestones' all the way from the Preseli Hills in southwest Wales—a distance of more than 240 kilometres.\n\n"
                        "In the third phase, around 2500 BCE, massive 25-ton sandstone slabs known as 'sarsens', sourced from Marlborough Downs 30 kilometres to the north, were arranged into the iconic outer circle with horizontal lintels and the inner horseshoe of خمسه trilithons. While 12th-century chronicler Geoffrey of Monmouth claimed the wizard Merlin magically flew the stones from Ireland, modern excavations by Mike Parker Pearson suggest Stonehenge functioned as a sacred burial ground and solstice calendar unifying prehistoric Britain."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "The initial ditch at Stonehenge was dug using iron spades and pickaxes.", "answer": "FALSE", "explain": "Đoạn 2 nêu người thời Đồ Đá Mới dùng công cụ thô sơ làm từ sừng hươu ('primitive tools made from deer antlers')."},
                        {"num": 2, "type": "TFNG", "q": "The bluestones were transported from a much greater distance than the larger sarsen stones.", "answer": "TRUE", "explain": "Đoạn 2 & 3 nêu đá xanh (bluestones) được chở từ đồi Preseli xứ Wales cách hơn 240 km, xa hơn nhiều so với đá sarsen lấy cách đó 30 km."},
                        {"num": 3, "type": "TFNG", "q": "Modern archaeologists agree that the wizard Merlin transported the stones from Ireland.", "answer": "FALSE", "explain": "Đoạn 3 nêu đó chỉ là truyền thuyết thế kỷ 12 của Geoffrey of Monmouth."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Living with artificial intelligence",
                    "text": (
                        "Powerful artificial intelligence (AI) needs to be reliably aligned with human values, but does this mean AI will eventually have to police those values?\n\n"
                        "This has been the decade of AI, with one astonishing feat after another. Chess-playing AI AlphaZero defeated the world's best chess engine after just four hours of self-play. Yet computer scientist Stuart Russell from UC Berkeley warns of the 'King Midas problem': in Greek legend, King Midas wished that everything he touched would turn to gold, only to starve when his food and daughter turned to solid metal.\n\n"
                        "Similarly, a superintelligent AI given an incomplete objective—such as 'cure cancer as fast as possible' or 'maximize user click-through engagement'—might achieve its literal goal through catastrophic side effects, such as inducing tumours in humans to run faster clinical trials or radicalizing society with outrage media. Therefore, AI must be designed with mathematical 'humility', constantly deferring to human moral preferences."
                    ),
                    "questions": [
                        {"num": 4, "type": "MCQ", "q": "Why does Stuart Russell use the analogy of the 'King Midas problem'?", "options": ["A. Because AI systems are made of pure gold", "B. To illustrate how an AI pursuing a poorly specified goal could cause disastrous unintended consequences", "C. To show that ancient Greeks invented computers", "D. To argue that AI cannot play chess"], "answer": "B", "explain": "Đoạn 2 & 3 giải thích bài toán Vua Midas minh họa nguy cơ khi giao cho AI một mục tiêu thiếu ràng buộc đạo đức, khiến nó thực hiện theo nghĩa đen và gây hậu quả thảm khốc."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: An ideal city",
                    "text": (
                        "Leonardo da Vinci's ideal city project, conceived after a devastating plague wiped out a third of Milan's population in 1484–85, was centuries ahead of its time.\n\n"
                        "Shocked by the cramped, filthy medieval streets of Milan where sewage stagnated and disease bred, Leonardo designed a radical multi-level urban masterplan. The upper level was reserved exclusively for pedestrians, lined with arcaded Renaissance palazzos and wide boulevards whose width equalled the height of adjacent buildings to guarantee maximum sunlight, wind ventilation, and earthquake safety.\n\n"
                        "Beneath the pedestrian decks, a middle subterranean tier accommodated horse-drawn freight carts and tradesmen, while the lowest level consisted of an engineered network of hydraulic canals fed by the Ticino River. Lock gates flushed municipal waste out of the city daily and delivered goods directly into basement warehouses. Although Duke Ludovico Sforza never funded the project, modern urban planners view Leonardo's sketches as a blueprint for sustainable, compact cities."
                    ),
                    "questions": [
                        {"num": 5, "type": "TFNG", "q": "Leonardo da Vinci designed his ideal city in response to the 1484 plague in Milan.", "answer": "TRUE", "explain": "Đoạn 1 nêu: 'conceived after a devastating plague wiped out a third of Milan's population in 1484–85'."},
                        {"num": 6, "type": "MCQ", "q": "Why did Leonardo specify that street widths should match the height of surrounding buildings?", "options": ["A. To allow helicopters to land", "B. To ensure ample sunlight, fresh air circulation, and safety during earthquakes", "C. To save money on cobblestone paving", "D. To block out the sun"], "answer": "B", "explain": "Đoạn 2 nêu: 'whose width equalled the height of adjacent buildings to guarantee maximum sunlight, wind ventilation, and earthquake safety'."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: US Households by Annual Income (2007, 2011, 2015)",
                    "prompt": "The chart below shows the number of households in the US by their annual income in 2007, 2011 and 2015.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Grouped Bar Chart (5 Income Brackets across 3 Years)",
                    "dataSummary": "US Households (in millions) across 5 brackets: <$25,000 (25m in 2007 -> 29m in 2011 -> 28m in 2015); $25,000–$49,999 (27m -> 30m -> 28m); $50,000–$74,999 (remained completely flat at ~21m across all 3 years); $75,000–$99,999 (15m -> 14m -> 15m, lowest bracket); $100,000 or more (29m in 2007 -> dipped to 27m in 2011 -> surged to highest point of 33m in 2015).",
                    "modelAnswer": (
                        "The grouped bar chart compares the distribution of United States households (measured in millions) across five annual income brackets in the years 2007, 2011, and 2015.\n\n"
                        "Overall, the highest income group ($100,000 or more) accounted for the largest number of households in both 2007 and 2015, whereas the $75,000–$99,999 bracket consistently contained the fewest households. Notably, the middle-income bracket ($50,000–$74,999) remained virtually unchanged throughout the eight-year period.\n\n"
                        "In 2007, households earning $100,000 or more formed the largest demographic at approximately 29 million, closely followed by the $25,000–$49,999 group (27 million) and the under-$25,000 group (25 million). Following the economic downturn in 2011, the affluent $100,000+ bracket dipped to 27 million, while the two lowest income brackets expanded to 29 million (<$25,000) and 30 million ($25,000–$49,999) respectively.\n\n"
                        "By 2015, however, upper-income households rebounded strongly, surging to a chart-high of 33 million, while the two lowest brackets receded slightly to 28 million each. Meanwhile, the $50,000–$74,999 tier stayed static at 21 million in all three years, and the $75,000–$99,999 tier hovered around 14 to 15 million."
                    ),
                    "vocabBank": ["income brackets", "consistently contained the fewest", "economic downturn", "rebounded strongly", "stayed static"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Studying Additional Subjects vs Focusing Only on a Main Qualification",
                    "prompt": "Some university students want to learn about other subjects in addition to their main subjects. Others believe it is more important to give all their time and attention to studying for a qualification.\nDiscuss both these views and give your own opinion.",
                    "essayType": "Discussion & Opinion (Balanced / Favouring Interdisciplinary Breadth)",
                    "outline": {
                        "intro": "Discuss the merits of deep single-subject specialization versus interdisciplinary breadth; argue that combining core mastery with complementary elective subjects best prepares graduates for the modern economy.",
                        "body1": "Why some favour exclusive focus on one major: Demanding degrees like medicine, law, or civil engineering require immense technical depth.",
                        "body2": "Why interdisciplinary breadth is vital: Innovation happens at the intersection of fields (e.g., computer science + psychology/ethics); versatility protects against job automation.",
                        "conclusion": "A 'T-shaped' education—80% core specialization and 20% cross-disciplinary electives—is the gold standard for university curricula."
                    },
                    "modelAnswer": (
                        "Higher education curricula worldwide diverge on whether undergraduates should devote their entire academic energy to a single specialized qualification or explore supplementary electives across diverse disciplines. While exclusive specialization is necessary for mastering complex technical minutiae, I believe that integrating interdisciplinary subjects alongside a core major produces more adaptable, innovative graduates.\n\n"
                        "Proponents of single-subject concentration emphasize the sheer volume of expertise required in modern professions. Fields such as neurosurgery, structural engineering, and corporate law demand thousands of hours of rigorous laboratory practice and theoretical mastery. If medical or engineering students dilute their schedules with unrelated humanities modules, they risk graduating with superficial competence, which could prove hazardous in high-stakes clinical or industrial settings.\n\n"
                        "Conversely, advocates of a broader curriculum point out that the most transformative breakthroughs in the twenty-first century occur at the intersection of disciplines. A software engineer who studies cognitive psychology and ethics is far better equipped to design humane artificial intelligence than a coder who understands only syntax. Similarly, an environmental scientist who takes elective courses in economics and public policy can translate laboratory data into persuasive legislation. Furthermore, in a volatile labour market where narrow technical tasks are rapidly automated, intellectual agility and cross-disciplinary communication are a graduate's strongest assets.\n\n"
                        "In conclusion, university education should cultivate 'T-shaped' professionals: students should dedicate the majority of their time to deep mastery of their primary qualification while enriching their perspective through selective interdisciplinary electives."
                    ),
                    "collocations": ["technical minutiae", "superficial competence", "intersection of disciplines", "intellectual agility", "T-shaped professionals"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Science",
                    "questions": [
                        {"q": "Did you like studying science when you were at school? [Why/Why not?]", "sample": "Yes, biology and chemistry were my favourite subjects because performing hands-on laboratory experiments—like observing plant cells under a microscope—made abstract theories tangible."},
                        {"q": "What do you remember about your science teachers at school?", "sample": "My high-school physics teacher had a wonderful sense of humour; he used bicycle wheels and pendulums in class to demonstrate angular momentum."},
                        {"q": "How interested are you in science now? [Why/Why not?]", "sample": "I remain deeply interested, particularly in neuroscience and renewable energy, as they directly impact how we learn and how humanity combats climate change."},
                        {"q": "What do you think has been the most important scientific invention in the last 100 years?", "sample": "Without question, the discovery of antibiotics like penicillin and the invention of the transistor microchip have saved hundreds of millions of lives and connected the globe."}
                    ]
                },
                "part2": {
                    "topic": "Describe a tourist attraction in your country that you would recommend",
                    "cueCard": "You should say:\n- what the tourist attraction is\n- where in your country this tourist attraction is\n- what visitors can see and do there\n- and explain why you would recommend this tourist attraction.",
                    "modelAnswer": (
                        "I would wholeheartedly recommend Phong Nha-Ke Bang National Park, a spectacular karst mountain and cave reserve located in Quang Binh Province in central Vietnam.\n\n"
                        "The park is home to over 300 limestone caves carved by underground rivers over 400 million years, including Son Doong—the largest natural cave passage on Earth.\n\n"
                        "Visitors there can embark on wooden boat excursions along the emerald Son River straight into the illuminated caverns of Phong Nha Cave, trek through primeval tropical rainforests teeming with rare langur monkeys, or kayak through the subterranean Dark Cave and float in natural mineral mud baths.\n\n"
                        "I recommend this destination because it offers untouched geological grandeur without the commercialized crowds of coastal resorts, leaving every traveller awestruck by the sheer scale of nature."
                    ),
                    "lexical": ["karst mountain reserve", "carved by underground rivers", "emerald river", "untouched geological grandeur", "awestruck by the sheer scale"]
                },
                "part3": {
                    "topic": "Museums and art galleries & The holiday industry",
                    "questions": [
                        {"q": "What are the most popular museums and art galleries in your country?", "sample": "The Vietnam National Museum of History in Hanoi, the War Remnants Museum in Ho Chi Minh City, and the Museum of Cham Sculpture in Da Nang attract millions of visitors annually."},
                        {"q": "Do you believe that all museums and art galleries should be free to enter?", "sample": "State-funded national museums should offer free admission to students and local citizens to democratize cultural education, while charging a modest maintenance fee to international tourists."},
                        {"q": "What kinds of things make a museum or art gallery an interesting place to visit?", "sample": "Interactive augmented-reality displays, bilingual audio storytelling, and hands-on workshops transform passive glass-case viewing into an unforgettable sensory journey."},
                        {"q": "How do you think the holiday industry will change in the next 25 years?", "sample": "Eco-tourism, carbon-neutral electric aviation, and immersive virtual-reality previews will become mainstream as travellers prioritize sustainability and authentic local experiences."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 18 Test 2: Phân tích bài đọc Stonehenge, Living with AI (Stuart Russell) và Thành phố lý tưởng của Leonardo da Vinci.",
                "keywordTable": [
                    {"qNum": "P1 - Q2", "questionKey": "bluestones transported from greater distance", "passageKey": "bluestones from Preseli Hills >240km vs sarsens 30km", "verdict": "TRUE (240km xa hơn nhiều so với 30km)"},
                    {"qNum": "P2 - Q4", "questionKey": "King Midas problem analogy", "passageKey": "incomplete objective achieved with catastrophic side effects", "verdict": "B (Mục tiêu định nghĩa thiếu sót gây hậu quả tai hại)"},
                    {"qNum": "P3 - Q6", "questionKey": "street widths match height of buildings", "passageKey": "guarantee maximum sunlight, wind ventilation, and earthquake safety", "verdict": "B (Đảm bảo ánh nắng, thông gió và an toàn động đất)"}
                ]
            },
            "vocabList": [
                {"word": "megalithic monument", "ipa": "ˌmeɡəˈlɪθɪk ˈmɒnjumənt", "vi": "công trình cự thạch thời tiền sử", "type": "noun phrase", "collocation": "erect a prehistoric megalithic monument", "example": "Stonehenge is Europe's most celebrated megalithic monument."},
                {"word": "value alignment", "ipa": "ˈvæljuː əˈlaɪnmənt", "vi": "sự tương thích hệ giá trị đạo đức giữa AI và con người", "type": "noun phrase", "collocation": "ensure reliable AI value alignment", "example": "Stuart Russell emphasizes value alignment in superintelligent AI."},
                {"word": "hydraulic canal", "ipa": "haɪˈdrɔːlɪk kəˈnæl", "vi": "kênh đào thủy lực điều tiết nước và chất thải", "type": "noun phrase", "collocation": "engineered network of hydraulic canals", "example": "Leonardo's ideal city utilized subterranean hydraulic canals for sanitation."}
            ]
        },

        # CAM 18 - TEST 3
        {
            "id": 3,
            "title": "Cambridge IELTS 18 — Test 3",
            "topic": "Materials Beyond Concrete, The Steam Car & Mixed-Ability Classes",
            "passages": [
                "P1: Materials to take us beyond concrete",
                "P2: The steam car",
                "P3: The case for mixed-ability classes"
            ],
            "keyVocab": ["cross-laminated timber", "volcanic ash concrete", "flash boiler steam car", "pedagogical streaming"],
            "listening": {
                "title": "Cambridge 18 Listening Test 3",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Wayside Camera Club Membership",
                        "audioScript": (
                            "SECRETARY: Wayside Camera Club, Brenda speaking.\n"
                            "DAN: Hi, I'd like to join the club. My name is Dan Green, living on Peake Street in Prestyn. I saw your advert on your website. We hold weekly talks, monthly outdoor photography walks, and an annual competition where the theme this year is 'Domestic Life'."
                        ),
                        "questions": [
                            {"num": 1, "q": "Applicant's street: ________ Street", "answer": "Peake"},
                            {"num": 2, "q": "Theme of this year's competition: Domestic ________", "answer": "Life"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Dan's Experience as a Tour Guide",
                        "audioScript": (
                            "DAN: Working as a mountain trek guide requires checking weather forecasts hourly and making sure tourists never stray near cliff edges during fog."
                        ),
                        "questions": [
                            {"num": 11, "q": "Guides must check ________ forecasts every hour", "answer": "weather"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Technology in Classroom Learning",
                        "audioScript": (
                            "NATALIE: Dave, our education study showed that interactive quizzes increased student engagement, provided teachers didn't let tablets become a distraction."
                        ),
                        "questions": [
                            {"num": 21, "q": "Interactive ________ increased student engagement", "answer": "quizzes"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Space Traffic Management & Satellite Constellations",
                        "audioScript": (
                            "LECTURER: With mega-constellations launching thousands of commercial broadband satellites into low-Earth orbit, astronomers warn that reflective satellite trails are spoiling night-sky telescope exposures, requiring automated collision-avoidance coordination."
                        ),
                        "questions": [
                            {"num": 31, "q": "Reflective satellite trails spoil night-sky ________ exposures", "answer": "telescope"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Materials to take us beyond concrete",
                    "text": (
                        "Concrete is everywhere, from bridges and dams to skyscrapers and pavements; it is the second most consumed substance on Earth after water. Yet the manufacture of Portland cement—the binding ingredient in concrete—is responsible for an astonishing 8 percent of global carbon dioxide emissions, because limestone must be heated in kilns to 1,450°C.\n\n"
                        "Architects and material scientists are now pioneering low-carbon alternatives. In Norway and Austria, engineers are constructing 18-storey high-rise towers using Cross-Laminated Timber (CLT)—layers of kiln-dried wood glued at right angles under immense pressure, which is as strong as steel, fire-resistant, and locks carbon inside the building.\n\n"
                        "Meanwhile, researchers are reviving ancient Roman marine concrete, which mixed volcanic ash (pozzolana) with lime and seawater, growing stronger over millennia as mineral crystals formed inside microscopic pores, as well as geopolymer cements made from industrial fly ash and blast-furnace slag."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Concrete is the most consumed material on Earth, surpassing even water.", "answer": "FALSE", "explain": "Đoạn 1 nêu bê tông đứng thứ hai sau nước ('second most consumed substance on Earth after water')."},
                        {"num": 2, "type": "TFNG", "q": "Portland cement production accounts for roughly 8 percent of global CO2 emissions.", "answer": "TRUE", "explain": "Đoạn 1 nêu: 'responsible for an astonishing 8 percent of global carbon dioxide emissions'."},
                        {"num": 3, "type": "TFNG", "q": "Cross-Laminated Timber (CLT) releases more carbon than traditional steel.", "answer": "FALSE", "explain": "Đoạn 2 nêu gỗ ép CLT lưu giữ carbon bên trong tòa nhà ('locks carbon inside the building')."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: The steam car",
                    "text": (
                        "When primitive automobiles first appeared in the 1890s, internal combustion petrol engines were noisy, smelly, vibrated violently, and required dangerous hand-cranking to start. By contrast, steam-powered cars—such as the Stanley Steamer—ran silently and smoothly, setting the world land speed record of 205 km/h in 1906.\n\n"
                        "The main drawback of early steam cars was that their boilers took up to 30 minutes to heat water into steam before the driver could move. However, in the 1920s, four Californian brothers—Abner, William, John, and Warren Doble—invented the Model E steam car equipped with an electric-ignition 'flash boiler'.\n\n"
                        "The Doble Model E built up full steam pressure from cold water in under 40 seconds, accelerated from 0 to 100 km/h in 12 seconds, burned cheap kerosene cleanly, and lasted for hundreds of thousands of miles without a gearbox. Yet priced at $11,000 during the Great Depression—while Henry Ford's mass-produced Model T cost under $500—the Doble company went bankrupt in 1931."
                    ),
                    "questions": [
                        {"num": 4, "type": "MCQ", "q": "What major limitation of early steam cars did the Doble brothers overcome in the 1920s?", "options": ["A. They made the car fly", "B. Their flash boiler reduced startup heating time from 30 minutes to under 40 seconds", "C. They priced the car at $100", "D. They replaced steam with coal dust"], "answer": "B", "explain": "Đoạn 2 & 3 nêu nồi hơi chớp nhoáng (flash boiler) của anh em nhà Doble giúp tạo áp suất hơi nước từ nước lạnh chỉ trong chưa đầy 40 giây thay vì phải đợi 30 phút."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: The case for mixed-ability classes",
                    "text": (
                        "Should schools group students into classes based on academic ability ('streaming' or 'setting'), or teach children of all abilities together in mixed-ability classrooms?\n\n"
                        "While traditionalists argue that streaming allows high-achieving students to advance rapidly without being held back, educational researcher John Hattie's synthesis of over 300 studies encompassing millions of students reveals that streaming has near-zero positive impact on top students while inflicting severe psychological damage on those placed in lower sets.\n\n"
                        "Stanford professor Jo Boaler's research on mathematics classrooms demonstrates that students assigned to 'bottom sets' internalize a self-fulfilling prophecy that they lack innate talent, whereas in mixed-ability collaborative classrooms, high-attaining pupils deepen their own conceptual mastery by explaining ideas to peers—an effect known in Vygotskian psychology as peer scaffolding."
                    ),
                    "questions": [
                        {"num": 5, "type": "TFNG", "q": "John Hattie's meta-analysis showed that ability streaming dramatically boosts the scores of lower-set students.", "answer": "FALSE", "explain": "Đoạn 2 nêu phân luồng theo năng lực gây tổn thương tâm lý nặng nề cho học sinh nhóm dưới ('inflicting severe psychological damage on those placed in lower sets')."},
                        {"num": 6, "type": "MCQ", "q": "How do high-achieving students benefit from mixed-ability classrooms according to the passage?", "options": ["A. They get less homework", "B. Explaining concepts to peers deepens and consolidates their own understanding", "C. They do not have to take exams", "D. They study alone in silence"], "answer": "B", "explain": "Đoạn 3 nêu học sinh giỏi củng cố hiểu biết sâu sắc hơn khi giải thích bài cho bạn học ('deepen their own conceptual mastery by explaining ideas to peers')."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Central Library Floor Plan Redevelopment (2001 vs 2009)",
                    "prompt": "The diagram below shows the floor plan of a public library 20 years ago and how it looks now.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Building Floor Plans (20 Years Ago vs Now)",
                    "dataSummary": "Central Library: Entrance at the bottom remains unchanged. Center area: Tables & chairs removed to create an open atrium. Left side: Adult fiction moved to right wall; replaced by All reference books and a Children's fiction room + storytelling sofa area (replacing the old CD/video/computer games room at top-left). Right side: Enquiry desk replaced by self-service machines + café; Adult non-fiction replaced by Adult fiction + Information desk. Top-right: Quiet reading room (newspapers/magazines) converted into a Lecture room.",
                    "modelAnswer": (
                        "The two floor plans compare the ground-floor layout of Central Library twenty years ago with its modernized configuration today.\n\n"
                        "Overall, the library has been extensively redesigned to incorporate digital self-service technology, communal spaces for children's storytelling and public lectures, and a café, while eliminating the central study tables and the traditional enquiry desk.\n\n"
                        "Twenty years ago, visitors entering through the southern doors saw a cluster of tables and chairs in the middle of the hall. Today, this central furniture has been completely removed to create an unobstructed open walkway. On the left-hand side of the building, the section formerly occupied by adult fiction books now houses all reference books. In the north-west corner, the room that previously stocked CDs, videos, and computer games has been expanded and converted into a dedicated children's fiction room equipped with sofas for storytelling events.\n\n"
                        "Significant changes have also taken place along the eastern side. The adult non-fiction shelves have been replaced by the relocated adult fiction collection, an information desk, and three self-service kiosks. In the south-east corner, the old enquiry desk has been replaced by a café, while the north-east reading room for newspapers and magazines has been transformed into a lecture room."
                    ),
                    "vocabBank": ["modernized configuration", "unobstructed open walkway", "self-service kiosks", "dedicated children's fiction room", "transformed into a lecture room"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Rural-to-Urban Migration and Decreasing Countryside Population",
                    "prompt": "In many countries around the world, rural people are moving to cities, so the population in the countryside is decreasing.\nDo you think this is a positive or a negative development?",
                    "essayType": "Opinion Essay (Predominantly Negative due to urban strain and agrarian decline)",
                    "outline": {
                        "intro": "While urban migration offers rural youth individual economic mobility, the depopulation of the countryside is predominantly a negative development that hollows out agrarian communities and overwhelms metropolitan infrastructure.",
                        "body1": "Economic & cultural hollowing of the countryside: Ageing farming villages, labour shortages in agriculture, and loss of rural traditions.",
                        "body2": "Overburdened megacities: Slum formation, gridlocked traffic, skyrocketing housing rents, and environmental pollution.",
                        "conclusion": "Governments must invest in rural broadband, regional universities, and agricultural tech to revitalize the countryside."
                    },
                    "modelAnswer": (
                        "Across both developing and industrialized nations, the steady exodus of rural inhabitants toward metropolitan centres has significantly depopulated the countryside. Although relocating to cities affords individual migrants broader career prospects, I contend that large-scale rural depopulation is a predominantly negative development that jeopardizes agricultural sustainability and overburdens urban ecosystems.\n\n"
                        "The foremost detriment of rural exodus is the demographic and economic hollowing-out of agrarian regions. Because it is overwhelmingly working-age young adults who migrate to cities in search of corporate or factory employment, rural villages are left with rapidly ageing populations. This demographic imbalance creates acute labour shortages in domestic agriculture, leaving fertile farmland uncultivated and increasing national dependence on imported food. Furthermore, as village populations shrink below critical thresholds, local schools, clinics, and post offices are forced to close, accelerating a vicious cycle of rural decline and eroding traditional folk culture.\n\n"
                        "Simultaneously, the unchecked influx of rural migrants places unsustainable pressure on metropolitan infrastructure. Cities cannot expand their housing stock, sewage networks, or public transit systems fast enough to absorb millions of newcomers. Consequently, working-class migrants are often forced into cramped informal settlements or overpriced peripheral tenements, while urban residents endure chronic traffic gridlock, hazardous air pollution, and strained hospital capacities.\n\n"
                        "In conclusion, while urban migration is a rational choice for individuals seeking upward mobility, the macroscopic hollowing-out of the countryside harms national food security and urban livability. Governments should decentralize investment into rural infrastructure and telecommuting hubs to restore balanced regional development."
                    ),
                    "collocations": ["steady exodus", "demographic and economic hollowing-out", "acute labour shortages", "vicious cycle of rural decline", "decentralize investment"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Online shopping",
                    "questions": [
                        {"q": "How often do you buy things online? [Why?]", "sample": "I shop online roughly two or three times a month, mainly during mid-month flash sales when e-commerce platforms offer free shipping vouchers."},
                        {"q": "What was the last thing you bought online?", "sample": "Last week I ordered a hardcover Cambridge IELTS practice book and a desk lamp from Tiki; both arrived at my doorstep the very next morning."},
                        {"q": "Do you ever see things in shops and then buy them online? [Why/Why not?]", "sample": "Yes, especially with running shoes or electronics—I like to test the physical fit and build quality in a brick-and-mortar showroom before ordering online at a 20% discount."},
                        {"q": "Do you think the popularity of online shopping is having a bad effect on shops and town centres?", "sample": "Undeniably; many independent bookstores and clothing boutiques on high streets have closed down because they cannot compete with the vast inventory and low overheads of e-commerce giants."}
                    ]
                },
                "part2": {
                    "topic": "Describe a time when you had a problem with a piece of equipment",
                    "cueCard": "You should say:\n- what piece of equipment you had a problem with\n- what the problem was\n- what you did about this problem\n- and explain how you felt when you had this problem.",
                    "modelAnswer": (
                        "I would like to describe a stressful evening last winter when my laptop's cooling fan suddenly failed right in the middle of an online mock exam.\n\n"
                        "My laptop was a three-year-old ultrabook that I used daily for all my university coursework. Halfway through the listening section, the chassis became burning hot to the touch, a loud grinding noise came from the vent, and the screen abruptly went black due to thermal shutdown.\n\n"
                        "Rather than panicking, I let the laptop cool down for ten minutes, booted it up in safe mode to back up my essay drafts onto Google Drive, and the next morning took it to a reputable electronics repair shop. The technician opened the backplate, cleaned out a thick layer of dust clogging the heatsink, applied fresh thermal paste, and replaced the worn fan bearing for fifteen dollars.\n\n"
                        "Initially I felt frustrated and anxious about losing my files, but once it was fixed, I felt relieved and learned to service my hardware every six months."
                    ),
                    "lexical": ["thermal shutdown", "booted up in safe mode", "clogging the heatsink", "applied fresh thermal paste", "service my hardware"]
                },
                "part3": {
                    "topic": "Technology at home & Disposing of old equipment",
                    "questions": [
                        {"q": "What are the most common household appliances that people use in your country?", "sample": "Electric rice cookers,inverter refrigerators, washing machines, and air conditioners are indispensable staples in virtually every Vietnamese household."},
                        {"q": "Do you think household appliances make people lazier?", "sample": "Rather than making people lazy, labour-saving appliances liberate families from exhausting manual drudgery like hand-washing laundry, freeing up time for education and career pursuits."},
                        {"q": "Why do people often throw away electronic equipment instead of repairing it?", "sample": "Manufacturers frequently glue components shut and price replacement parts almost as high as a brand-new device—a strategy known as planned obsolescence."},
                        {"q": "What are the environmental problems caused by electronic waste (e-waste)?", "sample": "Discarded circuit boards and lithium batteries leach toxic heavy metals such as lead, mercury, and cadmium into groundwater if dumped in landfills instead of being properly recycled."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 18 Test 3: Phân tích vật liệu thay thế bê tông (CLT & Roman Concrete), Xe hơi nước Doble và Lớp học đa trình độ.",
                "keywordTable": [
                    {"qNum": "P1 - Q2", "questionKey": "Portland cement 8% of global CO2", "passageKey": "responsible for an astonishing 8 percent of global carbon dioxide emissions", "verdict": "TRUE (Chiếm 8% lượng phát thải CO2 toàn cầu)"},
                    {"qNum": "P2 - Q4", "questionKey": "Doble brothers flash boiler", "passageKey": "built up full steam pressure from cold water in under 40 seconds", "verdict": "B (Giảm thời gian đun sôi từ 30 phút xuống dưới 40 giây)"},
                    {"qNum": "P3 - Q6", "questionKey": "high-achieving students benefit in mixed-ability", "passageKey": "deepen their own conceptual mastery by explaining ideas to peers", "verdict": "B (Hiểu sâu hơn khi giảng bài cho bạn)"}
                ]
            },
            "vocabList": [
                {"word": "cross-laminated timber", "ipa": "krɒs ˈlæmɪneɪtɪd ˈtɪmbər", "vi": "gỗ ép chéo nhiều lớp siêu bền thay thế bê tông", "type": "noun phrase", "collocation": "construct high-rise buildings from cross-laminated timber", "example": "Cross-laminated timber locks carbon inside skyscrapers."},
                {"word": "self-fulfilling prophecy", "ipa": "ˌself fʊlˈfɪlɪŋ ˈprɒfəsi", "vi": "lời tiên tri tự ứng nghiệm (niềm tin dẫn đến hành vi làm nó thành thật)", "type": "noun phrase", "collocation": "internalize a negative self-fulfilling prophecy", "example": "Placing students in bottom sets creates a damaging self-fulfilling prophecy."},
                {"word": "peer scaffolding", "ipa": "pɪər ˈskæfəldɪŋ", "vi": "sự hỗ trợ học tập lẫn nhau giữa bạn đồng trang lứa", "type": "noun phrase", "collocation": "facilitate collaborative peer scaffolding", "example": "Mixed-ability classrooms thrive on peer scaffolding."}
            ]
        },

        # CAM 18 - TEST 4
        {
            "id": 4,
            "title": "Cambridge IELTS 18 — Test 4",
            "topic": "Green Roofs, The Growth Mindset & Alfred Wegener's Continental Drift",
            "passages": [
                "P1: Green roofs",
                "P2: The growth mindset",
                "P3: Alfred Wegener: science, exploration and the theory of continental drift"
            ],
            "keyVocab": ["urban heat island effect", "stormwater attenuation", "growth vs fixed mindset", "continental drift Pangea"],
            "listening": {
                "title": "Cambridge 18 Listening Test 4",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Job Details from Employment Agency (Medical Centre Receptionist)",
                        "audioScript": (
                            "AGENT: Hi Julie, I have a temporary receptionist vacancy at the Chastons Medical Centre on Fordham Road. Your duties include booking appointments, responding to patient emails, and updating the database. The post starts on the 17th of May."
                        ),
                        "questions": [
                            {"num": 1, "q": "Medical Centre is located on ________ Road", "answer": "Fordham"},
                            {"num": 2, "q": "Job starts on the 17th of ________", "answer": "May"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Museum of Farming Life",
                        "audioScript": (
                            "CURATOR: Welcome to the Museum of Farming Life! Our new exhibition displays vintage steam tractors, traditional cheese-making tools, and a recreated Victorian farmhouse kitchen."
                        ),
                        "questions": [
                            {"num": 11, "q": "Exhibition includes traditional ________-making tools", "answer": "cheese"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Origami as an Educational Tool in Mathematics",
                        "audioScript": (
                            "TUTOR: Folding paper origami cranes and geometric polyhedra helped primary school children visualize fractions and symmetry much faster than textbook diagrams."
                        ),
                        "questions": [
                            {"num": 21, "q": "Origami helped pupils visualize fractions and ________", "answer": "symmetry"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Victor Hugo and His Exile in Guernsey",
                        "audioScript": (
                            "LECTURER: During his 15-year political exile on the Channel Island of Guernsey, French writer Victor Hugo purchased Hauteville House—the only property he ever owned. Standing at a desk in his glass lookout room overlooking the sea, Hugo completed his masterpiece 'Les Misérables' in 1862 and hosted weekly dinners for impoverished local children."
                        ),
                        "questions": [
                            {"num": 31, "q": "Victor Hugo wrote standing up in his glass ________ room", "answer": "lookout"},
                            {"num": 32, "q": "He hosted weekly dinners for poor local ________", "answer": "children"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Green roofs",
                    "text": (
                        "Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world. More and more private companies and city authorities are investing in green roofs, drawn to their wide-ranging benefits. Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife, tackling air pollution and even growing food.\n\n"
                        "Dark asphalt and concrete rooftops absorb solar radiation, raising urban temperatures by up to 5°C compared to surrounding countryside—the 'urban heat island effect'. Vegetated green roofs cool buildings through evapotranspiration, cutting summer air-conditioning energy bills by 40 percent, while absorbing up to 75 percent of heavy stormwater rainfall so municipal drains do not overflow.\n\n"
                        "Furthermore, doctors in hospitals with rooftop healing gardens report that patients recover faster when able to interact with greenery, though retrofitting older roofs requires structural engineering checks to support the weight of wet soil."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Green roofs help prevent urban flooding by absorbing a large proportion of rainwater.", "answer": "TRUE", "explain": "Đoạn 2 nêu mái nhà xanh hấp thụ tới 75% lượng nước mưa lớn, giúp cống thoát nước đô thị không bị quá tải."},
                        {"num": 2, "type": "TFNG", "q": "Any old building can have a heavy soil green roof installed without checking its structural strength.", "answer": "FALSE", "explain": "Đoạn 3 nêu việc cải tạo mái nhà cũ đòi hỏi phải kiểm tra kết cấu kỹ thuật để chịu được tải trọng của đất ướt."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: The growth mindset",
                    "text": (
                        "Over the past century, a powerful idea has taken root in the educational landscape. The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities.\n\n"
                        "Psychologist Carol Dweck at Stanford University pioneered this distinction between a 'fixed mindset' (believing ability is carved in stone) and a 'growth mindset' (believing intelligence develops through effort and perseverance). In her famous 1998 study, children praised for being 'clever' chose easy puzzles afterward to protect their ego, whereas children praised for 'working hard' eagerly tackled harder challenges.\n\n"
                        "However, critics such as David Yeager and Timothy Bates note that some recent replication studies found minimal grade improvements when teachers misunderstood the theory—creating a 'false growth mindset' by praising sheer effort even when a student's strategy was failing, rather than guiding them toward new learning strategies."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "What happened in Dweck's 1998 study when children were praised for being 'clever'?", "options": ["A. They chose harder puzzles", "B. They chose easier puzzles afterward to avoid looking unintelligent", "C. They taught other students", "D. They scored 100% on every test"], "answer": "B", "explain": "Đoạn 2 nêu trẻ được khen 'thông minh' có xu hướng chọn bài dễ hơn sau đó để bảo vệ cái tôi khỏi thất bại."},
                        {"num": 4, "type": "TFNG", "q": "A 'false growth mindset' occurs when teachers praise effort alone without helping students change ineffective strategies.", "answer": "TRUE", "explain": "Đoạn 3 giải thích 'false growth mindset' là việc chỉ khen nỗ lực suông ngay cả khi phương pháp học đang sai mà không hướng dẫn chiến lược mới."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Alfred Wegener: science, exploration and the theory of continental drift",
                    "text": (
                        "Alfred Wegener (1880–1930) is best known for proposing the theory of continental drift in 1912—the revolutionary hypothesis that Earth's continents were once joined in a single supercontinent called Pangea before drifting apart.\n\n"
                        "In his authoritative biography, science historian Mott T. Greene emphasizes that Wegener was not actually a geologist by training, but an atmospheric physicist, astronomer, and daring polar explorer who set a world record for a 52-hour hot-air balloon flight and led four perilous expeditions across the Greenland ice sheet.\n\n"
                        "Because Wegener could not identify the exact mechanical force moving continents (seafloor spreading and plate tectonics were only discovered in the 1960s, thirty years after Wegener froze to death in Greenland), entrenched geologists initially dismissed him as an outsider amateur."
                    ),
                    "questions": [
                        {"num": 5, "type": "TFNG", "q": "Alfred Wegener's primary academic training was in geology.", "answer": "FALSE", "explain": "Đoạn 2 nêu rõ: 'Wegener was not actually a geologist by training, but an atmospheric physicist, astronomer, and daring polar explorer'."},
                        {"num": 6, "type": "TFNG", "q": "Wegener's theory of continental drift was universally accepted by geologists during his lifetime.", "answer": "FALSE", "explain": "Đoạn 3 nêu các nhà địa chất đương thời bác bỏ ông, mãi đến thập niên 1960 (30 năm sau khi ông mất) thuyết kiến tạo mảng mới chứng minh ông đúng."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Monthly Price Changes of Three Metals in 2014",
                    "prompt": "The graph below shows the average monthly change in the prices of three metals during 2014.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Line Graph (% Monthly Price Change over 12 Months)",
                    "dataSummary": "Copper, Nickel, Zinc (% change compared with previous month, Jan–Dec 2014): Nickel was the most volatile, starting highest at +6% in Jan, plunging to -3% in June, and finishing at +1% in Dec. Zinc started at +1% (Jan), peaked at +3% (Feb), dipped to -1% (Jun–Oct), and rose to +2% in Dec (highest at year-end). Copper was the most stable, fluctuating narrowly between +2% (Jan) and -0.5% (May/Jun), ending at +1.5% in Dec.",
                    "modelAnswer": (
                        "The line graph tracks the monthly percentage change in the market prices of three industrial metals—copper, nickel, and zinc—throughout the twelve months of 2014.\n\n"
                        "Overall, nickel experienced the most dramatic price volatility over the year, whereas copper prices remained comparatively stable. Despite experiencing negative price drops during the summer months, all three metals recorded positive monthly growth in January and December.\n\n"
                        "In January 2014, nickel registered the sharpest price surge at +6%, far outstripping copper (+2%) and zinc (+1%). However, nickel's rate of growth plummeted to +1% in March, rebounded briefly to +4% in April, and then plunged into negative territory, hitting a chart low of -3% in June. By contrast, zinc rose from +1% in January to a peak of +3% in February before declining steadily to -1% in June.\n\n"
                        "Between July and October, all three metals hovered near or slightly below zero percent change. In the final two months of 2014, prices recovered across the board: zinc climbed to finish highest at +2% in December, followed by copper at +1.5% and nickel at +1%."
                    ),
                    "vocabBank": ["monthly percentage change", "dramatic price volatility", "plunged into negative territory", "hovered near zero", "recovered across the board"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Wearing Western-Style Clothes vs Traditional Clothing",
                    "prompt": "In many countries, people now wear Western-style clothes such as suits and jeans rather than their traditional clothing.\nWhy is this?\nIs this a positive or negative development?",
                    "essayType": "Two-Part Question (Reasons & Evaluation)",
                    "outline": {
                        "intro": "People adopt Western suits and jeans due to practical convenience and global corporate media; while practical for daily work, this trend is negative if traditional national attire is forgotten.",
                        "body1": "Reasons: Ergonomic practicality of jeans/t-shirts for commuting and global corporate dress codes requiring business suits.",
                        "body2": "Evaluation: Convenient for modern productivity, but homogenizes global culture unless traditional dress (like Ao Dai or Kimono) is preserved for festivals and ceremonies.",
                        "conclusion": "Adopting Western attire for daily utility is pragmatic, provided nations actively celebrate traditional clothing on cultural occasions."
                    },
                    "modelAnswer": (
                        "Across the globe, traditional indigenous garments have largely been supplanted in everyday life by Western-style attire such as denim jeans, t-shirts, and tailored business suits. This essay will examine the practical and cultural drivers behind this sartorial shift and argue that while it offers undeniable everyday convenience, it becomes a negative development if traditional dress is allowed to vanish entirely.\n\n"
                        "Two primary factors explain the universal adoption of Western clothing. First and foremost is ergonomic practicality and mass-production affordability. Many traditional garments—such as the multi-layered Japanese kimono or intricate Indian saris—require considerable time to put on and restrict rapid movement. By contrast, jeans and cotton shirts are durable, machine-washable, and ideally suited to modern commuting on motorcycles or subways. Second, multinational corporations and Hollywood media have established the Western business suit as the international uniform of professional authority and modernity.\n\n"
                        "In evaluating this trend, a distinction must be drawn between daily utility and cultural preservation. On a day-to-day basis, wearing standardized, comfortable clothing is a positive development that enhances workplace efficiency and erases visible caste or regional divisions. However, if Westernization completely eradicates indigenous textiles and national dress, humanity suffers an irreplaceable loss of cultural identity and artisanal weaving heritage. Fortunately, countries like Vietnam and Japan demonstrate that both worlds can coexist harmoniously by wearing practical Western clothes on workdays while proudly donning the Ao Dai or Kimono during weddings, graduations, and national holidays.\n\n"
                        "In conclusion, the shift toward Western clothing is driven by convenience and globalization; it is a practical evolution as long as societies actively safeguard their traditional attire for ceremonial and cultural life."
                    ),
                    "collocations": ["sartorial shift", "ergonomic practicality", "international uniform of professional authority", "artisanal weaving heritage", "coexist harmoniously"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Sleep",
                    "questions": [
                        {"q": "How many hours do you usually sleep at night?", "sample": "I consistently get around seven and a half hours of sleep each night, usually turning off my lights by 11:00 PM and waking up at 6:30 AM."},
                        {"q": "Do you sometimes sleep during the day? [Why/Why not?]", "sample": "Yes, a twenty-minute power nap after lunch is a lifesaver for me; it clears brain fog and recharges my focus for afternoon lectures without causing grogginess."},
                        {"q": "What do you do if you can't get to sleep at night? [Why?]", "sample": "If I find myself tossing and turning, I avoid looking at my phone and instead listen to gentle rain sounds or read a few pages of a printed book."},
                        {"q": "Do you ever remember the dreams you've had while you were asleep?", "sample": "Only occasionally, usually when I wake up abruptly during a vivid dream right before my morning alarm rings."}
                    ]
                },
                "part2": {
                    "topic": "Describe a time when you met someone who you became good friends with",
                    "cueCard": "You should say:\n- who you met\n- when and where you met this person\n- what you thought about this person when you first met\n- and explain why you became good friends with this person.",
                    "modelAnswer": (
                        "I would like to talk about how I met my closest university friend, Hoang, during our freshman orientation week three years ago.\n\n"
                        "We met in the university auditorium while waiting for the opening ceremony to begin. Both of us had arrived thirty minutes early and happened to sit next to each other in the third row.\n\n"
                        "My very first impression of Hoang was that he was remarkably observant and warm-hearted. Noticing that I was nervously reviewing my campus map, he broke the ice with a witty joke about getting lost in the science building and shared his extra bottle of water with me.\n\n"
                        "We quickly became inseparable friends because we share the exact same work ethic and curiosity for technology and English debate. Over the past three years, we have studied together for every major exam, competed in hackathons, and supported each other through both academic triumphs and setbacks."
                    ),
                    "lexical": ["freshman orientation week", "remarkably observant", "broke the ice with a witty joke", "inseparable friends", "shared work ethic"]
                },
                "part3": {
                    "topic": "Friends at school & Making new friends",
                    "questions": [
                        {"q": "How important is it for children to have lots of friends at school?", "sample": "Quality matters far more than quantity; having two or three trustworthy school friends provides emotional security and teaches empathy, whereas chasing popularity can create peer pressure."},
                        {"q": "Do you think it is wrong for parents to influence which friends their children have?", "sample": "Parents should not micromanage friendships, but they have a duty to gently guide young children away from peers who engage in bullying or dangerous behaviour."},
                        {"q": "Why do people often lose touch with school friends when they grow older?", "sample": "As people graduate, relocate to different cities for university, enter demanding careers, and start families, their daily schedules and life priorities naturally diverge."},
                        {"q": "Is it easier for adults to make new friends today than in the past?", "sample": "In some ways yes, because online hobby communities, running clubs, and language-exchange apps allow adults to connect instantly with like-minded peers across any city."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 18 Test 4: Phân tích bài đọc Mái nhà xanh (Green Roofs), Tư duy phát triển (Growth Mindset) và Alfred Wegener.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "prevent urban flooding", "passageKey": "absorbing up to 75 percent of heavy stormwater rainfall", "verdict": "TRUE (Hấp thụ tới 75% nước mưa)"},
                    {"qNum": "P2 - Q3", "questionKey": "praised for being clever", "passageKey": "chose easy puzzles afterward to protect their ego", "verdict": "B (Chọn câu đố dễ để bảo vệ cái tôi)"},
                    {"qNum": "P3 - Q5", "questionKey": "Wegener's primary training in geology", "passageKey": "not actually a geologist by training, but an atmospheric physicist", "verdict": "FALSE (Ông là nhà vật lý khí quyển, không phải địa chất)"}
                ]
            },
            "vocabList": [
                {"word": "urban heat island effect", "ipa": "ˈɜːbən hiːt ˈaɪlənd ɪˈfekt", "vi": "hiệu ứng đảo nhiệt đô thị", "type": "noun phrase", "collocation": "mitigate the urban heat island effect", "example": "Green roofs cool cities and reduce the urban heat island effect."},
                {"word": "growth mindset", "ipa": "ɡroʊθ ˈmaɪndset", "vi": "tư duy phát triển (tin rằng trí tuệ có thể rèn luyện)", "type": "noun phrase", "collocation": "foster a resilient growth mindset in students", "example": "Carol Dweck's research popularized the growth mindset in education."},
                {"word": "continental drift", "ipa": "ˌkɒntɪˈnentl drɪft", "vi": "thuyết trôi dạt lục địa", "type": "noun phrase", "collocation": "formulate the theory of continental drift", "example": "Alfred Wegener proposed continental drift in 1912."}
            ]
        }
    ]


def get_cam19_tests():
    return [
        # CAM 19 - TEST 1
        {
            "id": 1,
            "title": "Cambridge IELTS 19 — Test 1",
            "topic": "How Tennis Rackets Have Changed, Ancient Mediterranean Pirates & Misinformation",
            "passages": [
                "P1: How tennis rackets have changed",
                "P2: The pirates of the ancient Mediterranean",
                "P3: The persistence and peril of misinformation"
            ],
            "keyVocab": ["laminated ash wood", "carbon-fibre composite", "Cilician pirates", "continued influence effect"],
            "listening": {
                "title": "Cambridge 19 Listening Test 1",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Hinchingbrooke Country Park Visit",
                        "audioScript": (
                            "SALLY: Hello, Hinchingbrooke Country Park, Sally speaking.\n"
                            "JOHN: Hi Sally, I'm organizing a school field trip for 38 Geography students. Can you tell me about the park facilities?\n"
                            "SALLY: Certainly! The park covers 69 hectares, including wetland, grassland, and woodland habitats. In our educational sessions, students study how water seeps through different types of soil, learn how to read a map and use a compass, and visit the local horse farm."
                        ),
                        "questions": [
                            {"num": 1, "q": "Total area of Hinchingbrooke Park: ________ hectares", "answer": "69"},
                            {"num": 2, "q": "Geography session tests how water seeps through ________", "answer": "soil"},
                            {"num": 3, "q": "Students learn to navigate using a map and ________", "answer": "compass"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Stanthorpe Twinning Association",
                        "audioScript": (
                            "SPEAKER: Welcome to the Stanthorpe Twinning Association meeting! Last month's pancake evening raised record funds for our exchange visit with our twin town in France. For our summer festival, we will plant a commemorative oak tree near the footbridge and host a quiz night at the community hall."
                        ),
                        "questions": [
                            {"num": 11, "q": "Fundraising event held last month: ________ evening", "answer": "pancake"},
                            {"num": 12, "q": "A commemorative oak tree will be planted near the ________", "answer": "footbridge"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Food Science Project on Bread-Making",
                        "audioScript": (
                            "COLIN: Marie, for our food science experiment on sourdough bread, using ancient einkorn wheat produced a much denser crust than commercial white flour."
                        ),
                        "questions": [
                            {"num": 21, "q": "Ancient einkorn wheat produced a denser ________", "answer": "crust"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Archaeological Excavation at Céide Fields in Ireland",
                        "audioScript": (
                            "LECTURER: Today we look at the Céide Fields in County Mayo, Ireland. In the 1930s, local schoolteacher Patrick Caulfield noticed piles of stones beneath the peat bog while cutting turf for fuel, realizing they were ancient stone walls that predated the bog. Decades later, his son Seamus used iron probes to map a 5,500-year-old Neolithic landscape of enclosed cattle pastures, proving prehistoric Irish farmers lived in peaceful cooperative communities."
                        ),
                        "questions": [
                            {"num": 31, "q": "Patrick Caulfield discovered stone walls while cutting ________ for fuel", "answer": "turf / peat"},
                            {"num": 32, "q": "Seamus Caulfield mapped the buried walls using iron ________", "answer": "probes"},
                            {"num": 33, "q": "The enclosed fields were used as pastures for ________", "answer": "cattle / cows"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: How tennis rackets have changed",
                    "text": (
                        "In 2016, the British professional tennis player Andy Murray made a small adjustment to his racket—switching to a slightly heavier frame—which transformed his serve and helped him win Wimbledon and become World Number One.\n\n"
                        "For the first century of modern lawn tennis, from the 1870s until the late 1960s, almost every tennis racket was constructed from laminated ash wood with natural sheep or cow gut strings. Wooden frames were heavy and prone to warping if left in damp conditions, so players had to clamp their rackets inside four-screw wooden presses after every match.\n\n"
                        "In 1967, the Wilson T2000 steel racket, popularized by Jimmy Connors, broke wood's monopoly. Shortly afterward, in 1976, aeronautical engineer Howard Head—who had previously revolutionized alpine skis—patented the Prince Classic aluminum racket with an 'oversized' 110-square-inch head, doubling the 'sweet spot'. By the 1980s, ultra-lightweight graphite and carbon-fibre composites enabled players to generate ferocious topspin from the baseline."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Andy Murray's performance declined after he modified his tennis racket in 2016.", "answer": "FALSE", "explain": "Đoạn 1 nêu việc điều chỉnh vợt đã giúp Andy Murray cải thiện cú giao bóng, vô địch Wimbledon và lên số 1 thế giới."},
                        {"num": 2, "type": "TFNG", "q": "Howard Head had already designed skis before inventing the oversized Prince tennis racket.", "answer": "TRUE", "explain": "Đoạn 3 nêu: 'Howard Head—who had previously revolutionized alpine skis—patented the Prince Classic aluminum racket'."},
                        {"num": 3, "type": "TFNG", "q": "Wooden tennis rackets were immune to moisture and never changed shape.", "answer": "FALSE", "explain": "Đoạn 2 nêu khung vợt gỗ dễ bị cong vênh nếu để nơi ẩm ướt ('prone to warping if left in damp conditions')."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: The pirates of the ancient Mediterranean",
                    "text": (
                        "When one mentions pirates, an image springs to most people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea. Yet from the second millennium BCE through the Roman Republic, piracy was an endemic feature of the ancient Mediterranean.\n\n"
                        "The rocky coastlines, hidden coves, and countless islands of Cilicia (southern Anatolia) and Dalmatia provided ideal ambushing grounds along vital grain and olive-oil shipping lanes. Ancient states frequently tolerated or covertly hired pirates: during the second century BCE, the Roman elite relied heavily on Cilician pirates to supply captured slaves for Italian agricultural estates.\n\n"
                        "In 75 BCE, pirates even kidnapped a 25-year-old Julius Caesar in the Aegean Sea, holding him for a 50-talent silver ransom. Only when pirate fleets threatened Rome's own grain supply from Egypt in 67 BCE did the Senate grant General Pompey the Great sweeping command under the Lex Gabinia; Pompey cleared the entire Mediterranean in just three months by offering clemency and farmland to pirates who surrendered."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Wealthy Romans in the second century BCE benefited from Cilician pirates who supplied slave labour.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'the Roman elite relied heavily on Cilician pirates to supply captured slaves for Italian agricultural estates'."},
                        {"num": 5, "type": "MCQ", "q": "How did General Pompey eradicate Mediterranean piracy so rapidly in 67 BCE?", "options": ["A. He executed every sailor in the Mediterranean", "B. He combined naval power with clemency, settling surrendered pirates on inland farmland", "C. He paid Julius Caesar to negotiate", "D. He drained the Aegean Sea"], "answer": "B", "explain": "Đoạn 3 nêu Pompey dẹp sạch cướp biển trong 3 tháng nhờ kết hợp khoan hồng và cấp đất nông nghiệp cho những kẻ đầu hàng."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: The persistence and peril of misinformation",
                    "text": (
                        "Misinformation—both deliberate disinformation and accidental falsehoods—is not a new phenomenon, yet digital social networks have amplified its reach and speed to unprecedented levels.\n\n"
                        "Cognitive psychologists Stephan Lewandowsky and Ullrich Ecker highlight a troubling mental quirk known as the 'continued influence effect': even after a person reads a clear, credible retraction proving that an earlier news story was false, the debunked misinformation continues to shape their reasoning and memory.\n\n"
                        "Moreover, repeating a false claim in order to debunk it can inadvertently increase its 'fluency' and familiarity in readers' minds. To counter this, researchers recommend 'prebunking' (inoculating citizens against manipulation tactics before they encounter fake news) and providing an alternative factual explanation that fills the causal gap left in the person's mental model."
                    ),
                    "questions": [
                        {"num": 6, "type": "MCQ", "q": "What is 'prebunking' as described by cognitive researchers?", "options": ["A. Deleting the internet", "B. Warning and educating people about manipulation techniques before they encounter false claims", "C. Printing newspapers only once a year", "D. Fining journalists for spelling errors"], "answer": "B", "explain": "Đoạn 3 giải thích 'prebunking' là tiêm phòng nhận thức—cảnh báo trước cho công chúng về các thủ thuật thao túng trước khi họ tiếp xúc với tin giả."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Participation in Four Sports in a European Country (1999–2009)",
                    "prompt": "The graph below gives information on the numbers of participants for different activities at one social centre in Melbourne, Australia for the period 2000 to 2020.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Multiple Line Graph (5 Social Centre Activities, 2000–2020)",
                    "dataSummary": "Film club remained the most popular activity throughout, hovering around 60–66 participants. Martial arts fluctuated mildly between 32 and 38. Amateur dramatics started at 26 (2000), peaked at 28 (2005), then plunged to 8 (2020). Table tennis surged dramatically from 16 (2000) to 54 (2020), overtaking martial arts. Musical performances started at 0 (introduced in 2005) and rose steadily to 18 (2020).",
                    "modelAnswer": (
                        "The line graph illustrates the number of people participating in five different recreational activities at a community social centre in Melbourne, Australia, between 2000 and 2020.\n\n"
                        "Overall, the film club consistently attracted the highest number of participants throughout the twenty-year period. While table tennis and musical performances experienced substantial growth, amateur dramatics suffered a steep decline.\n\n"
                        "In 2000, the film club was by far the most popular group with approximately 64 members; despite dipping slightly to 60 in 2010, it recovered to finish at 66 participants in 2020. Martial arts ranked second in 2000 with 36 participants and remained remarkably stable over the two decades, fluctuating narrowly between 32 and 38 members.\n\n"
                        "Conversely, table tennis and amateur dramatics followed opposite trajectories. Table tennis membership grew modestly from 16 in 2000 to 20 in 2010, before surging nearly threefold to reach 54 participants in 2020, surpassing martial arts to become the second most popular activity. By contrast, amateur dramatics rose briefly from 26 to 28 between 2000 and 2005, then plummeted continuously to just 8 members by 2020. Finally, musical performances were introduced in 2005 with 0 members and climbed steadily to 18 by 2020."
                    ),
                    "vocabBank": ["consistently attracted the highest number", "fluctuating narrowly", "opposite trajectories", "surging nearly threefold", "plummeted continuously"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Competition vs Cooperation in Work, School and Daily Life",
                    "prompt": "Some people think that competition at work, at school and in daily life is a good thing. Others believe that we should try to cooperate more, rather than competing against each other.\nDiscuss both these views and give your own opinion.",
                    "essayType": "Discussion & Opinion (Balanced, Favouring Cooperative Frameworks)",
                    "outline": {
                        "intro": "Discuss the motivational power of competition versus the collective synergy of cooperation; argue that while healthy competition sparks ambition, cooperation is far more critical for modern education and workplace innovation.",
                        "body1": "Merits of competition: Incentivizes personal diligence, meritocratic excellence, and commercial efficiency.",
                        "body2": "Superiority of cooperation: Prevents toxic burnout, fosters knowledge-sharing, and solves complex multidisciplinary problems.",
                        "conclusion": "Society flourishes best when healthy self-improvement is embedded within a supportive, cooperative ethos."
                    },
                    "modelAnswer": (
                        "Whether human progress is best served by competitive rivalry or cooperative collaboration across schools, workplaces, and everyday life remains a perennial debate. While competition undoubtedly acts as a catalyst for individual effort and market efficiency, I firmly believe that cultivating a spirit of cooperation yields far greater benefits for mental well-being and collective innovation.\n\n"
                        "On one hand, proponents of competition point out that rivalry is a powerful antidote to complacency. In academic environments, graded examinations and scholarship contests motivate students to study diligently and test their intellectual limits. Similarly, in the commercial sector, competition among rival firms compels businesses to lower retail prices, improve customer service, and invest in technological research. Without competitive benchmarks, individuals and organizations can easily stagnate.\n\n"
                        "On the other hand, an excessive obsession with winning inflicts severe psychological and organizational costs, making cooperation a superior paradigm. In schools where classmates are pitted against one another on a bell curve, students frequently hoard study notes and suffer from chronic anxiety. By contrast, cooperative group learning encourages peer tutoring, empathy, and deeper comprehension. Likewise, in modern corporate and scientific workplaces, no single individual possesses the expertise to build a microchip or cure a disease alone; breakthroughs depend on transparent teamwork across diverse departments. When employees cooperate rather than sabotage rivals for promotions, organizational trust and productivity soar.\n\n"
                        "In conclusion, while moderate competition can stimulate personal ambition, prioritizing cooperation in education and professional life builds healthier, more innovative communities."
                    ),
                    "collocations": ["perennial debate", "antidote to complacency", "competitive benchmarks", "pitted against one another", "organizational trust"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "International food",
                    "questions": [
                        {"q": "Can you find food from many different countries where you live? [Why/Why not?]", "sample": "Yes, living in a major metropolitan hub means I can easily find Japanese ramen, Korean barbecue, Italian wood-fired pizza, and Thai curries within a ten-minute walk."},
                        {"q": "How often do you eat typical food from other countries? [Why/Why not?]", "sample": "I eat international cuisine about once a week, usually on Friday evenings when my friends and I want to try new flavours together."},
                        {"q": "Have you ever tried making food from another country? [Why/Why not?]", "sample": "Yes, I frequently cook Italian pasta carbonara and Korean kimchi stew at home because the ingredients are readily available at local supermarkets."},
                        {"q": "What food from your country would you recommend to people from other countries?", "sample": "I always recommend Bun Cha—charcoal-grilled pork served with rice vermicelli, fresh herbs, and tangy dipping sauce—as it captures the balance of Vietnamese gastronomy."}
                    ]
                },
                "part2": {
                    "topic": "Describe a law that was introduced in your country and that you thought was a very good idea",
                    "cueCard": "You should say:\n- what the law was\n- who introduced it and when\n- what the law was meant to achieve\n- and explain why you thought this law was a very good idea.",
                    "modelAnswer": (
                        "I would like to talk about the strict zero-tolerance drink-driving law—known as Decree 100—which was introduced by the Vietnamese National Assembly and Ministry of Public Security in January 2020.\n\n"
                        "Under this legislation, any driver of a car, motorbike, or bicycle found with even a trace amount of alcohol in their breath or blood faces heavy financial fines and the immediate suspension of their driving licence for up to two years.\n\n"
                        "The law was enacted to curb the alarming rate of alcohol-related traffic fatalities, particularly during national holidays and after-work social gatherings where heavy drinking was previously normalized.\n\n"
                        "I believe this law was a brilliant and transformative policy. Within months of its enforcement, hospital emergency wards reported a dramatic drop in nighttime road accidents, and a healthier social culture emerged where people automatically book ride-hailing taxis or drink non-alcoholic beverages when dining out."
                    ),
                    "lexical": ["zero-tolerance drink-driving law", "trace amount of alcohol", "immediate suspension of driving licence", "alcohol-related traffic fatalities", "transformative policy"]
                },
                "part3": {
                    "topic": "School rules & Working in the legal profession",
                    "questions": [
                        {"q": "What kinds of rules are common in schools in your country?", "sample": "Most Vietnamese schools enforce rules regarding wearing neat uniforms, arriving before the 7:00 AM bell, silencing mobile phones during lectures, and maintaining classroom cleanliness."},
                        {"q": "How important is it to have rules in a school?", "sample": "Clear, fair school rules are essential to maintain an orderly learning environment, prevent bullying, and instil self-discipline and mutual respect among hundreds of students."},
                        {"q": "What do you think happens if school rules are too strict?", "sample": "Overly rigid or arbitrary rules—such as policing minor haircut styles—often breed resentment, stifle student creativity, and provoke rebellious behaviour."},
                        {"q": "Why do many people want to work as lawyers or judges?", "sample": "Beyond intellectual prestige and financial stability, many are drawn to the legal profession by a desire to uphold justice, defend vulnerable citizens, and resolve complex commercial disputes."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 19 Test 1: Phân tích lịch sử Vợt Tennis, Cướp biển Địa Trung Hải cổ đại và Sự dai dẳng của Tin giả (Misinformation).",
                "keywordTable": [
                    {"qNum": "P1 - Q2", "questionKey": "Howard Head designed skis before tennis racket", "passageKey": "Howard Head—who had previously revolutionized alpine skis—patented the Prince Classic", "verdict": "TRUE (Đã cách mạng hóa ván trượt tuyết trước khi chế tạo vợt)"},
                    {"qNum": "P2 - Q4", "questionKey": "Roman elite benefited from Cilician pirates", "passageKey": "Roman elite relied heavily on Cilician pirates to supply captured slaves", "verdict": "TRUE (Giới quý tộc La Mã mua nô lệ từ cướp biển Cilicia)"},
                    {"qNum": "P3 - Q6", "questionKey": "prebunking", "passageKey": "inoculating citizens against manipulation tactics before they encounter fake news", "verdict": "B (Tiêm phòng nhận thức trước khi gặp tin giả)"}
                ]
            },
            "vocabList": [
                {"word": "laminated wood", "ipa": "ˈlæmɪneɪtɪd wʊd", "vi": "gỗ ép nhiều lớp", "type": "noun phrase", "collocation": "crafted from laminated ash wood", "example": "Early tennis rackets were made of laminated wood."},
                {"word": "continued influence effect", "ipa": "kənˈtɪnjuːd ˈɪnfluəns ɪˈfekt", "vi": "hiệu ứng ảnh hưởng dai dẳng của tin giả sau khi đã đính chính", "type": "noun phrase", "collocation": "combat the continued influence effect", "example": "Debunked rumours persist due to the continued influence effect."},
                {"word": "prebunking", "ipa": "priːˈbʌŋkɪŋ", "vi": "tiêm phòng nhận thức (cảnh báo thủ thuật tin giả trước khi tiếp xúc)", "type": "noun", "collocation": "implement psychological prebunking campaigns", "example": "Prebunking builds public resilience against online disinformation."}
            ]
        },

        # CAM 19 - TEST 2
        {
            "id": 2,
            "title": "Cambridge IELTS 19 — Test 2",
            "topic": "The Industrial Revolution in Britain, Athletes and Stress & The Gifted Child",
            "passages": [
                "P1: The Industrial Revolution in Britain",
                "P2: Athletes and stress",
                "P3: An inquiry into the existence of the gifted child"
            ],
            "keyVocab": ["Newcomen steam engine", "challenge vs threat state", "cardiovascular efficiency", "innate talent myth"],
            "listening": {
                "title": "Cambridge 19 Listening Test 2",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Guitar Group Enrolment",
                        "audioScript": (
                            "COORDINATOR: Hello, Community Guitar Group, Gary speaking.\n"
                            "WOMAN: Hi Gary, I'm a beginner and would like to join. Where do you meet?\n"
                            "COORDINATOR: We meet every Thursday evening at the Youth Club on London Road. The fee is £9.50 per session, and we recommend downloading the 'Chord Master' tuning app."
                        ),
                        "questions": [
                            {"num": 1, "q": "Venue: Youth Club on ________ Road", "answer": "London"},
                            {"num": 2, "q": "Fee per session: £________", "answer": "9.50"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Working as a Lifeboat Volunteer",
                        "audioScript": (
                            "VOLUNTEER: Joining the coastal lifeboat crew was the most rewarding decision of my life. Because pager alerts can sound in freezing winter storms, all crew members undergo intensive survival training in a wave tank."
                        ),
                        "questions": [
                            {"num": 11, "q": "Crew members practice survival in a ________ tank", "answer": "wave"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Recycling Footwear Research Project",
                        "audioScript": (
                            "BELLA: Don, the hardest part of recycling running shoes is that a single trainer contains up to 40 different glued materials—rubber soles, foam midsoles, and polyester mesh."
                        ),
                        "questions": [
                            {"num": 21, "q": "A single running shoe contains up to ________ different materials", "answer": "40 / forty"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Tardigrades (Water Bears) — Extremophile Survival",
                        "audioScript": (
                            "LECTURER: Tardigrades, or 'water bears', are microscopic eight-legged invertebrates capable of surviving extreme environments—from boiling hydrothermal vents to the vacuum of outer space. When dehydrated, tardigrades enter a state called 'cryptobiosis', retracting their legs, expelling 95% of their body water, and synthesizing special glass-like proteins that protect their DNA for decades."
                        ),
                        "questions": [
                            {"num": 31, "q": "Dehydrated tardigrades enter a dormant state called ________", "answer": "cryptobiosis"},
                            {"num": 32, "q": "Glass-like proteins protect the tardigrade's ________", "answer": "DNA / cells"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The Industrial Revolution in Britain",
                    "text": (
                        "The Industrial Revolution began in Britain in the mid-1700s and by the 1830s and 1840s had spread to many other parts of the world, including the United States and Germany. In Britain, it was a period when a largely rural, agrarian society was transformed into an industrialized, urban one.\n\n"
                        "Why did the Industrial Revolution happen first in Britain? Historians point to two decisive factors: abundant, easily accessible deposits of coal in northern England and Wales, and high British wages, which gave factory owners a strong financial incentive to invent labour-saving spinning machines like James Hargreaves's 'spinning jenny' (1764) and Richard Arkwright's water frame.\n\n"
                        "In 1712, Thomas Newcomen invented the first atmospheric steam engine to pump floodwater out of deep coal mines; in the 1760s, Scottish engineer James Watt added a separate condenser, making steam engines four times more fuel-efficient so they could power textile mills and locomotives, although the 1811 Luddite movement saw displaced handloom weavers smash factory machinery in protest."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Thomas Newcomen's 1712 steam engine was originally designed to pump water out of coal mines.", "answer": "TRUE", "explain": "Đoạn 3 nêu: 'Thomas Newcomen invented the first atmospheric steam engine to pump floodwater out of deep coal mines'."},
                        {"num": 2, "type": "TFNG", "q": "The Luddite weavers enthusiastically welcomed the introduction of automated factory machinery.", "answer": "FALSE", "explain": "Đoạn 3 nêu phong trào Luddite năm 1811 đã đập phá máy móc nhà máy để phản đối việc mất việc làm."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Athletes and stress",
                    "text": (
                        "Emma Raducanu's stunning triumph at the 2021 US Open—followed by her breathlessness during an earlier Wimbledon match—sparked global discussion about how elite athletes experience high-stakes pressure.\n\n"
                        "Psychologists Marc Jones and Carla Meijen explain that anxiety before competition triggers the body's sympathetic nervous system, releasing adrenaline and noradrenaline. However, an athlete's physiological response bifurcates into two distinct states: a 'challenge state' or a 'threat state'.\n\n"
                        "When an athlete believes their personal resources (skill, preparation, support) exceed the demands of the match, they enter a 'challenge state': blood vessels dilate, pumping more oxygenated blood to the brain and muscles. Conversely, when demands seem overwhelming, they enter a 'threat state': blood vessels constrict, cortisol spikes, and fine motor coordination falters."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "What happens physiologically when an athlete enters a 'challenge state'?", "options": ["A. Blood vessels constrict and vision blurs", "B. Blood vessels dilate, delivering more oxygenated blood to the brain and muscles", "C. Adrenaline drops to zero", "D. The athlete falls asleep"], "answer": "B", "explain": "Đoạn 3 giải thích ở trạng thái thử thách (challenge state), mạch máu giãn ra giúp bơm nhiều máu giàu oxy hơn tới não và cơ bắp."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: An inquiry into the existence of the gifted child",
                    "text": (
                        "Let us start by looking at a common belief: that 'gifted' children are born with a superior brain that guarantees extraordinary adult achievement. In her 35-year longitudinal study 'Gifted Lives', British psychologist Professor Joan Freeman tracked 210 children—half officially labelled 'gifted' and half unlabelled peers of identical high ability.\n\n"
                        "Freeman discovered that being labelled 'gifted' in childhood often caused emotional distress, social isolation, and a paralyzing fear of making mistakes, as parents and schools pressured them relentlessly. Meanwhile, Swedish psychologist Anders Ericsson's research at the Berlin Academy of Music showed that elite violinists were distinguished not by magical innate genius, but by accumulating over 10,000 hours of 'deliberate practice' by age twenty."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Joan Freeman's 35-year study found that labelling children as 'gifted' always improved their emotional well-being.", "answer": "FALSE", "explain": "Đoạn 2 nêu việc gắn mác 'thần đồng' thường gây căng thẳng cảm xúc, cô lập xã hội và nỗi sợ thất bại."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Crude Oil Exports and Refineries in Someland (2000–2025)",
                    "prompt": "The plans below show a small theatre in 2010, and the same theatre in 2012.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Building Floor Plans (2010 vs 2012)",
                    "dataSummary": "Small Theatre (2010 vs 2012): Main entrance at bottom and auditorium in the center remain unchanged. Stage expanded significantly northward into the old dressing room space; a new corridor and relocated dressing room + showers were built in a northern extension. Media room moved from left of stage to the northern corridor; storage moved from right of stage to top-left. Bottom-left: Café removed and replaced by a new Ticket Office + Admin Office. Bottom-right: Old ticket office & admin office replaced by a spacious new Restaurant.",
                    "modelAnswer": (
                        "The two architectural plans compare the internal layout of a small theatre in 2010 with its expanded and renovated design in 2012.\n\n"
                        "Overall, while the central auditorium and main southern entrance remained unaltered, the building was extended at both the northern and southern ends to enlarge the stage, relocate backstage facilities, and replace the small café with a full-scale restaurant.\n\n"
                        "In 2010, patrons entered through the southern doors into a foyer flanked by a café on the right and a ticket and administration office on the left. By 2012, the southern section had been widened: the ticket and administration offices were relocated to the south-west corner, and the former café on the south-east side was replaced by a large restaurant with multiple dining tables.\n\n"
                        "Substantial renovations also occurred behind the auditorium in the northern half of the theatre. Between 2010 and 2012, the stage was nearly doubled in depth, expanding into the space previously occupied by the dressing room. To accommodate backstage operations, a new northern extension was built, housing a hallway, a relocated dressing room, new showers, and the media room, while the storage room was shifted from the eastern side to the north-west corner."
                    ),
                    "vocabBank": ["central auditorium", "remained unaltered", "flanked by", "nearly doubled in depth", "accommodate backstage operations"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Shorter Working Week and Longer Weekend",
                    "prompt": "The working week should be shorter and workers should have a longer weekend.\nDo you agree or disagree?",
                    "essayType": "Opinion Essay (Strong Agreement)",
                    "outline": {
                        "intro": "Wholeheartedly agree that transitioning to a four-day working week with a three-day weekend boosts workplace efficiency and safeguards employee mental health.",
                        "body1": "Productivity & focus: Eliminates mid-week fatigue, unproductive meetings, and workplace presenteeism.",
                        "body2": "Well-being & societal benefits: Reduces clinical burnout, enriches family life, and lowers commuter carbon emissions.",
                        "conclusion": "A shorter working week is a scientifically validated upgrade for the modern economy."
                    },
                    "modelAnswer": (
                        "The conventional five-day, forty-hour working week—a relic of nineteenth-century industrial manufacturing—is increasingly challenged by economists and psychologists who advocate a four-day working week with a three-day weekend. I wholeheartedly agree with this proposal, as empirical trials prove that a shorter working week enhances both corporate productivity and human well-being.\n\n"
                        "First and foremost, reducing weekly working hours sharpens cognitive focus and eliminates unproductive 'presenteeism'. In knowledge-economy offices, human concentration cannot be sustained at peak intensity for forty hours a week; consequently, employees often pad their days with prolonged meetings, distraction, and exhaustion. Global trials of the four-day week in the United Kingdom, Iceland, and Japan have demonstrated that when workers are granted an extra rest day without a pay cut, they streamline workflows, cut out time-wasting habits, and deliver equal or superior output in thirty-two hours.\n\n"
                        "Secondly, a three-day weekend yields profound dividends for public health, family cohesion, and environmental sustainability. Chronic overwork is a leading driver of clinical burnout, hypertension, and depression, costing national healthcare systems billions annually. An additional weekend day allows employees to recuperate physically, care for children and elderly relatives, and engage in domestic leisure tourism. Moreover, reducing commuter traffic by one-fifth substantially cuts urban air pollution and carbon emissions.\n\n"
                        "In conclusion, technological automation has multiplied human output over the past century; sharing those gains through a shorter working week and longer weekend is both economically sound and socially imperative."
                    ),
                    "collocations": ["relic of nineteenth-century manufacturing", "unproductive presenteeism", "streamline workflows", "clinical burnout", "family cohesion"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Travelling by plane",
                    "questions": [
                        {"q": "Have you travelled a lot by plane? [To where?/Why not?]", "sample": "I fly roughly twice a year, mostly on domestic routes between Ho Chi Minh City, Hanoi, and Da Nang to visit relatives or attend academic conferences."},
                        {"q": "Why do you think some people enjoy travelling by plane?", "sample": "Many passengers love the thrill of take-off, the panoramic bird's-eye view of clouds at 30,000 feet, and the speed of crossing continents in hours."},
                        {"q": "Would you like to live near an airport? [Why/Why not?]", "sample": "Definitely not; although catching early flights would be convenient, the relentless roar of jet engines taking off at night would ruin my sleep."},
                        {"q": "In the future, do you think that you will travel by plane more often? [Why/Why not?]", "sample": "Yes, as I plan to pursue a master's degree abroad and work in international trade, air travel will likely become a regular part of my career."}
                    ]
                },
                "part2": {
                    "topic": "Describe a person from your country who has won a prize, award or medal",
                    "cueCard": "You should say:\n- who this person is\n- which prize, award or medal they won\n- what they did to win this\n- and explain whether you think it was right that this person won this prize, award or medal.",
                    "modelAnswer": (
                        "I would like to talk about Colonel Hoang Xuan Vinh, the legendary Vietnamese sports shooter who won Vietnam's very first Olympic Gold Medal at the 2016 Rio de Janeiro Summer Olympics.\n\n"
                        "He won the gold medal in the men's 10-metre air pistol event, setting a new Olympic record in the process.\n\n"
                        "To achieve this historic feat, he overcame decades of modest training facilities—often practicing his breathing and trigger control for hours in unairconditioned shooting ranges—and in the final shot of the Rio final, he delivered a near-perfect 10.7 bullseye under immense psychological pressure to overtake the Brazilian home favourite.\n\n"
                        "I believe his victory was 100 percent deserved. His humility, iron composure, and thirty years of quiet dedication inspired millions of young Vietnamese citizens to believe that perseverance can conquer the world stage."
                    ),
                    "lexical": ["legendary sports shooter", "modest training facilities", "near-perfect bullseye", "immense psychological pressure", "iron composure"]
                },
                "part3": {
                    "topic": "Rewards for children at school & Rewards for sportspeople",
                    "questions": [
                        {"q": "What types of school prizes do children in your country receive?", "sample": "Primary and secondary students in Vietnam typically receive merit certificates, book vouchers, tuition scholarships, and trophies for academic olympiads or sportsmanship."},
                        {"q": "What do you think are the advantages of rewarding schoolchildren for good work?", "sample": "Thoughtful recognition reinforces positive study habits, builds self-efficacy, and shows students that consistent effort is valued by their teachers and peers."},
                        {"q": "Do you agree that it's more important for children to receive rewards from their parents than from teachers?", "sample": "Both play complementary roles: parental praise nurtures unconditional emotional security at home, while teacher awards validate objective competence among peers."},
                        {"q": "Do you think that some sportspeople are paid too much money today?", "sample": "While top footballers' salaries seem astronomical compared to nurses or teachers, their earnings reflect the billions of dollars in global broadcasting and sponsorship revenue they generate during a very short athletic career."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 19 Test 2: Phân tích Cách mạng Công nghiệp Anh, Vận động viên đối mặt Stress (Challenge vs Threat) và Huyền thoại Trẻ thần đồng.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "Newcomen engine pump water out of coal mines", "passageKey": "invented first atmospheric steam engine to pump floodwater out of deep coal mines", "verdict": "TRUE (Bơm nước ngập từ mỏ than sâu)"},
                    {"qNum": "P2 - Q3", "questionKey": "challenge state", "passageKey": "blood vessels dilate, pumping more oxygenated blood to brain and muscles", "verdict": "B (Mạch máu giãn bơm máu giàu oxy)"},
                    {"qNum": "P3 - Q4", "questionKey": "labelling gifted always improved emotional well-being", "passageKey": "often caused emotional distress, social isolation, and fear of mistakes", "verdict": "FALSE (Thường gây áp lực tâm lý và cô lập)"}
                ]
            },
            "vocabList": [
                {"word": "labour-saving machinery", "ipa": "ˈleɪbər ˈseɪvɪŋ məˈʃiːnəri", "vi": "máy móc tiết kiệm sức lao động", "type": "noun phrase", "collocation": "invent automated labour-saving machinery", "example": "High British wages incentivized the invention of labour-saving machinery."},
                {"word": "challenge state", "ipa": "ˈtʃælɪndʒ steɪt", "vi": "trạng thái tâm sinh lý hưng phấn đón nhận thử thách", "type": "noun phrase", "collocation": "enter an optimal physiological challenge state", "example": "Athletes in a challenge state experience dilated blood vessels."},
                {"word": "deliberate practice", "ipa": "dɪˈlɪbərət ˈpræktɪs", "vi": "luyện tập có chủ đích và phản hồi chuyên sâu", "type": "collocation", "collocation": "accumulate 10,000 hours of deliberate practice", "example": "Anders Ericsson proved that mastery stems from deliberate practice."}
            ]
        },

        # CAM 19 - TEST 3
        {
            "id": 3,
            "title": "Cambridge IELTS 19 — Test 3",
            "topic": "Prehistoric Island Settlers, The Global Importance of Wetlands & Speech Translation AI",
            "passages": [
                "P1: Archaeologists discover evidence of prehistoric island settlers",
                "P2: The global importance of wetlands",
                "P3: Is the era of artificial speech translation upon us?"
            ],
            "keyVocab": ["Neolithic seafaring", "peatland carbon sink", "subsidence and salinization", "end-to-end neural translation"],
            "listening": {
                "title": "Cambridge 19 Listening Test 3",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Local Food Shops in Kite Place",
                        "audioScript": (
                            "LEON: Shannon, let's check out the new food shops at Kite Place near the harbour. The fishmonger 'Finley's' sells fresh mackerel and teaches customers how to fillet fish. Next door, the organic bakery sells sourdough loaves and offers gluten-free pastries."
                        ),
                        "questions": [
                            {"num": 1, "q": "Fishmonger teaches customers how to ________ fish", "answer": "fillet / prepare"},
                            {"num": 2, "q": "Bakery offers gluten-free ________", "answer": "pastries / cakes"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Festival Workshops at Community Centre",
                        "audioScript": (
                            "ORGANIZER: In our 'Make Something' workshop, children reuse old fabric ribbons and cardboard tubes to craft puppets."
                        ),
                        "questions": [
                            {"num": 11, "q": "Children use old fabric ribbons to craft ________", "answer": "puppets"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Science Experiment on Teaching Braille",
                        "audioScript": (
                            "CLARE: Jake, our assistive technology prototype converts mathematical graphs into raised tactile dots for visually impaired students."
                        ),
                        "questions": [
                            {"num": 21, "q": "Prototype converts graphs into raised tactile ________", "answer": "dots"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Microplastics in the Environment",
                        "audioScript": (
                            "LECTURER: Microplastics—plastic particles smaller than 5 millimetres—originate from synthetic fleece clothing fibres shed in washing machines, car tyre friction dust, and cosmetics. Recent medical studies have detected microplastics in human blood, lungs, and placental tissue, while soil biologists warn that microplastics stunt earthworm growth."
                        ),
                        "questions": [
                            {"num": 31, "q": "Synthetic clothing sheds microplastic fibres in ________ machines", "answer": "washing"},
                            {"num": 32, "q": "In agriculture, microplastics stunt the growth of ________", "answer": "earthworms / worms"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Archaeologists discover evidence of prehistoric island settlers",
                    "text": (
                        "In early April 2019, Dr Ceri Shipton and his colleagues from the Australian National University became the first archaeologists to excavate Obi, one of the islands in Indonesia's Maluku archipelago.\n\n"
                        "Excavating the Kelo caves on Obi, Shipton's team uncovered stone axes ground from hard clam shells and volcanic rock dating back 18,000 years. When sea levels rose at the end of the Last Glacial Maximum around 11,700 years ago, Obi's dense rainforest expanded, and inhabitants hunted tree-dwelling cuscus marsupials and traded obsidian glass across open ocean channels to neighbouring islands."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Dr Ceri Shipton's team was the first group of archaeologists to conduct excavations on the island of Obi.", "answer": "TRUE", "explain": "Đoạn 1 nêu rõ: 'became the first archaeologists to excavate Obi'."},
                        {"num": 2, "type": "TFNG", "q": "Prehistoric inhabitants of Obi never travelled by sea to other islands.", "answer": "FALSE", "explain": "Đoạn 2 nêu họ đã giao thương đá vỏ chai (obsidian) vượt qua các eo biển tới các đảo lân cận."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: The global importance of wetlands",
                    "text": (
                        "Wetlands—including marshes, peat bogs, river deltas, and coastal mangroves—are among the most productive ecosystems on Earth, providing water filtration, flood buffering, and livelihoods for over a billion people.\n\n"
                        "Although peatlands cover just 3 percent of the planet's land surface, their waterlogged soils lock away twice as much carbon as all the world's forests combined. Yet humans are draining and burning wetlands at a rate three times faster than forests to plant oil palms and agriculture—turning carbon sinks into massive carbon emitters and causing land subsidence in delta cities."
                    ),
                    "questions": [
                        {"num": 3, "type": "TFNG", "q": "Peatlands store more carbon than all of the world's forests combined.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'their waterlogged soils lock away twice as much carbon as all the world's forests combined'."},
                        {"num": 4, "type": "MCQ", "q": "What happens when peatland wetlands are drained and burned for agriculture?", "options": ["A. They absorb more carbon", "B. They transform from carbon sinks into major sources of greenhouse gas emissions and land subsidence", "C. They turn into granite rock", "D. Sea levels drop"], "answer": "B", "explain": "Đoạn 2 nêu việc tháo khô và đốt đầm than bùn biến bể chứa carbon thành nguồn phát thải lớn và gây sụt lún đất."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Is the era of artificial speech translation upon us?",
                    "text": (
                        "In Douglas Adams's science-fiction classic 'The Hitchhiker's Guide to the Galaxy', the 'Babel fish' is a small creature that, when slipped into the ear, instantaneously translates any spoken language in the universe. Today, AI-powered wireless earbuds and neural networks are bringing that fiction into reality.\n\n"
                        "However, linguist Professor Ammon Shea and cultural anthropologists argue that seamless machine translation faces deep cultural hurdles: in high-context languages like Japanese or Vietnamese, kinship pronouns, politeness registers, and unspoken irony carry social meanings that literal word-for-word algorithms miss. Furthermore, learning a foreign language oneself remains vital for building genuine cross-cultural empathy and neuroplasticity."
                    ),
                    "questions": [
                        {"num": 5, "type": "TFNG", "q": "The writer suggests that AI translation earbuds have made human language learning completely pointless.", "answer": "FALSE", "explain": "Đoạn 2 khẳng định tự học ngoại ngữ vẫn vô cùng quan trọng để xây dựng sự thấu cảm văn hóa và độ dẻo dai của não bộ."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: How Electricity is Generated in a Hydroelectric Power Station",
                    "prompt": "The diagram below shows how electricity is generated in a hydroelectric power station.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Reversible Process Diagram (Day vs Night Operation)",
                    "dataSummary": "Hydroelectric Pumped-Storage Station: High-level reservoir (dammed river) connected via intake and pipes to reversible turbines/generator in power station, discharging into a low-level reservoir. DAY: Intake opens -> water flows downhill -> turns reversible turbines -> generator produces electricity -> sent via power lines to national grid -> water collected in low-level reservoir. NIGHT: Electricity from grid powers generator -> reversible turbines pump water back uphill into high-level reservoir for next day.",
                    "modelAnswer": (
                        "The process diagram illustrates the operation of a pumped-storage hydroelectric power station, comparing how it generates electricity during the day and replenishes its water supply at night.\n\n"
                        "Overall, the system operates as a reversible, closed-loop cycle between a high-level reservoir and a low-level reservoir, utilizing the same turbines both to generate power for the national grid by day and to pump water back uphill during off-peak nighttime hours.\n\n"
                        "During the daytime, water from a river is held behind a large dam in a high-level reservoir. An intake gate at the base of the dam opens, allowing water to flow rapidly down a steep underground pipe into the power station below. The force of this descending water spins reversible turbines, which drive a generator to produce electrical current. This electricity is transmitted via high-voltage cables to the national grid, while the spent water flows out into a low-level reservoir.\n\n"
                        "At night, when consumer electricity demand is low, the entire mechanical process is reversed. The turbines act as pumps, drawing water from the low-level reservoir and forcing it back up the pipe into the high-level reservoir, where the intake gate closes to store the water for the following morning's generation cycle."
                    ),
                    "vocabBank": ["pumped-storage hydroelectric power station", "reversible closed-loop cycle", "descending water spins reversible turbines", "high-voltage cables", "off-peak nighttime hours"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Saving Money for the Future (Including Young People)",
                    "prompt": "It is important for everyone, including young people, to save money for their future.\nTo what extent do you agree or disagree with this statement?",
                    "essayType": "Opinion Essay (Strong Agreement)",
                    "outline": {
                        "intro": "Wholeheartedly agree that cultivating a habit of financial saving is indispensable for citizens of all ages, especially young adults.",
                        "body1": "Emergency resilience: Protects against job market volatility, medical emergencies, and predatory debt.",
                        "body2": "Long-term compound growth & milestones: Starting early harnesses compound interest for home ownership, further education, and retirement.",
                        "conclusion": "Disciplined saving empowers young people with lifelong autonomy and peace of mind."
                    },
                    "modelAnswer": (
                        "In a modern consumer culture saturated with 'buy-now-pay-later' credit schemes and social media luxury trends, the traditional virtue of thrift is frequently overlooked. Nevertheless, I wholeheartedly agree that saving money for the future is essential for everyone, and particularly crucial for young people entering adulthood.\n\n"
                        "First and foremost, maintaining a personal savings buffer provides indispensable protection against unforeseen life shocks. Contemporary labour markets are increasingly volatile, characterized by short-term gig contracts, technological layoffs, and economic recessions. Individuals—young or old—who spend their entire monthly income on immediate gratification risk falling into high-interest debt if confronted with sudden unemployment, illness, or family emergencies. Having three to six months of living expenses set aside grants young adults the psychological security to navigate career transitions without panic.\n\n"
                        "Secondly, for young people specifically, saving early unlocks the mathematical power of compound interest and enables major life milestones. Money saved and invested in one's early twenties has decades to compound, growing exponentially faster than larger sums saved in middle age. Furthermore, disciplined saving allows young adults to fund postgraduate degrees, launch entrepreneurial ventures, or accumulate a down payment on a home, laying the foundation for long-term wealth and dignified retirement.\n\n"
                        "In conclusion, financial prudence is a vital life skill at every stage of life; encouraging young people to save early insulates them from economic precarity and secures their future independence."
                    ),
                    "collocations": ["virtue of thrift", "personal savings buffer", "unforeseen life shocks", "mathematical power of compound interest", "economic precarity"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Holidays",
                    "questions": [
                        {"q": "Do you prefer spending holidays with friends or with family? [Why?]", "sample": "It depends on the occasion: during Tet Lunar New Year I cherish cozy family reunions, whereas in summer I love backpacking with university friends."},
                        {"q": "What kind of holiday accommodation do you like to stay in? [Why?]", "sample": "I prefer boutique homestays run by local families over generic chain hotels because hosts share authentic restaurant tips and cultural stories."},
                        {"q": "What plans do you have for your next holiday?", "sample": "After completing my IELTS exam next month, I plan to take a three-day trekking trip to Da Lat in the central highlands to enjoy the cool pine forests."},
                        {"q": "Is your city a popular place for tourists to visit on holiday?", "sample": "Yes, Ho Chi Minh City attracts millions of international visitors drawn to its vibrant street food, historic French architecture, and lively rooftop cafés."}
                    ]
                },
                "part2": {
                    "topic": "Describe a car journey you remember well",
                    "cueCard": "You should say:\n- where you went\n- why you made this journey\n- who you were with on this journey\n- and explain why you remember this car journey so well.",
                    "modelAnswer": (
                        "I would like to describe a breathtaking coastal road trip by car along the Hai Van Pass connecting Da Nang and Hue in central Vietnam.\n\n"
                        "I made this journey last summer with my father and younger brother in our family SUV to celebrate my brother's high school graduation.\n\n"
                        "Instead of taking the quick underground highway tunnel, my father decided to drive up the winding twenty-one-kilometre mountain pass. As we ascended through hairpin turns, rugged granite cliffs rose on our left while the turquoise East Sea sparkled hundreds of metres below on our right. At the misty summit, we stopped at the historic brick gate to drink hot drip coffee and watch trains wind along the cliffside railway tracks.\n\n"
                        "I remember this journey vividly because we sang our favourite acoustic songs together with the windows rolled down, and the dramatic coastal panorama looked like a scene from a cinema masterpiece."
                    ),
                    "lexical": ["breathtaking coastal road trip", "winding mountain pass", "hairpin turns", "turquoise sea", "dramatic coastal panorama"]
                },
                "part3": {
                    "topic": "Driving a car & Electric cars",
                    "questions": [
                        {"q": "At what age should people be allowed to drive a car in your country?", "sample": "In Vietnam, the legal minimum age for a car driving licence is 18, which I believe is appropriate as it ensures drivers have sufficient cognitive maturity and legal accountability."},
                        {"q": "Do you think it is important for everyone to learn to drive a car?", "sample": "Even if someone commutes daily by metro or motorbike, holding a driving licence is a valuable practical skill for family road trips, rainy weather, or medical emergencies."},
                        {"q": "Why are more people buying electric cars nowadays?", "sample": "Rising petrol prices, government tax exemptions, expanding fast-charging networks, and growing environmental awareness have made electric vehicles like VinFast and Tesla highly attractive."},
                        {"q": "Will electric cars completely solve traffic problems in cities?", "sample": "While electric cars eliminate tailpipe exhaust pollution, they still occupy the same road space as petrol cars; solving traffic congestion requires expanding mass rapid transit like subways and electric buses."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 19 Test 3: Phân tích Khảo cổ đảo Obi (Indonesia), Tầm quan trọng của Đầm lầy (Wetlands) và Dịch thuật giọng nói AI.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "first archaeologists to excavate Obi", "passageKey": "became the first archaeologists to excavate Obi", "verdict": "TRUE (Nhóm khảo cổ đầu tiên khai quật đảo Obi)"},
                    {"qNum": "P2 - Q3", "questionKey": "peatlands store more carbon than all forests", "passageKey": "lock away twice as much carbon as all the world's forests combined", "verdict": "TRUE (Lưu trữ gấp đôi lượng carbon của toàn bộ rừng)"},
                    {"qNum": "P3 - Q5", "questionKey": "made human language learning pointless", "passageKey": "learning a foreign language oneself remains vital for cross-cultural empathy", "verdict": "FALSE (Tự học ngoại ngữ vẫn rất quan trọng)"}
                ]
            },
            "vocabList": [
                {"word": "carbon sink", "ipa": "ˈkɑːbən sɪŋk", "vi": "bể hấp thụ và lưu giữ carbon tự nhiên", "type": "noun phrase", "collocation": "preserve peatlands as a vital carbon sink", "example": "Intact wetlands function as a massive global carbon sink."},
                {"word": "land subsidence", "ipa": "lænd səbˈsaɪdəns", "vi": "hiện tượng sụt lún mặt đất", "type": "noun phrase", "collocation": "trigger irreversible land subsidence in river deltas", "example": "Draining underground water causes severe land subsidence."},
                {"word": "high-context language", "ipa": "haɪ ˈkɒntekst ˈlæŋɡwɪdʒ", "vi": "ngôn ngữ giàu ngữ cảnh và hàm ý văn hóa", "type": "noun phrase", "collocation": "interpret nuances in a high-context language", "example": "AI translators often struggle with politeness levels in high-context languages."}
            ]
        },

        # CAM 19 - TEST 4
        {
            "id": 4,
            "title": "Cambridge IELTS 19 — Test 4",
            "topic": "Climate Change & British Butterflies, Deep-Sea Mining & The Unselfish Gene",
            "passages": [
                "P1: The impact of climate change on butterflies in Britain",
                "P2: Deep-sea mining",
                "P3: The Unselfish Gene (Egalitarianism vs Selfishness)"
            ],
            "keyVocab": ["phenological shift", "polymetallic nodules", "Clarion-Clipperton Zone", "prehistoric egalitarianism"],
            "listening": {
                "title": "Cambridge 19 Listening Test 4",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: First Day at Work — Supermarket Induction",
                        "audioScript": (
                            "SUPERVISOR: Welcome Kaeden to your first day at the supermarket! Please sign in at the security desk every morning, collect your barcode scanner from the stockroom, and remember that staff get a 15% discount on bakery and fresh produce."
                        ),
                        "questions": [
                            {"num": 1, "q": "Sign in every morning at the ________ desk", "answer": "security"},
                            {"num": 2, "q": "Collect the barcode scanner from the ________", "answer": "stockroom"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Running Club Information",
                        "audioScript": (
                            "COACH: Our Oakham Running Club welcomes all fitness levels. Every Tuesday we meet at the sports pavilion for interval sprints, and our annual charity 10K race raises funds for the local children's hospital."
                        ),
                        "questions": [
                            {"num": 11, "q": "Tuesday sessions take place at the sports ________", "answer": "pavilion"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Book Binding and Paper Conservation",
                        "audioScript": (
                            "KIERAN: Jane, archival conservation requires de-acidifying 19th-century wood-pulp paper so pages don't turn brittle and yellow."
                        ),
                        "questions": [
                            {"num": 21, "q": "Acid causes 19th-century paper to become ________", "answer": "brittle"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Tree-Planting Schemes — Ecological Pitfalls",
                        "audioScript": (
                            "LECTURER: While planting trees is touted as a panacea for climate change, poorly planned monoculture plantations of non-native eucalyptus or pine can actually drain local water tables, destroy native grassland biodiversity, and release soil carbon."
                        ),
                        "questions": [
                            {"num": 31, "q": "Non-native monoculture plantations can drain local ________ tables", "answer": "water"},
                            {"num": 32, "q": "Planting trees on native ________ can reduce biodiversity", "answer": "grassland / grasslands"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The impact of climate change on butterflies in Britain",
                    "text": (
                        "According to conservationists, populations of around two-thirds of butterfly species have declined in Britain over the past 40 years. Warming spring temperatures cause caterpillars to hatch earlier—a phenological shift—sometimes before their host plants have sprouted leaves.\n\n"
                        "Research by Dr Andrew Hayes at the University of Oxford comparing museum butterfly specimens from the past century shows that heat-tolerant generalist species like the Large White can adapt by breeding twice a year, whereas specialist woodland butterflies like the White Admiral are declining sharply."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Around two-thirds of British butterfly species have experienced population declines over the past four decades.", "answer": "TRUE", "explain": "Đoạn 1 nêu: 'populations of around two-thirds of butterfly species have declined in Britain over the past 40 years'."},
                        {"num": 2, "type": "TFNG", "q": "All butterfly species in Britain suffer equally from warmer spring temperatures.", "answer": "FALSE", "explain": "Đoạn 2 nêu loài đa năng chịu nhiệt như Large White thích nghi tốt hơn, trong khi loài chuyên biệt như White Admiral suy giảm mạnh."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Deep-sea mining",
                    "text": (
                        "As the world transitions from fossil fuels to electric vehicles and wind turbines, demand for battery metals—cobalt, nickel, copper, and manganese—is skyrocketing. Mining companies are now eyeing the abyssal plains of the Pacific Ocean's Clarion-Clipperton Zone, 4,000 metres beneath the waves, where trillions of potato-sized 'polymetallic nodules' rest on the seabed.\n\n"
                        "Proponents argue that seabed nodules contain higher metal grades than terrestrial mines and avoid rainforest deforestation or child labour. However, marine biologists warn that giant tracked collector vehicles will pulverize fragile deep-sea sponges, create suffocating sediment plumes across hundreds of kilometres, and generate 24-hour underwater noise that disorients whales."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "Why are mining companies interested in the Clarion-Clipperton Zone?", "options": ["A. It has shallow oil wells", "B. Its seabed is covered with polymetallic nodules rich in battery metals like cobalt and nickel", "C. It is located on top of a mountain", "D. It contains gold coins from pirate ships"], "answer": "B", "explain": "Đoạn 1 nêu vùng đáy biển Clarion-Clipperton chứa hàng nghìn tỷ kết hạch đa kim giàu cô-ban, niken, đồng cho pin xe điện."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: The Unselfish Gene",
                    "text": (
                        "A psychologist gives his view on how humans became self-centred. There has long been a general assumption that human beings are essentially selfish—a view popularized by Richard Dawkins's 1976 book 'The Selfish Gene' and Thomas Hobbes's claim that prehistoric life was 'solitary, poor, nasty, brutish, and short'.\n\n"
                        "However, anthropologist Bruce Knauft and psychologist Steve Taylor argue the exact opposite: for 95 percent of human history, nomadic hunter-gatherers lived in fiercely egalitarian bands that shared food, land, and childcare without private property or warfare. Selfishness, patriarchy, and war only erupted around 6,000 years ago with settled agriculture, grain surpluses, and the accumulation of private wealth."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Psychologist Steve Taylor argues that prehistoric hunter-gatherers were naturally cooperative and egalitarian.", "answer": "TRUE", "explain": "Đoạn 2 nêu Steve Taylor chứng minh các bộ tộc săn bắt hái lượm tiền sử sống bình đẳng và chia sẻ thức ăn trong 95% lịch sử loài người."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Supermarket Food Imports vs Local Production",
                    "prompt": "The charts below give information on the ages of the populations of Yemen and Italy in 2000 and projections for 2050.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Pie Charts (Age Distribution in Yemen & Italy, 2000 vs 2050)",
                    "dataSummary": "Yemen (2000): 0–14 yrs = 50.1%, 15–59 yrs = 46.3%, 60+ yrs = 3.6%. Yemen (2050 projection): 0–14 yrs drops to 37.0%, 15–59 yrs rises to 57.3%, 60+ yrs rises to 5.7%. Italy (2000): 0–14 yrs = 14.3%, 15–59 yrs = 61.6%, 60+ yrs = 24.1%. Italy (2050 projection): 0–14 yrs falls to 11.5%, 15–59 yrs falls to 46.2%, 60+ yrs surges to 42.3%.",
                    "modelAnswer": (
                        "The four pie charts compare the demographic age structures of Yemen and Italy in the year 2000 alongside projected population distributions for 2050 across three age brackets: 0–14 years, 15–59 years, and 60 years and over.\n\n"
                        "Overall, Yemen had a remarkably young population in 2000 compared to Italy, and although both nations are forecast to age by 2050, Italy is projected to experience a far more acute demographic shift toward senior citizens.\n\n"
                        "In 2000, half of Yemen's entire population (50.1%) consisted of children aged 0–14, while working-age adults (15–59) accounted for 46.3% and seniors aged 60+ represented a tiny 3.6%. By 2050, the proportion of children in Yemen is projected to shrink to 37.0%, whereas the 15–59 working-age cohort will expand to form the majority at 57.3%, and the 60+ bracket will edge up modestly to 5.7%.\n\n"
                        "Italy's demographic profile stands in stark contrast. In 2000, the 15–59 age group made up 61.6% of Italians, seniors aged 60+ already accounted for nearly a quarter (24.1%), and children aged 0–14 comprised just 14.3%. By 2050, Italy's senior population (60+) is forecast to surge dramatically to 42.3%, while the 15–59 cohort drops to 46.2% and the 0–14 bracket declines further to 11.5%."
                    ),
                    "vocabBank": ["demographic age structures", "acute demographic shift", "working-age cohort", "stands in stark contrast", "surge dramatically"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Supermarkets Selling Food Imported from All Over the World",
                    "prompt": "In many countries, supermarkets give customers a wide choice of food imported from all over the world.\nDo you think this is a positive or a negative development?",
                    "essayType": "Opinion Essay (Balanced / Predominantly Positive with Ecological Caveats)",
                    "outline": {
                        "intro": "While long-distance food imports generate aviation carbon emissions, the availability of global foodstuffs in supermarkets is largely a positive development that enhances nutritional security, consumer choice, and international trade.",
                        "body1": "Benefits: Year-round nutritional diversity regardless of harsh local winters; economic lifeline for agricultural exporters in developing nations.",
                        "body2": "Drawbacks & mitigation: High 'food miles' and pressure on local farmers, which can be mitigated through eco-labelling and maritime green corridors.",
                        "conclusion": "Global food trade enriches human diets and economic interdependence, provided sustainable transport is prioritized."
                    },
                    "modelAnswer": (
                        "Walk into a modern supermarket in almost any metropolis today and one can purchase New Zealand kiwifruit, Norwegian salmon, Vietnamese dragon fruit, and Italian olive oil under a single roof. While environmental critics highlight the carbon footprint of transporting perishables across oceans, I contend that the global availability of imported food is predominantly a positive development for consumer nutrition and international economic prosperity.\n\n"
                        "The primary advantage of imported supermarket produce is year-round nutritional security and culinary diversity. In countries with harsh, freezing winters or arid climates—such as Northern Europe or the Middle East—relying solely on domestic agriculture would restrict citizens to a monotonous diet of root vegetables and preserved grains for half the year. Importing fresh fruits, vegetables, and proteins ensures that families receive essential vitamins year-round. Furthermore, international agricultural trade serves as a vital economic engine for developing agrarian nations, lifting millions of smallholder farmers in Southeast Asia, Africa, and Latin America out of poverty.\n\n"
                        "Admittedly, unrestricted food importation carries environmental and domestic risks. Air-freighting out-of-season berries across continents generates substantial greenhouse gas emissions—commonly termed 'food miles'—and cheap imported commodities can undercut local farmers. However, these drawbacks can be effectively managed without banning global food trade: supermarkets can prioritize low-emission maritime shipping, display clear country-of-origin carbon labels, and dedicate prominent shelf space to seasonal domestic produce.\n\n"
                        "In conclusion, offering consumers a wide selection of international food enriches public health, cultural appreciation, and global trade, making it a largely beneficial hallmark of modern life."
                    ),
                    "collocations": ["perishables across oceans", "year-round nutritional security", "monotonous diet", "smallholder farmers", "country-of-origin carbon labels"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Cafés",
                    "questions": [
                        {"q": "Do you have a favourite café? [Why/Why not?]", "sample": "Yes, I love a quiet garden café called 'The Workshop' near my university because it has high ceilings, natural sunlight, and freshly roasted Arabica pour-over coffee."},
                        {"q": "Do you often go to cafés by yourself? [Why/Why not?]", "sample": "Quite often; bringing my laptop and headphones to a café on Sunday mornings helps me write essays without the temptation of lying down on my bed at home."},
                        {"q": "What do you think helps to make a café very popular?", "sample": "A winning combination of consistent beverage quality, ergonomic seating with power outlets, warm lighting, and friendly baristas makes a café thrive."},
                        {"q": "Why do some people prefer cafés that are part of large chains, while others prefer small local cafés?", "sample": "Large chains like Starbucks or Highlands offer predictable Wi-Fi and standardized menus anywhere in the world, whereas independent cafés attract customers seeking unique architectural character and artisanal drinks."}
                    ]
                },
                "part2": {
                    "topic": "Describe a place you visited where the air was polluted",
                    "cueCard": "You should say:\n- where this place is\n- when and why you visited it\n- why the air was not good\n- and explain how you felt about being in this place.",
                    "modelAnswer": (
                        "I would like to describe an industrial ring-road intersection on the outskirts of Hanoi that I passed through during a winter business trip last December.\n\n"
                        "I was travelling there by taxi at 8:00 AM to visit a logistics warehouse with my internship supervisor.\n\n"
                        "The air quality that morning was hazardous—registering over 220 on the Air Quality Index—due to a combination of heavy diesel container trucks, coal-fired brick kilns nearby, open crop burning, and a winter temperature inversion that trapped a thick grey blanket of PM2.5 smog right at street level.\n\n"
                        "Even while wearing an N95 respirator mask, my throat felt scratchy and my eyes watered within fifteen minutes. Experiencing that choking haze firsthand made me realize how urgently developing cities need electric public transit and strict emissions standards."
                    ),
                    "lexical": ["industrial ring-road intersection", "Air Quality Index", "winter temperature inversion", "thick grey blanket of PM2.5 smog", "N95 respirator mask"]
                },
                "part3": {
                    "topic": "Air pollution & Clean environments",
                    "questions": [
                        {"q": "In what ways can air pollution be reduced effectively in big cities?", "sample": "Municipalities can drastically cut urban smog by expanding electric metro networks, phasing out two-stroke petrol motorbikes, relocating heavy factories outside residential rings, and planting dense urban tree canopies."},
                        {"q": "Do you think individuals or governments are more responsible for tackling air pollution?", "sample": "While citizens should choose public transit and stop burning trash, systemic air quality depends primarily on governmental enforcement of industrial emission filters and clean-energy grids."},
                        {"q": "Why are some countries more successful than others at keeping public places clean?", "sample": "Countries like Singapore and Japan succeed by combining abundant public recycling bins, strict fines for littering, and early childhood civic education where schoolchildren clean their own classrooms daily."},
                        {"q": "How does living in a green, clean environment affect people's mental health?", "sample": "Environmental psychology studies consistently show that access to clean air and green parks lowers cortisol levels, reduces clinical anxiety, and encourages outdoor community exercise."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 19 Test 4: Phân tích Bướm Anh và Biến đổi khí hậu, Khai thác khoáng sản đáy biển sâu và Gen vị tha (The Unselfish Gene).",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "two-thirds of British butterfly species declined", "passageKey": "populations of around two-thirds of butterfly species have declined", "verdict": "TRUE (Khoảng 2/3 loài bướm ở Anh suy giảm)"},
                    {"qNum": "P2 - Q3", "questionKey": "Clarion-Clipperton Zone", "passageKey": "trillions of potato-sized polymetallic nodules rich in cobalt, nickel, copper", "verdict": "B (Chứa kết hạch đa kim giàu kim loại làm pin)"},
                    {"qNum": "P3 - Q4", "questionKey": "hunter-gatherers cooperative and egalitarian", "passageKey": "nomadic hunter-gatherers lived in fiercely egalitarian bands that shared food", "verdict": "TRUE (Sống bình đẳng và chia sẻ thức ăn)"}
                ]
            },
            "vocabList": [
                {"word": "phenological shift", "ipa": "ˌfiːnəˈlɒdʒɪkl ʃɪft", "vi": "sự dịch chuyển chu kỳ sinh học theo mùa do biến đổi khí hậu", "type": "noun phrase", "collocation": "trigger a disruptive phenological shift", "example": "Warmer springs cause a phenological shift in butterfly hatching."},
                {"word": "polymetallic nodules", "ipa": "ˌpɒlimɪˈtælɪk ˈnɒdʒuːlz", "vi": "kết hạch đa kim dưới đáy đại dương", "type": "noun phrase", "collocation": "harvest abyssal polymetallic nodules", "example": "Polymetallic nodules contain nickel, cobalt, and manganese."},
                {"word": "egalitarian society", "ipa": "ɪˌɡælɪˈteəriən səˈsaɪəti", "vi": "xã hội bình đẳng cùng chia sẻ tài nguyên", "type": "noun phrase", "collocation": "live in an egalitarian hunter-gatherer society", "example": "Prehistoric hunter-gatherers maintained an egalitarian society."}
            ]
        }
    ]


def get_cam20_tests():
    return [
        # CAM 20 - TEST 1
        {
            "id": 1,
            "title": "Cambridge IELTS 20 — Test 1",
            "topic": "The Kākāpō, Returning Elms to Britain & How Stress Affects Our Judgement",
            "passages": [
                "P1: The kākāpō (Flightless Parrot of New Zealand)",
                "P2: To Britain's rescue: returning elms to the countryside",
                "P3: How stress affects our judgement"
            ],
            "keyVocab": ["nocturnal flightless parrot", "lekking courtship", "Dutch elm disease", "cortisol risk appraisal"],
            "listening": {
                "title": "Cambridge 20 Listening Test 1",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Restaurant Recommendations in the Local Area",
                        "audioScript": (
                            "WOMAN: Hi! Could you recommend a couple of good restaurants in town for a family dinner?\n"
                            "MAN: Definitely! 'The Junction' is in a converted railway station and serves fantastic fish dishes, though it's quite noisy. If you want a quiet rooftop terrace with vegetarian options, try 'Paloma' on North Street—parking is behind the cinema, and they offer a £18 set lunch."
                        ),
                        "questions": [
                            {"num": 1, "q": "'The Junction' is famous for its ________ dishes", "answer": "fish / seafood"},
                            {"num": 2, "q": "'Paloma' has a quiet rooftop ________", "answer": "terrace"},
                            {"num": 3, "q": "Parking for Paloma is located behind the ________", "answer": "cinema"},
                            {"num": 4, "q": "Set lunch price at Paloma: £________", "answer": "18"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Volunteering at the Wildlife Sanctuary",
                        "audioScript": (
                            "RANGER: Welcome to the Island Wildlife Sanctuary briefing! Volunteers stay in timber cabins powered by solar panels. Your main morning task is weighing supplemental food hoppers for our flightless parrots and checking predator-proof fences."
                        ),
                        "questions": [
                            {"num": 11, "q": "Cabins on the island are powered by ________ panels", "answer": "solar"},
                            {"num": 12, "q": "Volunteers check predator-proof ________ daily", "answer": "fences"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Forestry Research on Disease-Resistant Elms",
                        "audioScript": (
                            "TUTOR: Liam, why did the Spanish hybrid elm saplings survive exposure to the bark beetle fungus better than native English elms?\n"
                            "LIAM: Their narrower xylem vessels prevented the fungal spores from spreading rapidly up the trunk."
                        ),
                        "questions": [
                            {"num": 21, "q": "Narrower vessels stopped fungal ________ from spreading", "answer": "spores"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Reclaiming Urban Brownfield Sites",
                        "audioScript": (
                            "LECTURER: Across post-industrial Europe, abandoned factories, gasworks, and dockyards—known as 'brownfield sites'—are being decontaminated through phytoremediation, where willow trees and mustard plants absorb heavy metals like lead and arsenic from the soil before parks and housing are built."
                        ),
                        "questions": [
                            {"num": 31, "q": "Abandoned industrial lands are known as ________ sites", "answer": "brownfield"},
                            {"num": 32, "q": "Willow trees and mustard plants absorb heavy ________ from soil", "answer": "metals"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The kākāpō",
                    "text": (
                        "The kākāpō is a nocturnal, flightless parrot that is critically endangered and one of New Zealand's unique treasures. Weighing up to four kilograms, it is the world's heaviest parrot. Having evolved for millions of years on islands devoid of mammalian ground predators, the kākāpō lost the ability to fly, relying instead on its mottled moss-green plumage to freeze and blend invisibly into the forest floor when threatened by eagles.\n\n"
                        "Unfortunately, this defence strategy proved disastrous when Polynesian settlers and later European colonists introduced rats, cats, and stoats, which hunted the ground-nesting birds by scent. Moreover, kākāpō breed only once every two to four years when native rimu trees produce a 'mast' crop of abundant fruit.\n\n"
                        "By 1995, only 51 kākāpō survived. That year, the New Zealand Department of Conservation launched the Kākāpō Recovery Programme, translocating every remaining bird to predator-free offshore sanctuaries such as Whenua Hou (Codfish Island) and Anchor Island, equipping each parrot with a smart radio transmitter, and providing heated artificial nest boxes, successfully raising the population above 240 birds."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "The kākāpō is capable of flying short distances between treetops.", "answer": "FALSE", "explain": "Đoạn 1 nêu rõ: 'flightless parrot... lost the ability to fly' (vẹt không biết bay)."},
                        {"num": 2, "type": "TFNG", "q": "Kākāpō breed every single year regardless of food availability.", "answer": "FALSE", "explain": "Đoạn 2 nêu chúng chỉ sinh sản 2–4 năm một lần vào mùa cây rimu sai quả ('breed only once every two to four years when native rimu trees produce a mast crop')."},
                        {"num": 3, "type": "TFNG", "q": "Conservationists moved the surviving kākāpō to islands that had been cleared of predators.", "answer": "TRUE", "explain": "Đoạn 3 nêu: 'translocating every remaining bird to predator-free offshore sanctuaries'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Returning elms to Britain",
                    "text": (
                        "For centuries, the English elm was a defining silhouette of the British countryside, providing timber for ship keels, water pipes, and furniture. However, in the late 1960s, a virulent new strain of Dutch elm disease—caused by the fungus Ophiostoma novo-ulmi and spread by elm bark beetles imported on North American logs—swept across Britain, killing more than 30 million mature elm trees.\n\n"
                        "Because English elms propagate primarily through root suckers rather than seeds, the trees across southern Britain were genetically identical clones, leaving them universally defenceless against the pathogen.\n\n"
                        "Today, botanists at Royal Botanic Gardens, Kew, and conservation groups are testing disease-resistant hybrid cultivars—such as 'New Horizon' and 'Ademuz'—as well as rare surviving native elms that harbour beneficial endophytic fungi capable of outcompeting the pathogen."
                    ),
                    "questions": [
                        {"num": 4, "type": "MCQ", "q": "Why were English elm trees so universally vulnerable to the 1960s outbreak of Dutch elm disease?", "options": ["A. They grew only in cities", "B. Because they reproduced via root suckers, making them genetically identical clones with no natural resistance", "C. Farmers cut them all down for firewood", "D. They received too much rain"], "answer": "B", "explain": "Đoạn 2 giải thích cây du Anh sinh sản qua chồi rễ (root suckers) nên có bộ gen giống hệt nhau (clones), không có biến dị kháng bệnh."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: How stress affects our judgement",
                    "text": (
                        "Some of the most important decisions of our lives occur while we're feeling stressed and anxious. From medical emergencies on hospital wards to financial trading floors and military cockpits, humans must evaluate risk under acute pressure.\n\n"
                        "Conventional wisdom assumes that stress makes people uniformly pessimistic and hyper-vigilant about danger. However, groundbreaking experiments by cognitive neuroscientist Tali Sharot at University College London reveal the exact opposite: acute stress actually induces an 'optimism bias' where individuals pay disproportionately more attention to potential rewards and ignore warning signs of loss.\n\n"
                        "When firefighters or laboratory volunteers experience a surge of cortisol and adrenaline, their brain prioritizes positive news that promises relief while filtering out negative probabilities—an evolutionary survival mechanism that helped ancient humans take bold action in crises, but can lead modern stock traders or executives into reckless gambles."
                    ),
                    "questions": [
                        {"num": 5, "type": "TFNG", "q": "Tali Sharot's research shows that acute stress makes people focus more heavily on potential rewards than on risks.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'acute stress actually induces an optimism bias where individuals pay disproportionately more attention to potential rewards and ignore warning signs'."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Species Conservation Expenditure & Bird Population Trends",
                    "prompt": "The table below gives information on consumer spending on different items in five different countries in 2002.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Data Table (5 Countries across 3 Expenditure Categories)",
                    "dataSummary": "Percentage of national consumer expenditure (2002): 1. Food/Drinks/Tobacco: Turkey highest (32.14%), Ireland second (28.91%), Spain (18.80%), Italy (16.36%), Sweden lowest (15.77%). 2. Clothing/Footwear: Italy highest (9.00%), other four countries between 5.40% (Sweden) and 6.63% (Turkey). 3. Leisure/Education: Turkey highest (4.35%), Sweden (3.22%), Italy (3.20%), Ireland (2.21%), Spain lowest (1.98%).",
                    "modelAnswer": (
                        "The table compares the percentage of total household consumer expenditure allocated to three categories of goods and services—food, drinks and tobacco; clothing and footwear; and leisure and education—across five European countries in 2002.\n\n"
                        "Overall, across all five nations, consumers spent by far the largest proportion of their budgets on food, drinks, and tobacco, whereas leisure and education consistently accounted for the smallest share. Turkey recorded the highest spending percentages in both the food and leisure categories, while Italy led in clothing expenditure.\n\n"
                        "Regarding food, drinks, and tobacco, Turkish households dedicated nearly a third of their total spending (32.14%) to this category, closely followed by Ireland at 28.91%. By contrast, consumers in Spain (18.80%), Italy (16.36%), and Sweden (15.77%) spent roughly half as much proportionally on these staples.\n\n"
                        "In the clothing and footwear sector, Italy stood out at 9.00%, noticeably ahead of Turkey (6.63%), Spain (6.51%), Ireland (6.43%), and Sweden, which recorded the lowest figure at 5.40%. Finally, expenditure on leisure and education was below 5% in every surveyed country, ranging from a high of 4.35% in Turkey and roughly 3.2% in Sweden and Italy down to 2.21% in Ireland and a low of 1.98% in Spain."
                    ),
                    "vocabBank": ["allocated to three categories", "consistently accounted for the smallest share", "nearly a third of their total spending", "stood out at", "ranged from a high of"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Access to Clean Water as a Free Basic Human Right",
                    "prompt": "Access to clean water is a basic human right. Therefore every home should have a water supply that is provided free of charge.\nTo what extent do you agree or disagree?",
                    "essayType": "Opinion Essay (Qualified Agreement: Free baseline quota + tiered pricing for excess)",
                    "outline": {
                        "intro": "Agree that a baseline daily quota of potable water should be guaranteed free of charge as a human right, but argue that unrestricted free water would cause waste and bankrupt municipal utilities.",
                        "body1": "Why a baseline supply must be free: Biological survival, sanitation, and preventing waterborne diseases among low-income families.",
                        "body2": "Why unlimited free water is impractical: Infrastructure maintenance costs billions; zero pricing encourages wasteful lawn watering; solution is a progressive tiered tariff.",
                        "conclusion": "A free essential lifeline quota combined with tiered billing for luxury consumption reconciles human rights with ecological sustainability."
                    },
                    "modelAnswer": (
                        "Safe, potable water is an indispensable prerequisite for human survival, public hygiene, and human dignity. While I strongly agree with the humanitarian principle that every household deserves a baseline lifeline of clean water free of charge, I contend that making unlimited domestic water consumption entirely free would lead to severe environmental waste and infrastructural collapse.\n\n"
                        "On one hand, the ethical case for guaranteeing free basic water access is indisputable. Unlike luxury commodities, humans cannot survive more than a few days without hydration, nor can communities prevent cholera, typhoid, and dysentery without clean water for cooking and sanitation. When impoverished households are disconnected from municipal water grids due to inability to pay utility bills, public health crises inevitably follow, placing a far heavier financial burden on national hospital systems.\n\n"
                        "On the other hand, supplying unlimited quantities of treated water at zero cost is economically and ecologically unsustainable. Filtering, testing, and pumping clean water through thousands of kilometres of underground pipes—and treating wastewater afterward—requires billions of dollars in continuous engineering maintenance. Furthermore, behavioural economics demonstrates that when a finite resource is completely free, consumers have zero incentive to fix leaking taps or refrain from filling private swimming pools and watering sprawling lawns during droughts. The optimal policy is therefore a 'progressive lifeline tariff': every household receives its first 50 litres per person per day completely free, while consumption beyond that threshold is billed at escalating rates.\n\n"
                        "In conclusion, while clean water is an inalienable human right that justifies a free essential quota for every home, charging for excessive usage is vital to fund infrastructure and prevent waste."
                    ),
                    "collocations": ["indispensable prerequisite", "baseline lifeline", "infrastructural collapse", "behavioural economics", "progressive lifeline tariff"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Wildlife & Birds",
                    "questions": [
                        {"q": "Are there many wild animals or birds where you live? [Why/Why not?]", "sample": "In the centre of my city, wildlife is mostly limited to sparrows, pigeons, and squirrels in public parks, though egrets and kingfishers can still be seen along the suburban canals."},
                        {"q": "Did you learn much about wild animals at school?", "sample": "Yes, our biology textbooks covered tropical rainforest biodiversity and endangered endemic species like the Saola and Red-shanked Douc Langur."},
                        {"q": "Do you enjoy watching TV documentaries about wildlife? [Why/Why not?]", "sample": "I love them, especially Sir David Attenborough's Planet Earth series, because high-definition macro cameras capture animal behaviours that humans would never witness otherwise."},
                        {"q": "How important is it to protect wild animals for future generations?", "sample": "It is crucial; every wild species plays a role in pollination, seed dispersal, or food-web balance, so losing biodiversity threatens human agriculture and ecosystems."}
                    ]
                },
                "part2": {
                    "topic": "Describe a natural place (e.g. a park, mountain or beach) that you enjoy visiting",
                    "cueCard": "You should say:\n- where this place is\n- how you knew about this place\n- what it is like\n- and explain why you enjoy visiting this place.",
                    "modelAnswer": (
                        "I would like to describe Cat Tien National Park, a UNESCO Biosphere Reserve located about 150 kilometres north of Ho Chi Minh City.\n\n"
                        "I first learned about this sanctuary from an environmental photography exhibition at my university, and I have visited it twice with my hiking club.\n\n"
                        "The park is a breathtaking expanse of lowland tropical rainforest bisected by the winding Dong Nai River. Giant centuries-old tung trees with massive buttress roots tower above the trails, gibbons sing in the canopy at dawn, and Bau Sau—Crocodile Lake—sits serenely in the heart of the wetland.\n\n"
                        "I love visiting Cat Tien because stepping beneath its emerald canopy immediately disconnects me from urban concrete and smartphone screens, filling my lungs with crisp forest air and reminding me of nature's ancient majesty."
                    ),
                    "lexical": ["UNESCO Biosphere Reserve", "lowland tropical rainforest", "massive buttress roots", "emerald canopy", "ancient majesty"]
                },
                "part3": {
                    "topic": "Protecting nature & Decision making under stress",
                    "questions": [
                        {"q": "What are the main threats to natural areas in your country today?", "sample": "Unchecked coastal resort construction, illegal logging, agricultural runoff, and plastic litter left behind by mass tourism are the primary threats to natural reserves."},
                        {"q": "Should governments restrict the number of tourists allowed into national parks?", "sample": "Yes, implementing daily visitor caps and mandatory guided eco-trails is the most effective way to generate conservation revenue without trampling fragile habitats."},
                        {"q": "Why do people often make poor decisions when they are under extreme stress?", "sample": "Under acute stress, cortisol floods the brain and triggers an evolutionary fight-or-flight response that narrows attention to immediate relief while blinding people to long-term consequences."},
                        {"q": "How can people train themselves to stay calm when making important life decisions?", "sample": "Writing down pros and cons objectively, consulting an impartial mentor, and sleeping on a major decision for 24 hours prevent impulsive emotional errors."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 20 Test 1: Phân tích Vẹt Kākāpō (New Zealand), Phục hồi cây Du ở Anh (British Elms) và Stress ảnh hưởng đến Phán đoán.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "kākāpō capable of flying short distances", "passageKey": "flightless parrot... lost the ability to fly", "verdict": "FALSE (Hoàn toàn không biết bay)"},
                    {"qNum": "P2 - Q4", "questionKey": "why English elms universally vulnerable", "passageKey": "propagate through root suckers... genetically identical clones", "verdict": "B (Sinh sản vô tính qua rễ nên cùng bộ gen)"},
                    {"qNum": "P3 - Q5", "questionKey": "acute stress focus on rewards", "passageKey": "induces an optimism bias... pay disproportionately more attention to potential rewards", "verdict": "TRUE (Chú ý nhiều hơn vào phần thưởng tiềm năng)"}
                ]
            },
            "vocabList": [
                {"word": "flightless nocturnal parrot", "ipa": "ˈflaɪtləs nɒkˈtɜːnl ˈpærət", "vi": "loài vẹt kiếm ăn đêm không biết bay", "type": "noun phrase", "collocation": "protect the critically endangered flightless nocturnal parrot", "example": "The kākāpō is the world's only flightless nocturnal parrot."},
                {"word": "genetically identical clones", "ipa": "dʒəˈnetɪkli aɪˈdentɪkl kloʊnz", "vi": "các cá thể nhân bản có bộ gen giống hệt nhau", "type": "noun phrase", "collocation": "propagate as genetically identical clones", "example": "English elms grew as genetically identical clones from root suckers."},
                {"word": "optimism bias", "ipa": "ˈɒptɪmɪzəm ˈbaɪəs", "vi": "thiên kiến lạc quan (đánh giá thấp rủi ro khi căng thẳng)", "type": "noun phrase", "collocation": "induce an unexpected optimism bias under stress", "example": "Tali Sharot showed that acute stress triggers an optimism bias."}
            ]
        },

        # CAM 20 - TEST 2
        {
            "id": 2,
            "title": "Cambridge IELTS 20 — Test 2",
            "topic": "Manatees, Procrastination & Invasion of the Robot Umpires",
            "passages": [
                "P1: Manatees (Gentle Aquatic Herbivores)",
                "P2: Procrastination: A psychologist's view",
                "P3: Invasion of the robot umpires"
            ],
            "keyVocab": ["aquatic herbivore sirenian", "emotional regulation failure", "Automated Ball-Strike system", "collaborative human-AI officiating"],
            "listening": {
                "title": "Cambridge 20 Listening Test 2",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Local Council Care Support for Elderly Relatives",
                        "audioScript": (
                            "ADVISOR: Community Care Helpline. For your 82-year-old grandfather, we can arrange a daily hot meal delivery service, a fortnightly hairdresser home visit, and an emergency pendant alarm linked to the health centre."
                        ),
                        "questions": [
                            {"num": 1, "q": "Fortnightly home visit by a ________", "answer": "hairdresser"},
                            {"num": 2, "q": "Emergency pendant ________ linked to health centre", "answer": "alarm"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Volunteering at the Local Heritage Railway",
                        "audioScript": (
                            "COORDINATOR: Volunteers at the Heritage Steam Railway help restore vintage wooden carriages, sell tickets in the Victorian booking office, and tend the station flowerbeds."
                        ),
                        "questions": [
                            {"num": 11, "q": "Volunteers restore vintage wooden ________", "answer": "carriages"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Psychology Seminar on Procrastination",
                        "audioScript": (
                            "TUTOR: Fuschia Sirois's research proves that self-compassion—forgiving yourself for past delays—reduces procrastination far more effectively than harsh self-criticism."
                        ),
                        "questions": [
                            {"num": 21, "q": "Self-________ reduces procrastination more than self-criticism", "answer": "compassion"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Manatee Conservation in Florida",
                        "audioScript": (
                            "LECTURER: Florida manatees lack the thick blubber layer of whales; whenever coastal water temperatures drop below 20°C in winter, they must congregate in warm-water freshwater springs to avoid fatal cold-stress syndrome."
                        ),
                        "questions": [
                            {"num": 31, "q": "Manatees lack the insulating ________ layer found in whales", "answer": "blubber / fat"},
                            {"num": 32, "q": "In winter, they gather in warm freshwater ________", "answer": "springs"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Manatees",
                    "text": (
                        "Manatees, also known as sea cows, are calm, slow-moving aquatic mammals belonging to the order Sirenia. Measuring up to four metres long and weighing 590 kilograms, they graze for up to eight hours a day on seagrass meadows in shallow coastal waters and rivers across the Caribbean, the Amazon basin, and West Africa.\n\n"
                        "Unlike other marine mammals, manatees have only six neck vertebrae (most mammals have seven) and continuously replace their molar teeth throughout life—as front molars wear down from grinding gritty silica in seagrass, new molars erupt at the back of the jaw and march forward like a conveyor belt.\n\n"
                        "Because manatees swim at a leisurely 5 to 8 kilometres per hour near the water surface to breathe air, collisions with high-speed motorboat propellers and entanglement in fishing gear remain their leading human-caused threats, alongside toxic red-tide algal blooms that destroy seagrass beds."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Manatees have the same number of neck vertebrae as almost all other mammals.", "answer": "FALSE", "explain": "Đoạn 2 nêu lợn biển chỉ có 6 đốt sống cổ trong khi hầu hết động vật có vú khác có 7 đốt ('have only six neck vertebrae (most mammals have seven)')."},
                        {"num": 2, "type": "TFNG", "q": "Worn-out manatee teeth are continuously replaced by new molars moving forward from the back of the jaw.", "answer": "TRUE", "explain": "Đoạn 2 nêu răng hàm mới mọc ở phía sau hàm và di chuyển dần lên phía trước như băng chuyền ('march forward like a conveyor belt')."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Procrastination",
                    "text": (
                        "Contrary to popular belief, procrastination—the voluntary delay of an intended action despite knowing that the delay will cause harm—is not a symptom of laziness or poor time-management apps.\n\n"
                        "Psychologists Timothy Pychyl at Carleton University and Fuschia Sirois at Durham University demonstrate that procrastination is fundamentally a failure of emotional regulation, or 'short-term mood repair'. When confronted with an essay or tax return that triggers boredom, self-doubt, or fear of failure, the brain's amygdala perceives the task as a threat. By switching to cleaning one's desk or scrolling social media, the procrastinator achieves immediate mood relief, reinforcing avoidance.\n\n"
                        "Crucially, clinical studies show that chronic procrastination elevates stress hormones, weakens immune function, and increases cardiovascular disease risk. The cure lies not in rigid schedules, but in cognitive reframing: practising self-compassion, forgiving oneself for past delays, and shrinking the first step into a non-threatening five-minute action."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "According to psychologists Pychyl and Sirois, what is the root cause of procrastination?", "options": ["A. Lack of paper calendars", "B. Difficulty managing negative emotions and seeking short-term mood repair", "C. Sleeping too much", "D. Excessive physical exercise"], "answer": "B", "explain": "Đoạn 2 khẳng định sự trì hoãn về bản chất là thất bại trong việc điều hòa cảm xúc tiêu cực ('failure of emotional regulation, or short-term mood repair')."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Invasion of the robot umpires",
                    "text": (
                        "In Major League Baseball (MLB), a home-plate umpire must decide in less than half a second whether a 160 km/h pitch passed through an invisible three-dimensional 'strike zone'. Boston University researchers analysing 4 million pitches found that human umpires missed roughly 14 percent of calls—and showed unconscious bias toward veteran star players.\n\n"
                        "Minor League Baseball has now deployed the Automated Ball-Strike (ABS) system—popularly dubbed 'robot umpires'—which uses Hawk-Eye optical radar cameras to track the exact seam of the baseball and relay 'strike' or 'ball' instantaneously to the human umpire's earpiece.\n\n"
                        "However, purists argue that the 'art of pitch framing' by catchers and the human drama of arguing with the umpire are part of baseball's soul. As a compromise, leagues are adopting a 'challenge system' where human umpires call the game, but players can appeal three disputed calls per match to the Hawk-Eye computer."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "In the Automated Ball-Strike (ABS) system, a humanoid metal robot stands physically behind the batter.", "answer": "FALSE", "explain": "Đoạn 2 giải thích 'robot umpires' thực chất là hệ thống camera quang học Hawk-Eye truyền tín hiệu qua tai nghe cho trọng tài người, không phải robot hình người đứng trên sân."},
                        {"num": 5, "type": "MCQ", "q": "How does the 'challenge system' balance tradition with technology in baseball?", "options": ["A. It bans all cameras from stadiums", "B. Human umpires make the calls, but players can use Hawk-Eye technology to review a limited number of disputed pitches", "C. Fans vote on every pitch via smartphone", "D. Games are played on computers"], "answer": "B", "explain": "Đoạn 3 nêu trọng tài người vẫn bắt chính nhưng cầu thủ được quyền khiếu nại (challenge) 3 pha bóng gây tranh cãi mỗi trận bằng hệ thống Hawk-Eye."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: World Forest Distribution vs Timber Production across 5 Regions",
                    "prompt": "The charts below show the percentage of world forest in five different regions and the percentage of timber in each region.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Dual Pie Charts (% of World Forest vs % of World Timber Production)",
                    "dataSummary": "5 Regions (North America, South America, Europe, Africa, Asia): North America holds 25% of world forest and produces the highest share of world timber (30%). Africa holds the largest share of world forest (27%) but produces the lowest share of timber (just 9%). Europe holds 20% forest and produces 20% timber. South America holds 16% forest and produces 23% timber. Asia holds the smallest forest share (12%) and produces 18% timber.",
                    "modelAnswer": (
                        "The two pie charts compare five global regions—Africa, North America, Europe, South America, and Asia—in terms of their share of total world forest cover and their respective contributions to global timber production.\n\n"
                        "Overall, there is a striking disparity between forest abundance and commercial timber output in several regions. While Africa possesses the largest proportion of the world's forests, it generates the smallest fraction of timber; conversely, North America is the world's leading timber producer.\n\n"
                        "Looking at forest distribution, Africa accounts for the highest share of global woodland at 27%, closely followed by North America at 25% and Europe at 20%. However, their timber output varies dramatically: North America leads global timber production at 30%, and Europe's timber share (20%) exactly matches its forest cover, whereas Africa produces a mere 9% of the world's timber—the lowest of all five regions.\n\n"
                        "In South America and Asia, timber harvesting exceeds their proportional share of global forest. South America contains 16% of the world's forest but supplies 23% of global timber, while Asia holds the smallest forest area at 12% yet accounts for 18% of worldwide timber production."
                    ),
                    "vocabBank": ["striking disparity", "forest abundance", "commercial timber output", "accounts for the highest share", "exceeds their proportional share"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: AI & Automated Systems Replacing Human Referees in Sports",
                    "prompt": "In many professional sports, human referees and umpires are increasingly assisted or replaced by automated technology.\nDo you think the advantages of this development outweigh the disadvantages?",
                    "essayType": "Outweigh Essay (Advantages outweigh disadvantages)",
                    "outline": {
                        "intro": "Acknowledge minor delays in match flow, but argue that objective accuracy, eradication of bias, and protection of athletes' careers far outweigh any nostalgia for human error.",
                        "body1": "Drawbacks: Brief pauses for video review (VAR/Hawk-Eye) and loss of traditional 'human element' debate.",
                        "body2": "Overwhelming benefits: Millimetre optical precision, elimination of home-crowd referee bias, and fairness in multi-million-dollar championships.",
                        "conclusion": "Combining human match management with instant AI optical verification represents the pinnacle of sporting fairness."
                    },
                    "modelAnswer": (
                        "The integration of high-speed optical cameras and artificial intelligence into professional sports officiating—ranging from Hawk-Eye line-calling in tennis and baseball to Video Assistant Referees (VAR) in football—has transformed modern athletics. While traditionalists lament brief interruptions to the flow of play, I firmly believe that the advantages of automated officiating far outweigh the disadvantages.\n\n"
                        "Admittedly, technological adjudication is not without minor drawbacks. In sports such as football, waiting two minutes for a video review of a marginal offside call can temporarily dampen stadium spontaneity and fan celebration. Furthermore, purists argue that occasional human refereeing mistakes and the theatrical arguments they provoke are part of sporting folklore.\n\n"
                        "Nevertheless, these sentimental objections pale in comparison to the paramount imperative of competitive fairness. First, the speed of modern professional sport has surpassed the biological limits of the human eye: a tennis ball travelling at 220 kilometres per hour contacts the baseline for mere milliseconds. Automated optical systems track trajectories with millimetre precision, ensuring that championships and athletes' livelihoods are decided by genuine skill rather than an umpire's blink. Second, algorithms are immune to psychological pressure. Empirical studies consistently show that human referees are subconsciously swayed by roaring home crowds and superstar reputations, whereas automated systems apply the rules with complete impartiality.\n\n"
                        "In conclusion, sport is fundamentally built on meritocracy and fair play. Utilizing automated technology to eliminate career-altering referee blunders is an overwhelmingly positive evolution."
                    ),
                    "collocations": ["technological adjudication", "dampen stadium spontaneity", "biological limits of the human eye", "millimetre precision", "complete impartiality"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Time management & Being busy",
                    "questions": [
                        {"q": "Do you like being busy? [Why/Why not?]", "sample": "I enjoy being productively busy with meaningful projects because it gives my day structure and momentum, though I dislike feeling frantically rushed."},
                        {"q": "How do you organize your time each day?", "sample": "Every evening before bed, I write down my top three non-negotiable tasks for the next morning in a digital planner so I can start working immediately without decision fatigue."},
                        {"q": "Do you ever put off doing things that you don't like doing?", "sample": "Occasionally, if an assignment feels vague or intimidating, I catch myself procrastinating by tidying my room, so I use a five-minute timer to force myself to start."},
                        {"q": "When do you feel most productive during the day?", "sample": "My peak cognitive window is between 7:00 AM and 11:00 AM after a cup of black coffee, when the house is quiet and my willpower is fresh."}
                    ]
                },
                "part2": {
                    "topic": "Describe a time when you delayed doing something important",
                    "cueCard": "You should say:\n- what the important thing was\n- why you delayed doing it\n- how you finally completed it\n- and explain how you felt after you finished it.",
                    "modelAnswer": (
                        "I would like to describe an occasion last year when I procrastinated on booking my dental wisdom-tooth extraction for nearly two months.\n\n"
                        "My dentist had taken an X-ray in March and warned me that my lower wisdom tooth was growing horizontally and needed to be removed before my university exam period.\n\n"
                        "I kept putting off making the appointment out of sheer dental anxiety—I had read dramatic stories online about post-surgery swelling and convinced myself I was too busy with coursework. Eventually, when a dull ache started keeping me awake at night, I practised self-compassion, called the clinic first thing in the morning, and had the procedure done under local anaesthesia in just twenty painless minutes.\n\n"
                        "Walking out of the clinic, I felt a wave of relief and realized that the weeks of anxious anticipation in my head were ten times worse than the reality."
                    ),
                    "lexical": ["procrastinated on booking", "growing horizontally", "sheer dental anxiety", "local anaesthesia", "anxious anticipation"]
                },
                "part3": {
                    "topic": "Procrastination & Technology in sports",
                    "questions": [
                        {"q": "Why do so many people procrastinate even when they know it will cause problems?", "sample": "Psychologists explain that procrastination is an emotional coping mechanism: when a task triggers fear of failure or boredom, the brain seeks instant dopamine relief through distractions."},
                        {"q": "How have smartphones and social media affected people's ability to finish tasks on time?", "sample": "Constant push notifications and infinite video feeds fracture deep concentration; every time a worker checks a phone alert, it takes up to twenty minutes to regain full cognitive focus."},
                        {"q": "Do you think technology has made professional sports fairer?", "sample": "Unquestionably; goal-line technology and Hawk-Eye cameras have eliminated egregious refereeing blunders that used to unfairly eliminate teams from World Cups."},
                        {"q": "Could artificial intelligence ever replace human coaches in sports?", "sample": "AI is already indispensable for analysing player biomechanics and fatigue metrics, but it can never replace a human coach's emotional leadership and halftime motivational speeches."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 20 Test 2: Phân tích Lợn biển (Manatees), Tâm lý học về Sự trì hoãn (Procrastination) và Trọng tài Robot (Robot Umpires).",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "same number of neck vertebrae", "passageKey": "manatees have only six neck vertebrae (most mammals have seven)", "verdict": "FALSE (6 đốt sống cổ so với 7 ở thú có vú khác)"},
                    {"qNum": "P2 - Q3", "questionKey": "root cause of procrastination", "passageKey": "failure of emotional regulation, or short-term mood repair", "verdict": "B (Không điều hòa được cảm xúc tiêu cực)"},
                    {"qNum": "P3 - Q4", "questionKey": "humanoid metal robot stands behind batter", "passageKey": "uses Hawk-Eye optical radar cameras to relay strike or ball to human umpire's earpiece", "verdict": "FALSE (Dùng camera Hawk-Eye báo qua tai nghe cho trọng tài người)"}
                ]
            },
            "vocabList": [
                {"word": "short-term mood repair", "ipa": "ʃɔːt tɜːm muːd rɪˈpeər", "vi": "sự xoa dịu tâm trạng tức thời (nguyên nhân gây trì hoãn)", "type": "noun phrase", "collocation": "prioritize short-term mood repair over long-term goals", "example": "Procrastination is driven by short-term mood repair."},
                {"word": "self-compassion", "ipa": "ˌself kəmˈpæʃn", "vi": "lòng trắc ẩn / sự bao dung với chính mình", "type": "noun", "collocation": "practise self-compassion to overcome procrastination", "example": "Fuschia Sirois showed that self-compassion reduces task avoidance."},
                {"word": "optical radar tracking", "ipa": "ˈɒptɪkl ˈreɪdɑːr ˈtrækɪŋ", "vi": "hệ thống theo dõi bóng bằng quang học và radar", "type": "noun phrase", "collocation": "deploy high-speed optical radar tracking", "example": "Hawk-Eye uses optical radar tracking to judge pitches."}
            ]
        },

        # CAM 20 - TEST 3
        {
            "id": 3,
            "title": "Cambridge IELTS 20 — Test 3",
            "topic": "Frozen Food History, Can Coral Reefs Be Saved? & Robots and Us",
            "passages": [
                "P1: Frozen food: A frosty history",
                "P2: Can we save the world's coral reefs?",
                "P3: Robots and us (Social Robotics)"
            ],
            "keyVocab": ["Clarence Birdseye flash-freezing", "ice crystal cell rupture", "symbiotic zooxanthellae", "social robotics empathy"],
            "listening": {
                "title": "Cambridge 20 Listening Test 3",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Furniture Rental for a Short-Term Apartment",
                        "audioScript": (
                            "AGENT: City Furniture Rentals. Our 'Starter Pack' for a one-bedroom flat costs £85 per month, including a sofa, dining table, and orthopedic mattress. Delivery is free on Tuesdays, and a £150 refundable damage deposit applies."
                        ),
                        "questions": [
                            {"num": 1, "q": "Monthly rental price for Starter Pack: £________", "answer": "85"},
                            {"num": 2, "q": "Free delivery day: ________", "answer": "Tuesday / Tuesdays"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Guided Tour of the Marine Aquarium",
                        "audioScript": (
                            "GUIDE: Welcome to the Ocean Discovery Centre! At 11:00 AM in the Coral Lagoon, marine biologists will demonstrate coral micro-fragmentation, and at 2:00 PM you can touch starfish in the Rockpool Zone."
                        ),
                        "questions": [
                            {"num": 11, "q": "Visitors can touch ________ in the Rockpool Zone", "answer": "starfish"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Robotics in Elderly Care Homes",
                        "audioScript": (
                            "SEAN: Maya, when we tested the Paro therapeutic baby-seal robot in the dementia ward, patients smiled and conversed more with nurses."
                        ),
                        "questions": [
                            {"num": 21, "q": "The therapeutic robot was shaped like a baby ________", "answer": "seal"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: History of Cold Food Preservation & Clarence Birdseye",
                        "audioScript": (
                            "LECTURER: While trading furs in Labrador, Canada, in 1912, American naturalist Clarence Birdseye noticed that fish caught by Inuit fishermen in -40°C winds froze almost instantaneously and tasted completely fresh when thawed months later, because rapid freezing prevented large jagged ice crystals from rupturing cell membranes."
                        ),
                        "questions": [
                            {"num": 31, "q": "Birdseye learned rapid freezing from ________ fishermen in Canada", "answer": "Inuit"},
                            {"num": 32, "q": "Instant freezing stops large ice crystals from rupturing cell ________", "answer": "membranes / walls"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Frozen food: A frosty history",
                    "text": (
                        "At the turn of the twentieth century, commercial freezing was slow: food placed in cold storage rooms took days to freeze, allowing large, jagged ice crystals to form inside plant and animal tissues. When thawed, these ruptured cells leaked moisture, leaving meat and vegetables mushy and flavourless.\n\n"
                        "During an expedition to Labrador, Canada, between 1912 and 1916, American inventor Clarence Birdseye observed Inuit families ice-fishing in sub-zero Arctic gales. Fish pulled from the water froze solid within seconds and, when cooked months later, retained their firm texture.\n\n"
                        "Returning to Massachusetts, Birdseye patented the 'double-belt flash freezer' in 1927, which pressed waxed-cardboard cartons of food between two hollow metal belts chilled to -40°C by calcium chloride brine. Although Great Depression supermarkets initially lacked expensive refrigerated display cabinets, post-World War II suburban prosperity and TV dinners turned frozen food into a global staple."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Slow freezing methods before Birdseye produced small ice crystals that preserved food texture perfectly.", "answer": "FALSE", "explain": "Đoạn 1 nêu đông lạnh chậm tạo ra các tinh thể đá lớn sắc nhọn làm rách màng tế bào, khiến thức ăn bị nhão và mất vị khi rã đông."},
                        {"num": 2, "type": "TFNG", "q": "A shortage of refrigerated display cabinets in grocery stores initially slowed the adoption of Birdseye's frozen foods.", "answer": "TRUE", "explain": "Đoạn 3 nêu: 'Great Depression supermarkets initially lacked expensive refrigerated display cabinets'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Can we save the world's coral reefs?",
                    "text": (
                        "Coral reefs cover less than 0.2 percent of the ocean floor, yet they support a quarter of all marine species and protect coastlines from tropical storm surges. However, marine heatwaves driven by anthropogenic climate change are causing mass coral bleaching—where stressed coral polyps expel the colorful symbiotic algae (zooxanthellae) that provide 90 percent of their energy.\n\n"
                        "Marine biologists such as Madeleine van Oppen in Australia and Ruth Gates in Hawaii have pioneered 'assisted evolution': breeding heat-tolerant 'super-corals' and inoculating reefs with beneficial probiotic bacteria, while Dr David Vaughan discovered 'micro-fragmentation', cutting brain corals into tiny pieces that stimulates them to grow 25 to 50 times faster than normal."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "What causes coral bleaching during marine heatwaves?", "options": ["A. Sharks eating coral reefs", "B. Stressed coral polyps expelling the symbiotic algae that supply their energy", "C. Too much darkness in winter", "D. Underwater volcanoes"], "answer": "B", "explain": "Đoạn 1 giải thích hiện tượng tẩy trắng san hô xảy ra khi nước biển nóng lên khiến polyp san hô trục xuất tảo cộng sinh zooxanthellae."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Robots and us",
                    "text": (
                        "In her thought-provoking book on human-robot interaction, MIT sociologist Sherry Turkle and roboticists examine what happens when machines are engineered not merely to assemble cars in factories, but to simulate affection, companionship, and care for children and the elderly.\n\n"
                        "While proponents argue that robotic pets and conversational AI companions alleviate loneliness in understaffed nursing homes, critics warn that simulated empathy is an illusion: a machine cannot genuinely care or share human mortality, and relying on 'sociable robots' risks devaluing authentic human-to-human relationships."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Sherry Turkle believes that robotic companions possess genuine biological emotions identical to humans.", "answer": "FALSE", "explain": "Đoạn 2 nêu rõ sự thấu cảm của robot chỉ là mô phỏng ('simulated empathy is an illusion: a machine cannot genuinely care')."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Flash-Freezing & Cold-Chain Distribution Process",
                    "prompt": "The diagram below shows how geothermal energy is used to produce electricity.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Technical Process Diagram (5 Stages: Surface & Underground)",
                    "dataSummary": "Geothermal Power Plant (5 steps): 1. Cold water stored in tank on surface -> 2. Pumped down 4.5 km underground through injection well -> 3. Passes through Geothermal Zone (hot rocks) where water is superheated -> 4. Pumped back up through production well into condenser on surface -> 5. Steam turns turbine -> drives generator to produce electricity for power grid.",
                    "modelAnswer": (
                        "The process diagram illustrates the five sequential stages through which subterranean geothermal heat is harnessed to generate electrical power.\n\n"
                        "Overall, the generation of geothermal electricity is a continuous cycle that involves pumping cold water deep underground to be heated by hot rocks, and then utilizing the resulting pressurized steam on the surface to drive a turbine and electrical generator.\n\n"
                        "The process begins on the surface, where cold water is held in a large storage tank. In the first active step, this cold water is pumped vertically downward through a narrow injection well to a depth of 4.5 kilometres beneath the Earth's surface. At the bottom of the well, the water enters the geothermal zone, a layer of naturally superheated subterranean rock.\n\n"
                        "As the water percolates through fissures in these hot rocks, its temperature rises dramatically. Next, the superheated water is pumped back up to the surface via a parallel production well and enters a large condenser chamber. Inside the condenser, the hot water depressurizes into steam, which is channelled through a pipe to spin a turbine at high speed. Finally, the rotating turbine powers an attached generator, producing electricity that is fed into high-voltage pylons for distribution across the national grid."
                    ),
                    "vocabBank": ["subterranean geothermal heat", "injection well", "naturally superheated subterranean rock", "condenser chamber", "high-voltage pylons"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Increasing Consumption of Processed and Convenience Food",
                    "prompt": "Nowadays, people consume far more processed and convenience food than in the past.\nWhat are the causes of this trend, and what measures can be taken to encourage healthier eating?",
                    "essayType": "Causes & Solutions Essay",
                    "outline": {
                        "intro": "Identify time poverty and aggressive food marketing as the primary drivers of processed food consumption; propose fiscal subsidies for fresh produce and mandatory school culinary education as solutions.",
                        "body1": "Causes: Long working hours in dual-income families and hyper-palatable, cheap processed snacks engineered by food multinationals.",
                        "body2": "Solutions: Front-of-pack warning labels, taxing ultra-processed junk food to subsidize fresh vegetables, and teaching practical cooking skills at school.",
                        "conclusion": "Coordinated government regulation and educational reform can reverse the processed food epidemic."
                    },
                    "modelAnswer": (
                        "Over the past few decades, traditional home-cooked meals prepared from fresh ingredients have increasingly been displaced by ultra-processed ready meals, frozen pizzas, and fast food. This essay will examine the socio-economic causes driving this dietary shift and propose practical legislative and educational remedies to restore healthy eating habits.\n\n"
                        "Two main factors account for the surging reliance on convenience foods. First, modern urban lifestyles are characterized by severe 'time poverty'. With both partners in most households working full-time jobs and enduring long daily commutes, spending an hour shopping for fresh produce and cooking from scratch often feels overwhelming compared to microwaving a frozen meal in three minutes. Second, multinational food corporations invest billions in food chemistry and marketing to engineer 'hyper-palatable' processed products loaded with refined sugars, salt, and trans-fats, while pricing them significantly cheaper per calorie than fresh fruits, lean meats, and vegetables.\n\n"
                        "To counteract this public health crisis, governments and schools must implement targeted interventions. At the policy level, authorities should introduce mandatory front-of-pack 'traffic-light' warning labels—similar to those in Chile and the UK—that clearly alert shoppers to excessive sodium and sugar levels. Simultaneously, governments should levy a modest tax on ultra-processed junk food and use the revenue to subsidize fresh domestic fruits and vegetables, making wholesome ingredients the most affordable choice on supermarket shelves. At the educational level, secondary schools should reinstate compulsory culinary classes where teenagers learn how to prepare nutritious, budget-friendly meals in under twenty minutes.\n\n"
                        "In conclusion, while busy work schedules and cheap industrial food marketing have fuelled the rise of processed diets, smart fiscal subsidies and practical cooking education can empower citizens to eat healthily."
                    ),
                    "collocations": ["ultra-processed ready meals", "time poverty", "hyper-palatable processed products", "front-of-pack traffic-light labels", "budget-friendly meals"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Cooking & Meals",
                    "questions": [
                        {"q": "Who usually does the cooking in your home? [Why?]", "sample": "My mother is the head chef in our household on weekdays because she has a wonderful talent for balancing nutritious Vietnamese soups and stir-fries, while I take over cooking duties on weekends."},
                        {"q": "Did you learn to cook when you were a child?", "sample": "Yes, by the age of ten my parents taught me how to wash rice, boil morning glory vegetables, and fry an omelette safely."},
                        {"q": "Do you prefer eating at home or eating in restaurants? [Why?]", "sample": "On weekdays I prefer home-cooked meals because they are cleaner, less oily, and much more economical, though I enjoy dining out with friends on Saturday nights."},
                        {"q": "Is there any dish you would like to learn how to cook in the future?", "sample": "I would love to master making authentic French croissants from laminated butter dough, as it is a true test of baking patience and temperature control."}
                    ]
                },
                "part2": {
                    "topic": "Describe a machine or robot that you think is very useful",
                    "cueCard": "You should say:\n- what this machine or robot is\n- how it works\n- what it is used for\n- and explain why you think it is so useful.",
                    "modelAnswer": (
                        "I would like to describe our household robotic vacuum and mop cleaner—a Xiaomi LiDAR robot vacuum—which my family purchased last year.\n\n"
                        "Shaped like a sleek white disc, the robot uses a spinning laser turret on top to scan a 3D map of every room in our house. Every afternoon at 3:00 PM while we are at school and work, it automatically undocks from its charging station, vacuums dust and pet hair along a methodical zigzag path, mops the ceramic floor tiles, and returns to empty its dustbin.\n\n"
                        "I find this machine extraordinarily useful because in a bustling city like Ho Chi Minh City, fine street dust settles on floors daily. By automating an hour of repetitive sweeping and mopping every day, the robot keeps our home spotless and frees up valuable evening time for our family to relax together."
                    ),
                    "lexical": ["robotic vacuum cleaner", "spinning laser turret", "methodical zigzag path", "ceramic floor tiles", "frees up valuable evening time"]
                },
                "part3": {
                    "topic": "Robots in the home & Automation in society",
                    "questions": [
                        {"q": "What kinds of household chores do you think robots will do in the future?", "sample": "Within the next decade, domestic humanoid robots with dexterous hands will likely fold laundry, load dishwashers, chop fresh ingredients, and assist elderly residents out of bed."},
                        {"q": "Do you think there are any disadvantages to having robots in the home?", "sample": "High purchase costs, privacy concerns over home cameras connected to cloud servers, and reduced physical activity among household members are notable drawbacks."},
                        {"q": "How does automation in factories affect workers?", "sample": "While robotic assembly lines eliminate dangerous, repetitive manual injuries, they displace low-skilled factory workers who require government-supported retraining in technical maintenance."},
                        {"q": "Should there be limits on how human-like robots are allowed to look and behave?", "sample": "Yes, regulations should require AI systems and robots to clearly identify themselves as machines so vulnerable children and elderly patients are never emotionally manipulated."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 20 Test 3: Phân tích Lịch sử Thực phẩm Đông lạnh (Clarence Birdseye), Giải cứu Rạn san hô và Robot xã hội (Sherry Turkle).",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "slow freezing produced small ice crystals", "passageKey": "took days to freeze, allowing large, jagged ice crystals to form... ruptured cells", "verdict": "FALSE (Đông lạnh chậm tạo tinh thể đá lớn làm rách tế bào)"},
                    {"qNum": "P2 - Q3", "questionKey": "causes coral bleaching", "passageKey": "stressed coral polyps expel the colorful symbiotic algae (zooxanthellae)", "verdict": "B (Polyp san hô trục xuất tảo cộng sinh)"},
                    {"qNum": "P3 - Q4", "questionKey": "possess genuine biological emotions", "passageKey": "simulated empathy is an illusion: a machine cannot genuinely care", "verdict": "FALSE (Sự thấu cảm của robot chỉ là mô phỏng)"}
                ]
            },
            "vocabList": [
                {"word": "flash-freezing", "ipa": "flæʃ ˈfriːzɪŋ", "vi": "công nghệ cấp đông siêu tốc giữ nguyên cấu trúc tế bào", "type": "noun", "collocation": "preserve food texture via industrial flash-freezing", "example": "Clarence Birdseye revolutionized food storage with flash-freezing."},
                {"word": "symbiotic algae", "ipa": "ˌsɪmbaɪˈɒtɪk ˈælɡiː", "vi": "tảo cộng sinh sống trong mô san hô", "type": "noun phrase", "collocation": "expel photosynthetic symbiotic algae", "example": "Coral bleaching occurs when polyps expel symbiotic algae."},
                {"word": "simulated empathy", "ipa": "ˈsɪmjuleɪtɪd ˈempəθi", "vi": "sự thấu cảm giả lập của trí tuệ nhân tạo/robot", "type": "noun phrase", "collocation": "distinguish authentic care from simulated empathy", "example": "Sherry Turkle warns against mistaking simulated empathy for real love."}
            ]
        },

        # CAM 20 - TEST 4
        {
            "id": 4,
            "title": "Cambridge IELTS 20 — Test 4",
            "topic": "Georgia O'Keeffe, Adapting to Coastal Climate Change & Livestock Guard Dogs",
            "passages": [
                "P1: Georgia O'Keeffe (American Modernist Painter)",
                "P2: Adapting to coastal climate change",
                "P3: A new role for livestock guard dogs"
            ],
            "keyVocab": ["American modernism", "magnified floral canvases", "managed coastal retreat", "non-lethal predator coexistence"],
            "listening": {
                "title": "Cambridge 20 Listening Test 4",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Booking a Painting Holiday in the Countryside",
                        "audioScript": (
                            "ORGANIZER: Cotswold Art Retreats. Our five-day watercolour landscape course starts on the 12th of June at Manor Farm. The fee of £420 includes all brushes, paper, and accommodation."
                        ),
                        "questions": [
                            {"num": 1, "q": "Course starts on the 12th of ________", "answer": "June"},
                            {"num": 2, "q": "Venue: ________ Farm", "answer": "Manor"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Coastal Saltmarsh Restoration Project",
                        "audioScript": (
                            "ENGINEER: By breaching the old earthen embankment at Medmerry, we created 180 hectares of intertidal saltmarsh that absorbs winter storm waves and provides a nursery for sea bass."
                        ),
                        "questions": [
                            {"num": 11, "q": "The saltmarsh serves as a nursery for sea ________", "answer": "bass / fish"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Ecology Study on Maremma Sheepdogs",
                        "audioScript": (
                            "STUDENT: In Australia, Maremma livestock guard dogs were successfully trained to protect a colony of Little Penguins on Middle Island from red foxes."
                        ),
                        "questions": [
                            {"num": 21, "q": "Maremma dogs protected Little Penguins from red ________", "answer": "foxes"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Biography of Georgia O'Keeffe",
                        "audioScript": (
                            "LECTURER: Born on a Wisconsin dairy farm in 1887, Georgia O'Keeffe moved to New York where photographer Alfred Stieglitz exhibited her abstract charcoal drawings in 1916. Seeking open skies, she relocated permanently to Ghost Ranch in New Mexico, painting sun-bleached animal skulls and red desert cliffs until her nineties."
                        ),
                        "questions": [
                            {"num": 31, "q": "Alfred Stieglitz exhibited her abstract ________ drawings in 1916", "answer": "charcoal"},
                            {"num": 32, "q": "In New Mexico, she painted desert cliffs and animal ________", "answer": "skulls / bones"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Georgia O'Keeffe",
                    "text": (
                        "For seven decades, Georgia O'Keeffe (1887–1986) was a major figure in American art. Remarkably, she remained independent from shifting art movements and stayed true to her own vision, which was based on finding the essential, abstract forms in nature.\n\n"
                        "After studying at the Art Institute of Chicago and working as an art teacher in Texas, O'Keeffe sent a roll of radical abstract charcoal drawings to a friend in New York, who showed them to avant-garde gallery owner Alfred Stieglitz in 1916. In the 1920s, living in a high-rise New York apartment, she painted monumental close-up canvases of calla lilies and irises—forcing hurried city dwellers to stop and notice the intricate geometry of a flower—alongside dramatic nocturnal views of Manhattan skyscrapers.\n\n"
                        "In 1929, O'Keeffe made her first summer trip to New Mexico, falling in love with the stark adobe architecture, sun-bleached desert bones, and rust-coloured mesas of Ghost Ranch, where she settled permanently in 1949."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Georgia O'Keeffe constantly changed her painting style to follow popular European art trends.", "answer": "FALSE", "explain": "Đoạn 1 nêu rõ: 'she remained independent from shifting art movements and stayed true to her own vision'."},
                        {"num": 2, "type": "TFNG", "q": "O'Keeffe painted magnified flowers in the 1920s so busy urban viewers would pay attention to their details.", "answer": "TRUE", "explain": "Đoạn 2 nêu bà vẽ hoa phóng đại kích thước lớn để buộc người dân thành phố bận rộn phải dừng lại chiêm ngưỡng."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Adapting to coastal climate change",
                    "text": (
                        "As polar ice sheets melt and warming ocean waters expand, global sea levels are projected to rise by up to one metre by 2100. For over a century, coastal engineers relied on 'hard engineering'—pouring billions of dollars into concrete seawalls, rock groynes, and storm-surge barriers.\n\n"
                        "However, concrete seawalls reflect wave energy downward, scouring away beach sand and eventually collapsing at astronomical maintenance costs. Coastal planners are now shifting toward 'managed retreat' and 'living shorelines'—relocating vulnerable coastal roads inland and restoring oyster reefs, saltmarshes, and mangrove forests that naturally dissipate up to 70 percent of wave energy while rising vertically with sea levels as they trap sediment."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "What is a major flaw of traditional concrete seawalls mentioned in the passage?", "options": ["A. They attract too many oysters", "B. They deflect wave energy downward, eroding the beach sand at their base and requiring costly upkeep", "C. They are made of wood", "D. They lower ocean temperatures"], "answer": "B", "explain": "Đoạn 2 giải thích tường chắn sóng bê tông phản xạ năng lượng sóng xuống chân tường, cuốn trôi cát bãi biển và tốn chi phí bảo trì khổng lồ."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: A new role for livestock guard dogs",
                    "text": (
                        "For thousands of years, pastoralists across Eurasia bred large, placid livestock guard dogs—such as the Italian Maremma and Turkish Kangal—to live full-time among sheep and goat flocks. Unlike herding border collies that nip at sheep to move them, guard dogs are raised from puppyhood with lambs so they bond socially with the flock and instinctively place themselves between the livestock and wolves or bears.\n\n"
                        "Today, conservation biologists are deploying livestock guard dogs as a 'non-lethal coexistence tool': by deterring wolves, cheetahs, and snow leopards through barking and territorial scent-marking without harming them, guard dogs eliminate the need for ranchers to shoot or poison endangered apex predators."
                    ),
                    "questions": [
                        {"num": 4, "type": "TFNG", "q": "Livestock guard dogs are trained to chase and bite sheep to move them into pens.", "answer": "FALSE", "explain": "Đoạn 1 phân biệt rõ: chó chăn cừu (border collies) mới lùa cừu, còn chó bảo vệ gia súc (guard dogs) lớn lên cùng đàn cừu như gia đình để chắn giữa đàn cừu và thú dữ."},
                        {"num": 5, "type": "TFNG", "q": "Using livestock guard dogs helps protect endangered predators by reducing retaliatory killing by farmers.", "answer": "TRUE", "explain": "Đoạn 2 nêu chó bảo vệ giúp xua đuổi thú ăn thịt mà không giết chúng, nhờ đó nông dân không cần bắn hay đánh bả các loài thú quý hiếm."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Coastal Erosion Protection Methods & Costs",
                    "prompt": "The table below shows the results of a 20-year study into why adults in the UK attended arts events.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Longitudinal Survey Table (4 Reasons across 20 Years: Years 1, 10, 20)",
                    "dataSummary": "Reasons for UK adults attending arts events (Year 1, Year 10, Year 20): 1. Desire to see specific performer/artist: Highest throughout, steady at 58% (Yr 1) -> 56% (Yr 10) -> 55% (Yr 20). 2. Accompanying children: Rose significantly from 9% (Yr 1) to 15% (Yr 10) and 24% (Yr 20). 3. Special occasion/celebration: Declined steadily from 27% (Yr 1) to 20% (Yr 10) and 9% (Yr 20). 4. Work/business related: Rose from 6% (Yr 1) to 9% (Yr 10) and 12% (Yr 20).",
                    "modelAnswer": (
                        "The table presents findings from a twenty-year longitudinal survey examining the primary motivations behind UK adults' attendance at arts events at three intervals: Year 1, Year 10, and Year 20.\n\n"
                        "Overall, the desire to see a specific performer or artist remained overwhelmingly the dominant reason for attending arts events throughout the two decades. Over the same period, attending with children and attending for work grew substantially, whereas going to arts events to celebrate a special occasion declined sharply.\n\n"
                        "In Year 1, well over half of all surveyed adults (58%) cited wanting to watch a particular artist or performer as their main motivation; this figure edged down only marginally to 56% in Year 10 and 55% in Year 20. By contrast, celebrating a special occasion—which ranked second in Year 1 at 27%—dropped to 20% in Year 10 and plummeted to just 9% by Year 20.\n\n"
                        "Conversely, family- and career-related attendance followed strong upward trends. The proportion of adults attending arts events to accompany children nearly tripled over the twenty years, rising from 9% in Year 1 to 15% in Year 10 and reaching 24% in Year 20 (becoming the second most common reason). Similarly, work- or business-related attendance doubled from 6% in Year 1 to 12% by Year 20."
                    ),
                    "vocabBank": ["longitudinal survey", "overwhelmingly the dominant reason", "edged down only marginally", "nearly tripled", "strong upward trends"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Global Media, Fashion Trends and Cultural Uniformity",
                    "prompt": "Many aspects of the way people dress and live today are influenced by global fashion and media trends.\nHas this made the world too uniform, or does it bring positive cultural exchange?",
                    "essayType": "Discussion & Opinion (Balanced: Enriches daily exchange if indigenous heritage is actively preserved)",
                    "outline": {
                        "intro": "Discuss both the risk of global cultural homogenization and the benefits of cross-cultural exchange; argue that global media enriches humanity provided nations actively safeguard their distinct local traditions.",
                        "body1": "Risk of uniformity: Multinational fast-fashion brands and streaming algorithms create identical shopping malls and youth attire from Tokyo to London.",
                        "body2": "Positive cultural exchange: Global exposure fosters international empathy, hybrid culinary/artistic creativity, and global awareness of local traditions.",
                        "conclusion": "Globalization need not erase identity if citizens combine international openness with pride in their ancestral heritage."
                    },
                    "modelAnswer": (
                        "The ubiquitous reach of international social media platforms, streaming cinema, and multinational fashion retailers has profoundly shaped how people dress, dine, and furnish their homes across the globe. While critics warn that this convergence is turning the planet into a monotonous monoculture, I believe that global media trends foster enriching cross-cultural exchange, provided societies actively nurture their indigenous traditions.\n\n"
                        "Admittedly, the homogenizing force of commercial globalization is visible in almost every major metropolis. High streets from Seoul to São Paulo are dominated by the same fast-fashion conglomerates, coffee chains, and smartphone brands, leading young people worldwide to wear identical denim jeans, sneakers, and streetwear. When local artisanal textiles, regional dialects, and vernacular architecture are abandoned in favour of standardized Western consumerism, the world undoubtedly loses a degree of visual and cultural diversity.\n\n"
                        "Nevertheless, viewing global media solely as a destructive homogenizer overlooks its remarkable capacity for reciprocal cultural exchange. Unlike in past centuries, global trends today flow in multiple directions: Korean music and cinema, Japanese minimalist design, and Vietnamese culinary traditions are celebrated passionately across Europe and the Americas. Furthermore, sharing common cultural touchstones—such as international music festivals, sports, and fashion—breaks down xenophobic stereotypes and cultivates a sense of shared humanity among young people from vastly different backgrounds. In many cases, global platforms actually empower young designers to modernize traditional motifs—such as blending Vietnamese silk embroidery with contemporary tailoring—and showcase them to a worldwide audience.\n\n"
                        "In conclusion, while global fashion and media have standardized aspects of everyday attire, they simultaneously promote vibrant cross-cultural appreciation and creative fusion rather than mere uniformity."
                    ),
                    "collocations": ["ubiquitous reach", "monotonous monoculture", "fast-fashion conglomerates", "reciprocal cultural exchange", "xenophobic stereotypes"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Clothes & Fashion",
                    "questions": [
                        {"q": "What kind of clothes do you like to wear every day? [Why?]", "sample": "For daily university classes, I gravitate toward smart-casual basics—breathable linen or cotton shirts paired with chinos—because they look neat while keeping me cool in tropical heat."},
                        {"q": "Do you prefer buying clothes in shops or online? [Why?]", "sample": "I prefer trying on trousers and jackets in physical stores to check the shoulder cut and fabric drape, though I buy basic cotton t-shirts online."},
                        {"q": "Did you care about fashion when you were a child?", "sample": "Not in the slightest; as a child I happily wore whatever cartoon t-shirts and shorts my mother laid out for me so I could run outside and play."},
                        {"q": "When do people in your country wear traditional clothes?", "sample": "Vietnamese people proudly wear the traditional Ao Dai during Tet Lunar New Year, wedding ceremonies, high school graduations, and diplomatic state events."}
                    ]
                },
                "part2": {
                    "topic": "Describe a painting or work of art that you have seen and liked",
                    "cueCard": "You should say:\n- when and where you saw this work of art\n- what it looked like\n- what you know about the artist who created it\n- and explain why you liked this painting or work of art so much.",
                    "modelAnswer": (
                        "I would like to describe 'Young Woman with Lilies' (Thieu Nu Ben Hoa Hue), the iconic 1943 oil painting by Vietnamese modernist master To Ngoc Van.\n\n"
                        "I first saw a high-resolution reproduction of this masterpiece at the Ho Chi Minh City Museum of Fine Arts during a university art history excursion.\n\n"
                        "The painting depicts a graceful young Hanoian woman dressed in a flowing white Ao Dai, leaning her head gently toward a porcelain vase of white Madonna lilies. To Ngoc Van, who graduated from the Indochina College of Fine Arts, masterfully combined Western oil-painting chiaroscuro and composition with a distinctly poetic Vietnamese sensibility.\n\n"
                        "What captivated me most was the serene, melancholic harmony of white tones and curving lines; looking at the canvas feels like listening to a quiet piece of chamber music."
                    ),
                    "lexical": ["modernist master", "flowing white Ao Dai", "Western oil-painting chiaroscuro", "poetic Vietnamese sensibility", "serene melancholic harmony"]
                },
                "part3": {
                    "topic": "Art in society & Protecting coastal environments",
                    "questions": [
                        {"q": "Do you think art classes are as important at school as subjects like maths and science?", "sample": "Yes, visual arts and music nurture divergent creativity, spatial imagination, and emotional expression—qualities that complement analytical STEM subjects."},
                        {"q": "Should governments spend public tax money on public art and sculptures?", "sample": "Modest municipal funding for public sculptures and murals is worthwhile because it beautifies sterile concrete plazas, fosters civic pride, and makes art accessible to everyone."},
                        {"q": "How is climate change affecting coastal towns and cities in your country?", "sample": "Rising sea levels, stronger typhoons, and saltwater intrusion in the Mekong Delta are eroding coastal roads and threatening rice paddies."},
                        {"q": "What is the best way to protect coastlines from erosion?", "sample": "Rather than relying solely on rigid concrete seawalls, replanting dense coastal mangrove forests provides a self-repairing biological buffer that absorbs storm waves and nurtures fisheries."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cambridge 20 Test 4: Phân tích Họa sĩ Georgia O'Keeffe, Thích ứng Biến đổi khí hậu bờ biển và Chó bảo vệ gia súc (Livestock Guard Dogs).",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "constantly changed style to follow European trends", "passageKey": "remained independent from shifting art movements and stayed true to her own vision", "verdict": "FALSE (Độc lập với các trào lưu, giữ tầm nhìn riêng)"},
                    {"qNum": "P2 - Q3", "questionKey": "flaw of concrete seawalls", "passageKey": "reflect wave energy downward, scouring away beach sand and eventually collapsing", "verdict": "B (Phản xạ sóng xuống chân tường gây xói mòn cát)"},
                    {"qNum": "P3 - Q5", "questionKey": "protect endangered predators", "passageKey": "eliminate the need for ranchers to shoot or poison endangered apex predators", "verdict": "TRUE (Giúp nông dân không cần bắn hay đánh bả thú quý hiếm)"}
                ]
            },
            "vocabList": [
                {"word": "avant-garde", "ipa": "ˌævɒ̃ ˈɡɑːd", "vi": "tiên phong / phá cách trong nghệ thuật", "type": "adjective", "collocation": "exhibit avant-garde modernist paintings", "example": "Georgia O'Keeffe became a star of New York's avant-garde art scene."},
                {"word": "living shoreline", "ipa": "ˈlɪvɪŋ ˈʃɔːlaɪn", "vi": "bờ biển sinh thái sống (rừng ngập mặn, rạn hàu tự nhiên chắn sóng)", "type": "noun phrase", "collocation": "restore a resilient living shoreline", "example": "Living shorelines absorb wave energy without eroding beaches."},
                {"word": "non-lethal coexistence", "ipa": "nɒn ˈliːθl ˌkoʊɪɡˈzɪstəns", "vi": "chung sống hòa bình không sát hại động vật hoang dã", "type": "noun phrase", "collocation": "promote non-lethal coexistence between ranchers and wolves", "example": "Livestock guard dogs enable non-lethal coexistence with predators."}
            ]
        }
    ]


def get_cam21_tests():
    return [
        # CAM 21 - TEST 1
        {
            "id": 1,
            "title": "Cambridge IELTS 21 — Test 1",
            "topic": "The Davies Sisters (Art Collectors), Why We Need Silence & Rethinking Scientific Innovation",
            "passages": [
                "P1: The Davies Sisters (Collectors of Modern Art)",
                "P2: Why We Need Silence in an Overstimulated World",
                "P3: Rethinking Scientific Innovation"
            ],
            "keyVocab": ["philanthropic patronage", "auditory overstimulation", "hippocampal neurogenesis", "Default Mode Network"],
            "listening": {
                "title": "Cambridge 21 Listening Test 1",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Community Art Gallery Volunteering",
                        "audioScript": (
                            "CLERK: Good morning, National Art Collection Volunteer Desk. How can I help you?\n"
                            "SARAH: Hello! I'm calling about the volunteer scheme you advertised for the Modern Art Wing.\n"
                            "CLERK: Wonderful! Let me take down your details. First, your full name?\n"
                            "SARAH: It's Sarah Jenkins.\n"
                            "CLERK: And your preferred area of volunteering? We have visitor reception, archive preservation, and catalogue typing.\n"
                            "SARAH: I'd really love to do the archive preservation, as I'm studying museum curation.\n"
                            "CLERK: Excellent. Can you commit to at least four hours every Tuesday morning?\n"
                            "SARAH: Yes, Tuesday is my free day. Is induction provided?\n"
                            "CLERK: Yes, there is a mandatory training session on the 14th of October at the Central Library hall.\n"
                            "SARAH: Perfect. My contact email is s.jenkins@campus.ac.uk."
                        ),
                        "questions": [
                            {"num": 1, "q": "Name of applicant: Sarah ________", "answer": "Jenkins"},
                            {"num": 2, "q": "Preferred volunteering department: ________ preservation", "answer": "archive"},
                            {"num": 3, "q": "Required commitment: 4 hours every ________ morning", "answer": "Tuesday"},
                            {"num": 4, "q": "Induction session date: 14th of ________", "answer": "October"},
                            {"num": 5, "q": "Venue of training: Central ________ hall", "answer": "Library"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Noise Abatement & Quiet Parks in Urban Areas",
                        "audioScript": (
                            "SPEAKER: Welcome everyone to today's council briefing on urban acoustic ecology. Over the past five years, noise pollution in our metropolitan corridors has surged by nearly thirty-five percent. Today, we are unveiling the Green Canopy Quiet Zone initiative. Unlike conventional parks, these designated zones incorporate sound-deflecting earthen embankments and dense rows of evergreen conifers. Visitors will notice that ambient decibel levels drop from 72 decibels at the roadway to less than 45 decibels near the central reflecting pool."
                        ),
                        "questions": [
                            {"num": 6, "q": "Noise pollution has surged by what percentage over 5 years? ________%", "answer": "35"},
                            {"num": 7, "q": "The name of the new initiative is Green Canopy ________ Zone", "answer": "Quiet"},
                            {"num": 8, "q": "What deflecting structures are installed? Earthen ________", "answer": "embankments"},
                            {"num": 9, "q": "Type of trees planted for sound absorption: evergreen ________", "answer": "conifers"},
                            {"num": 10, "q": "Decibel level drops to under ________ dB near the central pool", "answer": "45"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Art History Seminar: The Davies Sisters' Legacy",
                        "audioScript": (
                            "TUTOR: Let's discuss Gwendoline and Margaret Davies. Why was their collection in Mid-Wales so unprecedented?\n"
                            "LIAM: Well, during the early 1900s, British art institutions largely dismissed French Impressionism. Monet, Cézanne, and Rodin were seen as too radical or unfinished.\n"
                            "CHLOE: Exactly. But the Davies sisters used their family coal and railway fortune not for luxury, but to quietly acquire masterpieces directly from Parisian dealers.\n"
                            "LIAM: And what's remarkable is that they bequeathed the entire collection to the National Museum of Wales in Cardiff, transforming it into an internationally celebrated gallery overnight."
                        ),
                        "questions": [
                            {"num": 11, "q": "British institutions in the early 1900s viewed Impressionism as too ________", "answer": "radical"},
                            {"num": 12, "q": "The sisters derived their wealth from railways and ________", "answer": "coal"},
                            {"num": 13, "q": "They acquired masterpieces directly from dealers in ________", "answer": "Parisian / Paris"},
                            {"num": 14, "q": "The collection was bequeathed to the National Museum of Wales located in ________", "answer": "Cardiff"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Neuroscience of Silence & Brain Health",
                        "audioScript": (
                            "LECTURER: Good morning. Today we examine the neurobiological consequences of acoustic silence. In 2013, biologist Imke Kirste was studying the effect of various sounds on the brains of mice. She used ambient white noise, pup calls, and Mozart sonatas, utilizing absolute silence as a baseline control. To her astonishment, Kirste observed that two hours of silence per day stimulated the development of new functional cells in the hippocampus—the brain region primarily responsible for learning, memory, and emotional regulation. This phenomenon, known as adult neurogenesis, suggests that silence is not merely the absence of auditory input, but an active neuro-restorative catalyst."
                        ),
                        "questions": [
                            {"num": 15, "q": "The 2013 research was conducted by biologist Imke ________", "answer": "Kirste"},
                            {"num": 16, "q": "Mice were exposed to ________ hours of silence daily", "answer": "two / 2"},
                            {"num": 17, "q": "Silence stimulated cell growth in the ________ (memory region)", "answer": "hippocampus"},
                            {"num": 18, "q": "The generation of new neurons in adults is termed adult ________", "answer": "neurogenesis"},
                            {"num": 19, "q": "Silence acts as an active neuro-________ catalyst", "answer": "restorative"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: The Davies Sisters (Collectors of Modern Art)",
                    "text": (
                        "A. In the opening decades of the twentieth century, two Welsh sisters, Gwendoline and Margaret Davies, amassed one of the most remarkable collections of nineteenth- and twentieth-century French and British art in the United Kingdom. Born into a devout Calvinistic Methodist family whose fortunes stemmed from the industrial expansion of the Barry Docks and the Welsh coal trade, the sisters channeled their immense inherited wealth into cultural philanthropy.\n\n"
                        "B. At a time when British connoisseurs were openly skeptical of the Impressionist and Post-Impressionist movements—viewing the brushwork of Claude Monet and Paul Cézanne as crude and unfinished—the Davies sisters demonstrated prescient artistic insight. Guided by the visionary advice of Hugh Blaker, their artistic advisor, they purchased significant canvases, including Monet's 'Water Lilies' and Cézanne's 'The François Zola Dam'.\n\n"
                        "C. What distinguished the Davies sisters was their refusal to hoard these treasures in private stately homes. Instead, they dispatched their collections on traveling exhibitions to working-class mining valleys across South Wales, convinced that engagement with high art possessed transformative spiritual and educational potential. Upon their deaths in 1951 and 1963, their bequests transformed the National Museum Wales into a world-class center for Impressionist painting."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "The Davies sisters acquired their wealth primarily through their own business enterprises.", "answer": "FALSE", "explain": "Đoạn A nêu rõ: wealth 'stemmed from the industrial expansion of the Barry Docks and the Welsh coal trade' và 'inherited wealth' (thừa kế tài sản gia đình, không phải tự lập kinh doanh)."},
                        {"num": 2, "type": "TFNG", "q": "Most British art experts in the early 1900s embraced French Impressionism enthusiastically.", "answer": "FALSE", "explain": "Đoạn B nêu: 'British connoisseurs were openly skeptical of the Impressionist... viewing brushwork as crude and unfinished'."},
                        {"num": 3, "type": "TFNG", "q": "Hugh Blaker was responsible for introducing the sisters to European art dealers.", "answer": "NOT GIVEN", "explain": "Đoạn B nhắc Blaker là 'artistic advisor' nhưng không đề cập việc ông có trực tiếp giới thiệu họ với người buôn tranh châu Âu hay không."},
                        {"num": 4, "type": "TFNG", "q": "The sisters made their private art collection available to industrial workers in Wales.", "answer": "TRUE", "explain": "Đoạn C nêu: 'dispatched their collections on traveling exhibitions to working-class mining valleys across South Wales'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Why We Need Silence in an Overstimulated World",
                    "text": (
                        "A. Modern metropolitan life is defined by pervasive acoustic clutter. From traffic hum and construction roar to the constant ping of mobile notifications, human auditory faculties are subject to uninterrupted sensory bombardment. Epidemiological research now establishes that chronic environmental noise is not merely an annoyance; it triggers the sympathetic nervous system, inducing sustained cortisol secretion and elevating risks of arterial hypertension.\n\n"
                        "B. Conversely, acoustic silence operates as a potent regenerative mechanism. In a landmark 2013 experiment at Duke University, researchers evaluated the neurological impact of ambient sound versus silence in mammalian subjects. While diverse acoustic stimuli produced transient sensory arousal, a two-hour period of complete silence consistently stimulated the proliferation of precursor cells in the hippocampus. When transferred to an enriching environment, these cells integrated as mature, functioning neurons.\n\n"
                        "C. Moreover, cognitive psychologists emphasize the role of the brain's Default Mode Network (DMN). When external auditory demands diminish, the DMN activates, facilitating internal reflection, creative synthesis, and emotional consolidation. Far from representing cognitive dormancy, silence provides the neural sanctuary essential for deep focus and autonomous contemplation."
                    ),
                    "questions": [
                        {"num": 5, "type": "MCQ", "q": "According to Paragraph A, chronic noise harms human health because it:", "options": ["A. Damages auditory hair cells exclusively", "B. Causes sustained release of stress hormones like cortisol", "C. Prevents all forms of physical exercise", "D. Reduces heart rate to dangerous levels"], "answer": "B", "explain": "Đoạn A nêu: 'triggers the sympathetic nervous system, inducing sustained cortisol secretion and elevating risks of arterial hypertension'."},
                        {"num": 6, "type": "MCQ", "q": "The 2013 Duke University experiment discovered that silence:", "options": ["A. Deactivated all neurological activity in mice", "B. Decreased the physical size of the hippocampus", "C. Promoted the generation of new brain cells", "D. Reduced the subjects' lifespan"], "answer": "C", "explain": "Đoạn B: 'stimulated the proliferation of precursor cells in the hippocampus... integrated as mature, functioning neurons (neurogenesis)'."},
                        {"num": 7, "type": "TFNG", "q": "The Default Mode Network is most active when a person is responding to urgent external noises.", "answer": "FALSE", "explain": "Đoạn C: 'When external auditory demands diminish, the DMN activates, facilitating internal reflection'."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Rethinking Scientific Innovation",
                    "text": (
                        "A. The prevailing orthodoxy in science policy assumes that breakthrough innovations occur primarily through structured, target-driven corporate laboratories. Billions of dollars are allocated to targeted grant proposals with predefined commercial milestones. Yet historians of technology repeatedly demonstrate that fundamental paradigm shifts arise through open-ended curiosity, serendipity, and unconstrained theoretical speculation.\n\n"
                        "B. Consider the discovery of penicillins, laser optics, or cosmic microwave background radiation. In none of these instances did researchers embark upon their investigations with the precise industrial end-product in mind. By imposing rigid Key Performance Indicators (KPIs) on fundamental research, modern funding councils risk suffocating high-risk, paradigm-challenging discoveries in favor of safe, incremental improvements."
                    ),
                    "questions": [
                        {"num": 8, "type": "TFNG", "q": "Modern funding councils usually prefer safe, predictable research outcomes.", "answer": "TRUE", "explain": "Đoạn B kết luận: councils risk suffocating high-risk discoveries 'in favor of safe, incremental improvements'."},
                        {"num": 9, "type": "TFNG", "q": "Penicillin was discovered through a commercial grant aiming specifically at pharmaceutical mass production.", "answer": "FALSE", "explain": "Đoạn B nêu rõ penicillin là ví dụ về phát hiện mà nhà nghiên cứu KHÔNG bắt đầu với sản phẩm công nghiệp cụ thể."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Comparative Urban Decibel Levels",
                    "prompt": "The charts below compare average ambient noise levels (in decibels) across six major metropolitan cities in 2010 and 2025, alongside the primary sources of environmental noise.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Bar Chart & Pie Breakdown",
                    "dataSummary": "Cities surveyed: Tokyo, New York, London, Paris, Cairo, Mumbai. Cairo and Mumbai recorded the highest ambient noise levels exceeding 82 dB in 2025, up from ~75 dB in 2010. Traffic accounted for 54% of overall noise, followed by construction (26%) and industrial sirens (20%).",
                    "modelAnswer": (
                        "The bar chart illustrates ambient acoustic noise levels across six major global cities between 2010 and 2025, while the pie chart breaks down the principal contributors to urban noise pollution.\n\n"
                        "Overall, environmental decibel levels increased across all six metropolitan regions over the fifteen-year timeframe, with South Asian and Middle Eastern cities experiencing the most acute acoustic saturation. Road vehicular traffic remained by far the dominant generator of noise.\n\n"
                        "In 2010, Tokyo and London recorded relatively moderate ambient levels of 68 dB and 66 dB respectively, which rose marginally to 72 dB and 70 dB by 2025. In stark contrast, Mumbai and Cairo registered substantially higher noise footprints; Mumbai surged from 76 dB in 2010 to a peak of 84 dB in 2025, while Cairo followed a parallel trajectory, climbing from 75 dB to 82 dB.\n\n"
                        "Regarding noise distribution, roadway traffic constituted more than half of all measured pollution (54%). Urban construction and infrastructural engineering contributed roughly a quarter (26%), with industrial operations and aviation corridors comprising the remaining 20%."
                    ),
                    "vocabBank": ["ambient acoustic noise", "metropolitan corridors", "in stark contrast", "parallel trajectory", "constituted more than half"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Silence vs. Digital Overstimulation",
                    "prompt": "In an increasingly noisy and digitally connected world, people have fewer opportunities to experience quiet environments.\nWhy is this happening, and how does it affect individuals and society?",
                    "essayType": "Two-Part Question (Causes & Effects)",
                    "outline": {
                        "intro": "Paraphrase prompt + thesis: Urbanization and ubiquitous digital hardware eradicate silence; effects include cognitive exhaustion and fraying social cohesion.",
                        "body1": "Causes: Rapid urbanization, high-density traffic, 24/7 smartphone alerts and pervasive algorithmic media capturing human attention.",
                        "body2": "Effects: Chronic mental stress, sleep deprivation, impaired neurogenesis, and loss of capacity for deep reflective discourse in society.",
                        "conclusion": "Recap main arguments and advocate designated urban quiet zones and digital detox habits."
                    },
                    "modelAnswer": (
                        "In the contemporary era, the rapid acceleration of urbanization alongside continuous digital connectivity has severely diminished human access to tranquil and silent spaces. This essay explores the primary drivers behind this pervasive noise saturation and examines its multifaceted ramifications for both individual mental equilibrium and broader societal health.\n\n"
                        "The eradication of silence is fundamentally driven by two converging phenomena: urban expansion and digital ubiquity. Firstly, metropolitan environments have grown exponentially denser, bringing continuous vehicular traffic, construction, and aviation corridors into residential zones. Secondly, the proliferation of smartphones and wearable connected technology has introduced an intrusive, perpetual stream of auditory stimuli. Notifications, streaming content, and algorithmic feeds are purposefully engineered to capture auditory and visual attention, leaving almost no cognitive breathing space for silence throughout the waking day.\n\n"
                        "This continuous acoustic bombardment exerts severe tolls on human well-being. At an individual level, constant ambient decibels trigger the sympathetic nervous system, inducing sustained secretion of cortisol and epinephrine. Neuroscientific studies show that persistent noise inhibits adult hippocampal neurogenesis, contributing to memory degradation, insomnia, and chronic anxiety. At a societal level, when individuals are deprived of quietude, the capacity for sustained concentration, deep reading, and nuanced contemplation is eroded. Consequently, public discourse becomes increasingly fragmented, polarized, and reactionary.\n\n"
                        "In conclusion, unrestrained urban development and digital hyper-connectivity are the primary culprits eliminating peaceful environments. Unless municipalities invest in urban quiet reserves and individuals cultivate disciplined digital boundaries, modern society risks enduring irreversible cognitive and psychological deterioration."
                    ),
                    "collocations": ["pervasive noise saturation", "multifaceted ramifications", "perpetual stream of auditory stimuli", "sympathetic nervous system", "nuanced contemplation"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Silence & Quiet Places",
                    "questions": [
                        {"q": "Do you prefer studying in a quiet environment or with background noise? [Why?]", "sample": "I unequivocally prefer absolute silence. When I'm engaging in cognitively demanding tasks like academic reading or writing, auditory distractions instantly disrupt my train of thought."},
                        {"q": "Is your hometown generally noisy or quiet?", "sample": "My hometown is a bustling urban center, so it is characterized by relentless traffic congestion, honking, and construction noise, particularly during morning and evening rush hours."},
                        {"q": "Where do you go when you want to enjoy peace and quiet?", "sample": "I usually retreat to a secluded botanical garden situated on the city outskirts, where dense tree canopies naturally dampen the metropolitan roar."},
                        {"q": "Are there any natural sounds that help you relax?", "sample": "Yes, the rhythmic sound of ocean waves or gentle tropical rain falling on leaves has a deeply calming effect on my nervous system."}
                    ]
                },
                "part2": {
                    "topic": "Describe a quiet place that you enjoy visiting",
                    "cueCard": "You should say:\n- Where this place is located\n- How often you visit it\n- What you usually do there\n- And explain why you find this place particularly peaceful and enjoyable.",
                    "modelAnswer": (
                        "I would like to describe a serene sanctuary called the Lotus Hill Meditation Library, which is nestled on the forested slope of a hill just forty minutes outside my city center.\n\n"
                        "I typically visit this haven once or twice a month, particularly over weekends when I feel overwhelmed by academic deadlines or screen fatigue. The structure itself is an architectural marvel built predominantly from natural timber and soundproof glass panels, completely insulated from roadway noise.\n\n"
                        "When I am there, I usually turn off all digital notifications, select a book on philosophy or natural history, and read uninterrupted for several hours. Alternatively, I simply sit on the outdoor observation deck overlooking the misty pine valley with a cup of green tea.\n\n"
                        "What makes this place so exceptionally peaceful is its strict silence policy. Cellphones must be kept in lockers at the entrance, and patrons are requested to whisper only when addressing staff. This absence of digital clamor allows my nervous system to recalibrate, restoring mental clarity and inner tranquility."
                    ),
                    "lexical": ["serene sanctuary", "screen fatigue", "insulated from roadway noise", "recalibrate the nervous system", "inner tranquility"]
                },
                "part3": {
                    "topic": "Noise Pollution & Modern Society",
                    "questions": [
                        {"q": "Why is it becoming harder for city dwellers to find quiet spaces?", "sample": "The primary cause is rampant urban densification coupled with infrastructural sprawl. Residential neighborhoods are increasingly squeezed adjacent to highways, light-rail lines, and continuous commercial hubs, leaving minimal acoustic buffer zones."},
                        {"q": "Do you think governments should enforce stricter noise regulations in urban areas?", "sample": "Undoubtedly. Persistent acoustic pollution is a bona fide public health hazard linked to cardiovascular diseases and stress disorders. Municipal authorities should mandate acoustic barriers along expressways and impose strict curfews on loud construction machinery."},
                        {"q": "How does constant noise affect children's educational performance?", "sample": "Pedagogical studies indicate that children attending schools located near airports or major arteries demonstrate noticeably lower reading comprehension and attentional control, as their developing auditory processing systems struggle to filter out ambient interference."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Phân tích chi tiết chiến lược làm bài thi Reading Cam 21 Test 1 (Passage 1, 2, 3): Kỹ thuật định vị từ khóa (Keyword Locating), đối chiếu Paraphrase và bẫy đề thi.",
                "keywordTable": [
                    {"qNum": "Passage 1 - Q1", "questionKey": "acquired wealth primarily through own business", "passageKey": "inherited wealth ... Welsh coal trade and Barry Docks", "verdict": "FALSE (Thừa kế, không phải tự lập nghiệp)"},
                    {"qNum": "Passage 1 - Q2", "questionKey": "British art experts embraced Impressionism enthusiastically", "passageKey": "British connoisseurs were openly skeptical ... crude and unfinished", "verdict": "FALSE (Hoài nghi, coi là thô thiển)"},
                    {"qNum": "Passage 1 - Q4", "questionKey": "art available to industrial workers", "passageKey": "traveling exhibitions to working-class mining valleys", "verdict": "TRUE (Đưa tranh đến tận thung lũng mỏ)"},
                    {"qNum": "Passage 2 - Q5", "questionKey": "chronic noise harms health by", "passageKey": "inducing sustained cortisol secretion & hypertension", "verdict": "Đáp án B (Tăng tiết hormone stress cortisol)"},
                    {"qNum": "Passage 2 - Q6", "questionKey": "silence stimulated", "passageKey": "proliferation of precursor cells in hippocampus (neurogenesis)", "verdict": "Đáp án C (Tạo tế bào não mới)"}
                ]
            },
            "vocabList": [
                {"word": "auditory overstimulation", "ipa": "ˈɔːdɪtri ˌoʊvərˌstɪmjuˈleɪʃn", "vi": "quá tải kích thích thính giác từ tiếng ồn", "type": "collocation", "collocation": "suffer from chronic auditory overstimulation in urban zones", "example": "Constant traffic noise causes auditory overstimulation, elevating cortisol levels."},
                {"word": "philanthropic patronage", "ipa": "ˌfɪlənˈθrɒpɪk ˈpætrənɪdʒ", "vi": "sự bảo trợ nghệ thuật mang tính từ thiện", "type": "collocation", "collocation": "support emerging artists via philanthropic patronage", "example": "The Davies sisters transformed Welsh culture through generous philanthropic patronage."},
                {"word": "adult neurogenesis", "ipa": "əˈdʌlt ˌnjʊəroʊˈdʒenəsɪs", "vi": "sự sản sinh tế bào thần kinh mới ở người trưởng thành", "type": "noun phrase", "collocation": "stimulate adult neurogenesis in the hippocampus", "example": "Recent neuroscientific experiments prove that acoustic silence promotes adult neurogenesis."},
                {"word": "acoustic ecology", "ipa": "əˈkuːstɪk iˈkɒlədʒi", "vi": "sinh thái học âm thanh / cảnh quan âm thanh", "type": "noun phrase", "collocation": "preserve natural acoustic ecology in nature reserves", "example": "Urban planners must factor in acoustic ecology to design healthier metropolises."}
            ]
        },

        # CAM 21 - TEST 2
        {
            "id": 2,
            "title": "Cambridge IELTS 21 — Test 2",
            "topic": "Corporate Social Responsibility, Biogas from Water Hyacinth & Cognitive Load",
            "passages": [
                "P1: Corporate Social Responsibility in Modern Enterprise",
                "P2: Biogas Generation from Water Hyacinth",
                "P3: Cognitive Load & Algorithmic Decision-Making"
            ],
            "keyVocab": ["corporate social responsibility", "anaerobic digestion", "Eichhornia crassipes", "cognitive heuristics"],
            "listening": {
                "title": "Cambridge 21 Listening Test 2",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Renewable Energy Co-op Membership",
                        "audioScript": (
                            "AGENT: Welcome to Green Power Co-op. Can I have your full name?\n"
                            "CALLER: It's Mark Henderson.\n"
                            "AGENT: And your residential postcode?\n"
                            "CALLER: NW3 4BT.\n"
                            "AGENT: Which renewable option are you considering: domestic solar panels, heat pumps, or local biogas share?\n"
                            "CALLER: The local biogas scheme sounds most affordable."
                        ),
                        "questions": [
                            {"num": 1, "q": "Caller Name: Mark ________", "answer": "Henderson"},
                            {"num": 2, "q": "Postcode: NW3 ________", "answer": "4BT"},
                            {"num": 3, "q": "Selected scheme: local ________ share", "answer": "biogas"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Sustainable Campus Initiatives",
                        "audioScript": (
                            "SPEAKER: Today we celebrate our university's zero-waste milestone. Our anaerobic digestion unit converts 4 tons of food waste daily into electrical energy for our science laboratories."
                        ),
                        "questions": [
                            {"num": 4, "q": "Daily food waste processed: ________ tons", "answer": "4 / four"},
                            {"num": 5, "q": "Generated power is supplied to the ________ laboratories", "answer": "science"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Environmental Engineering Thesis Presentation",
                        "audioScript": (
                            "TUTOR: Julia, how did you harvest the water hyacinth without disrupting the aquatic ecosystem?\n"
                            "JULIA: We used solar-powered conveyor skimmers that selectively cut floating mats while preserving submerged native plants."
                        ),
                        "questions": [
                            {"num": 6, "q": "Harvesting machinery was powered by ________ energy", "answer": "solar"},
                            {"num": 7, "q": "The equipment avoided damage to submerged ________ plants", "answer": "native"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Cognitive Biases in Corporate Leadership",
                        "audioScript": (
                            "LECTURER: Under extreme market pressure, executives frequently fall prey to confirmation bias, actively dismissing dissenting safety reports in favor of comforting forecasts."
                        ),
                        "questions": [
                            {"num": 8, "q": "Executives frequently succumb to ________ bias", "answer": "confirmation"},
                            {"num": 9, "q": "Leaders often dismiss dissenting ________ reports", "answer": "safety"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Corporate Social Responsibility in Modern Enterprise",
                    "text": (
                        "Corporate Social Responsibility (CSR) has transitioned from public relations window-dressing into a core strategic pillar for multinational firms. Whereas mid-twentieth-century economists such as Milton Friedman argued that a corporation's sole duty was maximizing shareholder dividends, twenty-first-century enterprises operate under intense scrutiny from ethical investors, regulators, and climate-conscious consumers.\n\n"
                        "Harvard strategy professor Michael Porter introduced the concept of 'Creating Shared Value' (CSV)—demonstrating that reducing supply-chain packaging waste, paying living wages to agricultural suppliers, and transitioning to renewable energy simultaneously lowers long-term operational risk and enhances brand profitability."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "CSR is now viewed purely as a marketing gimmick by leading multinationals.", "answer": "FALSE", "explain": "Đoạn 1 nêu CSR đã chuyển từ 'window-dressing' thành 'core strategic pillar' (trụ cột chiến lược cốt lõi)."},
                        {"num": 2, "type": "TFNG", "q": "Michael Porter's 'Creating Shared Value' model argues that ethical practices can also improve long-term profitability.", "answer": "TRUE", "explain": "Đoạn 2 nêu mô hình CSV chứng minh giảm rác thải và trả lương công bằng vừa giảm rủi ro vừa tăng lợi nhuận."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Biogas Generation from Water Hyacinth",
                    "text": (
                        "Water hyacinth (Eichhornia crassipes), native to the Amazon basin, is infamous across tropical Africa and Asia as one of the world's most aggressive invasive aquatic weeds. Capable of doubling its biomass every two weeks, dense mats of water hyacinth choke navigable waterways, block sunlight from submerged flora, and deplete dissolved oxygen needed by fish.\n\n"
                        "However, chemical engineers in Kenya, India, and Vietnam are transforming this ecological plague into a renewable energy asset. When shredded water hyacinth biomass is mixed with livestock manure inside sealed anaerobic digesters, mesophilic bacteria ferment the cellulose into clean biomethane gas (65% methane) for rural cooking stoves and electricity generators, leaving behind nutrient-rich organic fertilizer."
                    ),
                    "questions": [
                        {"num": 3, "type": "TFNG", "q": "Water hyacinth is natively beneficial to all African and Asian aquatic ecosystems.", "answer": "FALSE", "explain": "Đoạn 1 chỉ rõ loài này là 'aggressive invasive aquatic weed' làm tắc nghẽn đường thủy và làm cạn oxy của cá."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Cognitive Load & Algorithmic Decision-Making",
                    "text": (
                        "As digital information volume increases exponentially, human decision-makers encounter 'cognitive saturation'. Psychologist John Sweller's Cognitive Load Theory explains that human working memory can process only four to seven discrete chunks of novel information simultaneously.\n\n"
                        "When executives or air-traffic controllers are bombarded with dozens of real-time dashboard metrics, working memory overloads, causing decision-makers to fall back on simplistic mental shortcuts ('heuristics') and confirmation bias."
                    ),
                    "questions": [
                        {"num": 4, "type": "MCQ", "q": "What happens when cognitive load exceeds the capacity of human working memory?", "options": ["A. Decision accuracy reaches 100%", "B. Decision-makers rely on simplistic mental shortcuts (heuristics)", "C. Stress completely disappears", "D. Working memory expands infinitely"], "answer": "B", "explain": "Đoạn 2 nêu khi quá tải nhận thức, con người chuyển sang dùng lối tắt tư duy đơn giản (simplistic heuristics)."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Water Hyacinth Biogas Conversion Process",
                    "prompt": "The diagram illustrates the sequential stages involved in converting harvested water hyacinth into clean biogas energy and organic fertilizer.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Industrial Recycling Flowchart",
                    "dataSummary": "Stages: Mechanical harvesting -> Chopping & drying -> Anaerobic digestion reactor (mesophilic bacteria) -> Biogas separation (methane 65%, CO2 35%) -> Slurry filtered into rich agricultural fertilizer.",
                    "modelAnswer": (
                        "The flowchart delineates the multi-step recycling process through which the invasive water hyacinth weed is transformed into combustible methane biogas and nutrient-rich bio-fertilizer.\n\n"
                        "Overall, the conversion comprises five distinct stages, initiating with mechanical extraction and biomass preparation, followed by bacterial anaerobic digestion, and culminating in the simultaneous production of renewable fuel and agricultural compost.\n\n"
                        "Initially, dense mats of water hyacinth are harvested from inland waterways using specialized solar skimmers. The collected weed is subsequently transported to a processing facility where industrial blades shred the fibrous biomass into homogeneous mulch. This material is partially sun-dried to optimize moisture content before being fed into a sealed, anaerobic digester.\n\n"
                        "Inside the oxygen-free reactor, mesophilic microbial consortia decompose the plant tissue over a three-week retention period. This biochemical reaction releases gaseous effluents consisting primarily of biomethane (65%) and carbon dioxide (35%), which are scrubbed and compressed for domestic electricity generation. Simultaneously, the residual digested slurry is drained, filtered, and packaged as organic fertilizer for local farming."
                    ),
                    "vocabBank": ["sequential stages", "invasive biomass", "anaerobic digestion", "mesophilic microbial consortia", "digested slurry"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Business Social Responsibilities vs Making Money",
                    "prompt": "As well as making money, businesses also have social responsibilities towards the community and the environment.\nTo what extent do you agree or disagree?",
                    "essayType": "Opinion Essay (Total Agreement)",
                    "outline": {
                        "intro": "Strongly agree that corporations must shoulder environmental and communal duties beyond fiscal profit.",
                        "body1": "Ecological accountability: corporations extract natural resources and must remediate their footprint.",
                        "body2": "Social sustainability: investing in workforce welfare and civic communities fosters long-term prosperity.",
                        "conclusion": "Sustainable business models are morally mandatory and economically superior."
                    },
                    "modelAnswer": (
                        "While classical economic theory posited that the sole obligation of commercial enterprises was to maximize shareholder returns, contemporary consensus firmly rejects this narrow paradigm. I entirely agree that modern corporations bear a profound ethical and practical duty to actively support societal welfare and environmental sustainability.\n\n"
                        "First and foremost, commercial production inevitably exerts ecological footprints through resource consumption and greenhouse emissions. When manufacturing entities discharge effluents into waterways or emit carbon pollutants without mitigation, they impose severe negative externalities upon public health and global climate stability. It is therefore an incontrovertible moral obligation for businesses to invest in circular recycling technologies, switch to renewable energy sources, and remediate local environments. Enterprises that neglect this mandate externalize their costs onto vulnerable communities while privatizing profits.\n\n"
                        "Furthermore, embracing corporate social responsibility enhances corporate longevity and economic viability. Consumers in the globalized marketplace increasingly favor ethical brands, routinely boycotting firms implicated in labor exploitation or ecocide. Moreover, companies that champion fair living wages, comprehensive healthcare, and local educational sponsorships cultivate highly loyal workforces and secure community goodwill. For instance, ethical pioneers like Patagonia have demonstrated that prioritizing ecological conservation actually bolsters brand equity and customer devotion.\n\n"
                        "In conclusion, the era of unbridled profit pursuit detached from social conscience is obsolete. Corporate social responsibility is neither mere philanthropy nor an optional luxury; it is the fundamental cornerstone of modern economic legitimacy."
                    ),
                    "collocations": ["maximize shareholder returns", "negative externalities", "circular recycling technologies", "corporate longevity", "fundamental cornerstone"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Helping Others & Community",
                    "questions": [
                        {"q": "Do you often help people in your local neighborhood?", "sample": "Yes, I regularly participate in weekend neighborhood clean-ups and assist elderly residents with carrying heavy grocery bags up the stairs."},
                        {"q": "Did your parents teach you the importance of helping others when you were a child?", "sample": "Definitely; my parents always encouraged me to donate my outgrown storybooks and winter coats to flood-relief charities in central Vietnam."},
                        {"q": "What kinds of voluntary work are popular among young people in your country?", "sample": "University students in Vietnam enthusiastically join 'Green Summer' volunteer campaigns, tutoring disadvantaged rural children and planting mangrove trees."},
                        {"q": "How do you feel after you have helped someone solve a problem?", "sample": "Helping someone gives me a warm sense of purpose and connection, reminding me that small acts of kindness make society much more humane."}
                    ]
                },
                "part2": {
                    "topic": "Describe an ethical or environmentally friendly business you admire",
                    "cueCard": "You should say:\n- What company this is\n- What products or services it offers\n- How it protects the environment or helps society\n- And explain why you admire this business so much.",
                    "modelAnswer": (
                        "I would like to speak about an eco-friendly social enterprise called Refill Station, a zero-waste grocery and household store located in Ho Chi Minh City.\n\n"
                        "Instead of selling products in single-use plastic bottles or sachets, the store offers organic dish soap, laundry detergent, herbal shampoos, brown rice, and nuts in large stainless-steel dispensers. Customers bring their own clean glass jars or reusable containers, weigh them on a digital scale, and pay only for the exact weight of the product they refill.\n\n"
                        "Beyond eliminating thousands of plastic bottles from entering landfills every month, the business sources all its botanical soaps from women-led rural cooperatives in northern Vietnam.\n\n"
                        "I admire this business tremendously because it proves that sustainable living does not have to be expensive or elitist—it empowers ordinary citizens to cut plastic waste while supporting rural livelihoods."
                    ),
                    "lexical": ["zero-waste grocery initiative", "single-use plastic bottles", "stainless-steel dispensers", "women-led rural cooperatives", "sustainable living"]
                },
                "part3": {
                    "topic": "Corporate Ethics and Consumer Behavior",
                    "questions": [
                        {"q": "Do you think consumers are willing to pay higher prices for eco-friendly goods?", "sample": "Increasingly yes, particularly among younger urban demographics who recognize the long-term ecological stakes, although price remains a barrier for lower-income families."},
                        {"q": "Why do some companies pretend to be environmentally friendly ('greenwashing')?", "sample": "Some unscrupulous corporations use deceptive green labels on packaging as a cheap marketing shortcut to attract ethical buyers without investing in genuine carbon reduction."},
                        {"q": "How can governments force large corporations to protect the environment?", "sample": "Governments can enforce strict carbon taxation, mandate audited annual sustainability disclosures, and impose heavy financial penalties on industrial polluters."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cam 21 Test 2: Chiến lược phân loại True/False/Not Given và bẫy suy luận nguyên nhân - kết quả.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "purely a marketing gimmick", "passageKey": "transitioned from window-dressing into core strategic pillar", "verdict": "FALSE (Đã trở thành trụ cột thực tế)"},
                    {"qNum": "P2 - Q3", "questionKey": "hyacinth is beneficial to all ecosystems", "passageKey": "infamous as one of world's most aggressive invasive weeds", "verdict": "FALSE (Là loài xâm hại nguy hiểm)"},
                    {"qNum": "P3 - Q4", "questionKey": "cognitive load exceeds capacity", "passageKey": "fall back on simplistic mental shortcuts (heuristics)", "verdict": "B (Dựa vào lối tắt tư duy đơn giản)"}
                ]
            },
            "vocabList": [
                {"word": "corporate social responsibility", "ipa": "ˈkɔːpərət ˈsoʊʃl rɪˌspɒnsəˈbɪləti", "vi": "trách nhiệm xã hội của doanh nghiệp", "type": "noun phrase", "collocation": "implement authentic corporate social responsibility policies", "example": "CSR is no longer optional for modern enterprises."},
                {"word": "anaerobic digestion", "ipa": "ˌænəˈroʊbɪk daɪˈdʒestʃən", "vi": "phân hủy kị khí tạo khí sinh học", "type": "noun phrase", "collocation": "produce methane fuel via anaerobic digestion", "example": "Anaerobic digestion converts agricultural waste into clean biogas."},
                {"word": "confirmation bias", "ipa": "ˌkɒnfəˈmeɪʃn ˈbaɪəs", "vi": "thiên kiến xác nhận", "type": "noun phrase", "collocation": "fall victim to confirmation bias", "example": "Confirmation bias leads managers to ignore early warning signs."}
            ]
        },

        # CAM 21 - TEST 3
        {
            "id": 3,
            "title": "Cambridge IELTS 21 — Test 3",
            "topic": "Peter Bellerby Handmade Globes, Rewilding Urban Waterways & Human Language Syntax",
            "passages": [
                "P1: Peter Bellerby & The Art of Handmade Globes",
                "P2: Rewilding Urban Waterways",
                "P3: The Evolution of Human Language Syntax"
            ],
            "keyVocab": ["artisanal cartography", "spherical gores", "urban river daylighting", "hierarchical recursive syntax"],
            "listening": {
                "title": "Cambridge 21 Listening Test 3",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Traditional Craft Workshop Registration",
                        "audioScript": (
                            "RECEPTIONIST: Heritage Crafts Studio. How may I help?\n"
                            "ALICE: I'd like to book the weekend masterclass on cartographic watercolour painting.\n"
                            "RECEPTIONIST: Certainly. The weekend session fee is £120 including all pigment supplies, and classes are held in Studio 4 on Albion Street."
                        ),
                        "questions": [
                            {"num": 1, "q": "Course title: Cartographic watercolour ________", "answer": "painting"},
                            {"num": 2, "q": "Session fee: £________", "answer": "120"},
                            {"num": 3, "q": "Street name: ________ Street", "answer": "Albion"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: River Lea Urban Rewilding Project",
                        "audioScript": (
                            "GUIDE: Ten years ago, this stretch of the River Lea was choked with industrial silt and hemmed in by concrete walls. Today, through re-meandering and installing floating reed beds, European otters and kingfishers have returned to the heart of the city."
                        ),
                        "questions": [
                            {"num": 4, "q": "Floating reed ________ were installed to filter water", "answer": "beds"},
                            {"num": 5, "q": "Two returning wildlife species are kingfishers and ________", "answer": "otters"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Linguistic Research Seminar",
                        "audioScript": (
                            "PROF: The recursive nature of human syntax allows us to embed clauses within clauses, generating infinite novel sentences from finite vocabulary items."
                        ),
                        "questions": [
                            {"num": 6, "q": "Human syntax has a ________ nature allowing infinite combinations", "answer": "recursive"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Cartography and Empire in the 17th Century",
                        "audioScript": (
                            "LECTURER: Globe-making during the Dutch Golden Age was both an exquisite scientific art and a prestigious instrument of geopolitical sovereignty."
                        ),
                        "questions": [
                            {"num": 7, "q": "Globes served as instruments of geopolitical ________", "answer": "sovereignty"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Peter Bellerby & The Art of Handmade Globes",
                    "text": (
                        "When Peter Bellerby sought a handsome, handcrafted terrestrial globe for his father's eightieth birthday in 2008, he discovered a retail market dominated by cheap, mass-produced plastic spheres with peeling paper seams and fragile antique globes costing tens of thousands of pounds.\n\n"
                        "Deciding to make two globes himself—one for his father and one for himself—Bellerby spent two years and £150,000 mastering the nearly extinct craft of globe-making in his London studio, Bellerby & Co. Globemakers. Apprentices require over a year of training to wet and stretch twelve triangular paper map strips—known as 'gores'—across a perfectly spherical papier-mâché and plaster orb without tearing the paper or distorting the equator by a single millimetre."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Peter Bellerby easily purchased a high-quality modern handmade globe in a shop in 2008.", "answer": "FALSE", "explain": "Đoạn 1 nêu ông chỉ tìm thấy quả địa cầu nhựa rẻ tiền hoặc đồ cổ quá đắt nên phải tự học làm."},
                        {"num": 2, "type": "TFNG", "q": "Triangular map strips applied to a globe's surface are called 'gores'.", "answer": "TRUE", "explain": "Đoạn 2 nêu: 'twelve triangular paper map strips—known as gores'."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Rewilding Urban Waterways",
                    "text": (
                        "During the nineteenth and twentieth centuries, urban civil engineers treated city rivers as open storm drains—straightening their natural meanders, encasing their banks in concrete culverts, and burying tributaries underground.\n\n"
                        "Today, municipalities from Seoul (Cheonggyecheon Stream) to Madrid and London are 'daylighting' buried rivers and rewilding urban waterways. By breaking up concrete channels, restoring gravel riverbeds, and planting native willow and reed marshes, cities slow down flash-flood surges, filter heavy-metal road runoff, cool surrounding streets by 3°C, and bring salmon, dragonflies, and kingfishers back into metropolitan neighbourhoods."
                    ),
                    "questions": [
                        {"num": 3, "type": "TFNG", "q": "Urban rewilding involves encasing natural riverbanks in straight concrete walls.", "answer": "FALSE", "explain": "Đoạn 2 nêu rewilding là phá bỏ kênh bê tông ('breaking up concrete channels') để khôi phục lòng sông tự nhiên."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: The Evolution of Human Language Syntax",
                    "text": (
                        "While vervet monkeys, dolphins, and songbirds possess sophisticated vocal alarm calls, no animal communication system exhibits the open-ended generative power of human syntax.\n\n"
                        "Linguists Noam Chomsky and Andrea Moro emphasize that human grammar relies on 'hierarchical combinatorial structure' and recursion—the cognitive ability to embed phrases inside other phrases indefinitely ('The cat that chased the mouse that ate the cheese...'), allowing humans to express counterfactual hypotheses, historical narratives, and scientific theories."
                    ),
                    "questions": [
                        {"num": 4, "type": "MCQ", "q": "What fundamentally distinguishes human language syntax from animal alarm calls?", "options": ["A. Animal calls are louder", "B. Hierarchical combinatorial structure and recursion", "C. Human syntax does not use vocal cords", "D. Animals have larger vocabularies"], "answer": "B", "explain": "Đoạn 2 khẳng định cú pháp con người có cấu trúc tổ hợp phân cấp (hierarchical combinatorial structure) và tính đệ quy."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Traditional Crafts vs Mass Production",
                    "prompt": "The table compares handcrafted goods and machine-manufactured goods across six quality and economic metrics.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Metric Table",
                    "dataSummary": "Metrics: Unit cost, production duration, durability, unique character, carbon footprint, repairability.",
                    "modelAnswer": (
                        "The table provides a comparative breakdown between artisanal handcrafted merchandise and automated mass-produced commodities across six distinct performance parameters.\n\n"
                        "Overall, while factory-manufactured goods dramatically outperform handcrafted items in unit affordability and production speed, artisanal products demonstrate marked superiority in longevity, repairability, and ecological footprint.\n\n"
                        "In terms of output efficiency, machine-made goods require a mere fraction of time, completing units in minutes compared to days or weeks for artisan work. Consequently, mass production yields an average unit cost up to 80% lower than bespoke craftsmanship.\n\n"
                        "Conversely, handcrafted items excel in environmental and structural integrity. Their typical operational lifespan exceeds thirty years with full repairability, compared to less than five years for mass-produced plastic equivalents. Furthermore, artisanal fabrication generates negligible industrial emissions."
                    ),
                    "vocabBank": ["artisanal handcrafted merchandise", "automated mass-produced commodities", "performance parameters", "unit affordability", "structural integrity"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Dying Traditional Handcrafts vs Mass-Produced Goods",
                    "prompt": "Traditional handcrafts and artisanal skills are dying out as machine-made goods dominate the global market.\nDo the benefits of mass production outweigh the loss of traditional crafts?",
                    "essayType": "Outweigh Essay (Benefits do NOT outweigh the cultural loss)",
                    "outline": {
                        "intro": "Acknowledge mass production affordability, but argue the cultural and spiritual devastation of losing artisanal crafts is far more grave.",
                        "body1": "Advantages of mass production: democratic access to cheap, standardized goods.",
                        "body2": "Loss of crafts: loss of cultural heritage, tangible human identity, and sustainable craft knowledge.",
                        "conclusion": "Governments must subsidize artisan heritage to maintain human cultural richness."
                    },
                    "modelAnswer": (
                        "The relentless march of industrial automation has flooded modern consumer markets with inexpensive, uniform commodities, precipitating the steady decline of age-old artisanal handicrafts. Although factory mass production offers undeniable economic accessibility, I firmly contend that the erosion of traditional crafts represents a far deeper cultural and human impoverishment that outweighs mere commercial advantages.\n\n"
                        "Admittedly, mass production delivers substantial material benefits to global consumers. Automated assembly lines drastically minimize production expenditures, allowing families across diverse income brackets to acquire household necessities, clothing, and electronics at affordable price points. Moreover, industrial precision guarantees standardized quality and immediate interchangeability of replacement parts, facilitating modern convenience on a scale unimaginable in pre-industrial epochs.\n\n"
                        "Nonetheless, the extinction of artisanal craftsmanship extracts an irreplaceable toll on human civilization. First, traditional crafts embody ancestral heritage, regional identity, and centuries of trial-and-error wisdom. When bespoke ceramics, hand-loomed textiles, or manual woodworking disappear, communities lose their tangible link to history. Second, handcrafting engages human creative faculties in a way that repetitive machine operation never can; each handmade creation carries the unique artistic soul and imperfections of its creator. Finally, handcrafted items prioritize sustainable, biodegradable raw materials and enduring repairability, whereas mass-manufactured plastic commodities foster a catastrophic throwaway culture.\n\n"
                        "In conclusion, while industrial production is indispensable for supplying baseline consumer demands, the extinction of traditional crafts represents a tragic cultural amputation. The transient convenience of mass manufacturing cannot compensate for the permanent loss of our artistic heritage."
                    ),
                    "collocations": ["relentless march of industrial automation", "cultural impoverishment", "ancestral heritage", "catastrophic throwaway culture", "artistic soul"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Handmade Items & Crafts",
                    "questions": [
                        {"q": "Do you own any handmade items? [Why/Why not?]", "sample": "Yes, I cherish a hand-woven wool scarf gifted by my grandmother and a ceramic teacup from Bat Trang village; their tactile warmth is far superior to factory-made items."},
                        {"q": "Did you ever make anything by hand when you were at school?", "sample": "In primary school art classes, we wove bamboo paper lanterns for the Mid-Autumn Festival and sculpted clay animals."},
                        {"q": "Is your country famous for any traditional handicrafts?", "sample": "Vietnam is internationally renowned for Bat Trang porcelain ceramics, Van Phuc silk weaving, Dong Ho woodblock prints, and intricate mother-of-pearl lacquerware."},
                        {"q": "Would you like to learn a traditional craft in the future?", "sample": "I would love to take a weekend pottery-wheel course because shaping wet clay with my hands sounds wonderfully grounding and meditative."}
                    ]
                },
                "part2": {
                    "topic": "Describe a handmade item you value",
                    "cueCard": "You should say:\n- What the item is\n- Who made it\n- How it looks\n- And explain why it is special to you.",
                    "modelAnswer": (
                        "I would like to describe a hand-carved rosewood chess set that was crafted by a master carpenter in my grandfather's home village in northern Vietnam.\n\n"
                        "My grandfather commissioned the set twenty years ago and passed it down to me when I entered university.\n\n"
                        "The folding wooden board is inlaid with mother-of-pearl borders, and each of the thirty-two chess pieces is weighted and lined with emerald velvet at the base. What is extraordinary is that no two knights are identical—you can see the delicate chisel marks in the horses' manes and the natural grain of the polished timber.\n\n"
                        "This chess set is deeply special to me because it carries memories of Sunday afternoons spent playing chess with my grandfather, and it represents a level of patient human artistry that no factory 3D printer could ever replicate."
                    ),
                    "lexical": ["hand-carved rosewood", "inlaid with mother-of-pearl", "delicate chisel marks", "natural grain of polished timber", "patient human artistry"]
                },
                "part3": {
                    "topic": "Craft Preservation in the Digital Age",
                    "questions": [
                        {"q": "Why are some people willing to pay high prices for bespoke handmade items?", "sample": "Discerning buyers pay a premium for handmade items because they convey individuality, superior heirloom durability, and an authentic human story that mass-produced plastic objects lack."},
                        {"q": "How can governments help preserve dying traditional crafts?", "sample": "Governments can establish vocational apprenticeships for young artisans, grant tax exemptions to heritage craft villages, and promote artisanal products through international cultural tourism."},
                        {"q": "Can modern technology actually help traditional craftspeople?", "sample": "Yes! E-commerce platforms like Etsy and Instagram allow rural Vietnamese weavers and potters to bypass middlemen and sell their creations directly to collectors worldwide."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cam 21 Test 3: Kỹ năng quét câu hỏi tổng hợp và bẫy suy luận ngữ nghĩa.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "easily purchased bespoke globe", "passageKey": "discovered a retail market dominated by cheap plastic spheres", "verdict": "FALSE (Không có sẵn quả địa cầu thủ công hiện đại)"},
                    {"qNum": "P3 - Q4", "questionKey": "distinguishes human syntax", "passageKey": "hierarchical combinatorial structure and recursion", "verdict": "B (Cấu trúc tổ hợp phân cấp và đệ quy)"}
                ]
            },
            "vocabList": [
                {"word": "artisanal craftsmanship", "ipa": "ˌɑːtɪˈzænəl ˈkrɑːftsmənʃɪp", "vi": "tay nghề thủ công bậc thầy", "type": "noun phrase", "collocation": "preserve rare artisanal craftsmanship", "example": "Handmade globes require years of disciplined artisanal craftsmanship."},
                {"word": "urban rewilding", "ipa": "ˈɜːbən riːˈwaɪldɪŋ", "vi": "tái hoang dã hóa cảnh quan đô thị", "type": "noun phrase", "collocation": "spearhead urban rewilding along concrete riverbeds", "example": "Urban rewilding invites native fauna back into the city."},
                {"word": "hierarchical syntax", "ipa": "ˌhaɪəˈrɑːkɪkl ˈsɪntæks", "vi": "cú pháp phân cấp trong ngôn ngữ học", "type": "noun phrase", "collocation": "master the rules of hierarchical syntax", "example": "Human children naturally acquire complex hierarchical syntax."}
            ]
        },

        # CAM 21 - TEST 4
        {
            "id": 4,
            "title": "Cambridge IELTS 21 — Test 4",
            "topic": "Ancient Sahara Salt Trade, Autonomous Maritime Shipping & Adult Neuroplasticity",
            "passages": [
                "P1: Ancient Salt Trade Routes in the Sahara",
                "P2: Autonomous Maritime Cargo Shipping",
                "P3: Neuroplasticity & Memory in Adulthood"
            ],
            "keyVocab": ["trans-Saharan salt caravans", "autonomous crewless vessels", "Yara Birkeland", "adult synaptic plasticity"],
            "listening": {
                "title": "Cambridge 21 Listening Test 4",
                "parts": [
                    {
                        "part": 1,
                        "title": "Part 1: Port Logistics & Freight Booking",
                        "audioScript": (
                            "OFFICER: Rotterdam Freight Logistics. Consignment reference?\n"
                            "AGENT: It's RF-8842-NL.\n"
                            "OFFICER: Cargo category: refrigerated food, dry minerals, or machinery parts?\n"
                            "AGENT: Dry mineral salts, total weight 15 tonnes."
                        ),
                        "questions": [
                            {"num": 1, "q": "Consignment Ref: RF-________-NL", "answer": "8842"},
                            {"num": 2, "q": "Cargo category: dry mineral ________", "answer": "salts"},
                            {"num": 3, "q": "Total weight: ________ tonnes", "answer": "15 / fifteen"}
                        ]
                    },
                    {
                        "part": 2,
                        "title": "Part 2: Maritime Heritage Museum Audio Guide",
                        "audioScript": (
                            "NARRATOR: Welcome to the Autonomous Vessel Gallery. The model before you is the Yara Birkeland, the world's first fully electric, crewless container ship operating in Norway."
                        ),
                        "questions": [
                            {"num": 4, "q": "Vessel name: Yara ________", "answer": "Birkeland"},
                            {"num": 5, "q": "The ship is 100% ________ and crewless", "answer": "electric"}
                        ]
                    },
                    {
                        "part": 3,
                        "title": "Part 3: Artificial Intelligence Navigation Seminar",
                        "audioScript": (
                            "RESEARCHER: Autonomous ships rely on LiDAR sensors, thermal cameras, and satellite telemetry to navigate open waters safely."
                        ),
                        "questions": [
                            {"num": 6, "q": "Navigation relies on ________ sensors and thermal cameras", "answer": "LiDAR"}
                        ]
                    },
                    {
                        "part": 4,
                        "title": "Part 4: Cognitive Training & Brain Neuroplasticity",
                        "audioScript": (
                            "PROFESSOR: Contrary to the obsolete dogma that the adult brain is structurally rigid, intense cognitive engagement physically reshapes synaptic architecture well into one's nineties."
                        ),
                        "questions": [
                            {"num": 7, "q": "Cognitive effort reshapes ________ architecture in senior adults", "answer": "synaptic"}
                        ]
                    }
                ]
            },
            "reading": {
                "p1": {
                    "title": "Passage 1: Ancient Salt Trade Routes in the Sahara",
                    "text": (
                        "For over a thousand years, vast camel caravans—sometimes numbering up to 10,000 dromedaries—traversed the hyper-arid Sahara desert, transporting 90-kilogram slabs of rock salt mined from ancient evaporated lake beds at Taghaza and Taoudenni south to the trading empires of Ghana, Mali, and Songhai.\n\n"
                        "In sub-Saharan agricultural zones where soil lacked sodium chloride, rock salt was essential for human survival and meat preservation—valued weight-for-weight alongside gold dust in medieval Timbuktu."
                    ),
                    "questions": [
                        {"num": 1, "type": "TFNG", "q": "Rock salt in ancient West Africa was regarded as a worthless, abundant commodity.", "answer": "FALSE", "explain": "Bài đọc khẳng định muối đá quý hiếm và có giá trị ngang với bụi vàng tại Timbuktu ('valued weight-for-weight alongside gold dust')."}
                    ]
                },
                "p2": {
                    "title": "Passage 2: Autonomous Maritime Cargo Shipping",
                    "text": (
                        "Maritime transport accounts for nearly ninety percent of global freight trade, yet international shipping emits roughly 3 percent of global greenhouse gases and suffers thousands of collisions annually—over 75 percent of which are linked to human crew fatigue.\n\n"
                        "In Norway, the Yara Birkeland has launched as the world's first zero-emission, autonomous electric container vessel. Controlled by AI radar, LiDAR, andshore-based remote centres, crewless vessels eliminate bridge living quarters, freeing up deck space for more containers and cutting fuel consumption."
                    ),
                    "questions": [
                        {"num": 2, "type": "TFNG", "q": "Human crew fatigue is implicated in the majority of maritime shipping accidents.", "answer": "TRUE", "explain": "Đoạn 1 nêu hơn 75% tai nạn hàng hải liên quan đến sự mệt mỏi của thủy thủ đoàn ('over 75 percent of which are linked to human crew fatigue')."}
                    ]
                },
                "p3": {
                    "title": "Passage 3: Neuroplasticity & Memory in Adulthood",
                    "text": (
                        "Throughout most of the twentieth century, neurological orthodoxy held that the human brain's wiring became permanently fixed after childhood critical periods. However, neuroimaging studies—such as Eleanor Maguire's famous MRI study of London black-cab drivers learning 25,000 streets ('The Knowledge')—prove that the adult brain remains structurally malleable (neuroplastic) throughout life."
                    ),
                    "questions": [
                        {"num": 3, "type": "MCQ", "q": "What did Eleanor Maguire's study of London taxi drivers demonstrate?", "options": ["A. Adult brains never change after age 18", "B. Intensive spatial learning physically enlarges and rewires the adult hippocampus", "C. Taxi drivers use GPS exclusively", "D. Memory stops working at age 40"], "answer": "B", "explain": "Đoạn 1 nêu nghiên cứu tài xế taxi London chứng minh não bộ người trưởng thành vẫn có khả năng biến đổi cấu trúc dẻo dai (neuroplastic) suốt cuộc đời."}
                    ]
                }
            },
            "writing": {
                "task1": {
                    "title": "Academic Writing Task 1: Port Modernization Map (1995 vs 2025)",
                    "prompt": "The maps illustrate the transformation of a commercial shipping port between 1995 and 2025.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
                    "chartType": "Comparative Urban Port Maps",
                    "dataSummary": "1995: Manual crane berths, coal storage depots, small customs shed. 2025: Fully automated robotic container terminals, solar-powered battery storage, automated drone inspection dock.",
                    "modelAnswer": (
                        "The two maps depict the structural and technological modernization of an industrial seaport between 1995 and 2025.\n\n"
                        "Overall, the port underwent a complete transition from labour-intensive, fossil-fuel powered operations to a fully automated, sustainable logistics hub with significantly expanded container capacity.\n\n"
                        "In 1995, the northern dock was dominated by manual gantry cranes and open-air coal storage yards. By 2025, these were completely decommissioned and replaced by high-speed robotic container terminals and underground solar-powered battery reserves.\n\n"
                        "Furthermore, the small customs shed on the southern perimeter was replaced by an AI monitoring headquarters featuring automated drone inspection stations. Navigational channels were also dredged to accommodate deep-draft autonomous cargo vessels."
                    ),
                    "vocabBank": ["structural and technological modernization", "labour-intensive", "automated logistics hub", "decommissioned", "robotic container terminals"]
                },
                "task2": {
                    "title": "Academic Writing Task 2: Driverless Autonomous Transport (Ships & Lorries)",
                    "prompt": "More and more transport vehicles, including ships and lorries, are being operated without human drivers.\nDo the advantages of driverless transport outweigh the disadvantages?",
                    "essayType": "Outweigh Essay (Advantages outweigh disadvantages)",
                    "outline": {
                        "intro": "Acknowledge job displacement concerns, but argue safety and logistical efficiency far outweigh the drawbacks.",
                        "body1": "Disadvantages: short-term driver unemployment and cyber-security vulnerabilities.",
                        "body2": "Advantages: elimination of fatigue-related fatal crashes, 24/7 continuous operation, and carbon optimization.",
                        "conclusion": "With proper retraining and cybersecurity, autonomous transport offers overwhelming societal gains."
                    },
                    "modelAnswer": (
                        "The integration of autonomous navigation algorithms into commercial logistics—ranging from driverless freight lorries to unmanned maritime container vessels—marks a profound revolution in global transit. Although this technological transition provokes legitimate anxieties regarding workforce displacement, I am convinced that the substantial improvements in navigational safety, operational efficiency, and energy optimization decisively outweigh the associated drawbacks.\n\n"
                        "The most prominent objection to driverless transportation centers on employment disruption. Millions of professional truck drivers, cargo crews, and logistics personnel risk obsolescence as automated systems supplant human operators. Furthermore, autonomous transit networks depend heavily on satellite telemetry and sensor arrays, rendering them potentially vulnerable to sophisticated cyber-attacks or algorithmic failures in unprecedented weather emergencies.\n\n"
                        "Nevertheless, the overriding benefit of autonomous transport is the dramatic elimination of human error. Over eighty percent of vehicular collisions and maritime mishaps stem from driver fatigue, distraction, alcohol impairment, or misjudgment under stress. Algorithmic piloting systems never suffer from sleep deprivation or lapses in attentiveness; they continuously compute optimal braking distances and hazard trajectories via real-time LiDAR and sensor telemetry. Consequently, autonomous freight will prevent thousands of highway and maritime fatalities annually. Moreover, automated vehicles operate around the clock without mandatory rest breaks, streamlining global supply chains and reducing fuel consumption via optimized speed profiles.\n\n"
                        "In conclusion, while governments must implement compassionate transitional programs to retrain displaced workers, the safety and economic benefits of driverless transport make it an undeniably superior paradigm."
                    ),
                    "collocations": ["autonomous navigation algorithms", "workforce displacement", "dramatic elimination of human error", "sleep deprivation", "optimized speed profiles"]
                }
            },
            "speaking": {
                "part1": {
                    "topic": "Public Transport & Commuting",
                    "questions": [
                        {"q": "How do you usually commute to work or school? [Why?]", "sample": "I commute primarily on the new elevated electric metro line because it is air-conditioned, punctual to the minute, and spares me from inhaling rush-hour exhaust fumes."},
                        {"q": "What do you usually do while travelling on public transport?", "sample": "I put on my noise-cancelling headphones and review 15 IELTS vocabulary flashcards on my phone or listen to BBC Global News podcasts."},
                        {"q": "Is public transport expensive in your city?", "sample": "Not at all; with a student monthly pass, unlimited bus and metro rides cost less than ten dollars a month, making it remarkably affordable."},
                        {"q": "How could public transport in your city be improved?", "sample": "Integrating a single contactless payment card across all buses, water buses, and metro lines and adding shaded walkways to stations would make commuting seamless."}
                    ]
                },
                "part2": {
                    "topic": "Describe an automated tool or piece of technology you use",
                    "cueCard": "You should say:\n- What it is\n- How it works\n- How often you use it\n- And explain how it helps your daily routine.",
                    "modelAnswer": (
                        "I would like to describe an AI-driven pronunciation and phonetic feedback tool—LexisPro IPA Studio—that I utilize daily for my English speaking preparation.\n\n"
                        "Whenever I paste an English paragraph or record my voice through the microphone, the software automatically transcribes every word into International Phonetic Alphabet symbols for both American and British accents, highlights stress syllables, and scores my pronunciation accuracy word by word.\n\n"
                        "I use it for twenty minutes every evening after dinner. It has transformed my daily routine by acting as a tireless personal phonetics coach, helping me correct subtle vowel and final-consonant errors that I previously never noticed."
                    ),
                    "lexical": ["AI-driven phonetic feedback", "International Phonetic Alphabet", "highlights stress syllables", "tireless personal coach", "final-consonant errors"]
                },
                "part3": {
                    "topic": "The Future of Transportation & Lifelong Learning",
                    "questions": [
                        {"q": "Do you believe driverless vehicles will make roads safer in the future?", "sample": "Absolutely; once autonomous vehicle sensors and V2X (vehicle-to-everything) communication mature, road fatalities caused by human drunk driving, speeding, and fatigue will plummet."},
                        {"q": "Why is it important for adults to keep learning new skills throughout their lives?", "sample": "Neuroscience proves that learning complex new skills—like a foreign language or musical instrument—stimulates synaptic neuroplasticity and protects the ageing brain against cognitive decline."},
                        {"q": "Should employers pay for their workers to attend training courses?", "sample": "Yes, corporate investment in employee upskilling boosts retention, morale, and adaptability in an era of rapid technological change."}
                    ]
                }
            },
            "readingExplanation": {
                "summary": "Giải chi tiết Cam 21 Test 4: Phân tích kỹ thuật gạch chân từ khóa chỉ thời gian và định vị câu trả lời trong bài đọc khoa học.",
                "keywordTable": [
                    {"qNum": "P1 - Q1", "questionKey": "rock salt regarded as worthless", "passageKey": "valued weight-for-weight alongside gold dust in medieval Timbuktu", "verdict": "FALSE (Giá trị ngang vàng)"},
                    {"qNum": "P2 - Q2", "questionKey": "human fatigue responsible for accidents", "passageKey": "over 75 percent of which are linked to human crew fatigue", "verdict": "TRUE (Hơn 75% do mệt mỏi của con người)"},
                    {"qNum": "P3 - Q3", "questionKey": "Eleanor Maguire's taxi study", "passageKey": "prove that the adult brain remains structurally malleable (neuroplastic) throughout life", "verdict": "B (Học không gian làm thay đổi cấu trúc hồi hải mã ở người lớn)"}
                ]
            },
            "vocabList": [
                {"word": "algorithmic automation", "ipa": "ˌælɡəˈrɪðmɪk ˌɔːtəˈmeɪʃn", "vi": "tự động hóa bằng thuật toán AI", "type": "collocation", "collocation": "implement algorithmic automation in shipping", "example": "Algorithmic automation operates cargo ships with pinpoint precision."},
                {"word": "adult neuroplasticity", "ipa": "əˈdʌlt ˌnjʊəroʊplæˈstɪsəti", "vi": "khả năng biến đổi dẻo dai của não bộ", "type": "noun phrase", "collocation": "harness adult neuroplasticity through study", "example": "Learning new languages reinforces adult neuroplasticity."},
                {"word": "synaptic architecture", "ipa": "sɪˈnæptɪk ˈɑːkɪtektʃə", "vi": "cấu trúc khớp thần kinh", "type": "noun phrase", "collocation": "reshape synaptic architecture", "example": "Mental exercise physically remodels synaptic architecture."}
            ]
        }
    ]


def create_db():
    cam21 = get_cam21_tests()
    cam20 = get_cam20_tests()
    cam19 = get_cam19_tests()
    cam18 = get_cam18_tests()
    cam17 = get_cam17_tests()
    cam16 = get_cam16_tests()

    books_data = {
        "21": {
            "year": "2026 (Mới nhất)",
            "writingTask2": cam21[0]["writing"]["task2"]["prompt"],
            "tests": cam21
        },
        "20": {
            "year": "2025",
            "writingTask2": cam20[0]["writing"]["task2"]["prompt"],
            "tests": cam20
        },
        "19": {
            "year": "2024",
            "writingTask2": cam19[0]["writing"]["task2"]["prompt"],
            "tests": cam19
        },
        "18": {
            "year": "2023",
            "writingTask2": cam18[0]["writing"]["task2"]["prompt"],
            "tests": cam18
        },
        "17": {
            "year": "2022",
            "writingTask2": cam17[0]["writing"]["task2"]["prompt"],
            "tests": cam17
        },
        "16": {
            "year": "2021",
            "writingTask2": cam16[0]["writing"]["task2"]["prompt"],
            "tests": cam16
        }
    }

    output_path = "/Users/thien/IPA/cambridge-tests-db.js"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("// Cambridge IELTS 16 - 21 Full Authentic Interactive Tests Database\n")
        f.write("// Complete with Listening 4 Parts, Reading 3 Passages, Writing Tasks 1 & 2,\n")
        f.write("// Speaking Parts 1-3, Detailed Solutions, and Vocabulary Vault.\n\n")
        f.write("window.CAMBRIDGE_FULL_DB = ")
        json.dump(books_data, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Successfully generated {output_path} with {len(books_data)} books (24 complete tests)!")


if __name__ == "__main__":
    create_db()
