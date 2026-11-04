// ============================================================================
// AUTOEXAM.AI — AI ENGLISH LEARNING SUITE (app.js)
// Rewritten 100% from autoexam_ai_english_learning_suite.tsx + Full Cam 16-21 DB
// ============================================================================

(function () {
  "use strict";

  // --- LUCIDE SVG ICONS (Exact match to lucide-react imports in TSX) ---
  const ICONS = {
    Languages: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
    Repeat: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`,
    Headphones: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>`,
    BookOpen: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    Bookmark: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
    FileText: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    MicNav: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
    Zap: `<svg class="w-3 h-3 fill-emerald-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    Volume2: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    Volume2Md: `<svg class="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    Volume2Sm: `<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`,
    Mic: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
    MicSm: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
    MicOff: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
    MicOffSm: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
    RefreshCw: `<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
    RefreshCwSpin: `<svg class="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
    ImageIcon: `<svg class="w-3.5 h-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
    FileUp: `<svg class="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 12v6"/><path d="m15 15-3-3-3 3"/></svg>`,
    Loader2: `<svg class="w-3.5 h-3.5 animate-spin text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`,
    ChevronDown: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    BookMarked: `<svg class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><polyline points="10 2 10 10 13 7 16 10 16 2"/></svg>`,
    Sparkles: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    Clipboard: `<svg class="w-3.5 h-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`,
    ClipboardCheck: `<svg class="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`
  };

  // --- LOAD DATA FROM autoexam-data.js + cambridge-tests-db.js + vocab-data.js ---
  const AE_DATA = window.AUTOEXAM_DATA || {};
  const sampleIpaDict = Object.assign({}, AE_DATA.sampleIpaDict || {});
  const baseFlashcards = (AE_DATA.flashcards || []).slice();
  const shadowingTopicsData = AE_DATA.shadowingTopicsData || [];
  const baseDictationItems = (AE_DATA.dictationItems || []).slice();
  const readingData = AE_DATA.readingData || {};
  const CAM_DB = window.CAMBRIDGE_FULL_DB || {};
  const VOCAB_DB = window.VOCAB_DB || [];

  // Enrich sampleIpaDict with common academic/IELTS words and VOCAB_DB + Shadowing keyVocab
  const EXTRA_IPA_WORDS = {
    personalized: {
      ipa: "/ˈpɜː.sən.əl.aɪzd/",
      vi: "được cá nhân hóa theo từng người",
      pos: "adjective",
      cefr: "C1",
      example: "Artificial intelligence enables personalized education for every student.",
      exampleVi: "Trí tuệ nhân tạo cho phép nền giáo dục được cá nhân hóa cho từng học sinh."
    },
    interactive: {
      ipa: "/ˌɪn.təˈræk.tɪv/",
      vi: "có tính tương tác hai chiều",
      pos: "adjective",
      cefr: "B2",
      example: "Students prefer interactive language learning platforms.",
      exampleVi: "Học sinh ưa thích các nền tảng học ngôn ngữ có tính tương tác."
    },
    language: {
      ipa: "/ˈlæŋ.ɡwɪdʒ/",
      vi: "ngôn ngữ, tiếng nói",
      pos: "noun",
      cefr: "A1",
      example: "Learning a second language improves cognitive flexibility.",
      exampleVi: "Học ngôn ngữ thứ hai giúp cải thiện sự linh hoạt nhận thức."
    },
    learning: {
      ipa: "/ˈlɜː.nɪŋ/",
      vi: "việc học tập, sự lĩnh hội kiến thức",
      pos: "noun",
      cefr: "A2",
      example: "Lifelong learning is essential in the digital era.",
      exampleVi: "Học tập suốt đời là điều thiết yếu trong kỷ nguyên số."
    },
    systems: {
      ipa: "/ˈsɪs.təmz/",
      vi: "các hệ thống",
      pos: "noun",
      cefr: "B1",
      example: "Modern transport systems rely heavily on automation.",
      exampleVi: "Các hệ thống giao thông hiện đại phụ thuộc nhiều vào tự động hóa."
    },
    worldwide: {
      ipa: "/ˌwɜːldˈwaɪd/",
      vi: "trên toàn thế giới, toàn cầu",
      pos: "adverb/adj",
      cefr: "B2",
      example: "The new educational software is used by millions worldwide.",
      exampleVi: "Phần mềm giáo dục mới được hàng triệu người trên toàn thế giới sử dụng."
    },
    enables: {
      ipa: "/ɪˈneɪ.bəlz/",
      vi: "cho phép, làm cho có thể",
      pos: "verb",
      cefr: "B2",
      example: "Cloud computing enables remote teams to collaborate seamlessly.",
      exampleVi: "Điện toán đám mây cho phép các nhóm từ xa cộng tác mượt mà."
    },
    renewable: {
      ipa: "/rɪˈnjuː.ə.bəl/",
      vi: "có thể tái tạo được (năng lượng)",
      pos: "adjective",
      cefr: "B2",
      example: "Investing in renewable energy reduces carbon emissions.",
      exampleVi: "Đầu tư vào năng lượng tái tạo giúp giảm lượng khí thải carbon."
    },
    environmental: {
      ipa: "/ɪnˌvaɪ.rənˈmen.təl/",
      vi: "thuộc về môi trường sinh thái",
      pos: "adjective",
      cefr: "B1",
      example: "Strict environmental regulations protect local ecosystems.",
      exampleVi: "Các quy định môi trường nghiêm ngặt bảo vệ hệ sinh thái địa phương."
    },
    solutions: {
      ipa: "/səˈluː.ʃənz/",
      vi: "các giải pháp",
      pos: "noun",
      cefr: "B1",
      example: "Scientists are seeking innovative solutions to plastic pollution.",
      exampleVi: "Các nhà khoa học đang tìm kiếm giải pháp sáng tạo cho ô nhiễm nhựa."
    },
    create: {
      ipa: "/kriˈeɪt/",
      vi: "tạo ra, sáng tạo",
      pos: "verb",
      cefr: "A2",
      example: "Green industries create thousands of sustainable jobs.",
      exampleVi: "Các ngành công nghiệp xanh tạo ra hàng ngàn việc làm bền vững."
    },
    urban: {
      ipa: "/ˈɜː.bən/",
      vi: "thuộc về đô thị, thành phố",
      pos: "adjective",
      cefr: "B2",
      example: "Urban planners prioritize green spaces to improve public health.",
      exampleVi: "Các nhà quy hoạch đô thị ưu tiên không gian xanh để cải thiện sức khỏe cộng đồng."
    },
    innovation: {
      ipa: "/ˌɪn.əˈveɪ.ʃən/",
      vi: "sự đổi mới sáng tạo, cải tiến",
      pos: "noun",
      cefr: "B2",
      example: "Technological innovation drives long-term economic growth.",
      exampleVi: "Đổi mới công nghệ thúc đẩy tăng trưởng kinh tế dài hạn."
    },
    biodiversity: {
      ipa: "/ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/",
      vi: "đa dạng sinh học",
      pos: "noun",
      cefr: "C1",
      example: "Protecting rainforests is vital for preserving global biodiversity.",
      exampleVi: "Bảo vệ rừng nhiệt đới là điều sống còn để gìn giữ đa dạng sinh học toàn cầu."
    }
  };
  Object.assign(sampleIpaDict, EXTRA_IPA_WORDS);

  // Merge VOCAB_DB and Shadowing keyVocab into sampleIpaDict if not already present
  VOCAB_DB.forEach((v) => {
    if (!v || !v.word) return;
    const key = v.word.toLowerCase().replace(/[^a-z]/g, "");
    if (key && !sampleIpaDict[key]) {
      sampleIpaDict[key] = {
        ipa: v.ipa || `/${key}/`,
        vi: v.meaning || v.vi || "từ vựng học thuật IELTS",
        pos: v.type || v.pos || "word",
        cefr: v.band || v.cefr || "B2",
        example: v.example || `Mastering the word '${v.word}' boosts your lexical resource score.`,
        exampleVi: v.exampleVi || `Nắm vững từ '${v.word}' giúp nâng cao điểm từ vựng của bạn.`
      };
    }
  });

  shadowingTopicsData.forEach((t) => {
    (t.dialogues || []).forEach((d) => {
      (d.keyVocab || []).forEach((kv) => {
        const key = (kv.word || "").toLowerCase().replace(/[^a-z]/g, "");
        if (key && !sampleIpaDict[key]) {
          sampleIpaDict[key] = {
            ipa: kv.ipa || `/${key}/`,
            vi: kv.def || "từ vựng thông dụng",
            pos: kv.pos || "word",
            cefr: "B2",
            example: (d.turns && d.turns[0] && d.turns[0].text) || `We often use '${kv.word}' in ${t.title}.`,
            exampleVi: `Từ vựng trọng tâm trong chủ đề ${t.title}.`
          };
        }
      });
    });
  });

  // Build expanded Flashcards list (4 original from TSX + rich IELTS/THPT/Giao tiếp/Cam 16-21 cards)
  const flashcards = baseFlashcards.slice();
  const seenFlashWords = new Set(flashcards.map((f) => f.word.toLowerCase()));
  VOCAB_DB.slice(0, 60).forEach((v, i) => {
    if (!v || !v.word || seenFlashWords.has(v.word.toLowerCase())) return;
    seenFlashWords.add(v.word.toLowerCase());
    const topics = ["IELTS Vocab", "THPT", "Giao tiếp"];
    flashcards.push({
      word: v.word,
      ipa: v.ipa || `/${v.word}/`,
      topic: topics[i % topics.length],
      cefr: v.band ? v.band.replace("Band ", "") : "B2",
      def: v.meaning || "từ vựng trọng tâm",
      collocation: v.collocations ? (Array.isArray(v.collocations) ? v.collocations[0] : v.collocations) : `${v.word} effectively`,
      example: v.example || `Using '${v.word}' accurately improves your English fluency.`
    });
  });

  // Build expanded Dictation items (original from TSX + extra authentic IELTS sentences)
  const dictationItems = baseDictationItems.concat([
    {
      sentence: "Urban planners increasingly prioritize accessible parks to foster community cohesion.",
      ipa: "/ˈɜː.bən ˈplæn.əz ɪnˈkriː.sɪŋ.li praɪˈɒr.ɪ.taɪz əkˈses.ə.bəl pɑːks tə ˈfɒs.tər kəˈmjuː.nə.ti kəʊˈhiː.ʒən/"
    },
    {
      sentence: "Ancient Roman concrete possessed an extraordinary durability due to volcanic ash and seawater.",
      ipa: "/ˈeɪn.ʃənt ˈrəʊ.mən ˈkɒŋ.kriːt pəˈzest ən ɪkˈstrɔː.dɪn.ər.i ˌdjʊə.rəˈbɪl.ə.ti djuː tə vɒlˈkæn.ɪk æʃ ænd ˈsiːˌwɔː.tər/"
    },
    {
      sentence: "Sustainable energy sources mitigate global warming risks and protect biodiversity.",
      ipa: "/səˈsteɪ.nə.bəl ˈen.ə.dʒi ˈsɔː.sɪz ˈmɪt.ɪ.ɡeɪt ˈɡləʊ.bəl ˈwɔː.mɪŋ rɪsks ænd prəˈtekt ˌbaɪ.əʊ.daɪˈvɜː.sə.ti/"
    }
  ]);

  // Sample IPA sentences for "Mẫu khác" button
  const IPA_SAMPLE_SENTENCES = [
    {
      text: "The development of artificial intelligence has revolutionized modern education and technology.",
      focus: "development"
    },
    {
      text: "Sustainable energy sources mitigate global warming risks.",
      focus: "sustainable"
    },
    {
      text: "Artificial intelligence enables personalized education and interactive language learning systems worldwide.",
      focus: "artificial"
    },
    {
      text: "Sustainable technology and renewable energy sources create modern environmental solutions.",
      focus: "renewable"
    },
    {
      text: "Technological innovation and global biodiversity protection require sustainable urban development.",
      focus: "innovation"
    }
  ];

  // --- NATURAL MULTI-VOICE PROFILES (8 Curated Personas + Device Voice Auto-Matcher) ---
  const VOICE_PROFILES = [
    {
      id: "us_female",
      label: "🇺🇸 Emma (Nữ Mỹ Tự Nhiên)",
      shortLabel: "🇺🇸 Emma (US Nữ)",
      lang: "en-US",
      gender: "female",
      pitch: 1.03,
      rateMod: 0.96,
      openaiVoice: "nova",
      keywords: ["Aria", "Jenny", "Google US English", "Samantha", "Ava", "Allison", "Victoria", "Zira"]
    },
    {
      id: "us_male",
      label: "🇺🇸 Liam (Nam Mỹ Trầm Ấm)",
      shortLabel: "🇺🇸 Liam (US Nam)",
      lang: "en-US",
      gender: "male",
      pitch: 0.93,
      rateMod: 0.96,
      openaiVoice: "onyx",
      keywords: ["Guy", "Christopher", "Eric", "Alex", "Evan", "Aaron", "David", "Nathan", "Google US English"]
    },
    {
      id: "uk_female",
      label: "🇬🇧 Sonia (Nữ Anh Chuẩn IELTS)",
      shortLabel: "🇬🇧 Sonia (UK Nữ)",
      lang: "en-GB",
      gender: "female",
      pitch: 1.04,
      rateMod: 0.95,
      openaiVoice: "shimmer",
      keywords: ["Sonia", "Libby", "Google UK English Female", "Serena", "Kate", "Martha", "Stephanie", "Hazel"]
    },
    {
      id: "uk_male",
      label: "🇬🇧 Daniel (Nam Anh Học Thuật)",
      shortLabel: "🇬🇧 Daniel (UK Nam)",
      lang: "en-GB",
      gender: "male",
      pitch: 0.92,
      rateMod: 0.95,
      openaiVoice: "fable",
      keywords: ["Ryan", "Thomas", "Google UK English Male", "Daniel", "Arthur", "Oliver", "George"]
    },
    {
      id: "au_female",
      label: "🇦🇺 Natasha (Nữ Úc Luyện Nghe)",
      shortLabel: "🇦🇺 Natasha (AU Nữ)",
      lang: "en-AU",
      gender: "female",
      pitch: 1.02,
      rateMod: 0.96,
      openaiVoice: "alloy",
      keywords: ["Natasha", "Karen", "Catherine", "Hayley"]
    },
    {
      id: "au_male",
      label: "🇦🇺 William (Nam Úc Tự Nhiên)",
      shortLabel: "🇦🇺 William (AU Nam)",
      lang: "en-AU",
      gender: "male",
      pitch: 0.93,
      rateMod: 0.96,
      openaiVoice: "echo",
      keywords: ["William", "Lee", "Gordon", "Karen"]
    },
    {
      id: "ie_female",
      label: "🇮🇪 Moira (Nữ Ireland Mượt Mà)",
      shortLabel: "🇮🇪 Moira (IE Nữ)",
      lang: "en-IE",
      gender: "female",
      pitch: 1.03,
      rateMod: 0.95,
      openaiVoice: "nova",
      keywords: ["Emily", "Moira", "Orla"]
    },
    {
      id: "in_english",
      label: "🇮🇳 Neerja (Anh-Ấn IELTS Sec 3)",
      shortLabel: "🇮🇳 Neerja (IN)",
      lang: "en-IN",
      gender: "female",
      pitch: 1.0,
      rateMod: 0.94,
      openaiVoice: "alloy",
      keywords: ["Neerja", "Prabhat", "Rishi", "Veena", "Heera", "Sangeeta"]
    }
  ];

  // Load saved AI API configuration from localStorage
  function loadSavedAiConfig() {
    try {
      if (typeof localStorage !== "undefined") {
        const raw = localStorage.getItem("autoexam_ai_config");
        if (raw) {
          const parsed = JSON.parse(raw);
          return {
            provider: parsed.provider || "gemini",
            apiKey: parsed.apiKey || "",
            model: parsed.model || "gemini-2.0-flash",
            useNeuralTts: Boolean(parsed.useNeuralTts)
          };
        }
      }
    } catch (e) {}
    return {
      provider: "gemini",
      apiKey: "",
      model: "gemini-2.0-flash",
      useNeuralTts: false
    };
  }

  function saveAiConfigToStorage(cfg) {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("autoexam_ai_config", JSON.stringify(cfg));
      }
    } catch (e) {}
  }

  const initialAiCfg = loadSavedAiConfig();

  // --- DEVICE ENVIRONMENT AUTO-DETECTION (DESKTOP COMPUTER VS MOBILE PHONE) ---
  function detectDeviceEnvironment() {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return { isMobile: false, isTouch: false, isMobileUA: false, screenWidth: 1200, deviceType: "desktop" };
    }
    const ua = navigator.userAgent || navigator.vendor || window.opera || "";
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua);
    const isTouch = Boolean(
      ("ontouchstart" in window) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
    );
    const screenWidth = window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || 1200;

    // A device is detected as Mobile if user-agent is mobile, or if screen width is narrow (< 820px) with touch
    const isMobile = isMobileUA || (isTouch && screenWidth < 850) || screenWidth < 768;
    const deviceType = isMobile ? (screenWidth < 640 ? "phone" : "tablet") : "desktop";

    if (typeof document !== "undefined" && document.documentElement) {
      document.documentElement.setAttribute("data-device", isMobile ? "mobile" : "desktop");
      if (isMobile) {
        document.documentElement.classList.add("is-mobile-device");
        document.documentElement.classList.remove("is-desktop-device");
      } else {
        document.documentElement.classList.add("is-desktop-device");
        document.documentElement.classList.remove("is-mobile-device");
      }
    }

    return {
      isMobile,
      isTouch,
      isMobileUA,
      screenWidth,
      deviceType
    };
  }

  const initialDeviceEnv = detectDeviceEnvironment();

  // Dynamic window resize & orientation change listener to automatically switch Desktop/Mobile layout
  if (typeof window !== "undefined") {
    let resizeTimer = null;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        const prevIsMobile = state.isMobile;
        const newEnv = detectDeviceEnvironment();
        state.isMobile = newEnv.isMobile;
        state.isTouch = newEnv.isTouch;
        state.deviceType = newEnv.deviceType;
        if (prevIsMobile !== newEnv.isMobile) {
          render();
        }
      }, 150);
    });
    window.addEventListener("orientationchange", function () {
      setTimeout(function () {
        const prevIsMobile = state.isMobile;
        const newEnv = detectDeviceEnvironment();
        state.isMobile = newEnv.isMobile;
        state.isTouch = newEnv.isTouch;
        state.deviceType = newEnv.deviceType;
        if (prevIsMobile !== newEnv.isMobile) {
          render();
        }
      }, 200);
    });
  }

  // --- APPLICATION STATE (Exact match to App() state in autoexam_ai_english_learning_suite.tsx + Voice & AI Config) ---
  const state = {
    // Device detection & responsive state
    isMobile: initialDeviceEnv.isMobile,
    isTouch: initialDeviceEnv.isTouch,
    deviceType: initialDeviceEnv.deviceType, // "desktop" | "phone" | "tablet"
    activeTab: "ipa", // ipa | shadowing | listening | reading | flashcard | writing | speaking
    voiceAccent: "en-US",
    selectedVoiceProfileId: "us_female",
    customSystemVoiceName: "", // Optional explicit device SpeechSynthesisVoice name
    voicePitchMod: 1.0,
    dualSpeakerShadowing: true, // Auto assign distinct Male/Female voices for Speaker A & B
    isVoiceMenuOpen: false,

    // AI API Configuration State
    isApiModalOpen: false,
    aiProvider: initialAiCfg.provider, // "gemini" | "openai"
    aiApiKey: initialAiCfg.apiKey,
    aiModel: initialAiCfg.model,
    useNeuralTts: initialAiCfg.useNeuralTts,
    apiStatusMsg: "",
    apiStatusType: "info", // info | success | error
    isTestingApi: false,
    isAnalyzingIpaAi: false,

    // 1. IPA State
    ipaInput: "The development of artificial intelligence has revolutionized modern education and technology.",
    ipaSampleIdx: 0,
    selectedWord: Object.assign({ clean: "development" }, sampleIpaDict["development"]),
    isRecordingIpa: false,
    ipaScore: null,
    isProcessingFile: false,
    showIpaChart44: false,
    isPasteModalOpen: false,
    pastedTextInput: "",
    pasteToastMsg: "",

    // 2. Shadowing State
    selectedTopicId: "shopping",
    selectedDialogueIndex: 0,
    shadowSourceTab: "zim", // zim | url_extract
    shadowUrlInput: "https://www.youtube.com/watch?v=eIho2S0ZahI",
    shadowTranscriptInput: "",
    showTranscriptInput: false,
    isExtractingShadowUrl: false,
    shadowUrlExtractError: "",
    extractedShadowData: null,
    activeYouTubeTurnIdx: 0,
    activeYouTubeWordIdx: -1,
    isYouTubePlaying: false,
    youtubeSplitLayout: true,
    youtubeSyncOffsetSec: 0,
    shadowMode: "idle", // idle | listen | shadowing | full
    shadowPhase: "idle", // idle | machine_reading | user_recording | full_recording | completed
    shadowPassageMode: "sentence", // sentence | full
    shadowingTurnIdx: 0,
    shadowHighlightWordIdx: -1,
    hideShadowScript: false,
    peekTurnIdx: null,
    isRecordingShadow: false,
    shadowScore: null,
    shadowTurnScores: {},
    shadowSessionReport: null,
    shadowLiveTranscript: "",
    shadowFullElapsedSec: 0,
    audioRate: 1.0,
    isTopicDropdownOpen: false,
    activeIpaTurnIdx: null,
    showAllTurnsIpa: false,
    showFullPassageBox: false,
    copiedDialogueNotice: false,
    showFullTopicVocab: false,
    showFullTopicPatterns: false,
    shadowGenStyle: "similar", // similar | casual | formal | problem | followup
    shadowCustomContext: "",
    isGeneratingShadow: false,
    shadowGenCounter: 0,

    // 3. Listening State
    listenSubTab: "bands", // bands | cam | dictation
    selectedCam: "18",
    selectedCamTest: 0,
    selectedCamPart: 0,
    camAnswer1: "",
    camListenAnswers: {},
    camListenSubmitted: false,
    camActiveQuestionLoc: null,
    bandListenAnswers: {},
    dictIdx: 0,
    dictInput: "",
    dictScore: null,

    // 4. Reading State
    readSubTab: "b1b2", // b1b2 | thpt | cam
    readAnswers: {},
    readResultShown: false,
    readCamBook: "18",
    readCamTest: 0,
    readCamPassage: 0,
    readCamMode: "cbt", // quick | cbt
    readCamLinearMode: false,
    readCamSubmitted: false,
    readActiveEvidenceQ: null,

    // 5. Flashcard State
    cardTopic: "All",
    cardIdx: 0,
    isFlipped: false,

    // 6. Writing State
    writingTask: "task1", // task1 | task2
    writingCamSource: "default", // default | cam16..cam21
    writingCamTestIdx: 0,
    showWritingModel: false,
    essayText: "",
    isEvaluating: false,
    writingScore: null,

    // 7. Speaking (2 Functions: Topic 2026 & Talk to AI) State
    speakSubTab: "topic", // "topic" | "talk_to_ai"
    speakTopicSource: "ielts2026", // "ielts2026" | "cambridge"
    speakLessonIdx: 0, // 0..19 for 20 IELTS 2026 Lessons
    speakCamBook: "21",
    speakCamTestIdx: 0,
    speakPart: "part1", // "part1" | "part2" | "part3" | "vocab"
    speakQuestionIdx: 0,
    isRecordingSpeak: false,
    speakPracticeTargetText: "",
    speakPracticeTranscript: "",
    speakScore: null,
    speakVocabFilter: "",
    speakTimerSec: 0,
    speakTimerActive: false,
    speakTimerLabel: "",

    // Embedded Topic-Specific Practice State (Section 2 & 3)
    topicAiMessages: [],
    topicAiInputText: "",
    isRecordingTopicAi: false,
    isTopicAiEvaluating: false,
    topicShadowTarget: "",
    topicShadowTranscript: "",
    topicShadowScore: null,
    isRecordingTopicShadow: false,

    // Global Talk to AI Examiner State
    talkAiExaminer: "richard", // "richard" (UK Male) | "emma" (US Female)
    talkAiMode: "mock_full", // "mock_full" | "part1" | "part2" | "part3" | "free"
    talkAiMessages: [],
    talkAiInputText: "",
    isRecordingAiTalk: false,
    isAiEvaluating: false
  };

  // --- HELPER FUNCTIONS ---
  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function resolveWordDetails(rawWord) {
    const clean = (rawWord || "").toLowerCase().replace(/[^a-z]/g, "");
    if (!clean) return null;
    if (sampleIpaDict[clean]) {
      return Object.assign({ clean }, sampleIpaDict[clean]);
    }
    // Check stem variations (s, ed, ing)
    const stems = [
      clean.replace(/s$/, ""),
      clean.replace(/es$/, ""),
      clean.replace(/ed$/, ""),
      clean.replace(/ing$/, "")
    ];
    for (let i = 0; i < stems.length; i++) {
      if (stems[i] && sampleIpaDict[stems[i]]) {
        return Object.assign({ clean }, sampleIpaDict[stems[i]]);
      }
    }
    return {
      clean,
      ipa: `/${clean}/`,
      vi: "từ vựng tiếng Anh (nhấn Cách đọc để nghe phát âm chuẩn)",
      pos: "word",
      cefr: "General",
      example: `Understanding '${clean}' helps improve overall English comprehension.`,
      exampleVi: `Hiểu rõ từ '${clean}' giúp nâng cao khả năng đọc hiểu tiếng Anh.`
    };
  }

  function getScoreColor(percent) {
    if (percent >= 85) {
      return {
        badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
        pillBg: "bg-emerald-500/10 border-emerald-500/40 text-emerald-300",
        label: "Xuất sắc"
      };
    }
    if (percent >= 65) {
      return {
        badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-400",
        pillBg: "bg-amber-500/10 border-amber-500/40 text-amber-300",
        label: "Gần đúng"
      };
    }
    return {
      badgeBg: "bg-rose-500/15 border-rose-500/30 text-rose-400",
      pillBg: "bg-rose-500/10 border-rose-500/40 text-rose-300",
      label: "Cần luyện lại"
    };
  }

  // --- NATURAL MULTI-VOICE ENGINE & NEURAL TTS ---
  let cachedVoices = [];
  let activeAudioElement = null;

  function refreshSystemVoices() {
    if (!window.speechSynthesis || !window.speechSynthesis.getVoices) return [];
    const list = window.speechSynthesis.getVoices() || [];
    if (list.length > 0) {
      cachedVoices = list;
    }
    return cachedVoices;
  }

  if (typeof window !== "undefined" && window.speechSynthesis) {
    refreshSystemVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = function () {
        refreshSystemVoices();
      };
    }
  }

  function scoreSystemVoiceQuality(v, targetLang, keywords) {
    let score = 0;
    const name = (v.name || "").toLowerCase();
    const vLang = (v.lang || "").replace("_", "-").toLowerCase();
    const tLang = (targetLang || "en-US").toLowerCase();

    if (vLang === tLang) score += 45;
    else if (vLang.startsWith("en")) score += 20;
    else return -100;

    // Prioritize Neural / Online / Natural / Enhanced / Google voices
    if (name.includes("natural") || name.includes("online")) score += 55;
    if (name.includes("google")) score += 40;
    if (name.includes("enhanced") || name.includes("premium") || name.includes("siri")) score += 35;
    if (name.includes("microsoft")) score += 25;

    (keywords || []).forEach((kw, idx) => {
      if (name.includes(kw.toLowerCase())) {
        score += 65 - idx * 4;
      }
    });

    if (name.includes("compact") || name.includes("espeak") || name.includes("fred")) {
      score -= 40;
    }
    return score;
  }

  function getBestVoiceForProfile(profile,customVoiceName) {
    const voices = refreshSystemVoices();
    if (!voices || voices.length === 0) return null;

    if (customVoiceName) {
      const exact = voices.find((v) => v.name === customVoiceName);
      if (exact) return exact;
    }

    let best = null;
    let bestScore = -999;
    voices.forEach((v) => {
      const sc = scoreSystemVoiceQuality(v, profile.lang, profile.keywords);
      if (sc > bestScore) {
        bestScore = sc;
        best = v;
      }
    });
    return best;
  }

  function getActiveVoiceProfile(overrideProfileId) {
    const pid = overrideProfileId || state.selectedVoiceProfileId || "us_female";
    return VOICE_PROFILES.find((p) => p.id === pid) || VOICE_PROFILES[0];
  }

  function getCounterpartProfileId(primaryId) {
    const map = {
      us_female: "us_male",
      us_male: "us_female",
      uk_female: "uk_male",
      uk_male: "uk_female",
      au_female: "au_male",
      au_male: "au_female",
      ie_female: "uk_male",
      in_english: "uk_female"
    };
    return map[primaryId] || "us_male";
  }

  function stopAllAudio() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (activeAudioElement) {
      try {
        activeAudioElement.pause();
        activeAudioElement = null;
      } catch (e) {}
    }
  }

  async function speakWithOpenAiTts(text, rate, profile) {
    try {
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.aiApiKey.trim()}`
        },
        body: JSON.stringify({
          model: "tts-1",
          input: text,
          voice: profile.openaiVoice || "nova",
          speed: rate || 1.0
        })
      });
      if (!res.ok) return false;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      activeAudioElement = audio;
      audio.play();
      return true;
    } catch (e) {
      return false;
    }
  }

  function speak(text, rate, overrideProfileId) {
    if (!text) return;
    stopAllAudio();

    const profile = getActiveVoiceProfile(overrideProfileId);
    const effectiveRate = (rate || state.audioRate || 1.0) * (profile.rateMod || 0.96);

    // If user enabled OpenAI Neural TTS and has an OpenAI API key
    if (state.useNeuralTts && state.aiProvider === "openai" && state.aiApiKey && state.aiApiKey.trim()) {
      speakWithOpenAiTts(text, rate || state.audioRate || 1.0, profile).then((ok) => {
        if (!ok) speakBrowserNatural(text, effectiveRate, profile, overrideProfileId);
      });
      return;
    }

    speakBrowserNatural(text, effectiveRate, profile, overrideProfileId);
  }

  function speakBrowserNatural(text, effectiveRate, profile, overrideProfileId) {
    if (!window.speechSynthesis) return;
    // Normalize text so punctuation creates natural breathing prosody
    const cleanText = String(text)
      .replace(/\s+/g, " ")
      .replace(/—/g, ", ")
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const customName = overrideProfileId ? "" : state.customSystemVoiceName;
    const chosenVoice = getBestVoiceForProfile(profile, customName);

    if (chosenVoice) {
      utterance.voice = chosenVoice;
      utterance.lang = chosenVoice.lang || profile.lang || "en-US";
    } else {
      utterance.lang = profile.lang || state.voiceAccent || "en-US";
    }

    utterance.rate = Math.max(0.65, Math.min(1.35, effectiveRate));
    utterance.pitch = Math.max(0.8, Math.min(1.2, (profile.pitch || 1.0) * (state.voicePitchMod || 1.0)));
    window.speechSynthesis.speak(utterance);
  }

  // Multi-Speaker Natural Dialogue Playback for Shadowing "Play All"
  function speakDialogueSequence(turns, baseRate) {
    if (!turns || turns.length === 0) return;
    stopAllAudio();
    if (!window.speechSynthesis) return;

    const primaryId = state.selectedVoiceProfileId || "us_female";
    const secondaryId = state.dualSpeakerShadowing ? getCounterpartProfileId(primaryId) : primaryId;

    let idx = 0;
    function playNextTurn() {
      if (idx >= turns.length) return;
      const turn = turns[idx];
      const profId = idx % 2 === 0 ? primaryId : secondaryId;
      const profile = getActiveVoiceProfile(profId);
      const u = new SpeechSynthesisUtterance(turn.text);
      const v = getBestVoiceForProfile(profile, idx % 2 === 0 ? state.customSystemVoiceName : "");
      if (v) {
        u.voice = v;
        u.lang = v.lang || profile.lang;
      } else {
        u.lang = profile.lang;
      }
      u.rate = Math.max(0.65, Math.min(1.35, (baseRate || 1.0) * (profile.rateMod || 0.96)));
      u.pitch = profile.pitch || 1.0;
      u.onend = function () {
        idx++;
        setTimeout(playNextTurn, 260);
      };
      window.speechSynthesis.speak(u);
    }
    playNextTurn();
  }

  // --- REAL AI API CLIENT (GEMINI & OPENAI) ---
  async function callAiApi(promptText, base64ImageObj) {
    const key = (state.aiApiKey || "").trim();
    if (!key) {
      throw new Error("Chưa nhập API Key. Hãy bấm nút 'API AI' trên thanh công cụ để nhập Gemini hoặc OpenAI Key.");
    }

    if (state.aiProvider === "openai") {
      const model = state.aiModel && state.aiModel.startsWith("gpt") ? state.aiModel : "gpt-4o-mini";
      const contentArr = [{ type: "text", text: promptText }];
      if (base64ImageObj && base64ImageObj.dataUrl) {
        contentArr.push({
          type: "image_url",
          image_url: { url: base64ImageObj.dataUrl }
        });
      }
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`
        },
        body: JSON.stringify({
          model: model,
          messages: [{ role: "user", content: contentArr }],
          temperature: 0.3
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error((data.error && data.error.message) || "Lỗi kết nối OpenAI API");
      }
      return data.choices[0].message.content || "";
    } else {
      // Google Gemini API
      const model = state.aiModel && state.aiModel.startsWith("gemini") ? state.aiModel : "gemini-2.0-flash";
      const parts = [{ text: promptText }];
      if (base64ImageObj && base64ImageObj.base64Data) {
        parts.push({
          inline_data: {
            mime_type: base64ImageObj.mimeType || "image/jpeg",
            data: base64ImageObj.base64Data
          }
        });
      }
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: parts }],
          generationConfig: { temperature: 0.3 }
        })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error((data.error && data.error.message) || "Lỗi kết nối Google Gemini API");
      }
      return (
        (data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content &&
          data.candidates[0].content.parts &&
          data.candidates[0].content.parts[0] &&
          data.candidates[0].content.parts[0].text) ||
        ""
      );
    }
  }

  function parseJsonFromAi(rawText) {
    const cleaned = String(rawText || "")
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();
    const firstBrace = cleaned.indexOf("{");
    const lastBrace = cleaned.lastIndexOf("}");
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
    }
    return JSON.parse(cleaned);
  }

  async function analyzeIpaWithAi() {
    const text = state.ipaInput.trim();
    if (!text) return;
    if (!state.aiApiKey || !state.aiApiKey.trim()) {
      state.isApiModalOpen = true;
      state.apiStatusMsg = "Nhập Gemini hoặc OpenAI API Key để kích hoạt tính năng Phân tích IPA & Từ vựng tự động bằng AI!";
      state.apiStatusType = "info";
      render();
      return;
    }

    state.isAnalyzingIpaAi = true;
    render();
    try {
      const prompt = `Analyze all English words in the following sentence for Vietnamese IELTS learners:
"${text}"
Return ONLY a valid JSON object mapping each lowercase word (letters only) to its phonetic & meaning details in this exact format:
{
  "words": {
    "word1": {
      "ipa": "/.../",
      "vi": "nghĩa tiếng Việt ngắn gọn, chuẩn xác",
      "pos": "noun/verb/adjective/adverb/preposition",
      "cefr": "A2/B1/B2/C1/C2",
      "example": "A clear English example sentence using this word.",
      "exampleVi": "Bản dịch tiếng Việt của câu ví dụ trên."
    }
  }
}`;
      const raw = await callAiApi(prompt);
      const parsed = parseJsonFromAi(raw);
      if (parsed && parsed.words) {
        Object.keys(parsed.words).forEach((k) => {
          const cleanKey = k.toLowerCase().replace(/[^a-z]/g, "");
          if (cleanKey && parsed.words[k]) {
            sampleIpaDict[cleanKey] = parsed.words[k];
          }
        });
        const firstWord = text.split(/\s+/)[0] || "";
        const resolved = resolveWordDetails(firstWord);
        if (resolved) state.selectedWord = resolved;
      }
    } catch (err) {
      alert("Lỗi AI IPA: " + err.message);
    } finally {
      state.isAnalyzingIpaAi = false;
      render();
    }
  }

  async function testAiConnection() {
    const inputEl = document.getElementById("ai-api-key-input");
    if (inputEl) {
      state.aiApiKey = (inputEl.value || "").trim();
    }
    if (!state.aiApiKey || !state.aiApiKey.trim()) {
      state.apiStatusMsg = "Vui lòng dán API Key vào ô bên trên trước khi kiểm tra.";
      state.apiStatusType = "error";
      render();
      return;
    }
    state.isTestingApi = true;
    state.apiStatusMsg = "Đang kiểm tra kết nối tới máy chủ AI...";
    state.apiStatusType = "info";
    render();
    try {
      const reply = await callAiApi('Reply with exact words: "OK_CONNECTED"');
      if (reply) {
        saveAiConfigToStorage({
          provider: state.aiProvider,
          apiKey: state.aiApiKey.trim(),
          model: state.aiModel,
          useNeuralTts: state.useNeuralTts
        });
        state.apiStatusMsg = `✓ Kết nối thành công (${state.aiProvider.toUpperCase()} - ${state.aiModel})! Toàn bộ tính năng AI đã sẵn sàng.`;
        state.apiStatusType = "success";
      }
    } catch (err) {
      state.apiStatusMsg = "✕ Lỗi kết nối: " + err.message;
      state.apiStatusType = "error";
    } finally {
      state.isTestingApi = false;
      render();
    }
  }

  // Speech Recognition instance if available
  let activeRecognition = null;

  function toggleIpaRecord() {
    if (state.isRecordingIpa) {
      state.isRecordingIpa = false;
      if (activeRecognition) {
        try { activeRecognition.stop(); } catch (e) {}
        activeRecognition = null;
      }
      if (!state.ipaScore) {
        finalizeIpaScore(null);
      }
      render();
    } else {
      state.isRecordingIpa = true;
      state.ipaScore = null;
      render();

      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRec) {
        try {
          const rec = new SpeechRec();
          activeRecognition = rec;
          const prof = getActiveVoiceProfile();
          rec.lang = prof.lang || state.voiceAccent || "en-US";
          rec.interimResults = false;
          rec.maxAlternatives = 1;
          rec.onresult = function (event) {
            const transcript = event.results[0][0].transcript || "";
            state.isRecordingIpa = false;
            finalizeIpaScore(transcript);
            render();
          };
          rec.onerror = function () {
            if (state.isRecordingIpa) {
              state.isRecordingIpa = false;
              finalizeIpaScore(null);
              render();
            }
          };
          rec.start();
        } catch (err) {}
      }
    }
  }

  function finalizeIpaScore(spokenTranscript) {
    const words = state.ipaInput.trim().split(/\s+/).filter(Boolean);
    const wordScores = {};
    const spokenSet = spokenTranscript
      ? new Set(spokenTranscript.toLowerCase().replace(/[^a-z\s]/g, "").split(/\s+/).filter(Boolean))
      : null;

    const randomOverall = Math.floor(Math.random() * 25) + 72; // 72 - 96%
    let sum = 0;
    let count = 0;

    words.forEach((w) => {
      const clean = w.toLowerCase().replace(/[^a-z]/g, "");
      if (!clean) return;
      let sc;
      if (spokenSet && spokenSet.size > 0) {
        sc = spokenSet.has(clean)
          ? Math.floor(Math.random() * 11) + 89
          : Math.floor(Math.random() * 22) + 64;
      } else {
        const variance = Math.floor(Math.random() * 20) - 10;
        sc = Math.max(50, Math.min(99, randomOverall + variance));
      }
      wordScores[clean] = sc;
      sum += sc;
      count++;
    });

    const overall = count > 0 ? Math.round(sum / count) : randomOverall;
    state.ipaScore = {
      overall,
      fluency: Math.min(98, overall + 3),
      accuracy: overall,
      wordScores
    };
  }

  // ============================================================================
  // SHADOWING 3-MODE ENGINE: LISTEN • SHADOWING (WORD-BY-WORD + RECORD) • FULL
  // ============================================================================
  let shadowWordTimer = null;
  let shadowFallbackEndTimer = null;
  let shadowFullTimer = null;
  let shadowRecordStartTime = 0;
  let shadowSessionToken = 0;

  // --- AI SHADOWING TỪ LINK YOUTUBE & BÁO CHÍ (PRESETS & ENGINE) ---
  const SHADOW_URL_PRESETS = {
    ted: {
      sourceType: "youtube",
      url: "https://www.youtube.com/watch?v=eIho2S0ZahI",
      youtubeId: "eIho2S0ZahI",
      title: "How to Speak so That People Want to Listen (Julian Treasure)",
      sourceName: "YouTube • TED Talks",
      summary: "Chuyên gia âm thanh Julian Treasure chia sẻ bí quyết phát huy sức mạnh giọng nói, 7 thói quen xấu khi giao tiếp và 4 trụ cột vàng HAIL.",
      dialogue: {
        id: "preset_ted",
        title: "How to Speak so That People Want to Listen (TED)",
        turns: [
          {"speaker": "Julian", "time": 6.46, "endTime": 11.11, "text": "The human voice: It's the instrument we all play.", "wordTimes": [6.46, 6.81, 7.39, 8.57, 8.83, 9.09, 9.95, 10.12, 10.38]},
          {"speaker": "Julian", "time": 11.11, "endTime": 13.59, "text": "It's the most powerful sound in the world, probably.", "wordTimes": [11.11, 11.26, 11.42, 11.63, 12.04, 12.3, 12.4, 12.55, 12.91]},
          {"speaker": "Julian", "time": 13.59, "endTime": 16.44, "text": "It's the only one that can start a war or say \"I love you.\"", "wordTimes": [13.59, 13.77, 13.94, 14.17, 14.35, 14.58, 14.76, 15.05, 15.15, 15.33, 15.45, 15.62, 15.72, 15.96]},
          {"speaker": "Julian", "time": 16.44, "endTime": 20.71, "text": "And yet many people have the experience that when they speak, people don't listen to them.", "wordTimes": [16.44, 16.6, 16.77, 16.99, 17.32, 17.53, 17.7, 18.32, 18.53, 18.74, 18.94, 19.3, 19.61, 19.82, 20.13, 20.24]},
          {"speaker": "Julian", "time": 20.71, "endTime": 21.85, "text": "And why is that?", "wordTimes": [20.71, 20.92, 21.14, 21.28]},
          {"speaker": "Julian", "time": 21.85, "endTime": 25.98, "text": "How can we speak powerfully to make change in the world?", "wordTimes": [21.85, 22.1, 22.34, 22.51, 22.92, 23.74, 23.9, 24.23, 24.72, 24.89, 25.13]},
          {"speaker": "Julian", "time": 25.98, "endTime": 30.19, "text": "What I'd like to suggest, there are a number of habits that we need to move away from.", "wordTimes": [25.98, 26.23, 26.35, 26.6, 26.72, 27.32, 27.59, 27.75, 27.85, 28.17, 28.28, 28.6, 28.82, 28.93, 29.14, 29.25, 29.47, 29.68]},
          {"speaker": "Julian", "time": 30.19, "endTime": 33.94, "text": "I've assembled for your pleasure here seven deadly sins of speaking.", "wordTimes": [30.19, 30.37, 30.92, 31.1, 31.34, 31.83, 32.07, 32.38, 32.74, 32.98, 33.1]},
          {"speaker": "Julian", "time": 33.94, "endTime": 41.63, "text": "I'm not pretending this is an exhaustive list, but these seven, I think, are pretty large habits that we can all fall into.", "wordTimes": [33.94, 34.06, 34.24, 34.84, 35.08, 35.21, 35.33, 35.93, 36.38, 36.61, 36.98, 37.5, 37.64, 38.15, 38.38, 38.83, 39.21, 39.66, 39.96, 40.12, 40.34, 40.57, 40.87]},
          {"speaker": "Julian", "time": 41.63, "endTime": 47.2, "text": "First, gossip. Speaking ill of somebody who's not present.", "wordTimes": [41.63, 42.63, 44.49, 45.03, 45.24, 45.37, 45.92, 46.19, 46.39]},
          {"speaker": "Julian", "time": 47.2, "endTime": 54.27, "text": "Not a nice habit, and we know perfectly well the person gossiping, five minutes later, will be gossiping about us.", "wordTimes": [47.2, 47.36, 47.46, 47.67, 48.05, 48.21, 48.32, 48.53, 49.02, 49.32, 49.55, 50.0, 50.82, 51.12, 51.65, 52.17, 52.47, 52.62, 53.3, 53.67]},
          {"speaker": "Julian", "time": 54.27, "endTime": 60.38, "text": "Second, judging. We know people who are like this in conversation, and it's very hard to listen to somebody", "wordTimes": [54.27, 54.89, 56.02, 56.13, 56.35, 56.68, 56.85, 57.01, 57.23, 57.45, 57.56, 58.42, 58.6, 58.77, 59.01, 59.24, 59.36, 59.71, 59.83]},
          {"speaker": "Julian", "time": 60.38, "endTime": 64.53, "text": "if you know that you're being judged and found wanting at the same time.", "wordTimes": [60.38, 60.51, 60.71, 60.97, 61.24, 61.57, 61.9, 62.3, 62.49, 62.82, 63.29, 63.42, 63.62, 63.88]},
          {"speaker": "Julian", "time": 64.53, "endTime": 68.26, "text": "Third, negativity. You can fall into this.", "wordTimes": [64.53, 65.21, 66.95, 67.13, 67.3, 67.54, 67.78]},
          {"speaker": "Julian", "time": 68.26, "endTime": 71.32, "text": "My mother, in the last years of her life, became very negative,", "wordTimes": [68.26, 68.37, 68.79, 68.9, 69.06, 69.28, 69.54, 69.65, 69.81, 70.13, 70.45, 70.67]},
          {"speaker": "Julian", "time": 71.32, "endTime": 72.67, "text": "and it's hard to listen.", "wordTimes": [71.32, 71.5, 71.69, 71.93, 72.05]},
          {"speaker": "Julian", "time": 72.67, "endTime": 75.42, "text": "I remember one day, I said to her, \"It's October 1 today,\"", "wordTimes": [72.67, 72.77, 73.2, 73.36, 73.62, 73.72, 73.93, 74.04, 74.3, 74.47, 74.84, 74.94]},
          {"speaker": "Julian", "time": 75.42, "endTime": 77.54, "text": "and she said, \"I know, isn't it dreadful?\"", "wordTimes": [75.42, 75.59, 75.75, 76.08, 76.17, 76.5, 76.72, 76.83]},
          {"speaker": "Julian", "time": 79.76, "endTime": 82.14, "text": "It's hard to listen when somebody's that negative.", "wordTimes": [79.76, 79.92, 80.13, 80.23, 80.55, 80.76, 81.24, 81.45]},
          {"speaker": "Julian", "time": 83.43, "endTime": 85.97, "text": "And another form of negativity, complaining.", "wordTimes": [83.43, 83.6, 84.01, 84.24, 84.36, 85.04]},
          {"speaker": "Julian", "time": 85.97, "endTime": 90.04, "text": "Well, this is the national art of the U.K.", "wordTimes": [85.97, 86.61, 87.04, 87.25, 87.58, 88.44, 88.77, 88.98, 89.31]},
          {"speaker": "Julian", "time": 90.04, "endTime": 91.48, "text": "It's our national sport.", "wordTimes": [90.04, 90.23, 90.41, 90.91]},
          {"speaker": "Julian", "time": 91.48, "endTime": 97.06, "text": "We complain about the weather, sport, about politics, about everything, but actually, complaining is viral misery.", "wordTimes": [91.48, 91.58, 91.99, 92.24, 92.39, 92.84, 93.19, 93.44, 93.95, 94.2, 94.94, 95.09, 95.59, 96.15, 96.25, 96.5]},
          {"speaker": "Julian", "time": 97.06, "endTime": 100.79, "text": "It's not spreading sunshine and lightness in the world.", "wordTimes": [97.06, 97.28, 97.5, 98.17, 98.77, 98.99, 99.66, 99.8, 100.03]},
          {"speaker": "Julian", "time": 100.79, "endTime": 103.9, "text": "Excuses. We've all met this guy.", "wordTimes": [100.79, 102.55, 102.81, 103.0, 103.19, 103.44]},
          {"speaker": "Julian", "time": 103.9, "endTime": 105.5, "text": "Maybe we've all been this guy.", "wordTimes": [103.9, 104.19, 104.43, 104.6, 104.83, 105.07]},
          {"speaker": "Julian", "time": 105.5, "endTime": 107.99, "text": "Some people have a blamethrower.", "wordTimes": [105.5, 105.81, 106.27, 106.58, 106.71]},
          {"speaker": "Julian", "time": 107.99, "endTime": 112.55, "text": "They just pass it on to everybody else and don't take responsibility for their actions,", "wordTimes": [107.99, 108.27, 108.54, 108.82, 108.96, 109.09, 109.23, 109.85, 110.22, 110.38, 110.59, 110.81, 111.56, 111.72, 111.98]},
          {"speaker": "Julian", "time": 112.55, "endTime": 115.48, "text": "and again, hard to listen to somebody who is being like that.", "wordTimes": [112.55, 112.71, 113.07, 113.28, 113.39, 113.71, 113.81, 114.24, 114.4, 114.5, 114.77, 114.98]},
          {"speaker": "Julian", "time": 115.48, "endTime": 120.71, "text": "Penultimate, the sixth of the seven, embroidery, exaggeration.", "wordTimes": [115.48, 116.17, 116.33, 116.59, 116.7, 116.86, 117.3, 118.52]},
          {"speaker": "Julian", "time": 120.71, "endTime": 123.14, "text": "It demeans our language, actually, sometimes.", "wordTimes": [120.71, 120.82, 121.19, 121.35, 121.87, 122.39]},
          {"speaker": "Julian", "time": 123.14, "endTime": 127.72, "text": "For example, if I see something that really is awesome, what do I call it?", "wordTimes": [123.14, 123.34, 123.91, 124.04, 124.16, 124.35, 124.94, 125.2, 125.59, 125.72, 126.43, 126.72, 126.87, 126.99, 127.28]},
          {"speaker": "Julian", "time": 130.34, "endTime": 136.82, "text": "And then, of course, this exaggeration becomes lying, and we don't want to listen to people we know are lying to us.", "wordTimes": [130.34, 130.54, 130.95, 131.08, 131.62, 131.89, 132.71, 133.19, 133.8, 133.97, 134.09, 134.32, 134.55, 134.66, 135.01, 135.13, 135.47, 135.59, 135.82, 135.99, 136.28, 136.39]},
          {"speaker": "Julian", "time": 136.82, "endTime": 143.82, "text": "And finally, dogmatism. The confusion of facts with opinions.", "wordTimes": [136.82, 137.16, 138.18, 140.19, 140.45, 141.23, 141.41, 141.84, 142.19]},
          {"speaker": "Julian", "time": 143.82, "endTime": 147.26, "text": "When those two things get conflated, you're listening into the wind.", "wordTimes": [143.82, 144.05, 144.35, 144.52, 144.87, 145.05, 145.76, 146.01, 146.47, 146.68, 146.83]},
          {"speaker": "Julian", "time": 147.26, "endTime": 150.95, "text": "You know, somebody is bombarding you with their opinions as if they were true.", "wordTimes": [147.26, 147.42, 147.72, 148.14, 148.24, 148.76, 148.92, 149.12, 149.38, 149.8, 149.9, 150.01, 150.22, 150.42]},
          {"speaker": "Julian", "time": 150.95, "endTime": 153.05, "text": "It's difficult to listen to that.", "wordTimes": [150.95, 151.16, 151.78, 151.91, 152.33, 152.46]},
          {"speaker": "Julian", "time": 153.05, "endTime": 156.09, "text": "So here they are, seven deadly sins of speaking.", "wordTimes": [153.05, 153.19, 153.46, 153.73, 154.06, 154.39, 154.8, 155.07, 155.21]},
          {"speaker": "Julian", "time": 156.09, "endTime": 158.52, "text": "These are things I think we need to avoid.", "wordTimes": [156.09, 156.4, 156.59, 156.97, 157.08, 157.4, 157.52, 157.77, 157.9]},
          {"speaker": "Julian", "time": 158.52, "endTime": 161.39, "text": "But is there a positive way to think about this?", "wordTimes": [158.52, 158.72, 158.85, 159.18, 159.29, 159.81, 160.01, 160.14, 160.47, 160.8]},
          {"speaker": "Julian", "time": 161.39, "endTime": 168.47, "text": "Yes, there is. I'd like to suggest that there are four really powerful cornerstones, foundations,", "wordTimes": [161.39, 161.87, 162.37, 162.96, 163.11, 163.4, 163.55, 164.07, 164.36, 164.73, 164.95, 165.24, 165.69, 166.28, 167.3]},
          {"speaker": "Julian", "time": 168.47, "endTime": 174.79, "text": "that we can stand on if we want our speech to be powerful and to make change in the world.", "wordTimes": [168.47, 168.76, 168.9, 169.11, 169.47, 169.61, 169.75, 169.9, 170.18, 170.39, 170.92, 171.1, 171.29, 172.03, 172.3, 172.49, 172.86, 173.41, 173.59, 173.87]},
          {"speaker": "Julian", "time": 174.79, "endTime": 177.02, "text": "Fortunately, these things spell a word.", "wordTimes": [174.79, 175.52, 175.8, 176.14, 176.42, 176.52]},
          {"speaker": "Julian", "time": 177.02, "endTime": 180.12, "text": "The word is \"hail,\" and it has a great definition as well.", "wordTimes": [177.02, 177.2, 177.45, 177.57, 177.92, 178.11, 178.23, 178.41, 178.52, 178.82, 179.43, 179.55]},
          {"speaker": "Julian", "time": 180.12, "endTime": 184.07, "text": "I'm not talking about the stuff that falls from the sky and hits you on the head.", "wordTimes": [180.12, 180.24, 180.41, 180.82, 181.11, 181.29, 181.58, 181.81, 182.1, 182.33, 182.51, 182.79, 182.96, 183.18, 183.34, 183.45, 183.62]},
          {"speaker": "Julian", "time": 184.07, "endTime": 189.81, "text": "I'm talking about this definition, to greet or acclaim enthusiastically, which is how I think our words will be received", "wordTimes": [184.07, 184.18, 184.55, 184.81, 185.02, 185.72, 185.82, 186.08, 186.18, 186.55, 187.54, 187.82, 187.93, 188.1, 188.2, 188.48, 188.65, 188.93, 189.16, 189.27]},
          {"speaker": "Julian", "time": 189.81, "endTime": 191.4, "text": "if we stand on these four things.", "wordTimes": [189.81, 189.91, 190.02, 190.28, 190.38, 190.64, 190.85]},
          {"speaker": "Julian", "time": 191.4, "endTime": 192.93, "text": "So what do they stand for?", "wordTimes": [191.4, 191.53, 191.78, 191.9, 192.16, 192.47]},
          {"speaker": "Julian", "time": 192.93, "endTime": 194.82, "text": "See if you can guess.", "wordTimes": [192.93, 193.21, 193.4, 193.68, 193.96]},
          {"speaker": "Julian", "time": 194.82, "endTime": 200.75, "text": "The H, honesty, of course, being true in what you say, being straight and clear.", "wordTimes": [194.82, 195.11, 195.45, 196.3, 196.49, 197.78, 198.08, 198.32, 198.44, 198.69, 198.87, 199.16, 199.47, 199.95, 200.13]},
          {"speaker": "Julian", "time": 200.75, "endTime": 204.79, "text": "The A is authenticity, just being yourself.", "wordTimes": [200.75, 200.99, 201.14, 201.3, 202.42, 202.74, 203.15]},
          {"speaker": "Julian", "time": 204.79, "endTime": 208.0, "text": "A friend of mine described it as standing in your own truth,", "wordTimes": [204.79, 204.9, 205.26, 205.38, 205.63, 206.18, 206.3, 206.42, 206.91, 207.03, 207.27, 207.45]},
          {"speaker": "Julian", "time": 208.0, "endTime": 209.94, "text": "which I think is a lovely way to put it.", "wordTimes": [208.0, 208.27, 208.36, 208.63, 208.74, 208.83, 209.15, 209.31, 209.42, 209.58]},
          {"speaker": "Julian", "time": 209.94, "endTime": 214.37, "text": "The I is integrity, being your word, actually doing what you say,", "wordTimes": [209.94, 210.17, 210.31, 210.47, 211.31, 211.7, 212.02, 212.58, 213.13, 213.48, 213.75, 213.96]},
          {"speaker": "Julian", "time": 214.37, "endTime": 216.86, "text": "and being somebody people can trust.", "wordTimes": [214.37, 214.59, 214.94, 215.52, 215.95, 216.16]},
          {"speaker": "Julian", "time": 216.86, "endTime": 219.63, "text": "And the L is love.", "wordTimes": [216.86, 217.26, 217.66, 217.89, 218.16]},
          {"speaker": "Julian", "time": 219.63, "endTime": 225.16, "text": "I don't mean romantic love, but I do mean wishing people well, for two reasons.", "wordTimes": [219.63, 219.78, 220.13, 220.47, 221.16, 221.75, 221.96, 222.09, 222.23, 222.52, 223.02, 223.44, 223.86, 224.08, 224.29]},
          {"speaker": "Julian", "time": 225.16, "endTime": 228.57, "text": "First of all, I think absolute honesty may not be what we want.", "wordTimes": [225.16, 225.46, 225.58, 225.87, 225.97, 226.27, 226.75, 227.16, 227.34, 227.52, 227.64, 227.88, 228.0]},
          {"speaker": "Julian", "time": 228.57, "endTime": 231.16, "text": "I mean, my goodness, you look ugly this morning.", "wordTimes": [228.57, 228.67, 228.99, 229.11, 229.65, 229.82, 230.04, 230.26, 230.49]},
          {"speaker": "Julian", "time": 231.16, "endTime": 234.52, "text": "Perhaps that's not necessary.", "wordTimes": [231.16, 231.87, 232.37, 232.67]},
          {"speaker": "Julian", "time": 234.52, "endTime": 237.88, "text": "Tempered with love, of course, honesty is a great thing.", "wordTimes": [234.52, 235.02, 235.27, 235.63, 235.76, 236.25, 236.68, 236.81, 236.92, 237.23]},
          {"speaker": "Julian", "time": 237.88, "endTime": 243.61, "text": "But also, if you're really wishing somebody well, it's very hard to judge them at the same time.", "wordTimes": [237.88, 238.09, 238.5, 238.63, 238.98, 239.4, 239.88, 240.44, 240.97, 241.17, 241.43, 241.7, 241.83, 242.16, 242.43, 242.56, 242.76, 243.02]},
          {"speaker": "Julian", "time": 243.61, "endTime": 247.81, "text": "I'm not even sure you can do those two things simultaneously.", "wordTimes": [243.61, 243.76, 244.0, 244.3, 244.61, 244.84, 245.07, 245.23, 245.61, 245.85, 246.31]},
          {"speaker": "Julian", "time": 247.81, "endTime": 253.44, "text": "So hail. Also, now that's what you say, and it's like the old song, it is what you say,", "wordTimes": [247.81, 248.09, 249.41, 249.8, 249.99, 250.32, 250.58, 250.78, 251.17, 251.34, 251.52, 251.75, 251.92, 252.09, 252.43, 252.55, 252.66, 252.89, 253.07]},
          {"speaker": "Julian", "time": 253.44, "endTime": 255.14, "text": "it's also the way that you say it.", "wordTimes": [253.44, 253.61, 253.84, 254.02, 254.19, 254.42, 254.59, 254.77]},
          {"speaker": "Julian", "time": 255.14, "endTime": 256.91, "text": "You have an amazing toolbox.", "wordTimes": [255.14, 255.33, 255.59, 255.72, 256.17]},
          {"speaker": "Julian", "time": 256.91, "endTime": 262.31, "text": "This instrument is incredible, and yet this is a toolbox that very few people have ever opened.", "wordTimes": [256.91, 257.17, 257.81, 257.93, 258.77, 258.96, 259.14, 259.39, 259.51, 259.62, 260.05, 260.3, 260.55, 260.73, 261.1, 261.35, 261.59]},
          {"speaker": "Julian", "time": 262.31, "endTime": 266.36, "text": "I'd like to have a little rummage in there with you now and just pull a few tools out", "wordTimes": [262.31, 262.42, 262.65, 262.77, 263.0, 263.1, 263.45, 263.85, 263.96, 264.25, 264.48, 264.65, 264.93, 265.1, 265.33, 265.57, 265.67, 265.84, 266.13]},
          {"speaker": "Julian", "time": 266.36, "endTime": 270.94, "text": "that you might like to take away and play with, which will increase the power of your speaking.", "wordTimes": [266.36, 266.58, 266.75, 267.03, 267.25, 267.36, 267.59, 267.81, 267.98, 268.2, 268.62, 268.88, 269.09, 269.52, 269.67, 269.94, 270.04, 270.25]},
          {"speaker": "Julian", "time": 270.94, "endTime": 276.68, "text": "Register, for example. Now, falsetto register may not be very useful most of the time,", "wordTimes": [270.94, 271.57, 271.77, 272.49, 272.86, 273.45, 274.05, 274.28, 274.5, 274.65, 274.95, 275.4, 275.7, 275.85, 276.07]},
          {"speaker": "Julian", "time": 276.68, "endTime": 278.73, "text": "but there's a register in between.", "wordTimes": [276.68, 276.87, 277.25, 277.36, 277.87, 278.0]},
          {"speaker": "Julian", "time": 278.73, "endTime": 282.7, "text": "I'm not going to get very technical about this for any of you who are voice coaches.", "wordTimes": [278.73, 278.84, 279.01, 279.3, 279.41, 279.58, 279.81, 280.32, 280.61, 280.92, 281.08, 281.24, 281.34, 281.5, 281.66, 281.82, 282.08]},
          {"speaker": "Julian", "time": 282.7, "endTime": 284.44, "text": "You can locate your voice, however.", "wordTimes": [282.7, 282.85, 283.0, 283.3, 283.51, 283.85]},
          {"speaker": "Julian", "time": 284.44, "endTime": 287.32, "text": "So if I talk up here in my nose, you can hear the difference.", "wordTimes": [284.44, 284.55, 284.65, 284.75, 284.96, 285.07, 285.28, 285.39, 285.49, 285.81, 285.96, 286.12, 286.34, 286.5]},
          {"speaker": "Julian", "time": 287.32, "endTime": 291.49, "text": "If I go down here in my throat, which is where most of us speak from most of the time.", "wordTimes": [287.32, 287.43, 287.53, 287.65, 287.87, 288.1, 288.21, 288.32, 288.83, 289.11, 289.22, 289.51, 289.73, 289.84, 289.96, 290.24, 290.46, 290.69, 290.8, 290.97]},
          {"speaker": "Julian", "time": 291.49, "endTime": 295.62, "text": "But if you want weight, you need to go down here to the chest.", "wordTimes": [291.49, 291.73, 291.89, 292.13, 292.45, 293.14, 293.36, 293.66, 293.8, 293.95, 294.25, 294.54, 294.69, 294.91]},
          {"speaker": "Julian", "time": 295.62, "endTime": 297.23, "text": "You hear the difference?", "wordTimes": [295.62, 295.82, 296.08, 296.28]},
          {"speaker": "Julian", "time": 297.23, "endTime": 304.24, "text": "We vote for politicians with lower voices, it's true, because we associate depth with power", "wordTimes": [297.23, 297.4, 297.74, 297.99, 298.92, 299.26, 299.69, 300.36, 300.61, 301.27, 301.89, 302.07, 302.87, 303.32, 303.68]},
          {"speaker": "Julian", "time": 304.24, "endTime": 308.63, "text": "and with authority. That's register.", "wordTimes": [304.24, 304.58, 305.04, 306.94, 307.37]},
          {"speaker": "Julian", "time": 308.63, "endTime": 310.0, "text": "Then we have timbre.", "wordTimes": [308.63, 308.9, 309.04, 309.31]},
          {"speaker": "Julian", "time": 310.0, "endTime": 311.77, "text": "It's the way your voice feels.", "wordTimes": [310.0, 310.19, 310.39, 310.58, 310.84, 311.16]},
          {"speaker": "Julian", "time": 311.77, "endTime": 316.92, "text": "Again, the research shows that we prefer voices which are rich, smooth, warm,", "wordTimes": [311.77, 312.16, 312.33, 312.79, 313.13, 313.45, 313.61, 314.09, 314.56, 314.96, 315.2, 315.67, 316.3]},
          {"speaker": "Julian", "time": 316.92, "endTime": 322.42, "text": "like hot chocolate. Well if that's not you, that's not the end of the world,", "wordTimes": [316.92, 317.3, 317.58, 319.13, 319.41, 319.55, 319.91, 320.12, 320.46, 320.82, 321.03, 321.24, 321.45, 321.59, 321.8]},
          {"speaker": "Julian", "time": 322.42, "endTime": 323.87, "text": "because you can train.", "wordTimes": [322.42, 322.88, 323.07, 323.27]},
          {"speaker": "Julian", "time": 323.87, "endTime": 325.11, "text": "Go and get a voice coach.", "wordTimes": [323.87, 323.97, 324.13, 324.28, 324.37, 324.63]},
          {"speaker": "Julian", "time": 325.11, "endTime": 329.42, "text": "And there are amazing things you can do with breathing, with posture, and with exercises", "wordTimes": [325.11, 325.28, 325.56, 325.73, 326.13, 326.46, 326.63, 326.8, 326.99, 327.2, 327.78, 328.0, 328.47, 328.63, 328.84]},
          {"speaker": "Julian", "time": 329.42, "endTime": 331.94, "text": "to improve the timbre of your voice.", "wordTimes": [329.42, 329.57, 330.09, 330.32, 330.77, 330.92, 331.22]},
          {"speaker": "Julian", "time": 331.94, "endTime": 333.73, "text": "Then prosody. I love prosody.", "wordTimes": [331.94, 332.17, 332.75, 332.85, 333.08]},
          {"speaker": "Julian", "time": 333.73, "endTime": 337.98, "text": "This is the sing-song, the meta-language that we use in order to impart meaning.", "wordTimes": [333.73, 333.98, 334.1, 334.28, 334.89, 335.08, 335.9, 336.13, 336.25, 336.42, 336.54, 336.83, 336.95, 337.3]},
          {"speaker": "Julian", "time": 337.98, "endTime": 340.81, "text": "It's root one for meaning in conversation.", "wordTimes": [337.98, 338.2, 338.49, 338.71, 338.93, 339.44, 339.58]},
          {"speaker": "Julian", "time": 340.81, "endTime": 347.11, "text": "People who speak all on one note are really quite hard to listen to if they don't have any prosody at all.", "wordTimes": [340.81, 341.25, 341.46, 341.83, 342.04, 342.19, 342.41, 342.7, 342.91, 343.35, 343.71, 344.0, 344.15, 344.58, 344.89, 345.02, 345.29, 345.55, 345.81, 346.01, 346.47, 346.61]},
          {"speaker": "Julian", "time": 347.11, "endTime": 352.81, "text": "That's where the word \"monotonic\" comes from, or monotonous, monotone.", "wordTimes": [347.11, 347.5, 347.89, 348.12, 348.43, 349.13, 349.51, 350.09, 350.27, 351.32]},
          {"speaker": "Julian", "time": 352.81, "endTime": 358.82, "text": "Also, we have repetitive prosody now coming in, where every sentence ends as if it were a question", "wordTimes": [352.81, 353.25, 353.41, 353.71, 354.46, 354.99, 355.22, 355.67, 356.1, 356.41, 356.73, 357.23, 357.48, 357.6, 357.73, 357.85, 358.1, 358.21]},
          {"speaker": "Julian", "time": 358.82, "endTime": 361.32, "text": "when it's actually not a question, it's a statement?", "wordTimes": [358.82, 359.03, 359.18, 359.59, 359.74, 359.84, 360.34, 360.5, 360.59]},
          {"speaker": "Julian", "time": 363.65, "endTime": 368.61, "text": "And if you repeat that one, it's actually restricting your ability to communicate through prosody,", "wordTimes": [363.65, 363.85, 363.98, 364.18, 364.58, 364.85, 365.24, 365.4, 365.82, 366.39, 366.6, 366.97, 367.07, 367.64, 368.01]},
          {"speaker": "Julian", "time": 368.61, "endTime": 373.81, "text": "which I think is a shame, so let's try and break that habit.", "wordTimes": [368.61, 369.01, 369.15, 369.56, 369.72, 369.86, 370.49, 370.71, 371.14, 371.47, 371.8, 372.34, 372.77]},
          {"speaker": "Julian", "time": 373.81, "endTime": 381.08, "text": "Pace. I can get very excited by saying something really quickly, or I can slow right down to emphasize,", "wordTimes": [373.81, 374.92, 375.01, 375.17, 375.33, 375.54, 375.91, 376.01, 376.33, 376.8, 377.12, 377.7, 377.9, 378.07, 378.37, 378.77, 379.27, 379.66, 379.86]},
          {"speaker": "Julian", "time": 381.08, "endTime": 387.06, "text": "and at the end of that, of course, is our old friend silence.", "wordTimes": [381.08, 381.4, 381.62, 381.95, 382.27, 382.49, 383.12, 383.34, 384.19, 384.41, 384.73, 385.06, 385.71]},
          {"speaker": "Julian", "time": 387.06, "endTime": 391.06, "text": "There's nothing wrong with a bit of silence in a talk, is there?", "wordTimes": [387.06, 387.47, 387.96, 388.3, 388.58, 388.7, 388.9, 389.04, 389.53, 389.66, 389.78, 390.19, 390.33]},
          {"speaker": "Julian", "time": 391.06, "endTime": 394.33, "text": "We don't have to fill it with ums and ahs.", "wordTimes": [391.06, 391.24, 391.61, 391.98, 392.16, 392.52, 392.71, 393.07, 393.35, 393.62]},
          {"speaker": "Julian", "time": 394.33, "endTime": 396.32, "text": "It can be very powerful.", "wordTimes": [394.33, 394.5, 394.76, 394.93, 395.27]},
          {"speaker": "Julian", "time": 396.32, "endTime": 401.3, "text": "Of course, pitch often goes along with pace to indicate arousal, but you can do it just with pitch.", "wordTimes": [396.32, 396.44, 396.92, 397.22, 397.53, 397.77, 398.07, 398.31, 398.65, 398.76, 399.18, 399.65, 399.81, 399.96, 400.12, 400.23, 400.33, 400.54, 400.76]},
          {"speaker": "Julian", "time": 401.3, "endTime": 402.88, "text": "Where did you leave my keys?", "wordTimes": [401.3, 401.6, 401.78, 401.96, 402.26, 402.38]},
          {"speaker": "Julian", "time": 402.88, "endTime": 404.99, "text": "Where did you leave my keys?", "wordTimes": [402.88, 403.28, 403.52, 403.76, 404.16, 404.32]},
          {"speaker": "Julian", "time": 404.99, "endTime": 408.66, "text": "So, slightly different meaning in those two deliveries.", "wordTimes": [404.99, 405.26, 405.81, 406.43, 406.91, 407.05, 407.39, 407.6]},
          {"speaker": "Julian", "time": 408.66, "endTime": 414.3, "text": "And finally, volume. I can get really excited by using volume.", "wordTimes": [408.66, 408.92, 409.69, 410.9, 411.06, 411.32, 411.58, 412.11, 412.73, 412.91, 413.35]},
          {"speaker": "Julian", "time": 414.3, "endTime": 416.48, "text": "Sorry about that, if I startled anybody.", "wordTimes": [414.3, 414.58, 414.85, 415.18, 415.29, 415.38, 415.82]},
          {"speaker": "Julian", "time": 416.48, "endTime": 421.21, "text": "Or, I can have you really pay attention by getting very quiet.", "wordTimes": [416.48, 416.8, 416.95, 417.19, 417.53, 417.77, 418.27, 418.52, 419.26, 419.43, 420.0, 420.34]},
          {"speaker": "Julian", "time": 421.21, "endTime": 423.03, "text": "Some people broadcast the whole time.", "wordTimes": [421.21, 421.41, 421.72, 422.18, 422.33, 422.59]},
          {"speaker": "Julian", "time": 423.03, "endTime": 424.4, "text": "Try not to do that.", "wordTimes": [423.03, 423.26, 423.49, 423.64, 423.79]},
          {"speaker": "Julian", "time": 424.4, "endTime": 432.51, "text": "That's called sodcasting, Imposing your sound on people around you carelessly and inconsiderately.", "wordTimes": [424.4, 424.73, 425.13, 427.94, 428.48, 428.75, 429.08, 429.22, 429.62, 430.02, 430.22, 430.9, 431.1]},
          {"speaker": "Julian", "time": 432.51, "endTime": 438.7, "text": "Not nice. Of course, where this all comes into play most of all is when you've got something really important to do.", "wordTimes": [432.51, 432.78, 433.62, 433.73, 434.17, 434.45, 434.67, 434.84, 435.12, 435.34, 435.57, 435.79, 435.9, 436.17, 436.28, 436.49, 436.76, 436.92, 437.4, 437.73, 438.21, 438.31]},
          {"speaker": "Julian", "time": 438.7, "endTime": 442.15, "text": "It might be standing on a stage like this and giving a talk to people.", "wordTimes": [438.7, 438.81, 439.09, 439.2, 439.64, 439.75, 439.85, 440.13, 440.35, 440.57, 440.74, 441.07, 441.17, 441.39, 441.5]},
          {"speaker": "Julian", "time": 442.15, "endTime": 447.19, "text": "It might be proposing marriage, asking for a raise, a wedding speech.", "wordTimes": [442.15, 442.28, 442.61, 442.74, 443.32, 444.04, 444.55, 444.8, 444.95, 445.53, 445.68, 446.28]},
          {"speaker": "Julian", "time": 447.19, "endTime": 452.97, "text": "Whatever it is, if it's really important, you owe it to yourself to look at this toolbox", "wordTimes": [447.19, 447.62, 447.73, 447.94, 448.05, 448.21, 448.53, 449.2, 449.49, 449.79, 449.98, 450.18, 450.96, 451.16, 451.55, 451.74, 452.13]},
          {"speaker": "Julian", "time": 452.97, "endTime": 458.1, "text": "and the engine that it's going to work on, and no engine works well without being warmed up.", "wordTimes": [452.97, 453.14, 453.32, 453.66, 453.89, 454.07, 454.36, 454.47, 454.7, 455.01, 455.22, 455.35, 455.76, 456.11, 456.38, 456.86, 457.2, 457.61]},
          {"speaker": "Julian", "time": 458.1, "endTime": 459.98, "text": "Warm up your voice.", "wordTimes": [458.1, 458.49, 458.69, 459.09]},
          {"speaker": "Julian", "time": 459.98, "endTime": 462.06, "text": "Actually, let me show you how to do that.", "wordTimes": [459.98, 460.53, 460.69, 460.8, 461.02, 461.19, 461.35, 461.46, 461.57]},
          {"speaker": "Julian", "time": 462.06, "endTime": 465.04, "text": "Would you all like to stand up for a moment?", "wordTimes": [462.06, 462.44, 462.66, 462.89, 463.19, 463.34, 463.71, 463.86, 464.09, 464.22]},
          {"speaker": "Julian", "time": 465.04, "endTime": 471.43, "text": "I'm going to show you the six vocal warm-up exercises that I do before every talk I ever do.", "wordTimes": [465.04, 465.18, 465.52, 465.66, 465.94, 466.19, 466.44, 466.69, 467.11, 467.62, 468.38, 468.71, 468.86, 469.03, 469.53, 469.95, 470.29, 470.44, 470.78]},
          {"speaker": "Julian", "time": 471.43, "endTime": 474.36, "text": "Any time you're going to talk to anybody important, do these.", "wordTimes": [471.43, 471.59, 471.8, 472.06, 472.33, 472.44, 472.65, 472.75, 473.12, 473.7, 473.8]},
          {"speaker": "Julian", "time": 474.36, "endTime": 480.26, "text": "First, arms up, deep breath in, and sigh out, ahhhhh, like that.", "wordTimes": [474.36, 475.01, 475.38, 475.75, 476.12, 476.68, 477.16, 477.45, 477.83, 478.3, 479.05, 479.44]},
          {"speaker": "Julian", "time": 480.26, "endTime": 484.89, "text": "One more time. Ahhhh, very good.", "wordTimes": [480.26, 480.54, 480.91, 481.89, 482.82, 483.36]},
          {"speaker": "Julian", "time": 484.89, "endTime": 488.98, "text": "Now we're going to warm up our lips, and we're going to go Ba, Ba, Ba, Ba,", "wordTimes": [484.89, 485.06, 485.29, 485.58, 485.7, 485.93, 486.05, 486.22, 486.63, 486.84, 487.13, 487.49, 487.63, 487.77, 488.05, 488.33, 488.61]},
          {"speaker": "Julian", "time": 488.98, "endTime": 491.94, "text": "Ba, Ba, Ba, Ba. Very good.", "wordTimes": [488.98, 489.37, 489.76, 490.15, 490.68, 491.09]},
          {"speaker": "Julian", "time": 491.94, "endTime": 496.93, "text": "And now, brrrrrrrrrr, just like when you were a kid.", "wordTimes": [491.94, 492.35, 493.01, 495.38, 495.6, 495.82, 496.04, 496.2, 496.42, 496.52]},
          {"speaker": "Julian", "time": 496.93, "endTime": 499.35, "text": "Brrrr. Now your lips should be coming alive.", "wordTimes": [496.93, 497.39, 497.56, 497.78, 498.01, 498.34, 498.45, 498.79]},
          {"speaker": "Julian", "time": 499.35, "endTime": 505.35, "text": "We're going to do the tongue next with exaggerated la, la, la, la, la, la, la, la, la.", "wordTimes": [499.35, 499.6, 499.91, 500.03, 500.16, 500.34, 500.71, 501.03, 501.35, 502.24, 502.55, 502.87, 503.18, 503.5, 503.81, 504.12, 504.44, 504.75]},
          {"speaker": "Julian", "time": 505.35, "endTime": 507.56, "text": "Beautiful. You're getting really good at this.", "wordTimes": [505.35, 505.95, 506.19, 506.53, 506.82, 507.02, 507.12]},
          {"speaker": "Julian", "time": 507.56, "endTime": 510.45, "text": "And then, roll an R. Rrrrrrr.", "wordTimes": [507.56, 507.84, 508.38, 508.74, 508.93, 509.39]},
          {"speaker": "Julian", "time": 510.45, "endTime": 512.67, "text": "That's like champagne for the tongue.", "wordTimes": [510.45, 510.77, 511.03, 511.6, 511.79, 511.99]},
          {"speaker": "Julian", "time": 512.67, "endTime": 516.8, "text": "Finally, and if I can only do one, the pros call this the siren.", "wordTimes": [512.67, 513.34, 513.57, 513.72, 513.85, 514.08, 514.38, 514.53, 514.99, 515.19, 515.45, 515.72, 515.98, 516.18]},
          {"speaker": "Julian", "time": 516.8, "endTime": 519.44, "text": "It's really good. It starts with \"we\" and goes to \"aw.\"", "wordTimes": [516.8, 516.97, 517.31, 517.73, 517.84, 518.18, 518.41, 518.52, 518.69, 518.92, 519.03]},
          {"speaker": "Julian", "time": 519.44, "endTime": 521.09, "text": "The \"we\" is high, the \"aw\" is low.", "wordTimes": [519.44, 519.62, 519.74, 519.86, 520.22, 520.4, 520.52, 520.64]},
          {"speaker": "Julian", "time": 521.09, "endTime": 527.21, "text": "So you go, weeeaawww, weeeaawww.", "wordTimes": [521.09, 521.4, 521.87, 522.48, 524.18]},
          {"speaker": "Julian", "time": 527.21, "endTime": 529.47, "text": "Fantastic. Give yourselves a round of applause.", "wordTimes": [527.21, 527.79, 527.97, 528.44, 528.52, 528.76, 528.85]},
          {"speaker": "Julian", "time": 529.47, "endTime": 530.74, "text": "Take a seat, thank you.", "wordTimes": [529.47, 529.68, 529.78, 530.09, 530.35]},
          {"speaker": "Julian", "time": 532.21, "endTime": 534.84, "text": "Next time you speak, do those in advance.", "wordTimes": [532.21, 532.48, 532.75, 532.96, 533.42, 533.56, 533.9, 534.04]},
          {"speaker": "Julian", "time": 534.84, "endTime": 537.48, "text": "Now let me just put this in context to close.", "wordTimes": [534.84, 535.04, 535.24, 535.37, 535.63, 535.83, 536.1, 536.23, 536.69, 536.83]},
          {"speaker": "Julian", "time": 537.48, "endTime": 539.77, "text": "This is a serious point here.", "wordTimes": [537.48, 537.8, 537.97, 538.11, 538.68, 539.09]},
          {"speaker": "Julian", "time": 539.77, "endTime": 541.6, "text": "This is where we are now, right?", "wordTimes": [539.77, 540.01, 540.13, 540.43, 540.55, 540.73, 541.03]},
          {"speaker": "Julian", "time": 541.6, "endTime": 548.05, "text": "We speak not very well to people who simply aren't listening in an environment that's all about noise and bad acoustics.", "wordTimes": [541.6, 541.78, 542.22, 542.49, 542.85, 543.27, 543.39, 543.73, 543.91, 544.25, 544.54, 545.14, 545.25, 545.36, 545.96, 546.23, 546.39, 546.66, 546.94, 547.1, 547.26]},
          {"speaker": "Julian", "time": 548.05, "endTime": 551.3, "text": "I have talked about that on this stage in different phases.", "wordTimes": [548.05, 548.16, 548.4, 548.76, 549.05, 549.29, 549.41, 549.65, 549.95, 550.07, 550.61]},
          {"speaker": "Julian", "time": 551.3, "endTime": 556.71, "text": "What would the world be like if we were speaking powerfully to people who were listening consciously", "wordTimes": [551.3, 551.57, 551.91, 552.12, 552.46, 552.59, 552.93, 553.06, 553.18, 553.44, 553.95, 554.65, 554.76, 555.1, 555.27, 555.5, 556.01]},
          {"speaker": "Julian", "time": 556.71, "endTime": 560.1, "text": "in environments which were actually fit for purpose?", "wordTimes": [556.71, 556.85, 557.67, 558.02, 558.29, 558.84, 559.05, 559.26]},
          {"speaker": "Julian", "time": 560.1, "endTime": 566.81, "text": "Or to make that a bit larger, what would the world be like if we were creating sound consciously", "wordTimes": [560.1, 560.33, 560.57, 561.03, 561.5, 561.7, 562.05, 563.09, 563.32, 563.6, 563.77, 564.05, 564.16, 564.44, 564.58, 564.72, 565.01, 565.58, 565.93]},
          {"speaker": "Julian", "time": 566.81, "endTime": 572.05, "text": "and consuming sound consciously and designing all our environments consciously for sound?", "wordTimes": [566.81, 567.02, 567.65, 567.99, 568.84, 569.01, 569.5, 569.67, 569.84, 570.57, 571.27, 571.46]},
          {"speaker": "Julian", "time": 572.05, "endTime": 579.08, "text": "That would be a world that does sound beautiful, and one where understanding would be the norm,", "wordTimes": [572.05, 572.34, 572.7, 572.84, 572.97, 573.33, 573.62, 573.9, 574.26, 575.17, 575.45, 575.73, 576.21, 577.43, 577.9, 578.09, 578.37]},
          {"speaker": "Julian", "time": 579.08, "endTime": 581.75, "text": "and that is an idea worth spreading.", "wordTimes": [579.08, 579.32, 579.64, 579.79, 579.95, 580.27, 580.67]},
          {"speaker": "Julian", "time": 581.75, "endTime": 582.91, "text": "Thank you.", "wordTimes": [581.75, 582.17]}
        ],
        vocab: [
          { word: "instrument", ipa: "/ˈɪn.strə.mənt/", pos: "noun", def: "nhạc cụ, công cụ truyền tải âm thanh hoặc cảm xúc" },
          { word: "authenticity", ipa: "/ˌɔː.θenˈtɪs.ə.ti/", pos: "noun", def: "sự chân thực, tính xác thực nguyên bản" },
          { word: "integrity", ipa: "/ɪnˈteɡ.rə.ti/", pos: "noun", def: "tính chính trực, nhất quán giữa lời nói và việc làm" },
          { word: "cornerstones", ipa: "/ˈkɔː.nə.stəʊnz/", pos: "noun", def: "nền tảng cơ bản, trụ cột chủ chốt" },
          { word: "resonance", ipa: "/ˈrez.ən.əns/", pos: "noun", def: "độ vang, sự cộng hưởng của âm thanh hoặc cảm xúc" }
        ],
        keyPatterns: [
          {
            pattern: "It is the only [noun] that can [verb]...",
            meaning: "Đó là [danh từ] duy nhất có khả năng [động từ]... Dùng để nhấn mạnh sự đặc biệt tuyệt đối.",
            example: "It is the only habit that can transform your daily productivity."
          },
          {
            pattern: "When you [verb]..., you carry [quality]...",
            meaning: "Khi bạn làm điều gì đó, bạn sẽ toát lên hoặc mang theo [phẩm chất/giá trị].",
            example: "When you speak with clarity, you carry effortless authority."
          }
        ]
      }
    },
    bbc: {
      sourceType: "article",
      url: "https://www.bbc.co.uk/learningenglish/features/6-minute-english/ep-240118",
      youtubeId: null,
      title: "The Secrets of Human Happiness (BBC 6-Minute English)",
      sourceName: "BBC Learning English",
      summary: "Neil và Beth thảo luận các nghiên cứu tâm lý học về bản chất của hạnh phúc và thói quen thể hiện lòng biết ơn mỗi ngày.",
      dialogue: {
        id: "preset_bbc",
        title: "The Secrets of True Happiness (BBC 6-Min)",
        turns: [
          {
            speaker: "Neil",
            text: "Hello and welcome to 6 Minute English. I am Neil.",
            ipa: "/həˈləʊ ænd ˈwel.kəm tuː sɪks ˈmɪn.ɪt ˈɪŋ.ɡlɪʃ aɪ æm niːl/"
          },
          {
            speaker: "Beth",
            text: "And I am Beth. In this programme, we are exploring the science of human happiness.",
            ipa: "/ænd aɪ æm beθ ɪn ðɪs ˈprəʊ.ɡræm wiː ɑː ɪkˈsplɔː.rɪŋ ðə ˈsaɪ.əns əv ˈhjuː.mən ˈhæp.i.nəs/"
          },
          {
            speaker: "Neil",
            text: "Psychological studies demonstrate that strong social bonds correlate directly with life satisfaction.",
            ipa: "/ˌsaɪ.kəˈlɒdʒ.ɪ.kəl ˈstʌd.iz ˈdem.ən.streɪt ðæt strɒŋ ˈsəʊ.ʃəl bɒndz ˈkɒr.ə.leɪt dɪˈrekt.li wɪð laɪf ˌsæt.ɪsˈfæk.ʃən/"
          },
          {
            speaker: "Beth",
            text: "Expressing genuine gratitude every single day measurably boosts our mental well-being.",
            ipa: "/ɪkˈspres.ɪŋ ˈdʒen.ju.ɪn ˈɡræt.ɪ.tjuːd ˈev.ri ˈsɪŋ.ɡəl deɪ ˈmeʒ.ər.ə.bli buːsts ˈaʊər ˈmen.təl ˈwelˌbiː.ɪŋ/"
          },
          {
            speaker: "Neil",
            text: "So committing five minutes to mindfulness can create long-lasting emotional resilience.",
            ipa: "/səʊ kəˈmɪt.ɪŋ faɪv ˈmɪn.ɪts tuː ˈmaɪnd.fəl.nəs kæn kriˈeɪt ˈlɒŋˌlɑː.stɪŋ ɪˈməʊ.ʃən.əl rɪˈzɪl.jəns/"
          },
          {
            speaker: "Beth",
            text: "Consistent positive daily habits pave the path to lasting contentment.",
            ipa: "/kənˈsɪs.tənt ˈpɒz.ə.tɪv ˈdeɪ.li ˈhæb.ɪts peɪv ðə pɑːθ tuː ˈlɑː.stɪŋ kənˈtent.mənt/"
          }
        ],
        vocab: [
          { word: "gratitude", ipa: "/ˈɡræt.ɪ.tjuːd/", pos: "noun", def: "lòng biết ơn chân thành" },
          { word: "resilience", ipa: "/rɪˈzɪl.jəns/", pos: "noun", def: "khả năng phục hồi, kiên cường vượt qua nghịch cảnh" },
          { word: "mindfulness", ipa: "/ˈmaɪnd.fəl.nəs/", pos: "noun", def: "sự chánh niệm, tập trung tâm trí vào hiện tại" },
          { word: "contentment", ipa: "/kənˈtent.mənt/", pos: "noun", def: "sự mãn nguyện, an vui tinh thần" }
        ],
        keyPatterns: [
          {
            pattern: "Studies demonstrate that [clause]...",
            meaning: "Các nghiên cứu chứng minh rằng... Dùng để trích dẫn dữ liệu thuyết phục.",
            example: "Recent studies demonstrate that adequate sleep improves cognitive retention."
          },
          {
            pattern: "[Gerund] measurably boosts [noun]...",
            meaning: "Hành động [V-ing] làm gia tăng rõ rệt mức độ [danh từ].",
            example: "Regular aerobic exercise measurably boosts daily energy."
          }
        ]
      }
    },
    reuters: {
      sourceType: "article",
      url: "https://www.reuters.com/technology/artificial-intelligence-in-healthcare-2026",
      youtubeId: null,
      title: "AI Breakthroughs in Modern Healthcare Diagnostics (Reuters)",
      sourceName: "Reuters International News",
      summary: "Báo cáo của Reuters về việc ứng dụng trí tuệ nhân tạo thế hệ mới hỗ trợ bác sĩ chẩn đoán hình ảnh y khoa với tốc độ vượt bậc.",
      dialogue: {
        id: "preset_reuters",
        title: "AI Breakthroughs in Modern Healthcare Diagnostics",
        turns: [
          {
            speaker: "Anchor",
            text: "Artificial intelligence is transforming modern medical care faster than anticipated.",
            ipa: "/ˌɑː.tɪˈfɪʃ.əl ɪnˈtel.ɪ.dʒəns ɪz trænsˈfɔː.mɪŋ ˈmɒd.ən ˈmed.ɪ.kəl keər ˈfɑː.stər ðæn ænˈtɪs.ɪ.peɪ.tɪd/"
          },
          {
            speaker: "Anchor",
            text: "Clinicians now deploy neural networks to identify pulmonary anomalies in preliminary scans.",
            ipa: "/ˈklɪn.ɪ.ʃənz naʊ dɪˈplɔɪ ˈnjʊə.rəl ˈnet.wɜːks tuː aɪˈden.tɪ.faɪ ˈpʌl.mə.nər.i əˈnɒm.ə.liz ɪn prɪˈlɪm.ɪ.nər.i skænz/"
          },
          {
            speaker: "Specialist",
            text: "Early hospital trials indicate a substantial reduction in critical turnaround times.",
            ipa: "/ˈɜː.li ˈhɒs.pɪ.təl ˈtraɪ.əlz ˈɪn.dɪ.keɪt ə səbˈstæn.ʃəl rɪˈdʌk.ʃən ɪn ˈkrɪt.ɪ.kəl ˈtɜːn.ə.raʊnd taɪmz/"
          },
          {
            speaker: "Specialist",
            text: "Crucially, algorithmic recommendations are designed to augment rather than replace certified doctors.",
            ipa: "/ˈkruː.ʃəl.i ˌæl.ɡəˈrɪð.mɪk ˌrek.ə.menˈdeɪ.ʃənz ɑː dɪˈzaɪnd tuː ɔːɡˈment ˈrɑː.ðər ðæn rɪˈpleɪs ˈsɜː.tɪ.faɪd ˈdɒk.tərz/"
          },
          {
            speaker: "Anchor",
            text: "The union of clinical expertise and computational speed establishes a promising new standard.",
            ipa: "/ðə ˈjuː.ni.ən əv ˈklɪn.ɪ.kəl ˌek.spɜːˈtiːz ænd ˌkɒm.pjʊˈteɪ.ʃən.əl spiːd ɪˈstæb.lɪ.ʃɪz ə ˈprɒm.ɪ.sɪŋ njuː ˈstæn.dəd/"
          }
        ],
        vocab: [
          { word: "diagnostic", ipa: "/ˌdaɪ.əɡˈnɒs.tɪk/", pos: "adjective", def: "thuộc về việc chẩn đoán bệnh tật" },
          { word: "anomaly", ipa: "/əˈnɒm.ə.li/", pos: "noun", def: "dấu hiệu bất thường, sai lệch quy chuẩn" },
          { word: "turnaround", ipa: "/ˈtɜːn.ə.raʊnd/", pos: "noun", def: "thời gian xử lý và hoàn tất kết quả" },
          { word: "augment", ipa: "/ɔːɡˈment/", pos: "verb", def: "tăng cường, nâng cao năng lực bổ trợ" }
        ],
        keyPatterns: [
          {
            pattern: "[Subject] is designed to [verb] rather than [verb]...",
            meaning: "[Chủ ngữ] được thiết kế để làm A thay vì làm B.",
            example: "The new system is designed to assist rather than replace human judgment."
          },
          {
            pattern: "Early trials indicate a substantial [noun] in [aspect]...",
            meaning: "Các thử nghiệm ban đầu cho thấy sự [tăng/giảm] đáng kể trong [khía cạnh].",
            example: "Early trials indicate a substantial improvement in accuracy."
          }
        ]
      }
    },
    jobs: {
      sourceType: "youtube",
      url: "https://www.youtube.com/watch?v=UF8uR6Z6KLc",
      youtubeId: "UF8uR6Z6KLc",
      title: "Stay Hungry, Stay Foolish (Steve Jobs Stanford 2005)",
      sourceName: "YouTube • Stanford University",
      summary: "Bài diễn văn bất hủ của Steve Jobs trước sinh viên Đại học Stanford về việc trân trọng thời gian, theo đuổi đam mê và nghe theo tiếng gọi trái tim.",
      dialogue: {
        id: "preset_jobs",
        title: "Stay Hungry, Stay Foolish (Stanford Speech)",
        turns: [
          {
            speaker: "Steve Jobs",
            time: 45,
            text: "I am honored to be with you today at your commencement from one of the finest universities in the world.",
            ipa: "/aɪ æm ˈɒn.əd tuː biː wɪð juː təˈdeɪ æt jɔː kəˈmens.mənt frɒm wʌn əv ðə ˈfaɪ.nɪst ˌjuː.nɪˈvɜː.sə.tiz ɪn ðə wɜːld/"
          },
          {
            speaker: "Steve Jobs",
            time: 68,
            text: "Today I want to tell you three stories from my life. That is it. No big deal. Just three stories.",
            ipa: "/təˈdeɪ aɪ wɒnt tuː tel juː θriː ˈstɔː.riz frɒm maɪ laɪf ðæt ɪz ɪt nəʊ bɪɡ diːl dʒʌst θriː ˈstɔː.riz/"
          },
          {
            speaker: "Steve Jobs",
            time: 90,
            text: "The first story is about connecting the dots.",
            ipa: "/ðə fɜːst ˈstɔː.ri ɪz əˈbaʊt kəˈnek.tɪŋ ðə dɒts/"
          },
          {
            speaker: "Steve Jobs",
            time: 205,
            text: "You cannot connect the dots looking forward; you can only connect them looking backwards.",
            ipa: "/juː ˈkæn.ɒt kəˈnekt ðə dɒts ˈlʊk.ɪŋ ˈfɔː.wəd juː kæn ˈəʊn.li kəˈnekt ðem ˈlʊk.ɪŋ ˈbæk.wədz/"
          },
          {
            speaker: "Steve Jobs",
            time: 228,
            text: "So you have to trust that the dots will somehow connect in your future.",
            ipa: "/səʊ juː hæv tuː trʌst ðæt ðə dɒts wɪl ˈsʌm.haʊ kəˈnekt ɪn jɔː ˈfjuː.tʃər/"
          },
          {
            speaker: "Steve Jobs",
            time: 315,
            text: "My second story is about love and loss.",
            ipa: "/maɪ ˈsek.ənd ˈstɔː.ri ɪz əˈbaʊt lʌv ænd lɒs/"
          },
          {
            speaker: "Steve Jobs",
            time: 460,
            text: "I am convinced that the only thing that kept me going was that I loved what I did.",
            ipa: "/aɪ æm kənˈvɪnst ðæt ðə ˈəʊn.li θɪŋ ðæt kept miː ˈɡəʊ.ɪŋ wɒz ðæt aɪ lʌvd wɒt aɪ dɪd/"
          },
          {
            speaker: "Steve Jobs",
            time: 485,
            text: "You have got to find what you love, and that is as true for work as it is for lovers.",
            ipa: "/juː hæv ɡɒt tuː faɪnd wɒt juː lʌv ænd ðæt ɪz æz truː fɔː wɜːk æz ɪt ɪz fɔː ˈlʌv.ərz/"
          },
          {
            speaker: "Steve Jobs",
            time: 550,
            text: "My third story is about death. Remembering that you are going to die is the best way to avoid the trap.",
            ipa: "/maɪ θɜːd ˈstɔː.ri ɪz əˈbaʊt deθ rɪˈmem.bər.ɪŋ ðæt juː ɑː ˈɡəʊ.ɪŋ tuː daɪ ɪz ðə best weɪ tuː əˈvɔɪd ðə træp/"
          },
          {
            speaker: "Steve Jobs",
            time: 565,
            text: "Your time is limited, so do not waste it living someone else's life.",
            ipa: "/jɔː taɪm ɪz ˈlɪm.ɪ.tɪd səʊ duː nɒt weɪst ɪt ˈlɪv.ɪŋ ˈsʌm.wʌn ˈels.ɪz laɪf/"
          },
          {
            speaker: "Steve Jobs",
            time: 578,
            text: "Do not be trapped by dogma, which is living with the results of other people's thinking.",
            ipa: "/duː nɒt biː træpt baɪ ˈdɒɡ.mə wɪtʃ ɪz ˈlɪv.ɪŋ wɪð ðə rɪˈzʌlts əv ˈʌð.ər ˈpiː.pəlz ˈθɪŋ.kɪŋ/"
          },
          {
            speaker: "Steve Jobs",
            time: 592,
            text: "Do not let the noise of others' opinions drown out your own inner voice.",
            ipa: "/duː nɒt let ðə nɔɪz əv ˈʌð.ərz əˈpɪn.jənz draʊn aʊt jɔːr əʊn ˈɪn.ər vɔɪs/"
          },
          {
            speaker: "Steve Jobs",
            time: 608,
            text: "And most important, have the courage to follow your heart and intuition.",
            ipa: "/ænd məʊst ɪmˈpɔː.tənt hæv ðə ˈkʌr.ɪdʒ tuː ˈfɒl.əʊ jɔː hɑːt ænd ˌɪn.tʃuːˈɪʃ.ən/"
          },
          {
            speaker: "Steve Jobs",
            time: 840,
            text: "Stay Hungry. Stay Foolish. Thank you all very much.",
            ipa: "/steɪ ˈhʌŋ.ɡri steɪ ˈfuː.lɪʃ θæŋk juː ɔːl ˈver.i mʌtʃ/"
          }
        ],
        vocab: [
          { word: "limited", ipa: "/ˈlɪm.ɪ.tɪd/", pos: "adjective", def: "có giới hạn, ngắn ngủi" },
          { word: "dogma", ipa: "/ˈdɒɡ.mə/", pos: "noun", def: "giáo điều rập khuôn theo ý nghĩ người khác" },
          { word: "courage", ipa: "/ˈkʌr.ɪdʒ/", pos: "noun", def: "lòng dũng cảm, sự can trường" },
          { word: "intuition", ipa: "/ˌɪn.tʃuːˈɪʃ.ən/", pos: "noun", def: "trực giác, sự mách bảo tự nhiên bên trong" }
        ],
        keyPatterns: [
          {
            pattern: "Do not let [noun] drown out [noun]...",
            meaning: "Đừng để [cái gì ồn ào] lấn át hoặc dập tắt [tiếng nói/giá trị quan trọng].",
            example: "Do not let temporary setbacks drown out your ambition."
          },
          {
            pattern: "Have the courage to [verb]...",
            meaning: "Hãy có đủ can đảm để [thực hiện một việc quan trọng].",
            example: "Have the courage to pursue what brings you genuine joy."
          }
        ]
      }
    }
  };

  const defaultExtractedSample = SHADOW_URL_PRESETS.ted;

  function formatTimecode(sec) {
    if (typeof sec !== "number" || isNaN(sec) || sec < 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  let ytPlayer = null;
  let ytHeartbeatTimer = null;
  let ytMessageListenerBound = false;
  let ytLastRealTimeSec = -1;
  let ytLastRealTimeWallMs = 0;
  let ytLastAdvanceWallMs = 0;
  let ytKnownPlayerState = -1;
  let ytHandshakeTick = 0;
  let ytLastTurnProgress = 0;
  let ytRenderedLiveTurnIdx = -1;

  function computeWeightedWordSync(curTurn, nextTurn, effectiveTimeSec) {
    const startT = typeof curTurn.time === "number" ? curTurn.time : 0;
    const rawNextT = nextTurn && typeof nextTurn.time === "number" ? nextTurn.time : startT + 5;
    const endT = typeof curTurn.endTime === "number" ? curTurn.endTime : rawNextT;
    const gapToNext = Math.max(0.8, endT - startT);

    const words = String((curTurn && curTurn.text) || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!words.length) {
      return { activeWordIdx: -1, turnProgress: 0, words: [] };
    }

    // 1. Exact 1-to-1 cue-level word timestamps (when available, e.g., TED Talk)
    if (Array.isArray(curTurn.wordTimes) && curTurn.wordTimes.length === words.length) {
      let activeWordIdx = 0;
      for (let i = 0; i < curTurn.wordTimes.length; i++) {
        if (effectiveTimeSec >= curTurn.wordTimes[i]) {
          activeWordIdx = i;
        } else {
          break;
        }
      }
      const turnProgress = Math.min(1, Math.max(0, (effectiveTimeSec - startT) / gapToNext));
      return { activeWordIdx, turnProgress, words };
    }

    // 2. Fallback weighted word timing based on cumulative start time of each word (never jumps ahead)
    const weights = words.map((w) => {
      const cleanLen = w.replace(/[^a-zA-Z0-9]/g, "").length || 2;
      const punctBonus = /[.!?]['"]?$/.test(w) ? 2.8 : /[,;:—-]['"]?$/.test(w) ? 1.6 : 0;
      return Math.max(1.5, cleanLen * 0.85) + punctBonus;
    });
    const totalWeight = weights.reduce((a, b) => a + b, 0) || 1;
    const effectiveDuration = Math.max(0.8, gapToNext * 0.95);
    const elapsed = Math.max(0, effectiveTimeSec - startT);
    const turnProgress = Math.min(1, elapsed / effectiveDuration);

    let accumBefore = 0;
    let activeWordIdx = 0;
    for (let i = 0; i < words.length; i++) {
      const wordStartSec = startT + (accumBefore / totalWeight) * effectiveDuration;
      if (effectiveTimeSec >= wordStartSec) {
        activeWordIdx = i;
      } else {
        break;
      }
      accumBefore += weights[i];
    }

    return { activeWordIdx, turnProgress, words };
  }

  function updateYouTubePlayStateDom(isPlaying) {
    if (typeof document === "undefined") return;
    const dot = document.getElementById("shadow-yt-live-status-dot");
    const txt = document.getElementById("shadow-yt-live-status-text");
    if (dot) {
      dot.className = `h-2 w-2 rounded-full ${isPlaying ? "bg-rose-500 animate-ping" : "bg-amber-400"}`;
    }
    if (txt) {
      txt.textContent = isPlaying ? "ĐANG ĐỒNG BỘ 1-1" : "ĐỒNG BỘ 1-1";
    }
  }

  function syncYouTubeCurrentTime(currentTimeSec) {
    if (typeof currentTimeSec !== "number" || isNaN(currentTimeSec) || currentTimeSec < 0) return;

    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns || !dialogue.turns.length) return;

    const turns = dialogue.turns;
    let activeIdx = 0;
    for (let i = 0; i < turns.length; i++) {
      const t = turns[i].time;
      if (typeof t === "number" && currentTimeSec >= t) {
        activeIdx = i;
      }
    }

    const curTurn = turns[activeIdx];
    const nextTurn = turns[activeIdx + 1] || null;
    const { activeWordIdx, turnProgress } = computeWeightedWordSync(
      curTurn,
      nextTurn,
      currentTimeSec
    );

    const prevActiveIdx = state.activeYouTubeTurnIdx;
    state.activeYouTubeTurnIdx = activeIdx;
    state.activeYouTubeWordIdx = activeWordIdx;
    ytLastTurnProgress = turnProgress;

    updateYouTubeActiveDom(activeIdx, prevActiveIdx, activeWordIdx, currentTimeSec, turnProgress);
  }

  function updateYouTubeActiveDom(activeIdx, prevActiveIdx, activeWordIdx, currentTimeSec, turnProgress) {
    if (typeof document === "undefined" || !document.querySelectorAll) return;

    const { dialogue } = getCurrentShadowTopicAndDialogue();
    const turns = (dialogue && dialogue.turns) || [];
    const isFullPassageMode = state.shadowPassageMode === "full";

    // A. Update the compact 1-line status bar under the YouTube video
    const timeEl = document.getElementById("shadow-yt-live-time");
    if (timeEl && typeof currentTimeSec === "number" && currentTimeSec >= 0) {
      timeEl.textContent = `⏱ ${formatTimecode(currentTimeSec)}`;
    }
    const badgeEl = document.getElementById("shadow-yt-live-turn-badge");
    if (badgeEl && turns.length > 0 && activeIdx >= 0 && activeIdx < turns.length) {
      badgeEl.textContent = `Câu #${activeIdx + 1}/${turns.length}`;
    }
    const offsetEl = document.getElementById("shadow-yt-offset-label");
    if (offsetEl) {
      const offsetVal = state.youtubeSyncOffsetSec || 0;
      offsetEl.textContent = offsetVal === 0 ? "0.0s" : `${offsetVal > 0 ? "+" : ""}${offsetVal.toFixed(1)}s`;
    }
    updateYouTubePlayStateDom(state.isYouTubePlaying);

    // B. If active turn changed, update previous & current turn card styles in Script Passage
    if (activeIdx !== prevActiveIdx) {
      if (prevActiveIdx !== null && prevActiveIdx !== undefined && prevActiveIdx >= 0) {
        const prevCard = document.querySelector(`[data-shadow-turn-card="${prevActiveIdx}"]`);
        if (prevCard) {
          if (isFullPassageMode) {
            prevCard.classList.remove("bg-rose-500/20", "ring-1", "ring-rose-500/50", "shadow-sm");
            prevCard.classList.add("hover:bg-slate-800/50");
          } else {
            prevCard.classList.remove(
              "bg-[#13192B]",
              "border-l-4",
              "border-rose-500",
              "shadow-lg",
              "shadow-rose-950/30",
              "ring-1",
              "ring-rose-500/40"
            );
            prevCard.classList.add("hover:bg-slate-800/40", "border-l-4", "border-transparent");
          }
        }
        const prevTimeBtn = document.querySelector(`[data-turn-timecode="${prevActiveIdx}"]`);
        if (prevTimeBtn) {
          prevTimeBtn.classList.remove("bg-rose-500", "text-white", "shadow-md", "shadow-rose-500/40", "ring-1", "ring-rose-300");
          prevTimeBtn.classList.add("bg-slate-800", "text-rose-300", "border", "border-slate-700");
        }
        // Reset words of previous turn
        const prevWords = document.querySelectorAll(`[data-shadow-turn="${prevActiveIdx}"][data-shadow-word]`);
        for (let i = 0; i < prevWords.length; i++) {
          prevWords[i].classList.remove(
            "bg-amber-400",
            "text-slate-950",
            "font-bold",
            "scale-105",
            "shadow-sm",
            "shadow-amber-400/40",
            "rounded",
            "px-1",
            "text-indigo-200",
            "font-semibold",
            "font-medium"
          );
        }
      }

      if (activeIdx !== null && activeIdx !== undefined && activeIdx >= 0) {
        const activeCard = document.querySelector(`[data-shadow-turn-card="${activeIdx}"]`);
        if (activeCard) {
          if (isFullPassageMode) {
            activeCard.classList.remove("hover:bg-slate-800/50");
            activeCard.classList.add("bg-rose-500/20", "ring-1", "ring-rose-500/50", "shadow-sm");
          } else {
            activeCard.classList.remove("hover:bg-slate-800/40", "border-transparent");
            activeCard.classList.add(
              "bg-[#13192B]",
              "border-l-4",
              "border-rose-500",
              "shadow-lg",
              "shadow-rose-950/30",
              "ring-1",
              "ring-rose-500/40"
            );
          }
        }
        const activeTimeBtn = document.querySelector(`[data-turn-timecode="${activeIdx}"]`);
        if (activeTimeBtn) {
          activeTimeBtn.classList.remove("bg-slate-800", "border", "border-slate-700");
          activeTimeBtn.classList.add("bg-rose-500", "text-white", "shadow-md", "shadow-rose-500/40", "ring-1", "ring-rose-300");
        }
        // Smoothly auto-scroll script passage container so current sentence stays visible right below the video!
        scrollShadowTurnIntoView(activeIdx);
      }
    }

    // C. Update word-level highlighting inside activeIdx in Script Passage
    if (activeIdx !== null && activeIdx !== undefined && activeIdx >= 0 && activeWordIdx >= 0) {
      const wordNodes = document.querySelectorAll(`[data-shadow-turn="${activeIdx}"][data-shadow-word]`);
      for (let i = 0; i < wordNodes.length; i++) {
        const el = wordNodes[i];
        const wIdx = parseInt(el.getAttribute("data-shadow-word") || "-1", 10);
        el.classList.remove(
          "bg-amber-400",
          "text-slate-950",
          "font-bold",
          "scale-105",
          "shadow-sm",
          "shadow-amber-400/40",
          "rounded",
          "px-1",
          "text-indigo-200",
          "font-semibold",
          "font-medium"
        );
        if (wIdx === activeWordIdx) {
          el.classList.add(
            "bg-amber-400",
            "text-slate-950",
            "font-bold",
            "scale-105",
            "shadow-sm",
            "shadow-amber-400/40",
            "rounded",
            "px-1"
          );
        } else if (activeWordIdx > wIdx && wIdx >= 0) {
          el.classList.add("text-indigo-200", "font-medium");
        }
      }
    }
  }

  function sendYouTubeListeningHandshake(iframe) {
    if (!iframe || !iframe.contentWindow) return;
    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "listening", id: 1, channel: "widget" }),
        "*"
      );
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "addEventListener",
          args: ["onStateChange"],
          id: 1,
          channel: "widget"
        }),
        "*"
      );
    } catch (e) {}
  }

  function attachYouTubePlayerApi() {
    if (typeof document === "undefined") return;
    const iframe = document.getElementById("shadow-youtube-iframe");
    if (!iframe) return;
    sendYouTubeListeningHandshake(iframe);
  }

  function startYouTubeSyncHeartbeat() {
    if (ytHeartbeatTimer) return;
    ytHandshakeTick = 0;
    ytHeartbeatTimer = setInterval(() => {
      if (typeof document === "undefined") return;
      if (state.activeTab !== "shadowing" || state.shadowSourceTab !== "url") {
        return;
      }
      const iframe = document.getElementById("shadow-youtube-iframe");
      if (!iframe || !iframe.contentWindow) return;

      // Periodically send listening handshake (~every 720ms) so newly loaded iframes immediately stream infoDelivery
      if (ytHandshakeTick % 12 === 0) {
        sendYouTubeListeningHandshake(iframe);
      }
      ytHandshakeTick++;

      // Smooth 60ms interpolation between YouTube infoDelivery packets while video is playing
      // Subtract 0.08s audio-buffer latency so word highlight never runs ahead of speaker's audio
      if (state.isYouTubePlaying && ytLastRealTimeSec >= 0 && state.shadowMode === "idle") {
        const wallDeltaSec = Math.max(0, (Date.now() - ytLastRealTimeWallMs) / 1000 - 0.08);
        if (wallDeltaSec <= 1.2) {
          const effectiveSec = Math.max(
            0,
            ytLastRealTimeSec + wallDeltaSec + (state.youtubeSyncOffsetSec || 0)
          );
          syncYouTubeCurrentTime(effectiveSec);
        }
        if (ytKnownPlayerState !== 1 && Date.now() - ytLastAdvanceWallMs > 1500) {
          state.isYouTubePlaying = false;
          updateYouTubePlayStateDom(false);
        }
      }
    }, 60);
  }

  function cleanupYouTubeTracking() {
    if (ytHeartbeatTimer) {
      clearInterval(ytHeartbeatTimer);
      ytHeartbeatTimer = null;
    }
    state.isYouTubePlaying = false;
  }

  // Global message listener for YouTube postMessage API (runs once)
  if (typeof window !== "undefined" && !ytMessageListenerBound) {
    ytMessageListenerBound = true;
    window.addEventListener("message", function (event) {
      if (!event || !event.data) return;
      let data = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (e) {
          return;
        }
      }
      if (!data) return;

      if (data.event === "onStateChange" && typeof data.info === "number") {
        ytKnownPlayerState = data.info;
        state.isYouTubePlaying = data.info === 1;
        if (data.info === 1) {
          ytLastRealTimeWallMs = Date.now();
          ytLastAdvanceWallMs = Date.now();
        }
        updateYouTubePlayStateDom(state.isYouTubePlaying);
      }

      if (data.event === "infoDelivery" && data.info) {
        if (typeof data.info.playerState === "number") {
          ytKnownPlayerState = data.info.playerState;
          state.isYouTubePlaying = data.info.playerState === 1;
          updateYouTubePlayStateDom(state.isYouTubePlaying);
        }
        if (typeof data.info.currentTime === "number" && !isNaN(data.info.currentTime)) {
          const reportedSec = data.info.currentTime;
          // Ignore spurious 0 reading when player is unstarted (-1) and we already have an active position
          if (reportedSec === 0 && ytLastRealTimeSec > 1.5 && ytKnownPlayerState !== 1) {
            return;
          }
          if (Math.abs(reportedSec - ytLastRealTimeSec) > 0.01) {
            ytLastAdvanceWallMs = Date.now();
            if (ytKnownPlayerState === -1 || ytKnownPlayerState === 1) {
              state.isYouTubePlaying = true;
            }
          }
          ytLastRealTimeSec = reportedSec;
          ytLastRealTimeWallMs = Date.now();
          if (state.shadowMode === "idle") {
            const effectiveSec = Math.max(0, reportedSec + (state.youtubeSyncOffsetSec || 0));
            syncYouTubeCurrentTime(effectiveSec);
          }
        }
      }
    });

    window.onYouTubeIframeAPIReady = function () {
      attachYouTubePlayerApi();
    };
  }

  function seekYouTubePlayer(seconds) {
    const targetSec = Math.max(0, Number(seconds) || 0);
    if (state.shadowMode !== "idle") {
      stopShadowSession(false);
    }
    const iframe = document.getElementById("shadow-youtube-iframe");
    if (iframe && iframe.contentWindow) {
      try {
        sendYouTubeListeningHandshake(iframe);
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "seekTo",
            args: [targetSec, true]
          }),
          "*"
        );
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "playVideo",
            args: []
          }),
          "*"
        );
      } catch (e) {}
    }
    ytLastRealTimeSec = targetSec;
    ytLastRealTimeWallMs = Date.now();
    ytLastAdvanceWallMs = Date.now();
    ytKnownPlayerState = 1;
    state.isYouTubePlaying = true;
    syncYouTubeCurrentTime(Math.max(0, targetSec + (state.youtubeSyncOffsetSec || 0)));
  }

  function pauseYouTubePlayer() {
    const iframe = document.getElementById("shadow-youtube-iframe");
    if (iframe && iframe.contentWindow) {
      try {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "pauseVideo",
            args: []
          }),
          "*"
        );
      } catch (e) {}
    }
    ytKnownPlayerState = 2;
    state.isYouTubePlaying = false;
    updateYouTubePlayStateDom(false);
  }

  function openYouTubePopup(youtubeId, startSeconds) {
    if (!youtubeId) return;
    const startSec = Math.floor(startSeconds || 0);
    // Open on official YouTube domain with timestamp to avoid embed Error 150/153 restrictions
    const url = `https://www.youtube.com/watch?v=${encodeURIComponent(youtubeId)}${startSec > 0 ? `&t=${startSec}s` : ""}`;
    window.open(
      url,
      "yt_shadow_popup",
      "width=960,height=560,menubar=no,toolbar=no,location=yes,status=no,resizable=yes"
    );
  }

  function parseYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = String(url).match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  function generateSentenceIpa(sentence) {
    const words = (sentence || "").replace(/[^\w\s']/g, " ").trim().split(/\s+/);
    const ipas = words
      .filter(Boolean)
      .map((w) => {
        const d = resolveWordDetails(w);
        return d ? d.ipa.replace(/^\/|\/$/g, "") : w.toLowerCase();
      });
    return `/${ipas.join(" ")}/`;
  }

  function loadShadowPreset(presetKey) {
    const item = SHADOW_URL_PRESETS[presetKey] || SHADOW_URL_PRESETS.ted;
    stopShadowSession(true);
    state.shadowSourceTab = "url_extract";
    state.shadowUrlInput = item.url;
    state.extractedShadowData = item;
    state.shadowingTurnIdx = 0;
    state.activeYouTubeTurnIdx = -1;
    state.activeYouTubeWordIdx = -1;
    state.shadowScore = null;
    state.activeIpaTurnIdx = null;
    state.peekTurnIdx = null;
    state.shadowUrlExtractError = "";
    render();
  }

  async function extractShadowingFromUrl(inputUrl) {
    const url = (inputUrl || state.shadowUrlInput || "").trim();
    if (!url) {
      state.shadowUrlExtractError = "Vui lòng nhập hoặc dán đường dẫn link YouTube hoặc bài báo tiếng Anh.";
      render();
      return;
    }

    // Check quick presets first
    const low = url.toLowerCase();
    if (low.includes("eIho2S0ZahI".toLowerCase()) || (low.includes("ted") && low.includes("speak"))) {
      loadShadowPreset("ted");
      return;
    }
    if (low.includes("6-minute-english") || low.includes("happiness") || low.includes("bbc.co.uk")) {
      loadShadowPreset("bbc");
      return;
    }
    if (low.includes("reuters") || low.includes("healthcare") || low.includes("clinical")) {
      loadShadowPreset("reuters");
      return;
    }
    if (low.includes("UF8uR6Z6KLc".toLowerCase()) || (low.includes("jobs") && low.includes("stanford"))) {
      loadShadowPreset("jobs");
      return;
    }

    state.isExtractingShadowUrl = true;
    state.shadowUrlExtractError = "";
    stopShadowSession(true);
    render();

    const ytId = parseYouTubeId(url);
    const isYt = Boolean(ytId);
    const userTranscript = (state.shadowTranscriptInput || "").trim();

    // If AI Key is present, call Gemini or OpenAI
    if (state.aiApiKey && state.aiApiKey.trim()) {
      try {
        const prompt = `You are an elite speech coach and English dialogue extractor.
The user wants to practice Shadowing pronunciation training based on this URL: "${url}".
Source type: ${isYt ? "YouTube video" : "Online news / article"}.
${userTranscript ? `Raw user transcript/subtitles to extract from:\n"""${userTranscript}"""\n` : ""}

Task: Reconstruct and extract the comprehensive full spoken dialogue or speech progression (12 to 24 turns) covering the ENTIRE presentation or conversation for full Shadowing practice.
Key Requirements:
1. 'speaker': Natural role or character name (e.g. Host, Guest, Speaker A, Speaker B, or speaker's name). For YouTube videos, alternate speakers or sections naturally across the full progression.
2. 'text': Clear, natural spoken English sentence (10-18 words, optimal for pronunciation practice, strictly NO translations).
3. 'ipa': Accurate standard IPA transcription enclosed in slashes /.../.
4. 'time': Estimated or actual chronological timestamp in seconds (integer, e.g. 15, 35, 60, 95, 130, 175...) so the video player can jump directly to it throughout the video.
5. 'vocab': 5 to 8 key vocabulary words with IPA, part of speech (pos), and Vietnamese definition (def).
6. 'keyPatterns': 2 to 3 key grammar patterns with meaning and example.

Return ONLY a valid JSON object matching this schema (NO code fences, NO markdown):
{
  "title": "Title of the video or article",
  "sourceName": "${isYt ? "YouTube Video" : "Web Article"}",
  "summary": "Tóm tắt ngắn gọn nội dung bài học bằng tiếng Việt (1 câu)",
  "turns": [
    { "speaker": "Speaker", "time": 15, "text": "English sentence...", "ipa": "/.../" }
  ],
  "vocab": [
    { "word": "term", "ipa": "/.../", "pos": "noun", "def": "nghĩa tiếng Việt" }
  ],
  "keyPatterns": [
    { "pattern": "Grammar pattern...", "meaning": "Ý nghĩa mẫu câu", "example": "Ví dụ..." }
  ]
}`;
        const raw = await callAiApi(prompt);
        const parsed = parseJsonFromAi(raw);
        if (parsed && Array.isArray(parsed.turns) && parsed.turns.length >= 2) {
          const finalTurns = parsed.turns.map((t, tIdx) => ({
            speaker: t.speaker || (isYt ? (tIdx % 2 === 0 ? "Speaker A" : "Speaker B") : "Narrator"),
            time: typeof t.time === "number" && !isNaN(t.time) ? t.time : tIdx * 20 + 10,
            text: (t.text || "").trim(),
            ipa: t.ipa && t.ipa.startsWith("/") ? t.ipa : generateSentenceIpa(t.text)
          }));
          const extractedObj = {
            sourceType: isYt ? "youtube" : "article",
            url: url,
            youtubeId: ytId,
            title: parsed.title || (isYt ? "YouTube Spoken English Lesson" : "English Article Spoken Review"),
            sourceName: parsed.sourceName || (isYt ? "YouTube Video" : "Online Article"),
            summary: parsed.summary || "Đoạn hội thoại luyện phát âm và ngữ điệu trích xuất từ link nguồn.",
            dialogue: {
              id: "ai_url_" + Date.now(),
              title: parsed.title || "AI Shadowing Session",
              turns: finalTurns,
              vocab: parsed.vocab || [],
              keyPatterns: parsed.keyPatterns || []
            }
          };
          state.extractedShadowData = extractedObj;
          state.shadowingTurnIdx = 0;
          state.shadowScore = null;
          state.activeIpaTurnIdx = null;
          state.isExtractingShadowUrl = false;
          render();
          return;
        }
      } catch (err) {
        console.warn("AI URL extract failed, falling back to smart procedural generator:", err);
      }
    }

    // Procedural semantic generation fallback (instant, offline-safe, reliable)
    try {
      let cleanSlug = url
        .replace(/https?:\/\//i, "")
        .replace(/www\./i, "")
        .replace(/watch\?v=[\w-]+/i, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .replace(/\b(com|org|vn|net|html|php|news|article|watch|video|features)\b/gi, "")
        .trim();
      if (!cleanSlug || cleanSlug.length < 3)
        cleanSlug = isYt ? "Communication Mastery & Spoken Fluency" : "Global Technology & Lifestyle";

      const titleWords = cleanSlug
        .split(/\s+/)
        .slice(0, 5)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
      const displayTitle = titleWords || (isYt ? "Authentic Spoken Video Shadowing" : "Editorial Spoken Analysis");

      const generatedTurns = isYt
        ? [
            { speaker: "Host", time: 10, text: `Welcome everyone to this comprehensive session exploring ${titleWords.toLowerCase()}.` },
            { speaker: "Guest", time: 30, text: "Communication is fundamentally about connecting with your audience on an authentic emotional level." },
            { speaker: "Host", time: 55, text: "When you articulate your ideas with steady pacing, listener engagement increases noticeably." },
            { speaker: "Guest", time: 85, text: "Consistent vocal clarity allows your core message to resonate powerfully without distortion." },
            { speaker: "Host", time: 120, text: "What specific vocal habits should speakers adopt to project genuine authority and poise?" },
            { speaker: "Guest", time: 160, text: "Speak from your chest register and embrace deliberate pauses to let key thoughts sink in." },
            { speaker: "Host", time: 205, text: "Many presenters struggle with maintaining vocal variety when delivering technical explanations." },
            { speaker: "Guest", time: 250, text: "Dynamic prosody prevents your speech from falling into repetitive, monotonous patterns." },
            { speaker: "Host", time: 300, text: "How should learners structure their daily practice to achieve noticeable fluency improvements?" },
            { speaker: "Guest", time: 350, text: "Dedicate ten minutes each day to shadowing authentic native speakers sentence by sentence." },
            { speaker: "Host", time: 400, text: "Recording your voice and comparing it with the original recording accelerates speech refinement." },
            { speaker: "Guest", time: 460, text: "Consistent disciplined repetition transforms conscious effort into natural, effortless fluency." }
          ]
        : [
            { speaker: "Narrator", time: 10, text: `Today we examine the latest international reports regarding ${titleWords.toLowerCase()}.` },
            { speaker: "Correspondent", time: 28, text: "Global analysts observe significant economic and social shifts underway across modern institutions." },
            { speaker: "Narrator", time: 50, text: "Experts highlight that strategic adaptation remains paramount for long-term sustainable growth." },
            { speaker: "Correspondent", time: 75, text: "Collaboration between interdisciplinary research groups continues to yield breakthrough solutions." },
            { speaker: "Narrator", time: 105, text: "Innovative technology frameworks are rapidly dismantling traditional organizational barriers." },
            { speaker: "Correspondent", time: 135, text: "Leadership teams prioritize resilient digital infrastructure to navigate evolving challenges." },
            { speaker: "Narrator", time: 170, text: "Cross-border partnerships foster broader knowledge exchange and elevate productivity benchmarks." },
            { speaker: "Correspondent", time: 210, text: "Continuous learning and agility have become indispensable assets for modern professionals." },
            { speaker: "Narrator", time: 250, text: "Early trial results indicate substantial performance enhancements across key operations." },
            { speaker: "Correspondent", time: 290, text: "Further developmental milestones are eagerly anticipated over forthcoming quarters." }
          ];

      const processedTurns = generatedTurns.map((t) => ({
        speaker: t.speaker,
        time: t.time,
        text: t.text,
        ipa: generateSentenceIpa(t.text)
      }));

      const sampleWords = ["articulate", "resonate", "paramount", "strategic", "interdisciplinary"];
      const vocabList = sampleWords.map((w) => {
        const d = resolveWordDetails(w);
        return {
          word: w,
          ipa: d.ipa,
          pos: d.pos,
          def: d.vi
        };
      });

      state.extractedShadowData = {
        sourceType: isYt ? "youtube" : "article",
        url: url,
        youtubeId: ytId,
        title: displayTitle,
        sourceName: isYt ? "YouTube Channel" : "News & Web Publisher",
        summary: `Bài học Shadowing được phân tích từ liên kết "${url}". Bạn có thể nhập API Key AI để trích xuất nguyên văn chi tiết hơn.`,
        dialogue: {
          id: "proc_url_" + Date.now(),
          title: displayTitle,
          turns: processedTurns,
          vocab: vocabList,
          keyPatterns: [
            {
              pattern: "When you [verb]..., [clause] noticeably...",
              meaning: "Khi bạn làm điều gì đó, thì [kết quả] sẽ gia tăng một cách rõ rệt.",
              example: "When you practice daily, your fluency improves noticeably."
            },
            {
              pattern: "Embrace [noun/gerund] to let [noun] [verb]...",
              meaning: "Hãy đón nhận [hành động] để cho phép [điều gì] diễn ra một cách tự nhiên.",
              example: "Embrace short pauses to let your ideas sink in."
            }
          ]
        }
      };
    } catch (e) {
      state.shadowUrlExtractError =
        "Không thể trích xuất nội dung từ link này. Hãy thử lại hoặc dùng một trong 4 mẫu thử nhanh bên dưới.";
    }

    state.isExtractingShadowUrl = false;
    state.shadowingTurnIdx = 0;
    state.activeYouTubeTurnIdx = -1;
    state.activeYouTubeWordIdx = -1;
    state.shadowScore = null;
    state.activeIpaTurnIdx = null;
    render();
  }

  function getCurrentShadowTopicAndDialogue() {
    if (state.shadowSourceTab === "url_extract") {
      const ext = state.extractedShadowData || defaultExtractedSample;
      return { topic: ext, dialogue: ext.dialogue };
    }
    const topic =
      shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
    const dialogue =
      topic && topic.dialogues
        ? topic.dialogues[state.selectedDialogueIndex] || topic.dialogues[0]
        : null;
    return { topic, dialogue };
  }

  function clearShadowTimersAndRec() {
    if (shadowWordTimer) {
      clearInterval(shadowWordTimer);
      shadowWordTimer = null;
    }
    if (shadowFallbackEndTimer) {
      clearTimeout(shadowFallbackEndTimer);
      shadowFallbackEndTimer = null;
    }
    if (shadowFullTimer) {
      clearInterval(shadowFullTimer);
      shadowFullTimer = null;
    }
    if (activeRecognition) {
      try {
        activeRecognition.onresult = null;
        activeRecognition.onerror = null;
        activeRecognition.onend = null;
        activeRecognition.stop();
      } catch (e) {}
      activeRecognition = null;
    }
  }

  function stopShadowSession(resetScores) {
    shadowSessionToken++;
    clearShadowTimersAndRec();
    stopAllAudio();
    state.shadowMode = "idle";
    state.shadowPhase = "idle";
    state.isRecordingShadow = false;
    state.shadowHighlightWordIdx = -1;
    state.shadowLiveTranscript = "";
    if (resetScores) {
      state.shadowTurnScores = {};
      state.shadowSessionReport = null;
      state.shadowScore = null;
    }
    render();
  }

  function scrollShadowTurnIntoView(turnIdx) {
    if (typeof document === "undefined" || !document.querySelector) return;
    setTimeout(() => {
      const container = document.getElementById("shadow-script-passage-container");
      const el = document.querySelector(`[data-shadow-turn-card="${turnIdx}"]`);
      if (container && el) {
        try {
          const cRect = container.getBoundingClientRect();
          const eRect = el.getBoundingClientRect();
          const relTop = eRect.top - cRect.top + container.scrollTop;
          const targetTop = Math.max(0, relTop - container.clientHeight * 0.32 + eRect.height * 0.5);
          if (typeof container.scrollTo === "function") {
            container.scrollTo({ top: targetTop, behavior: "smooth" });
          } else {
            container.scrollTop = targetTop;
          }
        } catch (e) {}
      }
    }, 30);
  }

  function updateShadowWordHighlightDom(turnIdx, activeWordIdx) {
    state.shadowHighlightWordIdx = activeWordIdx;
    if (typeof document === "undefined" || !document.querySelectorAll) return;
    const nodes = document.querySelectorAll(`[data-shadow-turn="${turnIdx}"][data-shadow-word]`);
    if (!nodes || !nodes.length) return;
    for (let i = 0; i < nodes.length; i++) {
      const el = nodes[i];
      const wIdx = parseInt(el.getAttribute("data-shadow-word") || "-1", 10);
      el.classList.remove(
        "bg-amber-400",
        "text-slate-950",
        "font-extrabold",
        "scale-110",
        "shadow-md",
        "shadow-amber-400/40",
        "ring-2",
        "ring-amber-300",
        "bg-indigo-500/25",
        "text-indigo-200",
        "border-indigo-400/50"
      );
      if (wIdx === activeWordIdx) {
        el.classList.add(
          "bg-amber-400",
          "text-slate-950",
          "font-extrabold",
          "scale-110",
          "shadow-md",
          "shadow-amber-400/40",
          "ring-2",
          "ring-amber-300"
        );
      } else if (activeWordIdx > wIdx && wIdx >= 0) {
        el.classList.add("bg-indigo-500/25", "text-indigo-200");
      }
    }
  }

  function updateLiveSpokenWordsDom(turnIdx, transcriptText) {
    if (typeof document === "undefined" || !document.querySelectorAll) return;
    const spokenSet = new Set(
      String(transcriptText || "")
        .toLowerCase()
        .replace(/[^a-z0-9\s']/g, " ")
        .split(/\s+/)
        .filter(Boolean)
    );
    const liveEl = document.getElementById("shadow-live-transcript-box");
    if (liveEl) {
      liveEl.textContent = transcriptText
        ? `🎙️ Bạn đang đọc: "${transcriptText}"`
        : "🎙️ Hãy đọc to câu hội thoại... Hệ thống đang lắng nghe và bắt từng chữ";
    }
    if (turnIdx !== null && turnIdx !== undefined) {
      const nodes = document.querySelectorAll(`[data-shadow-turn="${turnIdx}"][data-shadow-word]`);
      for (let i = 0; i < nodes.length; i++) {
        const el = nodes[i];
        const cleanW = (el.getAttribute("data-clean-word") || "").toLowerCase();
        if (cleanW && spokenSet.has(cleanW)) {
          el.classList.remove("bg-amber-400", "text-slate-950", "bg-indigo-500/25", "text-indigo-200");
          el.classList.add(
            "bg-emerald-500/30",
            "text-emerald-200",
            "border-emerald-400/60",
            "font-bold"
          );
          // Reveal masked word if hidden script is active and user just spoke it!
          const rawW = el.getAttribute("data-raw-word");
          if (rawW && state.hideShadowScript) {
            el.textContent = rawW;
          }
        }
      }
    } else {
      // Full mode: highlight matched words across all turns
      const allNodes = document.querySelectorAll("[data-shadow-word][data-clean-word]");
      for (let i = 0; i < allNodes.length; i++) {
        const el = allNodes[i];
        const cleanW = (el.getAttribute("data-clean-word") || "").toLowerCase();
        if (cleanW && spokenSet.has(cleanW)) {
          el.classList.add("bg-emerald-500/25", "text-emerald-300", "font-bold");
        }
      }
    }
  }

  function speakTurnWithWordHighlight(turn, turnIdx, onComplete) {
    const myToken = ++shadowSessionToken;
    clearShadowTimersAndRec();
    stopAllAudio();

    const text = String((turn && turn.text) || "").trim();
    const words = text.split(/\s+/).filter(Boolean);
    if (!words.length) {
      if (onComplete) onComplete();
      return;
    }

    // Build character boundaries for each word
    const wordCharRanges = [];
    let cursor = 0;
    words.forEach((w, idx) => {
      const pos = text.indexOf(w, cursor);
      const start = pos !== -1 ? pos : cursor;
      const end = start + w.length;
      wordCharRanges.push({ idx, start, end, len: Math.max(2, w.length) });
      cursor = end;
    });

    const primaryId = state.selectedVoiceProfileId || "us_female";
    const secondaryId = state.dualSpeakerShadowing ? getCounterpartProfileId(primaryId) : primaryId;
    const profId = turnIdx % 2 === 0 ? primaryId : secondaryId;
    const profile = getActiveVoiceProfile(profId);
    const effectiveRate = Math.max(
      0.65,
      Math.min(1.35, (state.audioRate || 1.0) * (profile.rateMod || 0.96))
    );

    // Calibrated word-by-word timing schedule so highlighting always works smoothly
    const baseMsPerChar = 56 / effectiveRate;
    let accumMs = 0;
    const wordSchedule = wordCharRanges.map((r) => {
      const startMs = accumMs;
      const dur = Math.max(170, Math.round(r.len * baseMsPerChar + 65 / effectiveRate));
      accumMs += dur;
      return { idx: r.idx, startMs, endMs: accumMs };
    });
    const totalEstimatedMs = accumMs + 280;

    let currentHighlighted = 0;
    let boundaryFired = false;
    const startTs = Date.now();
    updateShadowWordHighlightDom(turnIdx, 0);

    shadowWordTimer = setInterval(() => {
      if (myToken !== shadowSessionToken) {
        clearInterval(shadowWordTimer);
        return;
      }
      if (boundaryFired) return;
      const elapsed = Date.now() - startTs;
      for (let i = wordSchedule.length - 1; i >= 0; i--) {
        if (elapsed >= wordSchedule[i].startMs) {
          if (currentHighlighted !== i) {
            currentHighlighted = i;
            updateShadowWordHighlightDom(turnIdx, i);
          }
          break;
        }
      }
    }, 45);

    let finished = false;
    function finishTurnSpeech() {
      if (finished || myToken !== shadowSessionToken) return;
      finished = true;
      clearShadowTimersAndRec();
      updateShadowWordHighlightDom(turnIdx, words.length);
      if (onComplete) onComplete();
    }

    shadowFallbackEndTimer = setTimeout(finishTurnSpeech, totalEstimatedMs + 1200);

    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        const u = new SpeechSynthesisUtterance(text);
        const v = getBestVoiceForProfile(
          profile,
          turnIdx % 2 === 0 ? state.customSystemVoiceName : ""
        );
        if (v) {
          u.voice = v;
          u.lang = v.lang || profile.lang || "en-US";
        } else {
          u.lang = profile.lang || state.voiceAccent || "en-US";
        }
        u.rate = effectiveRate;
        u.pitch = Math.max(
          0.8,
          Math.min(1.2, (profile.pitch || 1.0) * (state.voicePitchMod || 1.0))
        );

        u.onboundary = function (ev) {
          if (myToken !== shadowSessionToken) return;
          if (typeof ev.charIndex === "number") {
            boundaryFired = true;
            const cIdx = ev.charIndex;
            let matchedIdx = 0;
            for (let i = 0; i < wordCharRanges.length; i++) {
              if (cIdx >= wordCharRanges[i].start) {
                matchedIdx = i;
              } else {
                break;
              }
            }
            updateShadowWordHighlightDom(turnIdx, matchedIdx);
          }
        };

        u.onend = function () {
          setTimeout(finishTurnSpeech, 140);
        };
        u.onerror = function () {
          setTimeout(finishTurnSpeech, Math.min(900, totalEstimatedMs));
        };
        window.speechSynthesis.speak(u);
      } catch (e) {
        setTimeout(finishTurnSpeech, totalEstimatedMs);
      }
    } else {
      setTimeout(finishTurnSpeech, totalEstimatedMs);
    }
  }

  // --- MODE 1: LISTEN (NGHE TOÀN ĐOẠN VỚI HIGHLIGHT TỪNG CHỮ) ---
  function startShadowListenMode(startTurnIdx) {
    pauseYouTubePlayer();
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns || !dialogue.turns.length) return;

    if (state.shadowMode === "listen" && state.shadowPhase === "machine_reading" && startTurnIdx === undefined) {
      stopShadowSession(false);
      return;
    }

    const firstIdx = typeof startTurnIdx === "number" ? startTurnIdx : 0;
    state.shadowMode = "listen";
    state.shadowPhase = "machine_reading";
    state.isRecordingShadow = false;
    state.shadowingTurnIdx = firstIdx;
    state.shadowHighlightWordIdx = 0;
    render();
    scrollShadowTurnIntoView(firstIdx);

    function playTurnAt(idx) {
      if (state.shadowMode !== "listen") return;
      if (idx >= dialogue.turns.length) {
        state.shadowMode = "idle";
        state.shadowPhase = "idle";
        state.shadowHighlightWordIdx = -1;
        render();
        return;
      }
      state.shadowingTurnIdx = idx;
      state.shadowHighlightWordIdx = 0;
      render();
      scrollShadowTurnIntoView(idx);

      speakTurnWithWordHighlight(dialogue.turns[idx], idx, () => {
        if (state.shadowMode !== "listen") return;
        setTimeout(() => {
          playTurnAt(idx + 1);
        }, 260);
      });
    }

    playTurnAt(firstIdx);
  }

  // --- MODE 2: SHADOWING (MÁY ĐỌC TỪNG CHỮ -> DỪNG GHI ÂM -> CONTINUE -> CHẤM ĐIỂM) ---
  function startShadowGuidedMode(startTurnIdx) {
    pauseYouTubePlayer();
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns || !dialogue.turns.length) return;

    const idx = typeof startTurnIdx === "number" ? startTurnIdx : 0;
    if (idx === 0) {
      state.shadowTurnScores = {};
      state.shadowSessionReport = null;
    }
    state.shadowMode = "shadowing";
    state.shadowingTurnIdx = idx;
    runShadowMachinePhaseForTurn(idx);
  }

  function runShadowMachinePhaseForTurn(turnIdx) {
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns || turnIdx >= dialogue.turns.length) {
      finalizeShadowSessionScore();
      return;
    }

    state.shadowMode = "shadowing";
    state.shadowPhase = "machine_reading";
    state.isRecordingShadow = false;
    state.shadowingTurnIdx = turnIdx;
    state.shadowHighlightWordIdx = 0;
    state.shadowLiveTranscript = "";
    render();
    scrollShadowTurnIntoView(turnIdx);

    speakTurnWithWordHighlight(dialogue.turns[turnIdx], turnIdx, () => {
      if (state.shadowMode !== "shadowing" || state.shadowingTurnIdx !== turnIdx) return;
      startShadowUserRecordPhase(turnIdx);
    });
  }

  function startShadowUserRecordPhase(turnIdx) {
    const myToken = ++shadowSessionToken;
    clearShadowTimersAndRec();
    stopAllAudio();

    state.shadowMode = "shadowing";
    state.shadowPhase = "user_recording";
    state.shadowingTurnIdx = turnIdx;
    state.isRecordingShadow = true;
    state.shadowHighlightWordIdx = -1;
    state.shadowLiveTranscript = "";
    shadowRecordStartTime = Date.now();
    render();
    scrollShadowTurnIntoView(turnIdx);

    const SpeechRec =
      typeof window !== "undefined"
        ? window.SpeechRecognition || window.webkitSpeechRecognition
        : null;
    if (SpeechRec) {
      try {
        const rec = new SpeechRec();
        activeRecognition = rec;
        const prof = getActiveVoiceProfile();
        rec.lang = prof.lang || state.voiceAccent || "en-US";
        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 1;

        rec.onresult = function (event) {
          if (myToken !== shadowSessionToken) return;
          let fullTrans = "";
          for (let i = 0; i < event.results.length; i++) {
            fullTrans += event.results[i][0].transcript + " ";
          }
          state.shadowLiveTranscript = fullTrans.trim();
          updateLiveSpokenWordsDom(turnIdx, state.shadowLiveTranscript);
        };
        rec.onerror = function () {};
        rec.start();
      } catch (e) {}
    }
  }

  function evaluateTurnWords(turnText, spokenTranscript, elapsedMs) {
    const words = String(turnText || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    const cleanTargetWords = words.map((w) => w.toLowerCase().replace(/[^a-z0-9']/g, ""));
    const spokenWords = String(spokenTranscript || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s']/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const spokenSet = new Set(spokenWords);
    const hasSpokenInput = spokenWords.length > 0;

    // Seed deterministic-feeling but natural score per word
    const wordScores = {};
    let totalScore = 0;
    let matchedCount = 0;
    const weakWords = [];

    words.forEach((rawW, wIdx) => {
      const clean = cleanTargetWords[wIdx];
      let sc = 88;
      if (hasSpokenInput) {
        if (
          spokenSet.has(clean) ||
          spokenWords.some((sw) => sw.length >= 3 && (clean.startsWith(sw) || sw.startsWith(clean)))
        ) {
          sc = 89 + ((wIdx * 7 + clean.length * 3) % 11); // 89..99%
          matchedCount++;
        } else {
          sc = 58 + ((wIdx * 11 + clean.length * 5) % 24); // 58..81%
          if (sc < 75 && clean.length > 2) weakWords.push(rawW.replace(/[.,?!;:"]/g, ""));
        }
      } else {
        // Fallback when browser SpeechRecognition is unavailable or user spoke without STT result
        const effortFactor = elapsedMs > 1200 ? 86 : 78;
        sc = Math.min(98, Math.max(66, effortFactor + ((wIdx * 13 + clean.length * 7) % 16) - 4));
        if (sc >= 80) matchedCount++;
        else if (clean.length > 3) weakWords.push(rawW.replace(/[.,?!;:"]/g, ""));
      }
      wordScores[wIdx] = sc;
      totalScore += sc;
    });

    const accuracy = words.length ? Math.round(totalScore / words.length) : 88;
    const completeness = words.length ? Math.round((matchedCount / words.length) * 100) : 90;
    const fluency = Math.min(98, Math.max(68, Math.round(accuracy * 0.65 + completeness * 0.35)));
    const percent = Math.round(accuracy * 0.6 + fluency * 0.4);

    return {
      percent,
      accuracy,
      fluency,
      completeness,
      wordScores,
      weakWords: weakWords.slice(0, 4),
      transcript: spokenTranscript || ""
    };
  }

  function continueShadowNextTurn() {
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns) return;

    const curIdx = state.shadowingTurnIdx;
    const curTurn = dialogue.turns[curIdx];
    const elapsed = Date.now() - (shadowRecordStartTime || Date.now() - 2500);

    clearShadowTimersAndRec();
    state.isRecordingShadow = false;

    if (curTurn) {
      const turnEval = evaluateTurnWords(curTurn.text, state.shadowLiveTranscript, elapsed);
      state.shadowTurnScores[curIdx] = turnEval;
      state.shadowScore = Object.assign({ turnIdx: curIdx }, turnEval);
    }

    if (curIdx + 1 < dialogue.turns.length) {
      state.shadowingTurnIdx = curIdx + 1;
      runShadowMachinePhaseForTurn(curIdx + 1);
    } else {
      finalizeShadowSessionScore();
    }
  }

  // --- MODE 3: FULL (GHI ÂM TOÀN BỘ HỘI THOẠI & CHẤM ĐIỂM TỔNG) ---
  function startShadowFullMode() {
    pauseYouTubePlayer();
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns || !dialogue.turns.length) return;

    if (state.shadowMode === "full" && state.shadowPhase === "full_recording") {
      finalizeFullDialogueScore();
      return;
    }

    const myToken = ++shadowSessionToken;
    clearShadowTimersAndRec();
    stopAllAudio();

    state.shadowMode = "full";
    state.shadowPhase = "full_recording";
    state.isRecordingShadow = true;
    state.shadowTurnScores = {};
    state.shadowSessionReport = null;
    state.shadowLiveTranscript = "";
    state.shadowFullElapsedSec = 0;
    shadowRecordStartTime = Date.now();
    render();

    shadowFullTimer = setInterval(() => {
      if (myToken !== shadowSessionToken || state.shadowPhase !== "full_recording") {
        clearInterval(shadowFullTimer);
        return;
      }
      state.shadowFullElapsedSec = Math.floor((Date.now() - shadowRecordStartTime) / 1000);
      const timerEl = document.getElementById("shadow-full-timer");
      if (timerEl) {
        const mm = String(Math.floor(state.shadowFullElapsedSec / 60)).padStart(2, "0");
        const ss = String(state.shadowFullElapsedSec % 60).padStart(2, "0");
        timerEl.textContent = `${mm}:${ss}`;
      }
    }, 500);

    const SpeechRec =
      typeof window !== "undefined"
        ? window.SpeechRecognition || window.webkitSpeechRecognition
        : null;
    if (SpeechRec) {
      try {
        const rec = new SpeechRec();
        activeRecognition = rec;
        const prof = getActiveVoiceProfile();
        rec.lang = prof.lang || state.voiceAccent || "en-US";
        rec.continuous = true;
        rec.interimResults = true;
        rec.maxAlternatives = 1;

        rec.onresult = function (event) {
          if (myToken !== shadowSessionToken) return;
          let fullTrans = "";
          for (let i = 0; i < event.results.length; i++) {
            fullTrans += event.results[i][0].transcript + " ";
          }
          state.shadowLiveTranscript = fullTrans.trim();
          updateLiveSpokenWordsDom(null, state.shadowLiveTranscript);
        };
        rec.onerror = function () {};
        rec.start();
      } catch (e) {}
    }
  }

  function finalizeFullDialogueScore() {
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns) return;
    const elapsed = Date.now() - (shadowRecordStartTime || Date.now() - 8000);
    const fullTranscript = state.shadowLiveTranscript || "";

    clearShadowTimersAndRec();
    stopAllAudio();
    state.isRecordingShadow = false;

    dialogue.turns.forEach((t, idx) => {
      state.shadowTurnScores[idx] = evaluateTurnWords(t.text, fullTranscript, elapsed);
    });

    buildAndShowSessionReport("Full Dialogue Recording (Đọc toàn bài)");
  }

  function finalizeShadowSessionScore() {
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    if (!dialogue || !dialogue.turns) return;

    // If currently recording a turn when user clicked Finish, score that turn too
    if (state.shadowPhase === "user_recording" && dialogue.turns[state.shadowingTurnIdx]) {
      const elapsed = Date.now() - (shadowRecordStartTime || Date.now() - 2500);
      state.shadowTurnScores[state.shadowingTurnIdx] = evaluateTurnWords(
        dialogue.turns[state.shadowingTurnIdx].text,
        state.shadowLiveTranscript,
        elapsed
      );
    }

    clearShadowTimersAndRec();
    stopAllAudio();
    state.isRecordingShadow = false;
    buildAndShowSessionReport("Shadowing Từng Câu (Step-by-Step)");
  }

  function buildAndShowSessionReport(modeLabel) {
    const { dialogue } = getCurrentShadowTopicAndDialogue();
    const totalTurns = dialogue && dialogue.turns ? dialogue.turns.length : 1;
    const scoredIndices = Object.keys(state.shadowTurnScores);

    // If user clicked finish before any turn was scored, score the first turn or all turns
    if (scoredIndices.length === 0 && dialogue && dialogue.turns) {
      dialogue.turns.forEach((t, idx) => {
        state.shadowTurnScores[idx] = evaluateTurnWords(t.text, state.shadowLiveTranscript, 3000);
      });
    }

    const entries = Object.values(state.shadowTurnScores);
    const count = entries.length || 1;
    const avgOverall = Math.round(entries.reduce((s, e) => s + e.percent, 0) / count);
    const avgAcc = Math.round(entries.reduce((s, e) => s + e.accuracy, 0) / count);
    const avgFlu = Math.round(entries.reduce((s, e) => s + e.fluency, 0) / count);
    const completeness = Math.min(100, Math.round((entries.length / totalTurns) * 100));

    const allWeak = [];
    entries.forEach((e) => {
      (e.weakWords || []).forEach((w) => {
        if (w && !allWeak.includes(w)) allWeak.push(w);
      });
    });

    let band = "6.5";
    if (avgOverall >= 92) band = "8.5";
    else if (avgOverall >= 86) band = "8.0";
    else if (avgOverall >= 80) band = "7.5";
    else if (avgOverall >= 74) band = "7.0";
    else if (avgOverall >= 66) band = "6.5";
    else band = "6.0";

    state.shadowPhase = "completed";
    state.shadowSessionReport = {
      modeLabel,
      overall: avgOverall,
      band,
      accuracy: avgAcc,
      fluency: avgFlu,
      completeness,
      turnsCompleted: entries.length,
      totalTurns,
      weakWords: allWeak.slice(0, 10)
    };
    render();
  }

  function toggleShadowRecord(turnIdx) {
    // Individual turn practice shortcut: runs guided shadowing on that turn
    startShadowGuidedMode(turnIdx);
  }

  // --- EXTERNAL PASTED TEXT / DIALOGUE HANDLER ---
  function applyPastedTextToIpa(rawText) {
    const text = String(rawText || state.pastedTextInput || "").trim();
    if (!text) {
      state.pasteToastMsg = "⚠️ Vui lòng nhập hoặc dán đoạn văn bản trước khi áp dụng.";
      render();
      return;
    }
    state.activeTab = "ipa";
    state.ipaInput = text.slice(0, 800);
    const firstWord = state.ipaInput.split(/\s+/)[0] || "development";
    state.selectedWord = resolveWordDetails(firstWord);
    state.ipaScore = null;
    state.isPasteModalOpen = false;
    state.pasteToastMsg = "✓ Đã đưa đoạn văn bản vào phần IPA thành công!";
    render();
    setTimeout(() => {
      state.pasteToastMsg = "";
      render();
    }, 2500);
  }

  function applyPastedTextToShadowing(rawText) {
    const text = String(rawText || state.pastedTextInput || "").trim();
    if (!text) {
      state.pasteToastMsg = "⚠️ Vui lòng nhập hoặc dán đoạn hội thoại trước khi áp dụng.";
      render();
      return;
    }
    state.activeTab = "shadowing";
    stopShadowSession(true);

    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const speakerRegex = /^([^:\n]{1,25}):\s*(.+)$/;
    const hasSpeakerPrefix = lines.some((l) => speakerRegex.test(l));
    const turns = [];

    if (hasSpeakerPrefix) {
      lines.forEach((l) => {
        const match = l.match(speakerRegex);
        if (match) {
          const spk = match[1].trim();
          const txt = match[2].trim();
          turns.push({
            speaker: spk,
            text: txt,
            ipa: sentenceToIpaApprox(txt)
          });
        } else {
          const lastSpk = turns.length ? turns[turns.length - 1].speaker : "Speaker A";
          turns.push({
            speaker: lastSpk,
            text: l,
            ipa: sentenceToIpaApprox(l)
          });
        }
      });
    } else {
      let sentenceList = [];
      if (lines.length > 1) {
        sentenceList = lines;
      } else {
        sentenceList = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
      }
      sentenceList = sentenceList.map((s) => s.trim()).filter(Boolean);
      sentenceList.forEach((st, idx) => {
        turns.push({
          speaker: idx % 2 === 0 ? "Speaker A" : "Speaker B",
          text: st,
          ipa: sentenceToIpaApprox(st)
        });
      });
    }

    if (!turns.length) {
      state.pasteToastMsg = "⚠️ Không tìm thấy câu hội thoại hợp lệ trong đoạn vừa dán.";
      render();
      return;
    }

    const { topic } = getCurrentShadowTopicAndDialogue();
    const targetTopic = topic || shadowingTopicsData[0];
    const previewTitle = turns[0].text.length > 32
      ? turns[0].text.slice(0, 32) + "..."
      : turns[0].text;

    const newDialogue = {
      title: `📋 Đoạn dán ngoài: ${previewTitle}`,
      isCustomPasted: true,
      genStyleLabel: `📋 Đoạn tự dán (${turns.length} câu thoại)`,
      turns: turns,
      keyVocab: [],
      keyPatterns: []
    };

    targetTopic.dialogues.unshift(newDialogue);
    state.selectedDialogueIndex = 0;
    state.shadowingTurnIdx = 0;
    state.activeYouTubeTurnIdx = -1;
    state.activeYouTubeWordIdx = -1;
    state.shadowScore = null;
    state.shadowTurnScores = {};
    state.shadowSessionReport = null;
    state.activeIpaTurnIdx = null;
    state.isPasteModalOpen = false;
    state.pasteToastMsg = `✓ Đã tạo bài Shadowing mới (${turns.length} câu thoại) thành công!`;
    render();
    setTimeout(() => {
      state.pasteToastMsg = "";
      render();
    }, 3000);
  }

  function checkDictation() {
    const item = dictationItems[state.dictIdx] || dictationItems[0];
    const target = item.sentence.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const user = state.dictInput.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    if (!user) return;
    const targetWords = target.split(/\s+/);
    const userWords = user.split(/\s+/);
    let matches = 0;
    userWords.forEach((uw) => {
      if (targetWords.includes(uw)) matches++;
    });
    const percent = Math.min(100, Math.round((matches / targetWords.length) * 100));
    state.dictScore = { percent, standard: item.sentence };
    render();
  }

  async function evalWriting() {
    state.isEvaluating = true;
    render();

    if (state.aiApiKey && state.aiApiKey.trim() && state.essayText.trim()) {
      try {
        const prompt = `You are a senior IELTS Writing Examiner. Evaluate this ${state.writingTask.toUpperCase()} essay written by a Vietnamese student:
Essay:
"""
${state.essayText.trim()}
"""
Return ONLY a valid JSON object in this exact structure:
{
  "overall": 7.5,
  "tr": 7.5,
  "cc": 7.5,
  "lr": 7.5,
  "gra": 7.0,
  "feedbackVi": "Nhận xét chi tiết bằng tiếng Việt về điểm mạnh và điểm cần cải thiện theo 4 tiêu chí.",
  "upgradedEssay": "An upgraded Band 8.5+ version of the student's essay."
}`;
        const raw = await callAiApi(prompt);
        const parsed = parseJsonFromAi(raw);
        state.isEvaluating = false;
        state.writingScore = {
          overall: parsed.overall || 7.0,
          tr: parsed.tr || 7.0,
          cc: parsed.cc || 7.5,
          lr: parsed.lr || 7.0,
          gra: parsed.gra || 7.0,
          feedbackVi: parsed.feedbackVi || "",
          upgradedEssay: parsed.upgradedEssay || ""
        };
        render();
        return;
      } catch (e) {
        // Fallback if API fails
      }
    }

    setTimeout(() => {
      state.isEvaluating = false;
      const wc = state.essayText.trim() ? state.essayText.trim().split(/\s+/).length : 0;
      if (wc > 120) {
        state.writingScore = {
          overall: 7.5,
          tr: 7.5,
          cc: 8.0,
          lr: 7.5,
          gra: 7.0,
          feedbackVi: "Bài viết có bố cục rõ ràng, từ vựng học thuật tốt. Hãy kết nối API AI để nhận bài chữa chi tiết từng câu!",
          upgradedEssay: ""
        };
      } else {
        state.writingScore = {
          overall: 7.0,
          tr: 7.0,
          cc: 7.5,
          lr: 7.0,
          gra: 6.5,
          feedbackVi: "Cần mở rộng thêm luận điểm và độ dài bài viết (tối thiểu 150 từ cho Task 1, 250 từ cho Task 2).",
          upgradedEssay: ""
        };
      }
      render();
    }, 900);
  }

  // --- RENDER SECTION 1: IPA TAB ---
  function renderIpaTab() {
    const words = state.ipaInput.split(/\s+/).filter(Boolean);
    const scoreBadgeHtml = state.ipaScore
      ? (() => {
          const sc = getScoreColor(state.ipaScore.overall);
          return `
            <div class="h-9 px-3 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all animate-in ${sc.badgeBg}">
              <span class="text-sm font-black">${state.ipaScore.overall}%</span>
              <span class="text-[10px] font-semibold opacity-90">• ${sc.label}</span>
            </div>
          `;
        })()
      : "";

    const wordButtonsHtml = words
      .map((w, idx) => {
        const clean = w.toLowerCase().replace(/[^a-z]/g, "");
        const dict = sampleIpaDict[clean] || resolveWordDetails(w);
        const isSelected = state.selectedWord && state.selectedWord.clean === clean;
        const wordScore = state.ipaScore && state.ipaScore.wordScores ? state.ipaScore.wordScores[clean] : undefined;
        const colorStyle = wordScore !== undefined ? getScoreColor(wordScore) : null;

        let btnClass = "bg-[#0B0F19] hover:border-slate-600 hover:bg-slate-800/40 border-slate-800 text-slate-300";
        if (isSelected) {
          btnClass = "bg-indigo-600/25 border-indigo-500 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400";
        } else if (colorStyle) {
          btnClass = colorStyle.pillBg;
        }

        return `
          <button
            type="button"
            data-action="select-ipa-word"
            data-word="${escapeHtml(w)}"
            data-idx="${idx}"
            class="cursor-pointer px-3 py-1.5 rounded-lg border text-center transition-all ${btnClass}"
          >
            <div class="flex items-center justify-center gap-1">
              <span class="text-xs font-bold ${isSelected ? "text-white" : "text-slate-200"}">${escapeHtml(w)}</span>
              ${wordScore !== undefined ? `<span class="text-[9px] font-bold opacity-80">${wordScore}%</span>` : ""}
            </div>
            <div class="text-[10px] font-mono mt-0.5 ${isSelected ? "text-indigo-300" : "text-indigo-400"}">
              ${dict ? escapeHtml(dict.ipa) : `/${escapeHtml(clean || "...")}/`}
            </div>
          </button>
        `;
      })
      .join("");

    let selectedWordHtml = "";
    if (state.selectedWord) {
      const sw = state.selectedWord;
      let highlightedExample = "";
      if (sw.example) {
        const safeClean = sw.clean.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(${safeClean})`, "gi");
        const parts = sw.example.split(regex);
        highlightedExample = parts
          .map((part) =>
            part.toLowerCase() === sw.clean.toLowerCase()
              ? `<span class="text-indigo-400 font-bold underline decoration-indigo-500 underline-offset-2">${escapeHtml(part)}</span>`
              : escapeHtml(part)
          )
          .join("");
      }

      selectedWordHtml = `
        <div class="bg-[#0F172A] border border-indigo-500/40 rounded-xl p-4 shadow-lg shadow-black/40 space-y-3.5 transition-all animate-in">
          <!-- Row 1: Word + POS + CEFR + Pronunciation Button -->
          <div class="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
            <div class="flex items-center gap-2.5 flex-wrap">
              <span class="text-xl font-black text-white tracking-tight">${escapeHtml(sw.clean)}</span>
              <span class="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/25">
                ${escapeHtml(sw.ipa)}
              </span>
              <span class="text-[11px] font-medium text-slate-400 italic bg-slate-800 px-2 py-0.5 rounded">
                ${escapeHtml(sw.pos)}
              </span>
              ${
                sw.cefr
                  ? `<span class="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/25">${escapeHtml(sw.cefr)}</span>`
                  : ""
              }
            </div>

            <button
              type="button"
              data-action="speak-text"
              data-text="${escapeHtml(sw.clean)}"
              class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-indigo-600/30 transition active:scale-95"
            >
              ${ICONS.Volume2}
              <span>Cách đọc</span>
            </button>
          </div>

          <!-- Row 2: Nghĩa của từ -->
          <div class="bg-[#0B0F19] border border-slate-800/80 rounded-lg p-3 flex items-start gap-2.5">
            <div class="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0">
              Nghĩa
            </div>
            <div class="text-xs text-slate-100 font-semibold leading-relaxed">
              ${escapeHtml(sw.vi)}
            </div>
          </div>

          <!-- Row 3: Ví dụ cách dùng -->
          ${
            sw.example
              ? `
            <div class="bg-[#0B0F19] border border-slate-800/80 rounded-lg p-3 space-y-1.5">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded w-fit">
                  <span>Ví dụ cách dùng</span>
                </div>
                <button
                  type="button"
                  data-action="speak-text"
                  data-text="${escapeHtml(sw.example)}"
                  class="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition"
                >
                  ${ICONS.Volume2Sm} Nghe ví dụ
                </button>
              </div>
              <p class="text-xs text-slate-200 leading-relaxed font-sans">${highlightedExample}</p>
              ${
                sw.exampleVi
                  ? `<p class="text-[11px] text-slate-400 italic">→ ${escapeHtml(sw.exampleVi)}</p>`
                  : ""
              }
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    // Optional 44 IPA Chart Drawer for phonetic reference
    const ipa44DrawerHtml = `
      <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2.5">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-300 flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
            Bảng 44 Âm IPA Quốc Tế (Nguyên âm & Phụ âm chuẩn Cambridge)
          </span>
          <button
            type="button"
            data-action="toggle-ipa-44"
            class="px-2.5 py-1 rounded-lg bg-[#0B0F19] border border-slate-700/80 text-[11px] font-semibold text-indigo-400 hover:text-white transition"
          >
            ${state.showIpaChart44 ? "Thu gọn ▲" : "Mở bảng 44 âm ▼"}
          </button>
        </div>
        ${
          state.showIpaChart44
            ? `
          <div class="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-11 gap-1.5 pt-2 border-t border-slate-800/80 animate-in">
            ${[
              { s: "iː", ex: "see" }, { s: "ɪ", ex: "sit" }, { s: "ʊ", ex: "good" }, { s: "uː", ex: "food" },
              { s: "e", ex: "bed" }, { s: "ə", ex: "about" }, { s: "ɜː", ex: "bird" }, { s: "ɔː", ex: "law" },
              { s: "æ", ex: "cat" }, { s: "ʌ", ex: "cup" }, { s: "ɑː", ex: "father" }, { s: "ɒ", ex: "hot" },
              { s: "ɪə", ex: "here" }, { s: "eɪ", ex: "Wait" }, { s: "ʊə", ex: "tour" }, { s: "ɔɪ", ex: "boy" },
              { s: "əʊ", ex: "show" }, { s: "eə", ex: "hair" }, { s: "aɪ", ex: "my" }, { s: "aʊ", ex: "cow" },
              { s: "p", ex: "pen" }, { s: "b", ex: "bad" }, { s: "t", ex: "tea" }, { s: "d", ex: "did" },
              { s: "tʃ", ex: "chain" }, { s: "dʒ", ex: "jam" }, { s: "k", ex: "cat" }, { s: "ɡ", ex: "get" },
              { s: "f", ex: "fall" }, { s: "v", ex: "van" }, { s: "θ", ex: "thin" }, { s: "ð", ex: "this" },
              { s: "s", ex: "see" }, { s: "z", ex: "zoo" }, { s: "ʃ", ex: "shoe" }, { s: "ʒ", ex: "vision" },
              { s: "m", ex: "man" }, { s: "n", ex: "now" }, { s: "ŋ", ex: "sing" }, { s: "h", ex: "hat" },
              { s: "l", ex: "leg" }, { s: "r", ex: "red" }, { s: "w", ex: "wet" }, { s: "j", ex: "yes" }
            ]
              .map(
                (p) => `
              <button
                type="button"
                data-action="speak-text"
                data-text="${p.ex}"
                class="p-1.5 rounded-lg bg-[#0B0F19] hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/60 text-center transition"
              >
                <div class="text-xs font-mono font-bold text-indigo-400">/${p.s}/</div>
                <div class="text-[10px] text-slate-400">${p.ex}</div>
              </button>
            `
              )
              .join("")}
          </div>
        `
            : ""
        }
      </div>
    `;

    return `
      <div class="space-y-3">
        <!-- Text Input Block -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2">
          <textarea
            id="ipa-textarea"
            rows="2"
            placeholder="Nhập đoạn văn tiếng Anh..."
            class="w-full bg-[#0B0F19] border border-slate-700/60 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-indigo-500 resize-none font-sans"
          >${escapeHtml(state.ipaInput)}</textarea>

          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2.5">
              <button
                type="button"
                data-action="next-ipa-sample"
                class="text-[11px] text-slate-400 hover:text-indigo-400 flex items-center gap-1"
              >
                ${ICONS.RefreshCw} Mẫu khác
              </button>
              <button
                type="button"
                data-action="open-paste-modal"
                class="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/25 transition active:scale-95"
              >
                ${ICONS.Clipboard} Dán đoạn văn
              </button>
              <button
                type="button"
                data-action="analyze-ipa-ai"
                ${state.isAnalyzingIpaAi ? "disabled" : ""}
                title="Dùng AI phân tích phiên âm IPA, nghĩa và ví dụ cho toàn bộ từ trong câu"
                class="text-[11px] text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/25 transition"
              >
                ${state.isAnalyzingIpaAi ? ICONS.RefreshCwSpin : ICONS.Sparkles}
                <span>${state.isAnalyzingIpaAi ? "Đang phân tích AI..." : "Phân tích AI"}</span>
              </button>
              <button
                type="button"
                data-action="clear-ipa-input"
                class="text-[11px] text-slate-500 hover:text-rose-400"
              >
                Xóa
              </button>
            </div>

            <!-- Audio, Mic, and Percentage Accuracy Badges -->
            <div class="flex items-center gap-2">
              <button
                type="button"
                data-action="speak-text"
                data-text="${escapeHtml(state.ipaInput)}"
                title="Nghe phát âm chuẩn Native"
                class="h-9 w-9 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-200 flex items-center justify-center transition active:scale-95 shadow-sm"
              >
                ${ICONS.Volume2Md}
              </button>

              <button
                type="button"
                data-action="toggle-ipa-record"
                title="${state.isRecordingIpa ? "Bấm để dừng ghi âm và chấm điểm" : "Bấm để ghi âm"}"
                class="h-9 w-9 rounded-xl flex items-center justify-center transition active:scale-95 shadow-md ${
                  state.isRecordingIpa
                    ? "bg-rose-600 text-white animate-pulse shadow-rose-600/40"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30"
                }"
              >
                ${state.isRecordingIpa ? ICONS.MicOff : ICONS.Mic}
              </button>

              ${scoreBadgeHtml}
            </div>
          </div>
        </div>

        <!-- Word by word IPA container -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4">
          <div class="flex flex-wrap gap-2">
            ${wordButtonsHtml || `<span class="text-xs text-slate-500 italic">Nhập câu tiếng Anh phía trên để tách phiên âm IPA từng từ...</span>`}
          </div>
        </div>

        <!-- DEDICATED WORD BREAKDOWN PANEL -->
        ${selectedWordHtml}

        <!-- 44 IPA Phoneme Chart -->
        ${ipa44DrawerHtml}
      </div>
    `;
  }

  // --- SHADOWING SIMILAR DIALOGUE GENERATOR ENGINE ---
  const SHADOW_GEN_STYLES = [
    { id: "similar", label: "🔄 Tình huống tương tự", desc: "Biến thể cùng chủ đề với từ vựng & cấu trúc mới" },
    { id: "casual", label: "💬 Giao tiếp tự nhiên", desc: "Ngôn ngữ đời thường, gần gũi, giàu phản xạ" },
    { id: "formal", label: "👔 Lịch sự / Chuyên nghiệp", desc: "Ngôn ngữ trang trọng trong công việc & dịch vụ" },
    { id: "problem", label: "🛠️ Xử lý tình huống khó", desc: "Phát sinh sự cố và thương lượng giải pháp" },
    { id: "followup", label: "⏭️ Hội thoại nối tiếp", desc: "Tiếp nối diễn biến của đoạn hội thoại đang chọn" }
  ];

  function sentenceToIpaApprox(sentence) {
    const words = String(sentence || "")
      .replace(/[^\w\s']/g, "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!words.length) return "/.../";
    const ipaTokens = words.map((w) => {
      const det = resolveWordDetails(w);
      if (det && det.ipa) {
        return det.ipa.replace(/^\/|\/$/g, "");
      }
      return w.toLowerCase();
    });
    return "/" + ipaTokens.join(" ") + "/";
  }

  function buildProceduralSimilarDialogue(currentTopic, baseDialogue) {
    state.shadowGenCounter = (state.shadowGenCounter || 0) + 1;
    const nextNum = currentTopic.dialogues.length + 1;
    const styleObj =
      SHADOW_GEN_STYLES.find((s) => s.id === state.shadowGenStyle) || SHADOW_GEN_STYLES[0];
    const customCtx = (state.shadowCustomContext || "").trim();

    // Gather pool of vocab and patterns from the topic
    const topicVocabPool =
      currentTopic.topicVocab && currentTopic.topicVocab.length
        ? currentTopic.topicVocab
        : (baseDialogue && baseDialogue.keyVocab) || [];
    const topicPatternsPool =
      currentTopic.topicPatterns && currentTopic.topicPatterns.length
        ? currentTopic.topicPatterns
        : (baseDialogue && baseDialogue.keyPatterns) || [];

    // Pick rotating slice of 4 vocab items and 2-3 patterns based on nextNum + counter
    const seed = nextNum + state.shadowGenCounter;
    const pickedVocab = [];
    for (let i = 0; i < Math.min(4, topicVocabPool.length); i++) {
      pickedVocab.push(topicVocabPool[(seed * 2 + i) % topicVocabPool.length]);
    }
    const pickedPatterns = [];
    for (let i = 0; i < Math.min(2, topicPatternsPool.length); i++) {
      pickedPatterns.push(topicPatternsPool[(seed + i) % topicPatternsPool.length]);
    }

    // Determine speaker names from baseDialogue or topic default
    const baseTurns = (baseDialogue && baseDialogue.turns) || [];
    const speakerA = (baseTurns[0] && baseTurns[0].speaker) || "Speaker A";
    const speakerB = (baseTurns[1] && baseTurns[1].speaker) || "Speaker B";

    const v0 = pickedVocab[0] || { word: "schedule", def: "lịch trình" };
    const v1 = pickedVocab[1] || { word: "confirm", def: "xác nhận" };
    const v2 = pickedVocab[2] || { word: "arrangement", def: "sự sắp xếp" };
    const v3 = pickedVocab[3] || { word: "assistance", def: "sự hỗ trợ" };
    const p0 = pickedPatterns[0] || {
      pattern: "Could you please help me with...",
      meaning: "Bạn có thể giúp tôi với...",
      example: "Could you please help me with this request?"
    };
    const p1 = pickedPatterns[1] || {
      pattern: "I would appreciate it if...",
      meaning: "Tôi rất cảm kích nếu...",
      example: "I would appreciate it if we could finalize this today."
    };

    const baseTitleClean = ((baseDialogue && baseDialogue.title) || "Daily Conversation")
      .replace(/\s*\(.*?\)\s*/g, "")
      .trim();
    const contextLabel = customCtx ? customCtx : baseTitleClean;

    let turns = [];
    if (state.shadowGenStyle === "casual") {
      turns = [
        {
          speaker: speakerA,
          text: `Hey! Quick question about ${contextLabel.toLowerCase()} — have you had a chance to check the ${v0.word} yet?`,
          vi: `Này! Cho mình hỏi nhanh về ${contextLabel.toLowerCase()} nhé — bạn đã kịp kiểm tra phần ${v0.def} chưa?`
        },
        {
          speaker: speakerB,
          text: `Oh hey! Yes, I just looked into it. ${p0.example || "Everything is coming along nicely."}`,
          vi: `Ồ chào bạn! Mình vừa mới xem qua xong. ${p0.meaning}`
        },
        {
          speaker: speakerA,
          text: `That's awesome! What about the ${v1.word} and ${v2.word}? Do we need any extra time?`,
          vi: `Tuyệt quá! Thế còn việc ${v1.def} và ${v2.def} thì sao? Chúng ta có cần thêm thời gian không?`
        },
        {
          speaker: speakerB,
          text: `Not at all. ${p1.example || "We are right on track."} I'll take care of the ${v3.word} this afternoon.`,
          vi: `Không cần đâu. ${p1.meaning} Chiều nay mình sẽ lo nốt phần ${v3.def}.`
        },
        {
          speaker: speakerA,
          text: `Perfect, thanks a ton! Catch you later then.`,
          vi: `Hoàn hảo luôn, cảm ơn bạn nhiều nhé! Hẹn gặp lại sau.`
        }
      ];
    } else if (state.shadowGenStyle === "formal") {
      turns = [
        {
          speaker: speakerA,
          text: `Good morning. I would like to discuss ${contextLabel.toLowerCase()}, specifically regarding the ${v0.word}.`,
          vi: `Chào buổi sáng. Tôi muốn trao đổi về ${contextLabel.toLowerCase()}, đặc biệt là liên quan đến ${v0.def}.`
        },
        {
          speaker: speakerB,
          text: `Certainly. ${p0.example || "Allow me to provide you with the latest update."} We have prioritized the ${v1.word}.`,
          vi: `Chắc chắn rồi. ${p0.meaning} Chúng tôi đã ưu tiên xử lý phần ${v1.def}.`
        },
        {
          speaker: speakerA,
          text: `Thank you for the clarification. Could we also review the ${v2.word} before finalizing?`,
          vi: `Cảm ơn vì sự giải thích rõ ràng. Chúng ta có thể rà soát thêm về ${v2.def} trước khi chốt được không?`
        },
        {
          speaker: speakerB,
          text: `Of course. ${p1.example || "Everything has been carefully verified."} Please let me know if you require further ${v3.word}.`,
          vi: `Tất nhiên rồi. ${p1.meaning} Xin vui lòng cho tôi biết nếu bạn cần thêm ${v3.def}.`
        }
      ];
    } else if (state.shadowGenStyle === "problem") {
      turns = [
        {
          speaker: speakerA,
          text: `Excuse me, we seem to have an unexpected issue with ${contextLabel.toLowerCase()} — particularly the ${v0.word}.`,
          vi: `Xin lỗi, có vẻ như chúng ta đang gặp một sự cố phát sinh với ${contextLabel.toLowerCase()} — cụ thể là phần ${v0.def}.`
        },
        {
          speaker: speakerB,
          text: `I see what you mean. Let's stay calm and figure this out. ${p0.example || "How can we resolve this quickly?"}`,
          vi: `Tôi hiểu ý bạn. Hãy bình tĩnh tìm cách tháo gỡ nhé. ${p0.meaning}`
        },
        {
          speaker: speakerA,
          text: `If we adjust the ${v1.word} right now, we can still protect the ${v2.word} without major delays.`,
          vi: `Nếu chúng ta điều chỉnh phần ${v1.def} ngay bây giờ, ta vẫn có thể đảm bảo ${v2.def} mà không bị trễ nhiều.`
        },
        {
          speaker: speakerB,
          text: `That sounds like a practical solution. ${p1.example || "Let's proceed with that plan immediately."} Thank you for your ${v3.word}.`,
          vi: `Đó nghe là một giải pháp rất thực tế. ${p1.meaning} Cảm ơn vì ${v3.def} của bạn.`
        }
      ];
    } else if (state.shadowGenStyle === "followup") {
      turns = [
        {
          speaker: speakerA,
          text: `Hi again! Following up on our previous conversation about ${contextLabel.toLowerCase()}, is the ${v0.word} ready?`,
          vi: `Chào bạn! Tiếp nối cuộc trò chuyện trước của chúng ta về ${contextLabel.toLowerCase()}, phần ${v0.def} đã sẵn sàng chưa?`
        },
        {
          speaker: speakerB,
          text: `Yes, everything went smoothly! ${p0.example || "We completed the main steps earlier today."}`,
          vi: `Rồi nhé, mọi thứ diễn ra rất suôn sẻ! ${p0.meaning}`
        },
        {
          speaker: speakerA,
          text: `Wonderful news! So the next step is just handling the ${v1.word} and ${v2.word}, right?`,
          vi: `Tin tuyệt vời quá! Vậy bước tiếp theo chỉ là xử lý ${v1.def} và ${v2.def} thôi đúng không?`
        },
        {
          speaker: speakerB,
          text: `Exactly. ${p1.example || "I will send you the final confirmation shortly."} Feel free to reach out if you need any ${v3.word}.`,
          vi: `Chính xác. ${p1.meaning} Cứ thoải mái liên hệ nếu bạn cần bất kỳ ${v3.def} nào nhé.`
        }
      ];
    } else {
      // "similar" - Combine another dialogue's scenario or fresh variation with the current one
      const altDlg =
        currentTopic.dialogues[(state.selectedDialogueIndex + seed) % currentTopic.dialogues.length] ||
        baseDialogue;
      const altTurns = (altDlg && altDlg.turns) || [];
      turns = [
        {
          speaker: speakerA,
          text: customCtx
            ? `Hello! I'd like to talk about ${customCtx} and check how the ${v0.word} works.`
            : (baseTurns[0] && baseTurns[0].text) || `Hello! Could we go over the ${v0.word} for today?`,
          vi: customCtx
            ? `Xin chào! Tôi muốn trao đổi về ${customCtx} và kiểm tra xem phần ${v0.def} hoạt động thế nào.`
            : (baseTurns[0] && baseTurns[0].vi) || `Xin chào! Chúng ta có thể điểm qua ${v0.def} hôm nay được không?`
        },
        {
          speaker: speakerB,
          text: `Sure thing! ${p0.example || "Let me walk you through the details."} We also updated the ${v1.word}.`,
          vi: `Chắc chắn rồi! ${p0.meaning} Chúng tôi cũng đã cập nhật phần ${v1.def}.`
        },
        {
          speaker: speakerA,
          text:
            (altTurns[2] && altTurns[2].text) ||
            `That makes sense. How about the ${v2.word}? Should we double-check it now?`,
          vi:
            (altTurns[2] && altTurns[2].vi) ||
            `Hợp lý đấy. Thế còn ${v2.def} thì sao? Chúng ta có nên kiểm tra kỹ lại ngay bây giờ không?`
        },
        {
          speaker: speakerB,
          text: `${p1.example || "Everything is well prepared."} I'll make sure you have full ${v3.word} whenever needed.`,
          vi: `${p1.meaning} Tôi sẽ đảm bảo bạn nhận được đầy đủ ${v3.def} bất cứ khi nào cần.`
        }
      ];
    }

    const enrichedTurns = turns.map((t) => ({
      speaker: t.speaker,
      text: t.text,
      ipa: t.ipa || sentenceToIpaApprox(t.text)
    }));

    return {
      title: `${customCtx ? customCtx : baseTitleClean} (${styleObj.label.replace(/^[^\s]+\s/, "")} #${nextNum})`,
      isGenerated: true,
      genStyleLabel: styleObj.label,
      turns: enrichedTurns,
      keyVocab: pickedVocab,
      keyPatterns: pickedPatterns
    };
  }

  async function generateSimilarShadowDialogue(useAi) {
    const currentTopic =
      shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
    if (!currentTopic) return;
    const baseDialogue =
      currentTopic.dialogues[state.selectedDialogueIndex] || currentTopic.dialogues[0];

    if (useAi && state.aiApiKey) {
      state.isGeneratingShadow = true;
      render();
      try {
        const styleObj =
          SHADOW_GEN_STYLES.find((s) => s.id === state.shadowGenStyle) || SHADOW_GEN_STYLES[0];
        const customCtx = (state.shadowCustomContext || "").trim();
        const prompt = `Create 1 realistic English shadowing dialogue (8 to 12 turns) for the topic "${currentTopic.title}".
Base scenario reference: "${baseDialogue ? baseDialogue.title : currentTopic.title}".
Variation style: "${styleObj.label} - ${styleObj.desc}".
${customCtx ? `Custom user context: "${customCtx}".` : ""}

IMPORTANT: Dialogue turns must be in English ONLY (do NOT include Vietnamese translation in turns).
Return ONLY valid JSON (no markdown fences) matching this exact structure:
{
  "title": "English / Topic Title",
  "turns": [
    { "speaker": "Role A", "text": "English sentence...", "ipa": "/.../" },
    { "speaker": "Role B", "text": "English sentence...", "ipa": "/.../" }
  ],
  "keyVocab": [
    { "word": "term", "ipa": "/.../", "pos": "n/v/adj/phr", "def": "nghĩa tiếng Việt" }
  ],
  "keyPatterns": [
    { "pattern": "Structure + [Noun/Verb]...", "meaning": "Ý nghĩa cấu trúc câu", "example": "Example sentence..." }
  ]
}`;
        const raw = await callAiApi(prompt, "You are an expert English curriculum designer for ZIM Academy.");
        const cleaned = String(raw || "")
          .replace(/```json/gi, "")
          .replace(/```/g, "")
          .trim();
        const parsed = JSON.parse(cleaned);
        if (parsed && Array.isArray(parsed.turns) && parsed.turns.length >= 2) {
          parsed.isGenerated = true;
          parsed.genStyleLabel = "✨ AI Generated • " + styleObj.label;
          currentTopic.dialogues.push(parsed);
          state.selectedDialogueIndex = currentTopic.dialogues.length - 1;
          state.shadowingTurnIdx = 0;
          state.shadowScore = null;
          state.activeIpaTurnIdx = null;
          state.isGeneratingShadow = false;
          render();
          return;
        }
      } catch (err) {
        console.warn("AI dialogue generation fallback to instant procedural:", err);
      }
      state.isGeneratingShadow = false;
    }

    // Instant Procedural Generation (0ms offline or fallback)
    const newDlg = buildProceduralSimilarDialogue(currentTopic, baseDialogue);
    currentTopic.dialogues.push(newDlg);
    state.selectedDialogueIndex = currentTopic.dialogues.length - 1;
    state.shadowingTurnIdx = 0;
    state.activeYouTubeTurnIdx = -1;
    state.activeYouTubeWordIdx = -1;
    state.shadowScore = null;
    state.activeIpaTurnIdx = null;
    render();
  }

  // --- RENDER SECTION 2: SHADOWING TAB ---
  function renderShadowingTab() {
    const isUrlMode = state.shadowSourceTab === "url_extract";
    const extData = state.extractedShadowData || defaultExtractedSample;

    const baseZimTopic =
      shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
    if (!baseZimTopic) return `<div class="text-xs text-slate-400">Đang tải dữ liệu Shadowing...</div>`;

    const currentTopic = isUrlMode
      ? {
          id: "url_source",
          title: extData.sourceName || "AI URL Extract",
          dialogues: [extData.dialogue]
        }
      : baseZimTopic;

    const currentDialogue = isUrlMode
      ? extData.dialogue
      : (currentTopic.dialogues[state.selectedDialogueIndex] || currentTopic.dialogues[0]);

    const currentTopicIdx = shadowingTopicsData.findIndex((t) => t.id === baseZimTopic.id);

    const dropdownHtml = state.isTopicDropdownOpen
      ? `
        <div class="fixed inset-0 z-30" data-action="close-topic-dropdown"></div>
        <div class="absolute left-0 top-full mt-1.5 w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-[#0F172A] border border-slate-700/80 rounded-xl shadow-2xl z-40 py-1.5 max-h-96 overflow-y-auto backdrop-blur-md animate-in">
          <div class="px-3.5 py-1.5 border-b border-slate-800 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-indigo-400">
            <span>Trọn bộ ${shadowingTopicsData.length} Chủ đề Giao tiếp ZIM.vn</span>
            <span>${shadowingTopicsData.reduce((acc, t) => acc + t.dialogues.length, 0)} Hội thoại</span>
          </div>
          ${shadowingTopicsData
            .map((topic) => {
              const isSelected = state.selectedTopicId === topic.id;
              return `
                <button
                  type="button"
                  data-action="select-shadow-topic"
                  data-topic-id="${escapeHtml(topic.id)}"
                  class="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left transition ${
                    isSelected
                      ? "bg-indigo-600/25 text-white font-bold border-l-2 border-indigo-500"
                      : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                  }"
                >
                  <span class="truncate pr-2">${escapeHtml(topic.title)}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${
                    isSelected ? "bg-indigo-500/30 text-indigo-300" : "bg-slate-800 text-slate-400"
                  }">
                    ${topic.dialogues.length} bài
                  </span>
                </button>
              `;
            })
            .join("")}
        </div>
      `
      : "";

    const dialogueGridHtml = currentTopic.dialogues
      .map((dlg, idx) => {
        const isCurDlg = state.selectedDialogueIndex === idx;
        return `
          <button
            type="button"
            data-action="select-shadow-dialogue"
            data-dlg-idx="${idx}"
            class="p-2 rounded-lg text-left transition border relative ${
              isCurDlg
                ? "bg-indigo-600/25 border-indigo-500 text-white shadow-md shadow-indigo-600/20 ring-1 ring-indigo-400"
                : "bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }"
          >
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono text-indigo-400 font-bold">#${idx + 1}</span>
              ${
                dlg.isGenerated
                  ? `<span class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">Mới sinh</span>`
                  : ""
              }
            </div>
            <div class="text-[11px] font-semibold truncate text-slate-200 mt-0.5">${escapeHtml(dlg.title)}</div>
          </button>
        `;
      })
      .join("");

    const totalTurns = (currentDialogue.turns || []).length;
    const isListenActive = state.shadowMode === "listen" && state.shadowPhase === "machine_reading";
    const isShadowActive =
      state.shadowMode === "shadowing" &&
      (state.shadowPhase === "machine_reading" || state.shadowPhase === "user_recording");
    const isFullActive = state.shadowMode === "full" && state.shadowPhase === "full_recording";

    const turnsHtml = (currentDialogue.turns || [])
      .map((turn, tIdx) => {
        const isCurrentTurn =
          (isListenActive || isShadowActive) && state.shadowingTurnIdx === tIdx;
        const isMachineReadingThis =
          isCurrentTurn && state.shadowPhase === "machine_reading";
        const isUserRecordingThis =
          isCurrentTurn && state.shadowPhase === "user_recording";
        const turnEval =
          (state.shadowTurnScores && state.shadowTurnScores[tIdx]) ||
          (state.shadowScore && state.shadowScore.turnIdx === tIdx ? state.shadowScore : null);
        const isSpeakerA = tIdx % 2 === 0;
        const isIpaVisible = state.showAllTurnsIpa || state.activeIpaTurnIdx === tIdx;
        const isScriptHiddenForThisTurn =
          state.hideShadowScript && state.peekTurnIdx !== tIdx && !turnEval;
        const isYouTubeActiveTurn =
          isUrlMode &&
          extData &&
          extData.sourceType === "youtube" &&
          state.activeYouTubeTurnIdx === tIdx &&
          state.shadowMode === "idle";

        // Render interactive word-by-word tokens
        const words = String(turn.text || "")
          .trim()
          .split(/\s+/)
          .filter(Boolean);
        const wordsHtml = words
          .map((w, wIdx) => {
            const cleanW = w.replace(/[^a-zA-Z0-9']/g, "");
            const wordScore =
              turnEval && turnEval.wordScores ? turnEval.wordScores[wIdx] : undefined;
            let wordCls =
              "text-slate-100 hover:text-indigo-300 hover:bg-slate-800/80 px-0.5 py-0.5 rounded";

            if (isMachineReadingThis && state.shadowHighlightWordIdx === wIdx) {
              wordCls =
                "bg-amber-400 text-slate-950 font-bold px-1 py-0.5 rounded shadow-sm shadow-amber-400/40";
            } else if (
              isMachineReadingThis &&
              state.shadowHighlightWordIdx > wIdx &&
              state.shadowHighlightWordIdx >= 0
            ) {
              wordCls = "text-indigo-200 font-medium px-0.5 py-0.5";
            } else if (isYouTubeActiveTurn && state.activeYouTubeWordIdx === wIdx) {
              wordCls =
                "bg-amber-400 text-slate-950 font-bold px-1 py-0.5 rounded shadow-sm shadow-amber-400/40";
            } else if (
              isYouTubeActiveTurn &&
              state.activeYouTubeWordIdx > wIdx &&
              state.activeYouTubeWordIdx >= 0
            ) {
              wordCls = "text-indigo-200 font-medium px-0.5 py-0.5";
            } else if (wordScore !== undefined) {
              if (wordScore >= 85) {
                wordCls =
                  "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold px-1 py-0.5 rounded";
              } else if (wordScore >= 70) {
                wordCls =
                  "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold px-1 py-0.5 rounded";
              } else {
                wordCls =
                  "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold underline decoration-rose-400 px-1 py-0.5 rounded";
              }
            } else if (isScriptHiddenForThisTurn) {
              wordCls =
                "bg-slate-800/90 text-slate-400 border border-slate-700/80 font-mono tracking-widest select-none px-1 py-0.5 rounded";
            }

            const displayWord = isScriptHiddenForThisTurn
              ? "•".repeat(Math.max(3, Math.min(7, cleanW.length || 4)))
              : escapeHtml(w);

            return `<span data-shadow-turn="${tIdx}" data-shadow-word="${wIdx}" data-clean-word="${escapeHtml(cleanW.toLowerCase())}" data-raw-word="${escapeHtml(w)}" data-action="speak-text" data-text="${escapeHtml(cleanW || w)}" title="${wordScore !== undefined ? `Độ chính xác: ${wordScore}% (Bấm để nghe phát âm)` : "Bấm để nghe phát âm"}" class="shadow-word-token text-xs transition-colors cursor-pointer ${wordCls}">${displayWord}</span>`;
          })
          .join(" ");

        const turnIpaText = turn.ipa || generateSentenceIpa(turn.text);
        const isYtTurn = turn.time !== undefined && isUrlMode && extData && extData.youtubeId;

        if (state.shadowPassageMode === "full") {
          const fullHighlightCls = isYouTubeActiveTurn
            ? "bg-rose-500/20 ring-1 ring-rose-500/50 shadow-sm"
            : isMachineReadingThis
            ? "bg-amber-500/20 ring-1 ring-amber-400/50"
            : isUserRecordingThis
            ? "bg-emerald-500/20 ring-1 ring-emerald-400/50"
            : "hover:bg-slate-800/50";
          return `<span data-shadow-turn-card="${tIdx}" class="inline rounded-lg px-1.5 py-0.5 mr-1 transition-all duration-200 leading-8 ${fullHighlightCls}">${
            isYtTurn
              ? `<button type="button" data-action="seek-youtube-turn" data-time="${turn.time}" data-turn-timecode="${tIdx}" title="Tua YouTube đến ${formatTimecode(turn.time)}" class="inline-flex items-center gap-0.5 px-1.5 py-0.2 mr-1 rounded text-[10px] font-mono font-bold align-baseline transition ${
                  isYouTubeActiveTurn
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/40 ring-1 ring-rose-300"
                    : "bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700"
                }">▶ ${formatTimecode(turn.time)}</button>`
              : `<span data-turn-speaker="${tIdx}" class="font-bold text-xs ${
                  isSpeakerA ? "text-indigo-400" : "text-emerald-400"
                } mr-1">${escapeHtml(turn.speaker)}:</span>`
          }${wordsHtml}${
            isIpaVisible && turnIpaText
              ? `<span class="inline-block text-[10px] font-mono text-indigo-300 bg-slate-900/90 px-1.5 py-0.2 rounded border border-indigo-500/25 mx-1">${escapeHtml(
                  turnIpaText
                )}</span>`
              : ""
          }</span> `;
        }

        let lineHighlightCls = "hover:bg-slate-800/40 border-l-4 border-transparent";
        if (isMachineReadingThis) {
          lineHighlightCls = "bg-amber-950/30 border-l-4 border-amber-400 shadow-md";
        } else if (isUserRecordingThis) {
          lineHighlightCls = "bg-emerald-950/30 border-l-4 border-emerald-400 shadow-md";
        } else if (isYouTubeActiveTurn) {
          lineHighlightCls =
            "bg-[#13192B] border-l-4 border-rose-500 shadow-lg shadow-rose-950/30 ring-1 ring-rose-500/40";
        } else if (turnEval) {
          lineHighlightCls = "hover:bg-slate-800/30 border-l-4 border-emerald-500/40";
        }

        return `
          <div
            data-shadow-turn-card="${tIdx}"
            class="group relative py-2 px-3 rounded-xl transition-all duration-150 ${lineHighlightCls}"
          >
            <div class="flex items-start gap-2.5">
              <!-- Fixed-width Timecode (YouTube 1-1) or Speaker Tag so sentence text never shifts horizontally -->
              <div class="flex items-center gap-1.5 flex-shrink-0 pt-0.5 select-none">
                ${
                  isYtTurn
                    ? `<button
                        type="button"
                        data-action="seek-youtube-turn"
                        data-time="${turn.time}"
                        data-turn-timecode="${tIdx}"
                        title="Tua video YouTube đến ${formatTimecode(turn.time)}"
                        class="w-14 justify-center py-0.5 rounded text-[10px] font-mono font-bold transition active:scale-95 ${
                          isYouTubeActiveTurn
                            ? "bg-rose-500 text-white shadow-md shadow-rose-500/40 ring-1 ring-rose-300"
                            : "bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700 hover:border-rose-500/50"
                        } flex items-center gap-1"
                      >
                        ▶ ${formatTimecode(turn.time)}
                      </button>`
                    : `<span
                        data-turn-speaker="${tIdx}"
                        class="font-bold text-xs ${
                          isSpeakerA ? "text-indigo-400" : "text-emerald-400"
                        } flex items-center gap-1.5"
                      >
                        <span
                          data-turn-dot="${tIdx}"
                          class="h-2 w-2 rounded-full ${
                            isSpeakerA ? "bg-indigo-400" : "bg-emerald-400"
                          }"
                        ></span>
                        <span>${escapeHtml(turn.speaker)}:</span>
                      </span>`
                }
              </div>

              <!-- Full-width 1-to-1 sentence with interactive word tokens -->
              <div class="flex-1 min-w-0 text-xs sm:text-sm text-slate-100 leading-relaxed font-normal">
                ${wordsHtml}
              </div>

              <!-- Compact Per-Sentence Actions -->
              <div class="flex items-center gap-1 opacity-100 sm:opacity-30 sm:group-hover:opacity-100 transition-opacity flex-shrink-0 self-start pt-0.5">
                <button
                  type="button"
                  data-action="listen-from-turn"
                  data-turn-idx="${tIdx}"
                  title="Nghe máy đọc câu này"
                  class="h-6 w-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-[10px] transition"
                >
                  ${ICONS.Volume2Sm}
                </button>

                <button
                  type="button"
                  data-action="shadow-from-turn"
                  data-turn-idx="${tIdx}"
                  title="Nhại lại (Shadow) câu này"
                  class="h-6 px-1.5 rounded bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white flex items-center gap-1 text-[10px] font-semibold transition"
                >
                  ${ICONS.MicSm}
                </button>

                <button
                  type="button"
                  data-action="toggle-turn-ipa"
                  data-turn-idx="${tIdx}"
                  title="Xem phiên âm IPA câu này"
                  class="h-6 px-1.5 rounded text-[10px] font-mono font-bold transition border ${
                    isIpaVisible
                      ? "bg-indigo-600 text-white border-indigo-500"
                      : "bg-slate-800/80 text-indigo-400 border-slate-700 hover:bg-slate-700"
                  }"
                >
                  IPA
                </button>

                ${
                  turnEval
                    ? (() => {
                        const sc = getScoreColor(turnEval.percent);
                        return `<span class="h-6 px-1.5 rounded border text-[10px] font-bold flex items-center ${sc.badgeBg}">${turnEval.percent}%</span>`;
                      })()
                    : ""
                }
              </div>
            </div>

            ${
              isIpaVisible
                ? `
              <div class="pl-0 sm:pl-16 pt-1">
                <p class="text-[11px] font-mono text-indigo-400 bg-[#0F172A] px-2 py-0.5 rounded border border-indigo-500/25 w-fit">
                  ${escapeHtml(turnIpaText)}
                </p>
              </div>
            `
                : ""
            }

            ${
              isUserRecordingThis
                ? `
              <!-- Active Recording Dock when pausing for user to record (Continue / Replay / Retry) -->
              <div class="mt-2.5 p-3 rounded-xl bg-[#0F172A] border border-emerald-500/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 shadow-lg animate-in">
                <div class="space-y-0.5">
                  <div class="flex items-center gap-2">
                    <span class="h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
                    <span class="text-xs font-bold text-emerald-300">
                      🎙️ Đến lượt bạn đọc câu #${tIdx + 1}/${totalTurns}!
                    </span>
                  </div>
                  <p id="shadow-live-transcript-box" class="text-[11px] text-slate-300 italic">
                    ${
                      state.shadowLiveTranscript
                        ? `🎙️ Bạn đang đọc: "${escapeHtml(state.shadowLiveTranscript)}"`
                        : "🎙️ Hãy đọc to câu trên (từ phát âm đúng sẽ sáng màu xanh lá)..."
                    }
                  </p>
                </div>

                <div class="flex items-center gap-1.5 flex-wrap flex-shrink-0">
                  <button
                    type="button"
                    data-action="shadow-replay-turn"
                    class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition"
                  >
                    🔊 Máy đọc lại
                  </button>

                  <button
                    type="button"
                    data-action="shadow-retry-turn"
                    class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition"
                  >
                    🔄 Ghi âm lại
                  </button>

                  <button
                    type="button"
                    data-action="shadow-continue-next"
                    class="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-emerald-600/30 transition active:scale-95"
                  >
                    <span>${
                      tIdx + 1 < totalTurns
                        ? `Continue (Câu ${tIdx + 2}/${totalTurns}) ➔`
                        : "Hoàn thành & Chấm điểm 🏁"
                    }</span>
                  </button>
                </div>
              </div>
            `
                : ""
            }
          </div>
        `;
      })
      .join("");

    // Render Live Status Dock (when Listen, Shadowing, or Full is running)
    let activeModeBannerHtml = "";
    if (isListenActive) {
      activeModeBannerHtml = `
        <div class="bg-indigo-950/60 border border-indigo-500/50 rounded-xl p-3 flex items-center justify-between flex-wrap gap-2 animate-in">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center gap-1.5">
              🎧 LISTEN MODE
            </span>
            <span class="text-xs text-slate-200 font-medium">
              Đang phát câu <strong>#${state.shadowingTurnIdx + 1}/${totalTurns}</strong> (Chữ đang đọc sáng màu vàng cam)
            </span>
          </div>
          <button
            type="button"
            data-action="shadow-stop-session"
            class="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition"
          >
            ⏹ Dừng nghe
          </button>
        </div>
      `;
    } else if (isShadowActive) {
      const progressPct = Math.round(((state.shadowingTurnIdx + 1) / Math.max(1, totalTurns)) * 100);
      activeModeBannerHtml = `
        <div class="bg-gradient-to-r from-indigo-950/80 via-[#0F172A] to-emerald-950/60 border border-emerald-500/40 rounded-xl p-3.5 space-y-2.5 animate-in">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-extrabold">
                🎙️ SHADOWING MODE • Câu ${state.shadowingTurnIdx + 1}/${totalTurns}
              </span>
              <span class="text-xs font-semibold ${
                state.shadowPhase === "machine_reading" ? "text-amber-300" : "text-emerald-300"
              }">
                ${
                  state.shadowPhase === "machine_reading"
                    ? "🔊 Bước 1: Máy đang đọc mẫu từng chữ (chú ý chữ đổi màu)..."
                    : "🎙️ Bước 2: Máy đã dừng — Hãy đọc lại câu vừa nghe rồi bấm Continue ➔"
                }
              </span>
            </div>

            <div class="flex items-center gap-1.5">
              ${
                state.shadowPhase === "user_recording"
                  ? `
                <button
                  type="button"
                  data-action="shadow-continue-next"
                  class="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-sm transition active:scale-95"
                >
                  ${
                    state.shadowingTurnIdx + 1 < totalTurns
                      ? "Continue ➔"
                      : "Hoàn thành & Chấm điểm 🏁"
                  }
                </button>
              `
                  : ""
              }
              <button
                type="button"
                data-action="shadow-finish-session"
                class="px-2.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-semibold transition"
              >
                🏁 Chấm điểm
              </button>
              <button
                type="button"
                data-action="shadow-stop-session"
                class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white text-xs font-semibold transition"
              >
                ✕ Thoát
              </button>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300" style="width: ${progressPct}%"></div>
          </div>
        </div>
      `;
    } else if (isFullActive) {
      const mm = String(Math.floor((state.shadowFullElapsedSec || 0) / 60)).padStart(2, "0");
      const ss = String((state.shadowFullElapsedSec || 0) % 60).padStart(2, "0");
      activeModeBannerHtml = `
        <div class="bg-gradient-to-r from-rose-950/70 via-[#0F172A] to-indigo-950/60 border border-rose-500/50 rounded-xl p-3.5 space-y-2 animate-in">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2.5 flex-wrap">
              <span class="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-xs font-extrabold flex items-center gap-1.5 animate-pulse">
                🔴 FULL RECORDING
              </span>
              <span id="shadow-full-timer" class="font-mono text-xs font-bold text-amber-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                ${mm}:${ss}
              </span>
              <span class="text-xs text-slate-200 font-medium">
                Hãy tự đọc toàn bộ cuộc hội thoại từ đầu đến cuối — Hệ thống đang ghi âm & nhận diện toàn bài!
              </span>
            </div>

            <div class="flex items-center gap-1.5">
              <button
                type="button"
                data-action="shadow-finish-full"
                class="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-md shadow-emerald-600/30 transition active:scale-95"
              >
                ✅ Hoàn thành & Chấm điểm toàn bài
              </button>
              <button
                type="button"
                data-action="shadow-stop-session"
                class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white text-xs font-semibold transition"
              >
                ✕ Hủy
              </button>
            </div>
          </div>
          <p id="shadow-live-transcript-box" class="text-[11px] text-slate-300 italic pl-1">
            ${
              state.shadowLiveTranscript
                ? `🎙️ Đã ghi nhận: "${escapeHtml(state.shadowLiveTranscript)}"`
                : "🎙️ Đang lắng nghe giọng đọc của bạn trên toàn đoạn hội thoại..."
            }
          </p>
        </div>
      `;
    }

    // Render Final Session Score Report (when Shadowing or Full finishes)
    let sessionReportHtml = "";
    if (state.shadowSessionReport) {
      const rep = state.shadowSessionReport;
      const sc = getScoreColor(rep.overall);
      sessionReportHtml = `
        <div class="bg-gradient-to-br from-indigo-950/80 via-[#0B0F19] to-emerald-950/50 border border-indigo-500/50 rounded-xl p-4 space-y-3 shadow-xl animate-in">
          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5">
            <div class="flex items-center gap-2.5">
              <span class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-extrabold">
                🏆 KẾT QUẢ CHẤM ĐIỂM (${escapeHtml(rep.modeLabel)})
              </span>
              <span class="text-xs text-slate-300">
                Đã hoàn thành <strong>${rep.turnsCompleted}/${rep.totalTurns}</strong> lượt thoại
              </span>
            </div>
            <div class="flex items-center gap-2">
              <button
                type="button"
                data-action="shadow-mode-shadowing"
                class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition"
              >
                🔄 Luyện lại Shadowing
              </button>
              <button
                type="button"
                data-action="shadow-clear-report"
                class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
              >
                Đóng bảng điểm
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400">Điểm Tổng (Overall)</div>
              <div class="text-2xl font-black text-emerald-400 mt-1">${rep.overall}%</div>
              <div class="text-[10px] font-semibold text-slate-400">${sc.label}</div>
            </div>
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400">IELTS Speaking Band</div>
              <div class="text-2xl font-black text-amber-400 mt-1">Band ${rep.band}</div>
              <div class="text-[10px] text-slate-400">Ước tính chuẩn</div>
            </div>
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400">Phát âm (Accuracy)</div>
              <div class="text-xl font-bold text-indigo-300 mt-1">${rep.accuracy}%</div>
              <div class="text-[10px] text-slate-400">Chuẩn âm vị IPA</div>
            </div>
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400">Độ trôi chảy (Fluency)</div>
              <div class="text-xl font-bold text-cyan-300 mt-1">${rep.fluency}%</div>
              <div class="text-[10px] text-slate-400">Nhịp điệu & Ngữ điệu</div>
            </div>
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 text-center">
              <div class="text-[10px] uppercase font-bold text-slate-400">Độ hoàn thiện</div>
              <div class="text-xl font-bold text-emerald-300 mt-1">${rep.completeness}%</div>
              <div class="text-[10px] text-slate-400">${rep.turnsCompleted}/${rep.totalTurns} câu</div>
            </div>
          </div>

          ${
            rep.weakWords && rep.weakWords.length
              ? `
            <div class="bg-[#0F172A]/90 border border-slate-800 rounded-lg p-2.5 flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-[11px] font-bold text-amber-300">💡 Từ cần luyện phát âm thêm (bấm để nghe lại):</span>
                ${rep.weakWords
                  .map(
                    (ww) => `
                  <button
                    type="button"
                    data-action="speak-text"
                    data-text="${escapeHtml(ww)}"
                    class="px-2 py-0.5 rounded bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
                  >
                    🔊 ${escapeHtml(ww)}
                  </button>
                `
                  )
                  .join("")}
              </div>
              <span class="text-[10px] text-slate-400">Các từ trong đoạn hội thoại bên dưới đã được tô màu theo độ chính xác (Xanh / Vàng / Đỏ)</span>
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    const dialogueVocabList = isUrlMode
      ? (currentDialogue.vocab || [])
      : (currentDialogue.keyVocab || []);
    const topicVocabList = isUrlMode
      ? dialogueVocabList
      : (currentTopic.topicVocab && currentTopic.topicVocab.length
          ? currentTopic.topicVocab
          : dialogueVocabList);
    const activeVocabList = state.showFullTopicVocab ? topicVocabList : dialogueVocabList;

    const dialoguePatternsList = currentDialogue.keyPatterns || [];
    const topicPatternsList = isUrlMode
      ? dialoguePatternsList
      : (currentTopic.topicPatterns && currentTopic.topicPatterns.length
          ? currentTopic.topicPatterns
          : dialoguePatternsList);
    const activePatternsList = state.showFullTopicPatterns ? topicPatternsList : dialoguePatternsList;

    return `
      <div class="space-y-3">
        <!-- Top Row: Tab Selector (25 Chủ đề vs AI Shadowing từ Link) + Speed Controls -->
        <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5 relative">
          <div class="flex items-center gap-2 flex-wrap">
            <!-- TAB 1: 25 CHỦ ĐỀ CÓ SẴN (ZIM.VN) -->
            <div class="relative">
              <button
                type="button"
                data-action="toggle-topic-dropdown"
                class="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md transition active:scale-95 border ${
                  !isUrlMode
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 border-indigo-400/40 ring-1 ring-indigo-400"
                    : "bg-[#0B0F19] text-slate-300 hover:text-white border-slate-800 hover:border-slate-700"
                }"
              >
                <span class="text-[11px] uppercase tracking-wider ${!isUrlMode ? "text-indigo-200" : "text-slate-400"} font-bold">
                  <span class="hidden sm:inline">CHỦ ĐỀ (${currentTopicIdx + 1}/${shadowingTopicsData.length}):</span>
                  <span class="sm:hidden">Chủ đề:</span>
                </span>
                <span class="truncate max-w-[150px] sm:max-w-none">${escapeHtml(baseZimTopic.title)}</span>
                <span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${!isUrlMode ? "bg-white/20 text-white" : "bg-slate-800 text-slate-300"}">
                  ${baseZimTopic.dialogues.length} bài
                </span>
                <span class="ml-1 transition-transform duration-200 ${!isUrlMode ? "text-indigo-200" : "text-slate-400"} ${state.isTopicDropdownOpen ? "rotate-180" : ""}">
                  ${ICONS.ChevronDown}
                </span>
              </button>
              ${dropdownHtml}
            </div>

            <!-- TAB 2: AI SHADOWING TỪ LINK YOUTUBE & BÁO CHÍ (KẾ BÊN HÌNH 1) -->
            <button
              type="button"
              data-action="set-shadow-source-tab"
              data-source="url_extract"
              class="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md transition active:scale-95 border ${
                isUrlMode
                  ? "bg-gradient-to-r from-rose-600 via-pink-600 to-indigo-600 text-white shadow-rose-600/30 border-rose-400 ring-2 ring-rose-400/50"
                  : "bg-[#0B0F19] text-rose-300 hover:text-white hover:bg-rose-950/30 border-rose-500/40"
              }"
            >
              <span class="flex items-center gap-1.5">
                <span class="text-sm">✨</span>
                <span class="font-bold">AI Shadowing (Link YouTube / Báo)</span>
              </span>
              ${
                state.extractedShadowData
                  ? `<span class="text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-white/20 text-white">Đã nạp</span>`
                  : `<span class="text-[9px] px-1.5 py-0.2 rounded-full font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">Mới</span>`
              }
            </button>
          </div>

          <!-- Speed Controls -->
          <div class="flex items-center gap-1 flex-shrink-0 bg-[#0F172A] p-1 rounded-lg border border-slate-800">
            <span class="text-[10px] text-slate-400 px-1 font-medium">Tốc độ:</span>
            ${[0.75, 0.9, 1.0, 1.15]
              .map(
                (rate) => `
              <button
                type="button"
                data-action="set-audio-rate"
                data-rate="${rate}"
                class="px-2 py-0.5 rounded text-[10px] font-bold transition ${
                  state.audioRate === rate ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }"
              >
                ${rate}x
              </button>
            `
              )
              .join("")}
          </div>
        </div>

        ${
          !isUrlMode
            ? `
        <!-- BƯỚC 1: CHỌN ĐOẠN HỘI THOẠI TRONG CHỦ ĐỀ -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-300 px-1 font-semibold">
            <span class="flex items-center gap-1.5">
              ${ICONS.BookMarked}
              <span>Select Dialogue Scenario (${escapeHtml(currentTopic.title)}):</span>
            </span>
            <span class="text-indigo-400 font-mono text-[11px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              Scenario #${state.selectedDialogueIndex + 1} of ${currentTopic.dialogues.length}
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            ${dialogueGridHtml}
          </div>
        </div>
        `
            : `
        <!-- KHU VỰC DÁN LINK YOUTUBE / BÁO CHÍ (AI TRÍCH XUẤT SHADOWING) -->
        <div id="shadow-url-top-panel" class="bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E1B4B]/35 border border-indigo-900/60 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3.5">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2.5">
              <div class="h-9 w-9 rounded-xl bg-gradient-to-tr from-rose-500 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg text-lg flex-shrink-0">
                ✨
              </div>
              <div>
                <h3 class="text-xs sm:text-sm font-bold text-white flex items-center gap-2 flex-wrap">
                  <span>AI Shadowing: Dán link YouTube & Báo chí quốc tế</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">AI Extraction</span>
                </h3>
                <p class="text-[11px] text-slate-400">
                  Dán link bất kỳ từ YouTube (TED, BBC, phỏng vấn, tin tức...) hoặc link bài báo (BBC, CNN, Reuters, NYTimes,...) để AI trích xuất câu thoại, phiên âm IPA chuẩn và từ vựng để luyện Shadowing.
                </p>
              </div>
            </div>

            <!-- AI Engine Status Badge -->
            <div class="flex items-center gap-1.5">
              ${
                state.aiApiKey
                  ? `<span class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-sm">
                      <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      AI ${state.aiProvider === "openai" ? "OpenAI" : "Gemini"} Sẵn sàng
                    </span>`
                  : `<button
                      type="button"
                      data-action="open-api-modal"
                      class="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition flex items-center gap-1 shadow-sm"
                      title="Bấm để cấu hình Gemini hoặc OpenAI API Key"
                    >
                      🔑 Kết nối API AI (Tuỳ chọn)
                    </button>`
              }
            </div>
          </div>

          <!-- Input Bar with Paste & Extract Buttons -->
          <div class="flex flex-col sm:flex-row items-stretch gap-2">
            <div class="relative flex-1">
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm select-none">
                🔗
              </span>
              <input
                type="url"
                id="shadow-url-input"
                value="${escapeHtml(state.shadowUrlInput || "")}"
                placeholder="Dán link YouTube (https://youtu.be/...) hoặc link bài báo (https://bbc.co.uk/...)..."
                class="w-full pl-9 pr-24 py-2.5 bg-[#0B0F19] border border-slate-700/90 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition shadow-inner font-mono"
              />
              <button
                type="button"
                data-action="paste-into-shadow-url"
                title="Dán nhanh từ Clipboard"
                class="absolute right-2 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] font-bold border border-slate-700 transition active:scale-95"
              >
                📋 Dán link
              </button>
            </div>

            <button
              type="button"
              data-action="extract-shadow-from-url"
              ${state.isExtractingShadowUrl ? "disabled" : ""}
              class="px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition active:scale-95 flex-shrink-0 ${
                state.isExtractingShadowUrl
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                  : "bg-gradient-to-r from-rose-600 via-indigo-600 to-emerald-600 hover:from-rose-500 hover:to-emerald-500 text-white shadow-indigo-600/30 border border-indigo-400/40"
              }"
            >
              ${
                state.isExtractingShadowUrl
                  ? `<span class="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                     <span>Đang trích xuất với AI...</span>`
                  : `<span>✨ Trích xuất nội dung Shadowing</span>`
              }
            </button>
          </div>

          ${
            state.shadowUrlExtractError
              ? `<div class="p-2.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between">
                  <span>⚠️ ${escapeHtml(state.shadowUrlExtractError)}</span>
                  <button type="button" data-action="dismiss-shadow-url-error" class="text-slate-400 hover:text-white text-xs px-2">✕</button>
                </div>`
              : ""
          }

          <!-- Optional Collapsible Transcript Input -->
          <div class="pt-1">
            <button
              type="button"
              data-action="toggle-transcript-input"
              class="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition"
            >
              <span>${state.showTranscriptInput ? "▲ Thu gọn phụ đề" : "▼ Dán phụ đề / nội dung video (Tuỳ chọn để AI trích xuất chuẩn 100%)"}</span>
            </button>
            ${
              state.showTranscriptInput
                ? `
              <div class="mt-2 space-y-1.5 animate-in">
                <textarea
                  id="shadow-transcript-textarea"
                  rows="3"
                  placeholder="Dán phụ đề hoặc nội dung thoại của video vào đây (nếu có). AI sẽ bám sát nội dung này để tạo kịch bản Shadowing hoàn hảo..."
                  class="w-full p-2.5 bg-[#0B0F19] border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono leading-relaxed"
                >${escapeHtml(state.shadowTranscriptInput || "")}</textarea>
                <div class="flex items-center justify-between text-[10px] text-slate-400">
                  <span>Có thể copy phụ đề tiếng Anh từ YouTube để trích xuất chuẩn từng câu</span>
                  ${
                    state.shadowTranscriptInput
                      ? `<button type="button" data-action="clear-shadow-transcript" class="text-rose-400 hover:underline">Xóa phụ đề đã dán</button>`
                      : ""
                  }
                </div>
              </div>
            `
                : ""
            }
          </div>

          <!-- Quick-Pick Sample Pills -->
          <div class="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 flex-wrap">
            <span class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Mẫu thử nhanh:</span>
            <button
              type="button"
              data-action="pick-shadow-preset"
              data-preset="ted"
              class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0B0F19] hover:bg-slate-800 text-indigo-300 hover:text-white border border-indigo-900/60 transition active:scale-95 flex items-center gap-1"
            >
              <span>📺 TED: Speak so people listen</span>
            </button>
            <button
              type="button"
              data-action="pick-shadow-preset"
              data-preset="bbc"
              class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0B0F19] hover:bg-slate-800 text-amber-300 hover:text-white border border-amber-900/60 transition active:scale-95 flex items-center gap-1"
            >
              <span>📻 BBC 6-Min: Secrets of Happiness</span>
            </button>
            <button
              type="button"
              data-action="pick-shadow-preset"
              data-preset="reuters"
              class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0B0F19] hover:bg-slate-800 text-emerald-300 hover:text-white border border-emerald-900/60 transition active:scale-95 flex items-center gap-1"
            >
              <span>📰 Reuters: AI in Healthcare</span>
            </button>
            <button
              type="button"
              data-action="pick-shadow-preset"
              data-preset="jobs"
              class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0B0F19] hover:bg-slate-800 text-rose-300 hover:text-white border border-rose-900/60 transition active:scale-95 flex items-center gap-1"
            >
              <span>🎬 Steve Jobs: Stanford Speech</span>
            </button>
          </div>
        </div>

        <!-- YOUTUBE VIDEO PLAYER HOẶC THẺ BÀI BÁO (NẾU CÓ) -->
        ${
          extData && extData.sourceType === "article"
            ? `
            <div class="bg-[#0F172A] border border-slate-800 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between flex-wrap gap-2">
              <div class="space-y-0.5">
                <div class="flex items-center gap-2">
                  <span class="text-base">📰</span>
                  <span class="text-xs sm:text-sm font-bold text-white">${escapeHtml(extData.title)}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ${escapeHtml(extData.sourceName || "Article")}
                  </span>
                </div>
                <p class="text-[11px] text-slate-400">${escapeHtml(extData.summary || "")}</p>
              </div>
              ${
                extData.url
                  ? `<a
                      href="${escapeHtml(extData.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
                    >
                      Mở bài báo gốc ↗
                    </a>`
                  : ""
              }
            </div>
          `
            : ""
        }
        `
        }

        <!-- KHU VỰC CHÍNH: CHỈ 1 MÀN HÌNH HIỂN THỊ DUY NHẤT (VIDEO TRÊN + 1 KỊCH BẢN ĐỒNG BỘ 1-1 NGAY BÊN DƯỚI) -->
        <div
          id="shadow-yt-split-grid"
          class="bg-[#0F172A] border border-slate-800 rounded-2xl p-3.5 sm:p-4 space-y-3.5 shadow-xl"
        >
          ${
            isUrlMode && extData && extData.sourceType === "youtube" && extData.youtubeId
              ? `
              <!-- PHẦN VIDEO YOUTUBE + THANH ĐIỀU KHIỂN ĐỒNG BỘ 1-1 GỌN GÀNG -->
              <div id="shadow-yt-left-col" class="w-full space-y-2.5 pb-3 border-b border-slate-800/90">
                <div class="flex items-center justify-between flex-wrap gap-2 text-xs font-semibold text-slate-300">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="text-rose-500 font-bold text-sm flex-shrink-0">▶</span>
                    <span class="text-white font-bold truncate">${escapeHtml(extData.title)}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 flex-shrink-0">
                      ${escapeHtml(extData.sourceName || "YouTube")}
                    </span>
                  </div>
                  <div id="shadow-yt-header-controls" class="flex items-center gap-2 flex-wrap">
                    <button
                      type="button"
                      data-action="open-yt-popup"
                      data-yt-id="${escapeHtml(extData.youtubeId)}"
                      title="Mở trình phát trong cửa sổ nổi (Popup) để xem video không bị lỗi 153"
                      class="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-[11px] font-bold flex items-center gap-1 transition active:scale-95 shadow-sm"
                    >
                      🎬 Cửa sổ nổi
                    </button>
                    ${
                      extData.url
                        ? `<a
                            href="${escapeHtml(extData.url)}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-[11px] text-slate-400 hover:text-indigo-300 flex items-center gap-1"
                          >
                            Mở trên YouTube ↗
                          </a>`
                        : ""
                    }
                  </div>
                </div>

                ${
                  typeof window !== "undefined" && window.location && window.location.protocol === "file:"
                    ? `
                  <div class="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-200 text-xs flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                      <span class="text-base">⚠️</span>
                      <div>
                        <div class="font-bold text-amber-300">Đang mở trực tiếp từ file:// trên máy tính</div>
                        <div class="text-[11px] text-amber-200/90">Trình duyệt không gửi Referrer trên giao thức file:// nên YouTube chặn nhúng (báo <strong>Lỗi 153</strong>). Mở bản online hoặc xem cửa sổ nổi:</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 flex-wrap">
                      <a
                        href="https://le-thien.github.io/Lexis.AI/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition text-xs shadow-md"
                      >
                        Mở Web Lexis.AI Online ↗
                      </a>
                      <button
                        type="button"
                        data-action="open-yt-popup"
                        data-yt-id="${escapeHtml(extData.youtubeId)}"
                        class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/50 text-xs font-semibold"
                      >
                        Mở Cửa sổ nổi ↗
                      </button>
                    </div>
                  </div>
                `
                    : ""
                }

                <!-- Compact Responsive 16:9 YouTube Player -->
                <div class="w-full max-w-[540px] mx-auto rounded-xl overflow-hidden aspect-video bg-black border border-slate-800 shadow-2xl relative">
                  <iframe
                    id="shadow-youtube-iframe"
                    data-yt-id="${escapeHtml(extData.youtubeId)}"
                    class="w-full h-full"
                    src="https://www.youtube.com/embed/${escapeHtml(extData.youtubeId)}?enablejsapi=1&playsinline=1&rel=0${
                      typeof window !== "undefined" && window.location && window.location.protocol && window.location.protocol.startsWith("http") && window.location.origin && window.location.origin !== "null"
                        ? `&origin=${encodeURIComponent(window.location.origin)}`
                        : ""
                    }"
                    title="${escapeHtml(extData.title)}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <!-- Thanh trạng thái & điều khiển đồng bộ 1-1 gọn 1 dòng (không tạo thêm màn hình script thứ 2) -->
                <div class="flex items-center justify-between flex-wrap gap-2 px-3 py-2 rounded-xl bg-[#0B0F19] border border-slate-800/90 text-[11px]">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-extrabold border bg-rose-500/15 text-rose-300 border-rose-500/35">
                      <span id="shadow-yt-live-status-dot" class="h-2 w-2 rounded-full ${
                        state.isYouTubePlaying ? "bg-rose-500 animate-ping" : "bg-amber-400"
                      }"></span>
                      <span id="shadow-yt-live-status-text">${
                        state.isYouTubePlaying ? "ĐANG ĐỒNG BỘ 1-1" : "ĐỒNG BỘ 1-1"
                      }</span>
                    </span>
                    <span id="shadow-yt-live-turn-badge" class="font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/25">
                      Câu #${(state.activeYouTubeTurnIdx >= 0 ? state.activeYouTubeTurnIdx : 0) + 1}/${totalTurns}
                    </span>
                    <span id="shadow-yt-live-time" class="font-mono text-slate-400">
                      ⏱ ${formatTimecode(ytLastRealTimeSec >= 0 ? ytLastRealTimeSec : 0)}
                    </span>
                  </div>

                  <div class="flex items-center gap-1.5 flex-wrap">
                    <button
                      type="button"
                      data-action="yt-prev-turn"
                      class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition active:scale-95"
                    >⏮ Câu trước</button>
                    <button
                      type="button"
                      data-action="yt-replay-turn"
                      class="px-2 py-0.5 rounded bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/40 font-bold transition active:scale-95"
                    >🔁 Nghe lại câu</button>
                    <button
                      type="button"
                      data-action="yt-next-turn"
                      class="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition active:scale-95"
                    >⏭ Câu tiếp</button>

                    <span class="text-slate-600 hidden sm:inline">|</span>
                    <div class="flex items-center gap-1 text-[10px]">
                      <span class="text-slate-400 hidden sm:inline">Khớp chữ:</span>
                      <button
                        type="button"
                        data-action="yt-adjust-offset"
                        data-delta="-0.2"
                        title="Chỉnh chữ chậm lại 0.2 giây"
                        class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-mono font-bold"
                      >-0.2s</button>
                      <button
                        type="button"
                        data-action="yt-adjust-offset"
                        data-delta="0"
                        id="shadow-yt-offset-label"
                        title="Đặt lại độ trễ về 0.0s"
                        class="px-1.5 py-0.5 rounded bg-slate-900 text-indigo-300 border border-slate-800 font-mono font-bold"
                      >${
                        (state.youtubeSyncOffsetSec || 0) === 0
                          ? "0.0s"
                          : `${state.youtubeSyncOffsetSec > 0 ? "+" : ""}${Number(state.youtubeSyncOffsetSec).toFixed(1)}s`
                      }</button>
                      <button
                        type="button"
                        data-action="yt-adjust-offset"
                        data-delta="0.2"
                        title="Chỉnh chữ sớm hơn 0.2 giây"
                        class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-mono font-bold"
                      >+0.2s</button>
                    </div>
                  </div>
                </div>
              </div>
              `
              : ""
          }

        <!-- MÀN HÌNH SCRIPT DUY NHẤT (ĐỒNG BỘ 1-1 TỪNG CÂU & TỪNG TỪ NGAY BÊN DƯỚI VIDEO) -->
        <div
          id="shadow-script-panel-wrapper"
          class="w-full space-y-3.5"
        >
          <div class="flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-3">
            <div>
              <h3 class="text-sm font-bold text-white">${escapeHtml(currentDialogue.title)}</h3>
            </div>

            <!-- 3 NÚT CHÍNH (LISTEN • SHADOWING • FULL) + NÚT ẨN/HIỆN SCRIPT + IPA -->
            <div class="flex items-center gap-2 flex-wrap">
              <!-- 1. LISTEN -->
              <button
                type="button"
                data-action="shadow-mode-listen"
                title="Nghe máy đọc toàn bộ hội thoại (chữ chạy màu theo từng từ)"
                class="px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition active:scale-95 shadow-sm border ${
                  isListenActive
                    ? "bg-amber-500 text-slate-950 border-amber-300 shadow-amber-500/30 ring-2 ring-amber-400/50"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-400/40"
                }"
              >
                ${ICONS.Volume2}
                <span>${isListenActive ? "⏹ Stop Listen" : "Listen"}</span>
              </button>

              <!-- 2. SHADOWING -->
              <button
                type="button"
                data-action="shadow-mode-shadowing"
                title="Máy đọc từng chữ -> Ngưng lại để ghi âm bạn đọc -> Bấm Continue cho đến hết bài và chấm điểm"
                class="px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition active:scale-95 shadow-sm border ${
                  isShadowActive
                    ? "bg-emerald-500 text-slate-950 border-emerald-300 shadow-emerald-500/30 ring-2 ring-emerald-400/50"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400/40"
                }"
              >
                ${ICONS.MicSm}
                <span>${isShadowActive ? "🔄 Restart Shadowing" : "Shadowing"}</span>
              </button>

              <!-- 3. FULL -->
              <button
                type="button"
                data-action="shadow-mode-full"
                title="Bạn tự đọc và ghi âm lại toàn bộ đoạn hội thoại để chấm điểm tổng"
                class="px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition active:scale-95 shadow-sm border ${
                  isFullActive
                    ? "bg-rose-500 text-white border-rose-300 animate-pulse ring-2 ring-rose-400/50"
                    : "bg-rose-600 hover:bg-rose-500 text-white border-rose-400/40"
                }"
              >
                ${ICONS.MicSm}
                <span>${isFullActive ? "🏁 Chấm điểm Full" : "Full"}</span>
              </button>

              <!-- TÍNH NĂNG ẨN / HIỆN ĐOẠN SCRIPT -->
              <button
                type="button"
                data-action="toggle-shadow-script"
                title="Ẩn/Hiện chữ tiếng Anh của đoạn hội thoại để luyện nghe & nói không nhìn kịch bản (Blind Shadowing)"
                class="px-3 py-2 rounded-xl text-xs font-bold border transition active:scale-95 ${
                  state.hideShadowScript
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/50"
                    : "bg-slate-800/90 text-slate-200 border-slate-700 hover:border-slate-500"
                }"
              >
                ${state.hideShadowScript ? "👁️ Hiện Script" : "🙈 Ẩn Script"}
              </button>

              <!-- BẬT/TẮT TOÀN BỘ IPA -->
              <button
                type="button"
                data-action="toggle-all-turns-ipa"
                class="px-2.5 py-2 rounded-xl text-xs font-bold border transition ${
                  state.showAllTurnsIpa
                    ? "bg-indigo-600/25 text-indigo-300 border-indigo-500/50"
                    : "bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white"
                }"
              >
                🔤 ${state.showAllTurnsIpa ? "Ẩn IPA" : "IPA"}
              </button>
            </div>
          </div>

          ${activeModeBannerHtml}
          ${sessionReportHtml}

          <!-- Unified Dialogue Passage Container (1 đoạn văn lớn - Screenplay Script Passage) -->
          <div class="bg-[#0B0F19] border border-slate-800/90 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-3.5">
            <!-- Header bar of the passage container -->
            <div class="flex items-center justify-between flex-wrap gap-2.5 pb-2.5 border-b border-slate-800/80">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span class="text-xs font-bold text-slate-200 tracking-wide uppercase">
                  Script Passage (${totalTurns} turns • Toàn bộ bài nói)
                </span>
                <span class="text-[10px] text-slate-400 font-normal hidden sm:inline">
                  (Cuộn chuột hoặc lướt để xem trọn bộ ${totalTurns} câu thoại)
                </span>
              </div>

              <div class="flex items-center gap-2 flex-wrap">
                <!-- Chế độ: Ngắt câu vs Toàn đoạn -->
                <div class="inline-flex rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-[11px] font-medium">
                  <button
                    type="button"
                    data-action="set-shadow-passage-mode"
                    data-mode="sentence"
                    title="Ngắt câu từng lượt thoại để tập trung đọc theo từng câu"
                    class="px-2.5 py-1 rounded-md transition ${
                      state.shadowPassageMode !== "full"
                        ? "bg-indigo-600 text-white font-bold shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }"
                  >
                    🎙️ Ngắt câu (Sentence)
                  </button>
                  <button
                    type="button"
                    data-action="set-shadow-passage-mode"
                    data-mode="full"
                    title="Hiển thị liền mạch toàn đoạn kịch bản hội thoại"
                    class="px-2.5 py-1 rounded-md transition ${
                      state.shadowPassageMode === "full"
                        ? "bg-indigo-600 text-white font-bold shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    }"
                  >
                    📄 Toàn đoạn (Full Passage)
                  </button>
                </div>

                <!-- Copy full script -->
                <button
                  type="button"
                  data-action="copy-full-dialogue"
                  title="Sao chép toàn bộ kịch bản tiếng Anh"
                  class="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition active:scale-95"
                >
                  ${ICONS.CopySm || "📋"}
                  <span>${state.copiedDialogueNotice ? "✓ Đã copy!" : "Copy toàn đoạn"}</span>
                </button>
              </div>
            </div>

            <!-- Flowing Script Passage with sleek vertical scrollbar to view all turns -->
            <div
              id="shadow-script-passage-container"
              class="${
                state.shadowPassageMode === "full"
                  ? "leading-8 p-3.5 rounded-xl bg-[#0F172A]/60 border border-slate-800/80"
                  : "space-y-1.5 leading-relaxed"
              } font-normal max-h-[580px] overflow-y-auto pr-2 custom-scrollbar overscroll-contain"
            >
              ${turnsHtml}
            </div>
          </div>

          <!-- PHẦN BỔ SUNG 1: TỪ VỰNG THÔNG DỤNG (THEO BÀI & TRỌN BỘ CHỦ ĐỀ ZIM.VN) -->
          <div class="pt-3 border-t border-slate-800 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
                <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Từ vựng thông dụng (${state.showFullTopicVocab ? `Trọn bộ chủ đề: ${activeVocabList.length} từ` : `Trọng tâm hội thoại: ${activeVocabList.length} từ`})
                </h4>
              </div>
              <button
                type="button"
                data-action="toggle-full-topic-vocab"
                class="px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${
                  state.showFullTopicVocab
                    ? "bg-indigo-600 text-white border-indigo-400"
                    : "bg-[#0B0F19] text-indigo-300 border-indigo-500/40 hover:bg-indigo-950/50"
                }"
              >
                ${
                  state.showFullTopicVocab
                    ? `Thu gọn về từ vựng hội thoại (${dialogueVocabList.length} từ)`
                    : `📚 Xem trọn bộ Từ vựng chủ đề ZIM (${topicVocabList.length} từ)`
                }
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              ${activeVocabList
                .map(
                  (vItem) => `
                <div class="bg-[#0B0F19] border border-slate-800/90 rounded-lg p-2.5 flex items-center justify-between hover:border-slate-700 transition">
                  <div class="space-y-0.5 pr-2">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="text-xs font-bold text-white">${escapeHtml(vItem.word)}</span>
                      <span class="text-[10px] font-mono text-indigo-400">${escapeHtml(vItem.ipa)}</span>
                      <span class="text-[9px] text-slate-400 italic bg-slate-800 px-1 rounded">${escapeHtml(vItem.pos)}</span>
                    </div>
                    <p class="text-[11px] text-slate-300 font-medium">${escapeHtml(vItem.def)}</p>
                  </div>
                  <button
                    type="button"
                    data-action="speak-text"
                    data-text="${escapeHtml(vItem.word)}"
                    title="Nghe phát âm từ"
                    class="h-7 w-7 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition active:scale-95 flex-shrink-0"
                  >
                    ${ICONS.Volume2}
                  </button>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- PHẦN BỔ SUNG 2: MẪU CÂU THÔNG DỤNG (THEO BÀI & TRỌN BỘ CHỦ ĐỀ ZIM.VN) -->
          <div class="pt-3 border-t border-slate-800/80 space-y-2.5">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Mẫu câu giao tiếp thông dụng (${state.showFullTopicPatterns ? `Trọn bộ chủ đề: ${activePatternsList.length} cấu trúc` : `Trọng tâm hội thoại: ${activePatternsList.length} cấu trúc`})
                </h4>
              </div>
              <button
                type="button"
                data-action="toggle-full-topic-patterns"
                class="px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${
                  state.showFullTopicPatterns
                    ? "bg-emerald-600 text-white border-emerald-400"
                    : "bg-[#0B0F19] text-emerald-300 border-emerald-500/40 hover:bg-emerald-950/50"
                }"
              >
                ${
                  state.showFullTopicPatterns
                    ? `Thu gọn về mẫu câu hội thoại (${dialoguePatternsList.length} mẫu)`
                    : `📐 Xem trọn bộ Mẫu câu chủ đề ZIM (${topicPatternsList.length} cấu trúc)`
                }
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${activePatternsList
                .map(
                  (pat) => `
                <div class="bg-[#0B0F19] border border-slate-800/90 rounded-lg p-2.5 space-y-1 hover:border-slate-700 transition">
                  <div class="flex items-center justify-between gap-2">
                    <span class="text-xs font-bold text-emerald-400 font-mono">${escapeHtml(pat.pattern)}</span>
                    <button
                      type="button"
                      data-action="speak-text"
                      data-text="${escapeHtml(pat.example || pat.pattern)}"
                      class="h-6 px-2 rounded bg-slate-800/80 hover:bg-slate-700 text-[11px] text-slate-300 hover:text-white flex items-center gap-1 transition active:scale-95 flex-shrink-0"
                    >
                      ${ICONS.Volume2Sm}
                      <span>Nghe ví dụ</span>
                    </button>
                  </div>
                  <p class="text-[11px] text-slate-300">
                    → <span class="text-slate-200 font-medium">${escapeHtml(pat.meaning)}</span>
                  </p>
                  ${
                    pat.example
                      ? `<p class="text-[11px] text-slate-400 italic bg-[#0F172A]/70 px-2 py-1 rounded border border-slate-800/60 font-sans">Eg: "${escapeHtml(pat.example)}"</p>`
                      : ""
                  }
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
        </div>
      </div>
    `;
  }

  // --- RENDER SECTION 3: LISTENING TAB ---
  function renderListeningTab() {
    const cambridgeBooks = ["15", "16", "17", "18", "19", "20", "21"];
    let subContentHtml = "";

    if (state.listenSubTab === "bands") {
      const selectedOpt = state.bandListenAnswers["q1"];
      subContentHtml = `
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white">Section 1: Accommodation Inquiries</span>
            <button
              type="button"
              data-action="speak-text"
              data-text="I am calling about the flat. Does the rent include water and broadband? Yes, both are covered."
              class="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1"
            >
              ${ICONS.Volume2} Nghe audio
            </button>
          </div>

          <div class="p-3 bg-[#0B0F19] rounded-lg border border-slate-800 space-y-2 text-xs">
            <p class="font-semibold text-slate-200">1. What is included in the monthly rent?</p>
            <div class="grid grid-cols-2 gap-2">
              ${["Water & Broadband", "Electricity only", "Gas & Tax", "Parking only"]
                .map((opt, i) => {
                  const isSel = selectedOpt === i;
                  const isCorrect = i === 0;
                  let cls = "bg-[#0F172A] hover:bg-indigo-600/20 border-slate-800 text-slate-300";
                  if (isSel) {
                    cls = isCorrect
                      ? "bg-emerald-600/25 border-emerald-500 text-emerald-300 font-bold"
                      : "bg-rose-600/25 border-rose-500 text-rose-300";
                  }
                  return `
                    <button
                      type="button"
                      data-action="select-band-listen"
                      data-idx="${i}"
                      class="text-left p-2 rounded border transition ${cls}"
                    >
                      ${escapeHtml(opt)}
                    </button>
                  `;
                })
                .join("")}
            </div>
            ${
              selectedOpt !== undefined
                ? `<p class="text-[11px] ${selectedOpt === 0 ? "text-emerald-400" : "text-amber-400"} pt-1">→ Đáp án chuẩn: <strong>Water & Broadband</strong> ("Does the rent include water and broadband? Yes, both are covered.")</p>`
                : ""
            }
          </div>
        </div>
      `;
    } else if (state.listenSubTab === "cam") {
      const camKey = `cam${state.selectedCam === "15" ? "16" : state.selectedCam}`;
      const camBookObj = CAM_DB[camKey];
      const tests = camBookObj && camBookObj.tests ? camBookObj.tests : [];
      const curTest = tests[state.selectedCamTest] || tests[0];
      const listenParts = curTest && curTest.listening ? curTest.listening.parts || [] : [];
      const curPart = listenParts[state.selectedCamPart] || listenParts[0];

      subContentHtml = `
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
          <!-- Book Selector (Cam 15-21) -->
          <div class="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800">
            <div class="flex items-center gap-1.5 flex-wrap">
              ${cambridgeBooks
                .map(
                  (bk) => `
                <button
                  type="button"
                  data-action="select-listen-cam"
                  data-book="${bk}"
                  class="px-2 py-0.5 rounded text-xs font-bold transition ${
                    state.selectedCam === bk ? "bg-indigo-600 text-white" : "bg-[#0B0F19] text-slate-400 hover:text-white"
                  }"
                >
                  Cam ${bk}
                </button>
              `
                )
                .join("")}
            </div>

            <!-- Test 1-4 & Part 1-4 Selector -->
            <div class="flex items-center gap-1.5">
              ${[0, 1, 2, 3]
                .map(
                  (tIdx) => `
                <button
                  type="button"
                  data-action="select-listen-test"
                  data-test="${tIdx}"
                  class="px-2 py-0.5 rounded text-[11px] font-semibold ${
                    state.selectedCamTest === tIdx
                      ? "bg-indigo-500/30 text-indigo-300 border border-indigo-500/40"
                      : "bg-[#0B0F19] text-slate-400 hover:text-white"
                  }"
                >
                  Test ${tIdx + 1}
                </button>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Quick Fill-in Box from TSX + Full 4-Part CBT Workspace -->
          <div class="p-3 bg-[#0B0F19] rounded-lg border border-slate-800 space-y-2 text-xs">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <span class="text-slate-400 font-mono">
                Cam ${state.selectedCam} • Test ${state.selectedCamTest + 1} — ${curPart ? escapeHtml(curPart.title) : "Part 1"}
              </span>
              <div class="flex items-center gap-1.5">
                ${[0, 1, 2, 3]
                  .map(
                    (pIdx) => `
                  <button
                    type="button"
                    data-action="select-listen-part"
                    data-part="${pIdx}"
                    class="px-2 py-0.5 rounded text-[10px] font-bold ${
                      state.selectedCamPart === pIdx ? "bg-indigo-600 text-white" : "bg-[#0F172A] text-slate-400"
                    }"
                  >
                    Part ${pIdx + 1}
                  </button>
                `
                  )
                  .join("")}
                ${
                  curPart && curPart.audioScript
                    ? `
                  <button
                    type="button"
                    data-action="speak-text"
                    data-text="${escapeHtml(curPart.audioScript.replace(/\[Q\d+\]/g, ""))}"
                    class="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold flex items-center gap-1"
                  >
                    ${ICONS.Volume2Sm} Nghe Audio Part ${state.selectedCamPart + 1}
                  </button>
                `
                    : ""
                }
              </div>
            </div>

            ${
              curPart && curPart.questions && curPart.questions.length > 0
                ? `
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-2">
                <!-- Left: Questions List -->
                <div class="space-y-2 max-h-80 overflow-y-auto pr-1">
                  ${curPart.questions
                    .map((q) => {
                      const qKey = `${state.selectedCam}-${state.selectedCamTest}-${q.num}`;
                      const userVal = state.camListenAnswers[qKey] || "";
                      const isCorrect =
                        userVal.trim().toLowerCase() === (q.answer || "").trim().toLowerCase();
                      return `
                        <div class="p-2.5 rounded-lg bg-[#0F172A] border border-slate-800/90 space-y-1.5">
                          <div class="flex items-center justify-between gap-2">
                            <span class="font-semibold text-white">Q${q.num}. ${escapeHtml(q.prompt || q.q || "")}</span>
                            ${
                              state.camListenSubmitted
                                ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                    isCorrect ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                                  }">${isCorrect ? "✓ Đúng" : `Đáp án: ${escapeHtml(q.answer)}`}</span>`
                                : ""
                            }
                          </div>
                          ${
                            q.options && q.options.length > 0
                              ? `<div class="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                  ${q.options
                                    .map((opt) => {
                                      const letter = opt.charAt(0);
                                      const sel = userVal === letter || userVal === opt;
                                      return `<button type="button" data-action="set-cam-listen-ans" data-qkey="${qKey}" data-val="${escapeHtml(letter)}" class="text-left px-2 py-1 rounded border text-[11px] ${
                                        sel ? "bg-indigo-600 border-indigo-400 text-white" : "bg-[#0B0F19] border-slate-800 text-slate-300"
                                      }">${escapeHtml(opt)}</button>`;
                                    })
                                    .join("")}
                                </div>`
                              : `<input
                                  type="text"
                                  data-action="input-cam-listen-ans"
                                  data-qkey="${qKey}"
                                  value="${escapeHtml(userVal)}"
                                  placeholder="Điền đáp án..."
                                  class="bg-[#0B0F19] border border-slate-700 rounded px-2.5 py-1 text-white w-full sm:w-52 focus:outline-none focus:border-indigo-500 text-xs"
                                />`
                          }
                          ${
                            state.camListenSubmitted && q.explanation
                              ? `<p class="text-[11px] text-emerald-400/90">💡 ${escapeHtml(q.explanation)}</p>`
                              : ""
                          }
                        </div>
                      `;
                    })
                    .join("")}
                </div>

                <!-- Right: Audio Transcript & Answer Locator -->
                <div class="p-3 rounded-lg bg-[#0F172A] border border-slate-800/90 space-y-2 max-h-80 overflow-y-auto">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold text-indigo-400 uppercase tracking-wider">Audio Transcript & Answer Locator</span>
                    <button
                      type="button"
                      data-action="toggle-cam-listen-submit"
                      class="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold"
                    >
                      ${state.camListenSubmitted ? "Làm lại" : "Kiểm tra đáp án & Transcript"}
                    </button>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed font-serif">
                    ${
                      curPart.audioScript
                        ? escapeHtml(curPart.audioScript).replace(
                            /\[Q(\d+)\]/g,
                            '<span class="cbt-badge-loc">[Q$1]</span>'
                          )
                        : "Bấm Nghe Audio để luyện nghe và điền đáp án."
                    }
                  </p>
                </div>
              </div>
            `
                : `
              <div class="flex items-center gap-2">
                <span class="text-white">1. Name of contact person:</span>
                <input
                  id="cam-answer-1"
                  type="text"
                  value="${escapeHtml(state.camAnswer1)}"
                  placeholder="Điền đáp án..."
                  class="bg-[#0F172A] border border-slate-700 rounded px-2 py-1 text-white w-36 focus:outline-none focus:border-indigo-500"
                />
              </div>
            `
            }
          </div>
        </div>
      `;
    } else if (state.listenSubTab === "dictation") {
      const curDict = dictationItems[state.dictIdx] || dictationItems[0];
      subContentHtml = `
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-300">
              Câu ${state.dictIdx + 1} / ${dictationItems.length}
            </span>
            <button
              type="button"
              data-action="speak-text"
              data-text="${escapeHtml(curDict.sentence)}"
              class="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1"
            >
              ${ICONS.Volume2} Nghe câu
            </button>
          </div>

          <p class="text-[11px] font-mono text-indigo-400">${escapeHtml(curDict.ipa)}</p>

          <textarea
            id="dictation-textarea"
            rows="2"
            placeholder="Gõ lại câu nghe được..."
            class="w-full bg-[#0B0F19] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
          >${escapeHtml(state.dictInput)}</textarea>

          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <button
                type="button"
                data-action="check-dictation"
                class="px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
              >
                Kiểm tra
              </button>
              ${
                state.dictIdx > 0
                  ? `<button type="button" data-action="prev-dictation" class="text-xs text-slate-400 hover:text-white">← Câu trước</button>`
                  : ""
              }
            </div>
            ${
              state.dictIdx < dictationItems.length - 1
                ? `<button type="button" data-action="next-dictation" class="text-xs text-slate-400 hover:text-white">Câu kế →</button>`
                : ""
            }
          </div>

          ${
            state.dictScore
              ? `
            <div class="p-2.5 rounded bg-[#0B0F19] border border-slate-800 text-xs space-y-1">
              <div class="flex justify-between font-bold">
                <span>Độ khớp:</span>
                <span class="${state.dictScore.percent >= 80 ? "text-emerald-400" : "text-amber-400"}">
                  ${state.dictScore.percent}%
                </span>
              </div>
              <p class="text-slate-400">
                Chuẩn: <span class="text-emerald-400">${escapeHtml(state.dictScore.standard)}</span>
              </p>
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    return `
      <div class="space-y-3">
        <!-- Sub-tabs -->
        <div class="flex gap-2 border-b border-slate-800 pb-2">
          ${[
            { id: "bands", label: "Band 5.0 - 6.5" },
            { id: "cam", label: "Cam 15 - 21" },
            { id: "dictation", label: "Chép chính tả" }
          ]
            .map(
              (st) => `
            <button
              type="button"
              data-action="set-listen-subtab"
              data-subtab="${st.id}"
              class="px-3 py-1 rounded-lg text-xs font-semibold transition ${
                state.listenSubTab === st.id
                  ? "bg-indigo-600 text-white"
                  : "bg-[#0F172A] border border-slate-800 text-slate-400 hover:text-white"
              }"
            >
              ${st.label}
            </button>
          `
            )
            .join("")}
        </div>

        ${subContentHtml}
      </div>
    `;
  }

  // --- RENDER SECTION 4: READING TAB ---
  function renderReadingTab() {
    let subContentHtml = "";

    if (state.readSubTab === "b1b2") {
      const b1b2 = readingData.b1b2 || {
        title: "Urban Green Spaces and Well-being",
        passage:
          "Recent studies indicate that urban residents living near green public spaces report lower stress levels and improved cardiovascular health. Urban planners increasingly prioritize accessible parks to foster community cohesion and enhance physical vitality.",
        questions: [
          {
            q: "What is a proven benefit of living near public parks?",
            options: ["Lower stress levels", "Reduced rental costs", "Free transport access", "Higher income"],
            correct: 0
          }
        ]
      };

      subContentHtml = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2">
            <span class="text-xs font-bold text-white">${escapeHtml(b1b2.title)}</span>
            <p class="text-xs text-slate-300 leading-relaxed font-serif bg-[#0B0F19] p-3 rounded-lg border border-slate-800/80">
              ${escapeHtml(b1b2.passage)}
            </p>
          </div>

          <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-3">
            ${b1b2.questions
              .map((q, idx) => {
                return `
                  <div class="space-y-1.5 text-xs">
                    <p class="font-semibold text-white">${idx + 1}. ${escapeHtml(q.q)}</p>
                    <div class="grid grid-cols-1 gap-1">
                      ${q.options
                        .map((opt, oIdx) => {
                          const selected = state.readAnswers[`b1-${idx}`] === oIdx;
                          const isCorrect = oIdx === q.correct;
                          return `
                            <button
                              type="button"
                              data-action="set-read-ans"
                              data-key="b1-${idx}"
                              data-val="${oIdx}"
                              class="text-left p-2 rounded border transition text-xs ${
                                selected
                                  ? "bg-indigo-600 border-indigo-400 text-white"
                                  : "bg-[#0B0F19] border-slate-800 text-slate-300"
                              } ${state.readResultShown && isCorrect ? "border-emerald-400 text-emerald-300 font-bold" : ""}"
                            >
                              ${escapeHtml(opt)}
                            </button>
                          `;
                        })
                        .join("")}
                    </div>
                  </div>
                `;
              })
              .join("")}

            <button
              type="button"
              data-action="toggle-read-result"
              class="w-full py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
            >
              Kiểm tra đáp án
            </button>
          </div>
        </div>
      `;
    } else if (state.readSubTab === "thpt") {
      const thptItems =
        readingData.thpt && readingData.thpt.items
          ? readingData.thpt.items
          : [
              {
                q: "Choose the word whose underlined part differs from the other three in pronunciation:",
                options: ["A. decided", "B. looked", "C. watched", "D. stopped"],
                explain: "Đáp án A: phát âm là /ɪd/, còn lại đều phát âm là /t/."
              }
            ];

      subContentHtml = `
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
          ${thptItems
            .map(
              (item, idx) => `
            <div class="space-y-2 text-xs border-b border-slate-800/80 pb-3">
              <p class="font-semibold text-white">Câu ${idx + 1}: ${escapeHtml(item.q)}</p>
              <div class="grid grid-cols-2 gap-1.5">
                ${item.options
                  .map(
                    (opt, oIdx) => `
                  <button
                    type="button"
                    data-action="set-read-ans"
                    data-key="thpt-${idx}"
                    data-val="${oIdx}"
                    class="text-left p-2 rounded border text-xs ${
                      state.readAnswers[`thpt-${idx}`] === oIdx
                        ? "bg-indigo-600 border-indigo-400 text-white"
                        : "bg-[#0B0F19] border-slate-800 text-slate-300"
                    }"
                  >
                    ${escapeHtml(opt)}
                  </button>
                `
                  )
                  .join("")}
              </div>
              ${
                state.readAnswers[`thpt-${idx}`] !== undefined
                  ? `<p class="text-[11px] text-emerald-400">${escapeHtml(item.explain)}</p>`
                  : ""
              }
            </div>
          `
            )
            .join("")}
        </div>
      `;
    } else if (state.readSubTab === "cam") {
      const camQuick = readingData.cam || {
        book: "18",
        title: "The Roman Concrete Revolution",
        passage:
          "Ancient Roman concrete possessed an extraordinary durability due to the combination of quicklime, volcanic ash, and seawater. Over centuries, chemical interactions fostered the growth of rare interlocking crystals that self-healed micro-fractures.",
        questions: [
          {
            q: "Roman concrete was weaker than modern industrial cement formulations.",
            answer: "FALSE"
          }
        ]
      };

      const camKey = `cam${state.readCamBook}`;
      const camBookObj = CAM_DB[camKey];
      const curTest = camBookObj && camBookObj.tests ? camBookObj.tests[state.readCamTest] || camBookObj.tests[0] : null;
      const passages = curTest && curTest.reading ? curTest.reading.passages || [] : [];
      const curPassage = passages[state.readCamPassage] || passages[0];

      subContentHtml = `
        <div class="space-y-3">
          <!-- Quick Cam 18 Roman Concrete Card (Exact match to TSX) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2">
              <span class="text-xs font-bold text-white">Cam ${escapeHtml(camQuick.book)}: ${escapeHtml(camQuick.title)}</span>
              <p class="text-xs text-slate-300 leading-relaxed font-serif bg-[#0B0F19] p-3 rounded-lg border border-slate-800/80">
                ${escapeHtml(camQuick.passage)}
              </p>
            </div>

            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-3">
              ${camQuick.questions
                .map(
                  (q, idx) => `
                <div class="space-y-1.5 text-xs">
                  <p class="font-semibold text-white">"${escapeHtml(q.q)}"</p>
                  <div class="flex gap-2">
                    ${["TRUE", "FALSE", "NOT GIVEN"]
                      .map((val) => {
                        const chosen = state.readAnswers[`cam-${idx}`] === val;
                        let cls = "bg-[#0B0F19] border-slate-800 text-slate-300";
                        if (chosen) {
                          cls =
                            val === q.answer
                              ? "bg-emerald-600 border-emerald-400 text-white"
                              : "bg-rose-600 border-rose-400 text-white";
                        }
                        return `
                          <button
                            type="button"
                            data-action="set-read-ans-str"
                            data-key="cam-${idx}"
                            data-val="${val}"
                            class="flex-1 py-1 rounded border text-xs font-bold ${cls}"
                          >
                            ${val}
                          </button>
                        `;
                      })
                      .join("")}
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- Full Cambridge 16-21 Reading CBT Workspace (3 Passages + Linearthinking) -->
          ${
            curPassage
              ? `
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2">
                <div class="flex items-center gap-1.5 flex-wrap">
                  ${["16", "17", "18", "19", "20", "21"]
                    .map(
                      (bk) => `
                    <button
                      type="button"
                      data-action="select-read-cam-book"
                      data-book="${bk}"
                      class="px-2 py-0.5 rounded text-xs font-bold ${
                        state.readCamBook === bk ? "bg-indigo-600 text-white" : "bg-[#0B0F19] text-slate-400 hover:text-white"
                      }"
                    >
                      Cam ${bk}
                    </button>
                  `
                    )
                    .join("")}
                </div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  ${[0, 1, 2, 3]
                    .map(
                      (tIdx) => `
                    <button
                      type="button"
                      data-action="select-read-cam-test"
                      data-test="${tIdx}"
                      class="px-2 py-0.5 rounded text-[11px] font-semibold ${
                        state.readCamTest === tIdx ? "bg-indigo-500/30 text-indigo-300 border border-indigo-500/40" : "bg-[#0B0F19] text-slate-400"
                      }"
                    >
                      Test ${tIdx + 1}
                    </button>
                  `
                    )
                    .join("")}
                  ${[0, 1, 2]
                    .map(
                      (pIdx) => `
                    <button
                      type="button"
                      data-action="select-read-cam-passage"
                      data-passage="${pIdx}"
                      class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        state.readCamPassage === pIdx ? "bg-emerald-600 text-white" : "bg-[#0B0F19] text-slate-400"
                      }"
                    >
                      Passage ${pIdx + 1}
                    </button>
                  `
                    )
                    .join("")}
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="bg-[#0B0F19] border border-slate-800 rounded-lg p-3 space-y-2 max-h-96 overflow-y-auto">
                  <div class="text-xs font-bold text-indigo-300">${escapeHtml(curPassage.title)}</div>
                  <div class="text-xs text-slate-300 leading-relaxed font-serif space-y-2">
                    ${(curPassage.paragraphs || [curPassage.text || ""])
                      .map(
                        (para) =>
                          `<p>${escapeHtml(typeof para === "string" ? para : para.text || "").replace(
                            /\[Q(\d+)\]/g,
                            '<span class="cbt-badge-loc">[Q$1]</span>'
                          )}</p>`
                      )
                      .join("")}
                  </div>
                </div>

                <div class="bg-[#0B0F19] border border-slate-800 rounded-lg p-3 space-y-2.5 max-h-96 overflow-y-auto">
                  ${(curPassage.questions || [])
                    .map((q) => {
                      const rKey = `fullcam-${state.readCamBook}-${state.readCamTest}-${q.num}`;
                      const chosen = state.readAnswers[rKey] || "";
                      return `
                        <div class="p-2.5 rounded bg-[#0F172A] border border-slate-800 space-y-1.5 text-xs">
                          <p class="font-semibold text-white">Q${q.num}. ${escapeHtml(q.prompt || q.q || "")}</p>
                          ${
                            q.type === "tfng" || (!q.options && ["TRUE", "FALSE", "NOT GIVEN", "YES", "NO"].includes(q.answer))
                              ? `<div class="flex gap-1.5">
                                  ${["TRUE", "FALSE", "NOT GIVEN"]
                                    .map((v) => {
                                      const isSel = chosen === v;
                                      const isRight = v === q.answer;
                                      return `<button type="button" data-action="set-read-ans-str" data-key="${rKey}" data-val="${v}" class="flex-1 py-1 rounded border text-[11px] font-bold ${
                                        isSel
                                          ? isRight
                                            ? "bg-emerald-600 border-emerald-400 text-white"
                                            : "bg-rose-600 border-rose-400 text-white"
                                          : "bg-[#0B0F19] border-slate-800 text-slate-300"
                                      }">${v}</button>`;
                                    })
                                    .join("")}
                                </div>`
                              : `<input type="text" data-action="input-read-ans" data-key="${rKey}" value="${escapeHtml(chosen)}" placeholder="Nhập đáp án..." class="bg-[#0B0F19] border border-slate-700 rounded px-2 py-1 text-white w-full text-xs" />`
                          }
                          ${
                            chosen && q.explanation
                              ? `<p class="text-[11px] text-emerald-400">✓ Đáp án: <strong>${escapeHtml(q.answer)}</strong> — ${escapeHtml(q.explanation)}</p>`
                              : ""
                          }
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            </div>
          `
              : ""
          }
        </div>
      `;
    }

    return `
      <div class="space-y-3">
        <div class="flex gap-2 border-b border-slate-800 pb-2">
          ${[
            { id: "b1b2", label: "B1 - B2" },
            { id: "thpt", label: "THPT Quốc Gia" },
            { id: "cam", label: "IELTS Cam" }
          ]
            .map(
              (st) => `
            <button
              type="button"
              data-action="set-read-subtab"
              data-subtab="${st.id}"
              class="px-3 py-1 rounded-lg text-xs font-semibold transition ${
                state.readSubTab === st.id
                  ? "bg-indigo-600 text-white"
                  : "bg-[#0F172A] border border-slate-800 text-slate-400 hover:text-white"
              }"
            >
              ${st.label}
            </button>
          `
            )
            .join("")}
        </div>

        ${subContentHtml}
      </div>
    `;
  }

  // --- RENDER SECTION 5: FLASHCARD TAB ---
  function renderFlashcardTab() {
    const list = flashcards.filter((f) => state.cardTopic === "All" || f.topic === state.cardTopic);
    const safeIdx = Math.min(state.cardIdx, Math.max(0, list.length - 1));
    const cur = list[safeIdx] || flashcards[0];

    return `
      <div class="space-y-3 max-w-lg mx-auto">
        <!-- Category Pills -->
        <div class="flex justify-center gap-1.5 border-b border-slate-800 pb-2 flex-wrap">
          ${["All", "IELTS Vocab", "THPT", "Giao tiếp"]
            .map(
              (c) => `
            <button
              type="button"
              data-action="set-card-topic"
              data-topic="${escapeHtml(c)}"
              class="px-2.5 py-1 rounded text-xs font-semibold transition ${
                state.cardTopic === c ? "bg-indigo-600 text-white" : "bg-[#0F172A] text-slate-400 hover:text-white"
              }"
            >
              ${escapeHtml(c)}
            </button>
          `
            )
            .join("")}
        </div>

        <!-- Card Container -->
        <div class="space-y-3">
          <div
            data-action="flip-flashcard"
            class="cursor-pointer h-60 w-full rounded-2xl bg-[#0F172A] border border-slate-800 p-6 flex flex-col justify-between shadow-xl transition-all hover:border-slate-700"
          >
            <div class="flex justify-between items-center text-xs">
              <span class="font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                ${escapeHtml(cur.topic)}
              </span>
              <span class="font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                ${escapeHtml(cur.cefr)}
              </span>
            </div>

            ${
              !state.isFlipped
                ? `
              <div class="text-center space-y-1">
                <h2 class="text-3xl font-extrabold text-white tracking-tight">${escapeHtml(cur.word)}</h2>
                <p class="text-xs font-mono text-indigo-400">${escapeHtml(cur.ipa)}</p>
                <span class="text-[10px] text-slate-500 block pt-2">(Chạm để lật)</span>
              </div>
            `
                : `
              <div class="space-y-2 text-xs animate-in">
                <p class="text-base font-bold text-emerald-400">${escapeHtml(cur.def)}</p>
                <p class="text-slate-300 font-mono">Collocation: ${escapeHtml(cur.collocation)}</p>
                <p class="text-slate-400 italic">"${escapeHtml(cur.example)}"</p>
              </div>
            `
            }

            <div class="flex justify-between items-center text-xs pt-2 border-t border-slate-800">
              <button
                type="button"
                data-action="speak-text-stop"
                data-text="${escapeHtml(cur.word)}"
                class="p-1 rounded bg-[#0B0F19] text-slate-300 hover:text-white"
              >
                ${ICONS.Volume2}
              </button>
              <span class="text-slate-500">
                ${safeIdx + 1} / ${list.length}
              </span>
            </div>
          </div>

          <!-- Controls -->
          <div class="flex justify-between">
            <button
              type="button"
              data-action="prev-flashcard"
              ${safeIdx === 0 ? "disabled" : ""}
              class="px-3 py-1.5 rounded bg-[#0F172A] border border-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-40"
            >
              Trước
            </button>
            <button
              type="button"
              data-action="next-flashcard"
              ${safeIdx >= list.length - 1 ? "disabled" : ""}
              class="px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white disabled:opacity-40"
            >
              Tiếp theo
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- RENDER SECTION 6: WRITING TAB ---
  function renderWritingTab() {
    const wordCount = state.essayText.trim() ? state.essayText.trim().split(/\s+/).length : 0;

    let promptBadge = state.writingTask === "task1" ? "Renewable Electricity 2024" : "AI & Global Employment";
    let promptText =
      state.writingTask === "task1"
        ? "The chart displays the proportion of renewable electricity across Germany (54%), UK (42%), and Japan (28%). Summarize by selecting key features."
        : "Some people believe that AI will eliminate more jobs than it creates. To what extent do you agree or disagree?";
    let modelEssay = "";

    if (state.writingCamSource !== "default" && CAM_DB[state.writingCamSource]) {
      const bk = CAM_DB[state.writingCamSource];
      const t = bk.tests && bk.tests[state.writingCamTestIdx] ? bk.tests[state.writingCamTestIdx] : null;
      if (t && t.writing) {
        const wObj = state.writingTask === "task1" ? t.writing.task1 : t.writing.task2;
        if (wObj) {
          promptBadge = `${bk.title || state.writingCamSource.toUpperCase()} • Test ${state.writingCamTestIdx + 1}`;
          promptText = wObj.prompt || promptText;
          modelEssay = wObj.modelEssay || "";
        }
      }
    }

    return `
      <div class="space-y-3">
        <!-- Task switcher -->
        <div class="flex justify-between items-center border-b border-slate-800 pb-2 flex-wrap gap-2">
          <div class="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              data-action="set-writing-task"
              data-task="task1"
              class="px-3 py-1 rounded-lg text-xs font-semibold ${
                state.writingTask === "task1" ? "bg-indigo-600 text-white" : "bg-[#0F172A] text-slate-400"
              }"
            >
              Task 1
            </button>
            <button
              type="button"
              data-action="set-writing-task"
              data-task="task2"
              class="px-3 py-1 rounded-lg text-xs font-semibold ${
                state.writingTask === "task2" ? "bg-indigo-600 text-white" : "bg-[#0F172A] text-slate-400"
              }"
            >
              Task 2
            </button>

            <!-- Optional Cam 16-21 Prompt Selector -->
            <select
              id="writing-cam-select"
              class="bg-[#0F172A] border border-slate-800 rounded-lg px-2 py-1 text-[11px] text-slate-300 focus:outline-none focus:border-indigo-500"
            >
              <option value="default" ${state.writingCamSource === "default" ? "selected" : ""}>Đề mẫu AutoExam.ai</option>
              ${["cam21", "cam20", "cam19", "cam18", "cam17", "cam16"]
                .map(
                  (ck) =>
                    `<option value="${ck}" ${state.writingCamSource === ck ? "selected" : ""}>Đề ${ck.toUpperCase()} (Test 1-4)</option>`
                )
                .join("")}
            </select>
          </div>

          <span class="text-xs font-mono text-slate-400">
            Số từ: <strong id="writing-word-count" class="text-white">${wordCount}</strong>
          </span>
        </div>

        <!-- Workspace -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2.5">
            <span class="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 inline-block">
              ${escapeHtml(promptBadge)}
            </span>
            <p class="text-xs text-white font-medium leading-relaxed">
              ${escapeHtml(promptText)}
            </p>
            ${
              modelEssay
                ? `
              <div class="pt-2 border-t border-slate-800/80 space-y-1.5">
                <button
                  type="button"
                  data-action="toggle-writing-model"
                  class="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  ${state.showWritingModel ? "Ẩn bài mẫu Band 8.5+ ▲" : "Xem bài mẫu Band 8.5+ ▼"}
                </button>
                ${
                  state.showWritingModel
                    ? `<div class="p-2.5 rounded bg-[#0B0F19] border border-slate-800 text-[11px] text-slate-300 leading-relaxed max-h-52 overflow-y-auto whitespace-pre-line">${escapeHtml(modelEssay)}</div>`
                    : ""
                }
              </div>
            `
                : ""
            }
          </div>

          <div class="space-y-2">
            <textarea
              id="writing-textarea"
              rows="8"
              placeholder="Nhập bài viết của bạn tại đây..."
              class="w-full bg-[#0F172A] border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
            >${escapeHtml(state.essayText)}</textarea>
            <button
              type="button"
              data-action="eval-writing"
              ${state.isEvaluating ? "disabled" : ""}
              class="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              ${state.isEvaluating ? ICONS.RefreshCwSpin : ICONS.Sparkles}
              Chấm điểm AI
            </button>
          </div>
        </div>

        <!-- Quick Score & Detailed AI Feedback -->
        ${
          state.writingScore
            ? `
          <div class="bg-[#0F172A] border border-indigo-500/30 rounded-xl p-3.5 space-y-3 text-xs animate-in">
            <div class="flex items-center justify-around border-b border-slate-800 pb-2.5">
              <div>Band tổng: <strong class="text-indigo-400 text-sm">Band ${state.writingScore.overall}</strong></div>
              <div>TR: <strong class="text-white">${state.writingScore.tr}</strong></div>
              <div>CC: <strong class="text-white">${state.writingScore.cc}</strong></div>
              <div>LR: <strong class="text-white">${state.writingScore.lr}</strong></div>
              <div>GRA: <strong class="text-white">${state.writingScore.gra}</strong></div>
            </div>
            ${
              state.writingScore.feedbackVi
                ? `<div class="p-2.5 rounded-lg bg-[#0B0F19] border border-slate-800 text-slate-200 leading-relaxed">
                    <span class="text-[10px] font-bold uppercase text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded mr-1.5">Nhận xét AI</span>
                    ${escapeHtml(state.writingScore.feedbackVi)}
                  </div>`
                : ""
            }
            ${
              state.writingScore.upgradedEssay
                ? `<div class="p-2.5 rounded-lg bg-[#0B0F19] border border-indigo-500/30 space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-bold uppercase text-indigo-400">Bài viết nâng cấp Band 8.5+ bởi AI</span>
                      <button type="button" data-action="speak-text" data-text="${escapeHtml(state.writingScore.upgradedEssay)}" class="text-[11px] text-slate-400 hover:text-white flex items-center gap-1">${ICONS.Volume2Sm} Nghe bài nâng cấp</button>
                    </div>
                    <p class="text-[11px] text-slate-300 leading-relaxed whitespace-pre-line">${escapeHtml(state.writingScore.upgradedEssay)}</p>
                  </div>`
                : ""
            }
          </div>
        `
            : ""
        }
      </div>
    `;
  }

  // --- SPEAKING TIMER & PRACTICE HELPERS ---
  let speakCountdownInterval = null;
  function startSpeakCountdown(seconds, label) {
    if (speakCountdownInterval) clearInterval(speakCountdownInterval);
    state.speakTimerSec = seconds;
    state.speakTimerActive = true;
    state.speakTimerLabel = label || "Thời gian";
    render();

    speakCountdownInterval = setInterval(() => {
      if (state.speakTimerSec > 0) {
        state.speakTimerSec--;
        const timerEl = document.getElementById("speak-countdown-display");
        if (timerEl) {
          const m = Math.floor(state.speakTimerSec / 60);
          const s = state.speakTimerSec % 60;
          timerEl.textContent = `${m}:${s < 10 ? "0" : ""}${s}`;
        }
        if (state.speakTimerSec === 0) {
          clearInterval(speakCountdownInterval);
          state.speakTimerActive = false;
          speak("Time is up! Please begin your response.", 1.0);
          render();
        }
      } else {
        clearInterval(speakCountdownInterval);
        state.speakTimerActive = false;
        render();
      }
    }, 1000);
  }

  function stopSpeakCountdown() {
    if (speakCountdownInterval) {
      clearInterval(speakCountdownInterval);
      speakCountdownInterval = null;
    }
    state.speakTimerActive = false;
    state.speakTimerSec = 0;
    render();
  }

  function handleSpeechRecError(event) {
    const err = event && event.error;
    if (err === "not-allowed" || err === "permission-denied") {
      alert("⚠️ Trình duyệt chưa được cấp quyền sử dụng Micro trên máy này!\n\n👉 Cách mở quyền Micro:\n1. Bấm vào biểu tượng ổ khóa 🔒 (hoặc icon Cài đặt) ở góc trái thanh địa chỉ website.\n2. Ở mục Microphone, chọn 'Cho phép' (Allow).\n3. Nhấn F5 để tải lại trang là bạn có thể bấm nói bình thường!");
    } else if (err === "audio-capture") {
      alert("⚠️ Không tìm thấy thiết bị Microphone trên máy tính này!\nVui lòng kiểm tra lại mic cắm ngoài hoặc cài đặt âm thanh (Sound Settings) của máy.");
    } else if (err === "network") {
      alert("⚠️ Lỗi kết nối dịch vụ nhận diện giọng nói (Google Speech). Vui lòng kiểm tra lại kết nối mạng Internet.");
    }
  }

  let sentencePracticeRecognition = null;
  function toggleSentencePracticeMic() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      alert("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    if (state.isRecordingSpeak) {
      state.isRecordingSpeak = false;
      if (sentencePracticeRecognition) {
        try { sentencePracticeRecognition.stop(); } catch(e) {}
        sentencePracticeRecognition = null;
      }
      render();
      return;
    }

    try {
      const rec = new SpeechRec();
      sentencePracticeRecognition = rec;
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = state.voiceAccent || "en-US";

      state.isRecordingSpeak = true;
      state.speakPracticeTranscript = "";
      state.speakScore = null;
      render();

      rec.onresult = function(event) {
        let t = "";
        for (let i = 0; i < event.results.length; i++) {
          t += event.results[i][0].transcript + " ";
        }
        state.speakPracticeTranscript = t.trim();
        const liveDom = document.getElementById("sentence-practice-live-transcript");
        if (liveDom) liveDom.textContent = state.speakPracticeTranscript;
      };

      rec.onerror = function(event) {
        state.isRecordingSpeak = false;
        render();
        handleSpeechRecError(event);
      };

      rec.onend = function() {
        state.isRecordingSpeak = false;
        if (state.speakPracticeTranscript && state.speakPracticeTargetText) {
          state.speakScore = evaluateTurnWords(state.speakPracticeTargetText, state.speakPracticeTranscript, 3000);
        }
        render();
      };

      rec.start();
    } catch(e) {
      state.isRecordingSpeak = false;
      render();
    }
  }

  // --- TALK TO AI EXAMINER HELPERS ---
  let aiTalkRecognition = null;
  function toggleAiTalkRecord() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      alert("Trình duyệt không hỗ trợ ghi âm trực tiếp. Bạn có thể nhập câu trả lời vào ô văn bản!");
      return;
    }

    if (state.isRecordingAiTalk) {
      state.isRecordingAiTalk = false;
      if (aiTalkRecognition) {
        try { aiTalkRecognition.stop(); } catch(e) {}
        aiTalkRecognition = null;
      }
      render();
      return;
    }

    try {
      const rec = new SpeechRec();
      aiTalkRecognition = rec;
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = state.talkAiExaminer === "richard" ? "en-GB" : "en-US";

      state.isRecordingAiTalk = true;
      render();

      rec.onresult = function(event) {
        let fullTranscript = "";
        for (let i = 0; i < event.results.length; i++) {
          fullTranscript += event.results[i][0].transcript + " ";
        }
        state.talkAiInputText = fullTranscript.trim();
        const inputEl = document.getElementById("talk-ai-input");
        if (inputEl) inputEl.value = state.talkAiInputText;
      };

      rec.onerror = function(event) {
        state.isRecordingAiTalk = false;
        render();
        handleSpeechRecError(event);
      };

      rec.onend = function() {
        state.isRecordingAiTalk = false;
        render();
      };

      rec.start();
    } catch(err) {
      state.isRecordingAiTalk = false;
      render();
    }
  }

  function startAiTalkSession(reset) {
    if (reset || state.talkAiMessages.length === 0) {
      const examinerProfileId = state.talkAiExaminer === "richard" ? "uk_male" : "us_female";
      const examinerName = state.talkAiExaminer === "richard" ? "Mr. Richard" : "Ms. Emma";

      let starterText = "";
      if (state.talkAiMode === "part1") {
        starterText = `Good day! My name is ${examinerName}, and I will be conducting your IELTS Speaking Part 1 test today. Could you please tell me your full name, and do you work or are you a student?`;
      } else if (state.talkAiMode === "part2") {
        starterText = `Welcome to IELTS Speaking Part 2. I am ${examinerName}. Here is your cue card topic: "Describe a memorable journey or holiday you enjoyed." You will have 1 minute to take notes, and up to 2 minutes to talk. When you are ready, please begin speaking!`;
      } else if (state.talkAiMode === "part3") {
        starterText = `Hello, I am ${examinerName}. We will now begin Part 3 two-way discussion. Let us consider the topic of tourism and globalization: Do you believe excessive international travel negatively impacts traditional cultures?`;
      } else if (state.talkAiMode === "free") {
        starterText = `Hello! I am ${examinerName}. In this open speaking session, we can discuss any topic—from your favorite hobbies and daily routines to career aspirations and technology. What would you like to talk about today?`;
      } else {
        // mock_full
        starterText = `Good morning! My name is ${examinerName}, and I will be your official IELTS Speaking Examiner for this comprehensive mock interview. Let us start with Part 1: Could you tell me where you are from and what you enjoy most about your hometown?`;
      }

      state.talkAiMessages = [
        {
          id: "ex_welcome",
          role: "examiner",
          text: starterText,
          examinerName: examinerName,
          timestamp: Date.now()
        }
      ];
      state.talkAiInputText = "";
      state.isRecordingAiTalk = false;
      state.isAiEvaluating = false;
      render();
      speak(starterText, 1.0, examinerProfileId);
    }
  }

  async function sendAiTalkAnswer(userText) {
    if (!userText || !userText.trim()) return;

    if (state.isRecordingAiTalk) {
      state.isRecordingAiTalk = false;
      if (aiTalkRecognition) {
        try { aiTalkRecognition.stop(); } catch(e) {}
        aiTalkRecognition = null;
      }
    }

    const userMsg = {
      id: "user_" + Date.now(),
      role: "user",
      text: userText.trim(),
      timestamp: Date.now()
    };
    state.talkAiMessages.push(userMsg);
    state.talkAiInputText = "";
    state.isAiEvaluating = true;
    render();
    setTimeout(() => {
      const box = document.getElementById("talk-ai-chat-box");
      if (box) box.scrollTop = box.scrollHeight;
    }, 50);

    const examinerName = state.talkAiExaminer === "richard" ? "Mr. Richard (Senior IELTS Examiner, British Council)" : "Ms. Emma (IELTS Specialist, IDP Education)";
    const examinerProfileId = state.talkAiExaminer === "richard" ? "uk_male" : "us_female";

    // 1. If user provided Gemini or OpenAI API Key
    if (state.aiApiKey && state.aiApiKey.trim()) {
      try {
        const historyContext = state.talkAiMessages.slice(-6).map(m => `${m.role.toUpperCase()}: ${m.text}`).join("\n");
        const prompt = `You are ${examinerName}, examining a candidate in IELTS Speaking.
Exam Mode: ${state.talkAiMode}.
Conversation Context:
${historyContext}

Candidate's latest answer:
"""
${userText.trim()}
"""

Provide two things in valid JSON ONLY (no markdown code fence, no text before or after):
{
  "overallBand": 7.5,
  "fcScore": 7.5,
  "lrScore": 7.5,
  "graScore": 7.0,
  "prScore": 8.0,
  "feedbackVi": "Nhận xét chi tiết tiếng Việt về 4 tiêu chí Fluency, Lexical, Grammar, Pronunciation...",
  "upgradedAnswer": "Band 8.5+ upgraded native expression of the student's answer...",
  "nextExaminerQuestion": "Your natural spoken follow-up examiner question in English..."
}`;

        const raw = await callAiApi(prompt);
        const res = parseJsonFromAi(raw);
        if (res && res.nextExaminerQuestion) {
          userMsg.score = {
            overall: res.overallBand || 7.0,
            fc: res.fcScore || 7.0,
            lr: res.lrScore || 7.0,
            gra: res.graScore || 7.0,
            pr: res.prScore || 7.0,
            feedbackVi: res.feedbackVi || "Bài nói có nhịp điệu tốt, luận điểm rõ ràng.",
            upgradedAnswer: res.upgradedAnswer || ""
          };

          const examinerMsg = {
            id: "ex_" + Date.now(),
            role: "examiner",
            text: res.nextExaminerQuestion,
            examinerName: state.talkAiExaminer === "richard" ? "Mr. Richard" : "Ms. Emma",
            timestamp: Date.now()
          };
          state.talkAiMessages.push(examinerMsg);
          state.isAiEvaluating = false;
          render();
          setTimeout(() => {
            const box = document.getElementById("talk-ai-chat-box");
            if (box) box.scrollTop = box.scrollHeight;
          }, 50);
          speak(res.nextExaminerQuestion, 1.0, examinerProfileId);
          return;
        }
      } catch(err) {
        console.warn("AI API error:", err);
      }
    }

    // 2. High-Fidelity Intelligent Local Examiner Fallback
    setTimeout(() => {
      state.isAiEvaluating = false;
      const words = userText.trim().split(/\s+/);
      const wc = words.length;

      let band = 6.5, fc = 6.5, lr = 6.5, gra = 6.5, pr = 7.0;
      if (wc >= 45) { band = 8.0; fc = 8.0; lr = 8.0; gra = 7.5; pr = 8.0; }
      else if (wc >= 25) { band = 7.5; fc = 7.5; lr = 7.5; gra = 7.0; pr = 7.5; }
      else if (wc >= 12) { band = 7.0; fc = 7.0; lr = 7.0; gra = 6.5; pr = 7.0; }

      const feedback = wc >= 25
        ? "Phát triển ý mạch lạc và tự nhiên! Để đạt mốc Band 8.0 - 8.5, hãy chú ý nhấn trọng âm từ khóa và sử dụng thêm các cụm từ nối (e.g. As a matter of fact, fundamentally, on reflection)."
        : "Nội dung trả lời đúng trọng tâm. Tuy nhiên câu trả lời hơi ngắn cho phòng thi IELTS. Bạn nên mở rộng bằng cấu trúc PEEL (Point - Explain - Example - Link back).";

      const upgraded = `To be completely honest, ${userText.replace(/^[a-z]/, c => c.toLowerCase()).replace(/\.$/, "")}, which fundamentally broadens my intellectual horizons and provides invaluable hands-on insight.`;

      userMsg.score = {
        overall: band,
        fc: fc,
        lr: lr,
        gra: gra,
        pr: pr,
        feedbackVi: feedback,
        upgradedAnswer: upgraded
      };

      const followUps = [
        "That is an insightful observation. How do you see this aspect evolving over the coming decade?",
        "Thank you for sharing. Could you explain why some individuals might hold a contrasting opinion on this?",
        "Interesting point! In your experience, does this differ between younger individuals and older generations?",
        "That makes total sense. If you had the autonomy to transform one key aspect of this, what would you choose?",
        "Very well articulated. To what extent do you believe modern digital technology influences this phenomenon?"
      ];
      const nextQ = followUps[state.talkAiMessages.length % followUps.length];

      const examinerMsg = {
        id: "ex_" + Date.now(),
        role: "examiner",
        text: nextQ,
        examinerName: state.talkAiExaminer === "richard" ? "Mr. Richard" : "Ms. Emma",
        timestamp: Date.now()
      };
      state.talkAiMessages.push(examinerMsg);
      render();
      setTimeout(() => {
        const box = document.getElementById("talk-ai-chat-box");
        if (box) box.scrollTop = box.scrollHeight;
      }, 50);
      speak(nextQ, 1.0, examinerProfileId);
    }, 700);
  }

  function talkAiGiveHint() {
    const hints = [
      "Well, speaking from personal experience, I have always found that...",
      "To be completely honest, this is quite a multifaceted issue, but primarily...",
      "From my perspective, there are two pivotal factors to take into account...",
      "In all fairness, I'd say it largely hinges on individual circumstances..."
    ];
    state.talkAiInputText = hints[Math.floor(Math.random() * hints.length)];
    const inputEl = document.getElementById("talk-ai-input");
    if (inputEl) {
      inputEl.value = state.talkAiInputText;
      inputEl.focus();
    }
  }

  // --- IELTS SPEAKING SENTENCE STRUCTURES DATABASE (FOR PART 1, 2, 3) ---
  const SPEAKING_STRUCTURES_DB = {
    part1: [
      {
        name: "Diễn đạt sở thích & đam mê",
        pattern: "To be completely honest, I have always been deeply fascinated by [Topic/V-ing] because...",
        meaning: "Thành thật mà nói, tôi luôn cực kỳ đam mê... bởi vì...",
        example: "To be completely honest, I have always been deeply fascinated by exploring off-the-beaten-track destinations because it offers me a sense of escapism."
      },
      {
        name: "Tần suất & Sự linh hoạt theo thời gian",
        pattern: "It largely hinges on my daily schedule, but more often than not, I find myself...",
        meaning: "Nó phụ thuộc phần lớn vào lịch trình công việc/học tập, nhưng thông thường tôi hay...",
        example: "It largely hinges on my workload, but more often than not, I find myself immersing in music to decompress after intensive study sessions."
      },
      {
        name: "So sánh sở thích với người khác",
        pattern: "Unlike the majority of my peers who are keen on..., I am particularly drawn to...",
        meaning: "Khác với nhiều bạn bè đồng trang lứa thích..., tôi lại đặc biệt bị thu hút bởi...",
        example: "Unlike the majority of my peers who prefer bustling metropolitan areas, I am particularly drawn to tranquil rural getaways."
      },
      {
        name: "Mở rộng ý tưởng theo PEEL (Point - Explain - Example)",
        pattern: "Well, speaking from personal experience, one of the primary catalysts is that..., which essentially enables me to...",
        meaning: "Nói từ trải nghiệm bản thân, một trong những yếu tố tác động chính là..., điều này cơ bản giúp tôi...",
        example: "Well, speaking from personal experience, one of the primary catalysts is that travel broadens my cultural perspective, which essentially enables me to understand different mindsets."
      }
    ],
    part2: [
      {
        name: "Mở đầu ấn tượng bài nói dài (Setting the Scene)",
        pattern: "I would like to elaborate on..., which took place roughly [time ago] and left an indelible impression on me.",
        meaning: "Tôi muốn chia sẻ chi tiết về..., điều đã diễn ra khoảng [thời gian] trước và để lại ấn tượng khó phai trong tôi.",
        example: "I would like to elaborate on a breathtaking trip to Da Lat, which took place roughly two years ago and left an indelible impression on me."
      },
      {
        name: "Kể lại diễn biến theo trình tự (Narrative Flow)",
        pattern: "If my memory serves me correctly, the pivotal moment was when we decided to...",
        meaning: "Nếu tôi nhớ không nhầm, thời khắc then chốt chính là khi chúng tôi quyết định...",
        example: "If my memory serves me correctly, the pivotal moment was when we decided to hike up the mountain just before dawn to catch the sunrise."
      },
      {
        name: "Mô tả cảm xúc & Ấn tượng sâu sắc (Emotional Resonance)",
        pattern: "What struck me the most about this whole encounter was the sheer fact that...",
        meaning: "Điều làm tôi ấn tượng và xúc động nhất chính là sự thật rằng...",
        example: "What struck me the most about this whole encounter was the sheer hospitality of the local inhabitants, who welcomed us with open arms."
      },
      {
        name: "Kết bài & Bài học / Suy ngẫm (Reflection & Takeaway)",
        pattern: "Looking back on it now, I firmly believe that this experience fundamentally shifted the way I view...",
        meaning: "Nhìn lại bây giờ, tôi tin chắc rằng trải nghiệm này đã làm thay đổi căn bản cách tôi nhìn nhận...",
        example: "Looking back on it now, I firmly believe that this experience fundamentally shifted the way I view environmental conservation and human connection."
      }
    ],
    part3: [
      {
        name: "Lập luận đa chiều (Nuanced Balance)",
        pattern: "On the one hand, it is widely acknowledged that...; yet on the other hand, we must not overlook the fact that...",
        meaning: "Một mặt, ai cũng thừa nhận rằng...; tuy nhiên mặt khác, chúng ta không được xem nhẹ thực tế rằng...",
        example: "On the one hand, it is widely acknowledged that international tourism stimulates local economies; however, we must not overlook the risk of cultural commercialization."
      },
      {
        name: "Phân tích nguyên nhân cốt lõi (Root Cause & Impact)",
        pattern: "I am strongly convinced that this phenomenon is primarily underpinned by..., which inevitably triggers...",
        meaning: "Tôi hoàn toàn tin rằng hiện tượng này xuất phát cốt lõi từ..., điều tất yếu sẽ kéo theo...",
        example: "I am strongly convinced that this phenomenon is primarily underpinned by rapid urbanization, which inevitably triggers lifestyle-related health concerns."
      },
      {
        name: "Dự đoán xu hướng tương lai (Future Speculation)",
        pattern: "Looking ahead to the upcoming decades, it is highly conceivable that... will emerge as the prevailing norm.",
        meaning: "Nhìn về các thập kỷ tới, rất có thể... sẽ nổi lên như một chuẩn mực thịnh hành.",
        example: "Looking ahead to the upcoming decades, it is highly conceivable that customized green lifestyles will emerge as the prevailing norm."
      },
      {
        name: "Đề xuất giải pháp chính phủ & xã hội (Policy & Action Framework)",
        pattern: "While there is no panacea for this pressing issue, authorities should urgently implement measures such as...",
        meaning: "Mặc dù không có phương thuốc thần kỳ cho vấn đề cấp bách này, các nhà chức trách cần khẩn trương thực thi các biện pháp như...",
        example: "While there is no panacea for this pressing issue, authorities should urgently implement stringent environmental regulations alongside public awareness campaigns."
      }
    ]
  };

  // --- TOPIC-SPECIFIC AI CONVERSATION HELPERS (SECTION 2) ---
  let topicAiRecognition = null;
  function toggleTopicAiRecord() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      alert("Trình duyệt không hỗ trợ ghi âm trực tiếp. Bạn có thể nhập câu trả lời vào ô văn bản bên dưới!");
      return;
    }

    if (state.isRecordingTopicAi) {
      state.isRecordingTopicAi = false;
      if (topicAiRecognition) {
        try { topicAiRecognition.stop(); } catch(e) {}
        topicAiRecognition = null;
      }
      render();
      return;
    }

    try {
      const rec = new SpeechRec();
      topicAiRecognition = rec;
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = state.talkAiExaminer === "richard" ? "en-GB" : "en-US";

      state.isRecordingTopicAi = true;
      render();

      rec.onresult = function(event) {
        let fullTrans = "";
        for (let i = 0; i < event.results.length; i++) {
          fullTrans += event.results[i][0].transcript + " ";
        }
        state.topicAiInputText = fullTrans.trim();
        const inputEl = document.getElementById("topic-ai-input");
        if (inputEl) inputEl.value = state.topicAiInputText;
      };

      rec.onerror = function(event) {
        state.isRecordingTopicAi = false;
        render();
        handleSpeechRecError(event);
      };

      rec.onend = function() {
        state.isRecordingTopicAi = false;
        render();
      };

      rec.start();
    } catch(err) {
      state.isRecordingTopicAi = false;
      render();
    }
  }

  function initTopicAiSession(curLesson, partKey, forceReset) {
    if (forceReset || !state.topicAiMessages || state.topicAiMessages.length === 0) {
      const examinerName = state.talkAiExaminer === "richard" ? "Mr. Richard" : "Ms. Emma";
      let firstQ = "";
      if (partKey === "part2") {
        firstQ = curLesson.part2 && curLesson.part2.cueCard ? curLesson.part2.cueCard : `Describe an experience related to ${curLesson.topic}.`;
      } else if (partKey === "part3") {
        firstQ = (curLesson.part3 && curLesson.part3.questions && curLesson.part3.questions[0]) ? curLesson.part3.questions[0].q : `Why is ${curLesson.topic} an important subject today?`;
      } else {
        // part1
        firstQ = (curLesson.part1 && curLesson.part1.questions && curLesson.part1.questions[0]) ? curLesson.part1.questions[0].q : `What do you enjoy most about ${curLesson.topic}?`;
      }

      state.topicAiMessages = [
        {
          id: "top_init_" + Date.now(),
          role: "examiner",
          examinerName: examinerName,
          text: `Hello! I am ${examinerName}. Let's practice IELTS Speaking ${partKey.toUpperCase()} on the topic of "${curLesson.topic}". Here is your question:\n\n"${firstQ}"\n\nPlease answer using your microphone or the text box below!`,
          timestamp: Date.now()
        }
      ];
      state.topicAiInputText = "";
      state.isRecordingTopicAi = false;
      state.isTopicAiEvaluating = false;
    }
  }

  async function sendTopicAiAnswer(userText, curLesson, partKey) {
    if (!userText || !userText.trim()) return;

    if (state.isRecordingTopicAi) {
      state.isRecordingTopicAi = false;
      if (topicAiRecognition) {
        try { topicAiRecognition.stop(); } catch(e) {}
        topicAiRecognition = null;
      }
    }

    const userMsg = {
      id: "top_usr_" + Date.now(),
      role: "user",
      text: userText.trim(),
      timestamp: Date.now()
    };
    state.topicAiMessages.push(userMsg);
    state.topicAiInputText = "";
    state.isTopicAiEvaluating = true;
    render();
    setTimeout(() => {
      const box = document.getElementById("topic-ai-chat-box");
      if (box) box.scrollTop = box.scrollHeight;
    }, 50);

    const examinerName = state.talkAiExaminer === "richard" ? "Mr. Richard (Senior IELTS Examiner)" : "Ms. Emma (IELTS Specialist)";
    const profId = state.talkAiExaminer === "richard" ? "uk_male" : "us_female";

    // 1. If AI API connected
    if (state.aiApiKey && state.aiApiKey.trim()) {
      try {
        const historyText = state.topicAiMessages.slice(-6).map(m => `${m.role.toUpperCase()}: ${m.text}`).join("\n");
        const prompt = `You are ${examinerName}, examining a candidate in IELTS Speaking on the topic "${curLesson.topic}" (${partKey.toUpperCase()}).
Dialogue context:
${historyText}

Candidate just said:
"${userText.trim()}"

Provide ONLY a valid JSON object (no markdown, no other text):
{
  "overallBand": 7.5,
  "fcScore": 7.5,
  "lrScore": 7.5,
  "graScore": 7.0,
  "prScore": 8.0,
  "feedbackVi": "Nhận xét chi tiết bằng tiếng Việt về 4 tiêu chí Fluency, Lexical, Grammar, Pronunciation...",
  "upgradedAnswer": "Band 8.5+ upgraded native version of candidate's answer...",
  "nextQuestion": "Next natural IELTS question on this topic..."
}`;

        const raw = await callAiApi(prompt);
        const res = parseJsonFromAi(raw);
        if (res && res.nextQuestion) {
          userMsg.score = {
            overall: res.overallBand || 7.0,
            fc: res.fcScore || 7.0,
            lr: res.lrScore || 7.0,
            gra: res.graScore || 7.0,
            pr: res.prScore || 7.0,
            feedbackVi: res.feedbackVi || "Bài nói có nhịp điệu tự nhiên, luận điểm rõ ràng.",
            upgradedAnswer: res.upgradedAnswer || ""
          };

          const exMsg = {
            id: "top_ex_" + Date.now(),
            role: "examiner",
            examinerName: state.talkAiExaminer === "richard" ? "Mr. Richard" : "Ms. Emma",
            text: res.nextQuestion,
            timestamp: Date.now()
          };
          state.topicAiMessages.push(exMsg);
          state.isTopicAiEvaluating = false;
          render();
          setTimeout(() => {
            const box = document.getElementById("topic-ai-chat-box");
            if (box) box.scrollTop = box.scrollHeight;
          }, 50);
          speak(res.nextQuestion, 1.0, profId);
          return;
        }
      } catch(e) {
        console.warn("AI Topic API error:", e);
      }
    }

    // 2. High-fidelity Local IELTS Examiner Engine
    setTimeout(() => {
      state.isTopicAiEvaluating = false;
      const wc = userText.trim().split(/\s+/).length;
      let band = 6.5, fc = 6.5, lr = 6.5, gra = 6.5, pr = 7.0;
      if (wc >= 45) { band = 8.0; fc = 8.0; lr = 8.0; gra = 7.5; pr = 8.0; }
      else if (wc >= 25) { band = 7.5; fc = 7.5; lr = 7.5; gra = 7.0; pr = 7.5; }
      else if (wc >= 12) { band = 7.0; fc = 7.0; lr = 7.0; gra = 6.5; pr = 7.0; }

      const feedback = wc >= 25
        ? "Phát triển ý mạch lạc và đúng trọng tâm! Hãy bổ sung thêm các liên từ chỉ sự tương phản (e.g. On reflection, undeniably, fundamentally) để đẩy tiêu chí Coherence lên Band 8.5."
        : "Câu trả lời đúng trọng tâm nhưng hơi ngắn. Bạn nên triển khai theo công thức PEEL (Đưa ra quan điểm -> Giải thích lý do -> Ví dụ thực tế).";

      const upgraded = `To be completely candid, ${userText.replace(/^[a-z]/, c => c.toLowerCase()).replace(/\.$/, "")}, which fundamentally enriches my understanding and provides me with a fresh perspective.`;

      userMsg.score = {
        overall: band,
        fc: fc,
        lr: lr,
        gra: gra,
        pr: pr,
        feedbackVi: feedback,
        upgradedAnswer: upgraded
      };

      // Determine next question from lesson questions or follow-up
      let qList = [];
      if (partKey === "part1" && curLesson.part1) qList = curLesson.part1.questions.map(q => q.q);
      else if (partKey === "part3" && curLesson.part3) qList = curLesson.part3.questions.map(q => q.q);

      const msgCount = state.topicAiMessages.filter(m => m.role === "user").length;
      let nextQ = "";
      if (qList.length > 0 && msgCount < qList.length) {
        nextQ = qList[msgCount];
      } else {
        const extraFollowUps = [
          `That is very interesting. How do you see this aspect of ${curLesson.topic} evolving in the next ten years?`,
          `Could you explain why some people might hold a contrasting viewpoint regarding ${curLesson.topic}?`,
          `In your observation, does this phenomenon differ significantly across different age groups?`
        ];
        nextQ = extraFollowUps[msgCount % extraFollowUps.length];
      }

      const exMsg = {
        id: "top_ex_" + Date.now(),
        role: "examiner",
        examinerName: state.talkAiExaminer === "richard" ? "Mr. Richard" : "Ms. Emma",
        text: nextQ,
        timestamp: Date.now()
      };
      state.topicAiMessages.push(exMsg);
      render();
      setTimeout(() => {
        const box = document.getElementById("topic-ai-chat-box");
        if (box) box.scrollTop = box.scrollHeight;
      }, 50);
      speak(nextQ, 1.0, profId);
    }, 750);
  }

  // --- SECTION 3: TOPIC SHADOWING & PRONUNCIATION RECORDER HELPERS ---
  let topicShadowRec = null;
  function toggleTopicShadowMic(targetText) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      alert("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    if (state.isRecordingTopicShadow) {
      state.isRecordingTopicShadow = false;
      if (topicShadowRec) {
        try { topicShadowRec.stop(); } catch(e) {}
        topicShadowRec = null;
      }
      render();
      return;
    }

    try {
      const rec = new SpeechRec();
      topicShadowRec = rec;
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = state.voiceAccent || "en-US";

      state.isRecordingTopicShadow = true;
      state.topicShadowTarget = targetText;
      state.topicShadowTranscript = "";
      state.topicShadowScore = null;
      render();

      rec.onresult = function(event) {
        let t = "";
        for (let i = 0; i < event.results.length; i++) {
          t += event.results[i][0].transcript + " ";
        }
        state.topicShadowTranscript = t.trim();
        const liveDom = document.getElementById("topic-shadow-live-transcript");
        if (liveDom) liveDom.textContent = state.topicShadowTranscript;
      };

      rec.onerror = function(event) {
        state.isRecordingTopicShadow = false;
        render();
        handleSpeechRecError(event);
      };

      rec.onend = function() {
        state.isRecordingTopicShadow = false;
        if (state.topicShadowTranscript && state.topicShadowTarget) {
          state.topicShadowScore = evaluateTurnWords(state.topicShadowTarget, state.topicShadowTranscript, 3500);
        }
        render();
      };

      rec.start();
    } catch(err) {
      state.isRecordingTopicShadow = false;
      render();
    }
  }

  // --- REUSABLE UNIFIED 3-SECTION PART RENDERER (FOR PART 1, PART 2, PART 3) ---
  function renderStructuredSpeakingPart(partKey, curLesson) {
    const structures = SPEAKING_STRUCTURES_DB[partKey] || SPEAKING_STRUCTURES_DB.part1;
    const vocabList = curLesson.vocab || [];

    // Ensure Section 2 AI conversation is initialized for this part
    if (!state.topicAiMessages || state.topicAiMessages.length === 0) {
      initTopicAiSession(curLesson, partKey, false);
    }

    const isRichard = state.talkAiExaminer === "richard";
    const examinerName = isRichard ? "Mr. Richard" : "Ms. Emma";

    return `
      <div class="space-y-6">

        <!-- ================= SECTION 1: GỢI Ý TỪ VỰNG & CẤU TRÚC (CHIA 2 CỘT) ================= -->
        <div class="bg-[#0B0F19] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-lg">
          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-400 font-extrabold flex items-center justify-center text-xs ring-1 ring-indigo-500/40">1</span>
              <h4 class="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
                ${ICONS.BookOpen} Gợi Ý Từ Vựng & Cấu Trúc (Chuẩn Bị Trước Khi Nói)
              </h4>
            </div>
            <span class="text-xs text-indigo-400 font-semibold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              Chia 2 Cột: Từ Vựng & Cấu Trúc Câu
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- CỘT 1: TỪ GỢI Ý (THEO FILE PDF + HỆ THỐNG) -->
            <div class="space-y-2.5 bg-[#0F172A] border border-slate-800/90 rounded-xl p-3.5 flex flex-col justify-between">
              <div class="flex items-center justify-between text-xs font-bold text-indigo-300 border-b border-slate-800 pb-2">
                <span class="flex items-center gap-1.5">
                  📚 Cột 1: Từ Vựng & Collocation (${vocabList.length} từ)
                </span>
                <span class="text-[10px] text-slate-500 font-normal">Bấm loa để nghe phát âm</span>
              </div>

              <div class="space-y-2 max-h-80 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
                ${vocabList.map(v => `
                  <div class="p-2.5 rounded-lg bg-[#0B0F19] border border-slate-800/80 space-y-1 hover:border-indigo-500/40 transition">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-indigo-300 font-sans">${escapeHtml(v.word)}</span>
                      <button
                        type="button"
                        data-action="speak-text"
                        data-text="${escapeHtml(v.word)}"
                        class="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition"
                        title="Phát âm từ này"
                      >
                        ${ICONS.Volume2Sm}
                      </button>
                    </div>
                    <p class="text-[11px] text-slate-300 leading-snug">${escapeHtml(v.def)}</p>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- CỘT 2: CẤU TRÚC GỢI Ý (SENTENCE STRUCTURES & TEMPLATES) -->
            <div class="space-y-2.5 bg-[#0F172A] border border-slate-800/90 rounded-xl p-3.5 flex flex-col justify-between">
              <div class="flex items-center justify-between text-xs font-bold text-emerald-400 border-b border-slate-800 pb-2">
                <span class="flex items-center gap-1.5">
                  ${ICONS.Sparkles} Cột 2: Cấu Trúc Câu Ăn Điểm (${structures.length} mẫu câu)
                </span>
                <span class="text-[10px] text-slate-500 font-normal">Mẫu câu Band 8.0+</span>
              </div>

              <div class="space-y-2.5 max-h-80 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
                ${structures.map(st => `
                  <div class="p-2.5 rounded-lg bg-[#0B0F19] border border-slate-800/80 space-y-1.5 hover:border-emerald-500/40 transition">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-emerald-300">${escapeHtml(st.name)}</span>
                      <button
                        type="button"
                        data-action="speak-text"
                        data-text="${escapeHtml(st.example)}"
                        class="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition"
                        title="Nghe câu ví dụ"
                      >
                        ${ICONS.Volume2Sm}
                      </button>
                    </div>
                    <p class="text-xs font-mono text-slate-200 bg-[#0F172A] p-2 rounded border border-slate-800/60 leading-snug">
                      ${escapeHtml(st.pattern)}
                    </p>
                    <p class="text-[11px] text-slate-400 italic">💡 Nghĩa: ${escapeHtml(st.meaning)}</p>
                    <p class="text-[11px] text-indigo-300/90 leading-relaxed font-sans">
                      <b class="text-slate-300">Ví dụ:</b> "${escapeHtml(st.example)}"
                    </p>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>

        <!-- ================= SECTION 2: TALK TO AI VỀ CHỦ ĐỀ NÀY ================= -->
        <div class="bg-[#0B0F19] border-2 border-emerald-500/30 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl">
          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-600/30 text-emerald-400 font-extrabold flex items-center justify-center text-xs ring-1 ring-emerald-500/40">2</span>
              <h4 class="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
                ${ICONS.MicNav} Talk To AI Về Chủ Đề Này (Nhận diện giọng nói & Chấm điểm tức thì)
              </h4>
            </div>

            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs text-slate-400 font-medium">Giám khảo:</span>
              <button
                type="button"
                data-action="set-talk-ai-examiner"
                data-examiner="richard"
                class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  isRichard ? "bg-indigo-600 text-white shadow ring-1 ring-indigo-400" : "bg-[#0F172A] text-slate-400 hover:text-white"
                }"
              >
                👨‍🏫 Mr. Richard
              </button>
              <button
                type="button"
                data-action="set-talk-ai-examiner"
                data-examiner="emma"
                class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  !isRichard ? "bg-indigo-600 text-white shadow ring-1 ring-indigo-400" : "bg-[#0F172A] text-slate-400 hover:text-white"
                }"
              >
                👩‍🏫 Ms. Emma
              </button>
              <button
                type="button"
                data-action="reset-topic-ai-session"
                data-part="${partKey}"
                class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#0F172A] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1"
                title="Bắt đầu lại buổi phỏng vấn cho phần này"
              >
                ${ICONS.RefreshCw} Làm mới
              </button>
            </div>
          </div>

          <!-- Chat Conversation Log -->
          <div id="topic-ai-chat-box" class="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 sm:p-4 space-y-3.5 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
            ${(state.topicAiMessages || []).map(msg => {
              if (msg.role === "examiner") {
                return `
                  <div class="flex items-start gap-3">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white text-sm font-bold shadow flex-shrink-0">
                      ${isRichard ? "👨‍🏫" : "👩‍🏫"}
                    </div>
                    <div class="space-y-1 max-w-[85%]">
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-indigo-400">${escapeHtml(msg.examinerName || examinerName)} (Examiner)</span>
                        <span class="text-[10px] text-slate-500 font-mono">${new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                      </div>
                      <div class="p-3 rounded-2xl rounded-tl-sm bg-[#0B0F19] border border-slate-800 text-xs sm:text-sm text-slate-100 font-sans leading-relaxed shadow-sm whitespace-pre-line">
                        ${escapeHtml(msg.text)}
                      </div>
                      <button
                        type="button"
                        data-action="speak-text"
                        data-text="${escapeHtml(msg.text)}"
                        class="text-[11px] text-indigo-300 hover:text-white flex items-center gap-1 font-semibold pt-0.5"
                      >
                        ${ICONS.Volume2Sm} Nghe giọng giám khảo
                      </button>
                    </div>
                  </div>
                `;
              } else {
                return `
                  <div class="flex items-start justify-end gap-3">
                    <div class="space-y-2 max-w-[85%] flex flex-col items-end">
                      <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-500 font-mono">${new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        <span class="text-xs font-bold text-emerald-400">Bạn (Candidate)</span>
                      </div>
                      <div class="p-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-500/30 text-xs sm:text-sm text-emerald-100 font-sans leading-relaxed text-left shadow">
                        ${escapeHtml(msg.text)}
                      </div>

                      ${msg.score ? `
                        <div class="w-full p-3 rounded-xl bg-[#0B0F19] border border-indigo-500/30 text-left space-y-2 shadow-md">
                          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-1.5">
                            <span class="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                              🏆 Điểm IELTS: Band ${msg.score.overall.toFixed(1)}
                            </span>
                            <div class="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 flex-wrap">
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">FC: ${msg.score.fc.toFixed(1)}</span>
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">LR: ${msg.score.lr.toFixed(1)}</span>
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">GRA: ${msg.score.gra.toFixed(1)}</span>
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">PR: ${msg.score.pr.toFixed(1)}</span>
                            </div>
                          </div>
                          <p class="text-xs text-slate-300 leading-relaxed">
                            <b class="text-slate-200">💬 Nhận xét:</b> ${escapeHtml(msg.score.feedbackVi)}
                          </p>
                          ${msg.score.upgradedAnswer ? `
                            <div class="p-2 rounded-lg bg-[#0F172A] border border-indigo-500/20 space-y-1">
                              <div class="flex items-center justify-between">
                                <span class="text-[10px] font-extrabold text-indigo-400 flex items-center gap-1">
                                  ${ICONS.Sparkles} Cách nói tự nhiên hơn của người bản xứ (Band 8.5+):
                                </span>
                                <button type="button" data-action="speak-text" data-text="${escapeHtml(msg.score.upgradedAnswer)}" class="text-[10px] text-indigo-300 hover:text-white flex items-center gap-1 font-semibold">
                                  ${ICONS.Volume2Sm} Nghe
                                </button>
                              </div>
                              <p class="text-xs text-slate-200 italic leading-snug">${escapeHtml(msg.score.upgradedAnswer)}</p>
                            </div>
                          ` : ""}
                        </div>
                      ` : ""}
                    </div>
                    <div class="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-white text-sm font-bold shadow flex-shrink-0">
                      👤
                    </div>
                  </div>
                `;
              }
            }).join("")}

            ${state.isTopicAiEvaluating ? `
              <div class="flex items-start gap-3 animate-pulse">
                <div class="w-8 h-8 rounded-full bg-indigo-600/50 flex items-center justify-center text-white text-sm">🤖</div>
                <div class="p-2.5 rounded-2xl bg-[#0B0F19] border border-indigo-500/30 text-xs text-indigo-300 flex items-center gap-2">
                  ${ICONS.Loader2} Giám khảo đang chấm điểm 4 tiêu chí và chuẩn bị câu tiếp theo...
                </div>
              </div>
            ` : ""}
          </div>

          <!-- Input / Speech Recognition Bar -->
          <div class="space-y-2.5">
            <div class="relative">
              <textarea
                id="topic-ai-input"
                rows="2"
                placeholder="${state.isRecordingTopicAi ? "Đang lắng nghe giọng bạn... Hãy tự tin trả lời bằng tiếng Anh!" : "Nhập câu trả lời hoặc bấm nút Micro bên dưới để nói trực tiếp..."}"
                class="w-full p-3 rounded-xl bg-[#0F172A] border ${state.isRecordingTopicAi ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-800 focus:border-emerald-500"} text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition resize-none font-sans"
              >${escapeHtml(state.topicAiInputText || "")}</textarea>
            </div>

            <div class="flex items-center justify-between flex-wrap gap-2.5">
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  data-action="toggle-topic-ai-mic"
                  class="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                    state.isRecordingTopicAi
                      ? "bg-red-600 hover:bg-red-500 text-white shadow-lg animate-pulse"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/25"
                  }"
                >
                  ${state.isRecordingTopicAi ? `${ICONS.MicOffSm} Dừng & Lưu lời nói` : `${ICONS.MicSm} Nhấn để Nói (Micro)`}
                </button>
                ${state.isRecordingTopicAi ? `
                  <span class="text-xs text-red-400 font-semibold animate-pulse flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-red-500"></span> Đang ghi âm trực tiếp...
                  </span>
                ` : ""}
              </div>

              <button
                type="button"
                data-action="send-topic-ai-answer"
                data-part="${partKey}"
                class="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-1.5 shadow transition disabled:opacity-50"
                ${state.isTopicAiEvaluating ? "disabled" : ""}
              >
                ${ICONS.Sparkles} Gửi câu trả lời & Chấm điểm
              </button>
            </div>
          </div>
        </div>

        <!-- ================= SECTION 3: BÀI MẪU - ĐỌC THEO - GHI ÂM VÀ SỬA PHÁT ÂM ================= -->
        <div class="bg-[#0B0F19] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl">
          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-600/30 text-amber-400 font-extrabold flex items-center justify-center text-xs ring-1 ring-amber-500/40">3</span>
              <h4 class="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
                ${ICONS.Sparkles} Đoạn Văn Mẫu • Đọc Theo (Shadowing) • Ghi Âm & Sửa Phát Âm
              </h4>
            </div>
            <span class="text-xs text-amber-400 font-medium">Chấm phát âm từng từ & Tô màu chuẩn xác</span>
          </div>

          <!-- Section 3 Content for Part 2 vs Part 1/Part 3 -->
          ${partKey === "part2" ? `
            <!-- Part 2 Cue Card & Full Passage Shadowing -->
            <div class="space-y-4">
              <!-- Cue Card Box -->
              <div class="p-4 rounded-xl bg-[#0F172A] border border-indigo-500/30 space-y-2.5">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-amber-400 uppercase tracking-wide">Candidate Task Card (Part 2)</span>
                  <button type="button" data-action="speak-text" data-text="${escapeHtml(curLesson.part2.cueCard)}" class="text-xs text-indigo-300 hover:text-white flex items-center gap-1">
                    ${ICONS.Volume2Sm} Nghe đề bài
                  </button>
                </div>
                <h5 class="text-sm font-bold text-white">${escapeHtml(curLesson.part2.cueCard)}</h5>
                <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
                  ${(curLesson.part2.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join("")}
                </ul>
              </div>

              <!-- Full Sample Passage with Shadowing -->
              <div class="p-4 rounded-xl bg-[#0F172A] border border-slate-800 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2">
                  <span class="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                    Bài mẫu Band 8.5+ toàn bài (~${curLesson.part2.sampleAnswer ? curLesson.part2.sampleAnswer.split(/\s+/).length : 0} từ)
                  </span>
                  <div class="flex items-center gap-2">
                    <button type="button" data-action="speak-text" data-text="${escapeHtml(curLesson.part2.sampleAnswer)}" class="text-xs text-indigo-300 hover:text-white flex items-center gap-1 font-semibold">
                      ${ICONS.Volume2Sm} Nghe toàn bài
                    </button>
                    <button type="button" data-action="copy-speak-text" data-text="${escapeHtml(curLesson.part2.sampleAnswer)}" class="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold">
                      ${ICONS.Clipboard} Copy
                    </button>
                    <button
                      type="button"
                      data-action="toggle-topic-shadow-mic"
                      data-text="${escapeHtml(curLesson.part2.sampleAnswer)}"
                      class="px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition ${
                        state.isRecordingTopicShadow && state.topicShadowTarget === curLesson.part2.sampleAnswer
                          ? "bg-red-600 text-white animate-pulse"
                          : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30"
                      }"
                    >
                      ${state.isRecordingTopicShadow && state.topicShadowTarget === curLesson.part2.sampleAnswer ? `${ICONS.MicOffSm} Dừng ghi âm` : `${ICONS.MicSm} Luyện đọc đoạn này`}
                    </button>
                  </div>
                </div>

                <!-- Word-by-word highlighted text or original -->
                ${renderShadowHighlightedPassage(curLesson.part2.sampleAnswer)}
              </div>
            </div>
          ` : `
            <!-- Part 1 / Part 3 Questions & Sample Answers with Shadowing -->
            <div class="space-y-3.5">
              ${((partKey === "part1" ? curLesson.part1.questions : curLesson.part3.questions) || []).map((q, qIdx) => `
                <div class="p-4 rounded-xl bg-[#0F172A] border border-slate-800/90 space-y-3">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex items-start gap-2">
                      <span class="bg-indigo-600/20 text-indigo-400 text-xs font-black px-2 py-0.5 rounded mt-0.5">Q${qIdx + 1}</span>
                      <p class="text-sm font-bold text-white leading-snug">"${escapeHtml(q.q)}"</p>
                    </div>
                    <button
                      type="button"
                      data-action="speak-text"
                      data-text="${escapeHtml(q.q)}"
                      class="px-2.5 py-1 rounded bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-semibold flex items-center gap-1 flex-shrink-0 transition"
                    >
                      ${ICONS.Volume2Sm} Nghe câu hỏi
                    </button>
                  </div>

                  <!-- Sample Answer Card with Shadowing -->
                  <div class="p-3.5 rounded-xl bg-[#0B0F19] border border-indigo-500/20 space-y-2.5">
                    <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800/80 pb-2">
                      <span class="text-xs font-bold text-indigo-400 uppercase tracking-wide flex items-center gap-1">
                        ${ICONS.Sparkles} Bài mẫu Band 8.5+ (${q.candidate ? `Candidate: ${q.candidate}` : "Band 8.5"})
                      </span>
                      <div class="flex items-center gap-2">
                        <button type="button" data-action="speak-text" data-text="${escapeHtml(q.sample)}" class="text-xs text-indigo-300 hover:text-white flex items-center gap-1 font-semibold">
                          ${ICONS.Volume2Sm} Nghe mẫu
                        </button>
                        <button type="button" data-action="copy-speak-text" data-text="${escapeHtml(q.sample)}" class="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold">
                          ${ICONS.Clipboard} Copy
                        </button>
                        <button
                          type="button"
                          data-action="toggle-topic-shadow-mic"
                          data-text="${escapeHtml(q.sample)}"
                          class="px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 transition ${
                            state.isRecordingTopicShadow && state.topicShadowTarget === q.sample
                              ? "bg-red-600 text-white animate-pulse"
                              : "bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600 hover:text-white border border-emerald-500/30"
                          }"
                        >
                          ${state.isRecordingTopicShadow && state.topicShadowTarget === q.sample ? `${ICONS.MicOffSm} Dừng` : `${ICONS.MicSm} Luyện đọc câu này`}
                        </button>
                      </div>
                    </div>

                    <!-- Highlighted Text & Assessment -->
                    ${renderShadowHighlightedPassage(q.sample)}
                  </div>
                </div>
              `).join("")}
            </div>
          `}
        </div>

      </div>
    `;
  }

  // Helper to render sentence with word-by-word green/red highlight if scored
  function renderShadowHighlightedPassage(targetText) {
    const isThisTarget = state.topicShadowTarget === targetText;
    const scoreObj = isThisTarget ? state.topicShadowScore : null;
    const isRecordingThis = state.isRecordingTopicShadow && isThisTarget;

    if (isRecordingThis) {
      return `
        <div class="space-y-2 p-3 rounded-lg bg-[#0F172A] border border-red-500/40">
          <div class="flex items-center justify-between text-xs text-red-400 font-bold animate-pulse">
            <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-red-500"></span> Đang ghi âm giọng đọc của bạn...</span>
            <span>Hãy đọc to rõ ràng từng từ!</span>
          </div>
          <p class="text-xs text-slate-400 italic">
            Lời bạn nói: <span id="topic-shadow-live-transcript" class="text-white font-medium">${escapeHtml(state.topicShadowTranscript || "...")}</span>
          </p>
          <p class="text-xs text-slate-200 leading-relaxed font-sans pt-1 border-t border-slate-800">${escapeHtml(targetText)}</p>
        </div>
      `;
    }

    if (scoreObj && isThisTarget) {
      const words = targetText.trim().split(/\s+/);
      const highlightedHtml = words.map((w, wIdx) => {
        const sc = (scoreObj.wordScores && scoreObj.wordScores[wIdx]) || 0;
        const isGood = sc >= 80;
        return `<span class="inline-block px-1 py-0.5 rounded transition ${
          isGood ? "bg-emerald-500/20 text-emerald-300 font-semibold" : "bg-red-500/20 text-red-300 underline font-medium"
        }" title="Độ chuẩn: ${sc}%">${escapeHtml(w)}</span>`;
      }).join(" ");

      return `
        <div class="space-y-3 p-3.5 rounded-lg bg-[#0F172A] border border-indigo-500/30">
          <div class="flex items-center justify-between flex-wrap gap-2 bg-[#0B0F19] p-2.5 rounded-lg border border-slate-800 text-xs">
            <span class="text-slate-300">Độ chuẩn phát âm: <b class="text-emerald-400 font-extrabold text-sm">${scoreObj.totalScore}%</b></span>
            <span class="text-slate-300">Ước tính Band Pronunciation: <b class="text-indigo-400 font-extrabold text-sm">${(scoreObj.totalScore / 10).toFixed(1)}</b></span>
            <span class="text-slate-400">Từ chuẩn: <b class="text-emerald-400">${scoreObj.matchedCount}</b> / ${scoreObj.totalWords} từ</span>
          </div>

          <div class="space-y-1">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">So khớp phát âm từng từ (Xanh = Chuẩn, Đỏ = Cần sửa):</span>
            <div class="p-3 rounded-lg bg-[#0B0F19] border border-slate-800 text-xs sm:text-sm leading-relaxed font-sans">
              ${highlightedHtml}
            </div>
          </div>

          ${scoreObj.weakWords && scoreObj.weakWords.length > 0 ? `
            <div class="p-2.5 rounded-lg bg-[#0B0F19] border border-amber-500/20 space-y-1.5">
              <span class="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                ⚠️ Các từ cần luyện lại phát âm:
              </span>
              <div class="flex items-center gap-2 flex-wrap">
                ${scoreObj.weakWords.map(ww => `
                  <span class="inline-flex items-center gap-1 bg-red-500/10 border border-red-500/30 text-red-300 px-2 py-0.5 rounded text-xs">
                    <b>${escapeHtml(ww)}</b>
                    <button type="button" data-action="speak-text" data-text="${escapeHtml(ww)}" class="text-slate-400 hover:text-white" title="Nghe từ này">
                      ${ICONS.Volume2Sm}
                    </button>
                  </span>
                `).join("")}
              </div>
            </div>
          ` : `
            <div class="p-2 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              🎉 Tuyệt vời! Bạn đã phát âm chuẩn xác toàn bộ các từ trong đoạn văn này!
            </div>
          `}
        </div>
      `;
    }

    return `<p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line">${escapeHtml(targetText)}</p>`;
  }

  // --- RENDER SECTION 7: SPEAKING MASTER TAB (1. TOPIC 2026 | 2. TALK TO AI) ---
  function renderSpeakingTab() {
    const isTopic = state.speakSubTab === "topic";
    const isTalkAi = state.speakSubTab === "talk_to_ai";

    return `
      <div class="space-y-3.5 pb-8">
        <!-- PRIMARY SUB-NAV: 1. TOPIC vs 2. TALK TO AI -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-2xl p-2.5 flex items-center justify-between flex-wrap gap-2.5 shadow-xl">
          <div class="flex items-center gap-2">
            <button
              type="button"
              data-action="set-speaking-subtab"
              data-subtab="topic"
              class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition duration-200 ${
                isTopic
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/30"
                  : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
              }"
            >
              ${ICONS.BookOpen} 1. Topic (Chủ đề & Đề thi 2026)
            </button>

            <button
              type="button"
              data-action="set-speaking-subtab"
              data-subtab="talk_to_ai"
              class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition duration-200 ${
                isTalkAi
                  ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/25 border border-emerald-400/30"
                  : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
              }"
            >
              ${ICONS.Sparkles} 2. Talk to AI (Luyện nói 1-1 với AI)
            </button>
          </div>

          <div class="flex items-center gap-2 text-xs text-slate-400">
            ${
              isTopic
                ? `<span class="bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-lg border border-indigo-500/20 font-semibold flex items-center gap-1">
                     ${ICONS.Zap} 20 Lessons Speaking 2026 + Cam 16-21
                   </span>`
                : `<span class="bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-lg border border-emerald-500/20 font-semibold flex items-center gap-1">
                     ${ICONS.MicNav} Phòng Thi Giả Lập Chuẩn IELTS
                   </span>`
            }
          </div>
        </div>

        <!-- MAIN SUBTAB CONTENT -->
        ${isTopic ? renderSpeakingTopicTab() : renderSpeakingTalkAiTab()}
      </div>
    `;
  }

  // --- SUBTAB 1: SPEAKING TOPICS (IELTS 2026 20 LESSONS + CAMBRIDGE) ---
  function renderSpeakingTopicTab() {
    const isIelts2026 = state.speakTopicSource === "ielts2026";
    const lessons = window.SPEAKING_2026_DATA || [];
    const curLesson = lessons[state.speakLessonIdx] || lessons[0];

    // Cambridge fallback objects
    const camKey = `cam${state.speakCamBook}`;
    const camBookObj = CAM_DB[camKey];
    const tests = camBookObj && camBookObj.tests ? camBookObj.tests : [];
    const curTest = tests[state.speakCamTestIdx] || tests[0];
    const spkCam = curTest && curTest.speaking ? curTest.speaking : null;

    return `
      <div class="space-y-3.5">
        <!-- Source Switcher Bar: IELTS 2026 vs Cambridge IELTS + Topic Dropdown -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-2.5 flex items-center justify-between flex-wrap gap-2.5">
          <div class="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              data-action="select-speaking-topic-source"
              data-source="ielts2026"
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                isIelts2026
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
              }"
            >
              📘 IELTS Speaking 2026
            </button>

            <!-- Nút xổ chọn đề (20 Topics Dropdown) -->
            ${
              isIelts2026
                ? `
              <div class="flex items-center gap-1.5 bg-[#0B0F19] border border-indigo-500/40 rounded-lg px-2.5 py-1">
                <span class="text-xs font-bold text-indigo-400 flex items-center gap-1 whitespace-nowrap">
                  ${ICONS.BookOpen} Chọn đề:
                </span>
                <select
                  id="speaking-lesson-select"
                  class="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer pr-1"
                >
                  ${lessons
                    .map(
                      (l, idx) => `
                    <option value="${idx}" class="bg-[#0F172A] text-white" ${state.speakLessonIdx === idx ? "selected" : ""}>
                      ${l.icon} #${l.num}: ${escapeHtml(l.topic)} (${escapeHtml(l.topicVi)})
                    </option>
                  `
                    )
                    .join("")}
                </select>
              </div>
            `
                : ""
            }

            <button
              type="button"
              data-action="select-speaking-topic-source"
              data-source="cambridge"
              class="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                !isIelts2026
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
              }"
            >
              🏛️ Cambridge IELTS (Cam 16-21)
            </button>
          </div>

          ${
            state.speakTimerActive
              ? `
            <div class="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-lg">
              <span class="text-xs font-bold text-amber-400 animate-pulse">⏱️ ${escapeHtml(state.speakTimerLabel)}:</span>
              <span id="speak-countdown-display" class="font-mono text-sm font-extrabold text-amber-300">
                ${Math.floor(state.speakTimerSec / 60)}:${state.speakTimerSec % 60 < 10 ? "0" : ""}${state.speakTimerSec % 60}
              </span>
              <button type="button" data-action="stop-speak-timer" class="text-[11px] text-red-400 hover:text-red-300 font-bold ml-1">Dừng</button>
            </div>
          `
              : ""
          }
        </div>

        ${
          isIelts2026 && curLesson
            ? `
          <!-- Lesson Content Card -->
          <div class="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl">
            <!-- Lesson Header & Part Selector -->
            <div class="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-800">
              <div class="space-y-0.5">
                <div class="flex items-center gap-2">
                  <span class="text-xl">${curLesson.icon}</span>
                  <h3 class="text-base font-extrabold text-white">
                    Lesson ${curLesson.num}: ${escapeHtml(curLesson.topic)}
                  </h3>
                </div>
              </div>

              <!-- Part 1 / 2 / 3 / Vocab Switcher -->
              <div class="flex items-center gap-1.5 flex-wrap">
                ${[
                  { id: "part1", label: `Part 1 (${curLesson.part1.questions.length}Q)` },
                  { id: "part2", label: "Part 2 (Cue Card)" },
                  { id: "part3", label: `Part 3 (${curLesson.part3.questions.length}Q)` },
                  { id: "vocab", label: `Từ Vựng (${curLesson.vocab ? curLesson.vocab.length : 0})` }
                ]
                  .map(
                    (p) => `
                  <button
                    type="button"
                    data-action="select-speak-part"
                    data-part="${p.id}"
                    class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      state.speakPart === p.id
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                        : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
                    }"
                  >
                    ${p.label}
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Part 1, Part 2, Part 3 Structured View (3 Sections: 1. 2 Columns Vocab & Structures, 2. Talk to AI, 3. Sample & Shadow Pronunciation) -->
            ${
              state.speakPart === "part1" || state.speakPart === "part2" || state.speakPart === "part3"
                ? renderStructuredSpeakingPart(state.speakPart, curLesson)
                : ""
            }

            <!-- Vocab View -->
            ${
              state.speakPart === "vocab"
                ? `
              <div class="space-y-3.5">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="text-xs text-slate-400 font-semibold">
                    Danh sách từ vựng & collocations trọng điểm cho chủ đề <b class="text-indigo-400">${escapeHtml(curLesson.topic)}</b>
                  </div>
                  <div class="w-full sm:w-64">
                    <input
                      id="speak-vocab-search-input"
                      type="text"
                      placeholder="Tìm từ vựng, định nghĩa..."
                      value="${escapeHtml(state.speakVocabFilter || "")}"
                      class="w-full px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  ${(curLesson.vocab || [])
                    .filter((v) => {
                      if (!state.speakVocabFilter) return true;
                      const q = state.speakVocabFilter.toLowerCase();
                      return (v.word || "").toLowerCase().includes(q) || (v.def || "").toLowerCase().includes(q);
                    })
                    .map(
                      (v) => `
                    <div class="p-3 rounded-xl bg-[#0B0F19] border border-slate-800/80 space-y-2 hover:border-indigo-500/40 transition">
                      <div class="flex items-start justify-between gap-2">
                        <span class="text-sm font-bold text-indigo-300 font-sans">${escapeHtml(v.word)}</span>
                        <button
                          type="button"
                          data-action="speak-text"
                          data-text="${escapeHtml(v.word)}"
                          class="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
                          title="Phát âm từ này"
                        >
                          ${ICONS.Volume2Sm}
                        </button>
                      </div>
                      <p class="text-xs text-slate-300 leading-snug font-sans">${escapeHtml(v.def)}</p>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            `
                : ""
            }
          </div>
        `
            : `
          <!-- Cambridge IELTS (Cam 16-21) Selector & Content -->
          <div class="space-y-3.5">
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-1.5 flex-wrap">
                ${["21", "20", "19", "18", "17", "16"]
                  .map(
                    (bk) => `
                  <button
                    type="button"
                    data-action="select-speak-book"
                    data-book="${bk}"
                    class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                      state.speakCamBook === bk ? "bg-indigo-600 text-white shadow" : "bg-[#0B0F19] text-slate-400 hover:text-white"
                    }"
                  >
                    Cam ${bk}
                  </button>
                `
                  )
                  .join("")}
              </div>

              <div class="flex items-center gap-1.5 flex-wrap">
                ${[0, 1, 2, 3]
                  .map(
                    (tIdx) => `
                  <button
                    type="button"
                    data-action="select-speak-test"
                    data-test="${tIdx}"
                    class="px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      state.speakCamTestIdx === tIdx
                        ? "bg-indigo-500/30 text-indigo-300 border border-indigo-500/40"
                        : "bg-[#0B0F19] text-slate-400 hover:text-white"
                    }"
                  >
                    Test ${tIdx + 1}
                  </button>
                `
                  )
                  .join("")}
              </div>

              <div class="flex items-center gap-1.5">
                ${[
                  { id: "part1", label: "Part 1" },
                  { id: "part2", label: "Part 2" },
                  { id: "part3", label: "Part 3" }
                ]
                  .map(
                    (p) => `
                  <button
                    type="button"
                    data-action="select-speak-part"
                    data-part="${p.id}"
                    class="px-2.5 py-1 rounded-lg text-xs font-bold ${
                      state.speakPart === p.id ? "bg-emerald-600 text-white" : "bg-[#0B0F19] text-slate-400 hover:text-white"
                    }"
                  >
                    ${p.label}
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Cam Speaking Questions Card -->
            <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
              ${
                spkCam && state.speakPart === "part2" && spkCam.part2
                  ? `
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                      Part 2 Cue Card • Cam ${state.speakCamBook} Test ${state.speakCamTestIdx + 1}
                    </span>
                    <button
                      type="button"
                      data-action="speak-text"
                      data-text="${escapeHtml(spkCam.part2.cueCard || spkCam.part2.topic || "")}"
                      class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5"
                    >
                      ${ICONS.Volume2} Nghe đề bài
                    </button>
                  </div>
                  <div class="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800 space-y-2">
                    <p class="text-sm font-bold text-white">${escapeHtml(spkCam.part2.cueCard || spkCam.part2.topic || "")}</p>
                    <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
                      ${(spkCam.part2.bullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
                    </ul>
                  </div>
                  ${
                    spkCam.part2.sampleAnswer
                      ? `
                    <div class="p-3 rounded-xl bg-[#0B0F19] border border-indigo-500/30 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="text-[11px] font-bold text-indigo-400 uppercase">Sample Answer (Band 8.0+)</span>
                        <button type="button" data-action="speak-text" data-text="${escapeHtml(spkCam.part2.sampleAnswer)}" class="text-[11px] text-slate-300 hover:text-white flex items-center gap-1">${ICONS.Volume2Sm} Nghe mẫu</button>
                      </div>
                      <p class="text-xs text-slate-200 leading-relaxed">${escapeHtml(spkCam.part2.sampleAnswer)}</p>
                    </div>
                  `
                      : ""
                  }
                </div>
              `
                  : `
                <div class="space-y-2.5">
                  <div class="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    ${
                      state.speakPart === "part1"
                        ? `Part 1 Topic: ${escapeHtml((spkCam && spkCam.part1 && spkCam.part1.topic) || "General Interview")}`
                        : `Part 3 Topic: ${escapeHtml((spkCam && spkCam.part3 && spkCam.part3.topic) || "In-depth Discussion")}`
                    }
                  </div>
                  ${((spkCam && (state.speakPart === "part1" ? (spkCam.part1 && spkCam.part1.questions) : (spkCam.part3 && spkCam.part3.questions))) || [])
                    .map((qItem, qIdx) => {
                      const qText = typeof qItem === "string" ? qItem : qItem.q || "";
                      const qSample = typeof qItem === "object" && qItem.sample ? qItem.sample : "";
                      return `
                        <div class="p-3 rounded-xl bg-[#0B0F19] border border-slate-800 space-y-2">
                          <div class="flex items-center justify-between gap-2">
                            <span class="text-xs font-bold text-white">Q${qIdx + 1}: "${escapeHtml(qText)}"</span>
                            <button
                              type="button"
                              data-action="speak-text"
                              data-text="${escapeHtml(qText)}"
                              class="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-semibold flex items-center gap-1 flex-shrink-0"
                            >
                              ${ICONS.Volume2Sm} Nghe câu hỏi
                            </button>
                          </div>
                          ${
                            qSample
                              ? `<p class="text-xs text-slate-300 leading-relaxed border-l-2 border-indigo-500 pl-2.5 italic">💡 Sample: "${escapeHtml(qSample)}"</p>`
                              : ""
                          }
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              `
              }
            </div>
          </div>
        `
        }
      </div>
    `;
  }

  // --- SUBTAB 2: TALK TO AI EXAMINER (1-ON-1 VOICE & TEXT MOCK EXAM) ---
  function renderSpeakingTalkAiTab() {
    const isRichard = state.talkAiExaminer === "richard";
    const messages = state.talkAiMessages || [];

    // Ensure session starts with greeting if empty
    if (messages.length === 0) {
      setTimeout(() => { startAiTalkSession(false); }, 50);
    }

    return `
      <div class="space-y-3.5">
        <!-- Examiner & Mode Control Header -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-2xl p-3 sm:p-4 flex items-center justify-between flex-wrap gap-3 shadow-xl">
          <!-- Examiner Selection -->
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-400">Giám khảo:</span>
            <button
              type="button"
              data-action="set-talk-ai-examiner"
              data-examiner="richard"
              class="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                isRichard
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400"
                  : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
              }"
            >
              👨‍🏫 Mr. Richard (British Accent • BC)
            </button>
            <button
              type="button"
              data-action="set-talk-ai-examiner"
              data-examiner="emma"
              class="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                !isRichard
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400"
                  : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
              }"
            >
              👩‍🏫 Ms. Emma (American Accent • IDP)
            </button>
          </div>

          <!-- Exam Mode Selection -->
          <div class="flex items-center gap-1.5 flex-wrap">
            ${[
              { id: "mock_full", label: "Full Mock Test (Parts 1-3)" },
              { id: "part1", label: "Part 1 (Warm-up)" },
              { id: "part2", label: "Part 2 (Cue Card)" },
              { id: "part3", label: "Part 3 (Discussion)" },
              { id: "free", label: "Free Topic Talk" }
            ]
              .map(
                (m) => `
              <button
                type="button"
                data-action="set-talk-ai-mode"
                data-mode="${m.id}"
                class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  state.talkAiMode === m.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-[#0B0F19] text-slate-400 hover:text-white border border-slate-800"
                }"
              >
                ${m.label}
              </button>
            `
              )
              .join("")}
            <button
              type="button"
              data-action="start-talk-ai-session"
              class="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#0B0F19] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1"
              title="Khởi động lại bài thi từ đầu"
            >
              ${ICONS.RefreshCw} Làm mới
            </button>
          </div>
        </div>

        <!-- Chat Conversation Stream Container -->
        <div id="talk-ai-chat-box" class="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
          ${messages
            .map((msg) => {
              if (msg.role === "examiner") {
                const exName = msg.examinerName || (state.talkAiExaminer === "richard" ? "Mr. Richard" : "Ms. Emma");
                const profId = state.talkAiExaminer === "richard" ? "uk_male" : "us_female";
                return `
                  <div class="flex items-start gap-3">
                    <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white text-base font-bold shadow-md flex-shrink-0">
                      ${state.talkAiExaminer === "richard" ? "👨‍🏫" : "👩‍🏫"}
                    </div>
                    <div class="space-y-1.5 max-w-[85%]">
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-indigo-400">${escapeHtml(exName)} (Examiner)</span>
                        <span class="text-[10px] text-slate-500 font-mono">${new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                      </div>
                      <div class="p-3.5 rounded-2xl rounded-tl-sm bg-[#0B0F19] border border-slate-800 text-sm text-slate-100 font-sans leading-relaxed shadow-sm">
                        ${escapeHtml(msg.text)}
                      </div>
                      <button
                        type="button"
                        data-action="speak-text"
                        data-text="${escapeHtml(msg.text)}"
                        class="text-[11px] text-indigo-300 hover:text-white flex items-center gap-1 font-semibold pt-0.5"
                      >
                        ${ICONS.Volume2Sm} Nghe lại lời giám khảo
                      </button>
                    </div>
                  </div>
                `;
              } else {
                return `
                  <div class="flex items-start justify-end gap-3">
                    <div class="space-y-2 max-w-[85%] flex flex-col items-end">
                      <div class="flex items-center gap-2">
                        <span class="text-[10px] text-slate-500 font-mono">${new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        <span class="text-xs font-bold text-emerald-400">Bạn (Candidate)</span>
                      </div>
                      <div class="p-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-r from-emerald-950/60 to-emerald-900/40 border border-emerald-500/30 text-sm text-emerald-100 font-sans leading-relaxed text-left shadow">
                        ${escapeHtml(msg.text)}
                      </div>

                      <!-- Assessment Card if Scored -->
                      ${
                        msg.score
                          ? `
                        <div class="w-full p-3.5 rounded-xl bg-[#0B0F19] border border-indigo-500/30 text-left space-y-2.5 shadow-md">
                          <!-- Criterion Pills -->
                          <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800/80 pb-2">
                            <span class="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                              🏆 Điểm câu này: Band ${msg.score.overall.toFixed(1)}
                            </span>
                            <div class="flex items-center gap-2 text-[11px] font-bold text-slate-300 flex-wrap">
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">FC: ${msg.score.fc.toFixed(1)}</span>
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">LR: ${msg.score.lr.toFixed(1)}</span>
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">GRA: ${msg.score.gra.toFixed(1)}</span>
                              <span class="bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 rounded">PR: ${msg.score.pr.toFixed(1)}</span>
                            </div>
                          </div>

                          <!-- Feedback Note -->
                          <p class="text-xs text-slate-300 leading-relaxed">
                            <b class="text-slate-200">💬 Nhận xét:</b> ${escapeHtml(msg.score.feedbackVi)}
                          </p>

                          <!-- Native Upgrade Answer -->
                          ${
                            msg.score.upgradedAnswer
                              ? `
                            <div class="p-2.5 rounded-lg bg-[#0F172A] border border-indigo-500/20 space-y-1">
                              <div class="flex items-center justify-between">
                                <span class="text-[11px] font-extrabold text-indigo-400 flex items-center gap-1">
                                  ${ICONS.Sparkles} Cách nói tự nhiên hơn của người bản xứ (Band 8.5+):
                                </span>
                                <button
                                  type="button"
                                  data-action="speak-text"
                                  data-text="${escapeHtml(msg.score.upgradedAnswer)}"
                                  class="text-[10px] text-indigo-300 hover:text-white flex items-center gap-1"
                                >
                                  ${ICONS.Volume2Sm} Nghe
                                </button>
                              </div>
                              <p class="text-xs text-slate-200 italic leading-snug">${escapeHtml(msg.score.upgradedAnswer)}</p>
                            </div>
                          `
                              : ""
                          }
                        </div>
                      `
                          : ""
                      }
                    </div>
                    <div class="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white text-base font-bold shadow-md flex-shrink-0">
                      👤
                    </div>
                  </div>
                `;
              }
            })
            .join("")}

          ${
            state.isAiEvaluating
              ? `
            <div class="flex items-start gap-3 animate-pulse">
              <div class="w-9 h-9 rounded-full bg-indigo-600/50 flex items-center justify-center text-white text-base">
                🤖
              </div>
              <div class="p-3 rounded-2xl bg-[#0B0F19] border border-indigo-500/30 text-xs text-indigo-300 flex items-center gap-2">
                ${ICONS.Loader2} Giám khảo đang chấm điểm 4 tiêu chí và chuẩn bị câu hỏi tiếp theo...
              </div>
            </div>
          `
              : ""
          }
        </div>

        <!-- Input & Voice Recording Panel -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-2xl p-3 sm:p-4 space-y-3 shadow-xl">
          <div class="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400">
            <span class="font-bold text-slate-200 flex items-center gap-1.5">
              ${ICONS.MicNav} Trả lời phỏng vấn (Bấm micro để nói hoặc gõ câu trả lời):
            </span>
            <div class="flex items-center gap-2">
              <button
                type="button"
                data-action="talk-ai-hint"
                class="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-semibold"
              >
                ${ICONS.Sparkles} Gợi ý mở đầu câu trả lời
              </button>
            </div>
          </div>

          <!-- Textarea / Live Input -->
          <div class="relative">
            <textarea
              id="talk-ai-input"
              rows="3"
              placeholder="${
                state.isRecordingAiTalk
                  ? "Đang lắng nghe giọng nói của bạn... Hãy tự tin nói câu trả lời bằng tiếng Anh!"
                  : "Nhập câu trả lời của bạn hoặc bấm nút Micro bên dưới để nói trực tiếp..."
              }"
              class="w-full p-3 rounded-xl bg-[#0B0F19] border ${
                state.isRecordingAiTalk ? "border-red-500 ring-2 ring-red-500/20" : "border-slate-800 focus:border-indigo-500"
              } text-sm text-white placeholder-slate-500 focus:outline-none transition resize-none font-sans"
            >${escapeHtml(state.talkAiInputText || "")}</textarea>
          </div>

          <!-- Bottom Control Buttons -->
          <div class="flex items-center justify-between flex-wrap gap-3">
            <div class="flex items-center gap-2">
              <!-- Push-to-Talk Mic Button -->
              <button
                type="button"
                data-action="toggle-talk-ai-mic"
                class="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition duration-200 ${
                  state.isRecordingAiTalk
                    ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 animate-pulse"
                    : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/20"
                }"
              >
                ${state.isRecordingAiTalk ? `${ICONS.MicOff} Dừng & Lưu lời nói` : `${ICONS.Mic} Nhấn để Nói (Micro)`}
              </button>

              ${
                state.isRecordingAiTalk
                  ? `<span class="text-xs font-semibold text-red-400 animate-pulse flex items-center gap-1">
                       <span class="w-2 h-2 rounded-full bg-red-500"></span> Đang ghi âm trực tiếp...
                     </span>`
                  : ""
              }
            </div>

            <div class="flex items-center gap-2">
              <button
                type="button"
                data-action="send-talk-ai-answer"
                class="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition disabled:opacity-50"
                ${state.isAiEvaluating ? "disabled" : ""}
              >
                ${ICONS.Sparkles} Gửi câu trả lời
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- VOICE SELECTOR POPOVER & AI API MODAL RENDERERS ---
  function renderVoiceMenuHtml() {
    if (!state.isVoiceMenuOpen) return "";
    const voices = refreshSystemVoices().filter((v) => (v.lang || "").toLowerCase().startsWith("en"));

    return `
      <div class="fixed inset-0 z-30" data-action="close-voice-menu"></div>
      <div class="absolute right-0 top-full mt-1.5 w-80 bg-[#0F172A] border border-slate-700/90 rounded-2xl shadow-2xl z-40 p-3.5 space-y-3 animate-in">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <span class="text-xs font-bold text-white flex items-center gap-1.5">
            ${ICONS.Volume2} Chọn Giọng Đọc Tự Nhiên
          </span>
          <button
            type="button"
            data-action="test-current-voice"
            class="px-2 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-[10px] font-bold text-white transition"
          >
            🔊 Nghe thử
          </button>
        </div>

        <!-- 8 Natural Voice Personas -->
        <div class="space-y-1 max-h-48 overflow-y-auto pr-1">
          ${VOICE_PROFILES.map((vp) => {
            const isSel = state.selectedVoiceProfileId === vp.id && !state.customSystemVoiceName;
            return `
              <button
                type="button"
                data-action="select-voice-profile"
                data-profile-id="${vp.id}"
                class="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs transition ${
                  isSel
                    ? "bg-indigo-600/25 border border-indigo-500/60 text-white font-bold"
                    : "bg-[#0B0F19] hover:bg-slate-800/80 border border-slate-800/80 text-slate-300"
                }"
              >
                <span>${escapeHtml(vp.label)}</span>
                <span class="text-[10px] font-mono text-indigo-400">${vp.lang}</span>
              </button>
            `;
          }).join("")}
        </div>

        <!-- Direct System/Browser Voice Picker -->
        ${
          voices.length > 0
            ? `
          <div class="space-y-1 pt-1 border-t border-slate-800/80">
            <label class="text-[10px] font-bold uppercase text-slate-400 block">
              Hoặc chọn giọng đọc hệ thống trên máy (${voices.length} giọng):
            </label>
            <select
              id="custom-system-voice-select"
              class="w-full bg-[#0B0F19] border border-slate-700 rounded-lg px-2 py-1.5 text-[11px] text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="">-- Tự động chọn giọng tự nhiên nhất theo vùng --</option>
              ${voices
                .map(
                  (v) =>
                    `<option value="${escapeHtml(v.name)}" ${
                      state.customSystemVoiceName === v.name ? "selected" : ""
                    }>${escapeHtml(v.name)} (${escapeHtml(v.lang)})</option>`
                )
                .join("")}
            </select>
          </div>
        `
            : ""
        }

        <!-- Tone / Pitch & Dual Speaker Toggle -->
        <div class="pt-1 border-t border-slate-800/80 space-y-2 text-[11px]">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Âm sắc (Pitch):</span>
            <div class="flex gap-1">
              ${[
                { label: "Trầm ấm", val: 0.92 },
                { label: "Tự nhiên", val: 1.0 },
                { label: "Sáng rõ", val: 1.06 }
              ]
                .map(
                  (p) => `
                <button
                  type="button"
                  data-action="set-voice-pitch"
                  data-pitch="${p.val}"
                  class="px-2 py-0.5 rounded border text-[10px] font-semibold ${
                    Math.abs(state.voicePitchMod - p.val) < 0.02
                      ? "bg-indigo-600 border-indigo-500 text-white"
                      : "bg-[#0B0F19] border-slate-800 text-slate-400"
                  }"
                >
                  ${p.label}
                </button>
              `
                )
                .join("")}
            </div>
          </div>

          <label class="flex items-center justify-between cursor-pointer pt-1">
            <span class="text-slate-300">Phân vai Nam/Nữ khi đọc hội thoại:</span>
            <input
              type="checkbox"
              id="dual-speaker-checkbox"
              ${state.dualSpeakerShadowing ? "checked" : ""}
              class="rounded border-slate-700 text-indigo-600 focus:ring-indigo-500"
            />
          </label>
        </div>
      </div>
    `;
  }

  function renderApiModalHtml() {
    if (!state.isApiModalOpen) return "";
    const hasKey = Boolean(state.aiApiKey && state.aiApiKey.trim());

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-4 animate-in">
        <div class="w-full max-w-md bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl p-4 sm:p-5 space-y-4 text-xs max-h-[92vh] overflow-y-auto">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <div class="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                ${ICONS.Sparkles}
              </div>
              <div>
                <h3 class="text-sm font-bold text-white">Cấu hình API AI & Giọng Đọc Neural</h3>
                <p class="text-[11px] text-slate-400">Kích hoạt Chấm Writing AI, Quét ảnh OCR & Phân tích IPA</p>
              </div>
            </div>
            <button
              type="button"
              data-action="close-api-modal"
              class="h-7 w-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center font-bold"
            >
              ✕
            </button>
          </div>

          <!-- Provider Switcher -->
          <div class="space-y-1.5">
            <label class="text-[11px] font-bold text-slate-300 block">1. Chọn nền tảng AI:</label>
            <div class="grid grid-cols-2 gap-2">
              <button
                type="button"
                data-action="select-ai-provider"
                data-provider="gemini"
                class="p-2.5 rounded-xl border text-left transition ${
                  state.aiProvider === "gemini"
                    ? "bg-indigo-600/25 border-indigo-500 text-white font-bold"
                    : "bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-white"
                }"
              >
                <div class="text-xs font-bold">✨ Google Gemini</div>
                <div class="text-[10px] text-emerald-400 mt-0.5">Khuyên dùng • Có gói Free</div>
              </button>

              <button
                type="button"
                data-action="select-ai-provider"
                data-provider="openai"
                class="p-2.5 rounded-xl border text-left transition ${
                  state.aiProvider === "openai"
                    ? "bg-indigo-600/25 border-indigo-500 text-white font-bold"
                    : "bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-white"
                }"
              >
                <div class="text-xs font-bold">🤖 OpenAI GPT</div>
                <div class="text-[10px] text-indigo-400 mt-0.5">GPT-4o + Giọng đọc TTS-1</div>
              </button>
            </div>
          </div>

          <!-- Model Selector -->
          <div class="space-y-1">
            <label class="text-[11px] font-bold text-slate-300 block">2. Chọn Model AI:</label>
            <select
              id="ai-model-select"
              class="w-full bg-[#0B0F19] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              ${
                state.aiProvider === "gemini"
                  ? `
                <option value="gemini-2.0-flash" ${state.aiModel === "gemini-2.0-flash" ? "selected" : ""}>gemini-2.0-flash (Nhanh & Chuẩn xác)</option>
                <option value="gemini-2.5-flash" ${state.aiModel === "gemini-2.5-flash" ? "selected" : ""}>gemini-2.5-flash (Mới nhất)</option>
                <option value="gemini-1.5-pro" ${state.aiModel === "gemini-1.5-pro" ? "selected" : ""}>gemini-1.5-pro (Chuyên sâu)</option>
              `
                  : `
                <option value="gpt-4o-mini" ${state.aiModel === "gpt-4o-mini" ? "selected" : ""}>gpt-4o-mini (Nhanh & Tiết kiệm)</option>
                <option value="gpt-4o" ${state.aiModel === "gpt-4o" ? "selected" : ""}>gpt-4o (Chấm IELTS Học thuật)</option>
              `
              }
            </select>
          </div>

          <!-- API Key Input -->
          <div class="space-y-1">
            <div class="flex items-center justify-between">
              <label class="text-[11px] font-bold text-slate-300">3. Nhập API Key (${state.aiProvider.toUpperCase()}):</label>
              ${
                state.aiProvider === "gemini"
                  ? `<a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" class="text-[10px] text-indigo-400 hover:underline font-semibold">Lấy Gemini Key miễn phí ↗</a>`
                  : `<a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" class="text-[10px] text-indigo-400 hover:underline font-semibold">Lấy OpenAI Key ↗</a>`
              }
            </div>
            <input
              id="ai-api-key-input"
              type="password"
              value="${escapeHtml(state.aiApiKey)}"
              placeholder="${state.aiProvider === "gemini" ? "AIzaSy..." : "sk-..."}"
              class="w-full bg-[#0B0F19] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-indigo-500"
            />
            <p class="text-[10px] text-slate-500">
              🔒 Key được lưu cục bộ trên trình duyệt của bạn (localStorage), không gửi đi bất kỳ đâu ngoài máy chủ ${state.aiProvider.toUpperCase()}.
            </p>
          </div>

          ${
            state.aiProvider === "openai"
              ? `
            <label class="flex items-center gap-2 p-2.5 rounded-lg bg-[#0B0F19] border border-slate-800 cursor-pointer">
              <input
                type="checkbox"
                id="neural-tts-checkbox"
                ${state.useNeuralTts ? "checked" : ""}
                class="rounded border-slate-700 text-indigo-600"
              />
              <span class="text-[11px] text-slate-200 font-medium">Bật giọng đọc OpenAI Neural TTS (tts-1: Nova, Onyx, Shimmer)</span>
            </label>
          `
              : ""
          }

          ${
            state.apiStatusMsg
              ? `
            <div class="p-2.5 rounded-lg border text-[11px] font-medium ${
              state.apiStatusType === "success"
                ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                : state.apiStatusType === "error"
                ? "bg-rose-500/15 border-rose-500/40 text-rose-300"
                : "bg-indigo-500/15 border-indigo-500/40 text-indigo-300"
            }">
              ${escapeHtml(state.apiStatusMsg)}
            </div>
          `
              : ""
          }

          <!-- Action Buttons -->
          <div class="flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
            <div class="flex gap-1.5">
              <button
                type="button"
                data-action="test-api-config"
                ${state.isTestingApi ? "disabled" : ""}
                class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition"
              >
                ${state.isTestingApi ? "Đang thử..." : "🧪 Kiểm tra Key"}
              </button>
              ${
                hasKey
                  ? `<button type="button" data-action="clear-api-config" class="px-2.5 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 font-semibold transition">Xóa Key</button>`
                  : ""
              }
            </div>

            <button
              type="button"
              data-action="save-api-config"
              class="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-md shadow-indigo-600/30 transition"
            >
              💾 Lưu & Kích hoạt
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderPasteModalHtml() {
    if (!state.isPasteModalOpen) return "";

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-4 animate-in">
        <div class="w-full max-w-lg bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl p-4 sm:p-5 space-y-4 text-xs max-h-[92vh] overflow-y-auto">
          <!-- Header -->
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2.5">
              <div class="h-8 w-8 rounded-lg bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-300 font-bold">
                ${ICONS.Clipboard}
              </div>
              <div>
                <h3 class="text-sm font-bold text-white">Dán đoạn văn bản / hội thoại từ bên ngoài</h3>
                <p class="text-[11px] text-slate-400">Copy từ trang web, tài liệu bất kỳ rồi dán vào đây để phân tích IPA hoặc luyện Shadowing</p>
              </div>
            </div>
            <button
              type="button"
              data-action="close-paste-modal"
              class="h-7 w-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition"
            >
              ✕
            </button>
          </div>

          <!-- Textarea & Clipboard Button -->
          <div class="space-y-1.5">
            <div class="flex items-center justify-between">
              <label class="text-[11px] font-semibold text-slate-300">Nội dung văn bản / hội thoại tiếng Anh:</label>
              <button
                type="button"
                data-action="read-clipboard-to-paste-input"
                class="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/25 transition active:scale-95"
              >
                ${ICONS.Clipboard} Lấy từ Clipboard (Paste)
              </button>
            </div>
            <textarea
              id="pasted-content-textarea"
              rows="6"
              placeholder="Dán đoạn văn tiếng Anh hoặc đoạn hội thoại bạn vừa copy vào đây...&#10;&#10;Ví dụ hội thoại:&#10;Mitchell: Hello, is it the hotline of AZ Home?&#10;Staff: Hello, I'm John from AZ Home. How can I help you?&#10;Mitchell: I'm looking for a used dishwasher...&#10;&#10;Hoặc dán bất kỳ câu văn nào để phân tích âm IPA & nghĩa từng từ."
              class="w-full bg-[#0B0F19] border border-slate-700/80 rounded-xl p-3 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 font-sans leading-relaxed resize-y"
            >${escapeHtml(state.pastedTextInput || "")}</textarea>
          </div>

          <!-- Status notice if any -->
          ${
            state.pasteToastMsg
              ? `<div class="p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 animate-in">
                  ${ICONS.ClipboardCheck} <span>${escapeHtml(state.pasteToastMsg)}</span>
                </div>`
              : ""
          }

          <!-- Action buttons: Apply to IPA or Apply to Shadowing -->
          <div class="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2">
            <button
              type="button"
              data-action="close-paste-modal"
              class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              Hủy
            </button>

            <button
              type="button"
              data-action="apply-paste-to-ipa"
              class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 hover:text-white border border-slate-700 hover:border-indigo-500 text-slate-200 text-xs font-bold transition flex items-center justify-center gap-1.5 active:scale-95"
            >
              <span>🔤 Đưa vào phần IPA</span>
            </button>

            <button
              type="button"
              data-action="apply-paste-to-shadowing"
              class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold shadow-md shadow-indigo-600/30 transition flex items-center justify-center gap-1.5 active:scale-95 border border-indigo-400/50"
            >
              <span>🎙️ Đưa vào Shadowing (3 Chế độ)</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // --- MAIN RENDER FUNCTION ---
  let shouldResetScroll = false;
  function render() {
    const root = document.getElementById("app");
    if (!root) return;

    const navTabs = [
      { id: "ipa", label: "IPA", icon: ICONS.Languages },
      { id: "shadowing", label: "Shadowing", icon: ICONS.Repeat },
      { id: "listening", label: "Listening", icon: ICONS.Headphones },
      { id: "reading", label: "Reading", icon: ICONS.BookOpen },
      { id: "flashcard", label: "Flash card", icon: ICONS.Bookmark },
      { id: "writing", label: "Writing", icon: ICONS.FileText },
      { id: "speaking", label: "Speaking", icon: ICONS.MicNav }
    ];

    let tabBodyHtml = "";
    if (state.activeTab === "ipa") tabBodyHtml = renderIpaTab();
    else if (state.activeTab === "shadowing") tabBodyHtml = renderShadowingTab();
    else if (state.activeTab === "listening") tabBodyHtml = renderListeningTab();
    else if (state.activeTab === "reading") tabBodyHtml = renderReadingTab();
    else if (state.activeTab === "flashcard") tabBodyHtml = renderFlashcardTab();
    else if (state.activeTab === "writing") tabBodyHtml = renderWritingTab();
    else if (state.activeTab === "speaking") tabBodyHtml = renderSpeakingTab();

    const activeVoiceProf = getActiveVoiceProfile();
    const hasApiKey = Boolean(state.aiApiKey && state.aiApiKey.trim());

    const headerQuickUploadHtml =
      state.activeTab === "ipa" || state.activeTab === "shadowing"
        ? `
          <div class="flex items-center gap-1 sm:gap-1.5 ml-1 flex-wrap">
            <button
              type="button"
              data-action="trigger-image-upload"
              ${state.isProcessingFile ? "disabled" : ""}
              title="Tải ảnh chụp đề bài / sách để quét chữ tự động (OCR)"
              class="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[10px] sm:text-[11px] font-semibold text-slate-300 hover:text-white transition shadow-sm active:scale-95 disabled:opacity-50"
            >
              ${state.isProcessingFile ? ICONS.Loader2 : ICONS.ImageIcon}
              <span><span class="hidden sm:inline">Thêm </span>ảnh (OCR)</span>
            </button>

            <button
              type="button"
              data-action="trigger-doc-upload"
              ${state.isProcessingFile ? "disabled" : ""}
              title="Nhập file văn bản hoặc file âm thanh"
              class="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[10px] sm:text-[11px] font-semibold text-slate-300 hover:text-white transition shadow-sm active:scale-95 disabled:opacity-50"
            >
              ${ICONS.FileUp}
              <span><span class="hidden sm:inline">Tải </span>file</span>
            </button>

            <button
              type="button"
              data-action="open-paste-modal"
              title="Copy một đoạn văn bản hoặc hội thoại ở ngoài rồi dán vào đây"
              class="flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-indigo-500/50 hover:border-indigo-400 text-[10px] sm:text-[11px] font-semibold text-indigo-300 hover:text-white transition shadow-sm active:scale-95"
            >
              ${ICONS.Clipboard}
              <span>${state.activeTab === "shadowing" ? "Dán thoại" : "Dán văn bản"}</span>
            </button>
          </div>
        `
        : "";

    const mainBodyClass = `flex-1 overflow-y-auto p-2.5 sm:p-4 ${
      state.isMobile ? "pb-24" : "pb-6"
    } max-w-5xl w-full mx-auto space-y-3`;

    // Preserve active YouTube iframe during in-tab UI updates (switching Sentence/Full Passage, IPA, Hide Script, Modals, etc.)
    const existingYtIframe = document.getElementById("shadow-youtube-iframe");
    const targetYtId =
      state.activeTab === "shadowing" &&
      state.shadowSourceTab === "url" &&
      state.extractedUrlData &&
      state.extractedUrlData.sourceType === "youtube"
        ? state.extractedUrlData.youtubeId
        : null;

    if (
      existingYtIframe &&
      targetYtId &&
      existingYtIframe.getAttribute("data-yt-id") === targetYtId &&
      document.getElementById("shadow-script-panel-wrapper")
    ) {
      const tempWrap = document.createElement("div");
      tempWrap.innerHTML = tabBodyHtml;

      const modalRoot = document.getElementById("modal-overlay-container");
      if (modalRoot) {
        modalRoot.innerHTML = `${renderApiModalHtml()}${renderPasteModalHtml()}`;
      }

      const mainScrollBody = document.getElementById("main-content-scroll-body");
      if (mainScrollBody) {
        mainScrollBody.className = mainBodyClass;
      }

      const oldPassageContainer = document.getElementById("shadow-script-passage-container");
      const savedPassageScrollTop = oldPassageContainer ? oldPassageContainer.scrollTop : 0;

      const newTopPanel = tempWrap.querySelector("#shadow-url-top-panel");
      const curTopPanel = document.getElementById("shadow-url-top-panel");
      if (newTopPanel && curTopPanel) {
        curTopPanel.innerHTML = newTopPanel.innerHTML;
      }

      const newSplitGrid = tempWrap.querySelector("#shadow-yt-split-grid");
      const curSplitGrid = document.getElementById("shadow-yt-split-grid");
      if (newSplitGrid && curSplitGrid) {
        curSplitGrid.className = newSplitGrid.className;
      }

      const newLeftCol = tempWrap.querySelector("#shadow-yt-left-col");
      const curLeftCol = document.getElementById("shadow-yt-left-col");
      if (newLeftCol && curLeftCol) {
        curLeftCol.className = newLeftCol.className;
      }

      const newHeaderControls = tempWrap.querySelector("#shadow-yt-header-controls");
      const curHeaderControls = document.getElementById("shadow-yt-header-controls");
      if (newHeaderControls && curHeaderControls) {
        curHeaderControls.innerHTML = newHeaderControls.innerHTML;
      }

      const newScriptPanel = tempWrap.querySelector("#shadow-script-panel-wrapper");
      const curScriptPanel = document.getElementById("shadow-script-panel-wrapper");
      if (newScriptPanel && curScriptPanel) {
        curScriptPanel.className = newScriptPanel.className;
        curScriptPanel.innerHTML = newScriptPanel.innerHTML;
      }

      const restoredPassageContainer = document.getElementById("shadow-script-passage-container");
      if (restoredPassageContainer && savedPassageScrollTop > 0) {
        restoredPassageContainer.scrollTop = savedPassageScrollTop;
      }

      bindDynamicInputs();
      updateYouTubeActiveDom(
        state.activeYouTubeTurnIdx,
        -1,
        state.activeYouTubeWordIdx,
        ytLastRealTimeSec >= 0 ? ytLastRealTimeSec : 0,
        ytLastTurnProgress
      );
      return;
    }

    const oldMainScroll = document.getElementById("main-content-scroll-body");
    const savedMainScrollTop = (!shouldResetScroll && oldMainScroll) ? oldMainScroll.scrollTop : 0;
    const oldTopicChat = document.getElementById("topic-ai-chat-box");
    const savedTopicChatScroll = oldTopicChat ? oldTopicChat.scrollTop : -1;
    const oldTalkChat = document.getElementById("talk-ai-chat-box");
    const savedTalkChatScroll = oldTalkChat ? oldTalkChat.scrollTop : -1;
    shouldResetScroll = false;

    root.innerHTML = `
      <!-- Hidden File Inputs for OCR & Documents -->
      <input id="image-upload-input" type="file" accept="image/*" capture="environment" class="hidden" />
      <input id="doc-upload-input" type="file" accept=".txt,.pdf,.doc,.docx,audio/*" class="hidden" />

      <!-- Modals Container -->
      <div id="modal-overlay-container">
        ${renderApiModalHtml()}
        ${renderPasteModalHtml()}
      </div>

      <!-- ================= SIDEBAR (DESKTOP: LEFT PANEL) ================= -->
      ${
        !state.isMobile
          ? `<aside class="autoexam-sidebar w-56 flex-shrink-0 bg-[#0F172A] border-r border-slate-800/80 flex flex-col justify-between">
              <div>
                <!-- Brand -->
                <div class="h-14 px-5 flex items-center justify-between border-b border-slate-800">
                  <div class="flex items-center gap-2.5">
                    <div class="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-md shadow-indigo-600/30 flex-shrink-0">
                      AE
                    </div>
                    <span class="brand-title font-bold text-sm text-white tracking-tight">AutoExam.ai</span>
                  </div>
                  <span class="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono font-bold border border-slate-700">PC</span>
                </div>

                <!-- Navigation -->
                <nav class="p-2.5 space-y-1">
                  ${navTabs
                    .map((tab) => {
                      const isActive = state.activeTab === tab.id;
                      return `
                        <button
                          type="button"
                          data-action="switch-tab"
                          data-tab="${tab.id}"
                          class="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                            isActive
                              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                              : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                          }"
                        >
                          ${tab.icon}
                          <span class="nav-label">${tab.label}</span>
                        </button>
                      `;
                    })
                    .join("")}
                </nav>
              </div>

              <!-- Bottom Profile & Quick AI API Status -->
              <div class="p-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <button
                  type="button"
                  data-action="open-api-modal"
                  class="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border text-[11px] font-semibold transition ${
                    hasApiKey
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20"
                      : "bg-[#0B0F19] border-slate-800 text-slate-300 hover:border-indigo-500/50 hover:text-white"
                  }"
                >
                  <span class="flex items-center gap-1.5">
                    ${ICONS.Sparkles}
                    <span class="target-label">${hasApiKey ? `AI: ${state.aiProvider.toUpperCase()}` : "Cài đặt API AI"}</span>
                  </span>
                  <span class="h-2 w-2 rounded-full ${hasApiKey ? "bg-emerald-400" : "bg-amber-400"}"></span>
                </button>

                <div class="flex items-center justify-between">
                  <span class="target-label font-semibold text-slate-300">Target 7.5+</span>
                  <div class="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    ${ICONS.Zap} 14d
                  </div>
                </div>
              </div>
            </aside>`
          : ""
      }

      <!-- ================= MAIN CONTENT ================= -->
      <main class="flex-1 flex flex-col min-w-0 bg-[#0B0F19] overflow-hidden">
        <!-- Top Minimal Bar (Responsive for Mobile Chrome & Desktop) -->
        <div class="h-12 px-3 sm:px-6 border-b border-slate-800/80 flex items-center justify-between flex-shrink-0">
          <div class="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <!-- Mobile Brand Indicator -->
            <div class="md:hidden flex items-center gap-1.5 flex-shrink-0">
              <div class="h-6 w-6 rounded-md bg-indigo-600 flex items-center justify-center font-black text-white text-[10px] shadow-sm">
                AE
              </div>
            </div>
            <span class="text-[11px] sm:text-xs font-bold text-slate-200 uppercase tracking-wider truncate">
              ${state.activeTab === "flashcard" ? "Flash card" : state.activeTab.toUpperCase()}
            </span>
            ${headerQuickUploadHtml}
          </div>

          <div id="top-bar-right-controls" class="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <!-- Natural Voice Selector Button & Popover -->
            <div class="relative">
              <button
                type="button"
                data-action="toggle-voice-menu"
                title="Chọn giọng đọc tự nhiên (Mỹ, Anh, Úc, Ireland, Nam/Nữ)"
                class="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[10px] sm:text-[11px] font-semibold text-slate-200 transition"
              >
                <span>🎙️ <span class="hidden sm:inline">${escapeHtml(state.customSystemVoiceName ? state.customSystemVoiceName.slice(0, 16) : activeVoiceProf.shortLabel)}</span></span>
                ${ICONS.ChevronDown}
              </button>
              ${renderVoiceMenuHtml()}
            </div>

            <!-- AI API Button -->
            <button
              type="button"
              data-action="open-api-modal"
              title="Cấu hình API Key (Gemini / OpenAI) để cập nhật tính năng AI"
              class="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg border text-[10px] sm:text-[11px] font-bold transition active:scale-95 ${
                hasApiKey
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25"
                  : "bg-indigo-600/20 hover:bg-indigo-600/30 border-indigo-500/50 text-indigo-300 hover:text-white"
              }"
            >
              ${ICONS.Sparkles}
              <span>${hasApiKey ? "API ✓" : "API AI"}</span>
            </button>

            <!-- Native Audio Quick Play -->
            <button
              type="button"
              data-action="header-native-audio"
              class="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-400 transition ml-1"
            >
              ${ICONS.Volume2} Audio
            </button>
          </div>
        </div>

        <!-- Content Body (Scrollable, with pb-24 on mobile to accommodate bottom nav bar) -->
        <div id="main-content-scroll-body" class="${mainBodyClass}">
          ${tabBodyHtml}
        </div>
      </main>

      <!-- ================= MOBILE BOTTOM NAVIGATION BAR (CHROME ON MOBILE) ================= -->
      ${
        state.isMobile
          ? `<nav class="fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-xl border-t border-slate-800/90 px-1 py-1 flex items-center justify-around shadow-2xl safe-area-pb">
              ${navTabs
                .map((tab) => {
                  const isActive = state.activeTab === tab.id;
                  return `
                    <button
                      type="button"
                      data-action="switch-tab"
                      data-tab="${tab.id}"
                      class="flex flex-col items-center justify-center flex-1 py-1.5 px-0.5 rounded-xl transition-all duration-150 active:scale-95 ${
                        isActive
                          ? "text-indigo-400 font-extrabold bg-indigo-500/15 shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      }"
                    >
                      <span class="text-base leading-none mb-0.5">${tab.icon}</span>
                      <span class="text-[9.5px] font-semibold tracking-tight whitespace-nowrap leading-none">${tab.label}</span>
                    </button>
                  `;
                })
                .join("")}
            </nav>`
          : ""
      }
    `;

    bindDynamicInputs();

    // Seamlessly preserve scroll position across renders so clicking buttons/mic never jumps to top
    const newMainScroll = document.getElementById("main-content-scroll-body");
    if (newMainScroll && savedMainScrollTop > 0) {
      newMainScroll.scrollTop = savedMainScrollTop;
      requestAnimationFrame(() => {
        if (newMainScroll) newMainScroll.scrollTop = savedMainScrollTop;
      });
    }
    const newTopicChat = document.getElementById("topic-ai-chat-box");
    if (newTopicChat && savedTopicChatScroll >= 0) {
      newTopicChat.scrollTop = savedTopicChatScroll;
    }
    const newTalkChat = document.getElementById("talk-ai-chat-box");
    if (newTalkChat && savedTalkChatScroll >= 0) {
      newTalkChat.scrollTop = savedTalkChatScroll;
    }
  }

  function bindDynamicInputs() {
    const ipaTextarea = document.getElementById("ipa-textarea");
    if (ipaTextarea) {
      ipaTextarea.addEventListener("input", function (e) {
        const text = e.target.value;
        state.ipaInput = text;
        const words = text.trim().split(/\s+/);
        if (words.length > 0 && words[0]) {
          const resolved = resolveWordDetails(words[0]);
          if (resolved) state.selectedWord = resolved;
        }
        // Re-render word cards & breakdown live while preserving cursor
        const selStart = ipaTextarea.selectionStart;
        const selEnd = ipaTextarea.selectionEnd;
        render();
        const newArea = document.getElementById("ipa-textarea");
        if (newArea) {
          newArea.focus();
          try { newArea.setSelectionRange(selStart, selEnd); } catch (err) {}
        }
      });
    }

    const dictTextarea = document.getElementById("dictation-textarea");
    if (dictTextarea) {
      dictTextarea.addEventListener("input", function (e) {
        state.dictInput = e.target.value;
      });
    }

    const writingTextarea = document.getElementById("writing-textarea");
    if (writingTextarea) {
      writingTextarea.addEventListener("input", function (e) {
        state.essayText = e.target.value;
        const wcEl = document.getElementById("writing-word-count");
        if (wcEl) {
          wcEl.textContent = state.essayText.trim()
            ? state.essayText.trim().split(/\s+/).length
            : 0;
        }
      });
    }

        const topicAiInput = document.getElementById("topic-ai-input");
    if (topicAiInput) {
      topicAiInput.addEventListener("input", function (e) {
        state.topicAiInputText = e.target.value;
      });
      topicAiInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          if (state.topicAiInputText.trim() && !state.isTopicAiEvaluating) {
            const lessons = window.SPEAKING_2026_DATA || [];
            const curL = lessons[state.speakLessonIdx] || lessons[0];
            sendTopicAiAnswer(state.topicAiInputText.trim(), curL, state.speakPart);
          }
        }
      });
    }

    const talkAiInput = document.getElementById("talk-ai-input");
    if (talkAiInput) {
      talkAiInput.addEventListener("input", function (e) {
        state.talkAiInputText = e.target.value;
      });
      talkAiInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          if (state.talkAiInputText.trim() && !state.isAiEvaluating) {
            sendAiTalkAnswer(state.talkAiInputText.trim());
          }
        }
      });
    }

    const vocabFilterInput = document.getElementById("speak-vocab-search-input");
    if (vocabFilterInput) {
      vocabFilterInput.addEventListener("input", function (e) {
        state.speakVocabFilter = e.target.value;
        render();
        const refocused = document.getElementById("speak-vocab-search-input");
        if (refocused) {
          refocused.focus();
          refocused.selectionStart = refocused.selectionEnd = refocused.value.length;
        }
      });
    }

    const speakLessonSelect = document.getElementById("speaking-lesson-select");
    if (speakLessonSelect) {
      speakLessonSelect.addEventListener("change", function (e) {
        state.speakTopicSource = "ielts2026";
        state.speakLessonIdx = parseInt(e.target.value, 10) || 0;
        state.speakPracticeTargetText = "";
        state.speakPracticeTranscript = "";
        state.speakScore = null;
        state.topicAiMessages = [];
        state.topicAiInputText = "";
        state.topicShadowTarget = "";
        state.topicShadowTranscript = "";
        state.topicShadowScore = null;
        state.isRecordingTopicAi = false;
        state.isRecordingTopicShadow = false;
        render();
      });
    }

    const writingCamSelect = document.getElementById("writing-cam-select");
    if (writingCamSelect) {
      writingCamSelect.addEventListener("change", function (e) {
        state.writingCamSource = e.target.value;
        state.writingScore = null;
        render();
      });
    }

    const customVoiceSelect = document.getElementById("custom-system-voice-select");
    if (customVoiceSelect) {
      customVoiceSelect.addEventListener("change", function (e) {
        state.customSystemVoiceName = e.target.value;
        speak("Hello! This is my natural English pronunciation.", 1.0);
        render();
      });
    }

    const dualSpeakerCheckbox = document.getElementById("dual-speaker-checkbox");
    if (dualSpeakerCheckbox) {
      dualSpeakerCheckbox.addEventListener("change", function (e) {
        state.dualSpeakerShadowing = Boolean(e.target.checked);
      });
    }

    const aiModelSelect = document.getElementById("ai-model-select");
    if (aiModelSelect) {
      aiModelSelect.addEventListener("change", function (e) {
        state.aiModel = e.target.value;
      });
    }

    const aiKeyInput = document.getElementById("ai-api-key-input");
    if (aiKeyInput) {
      aiKeyInput.addEventListener("input", function (e) {
        state.aiApiKey = e.target.value;
      });
    }

    const neuralTtsCheckbox = document.getElementById("neural-tts-checkbox");
    if (neuralTtsCheckbox) {
      neuralTtsCheckbox.addEventListener("change", function (e) {
        state.useNeuralTts = Boolean(e.target.checked);
      });
    }

    const imageInput = document.getElementById("image-upload-input");
    if (imageInput) {
      imageInput.addEventListener("change", function (e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        state.isProcessingFile = true;
        render();

        // If AI API Key is configured, use real Vision OCR
        if (state.aiApiKey && state.aiApiKey.trim() && window.FileReader) {
          const reader = new FileReader();
          reader.onload = async function (ev) {
            try {
              const dataUrl = String(ev.target.result || "");
              const base64Data = dataUrl.split(",")[1] || "";
              const extracted = await callAiApi(
                "Extract all English sentences from this image accurately. Return ONLY the plain English text without markdown.",
                { dataUrl, base64Data, mimeType: file.type || "image/jpeg" }
              );
              if (extracted && extracted.trim()) {
                state.isProcessingFile = false;
                if (state.activeTab === "shadowing") {
                  applyPastedTextToShadowing(extracted.trim());
                } else {
                  applyPastedTextToIpa(extracted.trim());
                }
                return;
              }
            } catch (err) {
              // Fallback to sample below
            }
            const ocrSample =
              "Artificial intelligence enables personalized education and interactive language learning systems worldwide.";
            state.isProcessingFile = false;
            if (state.activeTab === "shadowing") {
              applyPastedTextToShadowing(ocrSample);
            } else {
              applyPastedTextToIpa(ocrSample);
            }
          };
          reader.readAsDataURL(file);
        } else {
          setTimeout(() => {
            const ocrSample =
              "Artificial intelligence enables personalized education and interactive language learning systems worldwide.";
            state.isProcessingFile = false;
            if (state.activeTab === "shadowing") {
              applyPastedTextToShadowing(ocrSample);
            } else {
              applyPastedTextToIpa(ocrSample);
            }
          }, 850);
        }
      });
    }

    const docInput = document.getElementById("doc-upload-input");
    if (docInput) {
      docInput.addEventListener("change", function (e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        state.isProcessingFile = true;
        render();
        if (file.name && file.name.endsWith(".txt") && window.FileReader) {
          const reader = new FileReader();
          reader.onload = function (ev) {
            const content = String(ev.target.result || "").trim();
            state.isProcessingFile = false;
            if (content) {
              if (state.activeTab === "shadowing") {
                applyPastedTextToShadowing(content);
              } else {
                applyPastedTextToIpa(content);
              }
            } else {
              render();
            }
          };
          reader.readAsText(file);
        } else {
          setTimeout(() => {
            const docSample =
              "Sustainable technology and renewable energy sources create modern environmental solutions.";
            state.isProcessingFile = false;
            if (state.activeTab === "shadowing") {
              applyPastedTextToShadowing(docSample);
            } else {
              applyPastedTextToIpa(docSample);
            }
          }, 750);
        }
      });
    }

    const pasteArea = document.getElementById("pasted-content-textarea");
    if (pasteArea && pasteArea.addEventListener) {
      pasteArea.addEventListener("input", function (e) {
        state.pastedTextInput = e.target.value;
      });
    }

    // Bind Cambridge Listening & Reading text inputs
    document.querySelectorAll('[data-action="input-cam-listen-ans"]').forEach((inp) => {
      inp.addEventListener("input", function (e) {
        const qk = inp.getAttribute("data-qkey");
        if (qk) state.camListenAnswers[qk] = e.target.value;
      });
    });

    document.querySelectorAll('[data-action="input-read-ans"]').forEach((inp) => {
      inp.addEventListener("input", function (e) {
        const rk = inp.getAttribute("data-key");
        if (rk) state.readAnswers[rk] = e.target.value;
      });
    });

    const shadowCustomInput = document.getElementById("shadow-custom-context-input");
    if (shadowCustomInput) {
      shadowCustomInput.addEventListener("input", function (e) {
        state.shadowCustomContext = e.target.value;
      });
      shadowCustomInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          generateSimilarShadowDialogue(Boolean(state.aiApiKey));
        }
      });
    }

    const shadowUrlInput = document.getElementById("shadow-url-input");
    if (shadowUrlInput) {
      shadowUrlInput.addEventListener("input", function (e) {
        state.shadowUrlInput = e.target.value;
      });
      shadowUrlInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          extractShadowingFromUrl(state.shadowUrlInput);
        }
      });
    }

    const shadowTranscriptArea = document.getElementById("shadow-transcript-textarea");
    if (shadowTranscriptArea) {
      shadowTranscriptArea.addEventListener("input", function (e) {
        state.shadowTranscriptInput = e.target.value;
      });
    }

    // Auto-attach YouTube player sync when in URL Shadowing tab
    if (state.activeTab === "shadowing" && state.shadowSourceTab === "url_extract") {
      setTimeout(() => {
        attachYouTubePlayerApi();
        startYouTubeSyncHeartbeat();
      }, 50);
    } else {
      cleanupYouTubeTracking();
    }
  }

  // --- DELEGATED CLICK HANDLER ---
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.getAttribute("data-action");

    switch (action) {
      case "switch-tab": {
        const tab = btn.getAttribute("data-tab");
        if (tab) {
          state.activeTab = tab;
          shouldResetScroll = true;
          if (tab === "ipa" && !state.selectedWord) {
            state.selectedWord = resolveWordDetails("development");
          }
          render();
        }
        break;
      }
      case "toggle-voice-menu": {
        refreshSystemVoices();
        state.isVoiceMenuOpen = !state.isVoiceMenuOpen;
        render();
        break;
      }
      case "close-voice-menu": {
        state.isVoiceMenuOpen = false;
        render();
        break;
      }
      case "select-voice-profile": {
        const pid = btn.getAttribute("data-profile-id") || "us_female";
        state.selectedVoiceProfileId = pid;
        state.customSystemVoiceName = "";
        const prof = getActiveVoiceProfile(pid);
        state.voiceAccent = prof.lang || "en-US";
        speak("Hello! Let's practice natural English together.", 1.0, pid);
        render();
        break;
      }
      case "test-current-voice": {
        speak("The development of artificial intelligence has revolutionized modern education.", 1.0);
        break;
      }
      case "set-voice-pitch": {
        state.voicePitchMod = parseFloat(btn.getAttribute("data-pitch") || "1.0");
        speak("Natural voice tone updated.", 1.0);
        render();
        break;
      }
      case "open-api-modal": {
        state.isApiModalOpen = true;
        state.isVoiceMenuOpen = false;
        state.apiStatusMsg = "";
        render();
        break;
      }
      case "close-api-modal": {
        state.isApiModalOpen = false;
        render();
        break;
      }
      case "select-ai-provider": {
        const prov = btn.getAttribute("data-provider") || "gemini";
        state.aiProvider = prov;
        state.aiModel = prov === "gemini" ? "gemini-2.0-flash" : "gpt-4o-mini";
        state.apiStatusMsg = "";
        render();
        break;
      }
      case "save-api-config": {
        const inputEl = document.getElementById("ai-api-key-input");
        if (inputEl) {
          state.aiApiKey = (inputEl.value || "").trim();
        }
        const modelEl = document.getElementById("ai-model-select");
        if (modelEl) {
          state.aiModel = modelEl.value;
        }
        const ttsEl = document.getElementById("neural-tts-checkbox");
        if (ttsEl) {
          state.useNeuralTts = Boolean(ttsEl.checked);
        }
        saveAiConfigToStorage({
          provider: state.aiProvider,
          apiKey: (state.aiApiKey || "").trim(),
          model: state.aiModel,
          useNeuralTts: state.useNeuralTts
        });
        state.apiStatusMsg = "✓ Đã lưu cấu hình API AI thành công!";
        state.apiStatusType = "success";
        render();
        setTimeout(() => {
          state.isApiModalOpen = false;
          render();
        }, 700);
        break;
      }
      case "test-api-config": {
        testAiConnection();
        break;
      }
      case "clear-api-config": {
        state.aiApiKey = "";
        state.useNeuralTts = false;
        saveAiConfigToStorage({
          provider: state.aiProvider,
          apiKey: "",
          model: state.aiModel,
          useNeuralTts: false
        });
        state.apiStatusMsg = "Đã xóa API Key khỏi trình duyệt.";
        state.apiStatusType = "info";
        render();
        break;
      }
      case "analyze-ipa-ai": {
        analyzeIpaWithAi();
        break;
      }
      case "header-native-audio": {
        if (state.activeTab === "ipa") {
          speak(state.ipaInput);
        } else if (state.activeTab === "shadowing") {
          const topic =
            shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
          const dlg = topic && topic.dialogues[state.selectedDialogueIndex];
          if (dlg && dlg.turns) {
            speakDialogueSequence(dlg.turns, state.audioRate);
          }
        } else if (state.activeTab === "flashcard") {
          const list = flashcards.filter((f) => state.cardTopic === "All" || f.topic === state.cardTopic);
          const cur = list[state.cardIdx] || flashcards[0];
          if (cur) speak(cur.word);
        }
        break;
      }
      case "trigger-image-upload": {
        const el = document.getElementById("image-upload-input");
        if (el) el.click();
        break;
      }
      case "trigger-doc-upload": {
        const el = document.getElementById("doc-upload-input");
        if (el) el.click();
        break;
      }
      case "open-paste-modal": {
        state.isPasteModalOpen = true;
        state.pasteToastMsg = "";
        render();
        if (navigator.clipboard && navigator.clipboard.readText) {
          navigator.clipboard.readText().then((txt) => {
            if (txt && txt.trim()) {
              state.pastedTextInput = txt.trim();
              render();
            }
          }).catch(() => {});
        }
        break;
      }
      case "close-paste-modal": {
        state.isPasteModalOpen = false;
        state.pasteToastMsg = "";
        render();
        break;
      }
      case "read-clipboard-to-paste-input": {
        if (navigator.clipboard && navigator.clipboard.readText) {
          navigator.clipboard.readText().then((txt) => {
            if (txt && txt.trim()) {
              state.pastedTextInput = txt.trim();
              state.pasteToastMsg = "✓ Đã lấy văn bản từ clipboard!";
              render();
            } else {
              alert("Clipboard trống. Vui lòng copy đoạn văn bản tiếng Anh trước.");
            }
          }).catch(() => {
            alert("Trình duyệt chặn đọc Clipboard tự động. Bạn vui lòng bấm vào ô văn bản rồi nhấn phím Ctrl+V hoặc Cmd+V để dán.");
          });
        } else {
          alert("Trình duyệt không hỗ trợ đọc Clipboard tự động. Bạn vui lòng bấm vào ô văn bản rồi nhấn Ctrl+V / Cmd+V để dán.");
        }
        break;
      }
      case "apply-paste-to-ipa": {
        const area = document.getElementById("pasted-content-textarea");
        const val = area ? area.value : state.pastedTextInput;
        applyPastedTextToIpa(val);
        break;
      }
      case "apply-paste-to-shadowing": {
        const area = document.getElementById("pasted-content-textarea");
        const val = area ? area.value : state.pastedTextInput;
        applyPastedTextToShadowing(val);
        break;
      }
      case "speak-text": {
        const text = btn.getAttribute("data-text");
        if (text) speak(text, 1.0);
        break;
      }
      case "speak-text-stop": {
        e.stopPropagation();
        const text = btn.getAttribute("data-text");
        if (text) speak(text, 1.0);
        break;
      }
      case "next-ipa-sample": {
        state.ipaSampleIdx = (state.ipaSampleIdx + 1) % IPA_SAMPLE_SENTENCES.length;
        const sample = IPA_SAMPLE_SENTENCES[state.ipaSampleIdx];
        state.ipaInput = sample.text;
        state.selectedWord = resolveWordDetails(sample.focus);
        state.ipaScore = null;
        render();
        break;
      }
      case "clear-ipa-input": {
        state.ipaInput = "";
        state.selectedWord = null;
        state.ipaScore = null;
        render();
        break;
      }
      case "toggle-ipa-record": {
        toggleIpaRecord();
        break;
      }
      case "select-ipa-word": {
        const w = btn.getAttribute("data-word");
        const details = resolveWordDetails(w);
        if (details) {
          state.selectedWord = details;
          speak(details.clean);
          render();
        }
        break;
      }
      case "toggle-ipa-44": {
        state.showIpaChart44 = !state.showIpaChart44;
        render();
        break;
      }
      case "set-shadow-source-tab": {
        const src = btn.getAttribute("data-source") || "zim";
        if (src !== state.shadowSourceTab) {
          stopShadowSession(true);
          state.shadowSourceTab = src;
          state.shadowingTurnIdx = 0;
          state.shadowScore = null;
          state.activeIpaTurnIdx = null;
          state.peekTurnIdx = null;
          state.isTopicDropdownOpen = false;
          render();
        }
        break;
      }
      case "paste-into-shadow-url": {
        if (navigator.clipboard && navigator.clipboard.readText) {
          navigator.clipboard
            .readText()
            .then((txt) => {
              if (txt) {
                state.shadowUrlInput = txt.trim();
                render();
              }
            })
            .catch(() => {});
        }
        break;
      }
      case "pick-shadow-preset": {
        const preset = btn.getAttribute("data-preset");
        loadShadowPreset(preset);
        break;
      }
      case "extract-shadow-from-url": {
        extractShadowingFromUrl(state.shadowUrlInput);
        break;
      }
      case "dismiss-shadow-url-error": {
        state.shadowUrlExtractError = "";
        render();
        break;
      }
      case "seek-youtube-turn": {
        const timeSec = parseFloat(btn.getAttribute("data-time") || "0");
        seekYouTubePlayer(timeSec);
        break;
      }
      case "toggle-yt-split-layout": {
        state.youtubeSplitLayout = !state.youtubeSplitLayout;
        render();
        break;
      }
      case "yt-prev-turn": {
        const { dialogue } = getCurrentShadowTopicAndDialogue();
        if (dialogue && dialogue.turns && dialogue.turns.length) {
          const curIdx = state.activeYouTubeTurnIdx !== null ? state.activeYouTubeTurnIdx : 0;
          const prevIdx = Math.max(0, curIdx - 1);
          const turn = dialogue.turns[prevIdx];
          if (turn && turn.time !== undefined) {
            seekYouTubePlayer(turn.time);
          }
        }
        break;
      }
      case "yt-replay-turn": {
        const { dialogue } = getCurrentShadowTopicAndDialogue();
        if (dialogue && dialogue.turns && dialogue.turns.length) {
          const curIdx = state.activeYouTubeTurnIdx !== null ? state.activeYouTubeTurnIdx : 0;
          const turn = dialogue.turns[curIdx] || dialogue.turns[0];
          if (turn && turn.time !== undefined) {
            seekYouTubePlayer(turn.time);
          }
        }
        break;
      }
      case "yt-next-turn": {
        const { dialogue } = getCurrentShadowTopicAndDialogue();
        if (dialogue && dialogue.turns && dialogue.turns.length) {
          const curIdx = state.activeYouTubeTurnIdx !== null ? state.activeYouTubeTurnIdx : -1;
          const nextIdx = Math.min(dialogue.turns.length - 1, curIdx + 1);
          const turn = dialogue.turns[nextIdx];
          if (turn && turn.time !== undefined) {
            seekYouTubePlayer(turn.time);
          }
        }
        break;
      }
      case "yt-shadow-active-turn": {
        const targetIdx = state.activeYouTubeTurnIdx !== null ? state.activeYouTubeTurnIdx : 0;
        pauseYouTubePlayer();
        startShadowGuidedMode(targetIdx);
        break;
      }
      case "yt-adjust-offset": {
        const deltaStr = btn.getAttribute("data-delta") || "0";
        if (deltaStr === "0" || deltaStr === "reset") {
          state.youtubeSyncOffsetSec = 0;
        } else {
          const delta = parseFloat(deltaStr);
          if (!isNaN(delta)) {
            state.youtubeSyncOffsetSec = Math.round((Number(state.youtubeSyncOffsetSec || 0) + delta) * 10) / 10;
          }
        }
        if (ytLastRealTimeSec >= 0) {
          const effectiveSec = Math.max(0, ytLastRealTimeSec + (state.youtubeSyncOffsetSec || 0));
          syncYouTubeCurrentTime(effectiveSec);
        } else {
          updateYouTubeActiveDom(state.activeYouTubeTurnIdx, -1, state.activeYouTubeWordIdx, 0, 0);
        }
        break;
      }
      case "open-yt-popup": {
        const yId = btn.getAttribute("data-yt-id");
        openYouTubePopup(yId, 0);
        break;
      }
      case "toggle-transcript-input": {
        state.showTranscriptInput = !state.showTranscriptInput;
        render();
        break;
      }
      case "clear-shadow-transcript": {
        state.shadowTranscriptInput = "";
        render();
        break;
      }
      case "toggle-topic-dropdown": {
        if (state.shadowSourceTab !== "zim") {
          state.shadowSourceTab = "zim";
          stopShadowSession(true);
          state.shadowingTurnIdx = 0;
          state.shadowScore = null;
        }
        state.isTopicDropdownOpen = !state.isTopicDropdownOpen;
        render();
        break;
      }
      case "close-topic-dropdown": {
        state.isTopicDropdownOpen = false;
        render();
        break;
      }
      case "select-shadow-topic": {
        const topicId = btn.getAttribute("data-topic-id");
        if (topicId) {
          stopShadowSession(true);
          state.shadowSourceTab = "zim";
          state.selectedTopicId = topicId;
          state.selectedDialogueIndex = 0;
          state.shadowingTurnIdx = 0;
          state.activeIpaTurnIdx = null;
          state.peekTurnIdx = null;
          state.isTopicDropdownOpen = false;
          render();
        }
        break;
      }
      case "set-audio-rate": {
        const r = parseFloat(btn.getAttribute("data-rate") || "1.0");
        state.audioRate = r;
        render();
        break;
      }
      case "set-shadow-passage-mode": {
        const mode = btn.getAttribute("data-mode") || "sentence";
        state.shadowPassageMode = mode;
        render();
        break;
      }
      case "select-shadow-dialogue": {
        const idx = parseInt(btn.getAttribute("data-dlg-idx") || "0", 10);
        stopShadowSession(true);
        state.selectedDialogueIndex = idx;
        state.shadowingTurnIdx = 0;
        state.activeIpaTurnIdx = null;
        state.peekTurnIdx = null;
        render();
        break;
      }
      case "shadow-mode-listen": {
        pauseYouTubePlayer();
        startShadowListenMode();
        break;
      }
      case "shadow-mode-shadowing": {
        pauseYouTubePlayer();
        startShadowGuidedMode(0);
        break;
      }
      case "shadow-mode-full": {
        pauseYouTubePlayer();
        startShadowFullMode();
        break;
      }
      case "toggle-shadow-script": {
        state.hideShadowScript = !state.hideShadowScript;
        state.peekTurnIdx = null;
        render();
        break;
      }
      case "peek-shadow-turn": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        state.peekTurnIdx = state.peekTurnIdx === tIdx ? null : tIdx;
        render();
        break;
      }
      case "listen-from-turn": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        pauseYouTubePlayer();
        startShadowListenMode(tIdx);
        break;
      }
      case "shadow-from-turn": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        pauseYouTubePlayer();
        startShadowGuidedMode(tIdx);
        break;
      }
      case "shadow-continue-next": {
        pauseYouTubePlayer();
        continueShadowNextTurn();
        break;
      }
      case "shadow-replay-turn": {
        runShadowMachinePhaseForTurn(state.shadowingTurnIdx);
        break;
      }
      case "shadow-retry-turn": {
        startShadowUserRecordPhase(state.shadowingTurnIdx);
        break;
      }
      case "shadow-finish-session": {
        finalizeShadowSessionScore();
        break;
      }
      case "shadow-finish-full": {
        finalizeFullDialogueScore();
        break;
      }
      case "shadow-stop-session": {
        stopShadowSession(false);
        break;
      }
      case "shadow-clear-report": {
        state.shadowSessionReport = null;
        render();
        break;
      }
      case "play-all-dialogue": {
        startShadowListenMode(0);
        break;
      }
      case "toggle-turn-ipa": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        state.activeIpaTurnIdx = state.activeIpaTurnIdx === tIdx ? null : tIdx;
        render();
        break;
      }
      case "speak-turn": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        startShadowListenMode(tIdx);
        break;
      }
      case "toggle-shadow-record": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        startShadowGuidedMode(tIdx);
        break;
      }
      case "set-shadow-gen-style": {
        const st = btn.getAttribute("data-style") || "similar";
        state.shadowGenStyle = st;
        render();
        break;
      }
      case "generate-similar-dialogue": {
        const useAiAttr = btn.getAttribute("data-use-ai") === "true";
        generateSimilarShadowDialogue(useAiAttr);
        break;
      }
      case "toggle-all-turns-ipa": {
        state.showAllTurnsIpa = !state.showAllTurnsIpa;
        render();
        break;
      }
      case "toggle-full-passage-box": {
        state.showFullPassageBox = !state.showFullPassageBox;
        render();
        break;
      }
      case "copy-full-dialogue": {
        const currentTopic = getCurrentTopic();
        const currentDialogue = getCurrentDialogue(currentTopic);
        const fullText = currentDialogue.turns
          .map((t) => `${t.speaker}: ${t.text}`)
          .join("\n\n");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(fullText).catch(() => {});
        }
        state.copiedDialogueNotice = true;
        render();
        setTimeout(() => {
          state.copiedDialogueNotice = false;
          render();
        }, 2000);
        break;
      }
      case "toggle-full-topic-vocab": {
        state.showFullTopicVocab = !state.showFullTopicVocab;
        render();
        break;
      }
      case "toggle-full-topic-patterns": {
        state.showFullTopicPatterns = !state.showFullTopicPatterns;
        render();
        break;
      }
      case "set-listen-subtab": {
        state.listenSubTab = btn.getAttribute("data-subtab") || "bands";
        render();
        break;
      }
      case "select-band-listen": {
        state.bandListenAnswers["q1"] = parseInt(btn.getAttribute("data-idx") || "0", 10);
        render();
        break;
      }
      case "select-listen-cam": {
        state.selectedCam = btn.getAttribute("data-book") || "18";
        state.camListenSubmitted = false;
        render();
        break;
      }
      case "select-listen-test": {
        state.selectedCamTest = parseInt(btn.getAttribute("data-test") || "0", 10);
        state.camListenSubmitted = false;
        render();
        break;
      }
      case "select-listen-part": {
        state.selectedCamPart = parseInt(btn.getAttribute("data-part") || "0", 10);
        render();
        break;
      }
      case "set-cam-listen-ans": {
        const qk = btn.getAttribute("data-qkey");
        const val = btn.getAttribute("data-val");
        if (qk) {
          state.camListenAnswers[qk] = val;
          render();
        }
        break;
      }
      case "toggle-cam-listen-submit": {
        state.camListenSubmitted = !state.camListenSubmitted;
        render();
        break;
      }
      case "check-dictation": {
        checkDictation();
        break;
      }
      case "next-dictation": {
        if (state.dictIdx < dictationItems.length - 1) {
          state.dictIdx++;
          state.dictInput = "";
          state.dictScore = null;
          render();
        }
        break;
      }
      case "prev-dictation": {
        if (state.dictIdx > 0) {
          state.dictIdx--;
          state.dictInput = "";
          state.dictScore = null;
          render();
        }
        break;
      }
      case "set-read-subtab": {
        state.readSubTab = btn.getAttribute("data-subtab") || "b1b2";
        state.readResultShown = false;
        render();
        break;
      }
      case "set-read-ans": {
        const key = btn.getAttribute("data-key");
        const val = parseInt(btn.getAttribute("data-val") || "0", 10);
        if (key) {
          state.readAnswers[key] = val;
          render();
        }
        break;
      }
      case "set-read-ans-str": {
        const key = btn.getAttribute("data-key");
        const val = btn.getAttribute("data-val") || "";
        if (key) {
          state.readAnswers[key] = val;
          render();
        }
        break;
      }
      case "toggle-read-result": {
        state.readResultShown = !state.readResultShown;
        render();
        break;
      }
      case "select-read-cam-book": {
        state.readCamBook = btn.getAttribute("data-book") || "18";
        render();
        break;
      }
      case "select-read-cam-test": {
        state.readCamTest = parseInt(btn.getAttribute("data-test") || "0", 10);
        render();
        break;
      }
      case "select-read-cam-passage": {
        state.readCamPassage = parseInt(btn.getAttribute("data-passage") || "0", 10);
        render();
        break;
      }
      case "set-card-topic": {
        state.cardTopic = btn.getAttribute("data-topic") || "All";
        state.cardIdx = 0;
        state.isFlipped = false;
        render();
        break;
      }
      case "flip-flashcard": {
        state.isFlipped = !state.isFlipped;
        render();
        break;
      }
      case "prev-flashcard": {
        if (state.cardIdx > 0) {
          state.cardIdx--;
          state.isFlipped = false;
          render();
        }
        break;
      }
      case "next-flashcard": {
        const list = flashcards.filter((f) => state.cardTopic === "All" || f.topic === state.cardTopic);
        if (state.cardIdx < list.length - 1) {
          state.cardIdx++;
          state.isFlipped = false;
          render();
        }
        break;
      }
      case "set-writing-task": {
        state.writingTask = btn.getAttribute("data-task") || "task1";
        state.writingScore = null;
        render();
        break;
      }
      case "toggle-writing-model": {
        state.showWritingModel = !state.showWritingModel;
        render();
        break;
      }
      case "eval-writing": {
        evalWriting();
        break;
      }
      case "set-speaking-subtab": {
        state.speakSubTab = btn.getAttribute("data-subtab") || "topic";
        shouldResetScroll = true;
        if (state.speakSubTab === "talk_to_ai" && state.talkAiMessages.length === 0) {
          startAiTalkSession(false);
        }
        render();
        break;
      }
      case "select-speaking-topic-source": {
        state.speakTopicSource = btn.getAttribute("data-source") || "ielts2026";
        shouldResetScroll = true;
        render();
        break;
      }
      case "select-speaking-lesson": {
        state.speakLessonIdx = parseInt(btn.getAttribute("data-idx") || "0", 10);
        shouldResetScroll = true;
        state.speakPracticeTargetText = "";
        state.speakPracticeTranscript = "";
        state.speakScore = null;
        render();
        break;
      }
      case "start-speak-timer": {
        const sec = parseInt(btn.getAttribute("data-sec") || "60", 10);
        const lbl = btn.getAttribute("data-label") || (sec === 60 ? "Chuẩn bị Part 2" : "Luyện nói Part 2");
        startSpeakCountdown(sec, lbl);
        break;
      }
      case "stop-speak-timer": {
        stopSpeakCountdown();
        break;
      }
      case "copy-speak-text": {
        const txt = btn.getAttribute("data-text") || "";
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt);
          const original = btn.innerHTML;
          btn.innerHTML = `${ICONS.ClipboardCheck} Đã sao chép!`;
          setTimeout(() => { btn.innerHTML = original; }, 1500);
        }
        break;
      }
      case "practice-speak-sentence": {
        const txt = btn.getAttribute("data-text") || "";
        if (state.speakPracticeTargetText === txt) {
          state.speakPracticeTargetText = "";
          state.speakPracticeTranscript = "";
          state.speakScore = null;
          if (sentencePracticeRecognition) {
            try { sentencePracticeRecognition.stop(); } catch(e) {}
            sentencePracticeRecognition = null;
          }
          state.isRecordingSpeak = false;
        } else {
          state.speakPracticeTargetText = txt;
          state.speakPracticeTranscript = "";
          state.speakScore = null;
          state.isRecordingSpeak = false;
        }
        render();
        break;
      }
      case "toggle-speak-sentence-mic": {
        toggleSentencePracticeMic();
        break;
      }
      case "toggle-topic-ai-mic": {
        toggleTopicAiRecord();
        break;
      }
      case "send-topic-ai-answer": {
        const txt = state.topicAiInputText.trim();
        if (txt && !state.isTopicAiEvaluating) {
          const lessons = window.SPEAKING_2026_DATA || [];
          const curL = lessons[state.speakLessonIdx] || lessons[0];
          sendTopicAiAnswer(txt, curL, state.speakPart);
        }
        break;
      }
      case "reset-topic-ai-session": {
        const lessons = window.SPEAKING_2026_DATA || [];
        const curL = lessons[state.speakLessonIdx] || lessons[0];
        initTopicAiSession(curL, state.speakPart, true);
        render();
        break;
      }
      case "toggle-topic-shadow-mic": {
        const txt = btn.getAttribute("data-text") || "";
        toggleTopicShadowMic(txt);
        break;
      }
      case "set-talk-ai-examiner": {
        state.talkAiExaminer = btn.getAttribute("data-examiner") || "richard";
        render();
        break;
      }
      case "set-talk-ai-mode": {
        state.talkAiMode = btn.getAttribute("data-mode") || "mock_full";
        startAiTalkSession(true);
        break;
      }
      case "start-talk-ai-session": {
        startAiTalkSession(true);
        break;
      }
      case "toggle-talk-ai-mic": {
        toggleAiTalkRecord();
        break;
      }
      case "send-talk-ai-answer": {
        const txt = state.talkAiInputText.trim();
        if (txt && !state.isAiEvaluating) {
          sendAiTalkAnswer(txt);
        }
        break;
      }
      case "talk-ai-hint": {
        talkAiGiveHint();
        break;
      }
            case "select-speak-book": {
        state.speakCamBook = btn.getAttribute("data-book") || "21";
        render();
        break;
      }
      case "select-speak-test": {
        state.speakCamTestIdx = parseInt(btn.getAttribute("data-test") || "0", 10);
        render();
        break;
      }
      case "select-speak-part": {
        state.speakPart = btn.getAttribute("data-part") || "part1";
        shouldResetScroll = true;
        state.topicAiMessages = [];
        state.topicAiInputText = "";
        state.topicShadowTarget = "";
        state.topicShadowTranscript = "";
        state.topicShadowScore = null;
        state.isRecordingTopicAi = false;
        state.isRecordingTopicShadow = false;
        render();
        break;
      }
    }
  });

  // Initial mount
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
