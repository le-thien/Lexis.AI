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

  // --- APPLICATION STATE (Exact match to App() state in autoexam_ai_english_learning_suite.tsx + Voice & AI Config) ---
  const state = {
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
    shadowMode: "idle", // idle | listen | shadowing | full
    shadowPhase: "idle", // idle | machine_reading | user_recording | full_recording | completed
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

    // 7. Speaking (Cam 16-21) State
    speakCamBook: "21",
    speakCamTestIdx: 0,
    speakPart: "part1", // part1 | part2 | part3
    speakQuestionIdx: 0,
    isRecordingSpeak: false,
    speakScore: null
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

  function getCurrentShadowTopicAndDialogue() {
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
      const el = document.querySelector(`[data-shadow-turn-card="${turnIdx}"]`);
      if (el && el.scrollIntoView) {
        try {
          el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } catch (e) {}
      }
    }, 40);
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
    state.shadowScore = null;
    state.activeIpaTurnIdx = null;
    render();
  }

  // --- RENDER SECTION 2: SHADOWING TAB ---
  function renderShadowingTab() {
    const currentTopic =
      shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
    if (!currentTopic) return `<div class="text-xs text-slate-400">Đang tải dữ liệu Shadowing...</div>`;
    const currentDialogue =
      currentTopic.dialogues[state.selectedDialogueIndex] || currentTopic.dialogues[0];
    const currentTopicIdx = shadowingTopicsData.findIndex((t) => t.id === currentTopic.id);

    const dropdownHtml = state.isTopicDropdownOpen
      ? `
        <div class="fixed inset-0 z-30" data-action="close-topic-dropdown"></div>
        <div class="absolute left-0 top-full mt-1.5 w-80 sm:w-96 bg-[#0F172A] border border-slate-700/80 rounded-xl shadow-2xl z-40 py-1.5 max-h-96 overflow-y-auto backdrop-blur-md animate-in">
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
              "text-slate-100 hover:bg-slate-800 hover:text-indigo-200 border border-transparent";

            if (isMachineReadingThis && state.shadowHighlightWordIdx === wIdx) {
              wordCls =
                "bg-amber-400 text-slate-950 font-extrabold scale-110 shadow-md shadow-amber-400/40 ring-2 ring-amber-300";
            } else if (
              isMachineReadingThis &&
              state.shadowHighlightWordIdx > wIdx &&
              state.shadowHighlightWordIdx >= 0
            ) {
              wordCls = "bg-indigo-500/25 text-indigo-200 border border-indigo-400/30";
            } else if (wordScore !== undefined) {
              if (wordScore >= 85) {
                wordCls =
                  "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold";
              } else if (wordScore >= 70) {
                wordCls =
                  "bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold";
              } else {
                wordCls =
                  "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-semibold underline decoration-rose-400";
              }
            } else if (isScriptHiddenForThisTurn) {
              wordCls =
                "bg-slate-800/90 text-slate-400 border border-slate-700/80 font-mono tracking-widest select-none";
            }

            const displayWord = isScriptHiddenForThisTurn
              ? "•".repeat(Math.max(3, Math.min(7, cleanW.length || 4)))
              : escapeHtml(w);

            return `<span
              data-shadow-turn="${tIdx}"
              data-shadow-word="${wIdx}"
              data-clean-word="${escapeHtml(cleanW.toLowerCase())}"
              data-raw-word="${escapeHtml(w)}"
              data-action="speak-text"
              data-text="${escapeHtml(cleanW || w)}"
              title="${
                wordScore !== undefined
                  ? `Độ chính xác: ${wordScore}% (Bấm để nghe phát âm từ)`
                  : "Bấm để nghe phát âm từ này"
              }"
              class="inline-block px-1.5 py-0.5 my-0.5 rounded-md text-xs transition-all duration-150 cursor-pointer ${wordCls}"
            >${displayWord}</span>`;
          })
          .join(" ");

        let cardBorderCls = isSpeakerA
          ? "bg-[#0B0F19] border-slate-800/90"
          : "bg-[#0B0F19]/90 border-indigo-900/40";
        if (isMachineReadingThis) {
          cardBorderCls =
            "bg-indigo-950/35 border-amber-400/80 ring-2 ring-amber-400/30 shadow-lg shadow-amber-500/10";
        } else if (isUserRecordingThis) {
          cardBorderCls =
            "bg-emerald-950/30 border-emerald-400/80 ring-2 ring-emerald-400/30 shadow-lg shadow-emerald-500/10";
        } else if (turnEval) {
          cardBorderCls =
            "bg-[#0B0F19] border-emerald-500/35";
        }

        return `
          <div
            data-shadow-turn-card="${tIdx}"
            class="p-3.5 rounded-xl border transition-all space-y-2.5 ${cardBorderCls}"
          >
            <!-- Speaker Tag + Per-Turn Quick Controls -->
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <div class="h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                  isSpeakerA
                    ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40"
                    : "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                }">
                  ${escapeHtml((turn.speaker || "A").charAt(0))}
                </div>
                <span class="text-xs font-bold text-slate-200">${escapeHtml(turn.speaker)}</span>
                <span class="text-[10px] font-mono text-slate-500">#${tIdx + 1}/${totalTurns}</span>

                ${
                  isMachineReadingThis
                    ? `<span class="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-[10px] font-bold animate-pulse">
                        🔊 Máy đang đọc từng chữ...
                      </span>`
                    : ""
                }
                ${
                  isUserRecordingThis
                    ? `<span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold animate-pulse">
                        🎙️ Đang ghi âm giọng bạn đọc...
                      </span>`
                    : ""
                }
              </div>

              <!-- Action Buttons on Turn -->
              <div class="flex items-center gap-1.5">
                ${
                  state.hideShadowScript
                    ? `
                  <button
                    type="button"
                    data-action="peek-shadow-turn"
                    data-turn-idx="${tIdx}"
                    class="h-7 px-2 rounded-lg text-[10px] font-semibold border transition ${
                      state.peekTurnIdx === tIdx
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white"
                    }"
                  >
                    ${state.peekTurnIdx === tIdx ? "🙈 Ẩn lại" : "👁️ Xem câu"}
                  </button>
                `
                    : ""
                }

                <button
                  type="button"
                  data-action="toggle-turn-ipa"
                  data-turn-idx="${tIdx}"
                  title="${isIpaVisible ? "Ẩn phiên âm IPA" : "Xem phiên âm IPA"}"
                  class="h-7 px-2 rounded-lg text-[10px] font-mono font-bold transition active:scale-95 border ${
                    isIpaVisible
                      ? "bg-indigo-600 text-white border-indigo-500"
                      : "bg-slate-800/80 text-indigo-400 border-slate-700/80 hover:bg-slate-700"
                  }"
                >
                  IPA
                </button>

                <button
                  type="button"
                  data-action="listen-from-turn"
                  data-turn-idx="${tIdx}"
                  title="Nghe câu này (highlight từng chữ)"
                  class="h-7 px-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-200 flex items-center gap-1 text-[10px] font-semibold transition active:scale-95"
                >
                  ${ICONS.Volume2Sm}
                  <span>Nghe</span>
                </button>

                <button
                  type="button"
                  data-action="shadow-from-turn"
                  data-turn-idx="${tIdx}"
                  title="Shadowing từ câu này"
                  class="h-7 px-2.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white flex items-center gap-1 text-[10px] font-semibold transition active:scale-95"
                >
                  ${ICONS.MicSm}
                  <span>Shadow câu này</span>
                </button>

                ${
                  turnEval
                    ? (() => {
                        const sc = getScoreColor(turnEval.percent);
                        return `
                          <div class="h-7 px-2.5 rounded-lg border flex items-center gap-1 text-[11px] font-bold ${sc.badgeBg}">
                            <span>${turnEval.percent}%</span>
                            <span class="text-[9px] opacity-85 font-normal">(${sc.label})</span>
                          </div>
                        `;
                      })()
                    : ""
                }
              </div>
            </div>

            <!-- Interactive Word-by-Word Sentence Line -->
            <div class="pl-8 leading-relaxed flex flex-wrap items-center gap-0.5">
              ${wordsHtml}
            </div>

            ${
              isIpaVisible
                ? `
              <div class="pl-8 animate-in">
                <p class="text-[11px] font-mono text-indigo-400 bg-[#0F172A] px-2.5 py-1 rounded-md border border-indigo-500/30 w-fit">
                  ${escapeHtml(turn.ipa)}
                </p>
              </div>
            `
                : ""
            }

            ${
              isUserRecordingThis
                ? `
              <!-- Inline Active Shadowing Recording Controls (Continue / Replay / Retry / Finish) -->
              <div class="ml-8 mt-2 p-3 rounded-xl bg-[#0F172A] border border-emerald-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 animate-in">
                <div class="space-y-0.5">
                  <div class="flex items-center gap-2">
                    <span class="h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping"></span>
                    <span class="text-xs font-bold text-emerald-300">
                      Đến lượt bạn đọc câu #${tIdx + 1}/${totalTurns}!
                    </span>
                  </div>
                  <p id="shadow-live-transcript-box" class="text-[11px] text-slate-300 italic">
                    ${
                      state.shadowLiveTranscript
                        ? `🎙️ Bạn đang đọc: "${escapeHtml(state.shadowLiveTranscript)}"`
                        : "🎙️ Hãy đọc to câu trên (từng chữ bạn đọc đúng sẽ sáng màu xanh lá)..."
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

                  ${
                    tIdx + 1 < totalTurns
                      ? `
                    <button
                      type="button"
                      data-action="shadow-finish-session"
                      class="px-2.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-semibold transition"
                      title="Kết thúc sớm và chấm điểm các câu đã đọc"
                    >
                      🏁 Chấm điểm ngay
                    </button>
                  `
                      : ""
                  }
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

    const dialogueVocabList = currentDialogue.keyVocab || [];
    const topicVocabList =
      currentTopic.topicVocab && currentTopic.topicVocab.length
        ? currentTopic.topicVocab
        : dialogueVocabList;
    const activeVocabList = state.showFullTopicVocab ? topicVocabList : dialogueVocabList;

    const dialoguePatternsList = currentDialogue.keyPatterns || [];
    const topicPatternsList =
      currentTopic.topicPatterns && currentTopic.topicPatterns.length
        ? currentTopic.topicPatterns
        : dialoguePatternsList;
    const activePatternsList = state.showFullTopicPatterns ? topicPatternsList : dialoguePatternsList;

    return `
      <div class="space-y-3">
        <!-- Top Row: Topic Dropdown + Total ZIM Badge + Speed Controls -->
        <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800 pb-2.5 relative">
          <div class="flex items-center gap-2 flex-wrap">
            <div class="relative">
              <button
                type="button"
                data-action="toggle-topic-dropdown"
                class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition active:scale-95 border border-indigo-400/40"
              >
                <span class="text-[11px] uppercase tracking-wider text-indigo-200 font-bold">CHỦ ĐỀ (${currentTopicIdx + 1}/${shadowingTopicsData.length}):</span>
                <span>${escapeHtml(currentTopic.title)}</span>
                <span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-white/20 text-white">
                  ${currentTopic.dialogues.length} bài
                </span>
                <span class="ml-1 transition-transform duration-200 text-indigo-200 ${state.isTopicDropdownOpen ? "rotate-180" : ""}">
                  ${ICONS.ChevronDown}
                </span>
              </button>
              ${dropdownHtml}
            </div>

            <span class="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 hidden sm:inline-flex items-center gap-1">
              📚 Chuẩn ZIM.vn • ${shadowingTopicsData.length} Chủ đề • ${topicVocabList.length} Từ vựng & ${topicPatternsList.length} Mẫu câu/chủ đề
            </span>
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

        <!-- BƯỚC 1: CHỌN ĐOẠN HỘI THOẠI TRONG CHỦ ĐỀ -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 space-y-2.5">
          <div class="flex items-center justify-between flex-wrap gap-2 text-xs text-slate-300 px-1 font-semibold">
            <span class="flex items-center gap-1.5">
              ${ICONS.BookMarked}
              <span>Chọn tình huống hội thoại (${escapeHtml(currentTopic.title)}):</span>
            </span>
            <span class="text-indigo-400 font-mono text-[11px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              Tình huống #${state.selectedDialogueIndex + 1} / ${currentTopic.dialogues.length}
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            ${dialogueGridHtml}
          </div>
        </div>

        <!-- BƯỚC 2: KHU VỰC LUYỆN SHADOWING VỚI 3 CHẾ ĐỘ (LISTEN • SHADOWING • FULL) & ẨN/HIỆN SCRIPT -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-4">
          <div class="flex items-center justify-between flex-wrap gap-3 border-b border-slate-800 pb-3">
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 uppercase tracking-wider">
                  Dialogue #${state.selectedDialogueIndex + 1} (${totalTurns} câu thoại)
                </span>
                <span class="text-[10px] font-bold text-indigo-300 bg-indigo-500/15 px-2 py-0.5 rounded border border-indigo-500/30">
                  Nguyên văn ZIM.vn
                </span>
              </div>
              <h3 class="text-sm font-bold text-white mt-1">${escapeHtml(currentDialogue.title)}</h3>
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

          <!-- Conversational Flow (Trọn đoạn hội thoại tương tác từng chữ) -->
          <div class="space-y-2.5">
            ${turnsHtml}
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

  // --- RENDER SECTION 7: SPEAKING CAM 16-21 TAB ---
  function renderSpeakingTab() {
    const camKey = `cam${state.speakCamBook}`;
    const camBookObj = CAM_DB[camKey];
    const tests = camBookObj && camBookObj.tests ? camBookObj.tests : [];
    const curTest = tests[state.speakCamTestIdx] || tests[0];
    const spk = curTest && curTest.speaking ? curTest.speaking : null;

    if (!spk) {
      return `<div class="p-4 text-xs text-slate-400">Đang tải dữ liệu Speaking Cambridge 16-21...</div>`;
    }

    const part1Questions = (spk.part1 && spk.part1.questions) || [];
    const part3Questions = (spk.part3 && spk.part3.questions) || [];

    return `
      <div class="space-y-3">
        <!-- Top Selector Bar: Cam 16-21 + Test 1-4 + Part 1/2/3 -->
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
                  state.speakCamBook === bk ? "bg-indigo-600 text-white" : "bg-[#0B0F19] text-slate-400 hover:text-white"
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
              { id: "part1", label: "Part 1 (Interview)" },
              { id: "part2", label: "Part 2 (Cue Card)" },
              { id: "part3", label: "Part 3 (Discussion)" }
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

        <!-- Speaking Content Card -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
          ${
            state.speakPart === "part2" && spk.part2
              ? `
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                  Part 2 Cue Card • Cam ${state.speakCamBook} Test ${state.speakCamTestIdx + 1}
                </span>
                <button
                  type="button"
                  data-action="speak-text"
                  data-text="${escapeHtml(spk.part2.cueCard || spk.part2.topic || "")}"
                  class="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  ${ICONS.Volume2} Nghe đề bài
                </button>
              </div>
              <div class="p-3.5 rounded-xl bg-[#0B0F19] border border-slate-800 space-y-2">
                <p class="text-sm font-bold text-white">${escapeHtml(spk.part2.cueCard || spk.part2.topic || "")}</p>
                <ul class="list-disc list-inside text-xs text-slate-300 space-y-1">
                  ${(spk.part2.bullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
                </ul>
              </div>
              ${
                spk.part2.sampleAnswer
                  ? `
                <div class="p-3 rounded-xl bg-[#0B0F19] border border-indigo-500/30 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold text-indigo-400 uppercase">Sample Answer (Band 8.0+)</span>
                    <button type="button" data-action="speak-text" data-text="${escapeHtml(spk.part2.sampleAnswer)}" class="text-[11px] text-slate-300 hover:text-white flex items-center gap-1">${ICONS.Volume2Sm} Nghe mẫu</button>
                  </div>
                  <p class="text-xs text-slate-200 leading-relaxed">${escapeHtml(spk.part2.sampleAnswer)}</p>
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
                    ? `Part 1 Topic: ${escapeHtml((spk.part1 && spk.part1.topic) || "General Interview")}`
                    : `Part 3 Topic: ${escapeHtml((spk.part3 && spk.part3.topic) || "In-depth Discussion")}`
                }
              </div>
              ${(state.speakPart === "part1" ? part1Questions : part3Questions)
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
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in">
        <div class="w-full max-w-md bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl p-5 space-y-4 text-xs">
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
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in">
        <div class="w-full max-w-lg bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl p-5 space-y-4 text-xs">
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
          <div class="flex items-center gap-1.5 ml-1">
            <button
              type="button"
              data-action="trigger-image-upload"
              ${state.isProcessingFile ? "disabled" : ""}
              title="Tải ảnh chụp đề bài / sách để quét chữ tự động (OCR)"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[11px] font-semibold text-slate-300 hover:text-white transition shadow-sm active:scale-95 disabled:opacity-50"
            >
              ${state.isProcessingFile ? ICONS.Loader2 : ICONS.ImageIcon}
              <span>Thêm ảnh (OCR)</span>
            </button>

            <button
              type="button"
              data-action="trigger-doc-upload"
              ${state.isProcessingFile ? "disabled" : ""}
              title="Nhập file văn bản hoặc file âm thanh"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[11px] font-semibold text-slate-300 hover:text-white transition shadow-sm active:scale-95 disabled:opacity-50"
            >
              ${ICONS.FileUp}
              <span>Tải file</span>
            </button>

            <button
              type="button"
              data-action="open-paste-modal"
              title="Copy một đoạn văn bản hoặc hội thoại ở ngoài rồi dán vào đây"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-indigo-500/50 hover:border-indigo-400 text-[11px] font-semibold text-indigo-300 hover:text-white transition shadow-sm active:scale-95"
            >
              ${ICONS.Clipboard}
              <span>${state.activeTab === "shadowing" ? "Dán hội thoại" : "Dán đoạn văn"}</span>
            </button>
          </div>
        `
        : "";

    root.innerHTML = `
      <!-- Hidden File Inputs for OCR & Documents -->
      <input id="image-upload-input" type="file" accept="image/*" capture="environment" class="hidden" />
      <input id="doc-upload-input" type="file" accept=".txt,.pdf,.doc,.docx,audio/*" class="hidden" />

      <!-- AI API Modal -->
      ${renderApiModalHtml()}

      <!-- Paste External Text / Dialogue Modal -->
      ${renderPasteModalHtml()}

      <!-- ================= SIDEBAR ================= -->
      <aside class="autoexam-sidebar w-56 flex-shrink-0 bg-[#0F172A] border-r border-slate-800/80 flex flex-col justify-between">
        <div>
          <!-- Brand -->
          <div class="h-14 px-5 flex items-center gap-2.5 border-b border-slate-800">
            <div class="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-md shadow-indigo-600/30 flex-shrink-0">
              AE
            </div>
            <span class="brand-title font-bold text-sm text-white tracking-tight">AutoExam.ai</span>
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
      </aside>

      <!-- ================= MAIN CONTENT ================= -->
      <main class="flex-1 flex flex-col min-w-0 bg-[#0B0F19] overflow-hidden">
        <!-- Top Minimal Bar -->
        <div class="h-12 px-6 border-b border-slate-800/80 flex items-center justify-between flex-shrink-0">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-200 uppercase tracking-wider">
              ${state.activeTab === "flashcard" ? "Flash card" : state.activeTab.toUpperCase()}
            </span>
            ${headerQuickUploadHtml}
          </div>

          <div class="flex items-center gap-2 relative">
            <!-- Natural Voice Selector Button & Popover -->
            <div class="relative">
              <button
                type="button"
                data-action="toggle-voice-menu"
                title="Chọn giọng đọc tự nhiên (Mỹ, Anh, Úc, Ireland, Nam/Nữ)"
                class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[11px] font-semibold text-slate-200 transition"
              >
                <span>🎙️ ${escapeHtml(state.customSystemVoiceName ? state.customSystemVoiceName.slice(0, 16) : activeVoiceProf.shortLabel)}</span>
                ${ICONS.ChevronDown}
              </button>
              ${renderVoiceMenuHtml()}
            </div>

            <!-- AI API Button -->
            <button
              type="button"
              data-action="open-api-modal"
              title="Cấu hình API Key (Gemini / OpenAI) để cập nhật tính năng AI"
              class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-bold transition active:scale-95 ${
                hasApiKey
                  ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25"
                  : "bg-indigo-600/20 hover:bg-indigo-600/30 border-indigo-500/50 text-indigo-300 hover:text-white"
              }"
            >
              ${ICONS.Sparkles}
              <span>${hasApiKey ? "API AI ✓" : "API AI"}</span>
            </button>

            <!-- Native Audio Quick Play -->
            <button
              type="button"
              data-action="header-native-audio"
              class="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-400 transition ml-1"
            >
              ${ICONS.Volume2} Native Audio
            </button>
          </div>
        </div>

        <!-- Content Body -->
        <div class="flex-1 overflow-y-auto p-4 max-w-5xl w-full mx-auto space-y-3">
          ${tabBodyHtml}
        </div>
      </main>
    `;

    bindDynamicInputs();
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
      case "toggle-topic-dropdown": {
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
        startShadowListenMode();
        break;
      }
      case "shadow-mode-shadowing": {
        startShadowGuidedMode(0);
        break;
      }
      case "shadow-mode-full": {
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
        startShadowListenMode(tIdx);
        break;
      }
      case "shadow-from-turn": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        startShadowGuidedMode(tIdx);
        break;
      }
      case "shadow-continue-next": {
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
