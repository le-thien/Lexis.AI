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
    Sparkles: `<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`
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

  // --- APPLICATION STATE (Exact match to App() state in autoexam_ai_english_learning_suite.tsx) ---
  const state = {
    activeTab: "ipa", // ipa | shadowing | listening | reading | flashcard | writing | speaking
    voiceAccent: "en-US",

    // 1. IPA State
    ipaInput: "The development of artificial intelligence has revolutionized modern education and technology.",
    ipaSampleIdx: 0,
    selectedWord: Object.assign({ clean: "development" }, sampleIpaDict["development"]),
    isRecordingIpa: false,
    ipaScore: null,
    isProcessingFile: false,
    showIpaChart44: false,

    // 2. Shadowing State
    selectedTopicId: "workplace",
    selectedDialogueIndex: 0,
    shadowingTurnIdx: 0,
    isRecordingShadow: false,
    shadowScore: null,
    audioRate: 1.0,
    isTopicDropdownOpen: false,
    activeIpaTurnIdx: null,

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

  // Web Speech API Synthesis
  function speak(text, rate) {
    if (!window.speechSynthesis || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = state.voiceAccent || "en-US";
    utterance.rate = rate || 1.0;
    window.speechSynthesis.speak(utterance);
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
          rec.lang = state.voiceAccent || "en-US";
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

  function toggleShadowRecord(turnIdx) {
    if (state.isRecordingShadow && state.shadowingTurnIdx === turnIdx) {
      state.isRecordingShadow = false;
      state.shadowScore = {
        turnIdx,
        percent: Math.floor(Math.random() * 15) + 84,
        fluency: Math.floor(Math.random() * 10) + 88
      };
      render();
    } else {
      state.shadowingTurnIdx = turnIdx;
      state.isRecordingShadow = true;
      state.shadowScore = null;
      render();
    }
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

  function evalWriting() {
    state.isEvaluating = true;
    render();
    setTimeout(() => {
      state.isEvaluating = false;
      const wc = state.essayText.trim() ? state.essayText.trim().split(/\s+/).length : 0;
      if (wc > 120) {
        state.writingScore = { overall: 7.5, tr: 7.5, cc: 8.0, lr: 7.5, gra: 7.0 };
      } else {
        state.writingScore = { overall: 7.0, tr: 7.0, cc: 7.5, lr: 7.0, gra: 6.5 };
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

          <div class="flex items-center justify-between">
            <div class="flex gap-2">
              <button
                type="button"
                data-action="next-ipa-sample"
                class="text-[11px] text-slate-400 hover:text-indigo-400 flex items-center gap-1"
              >
                ${ICONS.RefreshCw} Mẫu khác
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

  // --- RENDER SECTION 2: SHADOWING TAB ---
  function renderShadowingTab() {
    const currentTopic =
      shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
    if (!currentTopic) return `<div class="text-xs text-slate-400">Đang tải dữ liệu Shadowing...</div>`;
    const currentDialogue =
      currentTopic.dialogues[state.selectedDialogueIndex] || currentTopic.dialogues[0];

    const dropdownHtml = state.isTopicDropdownOpen
      ? `
        <div class="fixed inset-0 z-30" data-action="close-topic-dropdown"></div>
        <div class="absolute left-0 top-full mt-1.5 w-72 bg-[#0F172A] border border-slate-700/80 rounded-xl shadow-2xl z-40 py-1.5 max-h-80 overflow-y-auto backdrop-blur-md animate-in">
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
                  <span>${escapeHtml(topic.title)}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isSelected ? "bg-indigo-500/30 text-indigo-300" : "bg-slate-800 text-slate-400"
                  }">
                    ${topic.dialogues.length}
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
            class="p-2 rounded-lg text-left transition border ${
              isCurDlg
                ? "bg-indigo-600/25 border-indigo-500 text-white shadow-md shadow-indigo-600/20 ring-1 ring-indigo-400"
                : "bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }"
          >
            <div class="text-[10px] font-mono text-indigo-400 font-bold">#${idx + 1}</div>
            <div class="text-[11px] font-semibold truncate text-slate-200">${escapeHtml(dlg.title)}</div>
          </button>
        `;
      })
      .join("");

    const turnsHtml = (currentDialogue.turns || [])
      .map((turn, tIdx) => {
        const isRecordingThis = state.isRecordingShadow && state.shadowingTurnIdx === tIdx;
        const turnEvaluation =
          state.shadowScore && state.shadowScore.turnIdx === tIdx ? state.shadowScore : null;
        const isSpeakerA = tIdx % 2 === 0;
        const isIpaVisible = state.activeIpaTurnIdx === tIdx;

        return `
          <div class="p-3.5 rounded-xl border transition-all space-y-2.5 ${
            isSpeakerA ? "bg-[#0B0F19] border-slate-800/90" : "bg-[#0B0F19]/90 border-indigo-900/40"
          }">
            <!-- Speaker Tag + Controls -->
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
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  data-action="toggle-turn-ipa"
                  data-turn-idx="${tIdx}"
                  title="${isIpaVisible ? "Ẩn phiên âm IPA" : "Xem phiên âm IPA"}"
                  class="h-8 px-2 rounded-lg text-[11px] font-mono font-bold transition active:scale-95 border ${
                    isIpaVisible
                      ? "bg-indigo-600 text-white border-indigo-500"
                      : "bg-slate-800/80 text-indigo-400 border-slate-700/80 hover:bg-slate-700"
                  }"
                >
                  IPA
                </button>

                <button
                  type="button"
                  data-action="speak-turn"
                  data-text="${escapeHtml(turn.text)}"
                  title="Nghe câu này"
                  class="h-8 w-8 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-300 flex items-center justify-center transition active:scale-95"
                >
                  ${ICONS.Volume2}
                </button>

                <button
                  type="button"
                  data-action="toggle-shadow-record"
                  data-turn-idx="${tIdx}"
                  title="${isRecordingThis ? "Dừng ghi âm & chấm điểm" : "Nhại lại câu này (Shadowing)"}"
                  class="h-8 px-2.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition active:scale-95 shadow-sm ${
                    isRecordingThis
                      ? "bg-rose-600 text-white animate-pulse"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white"
                  }"
                >
                  ${
                    isRecordingThis
                      ? `${ICONS.MicOffSm}<span>Dừng</span>`
                      : `${ICONS.MicSm}<span>Tập nói</span>`
                  }
                </button>

                ${
                  turnEvaluation
                    ? (() => {
                        const sc = getScoreColor(turnEvaluation.percent);
                        return `
                          <div class="h-8 px-2.5 rounded-lg border flex items-center gap-1 text-xs font-bold ${sc.badgeBg}">
                            <span>${turnEvaluation.percent}%</span>
                            <span class="text-[10px] opacity-80 font-normal">(${sc.label})</span>
                          </div>
                        `;
                      })()
                    : ""
                }
              </div>
            </div>

            <!-- Dialogue Full Sentence Text -->
            <p
              data-action="toggle-turn-ipa"
              data-turn-idx="${tIdx}"
              class="text-xs font-medium text-slate-100 leading-relaxed pl-8 cursor-pointer hover:text-indigo-200 transition"
              title="Bấm vào câu để bật/tắt phiên âm IPA"
            >
              "${escapeHtml(turn.text)}"
            </p>

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
          </div>
        `;
      })
      .join("");

    const keyVocabList = currentDialogue.keyVocab || [
      { word: "walk through", ipa: "/wɔːk θruː/", pos: "phr v", def: "giải thích chi tiết từng bước" },
      { word: "highlights", ipa: "/ˈhaɪ.laɪts/", pos: "n", def: "những điểm nổi bật chính" },
      { word: "proposal", ipa: "/prəˈpəʊ.zəl/", pos: "n", def: "bản đề xuất kế hoạch" },
      { word: "implementation", ipa: "/ˌɪm.plɪ.menˈteɪ.ʃən/", pos: "n", def: "sự triển khai, thực thi" }
    ];

    const keyPatternsList = currentDialogue.keyPatterns || [
      {
        pattern: "Could you walk me through + [Noun]?",
        meaning: "Bạn có thể trình bày/giải thích qua cho tôi về... được không?",
        example: "Could you walk me through the key points of the report?"
      },
      {
        pattern: "Everything looks solid, especially + [Noun]",
        meaning: "Mọi thứ trông rất ổn/chắc chắn, đặc biệt là...",
        example: "Everything looks solid, especially the project timeline."
      }
    ];

    return `
      <div class="space-y-3">
        <!-- Top Row: Single Topic Dropdown + Speed Controls -->
        <div class="flex items-center justify-between gap-3 border-b border-slate-800 pb-2 relative">
          <div class="relative">
            <button
              type="button"
              data-action="toggle-topic-dropdown"
              class="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition active:scale-95 border border-indigo-400/40"
            >
              <span class="text-[11px] uppercase tracking-wider text-indigo-200 font-bold">TOPIC:</span>
              <span>${escapeHtml(currentTopic.title)}</span>
              <span class="ml-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-white/20 text-white">
                ${currentTopic.dialogues.length}
              </span>
              <span class="ml-1 transition-transform duration-200 text-indigo-200 ${state.isTopicDropdownOpen ? "rotate-180" : ""}">
                ${ICONS.ChevronDown}
              </span>
            </button>
            ${dropdownHtml}
          </div>

          <!-- Speed Controls -->
          <div class="flex items-center gap-1 flex-shrink-0 bg-[#0F172A] p-1 rounded-lg border border-slate-800">
            <span class="text-[10px] text-slate-400 px-1 font-medium">Tốc độ:</span>
            ${[0.75, 1.0]
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

        <!-- BƯỚC 1: CHỌN 1 TRONG 10 ĐOẠN HỘI THOẠI CỦA CHỦ ĐỀ -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-3 space-y-2">
          <div class="flex items-center justify-between text-xs text-slate-300 px-1 font-semibold">
            <span class="flex items-center gap-1.5">
              ${ICONS.BookMarked}
              <span>Select Dialogue (${escapeHtml(currentTopic.title)}):</span>
            </span>
            <span class="text-indigo-400 font-mono text-[11px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
              Dialogue #${state.selectedDialogueIndex + 1} / ${currentTopic.dialogues.length}
            </span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
            ${dialogueGridHtml}
          </div>
        </div>

        <!-- BƯỚC 2: KHU VỰC HIỂN THỊ ĐẦY ĐỦ ĐOẠN HỘI THOẠI -->
        <div class="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div>
              <span class="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 uppercase tracking-wider">
                Dialogue #${state.selectedDialogueIndex + 1}
              </span>
              <h3 class="text-sm font-bold text-white mt-1">${escapeHtml(currentDialogue.title)}</h3>
            </div>

            <button
              type="button"
              data-action="play-all-dialogue"
              class="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition"
            >
              ${ICONS.Volume2}
              <span>Play All</span>
            </button>
          </div>

          <!-- Conversational Flow -->
          <div class="space-y-3">
            ${turnsHtml}
          </div>

          <!-- PHẦN BỔ SUNG 1: TỪ VỰNG THÔNG DỤNG -->
          <div class="pt-3 border-t border-slate-800 space-y-2.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-indigo-500"></span>
                <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider">Từ vựng thông dụng</h4>
              </div>
              <span class="text-[10px] text-slate-500 font-mono">${keyVocabList.length} từ khóa</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${keyVocabList
                .map(
                  (vItem) => `
                <div class="bg-[#0B0F19] border border-slate-800/90 rounded-lg p-2.5 flex items-center justify-between hover:border-slate-700 transition">
                  <div class="space-y-0.5">
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
                    class="h-7 w-7 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition active:scale-95 flex-shrink-0 ml-2"
                  >
                    ${ICONS.Volume2}
                  </button>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <!-- PHẦN BỔ SUNG 2: MẪU CÂU THÔNG DỤNG -->
          <div class="pt-2 border-t border-slate-800/80 space-y-2.5">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                <h4 class="text-xs font-bold text-slate-200 uppercase tracking-wider">Mẫu câu thông dụng</h4>
              </div>
              <span class="text-[10px] text-slate-500 font-mono">${keyPatternsList.length} cấu trúc</span>
            </div>

            <div class="space-y-2">
              ${keyPatternsList
                .map(
                  (pat) => `
                <div class="bg-[#0B0F19] border border-slate-800/90 rounded-lg p-2.5 space-y-1 hover:border-slate-700 transition">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-emerald-400 font-mono">${escapeHtml(pat.pattern)}</span>
                    <button
                      type="button"
                      data-action="speak-text"
                      data-text="${escapeHtml(pat.example || pat.pattern)}"
                      class="h-6 px-2 rounded bg-slate-800/80 hover:bg-slate-700 text-[11px] text-slate-300 hover:text-white flex items-center gap-1 transition active:scale-95"
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

        <!-- Quick Score -->
        ${
          state.writingScore
            ? `
          <div class="bg-[#0F172A] border border-indigo-500/30 rounded-xl p-3 flex items-center justify-around text-xs animate-in">
            <div>Band tổng: <strong class="text-indigo-400 text-sm">Band ${state.writingScore.overall}</strong></div>
            <div>TR: <strong class="text-white">${state.writingScore.tr}</strong></div>
            <div>CC: <strong class="text-white">${state.writingScore.cc}</strong></div>
            <div>LR: <strong class="text-white">${state.writingScore.lr}</strong></div>
            <div>GRA: <strong class="text-white">${state.writingScore.gra}</strong></div>
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

    const headerQuickUploadHtml =
      state.activeTab === "ipa"
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
          </div>
        `
        : "";

    root.innerHTML = `
      <!-- Hidden File Inputs for OCR & Documents -->
      <input id="image-upload-input" type="file" accept="image/*" capture="environment" class="hidden" />
      <input id="doc-upload-input" type="file" accept=".txt,.pdf,.doc,.docx,audio/*" class="hidden" />

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

        <!-- Bottom Profile -->
        <div class="p-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span class="target-label font-semibold text-slate-300">Target 7.5+</span>
          <div class="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            ${ICONS.Zap} 14d
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

          <div class="flex items-center gap-3">
            <button
              type="button"
              data-action="toggle-accent"
              class="px-2 py-0.5 rounded bg-[#0F172A] border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-white transition"
            >
              ${state.voiceAccent === "en-GB" ? "🇬🇧 UK" : "🇺🇸 US"}
            </button>
            <button
              type="button"
              data-action="header-native-audio"
              class="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-400 transition"
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

    const imageInput = document.getElementById("image-upload-input");
    if (imageInput) {
      imageInput.addEventListener("change", function (e) {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        state.isProcessingFile = true;
        render();
        setTimeout(() => {
          const ocrSample =
            "Artificial intelligence enables personalized education and interactive language learning systems worldwide.";
          state.ipaInput = ocrSample;
          state.selectedWord = resolveWordDetails("artificial");
          state.ipaScore = null;
          state.isProcessingFile = false;
          render();
        }, 850);
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
            if (content) {
              state.ipaInput = content.slice(0, 350);
              const firstW = state.ipaInput.split(/\s+/)[0] || "sustainable";
              state.selectedWord = resolveWordDetails(firstW);
            }
            state.ipaScore = null;
            state.isProcessingFile = false;
            render();
          };
          reader.readAsText(file);
        } else {
          setTimeout(() => {
            const docSample =
              "Sustainable technology and renewable energy sources create modern environmental solutions.";
            state.ipaInput = docSample;
            state.selectedWord = resolveWordDetails("sustainable");
            state.ipaScore = null;
            state.isProcessingFile = false;
            render();
          }, 750);
        }
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
      case "toggle-accent": {
        state.voiceAccent = state.voiceAccent === "en-US" ? "en-GB" : "en-US";
        render();
        break;
      }
      case "header-native-audio": {
        if (state.activeTab === "ipa") {
          speak(state.ipaInput);
        } else if (state.activeTab === "shadowing") {
          const topic =
            shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
          const dlg = topic && topic.dialogues[state.selectedDialogueIndex];
          if (dlg && dlg.turns && dlg.turns[0]) {
            speak(dlg.turns[0].text, state.audioRate);
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
          state.selectedTopicId = topicId;
          state.selectedDialogueIndex = 0;
          state.shadowingTurnIdx = 0;
          state.shadowScore = null;
          state.activeIpaTurnIdx = null;
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
        state.selectedDialogueIndex = idx;
        state.shadowingTurnIdx = 0;
        state.shadowScore = null;
        state.activeIpaTurnIdx = null;
        render();
        break;
      }
      case "play-all-dialogue": {
        const currentTopic =
          shadowingTopicsData.find((t) => t.id === state.selectedTopicId) || shadowingTopicsData[0];
        const currentDialogue =
          currentTopic.dialogues[state.selectedDialogueIndex] || currentTopic.dialogues[0];
        if (currentDialogue && currentDialogue.turns) {
          const fullText = currentDialogue.turns
            .map((t) => `${t.speaker} says: ${t.text}`)
            .join(". ");
          speak(fullText, state.audioRate);
        }
        break;
      }
      case "toggle-turn-ipa": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        state.activeIpaTurnIdx = state.activeIpaTurnIdx === tIdx ? null : tIdx;
        render();
        break;
      }
      case "speak-turn": {
        const txt = btn.getAttribute("data-text");
        if (txt) speak(txt, state.audioRate);
        break;
      }
      case "toggle-shadow-record": {
        const tIdx = parseInt(btn.getAttribute("data-turn-idx") || "0", 10);
        toggleShadowRecord(tIdx);
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
