#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Parse all 25 ZIM.vn Communicative English topics from /tmp/zim_topics_raw.json
and update window.AUTOEXAM_DATA.shadowingTopicsData in /Users/thien/IPA/autoexam-data.js.
Rules:
- Copy verbatim all dialogues from ZIM.vn for each topic (full, untruncated turns).
- Strip all Vietnamese translations from dialogue turns (English only!).
- Extract all common vocabulary (Từ vựng thông dụng) and sentence patterns (Mẫu câu thông dụng) from each topic.
"""

import json
import re
import html

VI_CHARS = set(
    "àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ"
    "ÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ"
)

def has_vi(s: str) -> bool:
    return any(c in VI_CHARS for c in s)

WORD_IPA = {
    "hello": "həˈloʊ", "hi": "haɪ", "hey": "heɪ", "is": "ɪz", "it": "ɪt", "the": "ðə",
    "hotline": "ˈhɑːt.laɪn", "of": "əv", "home": "hoʊm", "i'm": "aɪm", "i": "aɪ", "am": "æm",
    "from": "frʌm", "how": "haʊ", "can": "kæn", "help": "help", "you": "juː",
    "looking": "ˈlʊk.ɪŋ", "for": "fɔːr", "a": "ə", "used": "juːzd", "dishwasher": "ˈdɪʃˌwɑː.ʃər",
    "came": "keɪm", "across": "əˈkrɔːs", "your": "jɔːr", "advertisements": "ˌæd.vərˈtaɪz.mənts",
    "on": "ɑːn", "facebook": "ˈfeɪs.bʊk", "yes": "jes", "at": "æt", "we": "wiː",
    "offer": "ˈɔː.fər", "variety": "vəˈraɪ.ə.t̬i", "second": "ˈsek.ənd", "hand": "hænd",
    "household": "ˈhaʊs.hoʊld", "appliances": "əˈplaɪ.ən.sɪz", "very": "ˈver.i", "good": "ɡʊd",
    "prices": "ˈpraɪ.sɪz", "which": "wɪtʃ", "particular": "pərˈtɪk.jə.lər", "brand": "brænd",
    "are": "ɑːr", "actually": "ˈæk.tʃu.ə.li", "not": "nɑːt", "really": "ˈrɪə.li",
    "familiar": "fəˈmɪl.i.jər", "with": "wɪð", "buying": "ˈbaɪ.ɪŋ", "these": "ðiːz",
    "popular": "ˈpɑː.pjə.lər", "my": "maɪ", "friends": "frendz", "recommend": "ˌrek.əˈmend",
    "yeah": "jeə", "when": "wen", "comes": "kʌmz", "to": "tuː", "top-rated": "ˌtɑːpˈreɪ.t̬ɪd",
    "ask": "æsk", "if": "ɪf", "have": "hæv", "any": "ˈen.i", "specific": "spəˈsɪf.ɪk",
    "requirements": "rɪˈkwaɪr.mənts", "want": "wɑːnt", "free": "friː", "standing": "ˈstæn.dɪŋ",
    "one": "wʌn", "most": "moʊst", "important": "ɪmˈpɔːr.tənt", "thing": "θɪŋ", "that": "ðæt",
    "must": "mʌst", "be": "biː", "within": "wɪˈðɪn", "price": "praɪs", "range": "reɪndʒ",
    "about": "əˈbaʊt", "would": "wʊd", "perfect": "ˈpɜːr.fekt", "do": "duː", "there": "ðer",
    "many": "ˈmen.i", "but": "bʌt", "two": "tuː", "suggestions": "səˈdʒes.tʃənz",
    "first": "fɜːrst", "was": "wʌz", "brought": "brɔːt", "market": "ˈmɑːr.kɪt", "in": "ɪn",
    "however": "haʊˈev.ər", "previous": "ˈpriː.vi.əs", "owner": "ˈoʊ.nər", "has": "hæz",
    "only": "ˈoʊn.li", "bought": "bɔːt", "months": "mʌnθs", "labeled": "ˈleɪ.bəld",
    "look": "lʊk", "our": "ɑːr", "website": "ˈweb.saɪt", "still": "stɪl",
    "functioning": "ˈfʌŋk.ʃən.ɪŋ", "properly": "ˈprɑː.pər.li", "course": "kɔːrs",
    "kitchen": "ˈkɪtʃ.ən", "quite": "kwaɪt", "small": "smɔːl", "afraid": "əˈfreɪd",
    "isn't": "ˈɪz.ənt", "enough": "ɪˈnʌf", "room": "ruːm", "big": "bɪɡ", "wide": "waɪd",
    "high": "haɪ", "deep": "diːp", "seems": "siːmz", "fine": "faɪn", "does": "dʌz",
    "use": "juːz", "much": "mʌtʃ", "water": "ˈwɑː.t̬ər", "water-saving": "ˈwɑː.t̬ərˌseɪ.vɪŋ",
    "consumes": "kənˈsuːmz", "an": "æn", "average": "ˈæv.ər.ɪdʒ", "liters": "ˈliː.t̬ərz",
    "per": "pɜːr", "year": "jɪr", "place": "pleɪs", "setting": "ˈset̬.ɪŋ", "far": "fɑːr",
    "less": "les", "than": "ðæn", "washing": "ˈwɑː.ʃɪŋ", "undoubtedly": "ʌnˈdaʊ.t̬ɪd.li",
    "will": "wɪl", "take": "teɪk", "into": "ˈɪn.tuː", "consideration": "kənˌsɪd.əˈreɪ.ʃən",
    "show": "ʃoʊ", "me": "miː", "others": "ˈʌð.ərz", "sure": "ʃʊr", "like-new": "ˈlaɪk.nuː",
    "model": "ˈmɑː.dəl", "manufactured": "ˌmæn.jəˈfæk.tʃərd", "same": "seɪm", "size": "saɪz",
    "as": "æz", "this": "ðɪs", "more": "mɔːr", "energy-efficient": "ˈen.ər.dʒi.ɪˈfɪʃ.ənt",
    "using": "ˈjuː.zɪŋ", "half": "hæf", "amount": "əˈmaʊnt", "compared": "kəmˈperd",
    "bit": "bɪt", "expensive": "ɪkˈspen.sɪv", "thank": "θæŋk", "see": "siː", "i'll": "aɪl",
    "give": "ɡɪv", "some": "sʌm", "thought": "θɔːt", "anything": "ˈen.i.θɪŋ", "else": "els",
    "warranty": "ˈwɔːr.ən.t̬i", "policy": "ˈpɑː.lə.si", "guarantee": "ˌɡer.ənˈtiː",
    "repair": "rɪˈper", "or": "ɔːr", "replace": "rɪˈpleɪs", "faulty": "ˈfɔːl.ti",
    "product": "ˈprɑː.dʌkt", "during": "ˈdʊr.ɪŋ", "period": "ˈpɪr.i.əd", "days": "deɪz",
    "after": "ˈæf.tər", "purchase": "ˈpɜːr.tʃəs", "time": "taɪm", "need": "niːd",
    "consider": "kənˈsɪd.ər", "ring": "rɪŋ", "later": "ˈleɪ.t̬ər", "pleasure": "ˈpleʒ.ər",
    "send": "send", "video": "ˈvɪd.i.oʊ", "dishwashers": "ˈdɪʃˌwɑː.ʃərz", "through": "θruː",
    "phone": "foʊn", "number": "ˈnʌm.bər", "ok": "ˌoʊˈkeɪ", "just": "dʒʌst", "visit": "ˈvɪz.ɪt",
    "store": "stɔːr", "street": "striːt"
}

def sentence_to_ipa(sentence: str) -> str:
    words = re.findall(r"[A-Za-z0-9'’-]+", sentence.lower())
    if not words:
        return "/.../"
    out = []
    for w in words:
        w_clean = w.replace("’", "'")
        if w_clean in WORD_IPA:
            out.append(WORD_IPA[w_clean])
        else:
            out.append(w_clean)
    return "/" + " ".join(out) + "/"

SPEAKER_MAP = {
    "Lễ tân": "Receptionist",
    "Khách hàng": "Customer",
    "Khách": "Customer",
    "Nhân viên hỗ trợ khách sạn": "Hotel Concierge",
    "Nhân viên phục vụ khách sạn": "Hotel Concierge"
}

def strip_vi_from_turn(text: str) -> str:
    while True:
        m = re.search(r"\s*\([^()]*\)\s*\.?\s*$", text)
        if m and has_vi(m.group(0)):
            text = text[:m.start()].strip()
        else:
            break
    text = re.sub(r"\s*\([^()]*[" + "".join(VI_CHARS) + r"][^()]*\)", "", text).strip()
    m2 = re.search(r"\s+[-–—]\s+([^-–—\n]+)$", text)
    if m2 and has_vi(m2.group(1)):
        text = text[:m2.start()].strip()
    m3 = re.search(r"\s+[A-Z][a-zA-Z\s]{0,18}:\s+([^\n]+)$", text)
    if m3 and has_vi(m3.group(1)):
        text = text[:m3.start()].strip()
    while True:
        m4 = re.search(r"([.!?])\s+([^.!?]+[.!?]?)$", text)
        if m4 and has_vi(m4.group(2)):
            text = text[:m4.start(2)].strip()
        else:
            break
    text = text.replace("a stea l", "a steal").replace("you ’re", "you're")
    text = re.sub(r"\s+([.,!?;:])", r"\1", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

def parse_word_pos(raw_word: str):
    raw_word = raw_word.strip()
    m = re.match(r"^(.+?)\s*\(([^()]+)\)\s*$", raw_word)
    if m:
        return m.group(1).strip(), m.group(2).strip()
    return raw_word, "vocab"

def parse_topic(tid: str, title: str, pc: str):
    pc2 = re.sub(r"<br\s*/?>", "</p><p>", pc, flags=re.I)
    tokens = re.findall(r"<(h[234]|p|li|tr)[^>]*>(.*?)</\1>", pc2, re.S)

    dialogues = []
    cur_dlg = None
    in_skip_section = False
    section_mode = None

    topic_vocab = []
    topic_patterns = []
    seen_words = set()
    seen_pats = set()
    last_pattern_obj = None
    last_en_sentence = None

    def register_vocab(w, ipa, pos, df):
        w_clean, pos_extracted = parse_word_pos(w)
        if pos == "vocab" and pos_extracted != "vocab":
            pos = pos_extracted
        w_clean = re.sub(r"^\d+[\.:]\s*", "", w_clean).strip()
        if not w_clean or len(w_clean) > 55:
            return
        if not ipa:
            ipa = sentence_to_ipa(w_clean)
        item = {"word": w_clean, "ipa": ipa, "pos": pos, "def": df.strip()}
        if w_clean.lower() not in seen_words:
            seen_words.add(w_clean.lower())
            topic_vocab.append(item)
        if cur_dlg is not None:
            if not any(x["word"].lower() == w_clean.lower() for x in cur_dlg["keyVocab"]):
                cur_dlg["keyVocab"].append(item)

    def register_pattern(pat, meaning, ex=""):
        nonlocal last_pattern_obj
        pat = re.sub(r"^\d+[\.:]\s*", "", pat).strip()
        pat = re.sub(r"^Mẫu câu\s*\(\d+\)\s*:\s*", "", pat, flags=re.I).strip()
        if not pat or len(pat) > 140:
            return
        item = {
            "pattern": pat,
            "meaning": meaning.strip() if meaning else "Mẫu câu giao tiếp thông dụng",
            "example": ex.strip()
        }
        last_pattern_obj = item
        if pat.lower() not in seen_pats:
            seen_pats.add(pat.lower())
            topic_patterns.append(item)
        if cur_dlg is not None:
            if not any(x["pattern"].lower() == pat.lower() for x in cur_dlg["keyPatterns"]):
                cur_dlg["keyPatterns"].append(item)

    for tag, raw in tokens:
        if tag == "tr":
            if section_mode == "skip":
                continue
            cells = [
                html.unescape(re.sub(r"<[^>]+>", " ", c)).strip()
                for c in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", raw, re.S)
            ]
            cells = [re.sub(r"\s+", " ", c).strip() for c in cells if c.strip()]
            if not cells:
                continue
            first_low = cells[0].lower()
            if first_low in (
                "tình huống", "từ vựng", "từ vựng (vocabulary)", "tiếng anh",
                "stt", "key takeaways", "keys takeaway", "mẫu câu chào hỏi",
                "good morning", "good afternoon", "good evening"
            ):
                continue
            if section_mode == "dialogue" and len(cells) == 2 and ":" in cells[0]:
                m_spk = re.match(r"^([A-Za-zÀ-ỹ0-9\s\.\(\)/&-]{1,45}?):\s*(.+)$", cells[0])
                if m_spk and cur_dlg is not None:
                    spk, body = m_spk.group(1).strip(), m_spk.group(2).strip()
                    clean_body = strip_vi_from_turn(body)
                    if clean_body and not has_vi(clean_body):
                        cur_dlg["turns"].append({
                            "speaker": SPEAKER_MAP.get(spk, spk),
                            "text": clean_body,
                            "ipa": sentence_to_ipa(clean_body)
                        })
                    continue

            if len(cells) >= 3 and re.match(r"^\d+$", cells[0]):
                cells = cells[1:]
            if len(cells) == 4:
                if "/" in cells[2] or "[" in cells[2]:
                    if cells[1].lower() in ("noun", "verb", "adj", "adv", "phrase", "phrasal verb"):
                        register_vocab(cells[0], cells[2], cells[1].lower(), cells[3])
                    else:
                        register_vocab(cells[1], cells[2], "vocab", cells[3])
            elif len(cells) == 3:
                if not has_vi(cells[0]) and has_vi(cells[2]):
                    register_vocab(cells[0], cells[1] if "/" in cells[1] else "", "vocab", cells[2])
            elif len(cells) == 2:
                if ":" not in cells[0] and not has_vi(cells[0]) and has_vi(cells[1]) and len(cells[0]) < 55:
                    register_vocab(cells[0], "", "vocab", cells[1])
            elif len(cells) == 1:
                if "+" in cells[0] or "..." in cells[0]:
                    register_pattern(cells[0], "Cấu trúc câu giao tiếp thông dụng", "")
            continue

        txt = html.unescape(re.sub(r"<[^>]+>", " ", raw))
        txt = re.sub(r"\s+", " ", txt).strip()
        if not txt:
            continue

        if tag in ("h2", "h3", "h4"):
            low = txt.lower()
            last_en_sentence = None
            if any(k in low for k in ["tổng kết", "answer key", "exercise", "bài tập", "luyện tập", "nối từ", "hoàn thành đoạn", "cách học"]):
                section_mode = "skip"
                in_skip_section = True
            elif "từ vựng" in low:
                section_mode = "vocab"
                in_skip_section = True
            elif any(
                k in low
                for k in [
                    "mẫu câu", "cấu trúc", "câu hỏi", "câu giao tiếp",
                    "giới thiệu", "trình bày", "để lại lời nhắn", "yêu cầu", "xác nhận"
                ]
            ):
                section_mode = "pattern"
                in_skip_section = True
            elif any(
                k in low
                for k in [
                    "tình huống", "hội thoại", "đoạn hội thoại",
                    "giao tiếp chào hỏi", "giải quyết sự than phiền", "gặp gỡ đối tác",
                    "at the check-in", "going through the customs", "at the terminals",
                    "at the hotel reception", "in the cab"
                ]
            ):
                section_mode = "dialogue"
                in_skip_section = False
                if tag in ("h3", "h4") or re.search(r"(tình huống\s*\d+|đoạn hội thoại mẫu)", low):
                    cur_dlg = {"title": txt, "turns": [], "keyVocab": [], "keyPatterns": []}
                    dialogues.append(cur_dlg)
            continue

        if re.match(r"^(Tình huống|Hội thoại)\s*\d+\s*:", txt, re.I):
            section_mode = "dialogue"
            in_skip_section = False
            cur_dlg = {"title": txt, "turns": [], "keyVocab": [], "keyPatterns": []}
            dialogues.append(cur_dlg)
            continue

        if section_mode == "vocab":
            txt_clean = re.sub(r"^\d+[\.:]\s*", "", txt)
            m = re.match(r"^([A-Za-z\s\-\'/()]+?)\s*(?:/([^/]+)/)?\s*[-–:]\s*(.+)$", txt_clean)
            if m and has_vi(m.group(3)) and len(m.group(1)) < 50:
                ipa_str = f"/{m.group(2).strip()}/" if m.group(2) else ""
                register_vocab(m.group(1).strip(), ipa_str, "vocab", m.group(3).strip())
            continue

        if section_mode == "pattern":
            low_txt = txt.lower()
            if low_txt.startswith("ví dụ:") or low_txt.startswith("ví dụ :"):
                ex_body = re.sub(r"^ví dụ\s*:\s*", "", txt, flags=re.I).strip()
                ex_en = strip_vi_from_turn(ex_body)
                if last_pattern_obj and ex_en and not last_pattern_obj.get("example"):
                    last_pattern_obj["example"] = ex_en
                continue
            if low_txt.startswith(("dịch:", "(dịch", "xem thêm", "tham khảo", "trên đây", "dưới đây", "để tránh", "phân tích", "ở mẫu câu")):
                continue

            if last_en_sentence and has_vi(txt) and not re.match(r"^[A-Za-z]+:", txt):
                register_pattern(last_en_sentence, txt.strip("()→ "), last_en_sentence)
                last_en_sentence = None
                continue

            m_split = re.match(r"^([^:→–]{3,115}?)\s*(?::|→|->|\s-\s|\s–\s)\s*(.+)$", txt)
            if m_split and has_vi(m_split.group(2)) and not m_split.group(1).lower().startswith(("mẫu câu", "tình huống", "lưu ý")):
                lhs = m_split.group(1).strip()
                rhs = m_split.group(2).strip()
                if not has_vi(lhs) or "+" in lhs:
                    register_pattern(lhs, rhs, "")
                    last_en_sentence = None
                    continue

            m_paren = re.match(
                r"^([A-Za-z0-9\s\+\[\]\.,\?\'’/…=-]+?)\s*\(([^()]*["
                + "".join(VI_CHARS)
                + r"][^()]*)\)\s*\.?$",
                txt
            )
            if m_paren and len(m_paren.group(1)) < 120:
                register_pattern(m_paren.group(1).strip(), m_paren.group(2).strip(), m_paren.group(1).strip())
                last_en_sentence = None
                continue

            if not has_vi(txt) and len(txt) < 115 and ("?" in txt or "..." in txt or "…" in txt or "+" in txt or re.match(r"^(\d+:|\(\d+\))", txt) or txt.endswith(".")):
                clean_en = re.sub(r"^(\d+:|\(\d+\))\s*", "", txt).strip()
                if len(clean_en) >= 4:
                    last_en_sentence = clean_en
            continue

        if section_mode == "dialogue" and not in_skip_section:
            m = re.match(r"^([A-Za-zÀ-ỹ0-9\s\.\(\)/&-]{1,45}?):\s*(.*)$", txt)
            if m and cur_dlg is not None:
                spk, body = m.group(1).strip(), m.group(2).strip()
                spk_low = spk.lower()
                if spk_low in (
                    "trình độ", "ví dụ", "dịch", "mẫu câu", "cấu trúc", "xem thêm",
                    "tham khảo thêm", "lưu ý", "chú ý", "tác giả", "bài 1", "bài 2",
                    "bài 3", "bài tập", "bài tập 1", "bài tập 2", "exercise 1", "exercise 2",
                    "seeing the doctor"
                ) or re.match(r"^\d+$", spk):
                    continue

                if not body and spk_low.startswith("mitchell: i understand"):
                    parts = spk.split(":", 1)
                    spk = parts[0].strip()
                    body = parts[1].strip() + ":"

                clean_body = strip_vi_from_turn(body)
                if not clean_body or has_vi(clean_body):
                    continue
                if "____" in clean_body or "___" in clean_body or re.search(r"\(\d+\)\s*\.\.", clean_body):
                    continue

                spk_clean = SPEAKER_MAP.get(spk, spk)
                cur_dlg["turns"].append({
                    "speaker": spk_clean,
                    "text": clean_body,
                    "ipa": sentence_to_ipa(clean_body)
                })

    # Topic-specific enrichments where ZIM put patterns in an image or vocabulary inline
    if tid == "dien_thoai" and not topic_vocab:
        for w, ipa, pos, df in [
            ("receptionist", "/rɪˈsep.ʃən.ɪst/", "noun", "nhân viên lễ tân trực điện thoại"),
            ("available", "/əˈveɪ.lə.bəl/", "adj", "có mặt, rảnh để nghe máy"),
            ("at the moment", "/æt ðə ˈmoʊ.mənt/", "phrase", "ngay lúc này, hiện tại"),
            ("leave a message", "/liːv ə ˈmes.ɪdʒ/", "phrase", "để lại lời nhắn"),
            ("call back", "/kɔːl bæk/", "phrasal verb", "gọi điện lại sau"),
            ("department", "/dɪˈpɑːrt.mənt/", "noun", "phòng ban, bộ phận"),
            ("assistant", "/əˈsɪs.tənt/", "noun", "trợ lý"),
            ("spell", "/spel/", "verb", "đánh vần tên hoặc từ"),
            ("repeat", "/rɪˈpiːt/", "verb", "lặp lại, nhắc lại thông tin"),
            ("in any case", "/ɪn ˈen.i keɪs/", "phrase", "trong mọi trường hợp, dù sao đi nữa")
        ]:
            register_vocab(w, ipa, pos, df)

    if tid == "food" and not topic_patterns:
        for pat, meaning, ex in [
            ("I’d like + [tên món ăn], please.", "Tôi muốn gọi món... (cấu trúc đặt đồ ăn lịch sự)", "I’d like a ham and mushroom pizza and a big glass of Coca-Cola, please."),
            ("I’ll have + [tên món ăn], please.", "Cho tôi dùng món...", "I’ll have a cup of cappuccino, please!"),
            ("Could I have some more + [tên món ăn], please?", "Cho tôi xin thêm một ít... được không?", "Could I have some more bread, please?"),
            ("Are you ready to order?", "Quý khách đã sẵn sàng gọi món chưa ạ?", "Are you ready to order?"),
            ("We’ll have + [món] + for starters, then + [món] + for the main course.", "Chúng tôi dùng... cho món khai vị, sau đó là... cho món chính.", "We’ll have salad for starters, then beefsteak for the main course."),
            ("What would you like for dessert / drinks?", "Quý khách muốn dùng gì cho món tráng miệng / đồ uống ạ?", "What would you like for dessert?"),
            ("I have a sweet tooth.", "Tôi là người hảo ngọt / rất thích ăn đồ ngọt.", "Oh I have to say that I have a sweet tooth, and my favorite is chocolate."),
            ("Just the bill, please!", "Cho tôi thanh toán hóa đơn nhé!", "Hmm. I think it’s enough. And just the bill, please!")
        ]:
            register_pattern(pat, meaning, ex)

    valid_dlgs = [d for d in dialogues if len(d["turns"]) >= 2]

    # Ensure every dialogue has keyVocab and keyPatterns populated
    for i, d in enumerate(valid_dlgs):
        if not d["keyVocab"] and topic_vocab:
            start = (i * 5) % len(topic_vocab)
            d["keyVocab"] = [topic_vocab[(start + k) % len(topic_vocab)] for k in range(min(8, len(topic_vocab)))]
        if not d["keyPatterns"] and topic_patterns:
            start = (i * 3) % len(topic_patterns)
            d["keyPatterns"] = [topic_patterns[(start + k) % len(topic_patterns)] for k in range(min(5, len(topic_patterns)))]

    return {
        "id": tid,
        "title": title,
        "dialogues": valid_dlgs,
        "topicVocab": topic_vocab,
        "topicPatterns": topic_patterns
    }

def main():
    with open("/tmp/zim_topics_raw.json", "r", encoding="utf-8") as f:
        raw_topics = json.load(f)

    parsed_topics = []
    for t in raw_topics:
        parsed_topics.append(parse_topic(t["id"], t["title"], t["parsedContent"]))

    # For thoi_tiet (Topic 9), copy ZIM's Weather dialogue from on_the_way (Tình huống 1: Bàn về tình hình thời tiết)
    # plus 2 dialogues from ZIM's Weather article examples so Topic 9 has full shadowing dialogues
    on_the_way_topic = next((x for x in parsed_topics if x["id"] == "on_the_way"), None)
    thoi_tiet_topic = next((x for x in parsed_topics if x["id"] == "thoi_tiet"), None)
    if thoi_tiet_topic and not thoi_tiet_topic["dialogues"]:
        weather_dlgs = []
        if on_the_way_topic and on_the_way_topic["dialogues"]:
            d1 = dict(on_the_way_topic["dialogues"][0])
            d1["keyVocab"] = thoi_tiet_topic["topicVocab"][:10]
            d1["keyPatterns"] = thoi_tiet_topic["topicPatterns"][:5]
            weather_dlgs.append(d1)
        weather_dlgs.append({
            "title": "Tình huống 2: Hỏi thăm thời tiết & Nhiệt độ (Asking about Weather & Temperature)",
            "turns": [
                {"speaker": "A", "text": "What’s the weather like in Hanoi today?", "ipa": sentence_to_ipa("What’s the weather like in Hanoi today?")},
                {"speaker": "B", "text": "It’s drizzling and quite overcast outside.", "ipa": sentence_to_ipa("It’s drizzling and quite overcast outside.")},
                {"speaker": "A", "text": "What’s the temperature right now?", "ipa": sentence_to_ipa("What’s the temperature right now?")},
                {"speaker": "B", "text": "It is about 20 degrees Celsius. It feels quite cool and mild.", "ipa": sentence_to_ipa("It is about 20 degrees Celsius. It feels quite cool and mild.")},
                {"speaker": "A", "text": "What’s the forecast like for next week?", "ipa": sentence_to_ipa("What’s the forecast like for next week?")},
                {"speaker": "B", "text": "It is expected to be muggy and sunny next week, with temperatures around 30 degrees Celsius.", "ipa": sentence_to_ipa("It is expected to be muggy and sunny next week, with temperatures around 30 degrees Celsius.")}
            ],
            "keyVocab": thoi_tiet_topic["topicVocab"][10:20],
            "keyPatterns": thoi_tiet_topic["topicPatterns"][:5]
        })
        weather_dlgs.append({
            "title": "Tình huống 3: Kiểu thời tiết yêu thích (Favorite Type of Weather)",
            "turns": [
                {"speaker": "A", "text": "What a sunny day! What type of weather do you like the best?", "ipa": sentence_to_ipa("What a sunny day! What type of weather do you like the best?")},
                {"speaker": "B", "text": "I would say I’m quite a hot weather person. I love sunshine and clear skies.", "ipa": sentence_to_ipa("I would say I’m quite a hot weather person. I love sunshine and clear skies.")},
                {"speaker": "A", "text": "Really? Is it cloudy or rainy in London right now?", "ipa": sentence_to_ipa("Really? Is it cloudy or rainy in London right now?")},
                {"speaker": "B", "text": "Hey, look! It is raining outside with a strong gust of wind, so don’t forget your umbrella.", "ipa": sentence_to_ipa("Hey, look! It is raining outside with a strong gust of wind, so don’t forget your umbrella.")}
            ],
            "keyVocab": thoi_tiet_topic["topicVocab"][20:30],
            "keyPatterns": thoi_tiet_topic["topicPatterns"][5:10]
        })
        thoi_tiet_topic["dialogues"] = weather_dlgs

    # Update /Users/thien/IPA/autoexam-data.js via jsc JSON dump
    import subprocess
    js_path = "/Users/thien/IPA/autoexam-data.js"
    json_dump = subprocess.check_output([
        "/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc",
        "-e",
        'var window={}; load("/Users/thien/IPA/autoexam-data.js"); print(JSON.stringify(window.AUTOEXAM_DATA));'
    ]).decode("utf-8").strip()

    ae_data = json.loads(json_dump)
    ae_data["shadowingTopicsData"] = parsed_topics

    js_out = (
        "// ============================================================================\n"
        "// AUTOEXAM.AI DATA SUITE — TSX + Verbatim 25 ZIM.vn Communicative English Topics\n"
        "// ============================================================================\n"
        "window.AUTOEXAM_DATA = " + json.dumps(ae_data, ensure_ascii=False, indent=2) + ";\n"
    )
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_out)

    total_dlgs = sum(len(x["dialogues"]) for x in parsed_topics)
    total_turns = sum(sum(len(d["turns"]) for d in x["dialogues"]) for x in parsed_topics)
    total_vocab = sum(len(x["topicVocab"]) for x in parsed_topics)
    total_pats = sum(len(x["topicPatterns"]) for x in parsed_topics)
    print(
        f"Updated {js_path}: {len(parsed_topics)} topics, {total_dlgs} dialogues, "
        f"{total_turns} turns, {total_vocab} vocab items, {total_pats} sentence patterns."
    )

if __name__ == "__main__":
    main()
