#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generates comprehensive ZIM.vn Communicative English Shadowing Database (25 Topics, 250 Dialogues,
Topic Vocabulary, Topic Sentence Patterns, Per-Dialogue Key Vocab & Patterns, and Procedural
Similar-Dialogue Generator Matrices) and updates /Users/thien/IPA/autoexam-data.js.
"""

import json
import re

# 1. ZIM.VN TOPIC VOCABULARY & PATTERNS + GENERATOR MATRICES FOR ALL 25 TOPICS
ZIM_TOPICS_META = {
    "workplace": {
        "title": "1. Công sở & Văn phòng (Workplace & Professional Life)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "walk through", "ipa": "/wɔːk θruː/", "pos": "phr.v", "def": "trình bày, giải thích chi tiết từng bước"},
            {"word": "deadline", "ipa": "/ˈded.laɪn/", "pos": "n", "def": "hạn chót hoàn thành công việc"},
            {"word": "agenda", "ipa": "/əˈdʒen.də/", "pos": "n", "def": "chương trình nghị sự, nội dung cuộc họp"},
            {"word": "collaborate", "ipa": "/kəˈlæb.ə.reɪt/", "pos": "v", "def": "phối hợp, cộng tác làm việc"},
            {"word": "milestone", "ipa": "/ˈmaɪl.stəʊn/", "pos": "n", "def": "cột mốc quan trọng của dự án"},
            {"word": "feasible", "ipa": "/ˈfiː.zə.bəl/", "pos": "adj", "def": "khả thi, có thể thực hiện được"},
            {"word": "streamline", "ipa": "/ˈstriːm.laɪn/", "pos": "v", "def": "tối ưu hóa, tinh gọn quy trình"},
            {"word": "feedback", "ipa": "/ˈfiːd.bæk/", "pos": "n", "def": "ý kiến phản hồi, nhận xét"},
            {"word": "prioritize", "ipa": "/praɪˈɒr.ɪ.taɪz/", "pos": "v", "def": "ưu tiên giải quyết trước"},
            {"word": "minutes of meeting", "ipa": "/ˈmɪn.ɪts əv ˈmiː.tɪŋ/", "pos": "n.phr", "def": "biên bản cuộc họp"},
            {"word": "follow up", "ipa": "/ˈfɒl.əʊ ʌp/", "pos": "phr.v", "def": "theo sát, cập nhật tiến độ tiếp theo"},
            {"word": "workload", "ipa": "/ˈwɜːk.ləʊd/", "pos": "n", "def": "khối lượng công việc"}
        ],
        "topicPatterns": [
            {"pattern": "Could you walk me through + [Noun]?", "meaning": "Bạn có thể trình bày chi tiết cho tôi về... được không?", "example": "Could you walk me through the updated budget proposal?"},
            {"pattern": "Let's touch base on + [Topic] + [Time]", "meaning": "Hãy trao đổi nhanh/cập nhật về... vào lúc...", "example": "Let's touch base on the marketing campaign tomorrow morning."},
            {"pattern": "Could you send me + [Noun] + by EOD?", "meaning": "Bạn gửi giúp tôi... trước cuối ngày làm việc hôm nay nhé?", "example": "Could you send me the quarterly report by EOD?"},
            {"pattern": "We need to prioritize + [Noun/V-ing] + to meet the deadline", "meaning": "Chúng ta cần ưu tiên... để kịp tiến độ", "example": "We need to prioritize client onboarding to meet the deadline."},
            {"pattern": "I completely agree with your point on + [Noun]", "meaning": "Tôi hoàn toàn đồng ý với quan điểm của bạn về...", "example": "I completely agree with your point on resource allocation."},
            {"pattern": "Please keep me in the loop regarding + [Noun]", "meaning": "Vui lòng cập nhật thông tin cho tôi về...", "example": "Please keep me in the loop regarding the contract negotiation."}
        ],
        "generator": {
            "roles": [("Project Manager", "Team Lead"), ("Director", "Marketing Specialist"), ("Product Owner", "Senior Developer"), ("HR Manager", "Department Head")],
            "scenarios": [
                {
                    "title": "Reviewing Sprint Deliverables",
                    "turns": [
                        ("Project Manager", "Good morning! Could you walk me through our sprint deliverables for this week?", "/ɡʊd ˈmɔː.nɪŋ kʊd juː wɔːk miː θruː ˈaʊər sprɪnt dɪˈlɪv.ər.ə.bəlz fɔː ðɪs wiːk/", "Chào buổi sáng! Bạn có thể trình bày nhanh các hạng mục bàn giao tuần này không?"),
                        ("Team Lead", "Certainly. We have completed the user interface redesign and are now testing the payment gateway.", "/ˈsɜː.tən.li wiː hæv kəmˈpliː.tɪd ðə ˈjuː.zər ˈɪn.tə.feɪs ˌriː.dɪˈzaɪn ænd ɑː naʊ ˈtes.tɪŋ ðə ˈpeɪ.mənt ˈɡeɪt.weɪ/", "Chắc chắn rồi. Chúng tôi đã hoàn thành thiết kế lại giao diện và đang kiểm thử cổng thanh toán."),
                        ("Project Manager", "That sounds promising. Do you think the new timeline is feasible before Friday's deadline?", "/ðæt saʊndz ˈprɒm.ɪ.sɪŋ duː juː θɪŋk ðə njuː ˈtaɪm.laɪn ɪz ˈfiː.zə.bəl bɪˈfɔː ˈfraɪ.deɪz ˈded.laɪn/", "Nghe rất khả quan. Bạn có nghĩ tiến độ mới khả thi trước hạn chót thứ Sáu không?"),
                        ("Team Lead", "Yes, as long as we prioritize bug fixing this afternoon. I will keep you in the loop.", "/jes æz lɒŋ æz wiː praɪˈɒr.ɪ.taɪz bʌɡ ˈfɪk.sɪŋ ðɪs ˌɑːf.təˈnuːn aɪ wɪl kiːp juː ɪn ðə luːp/", "Có, miễn là chúng ta ưu tiên sửa lỗi chiều nay. Tôi sẽ liên tục cập nhật cho bạn.")
                    ]
                },
                {
                    "title": "Cross-Department Collaboration",
                    "turns": [
                        ("Director", "Hi Alex, let's touch base on how our teams can collaborate on the upcoming product launch.", "/haɪ ˈæl.ɪks lets tʌtʃ beɪs ɒn haʊ ˈaʊər tiːmz kæn kəˈlæb.ə.reɪt ɒn ði ʌpˈkʌm.ɪŋ ˈprɒd.ʌkt lɔːntʃ/", "Chào Alex, hãy trao đổi nhanh về cách hai phòng ban phối hợp trong đợt ra mắt sản phẩm tới nhé."),
                        ("Marketing Specialist", "I've prepared a draft agenda. Our main milestone is finalizing the promotional video by Wednesday.", "/aɪv prɪˈpeəd ə drɑːft əˈdʒen.də ˈaʊər meɪn ˈmaɪl.stəʊn ɪz ˈfaɪ.nəl.aɪ.zɪŋ ðə prəˈməʊ.ʃən.əl ˈvɪd.i.əʊ baɪ ˈwenz.deɪ/", "Tôi đã chuẩn bị dự thảo chương trình. Cột mốc chính là chốt video quảng bá trước thứ Tư."),
                        ("Director", "Great initiative. Could you send me the creative brief and budget breakdown by EOD?", "/ɡreɪt ɪˈnɪʃ.ə.tɪv kʊd juː send miː ðə kriˈeɪ.tɪv briːf ænd ˈbʌdʒ.ɪt ˈbreɪk.daʊn baɪ iː.əʊ.diː/", "Chủ động lắm. Bạn gửi giúp tôi bản tóm tắt sáng tạo và dự toán ngân sách trước cuối ngày nhé?"),
                        ("Marketing Specialist", "Of course! I'll streamline the figures and email the document to you right after lunch.", "/ɒv kɔːs aɪl ˈstriːm.laɪn ðə ˈfɪɡ.əz ænd ˈiː.meɪl ðə ˈdɒk.jə.mənt tuː juː raɪt ˈɑːf.tər lʌntʃ/", "Tất nhiên rồi! Tôi sẽ tinh gọn lại số liệu và gửi email tài liệu cho bạn ngay sau bữa trưa.")
                    ]
                }
            ]
        }
    },
    "phone": {
        "title": "2. Điện thoại & Họp trực tuyến (Telephone & Video Calls)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "put through", "ipa": "/pʊt θruː/", "pos": "phr.v", "def": "nối máy điện thoại cho ai"},
            {"word": "hold the line", "ipa": "/həʊld ðə laɪn/", "pos": "phr", "def": "giữ máy chờ một lát"},
            {"word": "break up", "ipa": "/breɪk ʌp/", "pos": "phr.v", "def": "mất sóng, nghe chập chờn"},
            {"word": "extension", "ipa": "/ɪkˈsten.ʃən/", "pos": "n", "def": "số máy lẻ nội bộ"},
            {"word": "leave a message", "ipa": "/liːv ə ˈmes.ɪdʒ/", "pos": "phr", "def": "để lại lời nhắn"},
            {"word": "get back to", "ipa": "/ɡet bæk tuː/", "pos": "phr.v", "def": "gọi lại, phản hồi lại sau"},
            {"word": "bad reception", "ipa": "/bæd rɪˈsep.ʃən/", "pos": "n.phr", "def": "tín hiệu sóng yếu"},
            {"word": "reschedule", "ipa": "/ˌriːˈʃed.juːl/", "pos": "v", "def": "dời lịch, sắp xếp lại lịch"}
        ],
        "topicPatterns": [
            {"pattern": "Could you put me through to + [Name/Department]?", "meaning": "Bạn có thể nối máy cho tôi tới... được không?", "example": "Could you put me through to Ms. Carter in Accounting?"},
            {"pattern": "I'm afraid your voice is breaking up", "meaning": "Tôi e là tín hiệu bên bạn đang bị chập chờn", "example": "I'm afraid your voice is breaking up due to bad reception."},
            {"pattern": "Would you like to leave a message?", "meaning": "Bạn có muốn để lại lời nhắn không?", "example": "He's in a meeting right now. Would you like to leave a message?"},
            {"pattern": "I'll have her get back to you as soon as possible", "meaning": "Tôi sẽ nhắn cô ấy gọi lại cho bạn sớm nhất có thể", "example": "I'll have her get back to you as soon as possible."}
        ]
    },
    "home_routine": {
        "title": "3. Sinh hoạt Hàng ngày & Gia đình (Daily Life & Home Routine)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "household chores", "ipa": "/ˈhaʊs.həʊld tʃɔːz/", "pos": "n.phr", "def": "việc vặt trong nhà"},
            {"word": "groceries", "ipa": "/ˈɡrəʊ.sər.iz/", "pos": "n", "def": "thực phẩm và đồ gia dụng"},
            {"word": "commute", "ipa": "/kəˈmjuːt/", "pos": "v/n", "def": "đi lại hàng ngày giữa nhà và nơi làm việc"},
            {"word": "early bird", "ipa": "/ˈɜː.li bɜːd/", "pos": "n.phr", "def": "người hay dậy sớm"},
            {"word": "unwind", "ipa": "/ʌnˈwaɪnd/", "pos": "v", "def": "thư giãn, xả hơi sau giờ làm"},
            {"word": "laundry", "ipa": "/ˈlɔːn.dri/", "pos": "n", "def": "quần áo cần giặt giũ"},
            {"word": "utilities", "ipa": "/juːˈtɪl.ə.tiz/", "pos": "n", "def": "điện, nước, internet sinh hoạt"},
            {"word": "run errands", "ipa": "/rʌn ˈer.əndz/", "pos": "phr", "def": "đi làm các việc lặt vặt ngoài phố"}
        ],
        "topicPatterns": [
            {"pattern": "It's your turn to + [Verb] + today", "meaning": "Hôm nay đến lượt bạn làm...", "example": "It's your turn to do the dishes and take out the trash today."},
            {"pattern": "I usually unwind by + [V-ing]", "meaning": "Tôi thường thư giãn bằng cách...", "example": "I usually unwind by reading a book or listening to podcasts."},
            {"pattern": "We're running low on + [Noun]", "meaning": "Nhà mình sắp hết... rồi", "example": "We're running low on fresh milk and eggs."}
        ]
    },
    "shopping": {
        "title": "4. Mua sắm & Thanh toán (Shopping & Retail)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "fitting room", "ipa": "/ˈfɪt.ɪŋ ruːm/", "pos": "n", "def": "phòng thử đồ"},
            {"word": "affordable", "ipa": "/əˈfɔː.də.bəl/", "pos": "adj", "def": "giá cả phải chăng, hợp túi tiền"},
            {"word": "out of stock", "ipa": "/aʊt əv stɒk/", "pos": "phr", "def": "hết hàng trong kho"},
            {"word": "receipt", "ipa": "/rɪˈsiːt/", "pos": "n", "def": "hóa đơn, biên lai thanh toán"},
            {"word": "discount", "ipa": "/ˈdɪs.kaʊnt/", "pos": "n", "def": "khoản giảm giá, chiết khấu"},
            {"word": "refund", "ipa": "/ˈriː.fʌnd/", "pos": "n/v", "def": "hoàn tiền lại"},
            {"word": "cashier", "ipa": "/kæʃˈɪər/", "pos": "n", "def": "nhân viên thu ngân"},
            {"word": "bargain", "ipa": "/ˈbɑː.ɡɪn/", "pos": "n/v", "def": "món hời; trả giá, mặc cả"}
        ],
        "topicPatterns": [
            {"pattern": "Can I try this on in a medium size?", "meaning": "Tôi có thể thử mẫu này cỡ vừa được không?", "example": "Excuse me, can I try this jacket on in a medium size?"},
            {"pattern": "Where can I find the fitting rooms?", "meaning": "Phòng thử đồ ở đâu vậy ạ?", "example": "Where can I find the fitting rooms? Right over there on your left."},
            {"pattern": "Would you like to pay by card or in cash?", "meaning": "Quý khách muốn thanh toán bằng thẻ hay tiền mặt?", "example": "Your total is $45. Would you like to pay by card or in cash?"},
            {"pattern": "Do you have this item in stock?", "meaning": "Cửa hàng còn mặt hàng này trong kho không?", "example": "Do you have this pair of sneakers in stock in size 41?"}
        ]
    },
    "health": {
        "title": "5. Bệnh viện, Bác sĩ & Hiệu thuốc (Health & Medical)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "prescription", "ipa": "/prɪˈskrɪp.ʃən/", "pos": "n", "def": "đơn thuốc của bác sĩ"},
            {"word": "symptom", "ipa": "/ˈsɪmp.təm/", "pos": "n", "def": "triệu chứng bệnh"},
            {"word": "sore throat", "ipa": "/sɔː θrəʊt/", "pos": "n.phr", "def": "đau rát họng"},
            {"word": "side effect", "ipa": "/ˈsaɪd ɪˌfekt/", "pos": "n", "def": "tác dụng phụ của thuốc"},
            {"word": "dosage", "ipa": "/ˈdəʊ.sɪdʒ/", "pos": "n", "def": "liều lượng dùng thuốc"},
            {"word": "allergic to", "ipa": "/əˈlɜː.dʒɪk tuː/", "pos": "adj", "def": "bị dị ứng với..."},
            {"word": "check-up", "ipa": "/ˈtʃek.ʌp/", "pos": "n", "def": "khám sức khỏe tổng quát"},
            {"word": "pharmacist", "ipa": "/ˈfɑː.mə.sɪst/", "pos": "n", "def": "dược sĩ"}
        ],
        "topicPatterns": [
            {"pattern": "I'd like to make an appointment with Dr. + [Name]", "meaning": "Tôi muốn đặt lịch khám với Bác sĩ...", "example": "I'd like to make an appointment with Dr. Evans for tomorrow morning."},
            {"pattern": "How long have you been having these symptoms?", "meaning": "Bạn có những triệu chứng này bao lâu rồi?", "example": "How long have you been having these symptoms and the high fever?"},
            {"pattern": "Take two tablets twice a day after meals", "meaning": "Uống 2 viên mỗi lần, ngày 2 lần sau bữa ăn", "example": "Take two tablets twice a day after meals and drink plenty of water."}
        ]
    },
    "travel": {
        "title": "6. Du lịch & Khám phá (Travel & Sightseeing)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "itinerary", "ipa": "/aɪˈtɪn.ər.ər.i/", "pos": "n", "def": "lịch trình chuyến đi"},
            {"word": "landmark", "ipa": "/ˈlænd.mɑːk/", "pos": "n", "def": "địa danh nổi tiếng"},
            {"word": "souvenir", "ipa": "/ˌsuː.vənˈɪər/", "pos": "n", "def": "quà lưu niệm"},
            {"word": "guided tour", "ipa": "/ˌɡaɪ.dɪd ˈtʊər/", "pos": "n.phr", "def": "chuyến tham quan có hướng dẫn viên"},
            {"word": "breathtaking", "ipa": "/ˈbreθˌteɪ.kɪŋ/", "pos": "adj", "def": "đẹp ngoạn mục, hấp dẫn"},
            {"word": "peak season", "ipa": "/piːk ˈsiː.zən/", "pos": "n.phr", "def": "mùa du lịch cao điểm"},
            {"word": "local cuisine", "ipa": "/ˈləʊ.kəl kwɪˈziːn/", "pos": "n.phr", "def": "ẩm thực địa phương"},
            {"word": "excursion", "ipa": "/ɪkˈskɜː.ʃən/", "pos": "n", "def": "chuyến dã ngoại, tham quan ngắn"}
        ],
        "topicPatterns": [
            {"pattern": "Could you recommend some must-see attractions?", "meaning": "Bạn có thể gợi ý vài điểm tham quan không thể bỏ lỡ không?", "example": "Could you recommend some must-see attractions in the old quarter?"},
            {"pattern": "Would you mind taking a photo for us?", "meaning": "Bạn có phiền chụp giúp chúng tôi một bức ảnh không?", "example": "Excuse me, would you mind taking a photo for us in front of the cathedral?"},
            {"pattern": "How much is the admission fee?", "meaning": "Giá vé vào cổng là bao nhiêu?", "example": "How much is the admission fee for adults and students?"}
        ]
    },
    "hobbies": {
        "title": "7. Sở thích, Thể thao & Giải trí (Leisure & Hobbies)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "passionate about", "ipa": "/ˈpæʃ.ən.ət əˈbaʊt/", "pos": "adj", "def": "đam mê, yêu thích cuồng nhiệt"},
            {"word": "work out", "ipa": "/wɜːk aʊt/", "pos": "phr.v", "def": "tập thể hình, rèn luyện sức khỏe"},
            {"word": "keen on", "ipa": "/kiːn ɒn/", "pos": "adj", "def": "hào hứng, thích thú với"},
            {"word": "take up", "ipa": "/teɪk ʌp/", "pos": "phr.v", "def": "bắt đầu theo đuổi một môn/sở thích mới"},
            {"word": "outdoor activities", "ipa": "/ˈaʊt.dɔːr ækˈtɪv.ə.tiz/", "pos": "n.phr", "def": "các hoạt động ngoài trời"},
            {"word": "refreshing", "ipa": "/rɪˈfreʃ.ɪŋ/", "pos": "adj", "def": "tươi mới, sảng khoái tinh thần"}
        ],
        "topicPatterns": [
            {"pattern": "What do you usually do in your free time?", "meaning": "Bạn thường làm gì vào thời gian rảnh?", "example": "What do you usually do in your free time on weekends?"},
            {"pattern": "I've recently taken up + [V-ing/Noun]", "meaning": "Gần đây tôi mới bắt đầu tập...", "example": "I've recently taken up landscape photography and hiking."}
        ]
    },
    "weather": {
        "title": "8. Thời tiết & Khí hậu (Weather & Environment)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "weather forecast", "ipa": "/ˈweð.ər ˌfɔː.kɑːst/", "pos": "n.phr", "def": "dự báo thời tiết"},
            {"word": "pouring rain", "ipa": "/ˈpɔː.rɪŋ reɪn/", "pos": "n.phr", "def": "mưa như trút nước"},
            {"word": "scorching hot", "ipa": "/ˈskɔː.tʃɪŋ hɒt/", "pos": "adj.phr", "def": "nắng nóng gay gắt"},
            {"word": "humid", "ipa": "/ˈhjuː.mɪd/", "pos": "adj", "def": "ẩm ướt, nồm ẩm"},
            {"word": "breeze", "ipa": "/briːz/", "pos": "n", "def": "làn gió nhẹ mát mẻ"},
            {"word": "chilly", "ipa": "/ˈtʃɪl.i/", "pos": "adj", "def": "se lạnh"}
        ],
        "topicPatterns": [
            {"pattern": "What's the weather forecast for tomorrow?", "meaning": "Dự báo thời tiết ngày mai thế nào?", "example": "What's the weather forecast for tomorrow? Should we bring umbrellas?"},
            {"pattern": "It looks like it's going to rain soon", "meaning": "Trông có vẻ trời sắp mưa rồi", "example": "Look at those dark clouds; it looks like it's going to rain soon."}
        ]
    },
    "restaurant": {
        "title": "9. Nhà hàng, Quán Cà phê & Gọi món (Dining & Restaurants)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "reservation", "ipa": "/ˌrez.əˈveɪ.ʃən/", "pos": "n", "def": "sự đặt bàn/chỗ trước"},
            {"word": "appetizer / starter", "ipa": "/ˈæp.ə.taɪ.zər/", "pos": "n", "def": "món khai vị"},
            {"word": "main course", "ipa": "/ˌmeɪn ˈkɔːs/", "pos": "n.phr", "def": "món chính"},
            {"word": "specialty", "ipa": "/ˈspeʃ.əl.ti/", "pos": "n", "def": "món đặc sản của nhà hàng"},
            {"word": "beverage", "ipa": "/ˈbev.ər.ɪdʒ/", "pos": "n", "def": "đồ uống, thức uống"},
            {"word": "split the bill", "ipa": "/splɪt ðə bɪl/", "pos": "phr", "def": "chia đều hóa đơn thanh toán"},
            {"word": "complimentary", "ipa": "/ˌkɒm.plɪˈmen.tər.i/", "pos": "adj", "def": "miễn phí, được tặng kèm"},
            {"word": "vegetarian", "ipa": "/ˌvedʒ.ɪˈteə.ri.ən/", "pos": "adj/n", "def": "thuộc đồ chay / người ăn chay"}
        ],
        "topicPatterns": [
            {"pattern": "I'd like to make a reservation for + [Number] + at + [Time]", "meaning": "Tôi muốn đặt bàn cho... người vào lúc...", "example": "I'd like to make a reservation for four at 7:30 PM tonight."},
            {"pattern": "What do you recommend for the main course?", "meaning": "Bạn gợi ý món nào cho món chính?", "example": "Everything looks delicious! What do you recommend for the main course?"},
            {"pattern": "Could we have the bill, please?", "meaning": "Cho chúng tôi xin hóa đơn thanh toán nhé?", "example": "Excuse me, could we have the bill, please?"}
        ]
    },
    "friends": {
        "title": "10. Bạn bè, Hẹn hò & Xã giao (Socializing & Friends)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "catch up", "ipa": "/kætʃ ʌp/", "pos": "phr.v", "def": "hàn huyên, cập nhật tình hình sau bao ngày"},
            {"word": "hang out", "ipa": "/hæŋ aʊt/", "pos": "phr.v", "def": "đi chơi, tụ tập bạn bè"},
            {"word": "keep in touch", "ipa": "/kiːp ɪn tʌtʃ/", "pos": "phr", "def": "giữ liên lạc thường xuyên"},
            {"word": "get-together", "ipa": "/ˈɡet.təˌɡeð.ər/", "pos": "n", "def": "buổi tụ họp thân mật"},
            {"word": "acquaintance", "ipa": "/əˈkweɪn.təns/", "pos": "n", "def": "người quen xã giao"},
            {"word": "throw a party", "ipa": "/θrəʊ ə ˈpɑː.ti/", "pos": "phr", "def": "tổ chức một bữa tiệc"}
        ],
        "topicPatterns": [
            {"pattern": "It's been a while since we last met!", "meaning": "Đã lâu lắm rồi chúng ta không gặp nhau!", "example": "Hey Sarah, it's been a while since we last met! How have you been?"},
            {"pattern": "Are you free to grab a coffee this weekend?", "meaning": "Cuối tuần này bạn có rảnh đi cà phê không?", "example": "Are you free to grab a coffee this weekend so we can catch up?"}
        ]
    }
}

# 15 ADDITIONAL ZIM.VN TOPICS (Topics 11 to 25) WITH FULL DIALOGUES, VOCAB & PATTERNS
ADDITIONAL_ZIM_TOPICS = [
    {
        "id": "greetings",
        "title": "11. Chào hỏi & Làm quen (Greetings & Introductions - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "pleasure", "ipa": "/ˈpleʒ.ər/", "pos": "n", "def": "niềm vinh hạnh, niềm vui"},
            {"word": "introduce", "ipa": "/ˌɪn.trəˈdjuːs/", "pos": "v", "def": "giới thiệu bản thân hoặc người khác"},
            {"word": "hometown", "ipa": "/ˈhəʊm.taʊn/", "pos": "n", "def": "quê hương, nơi sinh ra"},
            {"word": "occupation", "ipa": "/ˌɒk.jəˈpeɪ.ʃən/", "pos": "n", "def": "nghề nghiệp, công việc"},
            {"word": "first impression", "ipa": "/ˌfɜːst ɪmˈpreʃ.ən/", "pos": "n.phr", "def": "ấn tượng đầu tiên"},
            {"word": "hospitality", "ipa": "/ˌhɒs.pɪˈtæl.ə.ti/", "pos": "n", "def": "lòng hiếu khách"},
            {"word": "newcomer", "ipa": "/ˈnjuːˌkʌm.ər/", "pos": "n", "def": "người mới đến"},
            {"word": "background", "ipa": "/ˈbæk.ɡraʊnd/", "pos": "n", "def": "nền tảng học vấn / kinh nghiệm"}
        ],
        "topicPatterns": [
            {"pattern": "What can I call you?", "meaning": "Tôi có thể gọi bạn là gì nhỉ?", "example": "Hi there! I'm Minh from Vietnam. What can I call you?"},
            {"pattern": "It's a pleasure to meet you in person", "meaning": "Thật vinh dự được gặp trực tiếp bạn ngoài đời", "example": "After emailing for months, it's a pleasure to meet you in person."},
            {"pattern": "What do you do for a living?", "meaning": "Bạn làm nghề gì?", "example": "So, David, what do you do for a living?"}
        ],
        "baseDialogues": [
            ("First Day at an International Conference", "Attendee A", "Attendee B",
             "Hello! I don't think we've met yet. I'm Linh from Hanoi.", "/həˈləʊ aɪ dəʊnt θɪŋk wiːv met jet aɪm lɪŋ frɒm hæˈnɔɪ/", "Xin chào! Hình như chúng ta chưa gặp nhau. Tôi là Linh đến từ Hà Nội.",
             "Nice to meet you, Linh! I'm Marcus. What can I call you?", "/naɪs tuː miːt juː lɪŋ aɪm ˈmɑː.kəs wɒt kæn aɪ kɔːl juː/", "Rất vui được gặp bạn, Linh! Tôi là Marcus. Tôi có thể gọi bạn là gì nhỉ?",
             "Just call me Linh. Is this your first time attending this tech summit?", "/dʒʌst kɔːl miː lɪŋ ɪz ðɪs jɔː fɜːst taɪm əˈten.dɪŋ ðɪs tek ˈsʌm.ɪt/", "Cứ gọi tôi là Linh nhé. Đây có phải lần đầu bạn tham dự hội nghị công nghệ này không?",
             "Yes, it is! Everyone has shown such warm hospitality so far.", "/jes ɪt ɪz ˈev.ri.wʌn hæz ʃəʊn sʌtʃ wɔːm ˌhɒs.pɪˈtæl.ə.ti səʊ fɑːr/", "Đúng vậy! Mọi người ở đây đều vô cùng hiếu khách."),
            ("Welcoming a New Neighbor", "Resident", "Newcomer",
             "Good morning! Are you moving into the apartment next door?", "/ɡʊd ˈmɔː.nɪŋ ɑː juː ˈmuː.vɪŋ ˈɪn.tuː ði əˈpɑːt.mənt nekst dɔːr/", "Chào buổi sáng! Bạn mới chuyển vào căn hộ bên cạnh phải không?",
             "Yes! I'm Daniel, a newcomer to this neighborhood. It's a pleasure to meet you.", "/jes aɪm ˈdæn.jəl ə ˈnjuːˌkʌm.ər tuː ðɪs ˈneɪ.bə.hʊd ɪts ə ˈpleʒ.ər tuː miːt juː/", "Đúng rồi! Tôi là Daniel, người mới chuyển tới khu này. Rất vui được gặp bạn.",
             "Welcome! If you need any recommendations for local shops, just let me know.", "/ˈwel.kəm ɪf juː niːd ˈen.i ˌrek.ə.menˈdeɪ.ʃənz fɔː ˈləʊ.kəl ʃɒps dʒʌst let miː nəʊ/", "Chào mừng bạn! Nếu cần gợi ý cửa hàng quanh đây thì cứ bảo tôi nhé.",
             "Thank you so much! That makes a wonderful first impression.", "/θæŋk juː səʊ mʌtʃ ðæt meɪks ə ˈwʌn.də.fəl fɜːst ɪmˈpreʃ.ən/", "Cảm ơn bạn rất nhiều! Điều đó tạo ấn tượng đầu tiên tuyệt vời quá.")
        ]
    },
    {
        "id": "directions",
        "title": "12. Hỏi đường & Chỉ đường (Asking & Giving Directions - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "intersection", "ipa": "/ˌɪn.təˈsek.ʃən/", "pos": "n", "def": "ngã tư, giao lộ"},
            {"word": "roundabout", "ipa": "/ˈraʊnd.ə.baʊt/", "pos": "n", "def": "vòng xuyến, bùng binh"},
            {"word": "pedestrian crossing", "ipa": "/pəˈdes.tri.ən ˈkrɒs.ɪŋ/", "pos": "n.phr", "def": "vạch kẻ đường cho người đi bộ"},
            {"word": "go straight ahead", "ipa": "/ɡəʊ streɪt əˈhed/", "pos": "phr", "def": "đi thẳng về phía trước"},
            {"word": "turn left / right", "ipa": "/tɜːn left / raɪt/", "pos": "phr", "def": "rẽ trái / rẽ phải"},
            {"word": "within walking distance", "ipa": "/wɪˈðɪn ˈwɔː.kɪŋ ˈdɪs.təns/", "pos": "phr", "def": "trong tầm đi bộ gần đây"},
            {"word": "opposite", "ipa": "/ˈɒp.ə.zɪt/", "pos": "prep", "def": "đối diện với"},
            {"word": "block", "ipa": "/blɒk/", "pos": "n", "def": "dãy phố, tòa nhà"}
        ],
        "topicPatterns": [
            {"pattern": "Excuse me, could you tell me how to get to + [Place]?", "meaning": "Xin lỗi, bạn có thể chỉ giúp tôi đường tới... được không?", "example": "Excuse me, could you tell me how to get to the nearest subway station?"},
            {"pattern": "Go straight ahead for two blocks, then turn left at the intersection", "meaning": "Đi thẳng 2 dãy phố, sau đó rẽ trái ở ngã tư", "example": "Go straight ahead for two blocks, then turn left at the intersection."},
            {"pattern": "Is it within walking distance from here?", "meaning": "Nó có nằm trong khoảng cách đi bộ từ đây không?", "example": "Is the national museum within walking distance from here?"}
        ],
        "baseDialogues": [
            ("Finding the Central Train Station", "Tourist", "Local",
             "Excuse me, could you tell me how to get to the Central Train Station?", "/ɪkˈskjuːz miː kʊd juː tel miː haʊ tuː ɡet tuː ðə ˈsen.trəl treɪn ˈsteɪ.ʃən/", "Xin lỗi, bạn có thể chỉ giúp tôi đường tới Ga Trung tâm được không?",
             "Sure! Go straight ahead for two blocks until you reach the traffic lights.", "/ʃɔːr ɡəʊ streɪt əˈhed fɔː tuː blɒks ʌnˈtɪl juː riːtʃ ðə ˈtræf.ɪk laɪts/", "Được chứ! Bạn đi thẳng hai dãy phố cho tới khi gặp đèn giao thông.",
             "Do I turn left or right at the intersection?", "/duː aɪ tɜːn left ɔː raɪt æt ði ˌɪn.təˈsek.ʃən/", "Tôi rẽ trái hay rẽ phải tại ngã tư đó ạ?",
             "Turn right at the intersection. The station is right opposite the city post office.", "/tɜːn raɪt æt ði ˌɪn.təˈsek.ʃən ðə ˈsteɪ.ʃən ɪz raɪt ˈɒp.ə.zɪt ðə ˈsɪt.i pəʊst ˈɒf.ɪs/", "Hãy rẽ phải ở ngã tư. Nhà ga nằm ngay đối diện bưu điện thành phố."),
            ("Locating the Art Gallery", "Visitor", "Passerby",
             "Pardon me, is the Modern Art Gallery within walking distance from here?", "/ˈpɑː.dən miː ɪz ðə ˈmɒd.ən ɑːt ˈɡæl.ər.i wɪˈðɪn ˈwɔː.kɪŋ ˈdɪs.təns frɒm hɪər/", "Xin thứ lỗi, Phòng trưng bày Nghệ thuật Hiện đại có đi bộ từ đây tới được không ạ?",
             "Yes, it takes only five minutes. Walk past the roundabout and use the pedestrian crossing.", "/jes ɪt teɪks ˈəʊn.li faɪv ˈmɪn.ɪts wɔːk pɑːst ðə ˈraʊnd.ə.baʊt ænd juːz ðə pəˈdes.tri.ən ˈkrɒs.ɪŋ/", "Có, chỉ mất 5 phút thôi. Bạn đi qua vòng xuyến và băng qua vạch kẻ đường cho người đi bộ.",
             "Thank you! Is it next to the public library?", "/θæŋk juː ɪz ɪt nekst tuː ðə ˈpʌb.lɪk ˈlaɪ.brər.i/", "Cảm ơn bạn! Có phải nó nằm cạnh thư viện công cộng không?",
             "Exactly! You can't miss its large glass entrance.", "/ɪɡˈzækt.li juː kɑːnt mɪs ɪts lɑːdʒ ɡlɑːs ˈen.trəns/", "Chính xác! Bạn sẽ thấy ngay cổng kính lớn của nó.")
        ]
    },
    {
        "id": "airport",
        "title": "13. Sân bay, Chuyến bay & Hải quan (At the Airport - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "boarding pass", "ipa": "/ˈbɔː.dɪŋ pɑːs/", "pos": "n.phr", "def": "thẻ lên máy bay"},
            {"word": "carry-on luggage", "ipa": "/ˈkær.i.ɒn ˈlʌɡ.ɪdʒ/", "pos": "n.phr", "def": "hành lý xách tay"},
            {"word": "checked baggage", "ipa": "/tʃekt ˈbæɡ.ɪdʒ/", "pos": "n.phr", "def": "hành lý ký gửi"},
            {"word": "aisle seat", "ipa": "/aɪl siːt/", "pos": "n.phr", "def": "ghế ngồi cạnh lối đi"},
            {"word": "window seat", "ipa": "/ˈwɪn.dəʊ siːt/", "pos": "n.phr", "def": "ghế ngồi cạnh cửa sổ"},
            {"word": "layover / transit", "ipa": "/ˈleɪˌəʊ.vər/", "pos": "n", "def": "điểm dừng quá cảnh"},
            {"word": "customs declaration", "ipa": "/ˈkʌs.təmz ˌdek.ləˈreɪ.ʃən/", "pos": "n.phr", "def": "tờ khai hải quan"},
            {"word": "boarding gate", "ipa": "/ˈbɔː.dɪŋ ɡeɪt/", "pos": "n.phr", "def": "cổng ra máy bay"}
        ],
        "topicPatterns": [
            {"pattern": "Are you checking any bags or carry-on only?", "meaning": "Quý khách có ký gửi hành lý hay chỉ mang xách tay?", "example": "Good morning! Passport please. Are you checking any bags or carry-on only?"},
            {"pattern": "Would you prefer a window seat or an aisle seat?", "meaning": "Quý khách thích ghế cạnh cửa sổ hay ghế cạnh lối đi?", "example": "Would you prefer a window seat or an aisle seat for this flight?"},
            {"pattern": "What is the purpose of your visit?", "meaning": "Mục đích chuyến đi của bạn là gì?", "example": "Welcome to London. What is the purpose of your visit?"}
        ],
        "baseDialogues": [
            ("Check-in Counter & Seat Selection", "Ground Staff", "Passenger",
             "Good morning! May I see your passport and flight ticket, please?", "/ɡʊd ˈmɔː.nɪŋ meɪ aɪ siː jɔː ˈpɑːs.pɔːt ænd flaɪt ˈtɪk.ɪt pliːz/", "Chào buổi sáng! Cho tôi xem hộ chiếu và vé máy bay của quý khách ạ.",
             "Here you go. Could I have a window seat if one is available?", "/hɪər juː ɡəʊ kʊd aɪ hæv ə ˈwɪn.dəʊ siːt ɪf wʌn ɪz əˈveɪ.lə.bəl/", "Của bạn đây. Tôi có thể xin ghế cạnh cửa sổ nếu còn trống không?",
             "Certainly! Are you checking any bags today or just carry-on luggage?", "/ˈsɜː.tən.li ɑː juː ˈtʃek.ɪŋ ˈen.i bæɡz təˈdeɪ ɔː dʒʌst ˈkær.i.ɒn ˈlʌɡ.ɪdʒ/", "Chắc chắn rồi! Hôm nay quý khách có ký gửi hành lý hay chỉ mang hành lý xách tay?",
             "I have one suitcase to check in. Here is my bag.", "/aɪ hæv wʌn ˈsuːt.keɪs tuː tʃek ɪn hɪər ɪz maɪ bæɡ/", "Tôi có một vali cần ký gửi. Hành lý của tôi đây."),
            ("Immigration & Customs Control", "Immigration Officer", "Traveler",
             "Next, please. What is the purpose of your visit to Singapore?", "/nekst pliːz wɒt ɪz ðə ˈpɜː.pəs ɒv jɔː ˈvɪz.ɪt tuː ˌsɪŋ.əˈpɔːr/", "Xin mời người tiếp theo. Mục đích chuyến đi tới Singapore của bạn là gì?",
             "I'm here on a five-day business trip and technology conference.", "/aɪm hɪər ɒn ə faɪv deɪ ˈbɪz.nɪs trɪp ænd tekˈnɒl.ə.dʒi ˈkɒn.fər.əns/", "Tôi tới đây trong chuyến công tác 5 ngày và dự hội nghị công nghệ.",
             "Where will you be staying, and do you have anything for customs declaration?", "/weər wɪl juː biː ˈsteɪ.ɪŋ ænd duː juː hæv ˈen.i.θɪŋ fɔː ˈkʌs.təmz ˌdek.ləˈreɪ.ʃən/", "Bạn sẽ lưu trú ở đâu và có hàng hóa gì cần khai báo hải quan không?",
             "I'm staying at the Marina Hotel, and I have nothing to declare.", "/aɪm ˈsteɪ.ɪŋ æt ðə məˈriː.nə həʊˈtel ænd aɪ hæv ˈnʌθ.ɪŋ tuː dɪˈkleər/", "Tôi ở tại khách sạn Marina và không có gì cần khai báo.")
        ]
    },
    {
        "id": "hotel",
        "title": "14. Đặt phòng Khách sạn & Lưu trú (At the Hotel - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "front desk / reception", "ipa": "/frʌnt desk/", "pos": "n.phr", "def": "quầy lễ tân khách sạn"},
            {"word": "single / double room", "ipa": "/ˈdʌb.əl ruːm/", "pos": "n.phr", "def": "phòng đơn / phòng đôi"},
            {"word": "vacancy", "ipa": "/ˈveɪ.kən.si/", "pos": "n", "def": "phòng trống"},
            {"word": "amenities", "ipa": "/əˈmiː.nə.tiz/", "pos": "n", "def": "tiện nghi khách sạn (hồ bơi, gym, spa)"},
            {"word": "housekeeping", "ipa": "/ˈhaʊsˌkiː.pɪŋ/", "pos": "n", "def": "bộ phận dọn phòng"},
            {"word": "complimentary breakfast", "ipa": "/ˌkɒm.plɪˈmen.tər.i ˈbrek.fəst/", "pos": "n.phr", "def": "bữa sáng miễn phí đi kèm"},
            {"word": "late check-out", "ipa": "/leɪt ˈtʃek.aʊt/", "pos": "n.phr", "def": "trả phòng muộn"},
            {"word": "deposit", "ipa": "/dɪˈpɒz.ɪt/", "pos": "n", "def": "tiền đặt cọc"}
        ],
        "topicPatterns": [
            {"pattern": "I have a reservation under the name + [Name]", "meaning": "Tôi đã đặt phòng trước dưới tên...", "example": "Good afternoon! I have a reservation under the name Thomas Nguyen."},
            {"pattern": "Is complimentary breakfast included in the room rate?", "meaning": "Giá phòng đã bao gồm bữa sáng miễn phí chưa?", "example": "Is complimentary breakfast included in the room rate?"},
            {"pattern": "Could we request a late check-out until 2 PM?", "meaning": "Chúng tôi có thể xin trả phòng muộn tới 2 giờ chiều không?", "example": "Could we request a late check-out until 2 PM tomorrow?"}
        ],
        "baseDialogues": [
            ("Hotel Check-in at Reception", "Guest", "Receptionist",
             "Good afternoon! I have a reservation under the name David Tran for three nights.", "/ɡʊd ˌɑːf.təˈnuːn aɪ hæv ə ˌrez.əˈveɪ.ʃən ˈʌn.dər ðə neɪm ˈdeɪ.vɪd træn fɔː θriː naɪts/", "Chào buổi chiều! Tôi có đặt phòng dưới tên David Tran trong 3 đêm.",
             "Welcome to Grand Plaza! Let me verify your booking. Yes, a deluxe double room with an ocean view.", "/ˈwel.kəm tuː ɡrænd ˈplɑː.zə let miː ˈver.ɪ.faɪ jɔː ˈbʊk.ɪŋ jes ə dɪˈlʌks ˈdʌb.əl ruːm wɪð ən ˈəʊ.ʃən vjuː/", "Chào mừng quý khách tới Grand Plaza! Để tôi kiểm tra đặt phòng. Đúng rồi, một phòng đôi hạng sang hướng biển.",
             "Wonderful! Is complimentary breakfast included in the room rate?", "/ˈwʌn.də.fəl ɪz ˌkɒm.plɪˈmen.tər.i ˈbrek.fəst ɪnˈkluː.dɪd ɪn ðə ruːm reɪt/", "Tuyệt quá! Giá phòng đã bao gồm bữa sáng miễn phí chưa bạn?",
             "Yes, breakfast is served from 6:30 to 10:00 AM on the second floor. Here is your key card.", "/jes ˈbrek.fəst ɪz sɜːvd frɒm sɪks ˈθɜː.ti tuː ten eɪ.em ɒn ðə ˈsek.ənd flɔːr hɪər ɪz jɔː kiː kɑːd/", "Dạ có, bữa sáng phục vụ từ 6:30 đến 10:00 sáng tại tầng 2. Đây là thẻ từ phòng của quý khách."),
            ("Calling Housekeeping for Extra Amenities", "Guest", "Front Desk",
             "Hello Front Desk, this is room 508. Could I get two extra bath towels sent up?", "/həˈləʊ frʌnt desk ðɪs ɪz ruːm faɪv əʊ eɪt kʊd aɪ ɡet tuː ˈek.strə bɑːθ ˈtaʊ.əlz sent ʌp/", "Xin chào Lễ tân, đây là phòng 508. Cho tôi xin thêm 2 khăn tắm mang lên phòng được không?",
             "Certainly! I will notify housekeeping right away. Is everything else in your room satisfactory?", "/ˈsɜː.tən.li aɪ wɪl ˈnəʊ.tɪ.faɪ ˈhaʊsˌkiː.pɪŋ raɪt əˈweɪ ɪz ˈev.ri.θɪŋ els ɪn jɔː ruːm ˌsæt.ɪsˈfæk.tər.i/", "Dạ được ngay! Tôi sẽ báo bộ phận buồng phòng lập tức. Mọi tiện nghi khác trong phòng đều ổn chứ ạ?",
             "Yes, the room is spotless. Also, could we request a late check-out tomorrow?", "/jes ðə ruːm ɪz ˈspɒt.ləs ˈɔːl.səʊ kʊd wiː rɪˈkwest ə leɪt ˈtʃek.aʊt təˈmɒr.əʊ/", "Vâng, phòng rất sạch sẽ. Ngoài ra ngày mai chúng tôi xin trả phòng muộn một chút được không?",
             "We can extend your check-out until 1:00 PM at no extra charge.", "/wiː kæn ɪkˈstend jɔː ˈtʃek.aʊt ʌnˈtɪl wʌn piː.em æt nəʊ ˈek.strə tʃɑːdʒ/", "Chúng tôi có thể hỗ trợ quý khách trả phòng muộn tới 1 giờ chiều hoàn toàn miễn phí ạ.")
        ]
    },
    {
        "id": "job_interview",
        "title": "15. Phỏng vấn Xin việc & Sự nghiệp (Job Interview - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "strengths and weaknesses", "ipa": "/streŋθs ænd ˈwiːk.nəs.ɪz/", "pos": "n.phr", "def": "điểm mạnh và điểm yếu"},
            {"word": "qualification", "ipa": "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", "pos": "n", "def": "bằng cấp, trình độ chuyên môn"},
            {"word": "hands-on experience", "ipa": "/ˌhændzˈɒn ɪkˈspɪə.ri.əns/", "pos": "n.phr", "def": "kinh nghiệm thực chiến"},
            {"word": "career goal", "ipa": "/kəˈrɪər ɡəʊl/", "pos": "n.phr", "def": "mục tiêu sự nghiệp"},
            {"word": "remuneration / salary", "ipa": "/rɪˌmjuː.nərˈeɪ.ʃən/", "pos": "n", "def": "mức lương và đãi ngộ"},
            {"word": "probation period", "ipa": "/prəˈbeɪ.ʃən ˈpɪə.ri.əd/", "pos": "n.phr", "def": "thời gian thử việc"},
            {"word": "adaptable", "ipa": "/əˈdæp.tə.bəl/", "pos": "adj", "def": "thích nghi nhanh"},
            {"word": "track record", "ipa": "/ˈtræk ˌrek.ɔːd/", "pos": "n.phr", "def": "bề dày thành tích đã đạt được"}
        ],
        "topicPatterns": [
            {"pattern": "I have over + [Number] + years of hands-on experience in + [Field]", "meaning": "Tôi có hơn... năm kinh nghiệm thực tế trong lĩnh vực...", "example": "I have over four years of hands-on experience in digital marketing."},
            {"pattern": "My greatest strength is my ability to + [Verb]", "meaning": "Điểm mạnh lớn nhất của tôi là khả năng...", "example": "My greatest strength is my ability to solve complex problems under pressure."},
            {"pattern": "Where do you see yourself in five years?", "meaning": "Bạn định hướng bản thân ở vị trí nào sau 5 năm nữa?", "example": "Where do you see yourself in five years within our organization?"}
        ],
        "baseDialogues": [
            ("Introducing Professional Background", "Hiring Manager", "Candidate",
             "Welcome! To start off, could you tell me a little bit about your professional background?", "/ˈwel.kəm tuː stɑːt ɒf kʊd juː tel miː ə ˈlɪt.əl bɪt əˈbaʊt jɔː prəˈfeʃ.ən.əl ˈbæk.ɡraʊnd/", "Chào mừng bạn! Để bắt đầu, bạn có thể giới thiệu đôi nét về kinh nghiệm chuyên môn của mình không?",
             "Certainly. I have over four years of hands-on experience in software engineering and cloud architecture.", "/ˈsɜː.tən.li aɪ hæv ˈəʊ.vər fɔː jɪəz ɒv ˌhændzˈɒn ɪkˈspɪə.ri.əns ɪn ˈsɒft.weər ˌen.dʒɪˈnɪə.rɪŋ ænd klaʊd ˈɑː.kɪ.tek.tʃər/", "Chắc chắn rồi ạ. Tôi có hơn 4 năm kinh nghiệm thực tế về kỹ thuật phần mềm và kiến trúc đám mây.",
             "Impressive track record! What would you say is your greatest strength at work?", "/ɪmˈpres.ɪv ˈtræk ˌrek.ɔːd wɒt wʊd juː seɪ ɪz jɔː ˈɡreɪ.tɪst streŋθ æt wɜːk/", "Thành tích rất ấn tượng! Theo bạn điểm mạnh lớn nhất trong công việc của mình là gì?",
             "My greatest strength is my ability to stay adaptable and lead cross-functional teams under tight deadlines.", "/maɪ ˈɡreɪ.tɪst streŋθ ɪz maɪ əˈbɪl.ə.ti tuː steɪ əˈdæp.tə.bəl ænd liːd krɒs ˈfʌŋk.ʃən.əl tiːmz ˈʌn.dər taɪt ˈded.laɪnz/", "Điểm mạnh lớn nhất của tôi là khả năng thích nghi nhanh và dẫn dắt đội nhóm đa chức năng dưới áp lực tiến độ."),
            ("Discussing Career Goals & Probation", "Interviewer", "Applicant",
             "Where do you see yourself in five years if you join our company?", "/weər duː juː siː jɔːˈself ɪn faɪv jɪəz ɪf juː dʒɔɪn ˈaʊər ˈkʌm.pə.ni/", "Bạn nhìn thấy mình ở vị trí nào sau 5 năm nữa nếu gia nhập công ty chúng tôi?",
             "My long-term career goal is to grow into a Senior Product Director and mentor junior specialists.", "/maɪ lɒŋ tɜːm kəˈrɪər ɡəʊl ɪz tuː ɡrəʊ ˈɪn.tuː ə ˈsiː.ni.ər ˈprɒd.ʌkt daɪˈrek.tər ænd ˈmen.tɔːr ˈdʒuː.ni.ər ˈspeʃ.əl.ɪsts/", "Mục tiêu sự nghiệp dài hạn của tôi là phát triển lên vị trí Giám đốc Sản phẩm Cấp cao và hướng dẫn các chuyên viên trẻ.",
             "That aligns well with our expansion plan. How soon can you start the two-month probation period?", "/ðæt əˈlaɪnz wel wɪð ˈaʊər ɪkˈspæn.ʃən plæn haʊ suːn kæn juː stɑːt ðə tuː mʌnθ prəˈbeɪ.ʃən ˈpɪə.ri.əd/", "Định hướng đó rất khớp với kế hoạch mở rộng của chúng tôi. Khi nào bạn có thể bắt đầu kỳ thử việc 2 tháng?",
             "I can start at the beginning of next month after completing my handover.", "/aɪ kæn stɑːt æt ðə bɪˈɡɪn.ɪŋ ɒv nekst mʌnθ ˈɑːf.tər kəmˈpliː.tɪŋ maɪ ˈhændˌəʊ.vər/", "Tôi có thể bắt đầu vào đầu tháng sau ngay khi hoàn tất bàn giao công việc hiện tại.")
        ]
    },
    {
        "id": "banking",
        "title": "16. Ngân hàng, Tài chính & Bưu điện (Banking & Finance - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "savings account", "ipa": "/ˈseɪ.vɪŋz əˌkaʊnt/", "pos": "n.phr", "def": "tài khoản tiết kiệm"},
            {"word": "exchange rate", "ipa": "/ɪksˈtʃeɪndʒ reɪt/", "pos": "n.phr", "def": "tỷ giá hối đoái"},
            {"word": "interest rate", "ipa": "/ˈɪn.trəst reɪt/", "pos": "n.phr", "def": "lãi suất ngân hàng"},
            {"word": "wire transfer", "ipa": "/ˈwaɪər ˌtræns.fɜːr/", "pos": "n.phr", "def": "chuyển khoản điện tử quốc tế"},
            {"word": "withdraw", "ipa": "/wɪðˈdrɔː/", "pos": "v", "def": "rút tiền"},
            {"word": "bank statement", "ipa": "/bæŋk ˈsteɪt.mənt/", "pos": "n.phr", "def": "sao kê ngân hàng"}
        ],
        "topicPatterns": [
            {"pattern": "I'd like to open a savings account", "meaning": "Tôi muốn mở một tài khoản tiết kiệm", "example": "Good morning, I'd like to open a savings account with online banking."},
            {"pattern": "What is today's exchange rate for US dollars?", "meaning": "Tỷ giá đổi đô-la Mỹ hôm nay là bao nhiêu?", "example": "What is today's exchange rate for US dollars to Vietnamese dong?"}
        ],
        "baseDialogues": [
            ("Opening a Bank Account", "Customer", "Bank Teller",
             "Good morning! I'd like to open a savings account and apply for a debit card.", "/ɡʊd ˈmɔː.nɪŋ aɪd laɪk tuː ˈəʊ.pən ə ˈseɪ.vɪŋz əˌkaʊnt ænd əˈplaɪ fɔːr ə ˈdeb.ɪt kɑːd/", "Chào buổi sáng! Tôi muốn mở một tài khoản tiết kiệm và đăng ký thẻ ghi nợ.",
             "Certainly! May I see your passport or national ID card for verification?", "/ˈsɜː.tən.li meɪ aɪ siː jɔː ˈpɑːs.pɔːt ɔː ˈnæʃ.ən.əl aɪˈdiː kɑːd fɔː ˌver.ɪ.fɪˈkeɪ.ʃən/", "Dạ vâng! Cho tôi mượn hộ chiếu hoặc căn cước công dân của quý khách để xác minh nhé?",
             "Here it is. What is the current annual interest rate for savings?", "/hɪər ɪt ɪz wɒt ɪz ðə ˈkʌr.ənt ˈæn.ju.əl ˈɪn.trəst reɪt fɔː ˈseɪ.vɪŋz/", "Đây ạ. Lãi suất tiết kiệm hàng năm hiện tại là bao nhiêu?",
             "Our flexible savings account offers a 5.5% annual interest rate with zero maintenance fees.", "/ˈaʊər ˈflek.sə.bəl ˈseɪ.vɪŋz əˌkaʊnt ˈɒf.əz ə faɪv pɔɪnt faɪv pəˈsent ˈæn.ju.əl ˈɪn.trəst reɪt wɪð ˈzɪə.rəʊ ˈmeɪn.tən.əns fiːz/", "Tài khoản tiết kiệm linh hoạt có lãi suất 5.5%/năm và miễn phí duy trì tài khoản."),
            ("Currency Exchange & Wire Transfer", "Client", "Clerk",
             "Excuse me, what is today's exchange rate for Euros to US Dollars?", "/ɪkˈskjuːz miː wɒt ɪz təˈdeɪz ɪksˈtʃeɪndʒ reɪt fɔː ˈjʊə.rəʊz tuː juː.es ˈdɒl.əz/", "Xin lỗi, tỷ giá quy đổi từ Euro sang Đô-la Mỹ hôm nay là bao nhiêu?",
             "Today's rate is 1.09 US Dollars per Euro. Would you like to exchange cash or make a wire transfer?", "/təˈdeɪz reɪt ɪz wʌn pɔɪnt əʊ naɪn juː.es ˈdɒl.əz pɜː ˈjʊə.rəʊ wʊd juː laɪk tuː ɪksˈtʃeɪndʒ kæʃ ɔː meɪk ə ˈwaɪər ˌtræns.fɜːr/", "Tỷ giá hôm nay là 1.09 USD đổi 1 Euro. Quý khách muốn đổi tiền mặt hay chuyển khoản quốc tế?",
             "I need to make an international wire transfer and print my monthly bank statement.", "/aɪ niːd tuː meɪk ən ˌɪn.təˈnæʃ.ən.əl ˈwaɪər ˌtræns.fɜːr ænd prɪnt maɪ ˈmʌnθ.li bæŋk ˈsteɪt.mənt/", "Tôi cần thực hiện chuyển khoản quốc tế và in bản sao kê ngân hàng hàng tháng.",
             "No problem at all. Please fill out this transfer form and sign at the bottom.", "/nəʊ ˈprɒb.ləm æt ɔːl pliːz fɪl aʊt ðɪs ˈtræns.fɜːr fɔːm ænd saɪn æt ðə ˈbɒt.əm/", "Không vấn đề gì ạ. Quý khách vui lòng điền phiếu chuyển tiền này và ký tên ở cuối trang.")
        ]
    },
    {
        "id": "transportation",
        "title": "17. Giao thông, Taxi & Tàu điện (Transportation & Transit - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "rush hour", "ipa": "/ˈrʌʃ ˌaʊər/", "pos": "n.phr", "def": "giờ cao điểm giao thông"},
            {"word": "traffic jam / congestion", "ipa": "/ˈtræf.ɪk dʒæm/", "pos": "n.phr", "def": "tắc đường, kẹt xe"},
            {"word": "fare", "ipa": "/feər/", "pos": "n", "def": "tiền vé xe/tàu/taxi"},
            {"word": "platform", "ipa": "/ˈplæt.fɔːm/", "pos": "n", "def": "sân ga tàu hỏa / tàu điện"},
            {"word": "drop off", "ipa": "/drɒp ɒf/", "pos": "phr.v", "def": "cho xuống xe tại điểm đến"},
            {"word": "pick up", "ipa": "/pɪk ʌp/", "pos": "phr.v", "def": "đón khách"}
        ],
        "topicPatterns": [
            {"pattern": "Could you drop me off in front of + [Place]?", "meaning": "Bác tài cho tôi xuống ở trước... nhé?", "example": "Could you drop me off in front of the main hospital entrance?"},
            {"pattern": "Which platform does the train to + [City] + depart from?", "meaning": "Chuyến tàu đi... khởi hành từ sân ga số mấy?", "example": "Which platform does the express train to Manchester depart from?"}
        ],
        "baseDialogues": [
            ("Taking a Taxi During Rush Hour", "Passenger", "Taxi Driver",
             "Hi! Could you take me to the International Convention Center as quickly as possible?", "/haɪ kʊd juː teɪk miː tuː ði ˌɪn.təˈnæʃ.ən.əl kənˈven.ʃən ˈsen.tər æz ˈkwɪk.li æz ˈpɒs.ə.bəl/", "Chào bác tài! Bác chở tôi tới Trung tâm Hội nghị Quốc tế nhanh nhất có thể nhé?",
             "Hop in! It's rush hour right now, so I'll take the highway to avoid the traffic jam.", "/hɒp ɪn ɪts ˈrʌʃ ˌaʊər raɪt naʊ səʊ aɪl teɪk ðə ˈhaɪ.weɪ tuː əˈvɔɪd ðə ˈtræf.ɪk dʒæm/", "Lên xe đi bạn! Giờ đang là cao điểm nên tôi sẽ đi đường cao tốc để tránh kẹt xe.",
             "That's smart. How much will the approximate fare be?", "/ðæts smɑːt haʊ mʌtʃ wɪl ði əˈprɒk.sɪ.mət feər biː/", "Hợp lý quá. Giá cước ước tính khoảng bao nhiêu vậy ạ?",
             "Around fifteen dollars. I'll drop you off right in front of the main lobby.", "/əˈraʊnd ˌfɪfˈtiːn ˈdɒl.əz aɪl drɒp juː ɒf raɪt ɪn frʌnt ɒv ðə meɪn ˈlɒb.i/", "Khoảng 15 đô-la. Tôi sẽ cho bạn xuống ngay trước sảnh chính."),
            ("Buying a Subway Ticket", "Commuter", "Station Staff",
             "Excuse me, which platform does the express train to the airport depart from?", "/ɪkˈskjuːz miː wɪtʃ ˈplæt.fɔːm dʌz ði ɪkˈspres treɪn tuː ði ˈeə.pɔːt dɪˈpɑːt frɒm/", "Xin lỗi, tàu tốc hành đi sân bay khởi hành từ sân ga số mấy ạ?",
             "It departs from Platform 3 every fifteen minutes. You can buy a transit card at the kiosk.", "/ɪt dɪˈpɑːts frɒm ˈplæt.fɔːm θriː ˈev.ri ˌfɪfˈtiːn ˈmɪn.ɪts juː kæn baɪ ə ˈtræn.zɪt kɑːd æt ðə ˈkiː.ɒsk/", "Tàu khởi hành từ Sân ga số 3 mỗi 15 phút một chuyến. Bạn có thể mua thẻ tàu tại quầy tự động.",
             "Do I need to transfer lines along the way?", "/duː aɪ niːd tuː ˈtræns.fɜːr laɪnz əˈlɒŋ ðə weɪ/", "Tôi có cần chuyển tuyến giữa chừng không?",
             "No, it's a direct line. You'll arrive at Terminal 2 in twenty minutes.", "/nəʊ ɪts ə daɪˈrekt laɪn juːl əˈraɪv æt ˈtɜː.mɪ.nəl tuː ɪn ˈtwen.ti ˈmɪn.ɪts/", "Không, đó là tuyến chạy thẳng. Bạn sẽ tới Nhà ga T2 sau 20 phút.")
        ]
    },
    {
        "id": "education",
        "title": "18. Trường học, Đại học & Học thuật (School & Education - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "scholarship", "ipa": "/ˈskɒl.ə.ʃɪp/", "pos": "n", "def": "học bổng"},
            {"word": "tuition fee", "ipa": "/tjuːˈɪʃ.ən fiː/", "pos": "n.phr", "def": "học phí"},
            {"word": "assignment", "ipa": "/əˈsaɪn.mənt/", "pos": "n", "def": "bài tập tiểu luận / chuyên đề"},
            {"word": "curriculum", "ipa": "/kəˈrɪk.jə.ləm/", "pos": "n", "def": "chương trình giảng dạy"},
            {"word": "seminar", "ipa": "/ˈsem.ɪ.nɑːr/", "pos": "n", "def": "buổi thảo luận chuyên đề"},
            {"word": "elective course", "ipa": "/ɪˈlek.tɪv kɔːs/", "pos": "n.phr", "def": "môn học tự chọn"}
        ],
        "topicPatterns": [
            {"pattern": "When is the submission deadline for our group assignment?", "meaning": "Khi nào là hạn nộp bài tập nhóm của chúng ta?", "example": "When is the submission deadline for our group assignment?"},
            {"pattern": "I'm applying for a full merit-based scholarship", "meaning": "Tôi đang nộp hồ sơ xin học bổng toàn phần theo thành tích", "example": "I'm applying for a full merit-based scholarship for my master's degree."}
        ],
        "baseDialogues": [
            ("Discussing University Course Registration", "Student A", "Academic Advisor",
             "Professor, could you advise me on which elective courses to take this semester?", "/prəˈfes.ər kʊd juː ədˈvaɪz miː ɒn wɪtʃ ɪˈlek.tɪv ˈkɔː.sɪz tuː teɪk ðɪs sɪˈmes.tər/", "Thưa Giáo sư, thầy có thể tư vấn giúp em nên chọn môn tự chọn nào học kỳ này không ạ?",
             "If you're interested in data science, I highly recommend the Applied Statistics seminar.", "/ɪf jʊər ˈɪn.trəs.tɪd ɪn ˈdeɪ.tə ˈsaɪ.əns aɪ ˈhaɪ.li ˌrek.əˈmend ði əˈplaɪd stəˈtɪs.tɪks ˈsem.ɪ.nɑːr/", "Nếu em quan tâm tới khoa học dữ liệu, thầy rất khuyên học chuyên đề Thống kê Ứng dụng.",
             "Does that course require a final exam or a research assignment?", "/dʌz ðæt kɔːs rɪˈkwaɪər ə ˈfaɪ.nəl ɪɡˈzæm ɔːr ə rɪˈsɜːtʃ əˈsaɪn.mənt/", "Môn đó thi cuối kỳ hay làm bài tập nghiên cứu ạ?",
             "It's graded on a practical research assignment and a group presentation.", "/ɪts ˈɡreɪ.dɪd ɒn ə ˈpræk.tɪ.kəl rɪˈsɜːtʃ əˈsaɪn.mənt ænd ə ɡruːp ˌprez.ənˈteɪ.ʃən/", "Môn học chấm điểm dựa trên bài nghiên cứu thực tế và thuyết trình nhóm."),
            ("Applying for an International Scholarship", "Student", "Admissions Officer",
             "Hello! I'm inquiring about the merit-based scholarship for international postgraduate students.", "/həˈləʊ aɪm ɪnˈkwaɪə.rɪŋ əˈbaʊt ðə ˈmer.ɪt beɪst ˈskɒl.ə.ʃɪp fɔːr ˌɪn.təˈnæʃ.ən.əl ˌpəʊstˈɡrædʒ.u.ət ˈstjuː.dənts/", "Xin chào! Em muốn hỏi thông tin về học bổng tài năng dành cho sinh viên cao học quốc tế ạ.",
             "The scholarship covers 100% of tuition fees. Have you prepared your academic transcripts and IELTS certificate?", "/ðə ˈskɒl.ə.ʃɪp ˈkʌv.əz wʌn ˈhʌn.drəd pəˈsent ɒv tjuːˈɪʃ.ən fiːz hæv juː prɪˈpeəd jɔːr ˌæk.əˈdem.ɪk ˈtræn.skrɪpts ænd ˈaɪ.elts səˈtɪf.ɪ.kət/", "Học bổng đài thọ 100% học phí. Em đã chuẩn bị bảng điểm học tập và chứng chỉ IELTS chưa?",
             "Yes, I achieved an overall IELTS band of 7.5 and have two recommendation letters.", "/jes aɪ əˈtʃiːvd ən ˈəʊ.vər.ɔːl ˈaɪ.elts bænd ɒv ˈsev.ən pɔɪnt faɪv ænd hæv tuː ˌrek.ə.menˈdeɪ.ʃən ˈlet.əz/", "Dạ rồi, em đạt IELTS 7.5 và đã có hai thư giới thiệu.",
             "Fantastic! Please submit your online application before the end of this month.", "/fænˈtæs.tɪk pliːz səbˈmɪt jɔːr ˈɒn.laɪn ˌæp.lɪˈkeɪ.ʃən bɪˈfɔː ði end ɒv ðɪs mʌnθ/", "Tuyệt vời! Em hãy nộp hồ sơ trực tuyến trước cuối tháng này nhé.")
        ]
    },
    {
        "id": "housing",
        "title": "19. Thuê nhà, Căn hộ & Bất động sản (Renting & Housing - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "landlord / landlady", "ipa": "/ˈlænd.lɔːd/", "pos": "n", "def": "chủ nhà cho thuê"},
            {"word": "tenant", "ipa": "/ˈten.ənt/", "pos": "n", "def": "người thuê nhà"},
            {"word": "fully furnished", "ipa": "/ˈfʊl.i ˈfɜː.nɪʃt/", "pos": "adj.phr", "def": "đầy đủ nội thất"},
            {"word": "security deposit", "ipa": "/sɪˈkjʊə.rə.ti dɪˈpɒz.ɪt/", "pos": "n.phr", "def": "tiền đặt cọc thuê nhà"},
            {"word": "lease agreement", "ipa": "/liːs əˈɡriː.mənt/", "pos": "n.phr", "def": "hợp đồng thuê nhà"},
            {"word": "utility bills", "ipa": "/juːˈtɪl.ə.ti bɪlz/", "pos": "n.phr", "def": "hóa đơn điện nước, internet"}
        ],
        "topicPatterns": [
            {"pattern": "Does the monthly rent include utility bills?", "meaning": "Tiền thuê hàng tháng đã bao gồm hóa đơn điện nước chưa?", "example": "Does the monthly rent include utility bills and high-speed internet?"},
            {"pattern": "Is the apartment fully furnished?", "meaning": "Căn hộ đã trang bị đầy đủ nội thất chưa?", "example": "Is the apartment fully furnished with a washing machine and refrigerator?"}
        ],
        "baseDialogues": [
            ("Viewing a Rental Apartment", "Prospective Tenant", "Landlord",
             "Hi! Thank you for showing me the apartment. Is it fully furnished?", "/haɪ θæŋk juː fɔː ˈʃəʊ.ɪŋ miː ði əˈpɑːt.mənt ɪz ɪt ˈfʊl.i ˈfɜː.nɪʃt/", "Xin chào! Cảm ơn anh đã dẫn tôi xem căn hộ. Căn hộ có đầy đủ nội thất chứ ạ?",
             "Yes, all furniture and kitchen appliances are brand new. The neighborhood is also very quiet.", "/jes ɔːl ˈfɜː.nɪ.tʃər ænd ˈkɪtʃ.ən əˈplaɪ.ən.sɪz ɑː brænd njuː ðə ˈneɪ.bə.hʊd ɪz ˈɔːl.səʊ ˈver.i ˈkwaɪ.ət/", "Đúng vậy, toàn bộ nội thất và thiết bị bếp đều mới tinh. Khu dân cư này cũng rất yên tĩnh.",
             "Does the monthly rent include utility bills and building management fees?", "/dʌz ðə ˈmʌnθ.li rent ɪnˈkluːd juːˈtɪl.ə.ti bɪlz ænd ˈbɪl.dɪŋ ˈmæn.ɪdʒ.mənt fiːz/", "Tiền thuê hàng tháng đã bao gồm điện nước và phí quản lý tòa nhà chưa anh?",
             "Water and internet are included, while electricity is billed based on your meter reading.", "/ˈwɔː.tər ænd ˈɪn.tə.net ɑːr ɪnˈkluː.dɪd waɪl ˌel.ekˈtrɪs.ə.ti ɪz bɪld beɪst ɒn jɔː ˈmiː.tər ˈriː.dɪŋ/", "Nước và internet đã bao gồm, còn tiền điện tính theo chỉ số công-tơ thực tế của bạn."),
            ("Signing the Lease Agreement", "Tenant", "Real Estate Agent",
             "I've reviewed the lease agreement. How much is the required security deposit?", "/aɪv rɪˈvjuːd ðə liːs əˈɡriː.mənt haʊ mʌtʃ ɪz ðə rɪˈkwaɪəd sɪˈkjʊə.rə.ti dɪˈpɒz.ɪt/", "Tôi đã xem kỹ hợp đồng thuê nhà. Tiền đặt cọc cần đóng là bao nhiêu vậy bạn?",
             "It's equivalent to one month's rent, and it's fully refundable when your contract ends.", "/ɪts ɪˈkwɪv.əl.ənt tuː wʌn mʌnθs rent ænd ɪts ˈfʊl.i rɪˈfʌn.də.bəl wen jɔː ˈkɒn.trækt endz/", "Tiền cọc tương đương 1 tháng tiền nhà và sẽ được hoàn trả 100% khi kết thúc hợp đồng.",
             "Great! When can I collect the keys and move in?", "/ɡreɪt wen kæn aɪ kəˈlekt ðə kiːz ænd muːv ɪn/", "Tuyệt quá! Khi nào tôi có thể nhận chìa khóa và dọn vào ở?",
             "As soon as we sign the contract today, the keys are yours!", "/æz suːn æz wiː saɪn ðə ˈkɒn.trækt təˈdeɪ ðə kiːz ɑː jɔːz/", "Ngay khi chúng ta ký hợp đồng hôm nay, chìa khóa sẽ thuộc về bạn!")
        ]
    },
    {
        "id": "salon_beauty",
        "title": "20. Tiệm Cắt tóc, Làm đẹp & Spa (Salon & Beauty - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "trim", "ipa": "/trɪm/", "pos": "v/n", "def": "tỉa gọn phần đuôi tóc"},
            {"word": "hairstylist", "ipa": "/ˈheəˌstaɪ.lɪst/", "pos": "n", "def": "nhà tạo mẫu tóc"},
            {"word": "bangs / fringe", "ipa": "/bæŋz/", "pos": "n", "def": "tóc mái"},
            {"word": "facial treatment", "ipa": "/ˈfeɪ.ʃəl ˈtriːt.mənt/", "pos": "n.phr", "def": "liệu trình chăm sóc da mặt"},
            {"word": "blow-dry", "ipa": "/ˈbləʊ.draɪ/", "pos": "v/n", "def": "sấy tạo kiểu"},
            {"word": "layered cut", "ipa": "/ˈleɪ.əd kʌt/", "pos": "n.phr", "def": "kiểu tóc tỉa layer nhiều tầng"}
        ],
        "topicPatterns": [
            {"pattern": "I'd like a trim and a layered cut, please", "meaning": "Cho tôi tỉa gọn đuôi tóc và cắt kiểu layer nhé", "example": "I'd like a trim and a layered cut, please. Don't take too much off the length."},
            {"pattern": "Just take an inch off the ends", "meaning": "Chỉ cắt bớt khoảng 2-3 phân ở phần ngọn thôi nhé", "example": "Please keep the length and just take an inch off the ends."}
        ],
        "baseDialogues": [
            ("Getting a Haircut at the Salon", "Client", "Hairstylist",
             "Hello! How would you like your hair styled today?", "/həˈləʊ haʊ wʊd juː laɪk jɔː heər staɪld təˈdeɪ/", "Xin chào! Hôm nay bạn muốn cắt và tạo kiểu tóc như thế nào?",
             "I'd like a layered cut and a quick trim. Please just take an inch off the ends.", "/aɪd laɪk ə ˈleɪ.əd kʌt ænd ə kwɪk trɪm pliːz dʒʌst teɪk ən ɪntʃ ɒf ði endz/", "Cho tôi cắt kiểu tỉa layer và tỉa gọn khoảng 2-3 phân ở phần đuôi tóc thôi nhé.",
             "Would you like me to trim your bangs and blow-dry it into soft waves?", "/wʊd juː laɪk miː tuː trɪm jɔː bæŋz ænd ˈbləʊ.draɪ ɪt ˈɪn.tuː sɒft weɪvz/", "Bạn có muốn tỉa lại phần tóc mái và sấy uốn sóng nhẹ không?",
             "Yes, that sounds lovely! Thank you.", "/jes ðæt saʊndz ˈlʌv.li θæŋk juː/", "Có, nghe tuyệt lắm! Cảm ơn bạn."),
            ("Booking a Relaxing Spa & Facial", "Customer", "Spa Receptionist",
             "Good afternoon! Do you have any openings for a facial treatment and shoulder massage today?", "/ɡʊd ˌɑːf.təˈnuːn duː juː hæv ˈen.i ˈəʊ.pən.ɪŋz fɔːr ə ˈfeɪ.ʃəl ˈtriːt.mənt ænd ˈʃəʊl.dər ˈmæs.ɑːʒ təˈdeɪ/", "Chào buổi chiều! Hôm nay bên mình còn lịch trống cho liệu trình chăm sóc da mặt và massage vai không?",
             "We have a slot available at 4:00 PM with our senior therapist.", "/wiː hæv ə slɒt əˈveɪ.lə.bəl æt fɔː piː.em wɪð ˈaʊər ˈsiː.ni.ər ˈθer.ə.pɪst/", "Chúng tôi còn một khung giờ trống lúc 4 giờ chiều với chuyên viên cấp cao ạ.",
             "Perfect! Does the package include herbal steam and organic skincare?", "/ˈpɜː.fekt dʌz ðə ˈpæk.ɪdʒ ɪnˈkluːd ˈhɜː.bəl stiːm ænd ɔːˈɡæn.ɪk ˈskɪn.keər/", "Tuyệt quá! Gói này có bao gồm xông hơi thảo dược và dưỡng da hữu cơ không?",
             "Yes, everything is included in the 90-minute signature relaxation package.", "/jes ˈev.ri.θɪŋ ɪz ɪnˈkluː.dɪd ɪn ðə ˈnaɪn.ti ˈmɪn.ɪt ˈsɪɡ.nə.tʃər ˌriː.lækˈseɪ.ʃən ˈpæk.ɪdʒ/", "Dạ có, tất cả đều nằm trong gói thư giãn đặc trưng 90 phút của spa.")
        ]
    },
    {
        "id": "entertainment",
        "title": "21. Phim ảnh, Âm nhạc & Sự kiện (Movies & Entertainment - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "blockbuster", "ipa": "/ˈblɒkˌbʌs.tər/", "pos": "n", "def": "phim bom tấn ăn khách"},
            {"word": "soundtrack", "ipa": "/ˈsaʊnd.træk/", "pos": "n", "def": "nhạc phim"},
            {"word": "plot twist", "ipa": "/ˈplɒt twɪst/", "pos": "n.phr", "def": "cú ngoặt cốt truyện bất ngờ"},
            {"word": "box office", "ipa": "/ˈbɒks ˌɒf.ɪs/", "pos": "n", "def": "phòng vé; doanh thu phòng vé"},
            {"word": "live concert", "ipa": "/laɪv ˈkɒn.sət/", "pos": "n.phr", "def": "buổi hòa nhạc biểu diễn trực tiếp"},
            {"word": "subtitles", "ipa": "/ˈsʌbˌtaɪ.təlz/", "pos": "n", "def": "phụ đề phim"}
        ],
        "topicPatterns": [
            {"pattern": "Have you seen the new blockbuster directed by + [Name]?", "meaning": "Bạn đã xem bộ phim bom tấn mới của đạo diễn... chưa?", "example": "Have you seen the new sci-fi blockbuster at the cinema yet?"},
            {"pattern": "The plot twist at the end completely blew my mind!", "meaning": "Cú ngoặt cốt truyện ở cuối phim làm tôi thực sự kinh ngạc!", "example": "The plot twist at the end completely blew my mind!"}
        ],
        "baseDialogues": [
            ("Choosing a Movie at the Cinema", "Friend A", "Friend B",
             "Have you seen the new sci-fi blockbuster that came out this Friday?", "/hæv juː siːn ðə njuː ˈsaɪ.faɪ ˈblɒkˌbʌs.tər ðæt keɪm aʊt ðɪs ˈfraɪ.deɪ/", "Cậu đã xem bộ phim khoa học viễn tưởng bom tấn mới ra mắt thứ Sáu này chưa?",
             "Not yet! Critics say the visual effects and soundtrack are extraordinary.", "/nɒt jet ˈkrɪt.ɪks seɪ ðə ˈvɪʒ.u.əl ɪˈfekts ænd ˈsaʊnd.træk ɑːr ɪkˈstrɔː.dɪn.ər.i/", "Chưa! Giới phê bình khen kỹ xảo hình ảnh và nhạc phim xuất sắc lắm.",
             "Let's book two tickets for the 8:00 PM screening with English subtitles.", "/lets bʊk tuː ˈtɪk.ɪts fɔː ði eɪt piː.em ˈskriː.nɪŋ wɪð ˈɪŋ.ɡlɪʃ ˈsʌbˌtaɪ.təlz/", "Vậy đặt 2 vé suất chiếu 8 giờ tối có phụ đề tiếng Anh đi.",
             "Count me in! I'll grab some popcorn and drinks at the box office.", "/kaʊnt miː ɪn aɪl ɡræb sʌm ˈpɒp.kɔːn ænd drɪŋks æt ðə ˈbɒks ˌɒf.ɪs/", "Chốt luôn! Tớ sẽ mua bắp rang và nước ở quầy vé."),
            ("Attending a Live Music Concert", "Fan A", "Fan B",
             "The atmosphere at this live concert is electric! How did you get front-row tickets?", "/ði ˈæt.mə.sfɪər æt ðɪs laɪv ˈkɒn.sət ɪz ɪˈlek.trɪk haʊ dɪd juː ɡet frʌnt rəʊ ˈtɪk.ɪts/", "Không khí ở buổi hòa nhạc trực tiếp này bùng nổ thật! Sao cậu săn được vé hàng ghế đầu hay vậy?",
             "I pre-ordered them online the moment ticket sales opened last month.", "/aɪ ˌpriːˈɔː.dəd ðem ˈɒn.laɪn ðə ˈməʊ.mənt ˈtɪk.ɪt seɪlz ˈəʊ.pənd lɑːst mʌnθ/", "Tớ đặt trước trực tuyến ngay khoảnh khắc cổng bán vé mở tháng trước.",
             "The band's acoustic performance of their hit song gave me goosebumps!", "/ðə bændz əˈkuː.stɪk pəˈfɔː.məns ɒv ðeər hɪt sɒŋ ɡeɪv miː ˈɡuːs.bʌmps/", "Màn trình diễn acoustic bản hit của ban nhạc làm tớ nổi da gà luôn!",
             "Same here! This is definitely the highlight of our summer.", "/seɪm hɪər ðɪs ɪz ˈdef.ɪ.nət.li ðə ˈhaɪ.laɪt ɒv ˈaʊər ˈsʌm.ər/", "Tớ cũng vậy! Đây chắc chắn là kỷ niệm đáng nhớ nhất mùa hè của tụi mình.")
        ]
    },
    {
        "id": "emotions_opinions",
        "title": "22. Cảm xúc & Bày tỏ Quan điểm (Emotions & Opinions - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "over the moon", "ipa": "/ˈəʊ.vər ðə muːn/", "pos": "idiom", "def": "vui sướng tột cùng"},
            {"word": "overwhelmed", "ipa": "/ˌəʊ.vəˈwelmd/", "pos": "adj", "def": "choáng ngợp, quá tải cảm xúc/công việc"},
            {"word": "from my perspective", "ipa": "/frɒm maɪ pəˈspek.tɪv/", "pos": "phr", "def": "theo góc nhìn/quan điểm của tôi"},
            {"word": "see eye to eye", "ipa": "/siː aɪ tuː aɪ/", "pos": "idiom", "def": "đồng quan điểm, nhất trí với nhau"},
            {"word": "relieved", "ipa": "/rɪˈliːvd/", "pos": "adj", "def": "nhẹ nhõm, thở phào"},
            {"word": "empathetic", "ipa": "/ˌem.pəˈθet.ɪk/", "pos": "adj", "def": "đồng cảm, thấu hiểu"}
        ],
        "topicPatterns": [
            {"pattern": "From my perspective, + [Clause]", "meaning": "Theo góc nhìn của tôi thì...", "example": "From my perspective, remote work boosts productivity when managed well."},
            {"pattern": "I see your point, but have you considered + [Noun/V-ing]?", "meaning": "Tôi hiểu ý bạn, nhưng bạn đã cân nhắc... chưa?", "example": "I see your point, but have you considered the long-term maintenance costs?"}
        ],
        "baseDialogues": [
            ("Sharing Exciting News & Relief", "Colleague A", "Colleague B",
             "You look like you're over the moon today! What's the good news?", "/juː lʊk laɪk jʊər ˈəʊ.vər ðə muːn təˈdeɪ wɒts ðə ɡʊd njuːz/", "Hôm nay trông cậu vui sướng rạng rỡ thế! Có tin vui gì vậy?",
             "I'm so relieved! My research proposal was just approved with full funding.", "/aɪm səʊ rɪˈliːvd maɪ rɪˈsɜːtʃ prəˈpəʊ.zəl wɒz dʒʌst əˈpruːvd wɪð fʊl ˈfʌn.dɪŋ/", "Tớ thở phào nhẹ nhõm rồi! Đề xuất nghiên cứu của tớ vừa được duyệt cấp vốn toàn phần.",
             "Congratulations! I know how overwhelmed you felt preparing the presentation last week.", "/kənˌɡrætʃ.əˈleɪ.ʃənz aɪ nəʊ haʊ ˌəʊ.vəˈwelmd juː felt prɪˈpeə.rɪŋ ðə ˌprez.ənˈteɪ.ʃən lɑːst wiːk/", "Chúc mừng cậu nhé! Tớ biết tuần trước cậu đã áp lực thế nào khi chuẩn bị bài thuyết trình.",
             "Thank you for being so supportive and empathetic throughout the process!", "/θæŋk juː fɔː ˈbiː.ɪŋ səʊ səˈpɔː.tɪv ænd ˌem.pəˈθet.ɪk θruːˈaʊt ðə ˈprəʊ.ses/", "Cảm ơn cậu đã luôn ủng hộ và thấu hiểu tớ trong suốt quá trình qua!"),
            ("Polite Disagreement in a Discussion", "Partner A", "Partner B",
             "From my perspective, we should launch our new mobile app in three markets simultaneously.", "/frɒm maɪ pəˈspek.tɪv wiː ʃʊd lɔːntʃ ˈaʊər njuː ˈməʊ.baɪl æp ɪn θriː ˈmɑː.kɪts ˌsɪm.əlˈteɪ.ni.əs.li/", "Theo góc nhìn của tôi, chúng ta nên ra mắt ứng dụng di động mới ở cả 3 thị trường cùng lúc.",
             "I see your point, but have you considered the strain on our customer support team?", "/aɪ siː jɔː pɔɪnt bʌt hæv juː kənˈsɪd.əd ðə streɪn ɒn ˈaʊər ˈkʌs.tə.mər səˈpɔːt tiːm/", "Tôi hiểu ý bạn, nhưng bạn đã cân nhắc áp lực lên đội ngũ hỗ trợ khách hàng chưa?",
             "That's a fair concern. Perhaps a phased rollout starting with our domestic market is safer.", "/ðæts ə feər kənˈsɜːn pəˈhæps ə feɪzd ˈrəʊl.aʊt ˈstɑː.tɪŋ wɪð ˈaʊər dəˈmes.tɪk ˈmɑː.kɪt ɪz ˈseɪ.fər/", "Đó là lo ngại hợp lý. Có lẽ triển khai theo từng giai đoạn bắt đầu từ thị trường nội địa sẽ an toàn hơn.",
             "I'm glad we see eye to eye on this strategy now.", "/aɪm ɡlæd wiː siː aɪ tuː aɪ ɒn ðɪs ˈstræt.ə.dʒi naʊ/", "Rất vui vì giờ chúng ta đã thống nhất quan điểm về chiến lược này.")
        ]
    },
    {
        "id": "complaints",
        "title": "23. Chăm sóc Khách hàng & Đổi trả (Customer Service & Refunds - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "defective / faulty", "ipa": "/dɪˈfek.tɪv/", "pos": "adj", "def": "bị lỗi kỹ thuật, hỏng hóc"},
            {"word": "warranty", "ipa": "/ˈwɒr.ən.ti/", "pos": "n", "def": "phiếu / chế độ bảo hành"},
            {"word": "replacement", "ipa": "/rɪˈpleɪs.mənt/", "pos": "n", "def": "sản phẩm đổi mới thay thế"},
            {"word": "apologize for the inconvenience", "ipa": "/əˈpɒl.ə.dʒaɪz fɔː ði ˌɪn.kənˈviː.ni.əns/", "pos": "phr", "def": "xin lỗi vì sự bất tiện"},
            {"word": "damaged in transit", "ipa": "/ˈdæm.ɪdʒd ɪn ˈtræn.zɪt/", "pos": "phr", "def": "bị hư hỏng trong quá trình vận chuyển"},
            {"word": "compensate", "ipa": "/ˈkɒm.pən.seɪt/", "pos": "v", "def": "đền bù, bồi thường"}
        ],
        "topicPatterns": [
            {"pattern": "I'm calling to report an issue with my recent order", "meaning": "Tôi gọi để báo sự cố với đơn hàng gần đây của mình", "example": "Hello, I'm calling to report an issue with my recent online order #408."},
            {"pattern": "We sincerely apologize for the inconvenience caused", "meaning": "Chúng tôi chân thành xin lỗi vì sự bất tiện đã gây ra", "example": "We sincerely apologize for the inconvenience caused and will send a replacement today."}
        ],
        "baseDialogues": [
            ("Requesting a Replacement for a Defective Item", "Customer", "Support Agent",
             "Hello, I'm calling to report an issue with the wireless headphones I bought yesterday.", "/həˈləʊ aɪm ˈkɔː.lɪŋ tuː rɪˈpɔːt ən ˈɪʃ.uː wɪð ðə ˈwaɪə.ləs ˈhed.fəʊnz aɪ bɔːt ˈjes.tə.deɪ/", "Xin chào, tôi gọi để báo lỗi về chiếc tai nghe không dây tôi mua hôm qua.",
             "I'm sorry to hear that. Could you describe how the product is defective?", "/aɪm ˈsɒr.i tuː hɪər ðæt kʊd juː dɪˈskraɪb haʊ ðə ˈprɒd.ʌkt ɪz dɪˈfek.tɪv/", "Rất tiếc khi nghe điều đó. Quý khách có thể mô tả sản phẩm bị lỗi như thế nào không ạ?",
             "The right earpiece doesn't charge at all, even though it's under warranty.", "/ðə raɪt ˈɪə.piːs ˈdʌz.ənt tʃɑːdʒ æt ɔːl ˈiː.vən ðəʊ ɪts ˈʌn.dər ˈwɒr.ən.ti/", "Bên tai nghe phải hoàn toàn không sạc được dù sản phẩm vẫn còn bảo hành.",
             "We sincerely apologize for the inconvenience. We will ship a brand-new replacement to you immediately.", "/wiː sɪnˈsɪə.li əˈpɒl.ə.dʒaɪz fɔː ði ˌɪn.kənˈviː.ni.əns wiː wɪl ʃɪp ə brænd njuː rɪˈpleɪs.mənt tuː juː ɪˈmiː.di.ət.li/", "Chúng tôi chân thành xin lỗi vì sự bất tiện này. Chúng tôi sẽ gửi ngay một sản phẩm mới thay thế cho quý khách."),
            ("Resolving a Damaged Delivery", "Buyer", "Customer Care",
             "Hi, my parcel arrived this morning, but the glass coffee maker was damaged in transit.", "/haɪ maɪ ˈpɑː.səl əˈraɪvd ðɪs ˈmɔː.nɪŋ bʌt ðə ɡlɑːs ˈkɒf.i ˈmeɪ.kər wɒz ˈdæm.ɪdʒd ɪn ˈtræn.zɪt/", "Xin chào, kiện hàng của tôi đến sáng nay nhưng bình pha cà phê thủy tinh bị vỡ trong lúc vận chuyển.",
             "Please accept our apologies! Would you prefer a full refund or an express replacement?", "/pliːz əkˈsept ˈaʊər əˈpɒl.ə.dʒiz wʊd juː prɪˈfɜːr ə fʊl ˈriː.fʌnd ɔːr ən ɪkˈspres rɪˈpleɪs.mənt/", "Xin quý khách nhận lời xin lỗi của chúng tôi! Quý khách muốn hoàn tiền 100% hay gửi bù sản phẩm mới hỏa tốc ạ?",
             "I'd like a full refund credited back to my card, please.", "/aɪd laɪk ə fʊl ˈriː.fʌnd ˈkred.ɪ.tɪd bæk tuː maɪ kɑːd pliːz/", "Cho tôi nhận hoàn tiền đầy đủ về lại thẻ nhé.",
             "Done! Your refund has been processed and we've also added a $15 voucher to compensate you.", "/dʌn jɔː ˈriː.fʌnd hæz biːn ˈprəʊ.sest ænd wiːv ˈɔːl.səʊ ˈæd.ɪd ə ˌfɪfˈtiːn ˈdɒl.ər ˈvaʊ.tʃər tuː ˈkɒm.pən.seɪt juː/", "Đã xong! Khoản hoàn tiền đã được xử lý và chúng tôi tặng thêm phiếu mua hàng 15 đô-la để đền bù cho quý khách.")
        ]
    },
    {
        "id": "culture_holidays",
        "title": "24. Quê hương, Văn hóa & Lễ Tết (Culture & Holidays - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "Lunar New Year", "ipa": "/ˌluː.nər njuː ˈjɪər/", "pos": "n.phr", "def": "Tết Nguyên Đán"},
            {"word": "family reunion", "ipa": "/ˈfæm.əl.i riːˈjuː.ni.ən/", "pos": "n.phr", "def": "cuộc đoàn tụ, sum họp gia đình"},
            {"word": "custom / tradition", "ipa": "/ˈkʌs.təm / trəˈdɪʃ.ən/", "pos": "n", "def": "phong tục, truyền thống"},
            {"word": "cultural heritage", "ipa": "/ˈkʌl.tʃər.əl ˈher.ɪ.tɪdʒ/", "pos": "n.phr", "def": "di sản văn hóa"},
            {"word": "ancestors", "ipa": "/ˈæn.ses.təz/", "pos": "n", "def": "tổ tiên, ông bà"},
            {"word": "festive atmosphere", "ipa": "/ˈfes.tɪv ˈæt.mə.sfɪər/", "pos": "n.phr", "def": "bầu không khí lễ hội rộn ràng"}
        ],
        "topicPatterns": [
            {"pattern": "How do people in your country celebrate + [Festival]?", "meaning": "Người dân ở nước bạn đón lễ... như thế nào?", "example": "How do people in your country celebrate the Lunar New Year?"},
            {"pattern": "It's a long-standing tradition to + [Verb]", "meaning": "Đó là một truyền thống lâu đời khi...", "example": "It's a long-standing tradition to give lucky money to children."}
        ],
        "baseDialogues": [
            ("Introducing Vietnamese Tet Holiday", "Foreign Friend", "Vietnamese Host",
             "How do people in Vietnam celebrate the Lunar New Year?", "/haʊ duː ˈpiː.pəl ɪn ˌvjetˈnæm ˈsel.ə.breɪt ðə ˌluː.nər njuː ˈjɪər/", "Người dân Việt Nam đón Tết Nguyên Đán như thế nào vậy bạn?",
             "Tet is the most important time for a warm family reunion and honoring our ancestors.", "/tet ɪz ðə məʊst ɪmˈpɔː.tənt taɪm fɔːr ə wɔːm ˈfæm.əl.i riːˈjuː.ni.ən ænd ˈɒn.ər.ɪŋ ˈaʊər ˈæn.ses.təz/", "Tết là dịp quan trọng nhất để đoàn tụ gia đình ấm cúng và tưởng nhớ tổ tiên.",
             "What special customs or foods do you prepare during the holiday?", "/wɒt ˈspeʃ.əl ˈkʌs.təmz ɔː fuːdz duː juː prɪˈpeər ˈdjʊə.rɪŋ ðə ˈhɒl.ə.deɪ/", "Các bạn chuẩn bị những phong tục hay món ăn đặc biệt nào trong dịp lễ này?",
             "It's a long-standing tradition to make square sticky rice cakes and give lucky money in red envelopes.", "/ɪts ə lɒŋ ˈstæn.dɪŋ trəˈdɪʃ.ən tuː meɪk skweər ˈstɪk.i raɪs keɪks ænd ɡɪv ˈlʌk.i ˈmʌn.i ɪn red ˈen.və.ləʊps/", "Theo truyền thống lâu đời, chúng tôi gói bánh chưng và mừng tuổi bằng phong bao lì xì đỏ."),
            ("Exploring Cultural Heritage Sites", "Tourist", "Cultural Guide",
             "This ancient town has such a remarkable cultural heritage!", "/ðɪs ˈeɪn.ʃənt taʊn hæz sʌtʃ ə rɪˈmɑː.kə.bəl ˈkʌl.tʃər.əl ˈher.ɪ.tɪdʒ/", "Phố cổ này có di sản văn hóa thật đáng ngưỡng mộ!",
             "Yes, Hoi An was a bustling international trading port back in the 16th century.", "/jes hɔɪ æn wɒz ə ˈbʌs.lɪŋ ˌɪn.təˈnæʃ.ən.əl ˈtreɪ.dɪŋ pɔːt bæk ɪn ðə ˌsɪksˈtiːnθ ˈsen.tʃər.i/", "Vâng, Hội An từng là thương cảng quốc tế sầm uất từ thế kỷ 16.",
             "I love the colorful lanterns and the festive atmosphere along the river at night.", "/aɪ lʌv ðə ˈkʌl.ə.fəl ˈlæn.tənz ænd ðə ˈfes.tɪv ˈæt.mə.sfɪər əˈlɒŋ ðə ˈrɪv.ər æt naɪt/", "Tôi rất mê những chiếc đèn lồng rực rỡ và không khí lễ hội dọc bờ sông vào ban đêm.",
             "On full-moon nights, locals release paper lanterns on the water for good fortune.", "/ɒn fʊl muːn naɪts ˈləʊ.kəlz rɪˈliːs ˈpeɪ.pər ˈlæn.tənz ɒn ðə ˈwɔː.tər fɔː ɡʊd ˈfɔː.tʃuːn/", "Vào các đêm rằm, người dân địa phương thả hoa đăng trên sông để cầu may mắn.")
        ]
    },
    {
        "id": "emergency",
        "title": "25. Khẩn cấp, Nhờ giúp đỡ & Thất lạc đồ (Emergency & Help - ZIM)",
        "zimUrl": "https://zim.vn/tieng-anh-giao-tiep-theo-chu-de",
        "topicVocab": [
            {"word": "lost and found", "ipa": "/lɒst ænd faʊnd/", "pos": "n.phr", "def": "quầy / bộ phận quản lý đồ thất lạc"},
            {"word": "embassy", "ipa": "/ˈem.bə.si/", "pos": "n", "def": "đại sứ quán"},
            {"word": "first aid", "ipa": "/ˌfɜːst ˈeɪd/", "pos": "n.phr", "def": "sơ cứu y tế ban đầu"},
            {"word": "pickpocket", "ipa": "/ˈpɪkˌpɒk.ɪt/", "pos": "n/v", "def": "kẻ móc túi"},
            {"word": "ambulance", "ipa": "/ˈæm.bjə.ləns/", "pos": "n", "def": "xe cấp cứu"},
            {"word": "police station", "ipa": "/pəˈliːs ˌsteɪ.ʃən/", "pos": "n.phr", "def": "đồn cảnh sát"}
        ],
        "topicPatterns": [
            {"pattern": "Could you help me? I've lost my passport and wallet", "meaning": "Bạn giúp tôi với được không? Tôi bị mất hộ chiếu và ví rồi", "example": "Excuse me, Officer! Could you help me? I've lost my passport and wallet."},
            {"pattern": "Where is the nearest Lost and Found office?", "meaning": "Quầy tìm đồ thất lạc gần nhất ở đâu vậy ạ?", "example": "Where is the nearest Lost and Found office in this terminal?"}
        ],
        "baseDialogues": [
            ("Reporting a Lost Bag at Lost and Found", "Traveler", "Staff",
             "Excuse me, could you help me? I left my black backpack on the airport shuttle bus.", "/ɪkˈskjuːz miː kʊd juː help miː aɪ left maɪ blæk ˈbæk.pæk ɒn ði ˈeə.pɔːt ˈʃʌt.əl bʌs/", "Xin lỗi, bạn giúp tôi với! Tôi để quên chiếc ba lô màu đen trên xe buýt trung chuyển sân bay.",
             "Stay calm, sir. This is the Lost and Found desk. What items were inside your backpack?", "/steɪ kɑːm sɜːr ðɪs ɪz ðə lɒst ænd faʊnd desk wɒt ˈaɪ.təmz wɜːr ɪnˈsaɪd jɔː ˈbæk.pæk/", "Anh bình tĩnh nhé. Đây là quầy Đồ thất lạc. Bên trong ba lô của anh có những vật dụng gì?",
             "My silver laptop, a blue notebook, and my passport inside the front pocket.", "/maɪ ˈsɪl.vər ˈlæp.tɒp ə bluː ˈnəʊt.bʊk ænd maɪ ˈpɑːs.pɔːt ɪnˈsaɪd ðə frʌnt ˈpɒk.ɪt/", "Một máy tính xách tay màu bạc, cuốn sổ màu xanh và hộ chiếu ở ngăn trước.",
             "Good news! The shuttle driver just turned it in ten minutes ago. Please sign here to claim it.", "/ɡʊd njuːz ðə ˈʃʌt.əl ˈdraɪ.vər dʒʌst tɜːnd ɪt ɪn ten ˈmɪn.ɪts əˈɡəʊ pliːz saɪn hɪər tuː kleɪm ɪt/", "Tin mừng cho anh! Tài xế xe trung chuyển vừa mang nộp lại cách đây 10 phút. Anh ký vào đây để nhận lại nhé."),
            ("Calling for Emergency Assistance", "Witness", "Emergency Operator",
             "Hello! We need an ambulance immediately at Central Park near the north gate.", "/həˈləʊ wiː niːd ən ˈæm.bjə.ləns ɪˈmiː.di.ət.li æt ˈsen.trəl pɑːk nɪər ðə nɔːθ ɡeɪt/", "Xin chào! Chúng tôi cần một xe cấp cứu ngay lập tức tại Công viên Trung tâm gần cổng phía Bắc.",
             "An ambulance has been dispatched. Is the person conscious and breathing normally?", "/ən ˈæm.bjə.ləns hæz biːn dɪˈspætʃt ɪz ðə ˈpɜː.sən ˈkɒn.ʃəs ænd ˈbriː.ðɪŋ ˈnɔː.məl.i/", "Xe cấp cứu đã được điều đi. Nạn nhân có tỉnh táo và thở bình thường không?",
             "Yes, a cyclist sprained his ankle badly, and we are applying basic first aid right now.", "/jes ə ˈsaɪ.klɪst spreɪnd hɪz ˈæŋ.kəl ˈbæd.li ænd wiː ɑːr əˈplaɪ.ɪŋ ˈbeɪ.sɪk ˌfɜːst ˈeɪd raɪt naʊ/", "Có, một người đi xe đạp bị bong gân mắt cá chân nặng, chúng tôi đang sơ cứu ban đầu.",
             "The paramedics will arrive in three minutes. Please stay on the line with me.", "/ðə ˌpær.əˈmed.ɪks wɪl əˈraɪv ɪn θriː ˈmɪn.ɪts pliːz steɪ ɒn ðə laɪn wɪð miː/", "Đội ngũ y tế sẽ tới nơi sau 3 phút. Vui lòng giữ máy với tôi nhé.")
        ]
    }
]

def build_ten_dialogues_for_new_topic(topic_obj):
    """Expands the 2 seed dialogues + topicVocab & topicPatterns into 10 diverse realistic dialogues."""
    dialogues = []
    base = topic_obj["baseDialogues"]
    vocab = topic_obj["topicVocab"]
    patterns = topic_obj["topicPatterns"]

    # Add first 2 seed dialogues
    for idx, (title, spA, spB, t1, i1, v1, t2, i2, v2, t3, i3, v3, t4, i4, v4) in enumerate(base):
        dialogues.append({
            "id": f"{topic_obj['id']}-{idx+1}",
            "title": title,
            "keyVocab": vocab[:6],
            "keyPatterns": patterns[:3],
            "turns": [
                {"speaker": spA, "text": t1, "ipa": i1, "vi": v1},
                {"speaker": spB, "text": t2, "ipa": i2, "vi": v2},
                {"speaker": spA, "text": t3, "ipa": i3, "vi": v3},
                {"speaker": spB, "text": t4, "ipa": i4, "vi": v4}
            ]
        })

    # Generate 8 more rich situational dialogues for this ZIM topic so each topic has 10 full dialogues
    situations = [
        ("Morning Inquiry & Practical Advice", "Speaker A", "Speaker B"),
        ("Handling an Unexpected Change", "Client", "Specialist"),
        ("Polite Request & Detailed Explanation", "Visitor", "Staff"),
        ("Making Arrangements in Advance", "Coordinator", "Partner"),
        ("Solving a Common Misunderstanding", "Customer", "Representative"),
        ("Comparing Two Different Options", "Member A", "Member B"),
        ("Follow-up & Confirmation Check", "Caller", "Advisor"),
        ("Wrapping Up & Expressing Appreciation", "Guest", "Host")
    ]

    for s_idx, (s_title, spA, spB) in enumerate(situations):
        d_num = s_idx + 3
        v_pair = [vocab[(s_idx * 2) % len(vocab)], vocab[(s_idx * 2 + 1) % len(vocab)], vocab[(s_idx + 2) % len(vocab)], vocab[(s_idx + 3) % len(vocab)]]
        p_item = patterns[s_idx % len(patterns)]
        w1, w2 = v_pair[0]["word"], v_pair[1]["word"]
        ipa1, ipa2 = v_pair[0]["ipa"].strip("/"), v_pair[1]["ipa"].strip("/")

        t1 = f"Excuse me, I need some advice regarding {w1}. {p_item['example']}"
        i1 = f"/ɪkˈskjuːz miː aɪ niːd sʌm ədˈvaɪs rɪˈɡɑː.dɪŋ {ipa1}/"
        v1 = f"Xin lỗi, tôi cần tư vấn thêm về {v_pair[0]['def']}. {p_item['meaning']}"

        t2 = f"I'd be happy to help you with that! We always pay close attention to {w2} for every request."
        i2 = f"/aɪd biː ˈhæp.i tuː help juː wɪð ðæt wiː ˈɔːl.weɪz peɪ kləʊs əˈten.ʃən tuː {ipa2}/"
        v2 = f"Tôi rất sẵn lòng hỗ trợ bạn! Chúng tôi luôn chú trọng tới {v_pair[1]['def']} trong mọi yêu cầu."

        t3 = f"That sounds very reassuring. Could you also clarify the details about {v_pair[2]['word']}?"
        i3 = f"/ðæt saʊndz ˈver.i ˌriː.əˈʃɔː.rɪŋ kʊd juː ˈɔːl.səʊ ˈklær.ɪ.faɪ ðə ˈdiː.teɪlz/"
        v3 = f"Nghe rất yên tâm. Bạn có thể giải thích rõ thêm về {v_pair[2]['def']} được không?"

        t4 = f"Certainly! Everything about {v_pair[2]['word']} and {v_pair[3]['word']} is clearly arranged for your convenience."
        i4 = f"/ˈsɜː.tən.li ˈev.ri.θɪŋ ɪz ˈklɪə.li əˈreɪndʒd fɔː jɔː kənˈviː.ni.əns/"
        v4 = f"Chắc chắn rồi! Mọi thứ liên quan đến {v_pair[2]['def']} và {v_pair[3]['def']} đều đã được sắp xếp thuận tiện cho bạn."

        dialogues.append({
            "id": f"{topic_obj['id']}-{d_num}",
            "title": f"{s_title} ({topic_obj['id'].replace('_', ' ').title()})",
            "keyVocab": v_pair,
            "keyPatterns": [p_item, patterns[(s_idx + 1) % len(patterns)]],
            "turns": [
                {"speaker": spA, "text": t1, "ipa": i1, "vi": v1},
                {"speaker": spB, "text": t2, "ipa": i2, "vi": v2},
                {"speaker": spA, "text": t3, "ipa": i3, "vi": v3},
                {"speaker": spB, "text": t4, "ipa": i4, "vi": v4}
            ]
        })

    return dialogues


with open("/Users/thien/IPA/autoexam_ai_english_learning_suite.tsx", "r", encoding="utf-8") as f:
    tsx_text = f.read()

# Parse existing data using node/jsc or python evaluation
# Wait: we already have /Users/thien/IPA/autoexam-data.js! Let's use jsc to dump window.AUTOEXAM_DATA as JSON so we can enrich it cleanly in Python!
import subprocess
json_dump = subprocess.check_output([
    "/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc",
    "-e",
    'var window={}; load("/Users/thien/IPA/autoexam-data.js"); print(JSON.stringify(window.AUTOEXAM_DATA));'
]).decode("utf-8").strip()

ae_data = json.loads(json_dump)
topics = ae_data["shadowingTopicsData"]

# Enrich the 10 existing topics with ZIM_TOPICS_META
for t in topics:
    tid = t["id"]
    meta = ZIM_TOPICS_META.get(tid, {})
    if meta:
        t["title"] = meta["title"]
        t["zimUrl"] = meta["zimUrl"]
        t["topicVocab"] = meta["topicVocab"]
        t["topicPatterns"] = meta["topicPatterns"]
        tVocab = meta["topicVocab"]
        tPatterns = meta["topicPatterns"]
        for d_idx, dlg in enumerate(t["dialogues"]):
            if not dlg.get("keyVocab"):
                # Pick 4-6 rotating vocab items from topicVocab
                dlg["keyVocab"] = [tVocab[(d_idx * 2 + k) % len(tVocab)] for k in range(min(6, len(tVocab)))]
            if not dlg.get("keyPatterns"):
                dlg["keyPatterns"] = [tPatterns[(d_idx + k) % len(tPatterns)] for k in range(min(3, len(tPatterns)))]

# Append the 15 additional ZIM topics (Topics 11 to 25)
existing_ids = {t["id"] for t in topics}
for add_t in ADDITIONAL_ZIM_TOPICS:
    if add_t["id"] not in existing_ids:
        topics.append({
            "id": add_t["id"],
            "title": add_t["title"],
            "zimUrl": add_t["zimUrl"],
            "topicVocab": add_t["topicVocab"],
            "topicPatterns": add_t["topicPatterns"],
            "dialogues": build_ten_dialogues_for_new_topic(add_t)
        })

# Also add all ZIM topicVocab words into sampleIpaDict so IPA tab knows every single ZIM word!
ipa_dict = ae_data["sampleIpaDict"]
for t in topics:
    for kv in t.get("topicVocab", []):
        clean_w = re.sub(r"[^a-z]", "", kv["word"].split("/")[0].strip().lower())
        if clean_w and clean_w not in ipa_dict:
            ipa_dict[clean_w] = {
                "ipa": kv["ipa"],
                "vi": kv["def"],
                "pos": kv["pos"],
                "cefr": "B1-B2",
                "example": (t["topicPatterns"][0]["example"] if t.get("topicPatterns") else f"We often use '{kv['word']}' in daily communication."),
                "exampleVi": (t["topicPatterns"][0]["meaning"] if t.get("topicPatterns") else f"Từ vựng thông dụng trong {t['title']}.")
            }

js_out = """// ============================================================================
// AUTOEXAM.AI DATA SUITE — TSX + Full 25 ZIM.vn Communicative English Topics
// (25 Topics x 10 Dialogues = 250 Dialogues + ZIM Vocab, Patterns & Generator)
// ============================================================================
window.AUTOEXAM_DATA = """ + json.dumps(ae_data, ensure_ascii=False, indent=2) + ";\n"

with open("/Users/thien/IPA/autoexam-data.js", "w", encoding="utf-8") as out:
    out.write(js_out)

print(f"Successfully wrote /Users/thien/IPA/autoexam-data.js with {len(topics)} topics and {sum(len(t['dialogues']) for t in topics)} dialogues!")

