// ============================================================================
// AUTOEXAM.AI DATA SUITE — Extracted 100% from autoexam_ai_english_learning_suite.tsx
// ============================================================================
(function() {
const sampleIpaDict = {
  the: {
    ipa: "/ðə/",
    vi: "cái, người, con (mạo từ xác định)",
    pos: "article",
    cefr: "A1",
    example: "The internet changed the way people communicate.",
    exampleVi: "Internet đã thay đổi cách mọi người giao tiếp."
  },
  development: {
    ipa: "/dɪˈvel.əp.mənt/",
    vi: "sự phát triển, tiến trình mở rộng",
    pos: "noun",
    cefr: "B2",
    example: "Rapid economic development brings both wealth and ecological challenges.",
    exampleVi: "Sự phát triển kinh tế nhanh chóng mang lại cả sự thịnh vượng lẫn thách thức sinh thái."
  },
  of: {
    ipa: "/əv/",
    vi: "của, thuộc về",
    pos: "preposition",
    cefr: "A1",
    example: "A member of our research team won the award.",
    exampleVi: "Một thành viên thuộc nhóm nghiên cứu của chúng tôi đã đạt giải."
  },
  artificial: {
    ipa: "/ˌɑː.tɪˈfɪʃ.əl/",
    vi: "nhân tạo, do con người tạo ra",
    pos: "adjective",
    cefr: "B2",
    example: "Artificial lighting can disrupt natural circadian sleep cycles.",
    exampleVi: "Ánh sáng nhân tạo có thể làm gián đoạn chu kỳ giấc ngủ tự nhiên."
  },
  intelligence: {
    ipa: "/ɪnˈtel.ɪ.dʒəns/",
    vi: "trí tuệ, sự thông minh, khả năng nhận thức",
    pos: "noun",
    cefr: "B2",
    example: "Emotional intelligence is crucial for leadership success.",
    exampleVi: "Trí tuệ cảm xúc đóng vai trò then chốt cho sự thành công của người lãnh đạo."
  },
  has: {
    ipa: "/hæz/",
    vi: "có (trợ động từ thì hiện tại hoàn thành)",
    pos: "verb",
    cefr: "A1",
    example: "She has completed her master's thesis ahead of schedule.",
    exampleVi: "Cô ấy đã hoàn thành luận văn thạc sĩ trước hạn."
  },
  revolutionized: {
    ipa: "/ˌrev.əˈluː.ʃən.aɪzd/",
    vi: "cách mạng hóa, đổi mới toàn diện",
    pos: "verb (past)",
    cefr: "C1",
    example: "Smartphones have revolutionized interpersonal communication around the globe.",
    exampleVi: "Điện thoại thông minh đã cách mạng hóa giao tiếp giữa con người trên toàn cầu."
  },
  modern: {
    ipa: "/ˈmɒd.ən/",
    vi: "hiện đại, tân tiến",
    pos: "adjective",
    cefr: "A2",
    example: "Modern architecture blends minimalist form with sustainable materials.",
    exampleVi: "Kiến trúc hiện đại kết hợp hình thái tối giản với vật liệu bền vững."
  },
  education: {
    ipa: "/ˌedʒ.ʊˈkeɪ.ʃən/",
    vi: "nền giáo dục, sự đào tạo",
    pos: "noun",
    cefr: "B1",
    example: "Investing in early childhood education yields lifelong societal returns.",
    exampleVi: "Đầu tư vào giáo dục mầm non mang lại lợi ích xã hội lâu dài."
  },
  and: {
    ipa: "/ænd/",
    vi: "và, cùng với",
    pos: "conjunction",
    cefr: "A1",
    example: "Theory and practice must go hand in hand.",
    exampleVi: "Lý thuyết và thực hành phải luôn song hành."
  },
  technology: {
    ipa: "/tekˈnɒl.ə.dʒi/",
    vi: "công nghệ, kỹ thuật ứng dụng",
    pos: "noun",
    cefr: "B1",
    example: "Cloud technology enables seamless remote collaboration across teams.",
    exampleVi: "Công nghệ đám mây tạo điều kiện cho sự cộng tác từ xa liền mạch giữa các đội ngũ."
  },
  students: {
    ipa: "/ˈstjuː.dənts/",
    vi: "học sinh, sinh viên",
    pos: "noun (pl.)",
    cefr: "A1",
    example: "International students enrich campus cultural diversity.",
    exampleVi: "Du học sinh quốc tế làm phong phú thêm sự đa dạng văn hóa học đường."
  },
  sustainable: {
    ipa: "/səˈsteɪ.nə.bəl/",
    vi: "bền vững, thân thiện với môi trường",
    pos: "adjective",
    cefr: "B2",
    example: "Solar panels deliver a viable path to sustainable energy generation.",
    exampleVi: "Tấm pin mặt trời mở ra con đường khả thi hướng đến việc sản xuất năng lượng bền vững."
  },
  energy: {
    ipa: "/ˈen.ə.dʒi/",
    vi: "năng lượng, sức lực",
    pos: "noun",
    cefr: "A2",
    example: "Wind energy produces zero direct greenhouse gas emissions during operation.",
    exampleVi: "Năng lượng gió không phát thải khí nhà kính trực tiếp trong quá trình vận hành."
  },
  sources: {
    ipa: "/ˈsɔː.sɪz/",
    vi: "nguồn, nguồn cung cấp",
    pos: "noun (pl.)",
    cefr: "B1",
    example: "Scientists seek cleaner sources of electricity to replace fossil fuels.",
    exampleVi: "Các nhà khoa học tìm kiếm những nguồn điện sạch hơn để thay thế nhiên liệu hóa thạch."
  },
  mitigate: {
    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
    vi: "giảm nhẹ, xoa dịu, giảm thiểu rủi ro",
    pos: "verb",
    cefr: "C1",
    example: "Reforestation projects help mitigate the harsh consequences of climate change.",
    exampleVi: "Các dự án tái trồng rừng giúp giảm thiểu những hệ lụy khắc nghiệt của biến đổi khí hậu."
  },
  global: {
    ipa: "/ˈɡləʊ.bəl/",
    vi: "toàn cầu, mang tính quốc tế",
    pos: "adjective",
    cefr: "B1",
    example: "Supply chain disruptions pose a serious risk to global commerce.",
    exampleVi: "Sự gián đoạn chuỗi cung ứng tạo ra rủi ro nghiêm trọng đối với thương mại toàn cầu."
  },
  warming: {
    ipa: "/ˈwɔː.mɪŋ/",
    vi: "sự ấm lên, sự nóng lên",
    pos: "noun",
    cefr: "B1",
    example: "Oceanic warming accelerates coral bleaching in tropical barrier reefs.",
    exampleVi: "Sự ấm lên của các đại dương đẩy nhanh hiện tượng tẩy trắng san hô ở các rạn san hô nhiệt đới."
  }
};

// --- DATA: FLASHCARD ---
const flashcards = [
  {
    topic: "IELTS Vocab",
    word: "Ubiquitous",
    ipa: "/juːˈbɪk.wɪ.təs/",
    cefr: "C1",
    pos: "adj",
    def: "Có mặt ở khắp nơi, phổ biến",
    collocation: "ubiquitous presence, ubiquitous technology",
    example: "Smartphones are now ubiquitous across modern society."
  },
  {
    topic: "IELTS Vocab",
    word: "Mitigate",
    ipa: "/ˈmɪt.ɪ.ɡeɪt/",
    cefr: "B2",
    pos: "v",
    def: "Làm giảm bớt, xoa dịu tác động",
    collocation: "mitigate risks, mitigate emissions",
    example: "Strict regulations help mitigate hazardous industrial emissions."
  },
  {
    topic: "THPT",
    word: "Prevalent",
    ipa: "/ˈprev.əl.ənt/",
    cefr: "B2",
    pos: "adj",
    def: "Thịnh hành, lưu hành phổ biến",
    collocation: "prevalent view, highly prevalent",
    example: "Sedentary behavior is prevalent among desk workers."
  },
  {
    topic: "Giao tiếp",
    word: "Spontaneous",
    ipa: "/spɒnˈteɪ.ni.əs/",
    cefr: "B2",
    pos: "adj",
    def: "Tự phát, ngẫu hứng",
    collocation: "spontaneous applause, spontaneous decision",
    example: "We took a spontaneous weekend trip without booking hotels."
  }
];

// --- EXTENSIVE SHADOWING DIALOGUES DATA (ZIM Academy 25 Topics Standard) ---
const shadowingTopicsData = [
  {
    id: "workplace",
    title: "Workplace & Professional Life",
    dialogues: [
      {
        id: "wp-1",
        title: "Project Proposal Review",
        speakerA: "Alex (Manager)",
        speakerB: "Emma (Lead)",
        turns: [
          { speaker: "Alex", text: "Could you walk me through the key highlights of the proposal before the meeting?", ipa: "/kʊd juː wɔːk miː θruː ðə kiː ˈhaɪ.laɪts əv ðə prəˈpəʊ.zəl bɪˈfɔː ðə ˈmiː.tɪŋ/" },
          { speaker: "Emma", text: "Everything looks solid, especially the timeline for project implementation.", ipa: "/ˈev.ri.θɪŋ lʊks ˈsɒl.ɪd, ɪˈspeʃ.əl.i ðə ˈtaɪm.laɪn fɔː ˈprɒdʒ.ekt ˌɪm.plɪ.menˈteɪ.ʃən/" }
        ],
        keyVocab: [
          { word: "walk through", ipa: "/wɔːk θruː/", pos: "phr v", def: "giải thích, hướng dẫn chi tiết từng bước" },
          { word: "highlights", ipa: "/ˈhaɪ.laɪts/", pos: "n", def: "những điểm nổi bật, thông tin chính" },
          { word: "proposal", ipa: "/prəˈpəʊ.zəl/", pos: "n", def: "bản đề xuất kế hoạch, dự án" },
          { word: "solid", ipa: "/ˈsɒl.ɪd/", pos: "adj", def: "chắc chắn, vững vàng, khả thi" },
          { word: "implementation", ipa: "/ˌɪm.plɪ.menˈteɪ.ʃən/", pos: "n", def: "sự triển khai, thi hành thực tế" }
        ],
        keyPatterns: [
          {
            pattern: "Could you walk me through + [Noun]?",
            meaning: "Bạn có thể trình bày/giải thích qua cho tôi về... được không?",
            example: "Could you walk me through the quarterly sales figures?"
          },
          {
            pattern: "Everything looks solid, especially + [Noun / Clause]",
            meaning: "Mọi thứ trông rất ổn/chắc chắn, đặc biệt là...",
            example: "Everything looks solid, especially the proposed budget plan."
          },
          {
            pattern: "Before the meeting, we need to...",
            meaning: "Trước cuộc họp, chúng ta cần phải...",
            example: "Before the meeting, we need to finalize the executive summary."
          }
        ]
      },
      {
        id: "wp-2",
        title: "Emergency Leave Request",
        speakerA: "David",
        speakerB: "Sarah (HR)",
        turns: [
          { speaker: "David", text: "I have a personal family emergency and need to take two days off.", ipa: "/aɪ hæv ə ˈpɜː.sən.əl ˈfæm.əl.i ɪˈmɜː.dʒən.si ænd niːd tuː teɪk tuː deɪz ɒf/" },
          { speaker: "Sarah", text: "Understood. Please submit a quick leave request on the internal portal.", ipa: "/ˌʌn.dəˈstʊd. pliːz səbˈmɪt ə kwɪk liːv rɪˈkwest ɒn ði ɪnˈtɜː.nəl ˈpɔː.təl/" }
        ]
      },
      {
        id: "wp-3",
        title: "Quarterly Budget Report",
        speakerA: "Liam (Finance)",
        speakerB: "Chloe (Director)",
        turns: [
          { speaker: "Liam", text: "Our marketing expenses were under budget by twelve percent this quarter.", ipa: "/ˈaʊə ˈmɑː.kɪ.tɪŋ ɪkˈspen.sɪz wɜːr ˈʌn.dər ˈbʌdʒ.ɪt baɪ twelv pəˈsent ðɪs ˈkwɔː.tər/" },
          { speaker: "Chloe", text: "Excellent outcome. Let's allocate the surplus toward cloud infrastructure upgrades.", ipa: "/ˈek.səl.ənt ˈaʊt.kʌm. lets ˈæl.ə.keɪt ðə ˈsɜː.pləs təˈwɔːdz klaʊd ˈɪn.frəˌstrʌk.tʃər ˈʌp.ɡreɪdz/" }
        ]
      },
      {
        id: "wp-4",
        title: "Candidate Job Interview",
        speakerA: "Mark",
        speakerB: "Elena",
        turns: [
          { speaker: "Mark", text: "What do you consider your greatest professional achievement in recent years?", ipa: "/wɒt duː juː kənˈsɪd.ər jɔː ˈɡreɪ.tɪst prəˈfeʃ.ən.əl əˈtʃiːv.mənt ɪn ˈriː.sənt jɪəz/" },
          { speaker: "Elena", text: "I streamlined the product deployment pipeline, cutting release delays by half.", ipa: "/aɪ ˈstriːm.laɪnd ðə ˈprɒd.ʌkt dɪˈplɔɪ.mənt ˈpaɪp.laɪn, ˈkʌt.ɪŋ rɪˈliːs dɪˈleɪz baɪ hɑːf/" }
        ]
      },
      {
        id: "wp-5",
        title: "Deadline Negotiation",
        speakerA: "Jason",
        speakerB: "Rachel",
        turns: [
          { speaker: "Jason", text: "Can we extend the deadline for the preliminary draft to Friday afternoon?", ipa: "/kæn wiː ɪkˈstend ðə ˈded.laɪn fɔː ðə prɪˈlɪm.ɪ.nər.i drɑːft tuː ˈfraɪ.deɪ ˌɑːf.təˈnuːn/" },
          { speaker: "Rachel", text: "That works, provided we receive the finalized client feedback beforehand.", ipa: "/ðæt wɜːks, prəˈvaɪ.dɪd wiː rɪˈsiːv ðə ˈfaɪ.nəl.aɪzd ˈklaɪ.ənt ˈfiːd.bæk bɪˈfɔː.hænd/" }
        ]
      },
      {
        id: "wp-6",
        title: "1-on-1 Performance Review",
        speakerA: "Daniel",
        speakerB: "Kevin",
        turns: [
          { speaker: "Daniel", text: "You've shown exceptional initiative on the cross-functional data audit.", ipa: "/juːv ʃəʊn ɪkˈsep.ʃən.əl ɪˈnɪʃ.ə.tɪv ɒn ðə krɒs ˈfʌŋk.ʃən.əl ˈdeɪ.tə ˈɔː.dɪt/" },
          { speaker: "Kevin", text: "Thank you. Collaborating directly with the backend team made a huge difference.", ipa: "/θæŋk juː. kəˈlæb.ə.reɪ.tɪŋ dɪˈrekt.li wɪð ðə ˈbæk.end tiːm meɪd ə hjuːdʒ ˈdɪf.ər.əns/" }
        ]
      },
      {
        id: "wp-7",
        title: "Technical Incident Handling",
        speakerA: "Sophie",
        speakerB: "Ben (DevOps)",
        turns: [
          { speaker: "Sophie", text: "Several users report slow latency when accessing our dashboard analytics.", ipa: "/ˈsev.ər.əl ˈjuː.zəz rɪˈpɔːt sləʊ ˈleɪ.tən.si wen əkˈses.ɪŋ ˈaʊə ˈdæʃ.bɔːd ˌæn.əlˈɪt.ɪks/" },
          { speaker: "Ben", text: "We are restarting the caching servers now. Service will stabilize shortly.", ipa: "/wiː ɑːr ˌriːˈstɑː.tɪŋ ðə ˈkæʃ.ɪŋ ˈsɜː.vəz naʊ. ˈsɜː.vɪs wɪl ˈsteɪ.bəl.aɪz ˈʃɔːt.li/" }
        ]
      },
      {
        id: "wp-8",
        title: "Process Improvement Proposal",
        speakerA: "Jessica",
        speakerB: "Tom",
        turns: [
          { speaker: "Jessica", text: "Automating routine ticket triage could save customer support ten hours weekly.", ipa: "/ˈɔː.tə.meɪ.tɪŋ ruːˈtiːn ˈtɪk.ɪt triˈɑːʒ kʊd seɪv ˈkʌs.tə.mər səˈpɔːt ten ˈaʊəz ˈwiːk.li/" },
          { speaker: "Tom", text: "I agree. Prepare a short pilot proposal for tomorrow's standup.", ipa: "/aɪ əˈɡriː. prɪˈpeər ə ʃɔːt ˈpaɪ.lət prəˈpəʊ.zəl fɔː təˈmɒr.əʊz ˈstænd.ʌp/" }
        ]
      },
      {
        id: "wp-9",
        title: "New Team Member Onboarding",
        speakerA: "Amanda",
        speakerB: "Lucas",
        turns: [
          { speaker: "Amanda", text: "Welcome to the research unit! Let me show you around our main workspace.", ipa: "/ˈwel.kəm tuː ðə rɪˈsɜːtʃ ˈjuː.nɪt! let miː ʃəʊ juː əˈraʊnd ˈaʊə meɪn ˈwɜːk.speɪs/" },
          { speaker: "Lucas", text: "I really appreciate it. Everyone has been incredibly welcoming this morning.", ipa: "/aɪ ˈrɪə.li əˈpriː.ʃi.eɪt ɪt. ˈev.ri.wʌn hæz biːn ɪnˈkred.ə.bli ˈwel.kəm.ɪŋ ðɪs ˈmɔː.nɪŋ/" }
        ]
      },
      {
        id: "wp-10",
        title: "Contract Agreement Finalization",
        speakerA: "Victoria",
        speakerB: "Martin",
        turns: [
          { speaker: "Victoria", text: "Both legal teams have signed off on the revised confidentiality clauses.", ipa: "/bəʊθ ˈliː.ɡəl tiːmz hæv saɪnd ɒf ɒn ðə rɪˈvaɪzd ˌkɒn.fɪ.den.ʃiˈæl.ə.ti ˈklɔː.zɪz/" },
          { speaker: "Martin", text: "Great. We can proceed with official signatures via DocuSign today.", ipa: "/ɡreɪt. wiː kæn prəˈsiːd wɪð əˈfɪʃ.əl ˈsɪɡ.nə.tʃəz ˈvaɪə ˈdɒk.juː.saɪn təˈdeɪ/" }
        ]
      }
    ]
  },
  {
    id: "phone",
    title: "Telephone Conversations",
    dialogues: [
      {
        id: "ph-1",
        title: "Answering an Incoming Call",
        speakerA: "Olivia",
        speakerB: "Caller",
        turns: [
          { speaker: "Olivia", text: "Good morning, ABC Company. Olivia speaking, how may I assist you today?", ipa: "/ɡʊd ˈmɔː.nɪŋ, eɪ biː siː ˈkʌm.pə.ni. əˈlɪv.i.ə ˈspiː.kɪŋ, haʊ meɪ aɪ əˈsɪst juː təˈdeɪ/" },
          { speaker: "Caller", text: "Hello, could you connect me with the marketing director, please?", ipa: "/həˈləʊ, kʊd juː kəˈnekt miː wɪð ðə ˈmɑː.kɪ.tɪŋ daɪˈrek.tər, pliːz/" }
        ]
      },
      {
        id: "ph-2",
        title: "Leaving a Phone Message",
        speakerA: "Johnson",
        speakerB: "Sophia",
        turns: [
          { speaker: "Johnson", text: "I'm afraid he is in a conference. Would you like to leave a message?", ipa: "/aɪm əˈfreɪd hiː ɪz ɪn ə ˈkɒn.fər.əns. wʊd juː laɪk tuː liːv ə ˈmes.ɪdʒ/" },
          { speaker: "Sophia", text: "Yes, please tell him Sophia called and ask him to call me back by 4 PM.", ipa: "/jes, pliːz tel hɪm səˈfiː.ə kɔːld ænd ɑːsk hɪm tuː kɔːl miː bæk baɪ fɔː piː em/" }
        ]
      },
      {
        id: "ph-3",
        title: "Rescheduling an Appointment",
        speakerA: "Robert",
        speakerB: "Customer",
        turns: [
          { speaker: "Robert", text: "I'm calling to reschedule our consultation meeting scheduled for tomorrow morning.", ipa: "/aɪm ˈkɔː.lɪŋ tuː ˌriːˈʃedʒ.uːl ˈaʊə ˌkɒn.səlˈteɪ.ʃən ˈmiː.tɪŋ ˈʃedʒ.uːld fɔː təˈmɒr.əʊ ˈmɔː.nɪŋ/" },
          { speaker: "Customer", text: "No problem at all. Would Thursday afternoon at two o'clock suit your schedule?", ipa: "/nəʊ ˈprɒb.ləm æt ɔːl. wʊd ˈθɜːz.deɪ ˌɑːf.təˈnuːn æt tuː əˈklɒk suːt jɔː ˈʃedʒ.uːl/" }
        ]
      },
      {
        id: "ph-4",
        title: "Verifying Shipping Address",
        speakerA: "Brian",
        speakerB: "Ms. Linda",
        turns: [
          { speaker: "Brian", text: "Hello Ms. Linda, I'm calling from customer care to verify your shipping address.", ipa: "/həˈləʊ mɪz ˈlɪn.də, aɪm ˈkɔː.lɪŋ frɒm ˈkʌs.tə.mər keər tuː ˈver.ɪ.faɪ jɔː ˈʃɪp.ɪŋ əˈdres/" },
          { speaker: "Ms. Linda", text: "Yes, apartment 5B, 42 Riverside Boulevard. Everything is completely accurate.", ipa: "/jes, əˈpɑːt.mənt faɪv biː, ˈfɔː.ti tuː ˈrɪv.ə.saɪd ˈbuː.lə.vɑːd. ˈev.ri.θɪŋ ɪz kəmˈpliːt.li ˈæk.jʊ.rət/" }
        ]
      },
      {
        id: "ph-5",
        title: "Transferring to IT Support",
        speakerA: "Operator",
        speakerB: "User",
        turns: [
          { speaker: "Operator", text: "Please hold the line for just a moment while I transfer your call to IT support.", ipa: "/pliːz həʊld ðə laɪn fɔː dʒʌst ə ˈməʊ.mənt waɪl aɪ ˈtræns.fɜː jɔː kɔːl tuː aɪ tiː səˈpɔːt/" },
          { speaker: "User", text: "Thank you. I will stay on the line until they pick up.", ipa: "/θæŋk juː. aɪ wɪl steɪ ɒn ðə laɪn ənˈtɪl ðeɪ pɪk ʌp/" }
        ]
      },
      {
        id: "ph-6",
        title: "Handling Poor Connection",
        speakerA: "Jolie",
        speakerB: "George",
        turns: [
          { speaker: "Jolie", text: "I'm sorry, you're breaking up slightly. Could you please repeat that last point?", ipa: "/aɪm ˈsɒr.i, jɔː ˈbreɪ.kɪŋ ʌp ˈslaɪt.li. kʊd juː pliːz rɪˈpiːt ðæt lɑːst pɔɪnt/" },
          { speaker: "George", text: "Certainly. I was mentioning that the signed contract was dispatched this morning.", ipa: "/ˈsɜː.tən.li. aɪ wɒz ˈmen.ʃən.ɪŋ ðæt ðə saɪnd ˈkɒn.trækt wɒz dɪˈspætʃt ðɪs ˈmɔː.nɪŋ/" }
        ]
      },
      {
        id: "ph-7",
        title: "Inquiring Service Rates",
        speakerA: "Caller",
        speakerB: "Receptionist",
        turns: [
          { speaker: "Caller", text: "Hi, I'm calling to inquire about the corporate membership pricing options.", ipa: "/haɪ, aɪm ˈkɔː.lɪŋ tuː ɪnˈkwaɪər əˈbaʊt ðə ˈkɔː.pər.ət ˈmem.bə.ʃɪp ˈpraɪ.sɪŋ ˈɒp.ʃənz/" },
          { speaker: "Receptionist", text: "I'd be glad to email you our detailed brochure and promotional fee structures.", ipa: "/aɪd biː ɡlæd tuː ˈiː.meɪl juː ˈaʊə ˈdiː.teɪld ˈbrəʊ.ʃər ænd prəˈməʊ.ʃən.əl fiː ˈstrʌk.tʃəz/" }
        ]
      },
      {
        id: "ph-8",
        title: "Billing Fee Dispute",
        speakerA: "Customer",
        speakerB: "Billing Agent",
        turns: [
          { speaker: "Customer", text: "I noticed an unrecognized recurring charge of forty dollars on my latest statement.", ipa: "/aɪ ˈnəʊ.tɪst æn ˌʌnˈrek.əɡ.naɪzd rɪˈkɜː.rɪŋ tʃɑːdʒ əv ˈfɔː.ti ˈdɒl.əz ɒn maɪ ˈleɪ.tɪst ˈsteɪt.mənt/" },
          { speaker: "Billing Agent", text: "Allow me to review your invoice ledger and issue an immediate correction credit.", ipa: "/əˈlaʊ miː tuː rɪˈvjuː jɔːr ˈɪn.vɔɪs ˈledʒ.ər ænd ˈɪʃ.uː æn ɪˈmiː.di.ət kəˈrek.ʃən ˈkred.ɪt/" }
        ]
      },
      {
        id: "ph-9",
        title: "Scheduling Maintenance",
        speakerA: "Resident",
        speakerB: "Service Tech",
        turns: [
          { speaker: "Resident", text: "Can we schedule an HVAC air conditioning inspection before the summer heatwave?", ipa: "/kæn wiː ˈʃedʒ.uːl æn eɪtʃ viː eɪ siː eə kənˈdɪʃ.ən.ɪŋ ɪnˈspek.ʃən bɪˈfɔː ðə ˈsʌm.ə ˈhiːt.weɪv/" },
          { speaker: "Service Tech", text: "Our technicians have an open slot this Friday morning between nine and eleven.", ipa: "/ˈaʊə tekˈnɪʃ.ənz hæv æn ˈəʊ.pən slɒt ðɪs ˈfraɪ.deɪ ˈmɔː.nɪŋ bɪˈtwiːn naɪn ænd ɪˈlev.ən/" }
        ]
      },
      {
        id: "ph-10",
        title: "Professional Call Closing",
        speakerA: "Agent",
        speakerB: "Client",
        turns: [
          { speaker: "Agent", text: "Thank you for reaching out today. Is there anything else I may help you with?", ipa: "/θæŋk juː fɔː ˈriː.tʃɪŋ aʊt təˈdeɪ. ɪz ðeər ˈen.i.θɪŋ els aɪ meɪ help juː wɪð/" },
          { speaker: "Client", text: "No, you've answered all my inquiries thoroughly. Have a great afternoon!", ipa: "/nəʊ, juːv ˈɑːn.səd ɔːl maɪ ɪnˈkwaɪə.riz ˈθʌr.ə.li. hæv ə ɡreɪt ˌɑːf.təˈnuːn/" }
        ]
      }
    ]
  },
  {
    id: "home_routine",
    title: "Daily Life & Routine",
    dialogues: [
      {
        id: "hm-1",
        title: "Morning Routine & Sleep",
        speakerA: "Mitchelle",
        speakerB: "Jean",
        turns: [
          { speaker: "Mitchelle", text: "You look like you stayed up the whole night. What happened?", ipa: "/juː lʊk laɪk juː steɪd ʌp ðə həʊl naɪt. wɒt ˈhæp.ənd/" },
          { speaker: "Jean", text: "I binge-watched a whole season of mystery dramas until dawn.", ipa: "/aɪ bɪndʒ wɒtʃt ə həʊl ˈsiː.zən əv ˈmɪs.tər.i ˈdrɑː.məz ənˈtɪl dɔːn/" }
        ]
      },
      {
        id: "hm-2",
        title: "Nutritious Breakfast Prep",
        speakerA: "Jean",
        speakerB: "Mitchelle",
        turns: [
          { speaker: "Jean", text: "Do you have time for a healthy breakfast before your morning commute?", ipa: "/duː juː hæv taɪm fɔːr ə ˈhel.θi ˈbrek.fəst bɪˈfɔː jɔː ˈmɔː.nɪŋ kəˈmjuːt/" },
          { speaker: "Mitchelle", text: "I usually prepare rolled oats with berries and fresh orange juice.", ipa: "/aɪ ˈjuː.ʒu.ə.li prɪˈpeə rəʊld əʊts wɪð ˈber.iz ænd freʃ ˈɒr.ɪndʒ dʒuːs/" }
        ]
      },
      {
        id: "hm-3",
        title: "Dividing Household Chores",
        speakerA: "Roommate A",
        speakerB: "Roommate B",
        turns: [
          { speaker: "Roommate A", text: "If you vacuum the living room carpets, I'll wash the dinner dishes.", ipa: "/ɪf juː ˈvæk.juːm ðə ˈlɪv.ɪŋ ruːm ˈkɑː.pɪts, aɪl wɒʃ ðə ˈdɪn.ə ˈdɪʃ.ɪz/" },
          { speaker: "Roommate B", text: "Deal! Let's get everything spotless before our weekend guests arrive.", ipa: "/diːl! lets ɡet ˈev.ri.θɪŋ ˈspɒt.ləs bɪˈfɔːr ˈaʊə ˈwiːk.end ɡests əˈraɪv/" }
        ]
      },
      {
        id: "hm-4",
        title: "Insomnia & Bedtime Habits",
        speakerA: "Mitchelle",
        speakerB: "Jean",
        turns: [
          { speaker: "Mitchelle", text: "I've been having trouble sleeping deeply over the past week.", ipa: "/aɪv biːn ˈhæv.ɪŋ ˈtrʌb.əl ˈsliː.pɪŋ ˈdiːp.li ˈəʊ.vər ðə pɑːst wiːk/" },
          { speaker: "Jean", text: "Try drinking warm herbal tea and avoid looking at mobile screens before bed.", ipa: "/traɪ ˈdrɪŋ.kɪŋ wɔːm ˈhɜː.bəl tiː ænd əˈvɔɪd ˈlʊk.ɪŋ æt ˈməʊ.baɪl skriːnz bɪˈfɔː bed/" }
        ]
      },
      {
        id: "hm-5",
        title: "Home Appliance Repairs",
        speakerA: "Tenant",
        speakerB: "Landlord",
        turns: [
          { speaker: "Tenant", text: "The bathroom sink faucet has a steady drip that won't stop.", ipa: "/ðə ˈbɑːθ.ruːm sɪŋk ˈfɔː.sɪt hæz ə ˈsted.i drɪp ðæt wəʊnt stɒp/" },
          { speaker: "Landlord", text: "I will send a licensed plumber over tomorrow morning to replace the washer.", ipa: "/aɪ wɪl send ə ˈlaɪ.sənst ˈplʌm.ər ˈəʊ.və təˈmɒr.əʊ ˈmɔː.nɪŋ tuː rɪˈpleɪs ðə ˈwɒʃ.ər/" }
        ]
      },
      {
        id: "hm-6",
        title: "Weekend Cooking at Home",
        speakerA: "Sarah",
        speakerB: "Tom",
        turns: [
          { speaker: "Sarah", text: "Are you cooking homemade pasta tonight or ordering takeaway food?", ipa: "/ɑː juː ˈkʊk.ɪŋ ˌhəʊmˈmeɪd ˈpæs.tə təˈnaɪt ɔːr ˈɔː.dər.ɪŋ ˈteɪk.ə.weɪ fuːd/" },
          { speaker: "Tom", text: "I bought fresh basil and parmesan to whip up authentic pesto pasta.", ipa: "/aɪ bɔːt freʃ ˈbæz.əl ænd ˌpɑː.mɪˈzæn tuː wɪp ʌp ɔːˈθen.tɪk ˈpes.təʊ ˈpæs.tə/" }
        ]
      },
      {
        id: "hm-7",
        title: "Balcony Gardening Care",
        speakerA: "Neighbor",
        speakerB: "Gardener",
        turns: [
          { speaker: "Neighbor", text: "Your balcony flower garden looks so vibrant! What is your secret?", ipa: "/jɔː ˈbæl.kə.ni ˈflaʊ.ər ˈɡɑː.dən lʊks səʊ ˈvaɪ.brənt! wɒt ɪz jɔː ˈsiː.krət/" },
          { speaker: "Gardener", text: "Regular compost fertilization and adequate morning sunlight make all the difference.", ipa: "/ˈreɡ.jʊ.lər ˈkɒm.pɒst ˌfɜː.tɪ.laɪˈzeɪ.ʃən ænd ˈæd.ə.kwət ˈmɔː.nɪŋ ˈsʌn.laɪt meɪk ɔːl ðə ˈdɪf.ər.əns/" }
        ]
      },
      {
        id: "hm-8",
        title: "Home Fitness Session",
        speakerA: "Brother",
        speakerB: "Sister",
        turns: [
          { speaker: "Brother", text: "Are you joining my twenty-minute bodyweight fitness workout?", ipa: "/ɑː juː ˈdʒɔɪ.nɪŋ maɪ ˈtwen.ti ˈmɪn.ɪt ˈbɒd.i.weɪt ˈfɪt.nəs ˈwɜːk.aʊt/" },
          { speaker: "Sister", text: "Count me in! Doing cardio at home keeps energy levels high all day.", ipa: "/kaʊnt miː ɪn! ˈduː.ɪŋ ˈkɑː.di.əʊ æt həʊm kiːps ˈen.ə.dʒi ˈlev.əlz haɪ ɔːl deɪ/" }
        ]
      },
      {
        id: "hm-9",
        title: "Family Sunday Gathering",
        speakerA: "Mom",
        speakerB: "Dad",
        turns: [
          { speaker: "Mom", text: "Let's invite the grandparents over for Sunday roast dinner this weekend.", ipa: "/lets ɪnˈvaɪt ðə ˈɡrænˌpeə.rənts ˈəʊ.və fɔː ˈsʌn.deɪ rəʊst ˈdɪn.ər ðɪs ˈwiːk.end/" },
          { speaker: "Dad", text: "Wonderful idea. The kids haven't spent quality time with them in weeks.", ipa: "/ˈwʌn.də.fəl aɪˈdɪə. ðə kɪdz hævnt spent ˈkwɒl.ə.ti taɪm wɪð ðem ɪn wiːks/" }
        ]
      },
      {
        id: "hm-10",
        title: "Wardrobe Decluttering",
        speakerA: "Emma",
        speakerB: "Lisa",
        turns: [
          { speaker: "Emma", text: "I'm sorting through outdated clothes to donate to the community charity.", ipa: "/aɪm ˈsɔː.tɪŋ θruː ˌaʊtˈdeɪ.tɪd kləʊðz tuː dəʊˈneɪt tuː ðə kəˈmjuː.nə.ti ˈtʃær.ə.ti/" },
          { speaker: "Lisa", text: "Decluttering your wardrobe gives you so much mental clarity and closet space.", ipa: "/diːˈklʌt.ər.ɪŋ jɔː ˈwɔː.drəʊb ɡɪvz juː səʊ mʌtʃ ˈmen.təl ˈklær.ə.ti ænd ˈklɒz.ɪt speɪs/" }
        ]
      }
    ]
  },
  {
    id: "shopping",
    title: "Shopping & Retail",
    dialogues: [
      {
        id: "sh-1",
        title: "Product Specs & Delivery",
        speakerA: "John (Store)",
        speakerB: "Mitchell",
        turns: [
          { speaker: "John", text: "Hello Mitchell, have you made up your mind about the dishwasher model?", ipa: "/həˈləʊ ˈmɪtʃ.əl, hæv juː meɪd ʌp jɔː maɪnd əˈbaʊt ðə ˈdɪʃˌwɒʃ.ər ˈmɒd.əl/" },
          { speaker: "Mitchell", text: "Yes, does the purchase price include free doorstep delivery and installation?", ipa: "/jes, dʌz ðə ˈpɜː.tʃəs praɪs ɪnˈkluːd friː ˈdɔː.step dɪˈlɪv.ər.i ænd ˌɪn.stəˈleɪ.ʃən/" }
        ]
      },
      {
        id: "sh-2",
        title: "Bargain Hunting & Discounts",
        speakerA: "Ava",
        speakerB: "Elijah",
        turns: [
          { speaker: "Ava", text: "The downtown mall is offering fifty percent discounts on premium footwear.", ipa: "/ðə ˈdaʊn.taʊn mɔːl ɪz ˈɒf.ər.ɪŋ ˈfɪf.ti pəˈsent ˈdɪs.kaʊnts ɒn ˈpriː.mi.əm ˈfʊt.weər/" },
          { speaker: "Elijah", text: "That sounds like an incredible bargain. Let's head over this Saturday morning.", ipa: "/ðæt saʊndz laɪk æn ɪnˈkred.ə.bəl ˈbɑː.ɡɪn. lets hed ˈəʊ.və ðɪs ˈsæt.ə.deɪ ˈmɔː.nɪŋ/" }
        ]
      },
      {
        id: "sh-3",
        title: "Exchanging Clothing Sizes",
        speakerA: "Shopper",
        speakerB: "Clerk",
        turns: [
          { speaker: "Shopper", text: "Excuse me, could I try this wool sweater in a medium size instead?", ipa: "/ɪkˈskjuːz miː, kʊd aɪ traɪ ðɪs wʊl ˈswet.ər ɪn ə ˈmiː.di.əm saɪz ɪnˈsted/" },
          { speaker: "Clerk", text: "Certainly! The fitting rooms are situated right around that corner.", ipa: "/ˈsɜː.tən.li! ðə ˈfɪt.ɪŋ ruːmz ɑː ˈsɪtʃ.u.eɪ.tɪd raɪt əˈraʊnd ðæt ˈkɔː.nər/" }
        ]
      },
      {
        id: "sh-4",
        title: "Flea Market Price Bargaining",
        speakerA: "Customer",
        speakerB: "Vendor",
        turns: [
          { speaker: "Customer", text: "Could you do a better price if I take both of these antique vases?", ipa: "/kʊd juː duː ə ˈbet.ər praɪs ɪf aɪ teɪk bəʊθ əv ðiːz ænˈtiːk ˈvɑː.zɪz/" },
          { speaker: "Vendor", text: "I can offer twenty percent off the bundle. That's my absolute best deal.", ipa: "/aɪ kæn ˈɒf.ər ˈtwen.ti pəˈsent ɒf ðə ˈbʌn.dəl. ðæts maɪ ˈæb.sə.luːt best diːl/" }
        ]
      },
      {
        id: "sh-5",
        title: "Contactless Card Checkout",
        speakerA: "Cashier",
        speakerB: "Customer",
        turns: [
          { speaker: "Cashier", text: "Will you be paying by contactless card, mobile pay, or cash today?", ipa: "/wɪl juː biː ˈpeɪ.ɪŋ baɪ ˈkɒn.tækt.ləs kɑːd, ˈməʊ.baɪl peɪ, ɔː kæʃ təˈdeɪ/" },
          { speaker: "Customer", text: "I'll tap with Apple Pay. Could you also provide a printed tax receipt?", ipa: "/aɪl tæp wɪð ˈæp.əl peɪ. kʊd juː ˈɔːl.səʊ prəˈvaɪd ə ˈprɪn.tɪd tæks rɪˈsiːt/" }
        ]
      },
      {
        id: "sh-6",
        title: "Supermarket Item Locator",
        speakerA: "Shopper",
        speakerB: "Staff",
        turns: [
          { speaker: "Shopper", text: "Which aisle can I find organic extra-virgin olive oil and balsamic vinegar?", ipa: "/wɪtʃ aɪl kæn aɪ faɪnd ɔːˈɡæn.ɪk ˈek.strə ˈvɜː.dʒɪn ˈɒl.ɪv ɔɪl ænd bɔːlˈsæm.ɪk ˈvɪn.ɪ.ɡər/" },
          { speaker: "Staff", text: "Aisle four on the middle shelves, adjacent to the pasta sauces.", ipa: "/aɪl fɔːr ɒn ðə ˈmɪd.əl ʃelvz, əˈdʒeɪ.sənt tuː ðə ˈpæs.tə ˈsɔː.sɪz/" }
        ]
      },
      {
        id: "sh-7",
        title: "Refund & Exchange Terms",
        speakerA: "Customer",
        speakerB: "Supervisor",
        turns: [
          { speaker: "Customer", text: "What is your return policy if the electronic gadget is incompatible with my PC?", ipa: "/wɒt ɪz jɔː rɪˈtɜːn ˈpɒl.ə.si ɪf ði ˌel.ekˈtrɒn.ɪk ˈɡædʒ.ɪt ɪz ˌɪn.kəmˈpæt.ə.bəl wɪð maɪ piː siː/" },
          { speaker: "Supervisor", text: "We accept full refunds within thirty days with intact packaging and receipt.", ipa: "/wiː əkˈsept fʊl ˈriː.fʌndz wɪˈðɪn ˈθɜː.ti deɪz wɪð ɪnˈtækt ˈpæk.ɪ.dʒɪŋ ænd rɪˈsiːt/" }
        ]
      },
      {
        id: "sh-8",
        title: "Selecting Birthday Gifts",
        speakerA: "Client",
        speakerB: "Specialist",
        turns: [
          { speaker: "Client", text: "I'm looking for a sophisticated birthday gift for an avid coffee lover.", ipa: "/aɪm ˈlʊk.ɪŋ fɔːr ə səˈfɪs.tɪ.keɪ.tɪd ˈbɜːθ.deɪ ɡɪft fɔːr æn ˈæv.ɪd ˈkɒf.i ˈlʌv.ər/" },
          { speaker: "Specialist", text: "This precision conical burr grinder ensures barista-grade extraction at home.", ipa: "/ðɪs prɪˈsɪʒ.ən ˈkɒn.ɪ.kəl bɜːr ˈɡraɪn.dər ɪnˈʃɔːz bəˈriː.stə ɡreɪd ɪkˈstræk.ʃən æt həʊm/" }
        ]
      },
      {
        id: "sh-9",
        title: "Online Shipping Delays",
        speakerA: "Buyer",
        speakerB: "Helpdesk",
        turns: [
          { speaker: "Buyer", text: "My express shipping order was expected yesterday but hasn't arrived.", ipa: "/maɪ ɪkˈspres ˈʃɪp.ɪŋ ˈɔː.dər wɒz ɪkˈspek.tɪd ˈjes.tə.deɪ bʌt ˈhæznt əˈraɪvd/" },
          { speaker: "Helpdesk", text: "We apologize for the delay. The courier is expediting delivery before noon today.", ipa: "/wiː əˈpɒl.ə.dʒaɪz fɔː ðə dɪˈleɪ. ðə ˈkʊr.i.ər ɪz ˈek.spə.daɪt.ɪŋ dɪˈlɪv.ər.i bɪˈfɔː nuːn təˈdeɪ/" }
        ]
      },
      {
        id: "sh-10",
        title: "Membership Reward Points",
        speakerA: "Cashier",
        speakerB: "Customer",
        turns: [
          { speaker: "Cashier", text: "Would you like to scan your member card to collect reward points today?", ipa: "/wʊd juː laɪk tuː skæn jɔː ˈmem.bə kɑːd tuː kəˈlekt rɪˈwɔːd pɔɪnts təˈdeɪ/" },
          { speaker: "Customer", text: "Yes, and please redeem five hundred available points towards this bill.", ipa: "/jes, ænd pliːz rɪˈdiːm faɪv ˈhʌn.drəd əˈveɪ.lə.bəl pɔɪnts təˈwɔːdz ðɪs bɪl/" }
        ]
      }
    ]
  },
  {
    id: "health",
    title: "Health & Medical Consultations",
    dialogues: [
      {
        id: "hl-1",
        title: "Seasonal Cold Symptoms",
        speakerA: "Emma",
        speakerB: "Liam",
        turns: [
          { speaker: "Emma", text: "How have you been feeling lately? You sound a bit raspy.", ipa: "/haʊ hæv juː biːn ˈfiː.lɪŋ ˈleɪt.li? juː saʊnd ə bɪt ˈrɑː.spi/" },
          { speaker: "Liam", text: "I've been feeling under the weather. I think I caught a seasonal cold.", ipa: "/aɪv biːn ˈfiː.lɪŋ ˈʌn.də ðə ˈweð.ər. aɪ θɪŋk aɪ kɔːt ə ˈsiː.zən.əl kəʊld/" }
        ]
      },
      {
        id: "hl-2",
        title: "General Practitioner Visit",
        speakerA: "Doctor",
        speakerB: "Patient",
        turns: [
          { speaker: "Doctor", text: "Where does it hurt, and how long have you had this throbbing migraine?", ipa: "/weə dʌz ɪt hɜːt, ænd haʊ lɒŋ hæv juː hæd ðɪs ˈθrɒb.ɪŋ ˈmiː.ɡreɪn/" },
          { speaker: "Patient", text: "It started two days ago behind my eyes and intensifies in bright light.", ipa: "/ɪt ˈstɑː.tɪd tuː deɪz əˈɡəʊ bɪˈhaɪnd maɪ aɪz ænd ɪnˈten.sɪ.faɪz ɪn braɪt laɪt/" }
        ]
      },
      {
        id: "hl-3",
        title: "Filling Antibiotic Prescription",
        speakerA: "Pharmacist",
        speakerB: "Customer",
        turns: [
          { speaker: "Pharmacist", text: "Take one tablet twice daily after meals, and complete the full antibiotic course.", ipa: "/teɪk wʌn ˈtæb.lət twaɪs ˈdeɪ.li ˈɑːf.tə mɪəlz, ænd kəmˈpliːt ðə fʊl ˌæn.ti.baɪˈɒt.ɪk kɔːs/" },
          { speaker: "Customer", text: "Are there any side effects like drowsiness that I should be cautious of?", ipa: "/ɑː ðeər ˈen.i saɪd ɪˈfekts laɪk ˈdraʊ.zi.nəs ðæt aɪ ʃʊd biː ˈkɔː.ʃəs əv/" }
        ]
      },
      {
        id: "hl-4",
        title: "Dental Toothache Appointment",
        speakerA: "Patient",
        speakerB: "Dental Reception",
        turns: [
          { speaker: "Patient", text: "I have sudden sensitivity in my upper molar when drinking chilled water.", ipa: "/aɪ hæv ˈsʌd.ən ˌsen.sɪˈtɪv.ə.ti ɪn maɪ ˈʌp.ər ˈməʊ.lər wen ˈdrɪŋ.kɪŋ tʃɪld ˈwɔː.tər/" },
          { speaker: "Dental Reception", text: "We have an appointment slot tomorrow morning with Dr. Evans for an X-ray examination.", ipa: "/wiː hæv æn əˈpɔɪnt.mənt slɒt təˈmɒr.əʊ ˈmɔː.nɪŋ wɪð ˈdɒk.tər ˈev.ənz fɔːr æn ˈeks.reɪ ɪɡˌzæm.ɪˈneɪ.ʃən/" }
        ]
      },
      {
        id: "hl-5",
        title: "Pollen & Seasonal Allergies",
        speakerA: "Alex",
        speakerB: "Maya",
        turns: [
          { speaker: "Alex", text: "Spring pollen triggers non-stop sneezing and itchy eyes every year.", ipa: "/sprɪŋ ˈpɒl.ən ˈtrɪɡ.əz nɒn stɒp ˈsniː.zɪŋ ænd ˈɪtʃ.i aɪz ˈev.ri jɪər/" },
          { speaker: "Maya", text: "An over-the-counter antihistamine spray might give you prompt allergy relief.", ipa: "/æn ˈəʊ.və ðə ˈkaʊn.tər ˌæn.tiˈhɪs.tə.miːn spreɪ maɪt ɡɪv juː prɒmpt ˈæl.ə.dʒi rɪˈliːf/" }
        ]
      },
      {
        id: "hl-6",
        title: "Nutrition & Diet Consultation",
        speakerA: "Nutritionist",
        speakerB: "Client",
        turns: [
          { speaker: "Nutritionist", text: "Increasing fiber intake while moderating processed sodium improves cardiovascular wellness.", ipa: "/ɪnˈkriː.sɪŋ ˈfaɪ.bər ˈɪn.teɪk waɪl ˈmɒd.ər.eɪ.tɪŋ ˈprəʊ.sest ˈsəʊ.di.əm ɪmˈpruːvz ˌkɑː.di.əʊˈvæs.kjʊ.lər ˈwel.nəs/" },
          { speaker: "Client", text: "I will incorporate more leafy greens, lentils, and flaxseed into my daily diet.", ipa: "/aɪ wɪl ɪnˈkɔː.pər.eɪt mɔː ˈliː.fi ɡriːnz, ˈlen.tɪlz, ænd ˈflæk.siːd ˈɪn.tuː maɪ ˈdeɪ.li ˈdaɪ.ət/" }
        ]
      },
      {
        id: "hl-7",
        title: "Sports Injury Ankle Sprain",
        speakerA: "Trainer",
        speakerB: "Athlete",
        turns: [
          { speaker: "Trainer", text: "Apply an ice compression wrap immediately to alleviate ankle swelling.", ipa: "/əˈplaɪ æn aɪs kəmˈpreʃ.ən ræp ɪˈmiː.di.ət.li tuː əˈliː.vi.eɪt ˈæŋ.kəl ˈswel.ɪŋ/" },
          { speaker: "Athlete", text: "Thanks. I will keep it elevated and rest from running this week.", ipa: "/θæŋks. aɪ wɪl kiːp ɪt ˈel.ɪ.veɪ.tɪd ænd rest frɒm ˈrʌn.ɪŋ ðɪs wiːk/" }
        ]
      },
      {
        id: "hl-8",
        title: "Annual Influenza Vaccination",
        speakerA: "Nurse",
        speakerB: "Patient",
        turns: [
          { speaker: "Nurse", text: "Just a tiny pinch on your left arm for this seasonal influenza booster.", ipa: "/dʒʌst ə ˈtaɪ.ni pɪntʃ ɒn jɔː left ɑːm fɔː ðɪs ˈsiː.zən.əl ˌɪn.fluˈen.zə ˈbuː.stər/" },
          { speaker: "Patient", text: "Barely felt a thing! How long should I wait in the observation room?", ipa: "/ˈbeə.li felt ə θɪŋ! haʊ lɒŋ ʃʊd aɪ weɪt ɪn ði ˌɒb.zəˈveɪ.ʃən ruːm/" }
        ]
      },
      {
        id: "hl-9",
        title: "Blood Pressure Monitoring",
        speakerA: "Physician",
        speakerB: "Patient",
        turns: [
          { speaker: "Physician", text: "Your resting blood pressure is one hundred twenty over eighty, perfectly optimal.", ipa: "/jɔː ˈrest.ɪŋ blʌd ˈpreʃ.ər ɪz wʌn ˈhʌn.drəd ˈtwen.ti ˈəʊ.vər ˈeɪ.ti, ˈpɜː.fɪkt.li ˈɒp.tɪ.məl/" },
          { speaker: "Patient", text: "That is reassuring news. Daily brisk walking has paid off.", ipa: "/ðæt ɪz ˌriː.əˈʃɔː.rɪŋ njuːz. ˈdeɪ.li brɪsk ˈwɔː.kɪŋ hæz peɪd ɒf/" }
        ]
      },
      {
        id: "hl-10",
        title: "Burnout & Stress Management",
        speakerA: "Counselor",
        speakerB: "Client",
        turns: [
          { speaker: "Counselor", text: "Burnout occurs when work demands exceed emotional recharge boundaries.", ipa: "/ˈbɜːn.aʊt əˈkɜːz wen wɜːk dɪˈmɑːndz ɪkˈsiːd ɪˈməʊ.ʃən.əl ˌriːˈtʃɑːdʒ ˈbaʊn.dər.iz/" },
          { speaker: "Client", text: "I'm learning to set realistic boundaries and practice mindfulness meditation.", ipa: "/aɪm ˈlɜː.nɪŋ tuː set ˌrɪəˈlɪs.tɪk ˈbaʊn.dər.iz ænd ˈpræk.tɪs ˈmaɪnd.fəl.nəs ˌmed.ɪˈteɪ.ʃən/" }
        ]
      }
    ]
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    dialogues: [
      {
        id: "tr-1",
        title: "Hotel Check-in & Keycard",
        speakerA: "Receptionist",
        speakerB: "Guest",
        turns: [
          { speaker: "Receptionist", text: "Welcome to the Grand Horizon. May I have your reservation passport, please?", ipa: "/ˈwel.kəm tuː ðə ɡrænd həˈraɪ.zən. meɪ aɪ hæv jɔː ˌrez.əˈveɪ.ʃən ˈpɑːs.pɔːt, pliːz/" },
          { speaker: "Guest", text: "Certainly. I booked a deluxe room with an ocean view for four nights.", ipa: "/ˈsɜː.tən.li. aɪ bʊkt ə dɪˈlʌks ruːm wɪð æn ˈəʊ.ʃən vjuː fɔː fɔː naɪts/" }
        ]
      },
      {
        id: "tr-2",
        title: "Airport Transit Directions",
        speakerA: "Traveler",
        speakerB: "Airport Staff",
        turns: [
          { speaker: "Traveler", text: "Excuse me, which transit terminal departs for international connection flights?", ipa: "/ɪkˈskjuːz miː, wɪtʃ ˈtræn.zɪt ˈtɜː.mɪ.nəl dɪˈpɑːts fɔːr ˌɪn.təˈnæʃ.ən.əl kəˈnek.ʃən flaɪts/" },
          { speaker: "Airport Staff", text: "Take the automated express shuttle on level two straight to Terminal B.", ipa: "/teɪk ði ˈɔː.tə.meɪ.tɪd ɪkˈspres ˈʃʌt.əl ɒn ˈlev.əl tuː streɪt tuː ˈtɜː.mɪ.nəl biː/" }
        ]
      },
      {
        id: "tr-3",
        title: "Terrace Dinner Reservation",
        speakerA: "Host",
        speakerB: "Customer",
        turns: [
          { speaker: "Host", text: "Good evening. Do you hold a reservation with us tonight?", ipa: "/ɡʊd ˈiːv.nɪŋ. duː juː həʊld ə ˌrez.əˈveɪ.ʃən wɪð ʌs təˈnaɪt/" },
          { speaker: "Customer", text: "Yes, under the name Miller. We requested a quiet corner terrace table.", ipa: "/jes, ˈʌn.dər ðə neɪm ˈmɪl.ər. wiː rɪˈkwest.ɪd ə ˈkwaɪ.ət ˈkɔː.nər ˈter.əs ˈteɪ.bəl/" }
        ]
      },
      {
        id: "tr-4",
        title: "Rental Car Coverage & Terms",
        speakerA: "Agent",
        speakerB: "Driver",
        turns: [
          { speaker: "Agent", text: "Would you like comprehensive collision damage insurance included with the vehicle?", ipa: "/wʊd juː laɪk ˌkɒm.prɪˈhen.sɪv kəˈlɪʒ.ən ˈdæm.ɪdʒ ɪnˈʃɔː.rəns ɪnˈkluː.dɪd wɪð ðə ˈviː.ə.kəl/" },
          { speaker: "Driver", text: "Yes please, and also add an additional driver permit to the contract.", ipa: "/jes pliːz, ænd ˈɔːl.səʊ æd æn əˈdɪʃ.ən.əl ˈdraɪ.vər ˈpɜː.mɪt tuː ðə ˈkɒn.trækt/" }
        ]
      },
      {
        id: "tr-5",
        title: "Artisan Souvenir Shopping",
        speakerA: "Shopkeeper",
        speakerB: "Tourist",
        turns: [
          { speaker: "Shopkeeper", text: "These silk scarfs are handwoven by local artisans using traditional natural dyes.", ipa: "/ðiːz sɪlk skɑːfs ɑːr ˈhændˌwəʊ.vən baɪ ˈləʊ.kəl ˌɑː.tɪˈzænz ˈjuː.zɪŋ trəˈdɪʃ.ən.əl ˈnætʃ.ər.əl daɪz/" },
          { speaker: "Tourist", text: "They look gorgeous. Could you gift-wrap two of the indigo ones for me?", ipa: "/ðeɪ lʊk ˈɡɔː.dʒəs. kʊd juː ɡɪft ræp tuː əv ði ˈɪn.dɪ.ɡəʊ wʌnz fɔː miː/" }
        ]
      },
      {
        id: "tr-6",
        title: "Canyon Hiking Expedition",
        speakerA: "Tourist",
        speakerB: "Guide",
        turns: [
          { speaker: "Tourist", text: "Does tomorrow morning's canyon hike require specialized mountaineering gear?", ipa: "/dʌz təˈmɒr.əʊ ˈmɔː.nɪŋz ˈkæn.jən haɪk rɪˈkwaɪər ˈspeʃ.əl.aɪzd ˌmaʊn.tɪˈnɪə.rɪŋ ɡɪər/" },
          { speaker: "Guide", text: "Sturdy hiking boots and plenty of bottled water are all you need.", ipa: "/ˈstɜː.di ˈhaɪ.kɪŋ buːts ænd ˈplen.ti əv ˈbɒt.əld ˈwɔː.tər ɑːr ɔːl juː niːd/" }
        ]
      },
      {
        id: "tr-7",
        title: "Housekeeping Extra Pillows",
        speakerA: "Guest",
        speakerB: "Operator",
        turns: [
          { speaker: "Guest", text: "Could I have two extra feather pillows and an iron brought to room 405?", ipa: "/kʊd aɪ hæv tuː ˈek.strə ˈfeð.ər ˈpɪl.əʊz ænd æn ˈaɪən brɔːt tuː ruːm fɔːr əʊ faɪv/" },
          { speaker: "Operator", text: "Right away, sir. Our housekeeping staff will deliver them in ten minutes.", ipa: "/raɪt əˈweɪ, sɜː. ˈaʊə ˈhaʊsˌkiː.pɪŋ stɑːf wɪl dɪˈlɪv.ər ðem ɪn ten ˈmɪn.ɪts/" }
        ]
      },
      {
        id: "tr-8",
        title: "Foreign Currency Exchange",
        speakerA: "Customer",
        speakerB: "Teller",
        turns: [
          { speaker: "Customer", text: "What is your present exchange rate from US dollars to British pounds?", ipa: "/wɒt ɪz jɔː ˈprez.ənt ɪksˈtʃeɪndʒ reɪt frɒm juː es ˈdɒl.əz tuː ˈbrɪt.ɪʃ paʊndz/" },
          { speaker: "Teller", text: "It's zero point seventy-eight pounds per dollar, with zero commission charges today.", ipa: "/ɪts ˈzɪə.rəʊ pɔɪnt ˈsev.ən.ti eɪt paʊndz pɜː ˈdɒl.ər, wɪð ˈzɪə.rəʊ kəˈmɪʃ.ən ˈtʃɑː.dʒɪz təˈdeɪ/" }
        ]
      },
      {
        id: "tr-9",
        title: "Delayed Flight Connection",
        speakerA: "Passenger",
        speakerB: "Airline Agent",
        turns: [
          { speaker: "Passenger", text: "Our inbound flight was delayed. Will we make our scheduled transfer in Paris?", ipa: "/ˈaʊər ˈɪn.baʊnd flaɪt wɒz dɪˈleɪd. wɪl wiː meɪk ˈaʊə ˈʃedʒ.uːld ˈtræns.fɜːr ɪn ˈpær.ɪs/" },
          { speaker: "Airline Agent", text: "We have rebooked you automatically on the next direct departure without fee.", ipa: "/wiː hæv ˌriːˈbʊkt juː ˌɔː.təˈmæt.ɪ.kli ɒn ðə nekst daɪˈrekt dɪˈpɑː.tʃər wɪˈðaʊt fiː/" }
        ]
      },
      {
        id: "tr-10",
        title: "Checkout & Luggage Storage",
        speakerA: "Guest",
        speakerB: "Concierge",
        turns: [
          { speaker: "Guest", text: "We're checking out now. May we store our luggage until our evening flight?", ipa: "/wɪər ˈtʃek.ɪŋ aʊt naʊ. meɪ wiː stɔːr ˈaʊə ˈlʌɡ.ɪdʒ ənˈtɪl ˈaʊər ˈiːv.nɪŋ flaɪt/" },
          { speaker: "Concierge", text: "Of course. Here are your claim tags; collect them whenever you are ready.", ipa: "/əv kɔːs. hɪər ɑː jɔː kleɪm tæɡz; kəˈlekt ðem wenˈev.ər juː ɑː ˈred.i/" }
        ]
      }
    ]
  },
  {
    id: "hobbies",
    title: "Leisure & Hobbies",
    dialogues: [
      {
        id: "hb-1",
        title: "Outdoor Watercolor Painting",
        speakerA: "Isabella",
        speakerB: "James",
        turns: [
          { speaker: "Isabella", text: "What hobbies do you pursue to unwind on weekend afternoons?", ipa: "/wɒt ˈhɒb.iz duː juː pəˈsjuː tuː ʌnˈwaɪnd ɒn ˈwiːk.end ˌɑːf.təˈnuːnz/" },
          { speaker: "James", text: "I love watercolor painting outdoors. It's wonderfully calming and meditative.", ipa: "/aɪ lʌv ˈwɔː.təˌkʌl.ər ˈpeɪn.tɪŋ ˌaʊtˈdɔːz. ɪts ˈwʌn.də.fəl.i ˈkɑː.mɪŋ ænd ˈmed.ɪ.tə.tɪv/" }
        ]
      },
      {
        id: "hb-2",
        title: "Favorite Music & Indie Bands",
        speakerA: "Sarah",
        speakerB: "Tom",
        turns: [
          { speaker: "Sarah", text: "Do you have any favorite indie rock bands or acoustic artists?", ipa: "/duː juː hæv ˈen.i ˈfeɪ.vər.ɪt ˈɪn.di rɒk bændz ɔːr əˈkuː.stɪk ˈɑː.tɪsts/" },
          { speaker: "Tom", text: "I really enjoy Coldplay and The Beatles for their poetic songwriting.", ipa: "/aɪ ˈrɪə.li ɪnˈdʒɔɪ ˈkəʊld.pleɪ ænd ðə ˈbiː.təlz fɔː ðeə pəʊˈet.ɪk ˈsɒŋˌraɪ.tɪŋ/" }
        ]
      },
      {
        id: "hb-3",
        title: "Ashtanga Yoga & Mindfulness",
        speakerA: "Anna",
        speakerB: "David",
        turns: [
          { speaker: "Anna", text: "Have you tried anything new lately to revitalize your focus?", ipa: "/hæv juː traɪd ˈen.i.θɪŋ njuː ˈleɪt.li tuː ˌriːˈvaɪ.təl.aɪz jɔː ˈfəʊ.kəs/" },
          { speaker: "David", text: "I recently started Ashtanga yoga. It has worked wonders for my posture.", ipa: "/aɪ ˈriː.sənt.li ˈstɑː.tɪd æʃˈtæŋ.ɡə ˈjəʊ.ɡə. ɪt hæz wɜːkt ˈwʌn.dəz fɔː maɪ ˈpɒs.tʃər/" }
        ]
      },
      {
        id: "hb-4",
        title: "Vintage Street Photography",
        speakerA: "Mike",
        speakerB: "Chloe",
        turns: [
          { speaker: "Mike", text: "I've noticed you carrying a vintage thirty-five millimeter film camera.", ipa: "/aɪv ˈnəʊ.tɪst juː ˈkær.i.ɪŋ ə ˈvɪn.tɪdʒ ˈθɜː.ti faɪv ˈmɪl.ɪˌmiː.tər fɪlm ˈkæm.rə/" },
          { speaker: "Chloe", text: "Street photography teaches you to appreciate unexpected everyday moments and shadows.", ipa: "/striːt fəˈtɒɡ.rə.fi ˈtiː.tʃɪz juː tuː əˈpriː.ʃi.eɪt ˌʌn.ɪkˈspek.tɪd ˈev.ri.deɪ ˈməʊ.mənts ænd ˈʃæd.əʊz/" }
        ]
      },
      {
        id: "hb-5",
        title: "Culinary Recipes & Spices",
        speakerA: "Elena",
        speakerB: "Chef Paul",
        turns: [
          { speaker: "Elena", text: "Cooking allows me to experiment with exotic spices and textures.", ipa: "/ˈkʊk.ɪŋ əˈlaʊz miː tuː ɪkˈsper.ɪ.mənt wɪð ɪɡˈzɒt.ɪk ˈspaɪ.sɪz ænd ˈteks.tʃəz/" },
          { speaker: "Chef Paul", text: "Mastering balance between acidity, sweetness, and heat makes dishes unforgettable.", ipa: "/ˈmɑː.stər.ɪŋ ˈbæl.əns bɪˈtwiːn əˈsɪd.ə.ti, ˈswiːt.nəs, ænd hiːt meɪks ˈdɪʃ.ɪz ˌʌn.fəˈɡet.ə.bəl/" }
        ]
      },
      {
        id: "hb-6",
        title: "Historical Fiction & Novels",
        speakerA: "Reader A",
        speakerB: "Reader B",
        turns: [
          { speaker: "Reader A", text: "Do you prefer gripping psychological thrillers or historical fiction?", ipa: "/duː juː prɪˈfɜː ˈɡrɪp.ɪŋ ˌsaɪ.kəˈlɒdʒ.ɪ.kəl ˈθrɪl.əz ɔː hɪˈstɒr.ɪ.kəl ˈfɪk.ʃən/" },
          { speaker: "Reader B", text: "Historical fiction captivates me because it breathes life into ancient eras.", ipa: "/hɪˈstɒr.ɪ.kəl ˈfɪk.ʃən ˈkæp.tɪ.veɪts miː bɪˈkɒz ɪt briːðz laɪf ˈɪn.tuː ˈeɪn.ʃənt ˈɪə.rəz/" }
        ]
      },
      {
        id: "hb-7",
        title: "Chess Openings & Strategy",
        speakerA: "Grandmaster",
        speakerB: "Challenger",
        turns: [
          { speaker: "Grandmaster", text: "Chess sharpens foresight, spatial evaluation, and patience under pressure.", ipa: "/tʃes ˈʃɑː.pənz ˈfɔː.saɪt, ˈspeɪ.ʃəl ɪˌvæl.juˈeɪ.ʃən, ænd ˈpeɪ.ʃəns ˈʌn.dər ˈpreʃ.ər/" },
          { speaker: "Challenger", text: "I'm practicing defensive Sicilian openings against aggressive players.", ipa: "/aɪm ˈpræk.tɪs.ɪŋ dɪˈfen.sɪv sɪˈsɪl.i.ən ˈəʊ.pən.ɪŋz əˈɡenst əˈɡres.ɪv ˈpleɪ.əz/" }
        ]
      },
      {
        id: "hb-8",
        title: "Mountain Ridge Trail Hiking",
        speakerA: "Hiker A",
        speakerB: "Hiker B",
        turns: [
          { speaker: "Hiker A", text: "Hiking deep in forested pine trails completely clears my head.", ipa: "/ˈhaɪ.kɪŋ diːp ɪn ˈfɒr.ɪ.stɪd paɪn treɪlz kəmˈpliːt.li klɪəz maɪ hed/" },
          { speaker: "Hiker B", text: "The rewarding panoramic viewpoint from the mountain ridge is truly breathtaking.", ipa: "/ðə rɪˈwɔː.dɪŋ ˌpæn.ərˈæm.ɪk ˈvjuː.pɔɪnt frɒm ðə ˈmaʊn.tɪn rɪdʒ ɪz ˈtruː.li ˈbreθˌteɪ.kɪŋ/" }
        ]
      },
      {
        id: "hb-9",
        title: "Botanical Orchid Care",
        speakerA: "Florist",
        speakerB: "Collector",
        turns: [
          { speaker: "Florist", text: "Orchids thrive when provided filtered humidity and good root ventilation.", ipa: "/ˈɔː.kɪdz θraɪv wen prəˈvaɪ.dɪd ˈfɪl.təd hjuːˈmɪd.ə.ti ænd ɡʊd ruːt ˌven.tɪˈleɪ.ʃən/" },
          { speaker: "Collector", text: "Watching their delicate buds bloom after months of care is so satisfying.", ipa: "/ˈwɒtʃ.ɪŋ ðeə ˈdel.ɪ.kət bʌdz bluːm ˈɑːf.tə mʌnθs əv keər ɪz səʊ ˈsæt.ɪs.faɪ.ɪŋ/" }
        ]
      },
      {
        id: "hb-10",
        title: "Open-World Gaming Adventures",
        speakerA: "Gamer A",
        speakerB: "Gamer B",
        turns: [
          { speaker: "Gamer A", text: "Do you enjoy competitive esports or immersive open-world exploration adventures?", ipa: "/duː juː ɪnˈdʒɔɪ kəmˈpet.ə.tɪv ˈiː.spɔːts ɔːr ɪˈmɜː.sɪv ˈəʊ.pən wɜːld ˌek.spləˈreɪ.ʃən ədˈven.tʃəz/" },
          { speaker: "Gamer B", text: "Open-world titles with deep lore and orchestral soundtracks are my absolute favorite.", ipa: "/ˈəʊ.pən wɜːld ˈtaɪ.təlz wɪð diːp lɔːr ænd ɔːˈkes.trəl ˈsaʊnd.træks ɑː maɪ ˈæb.sə.luːt ˈfeɪ.vər.ɪt/" }
        ]
      }
    ]
  },
  {
    id: "weather",
    title: "Weather & Environment",
    dialogues: [
      {
        id: "we-1",
        title: "Weekend Picnic Forecast",
        speakerA: "Olivia",
        speakerB: "Noah",
        turns: [
          { speaker: "Olivia", text: "Did you hear the forecast for tomorrow afternoon?", ipa: "/dɪd juː hɪə ðə ˈfɔː.kɑːst fɔː təˈmɒr.əʊ ˌɑːf.təˈnuːn/" },
          { speaker: "Noah", text: "Yes, warm and sunny! Perfect for a picnic near the lakeside.", ipa: "/jes, wɔːm ænd ˈsʌn.i! ˈpɜː.fɪkt fɔːr ə ˈpɪk.nɪk nɪər ðə ˈleɪk.saɪd/" }
        ]
      },
      {
        id: "we-2",
        title: "Sudden Torrential Rainstorm",
        speakerA: "Tom",
        speakerB: "Alice",
        turns: [
          { speaker: "Tom", text: "Look at those dark storm clouds gathering rapidly on the horizon.", ipa: "/lʊk æt ðəʊz dɑːk stɔːm klaʊdz ˈɡæð.ər.ɪŋ ˈræp.ɪd.li ɒn ðə həˈraɪ.zən/" },
          { speaker: "Alice", text: "We'd better seek shelter inside before the torrential downpour begins.", ipa: "/wiːd ˈbet.ər siːk ˈʃel.tər ɪnˈsaɪd bɪˈfɔː ðə təˈren.ʃəl ˈdaʊn.pɔː bɪˈɡɪnz/" }
        ]
      },
      {
        id: "we-3",
        title: "Scorching Summer Heatwave",
        speakerA: "Neighbor A",
        speakerB: "Neighbor B",
        turns: [
          { speaker: "Neighbor A", text: "The temperature soared past thirty-eight degrees Celsius today.", ipa: "/ðə ˈtem.prə.tʃə sɔːd pɑːst ˈθɜː.ti eɪt dɪˈɡriːz ˈsel.si.əs təˈdeɪ/" },
          { speaker: "Neighbor B", text: "It's scorching outside. Remember to stay hydrated and avoid direct sun.", ipa: "/ɪts ˈskɔː.tʃɪŋ ˌaʊtˈsaɪd. rɪˈmem.bər tuː steɪ haɪˈdreɪ.tɪd ænd əˈvɔɪd daɪˈrekt sʌn/" }
        ]
      },
      {
        id: "we-4",
        title: "Freezing Northern Winter Wind",
        speakerA: "Lucas",
        speakerB: "Mia",
        turns: [
          { speaker: "Lucas", text: "There is a freezing chill in the northern wind this evening.", ipa: "/ðeər ɪz ə ˈfriː.zɪŋ tʃɪl ɪn ðə ˈnɔː.ðən wɪnd ðɪs ˈiːv.nɪŋ/" },
          { speaker: "Mia", text: "Bundle up with your thick overcoat and cashmere woolen scarf.", ipa: "/ˈbʌn.dəl ʌp wɪð jɔː θɪk ˈəʊ.və.kəʊt ænd ˈkæʃ.mɪər ˈwʊl.ən skɑːf/" }
        ]
      },
      {
        id: "we-5",
        title: "Dense Morning Highway Fog",
        speakerA: "Driver",
        speakerB: "Passenger",
        turns: [
          { speaker: "Driver", text: "Dense morning fog has reduced visibility on the mountain expressway.", ipa: "/dens ˈmɔː.nɪŋ fɒɡ hæz rɪˈdʒuːst ˌvɪz.əˈbɪl.ə.ti ɒn ðə ˈmaʊn.tɪn ɪkˈspres.weɪ/" },
          { speaker: "Passenger", text: "Turn on your yellow fog hazard lights and maintain a safe following distance.", ipa: "/teɪk ɒn jɔː ˈjel.əʊ fɒɡ ˈhæz.əd laɪts ænd meɪnˈteɪn ə seɪf ˈfɒl.əʊ.ɪŋ ˈdɪs.təns/" }
        ]
      },
      {
        id: "we-6",
        title: "Golden Autumn Foliage Walk",
        speakerA: "Friend A",
        speakerB: "Friend B",
        turns: [
          { speaker: "Friend A", text: "Autumn is truly the most idyllic season with crisp breezes and golden foliage.", ipa: "/ˈɔː.təm ɪz ˈtruː.li ðə məʊst ɪˈdɪl.ɪk ˈsiː.zən wɪð krɪsp ˈbriː.zɪz ænd ˈɡəʊl.dən ˈfəʊ.li.ɪdʒ/" },
          { speaker: "Friend B", text: "I couldn't agree more. Walking in the botanical park feels rejuvenating.", ipa: "/aɪ ˈkʊdnt əˈɡriː mɔː. ˈwɔː.kɪŋ ɪn ðə bəˈtæn.ɪ.kəl pɑːk fiːlz rɪˈdʒuː.vən.eɪ.tɪŋ/" }
        ]
      },
      {
        id: "we-7",
        title: "Humid Thunderstorm Warning",
        speakerA: "Resident",
        speakerB: "Local",
        turns: [
          { speaker: "Resident", text: "The muggy humidity makes the air feel heavy and suffocating.", ipa: "/ðə ˈmʌɡ.i hjuːˈmɪd.ə.ti meɪks ði eə fiːl ˈhev.i ænd ˈsʌf.ə.keɪ.tɪŋ/" },
          { speaker: "Local", text: "High atmospheric pressure usually precedes a massive thunderstorm.", ipa: "/haɪ ˌæt.məsˈfer.ɪk ˈpreʃ.ər ˈjuː.ʒu.ə.li prɪˈsiːdz ə ˈmæs.ɪv ˈθʌn.də.stɔːm/" }
        ]
      },
      {
        id: "we-8",
        title: "Powdery Winter Snowfall",
        speakerA: "Kid",
        speakerB: "Parent",
        turns: [
          { speaker: "Kid", text: "Look outside! Fresh powdery snow is blanketing all the rooftops!", ipa: "/lʊk ˌaʊtˈsaɪd! freʃ ˈpaʊ.dər.i snəʊ ɪz ˈblæŋ.kɪ.tɪŋ ɔːl ðə ˈruːf.tɒps/" },
          { speaker: "Parent", text: "Grab your thermal gloves and boots; we can build a snowman.", ipa: "/ɡræb jɔː ˈθɜː.məl ɡlʌvz ænd buːts; wiː kæn bɪld ə ˈsnəʊ.mæn/" }
        ]
      },
      {
        id: "we-9",
        title: "Post-Rain Double Rainbow",
        speakerA: "Maya",
        speakerB: "Leo",
        turns: [
          { speaker: "Maya", text: "The clouds parted and a magnificent double rainbow arched across the sky.", ipa: "/ðə klaʊdz ˈpɑː.tɪd ænd ə mæɡˈnɪf.ɪ.sənt ˈdʌb.əl ˈreɪn.bəʊ ɑːtʃt əˈkrɒs ðə skaɪ/" },
          { speaker: "Leo", text: "What a stunning optical marvel after such an intense shower.", ipa: "/wɒt ə ˈstʌn.ɪŋ ˈɒp.tɪ.kəl ˈmɑː.vəl ˈɑːf.tər sʌtʃ æn ɪnˈtens ˈʃaʊ.ər/" }
        ]
      },
      {
        id: "we-10",
        title: "Tropical Storm Preparedness",
        speakerA: "Official",
        speakerB: "Citizen",
        turns: [
          { speaker: "Official", text: "A tropical depression will make landfall by midnight. Secure all outdoor furniture.", ipa: "/ə ˈtrɒp.ɪ.kəl dɪˈpreʃ.ən wɪl meɪk ˈlænd.fɔːl baɪ ˈmɪd.naɪt. sɪˈkjʊər ɔːl ˈaʊtˌdɔː ˈfɜː.nɪ.tʃər/" },
          { speaker: "Citizen", text: "We have stocked non-perishable canned food and portable battery flashlights.", ipa: "/wiː hæv stɒkt nɒn ˈper.ɪ.ʃə.bəl kænd fuːd ænd ˈpɔː.tə.bəl ˈbæt.ər.i ˈflæʃ.laɪts/" }
        ]
      }
    ]
  },
  {
    id: "restaurant",
    title: "Dining & Restaurants",
    dialogues: [
      {
        id: "res-1",
        title: "Menu Recommendations",
        speakerA: "Waiter",
        speakerB: "Guest",
        turns: [
          { speaker: "Waiter", text: "Are you ready to order, or would you care for a few more minutes with the menu?", ipa: "/ɑː juː ˈred.i tuː ˈɔː.dər, ɔː wʊd juː keər fɔːr ə fjuː mɔː ˈmɪn.ɪts wɪð ðə ˈmen.juː/" },
          { speaker: "Guest", text: "We'd like the pan-seared sea bass with roasted vegetables, please.", ipa: "/wiːd laɪk ðə pæn sɪəd siː bæs wɪð ˈrəʊ.stɪd ˈvedʒ.tə.bəlz, pliːz/" }
        ]
      },
      {
        id: "res-2",
        title: "Severe Food Allergy Request",
        speakerA: "Customer",
        speakerB: "Server",
        turns: [
          { speaker: "Customer", text: "I have a severe peanut allergy. Can this sauce be prepared without nuts?", ipa: "/aɪ hæv ə sɪˈvɪər ˈpiː.nʌt ˈæl.ə.dʒi. kæn ðɪs sɔːs biː prɪˈpeəd wɪˈðaʊt nʌts/" },
          { speaker: "Server", text: "I will notify the head chef immediately to ensure zero cross-contamination.", ipa: "/aɪ wɪl ˈnəʊ.tɪ.faɪ ðə hed ʃef ɪˈmiː.di.ət.li tuː ɪnˈʃɔː ˈzɪə.rəʊ krɒs kənˌtæm.ɪˈneɪ.ʃən/" }
        ]
      },
      {
        id: "res-3",
        title: "Steak Doneness Specification",
        speakerA: "Waiter",
        speakerB: "Patron",
        turns: [
          { speaker: "Waiter", text: "How would you like your prime ribeye steak cooked this evening?", ipa: "/haʊ wʊd juː laɪk jɔː praɪm ˈrɪb.aɪ steɪk kʊkt ðɪs ˈiːv.nɪŋ/" },
          { speaker: "Patron", text: "Medium-rare please, accompanied by red wine reduction sauce.", ipa: "/ˈmiː.di.əm reər pliːz, əˈkʌm.pə.nid baɪ red waɪn rɪˈdʌk.ʃən sɔːs/" }
        ]
      },
      {
        id: "res-4",
        title: "Wine Pairing Suggestion",
        speakerA: "Sommelier",
        speakerB: "Diner",
        turns: [
          { speaker: "Sommelier", text: "This crisp dry Sauvignon Blanc pairs impeccably with grilled shellfish.", ipa: "/ðɪs krɪsp draɪ ˈsəʊ.vɪn.jɒŋ blɒ̃ peəz ɪmˈpek.ə.bli wɪð ɡrɪld ˈʃel.fɪʃ/" },
          { speaker: "Diner", text: "Excellent recommendation. We will order a full bottle for the table.", ipa: "/ˈek.səl.ənt ˌrek.ə.menˈdeɪ.ʃən. wiː wɪl ˈɔː.dər ə fʊl ˈbɒt.əl fɔː ðə ˈteɪ.bəl/" }
        ]
      },
      {
        id: "res-5",
        title: "Complimenting Chef's Risotto",
        speakerA: "Server",
        speakerB: "Customer",
        turns: [
          { speaker: "Server", text: "How are you enjoying the handmade truffle mushroom risotto?", ipa: "/haʊ ɑː juː ɪnˈdʒɔɪ.ɪŋ ðə ˌhændˈmeɪd ˈtrʌf.əl ˈmʌʃ.ruːm rɪˈzɒt.əʊ/" },
          { speaker: "Customer", text: "It's heavenly! The creamy texture and aroma exceed our expectations.", ipa: "/ɪts ˈhev.ən.li! ðə ˈkriː.mi ˈteks.tʃər ænd əˈrəʊ.mə ɪkˈsiːd ˈaʊər ˌek.spekˈteɪ.ʃənz/" }
        ]
      },
      {
        id: "res-6",
        title: "Salad Dressing Correction",
        speakerA: "Diner",
        speakerB: "Manager",
        turns: [
          { speaker: "Diner", text: "Excuse me, I requested dressing on the side, but the salad is pre-mixed.", ipa: "/ɪkˈskjuːz miː, aɪ rɪˈkwest.ɪd ˈdres.ɪŋ ɒn ðə saɪd, bʌt ðə ˈsæl.əd ɪz priː mɪkst/" },
          { speaker: "Manager", text: "Our sincere apologies. I will replace it with a fresh plate right away.", ipa: "/ˈaʊə sɪnˈsɪər əˈpɒl.ə.dʒiz. aɪ wɪl rɪˈpleɪs ɪt wɪð ə freʃ pleɪt raɪt əˈweɪ/" }
        ]
      },
      {
        id: "res-7",
        title: "Dessert & Espresso Order",
        speakerA: "Waiter",
        speakerB: "Guest",
        turns: [
          { speaker: "Waiter", text: "May I tempt you with our signature molten chocolate lava cake tonight?", ipa: "/meɪ aɪ tempt juː wɪð ˈaʊə ˈsɪɡ.nə.tʃər ˈməʊl.tən ˈtʃɒk.lət ˈlɑː.və keɪk təˈnaɪt/" },
          { speaker: "Guest", text: "Yes, and please bring two double espressos along with dessert.", ipa: "/jes, ænd pliːz brɪŋ tuː ˈdʌb.əl eˈspres.əʊz əˈlɒŋ wɪð dɪˈzɜːt/" }
        ]
      },
      {
        id: "res-8",
        title: "Requesting & Splitting Bill",
        speakerA: "Customer",
        speakerB: "Server",
        turns: [
          { speaker: "Customer", text: "Could we have the check, please? Can we split it equally onto two credit cards?", ipa: "/kʊd wiː hæv ðə tʃek, pliːz? kæn wiː splɪt ɪt ˈiː.kwə.li ˈɒn.tuː tuː ˈkred.ɪt kɑːdz/" },
          { speaker: "Server", text: "Certainly, I have split the amount down the middle on separate terminals.", ipa: "/ˈsɜː.tən.li, aɪ hæv splɪt ði əˈmaʊnt daʊn ðə ˈmɪd.əl ɒn ˈsep.ər.ət ˈtɜː.mɪ.nəlz/" }
        ]
      },
      {
        id: "res-9",
        title: "Takeaway Pizza Box",
        speakerA: "Guest",
        speakerB: "Waiter",
        turns: [
          { speaker: "Guest", text: "We couldn't finish the wood-fired pizza. Could you box the remaining slices for us?", ipa: "/wiː ˈkʊdnt ˈfɪn.ɪʃ ðə wʊd faɪəd ˈpiːt.sə. kʊd juː bɒks ðə rɪˈmeɪ.nɪŋ ˈslaɪ.sɪz fɔːr ʌs/" },
          { speaker: "Waiter", text: "I'll pack them in an insulated carryout container right away.", ipa: "/aɪl pæk ðem ɪn æn ˈɪn.sjʊ.leɪ.tɪd ˈkær.i.aʊt kənˈteɪ.nər raɪt əˈweɪ/" }
        ]
      },
      {
        id: "res-10",
        title: "Tipping Outstanding Service",
        speakerA: "Patron",
        speakerB: "Server",
        turns: [
          { speaker: "Patron", text: "The service and hospitality tonight were exemplary. Please keep the change as a tip.", ipa: "/ðə ˈsɜː.vɪs ænd ˌhɒs.pɪˈtæl.ə.ti təˈnaɪt wɜːr ɪɡˈzem.plər.i. pliːz kiːp ðə tʃeɪndʒ æz ə tɪp/" },
          { speaker: "Server", text: "Thank you so much! It was an absolute pleasure hosting your dinner.", ipa: "/θæŋk juː səʊ mʌtʃ! ɪt wɒz æn ˈæb.sə.luːt ˈpleʒ.ər ˈhəʊ.stɪŋ jɔː ˈdɪn.ər/" }
        ]
      }
    ]
  },
  {
    id: "friends",
    title: "Socializing & Friends",
    dialogues: [
      {
        id: "fr-1",
        title: "Weekend Rooftop Cafe Plans",
        speakerA: "Chloe",
        speakerB: "Ben",
        turns: [
          { speaker: "Chloe", text: "Are you free this Saturday evening to catch up over craft coffee?", ipa: "/ɑː juː friː ðɪs ˈsæt.ə.deɪ ˈiːv.nɪŋ tuː kætʃ ʌp ˈəʊ.və krɑːft ˈkɒf.i/" },
          { speaker: "Ben", text: "I'd love to! How about that trendy rooftop cafe in District 1?", ipa: "/aɪd lʌv tuː! haʊ əˈbaʊt ðæt ˈtren.di ˈruːf.tɒp kæfˈeɪ ɪn ˈdɪs.trɪkt wʌn/" }
        ]
      },
      {
        id: "fr-2",
        title: "IMAX Movie Night Booking",
        speakerA: "Jessica",
        speakerB: "Sam",
        turns: [
          { speaker: "Jessica", text: "Shall we book IMAX tickets for the new sci-fi premiere tonight?", ipa: "/ʃæl wiː bʊk ˈaɪ.mæks ˈtɪk.ɪts fɔː ðə njuː ˈsaɪ.faɪ prɪˈmjeə təˈnaɪt/" },
          { speaker: "Sam", text: "Definitely. I'll reserve central seats before the late show sells out.", ipa: "/ˈdef.ɪ.nət.li. aɪl rɪˈzɜːv ˈsen.trəl siːts bɪˈfɔː ðə leɪt ʃəʊ selz aʊt/" }
        ]
      },
      {
        id: "fr-3",
        title: "Backyard Barbecue Party",
        speakerA: "Alex",
        speakerB: "Dave",
        turns: [
          { speaker: "Alex", text: "We're hosting a backyard barbecue party with grilled skewers and cold drinks.", ipa: "/wɪə ˈhəʊ.stɪŋ ə ˌbækˈjɑːd ˈbɑː.bɪ.kjuː ˈpɑː.ti wɪð ɡrɪld ˈskjuː.əz ænd kəʊld drɪŋks/" },
          { speaker: "Dave", text: "Sounds fantastic! What appetizers or drinks can I bring along?", ipa: "/saʊndz fænˈtæs.tɪk! wɒt ˈæp.ə.taɪ.zəz ɔː drɪŋks kæn aɪ brɪŋ əˈlɒŋ/" }
        ]
      },
      {
        id: "fr-4",
        title: "Sharing Date Experiences",
        speakerA: "Grace",
        speakerB: "Mia",
        turns: [
          { speaker: "Grace", text: "How did your coffee date go yesterday? Did you two hit it off?", ipa: "/haʊ dɪd jɔː ˈkɒf.i deɪt ɡəʊ ˈjes.tə.deɪ? dɪd juː tuː hɪt ɪt ɒf/" },
          { speaker: "Mia", text: "We chatted effortlessly for three hours straight. We share so many values!", ipa: "/wiː ˈtʃæt.ɪd ˈef.ət.ləs.li fɔː θriː ˈaʊəz streɪt. wiː ʃeə səʊ ˈmen.i ˈvæl.juːz/" }
        ]
      },
      {
        id: "fr-5",
        title: "Late-Night Karaoke Session",
        speakerA: "Kevin",
        speakerB: "Chris",
        turns: [
          { speaker: "Kevin", text: "Let's blow off some steam after finals week with a late-night karaoke session.", ipa: "/lets bləʊ ɒf sʌm stiːm ˈɑːf.tə ˈfaɪ.nəlz wiːk wɪð ə leɪt naɪt ˌkær.iˈəʊ.ki ˈseʃ.ən/" },
          { speaker: "Chris", text: "I'm ready to sing classic rock anthems at the top of my lungs!", ipa: "/aɪm ˈred.i tuː sɪŋ ˈklæs.ɪk rɒk ˈæn.θəmz æt ðə tɒp əv maɪ lʌŋz/" }
        ]
      },
      {
        id: "fr-6",
        title: "Encouraging a Friend",
        speakerA: "True Friend",
        speakerB: "Struggling Friend",
        turns: [
          { speaker: "True Friend", text: "Remember that I'm always here for you whenever you need someone to talk to.", ipa: "/rɪˈmem.bər ðæt aɪm ˈɔːl.weɪz hɪə fɔː juː wenˈev.ə juː niːd ˈsʌm.wʌn tuː tɔːk tuː/" },
          { speaker: "Struggling Friend", text: "Having your encouragement gives me the strength to navigate this tough patch.", ipa: "/ˈhæv.ɪŋ jɔːr ɪnˈkʌr.ɪdʒ.mənt ɡɪvz miː ðə streŋθ tuː ˈnæv.ɪ.ɡeɪt ðɪs tʌf pætʃ/" }
        ]
      },
      {
        id: "fr-7",
        title: "Lakeside Camping Trip",
        speakerA: "Camper 1",
        speakerB: "Camper 2",
        turns: [
          { speaker: "Camper 1", text: "Did you pack the sleeping bags, portable stove, and insect repellent?", ipa: "/dɪd juː pæk ðə ˈsliː.pɪŋ bæɡz, ˈpɔː.tə.bəl stəʊv, ænd ˈɪn.sekt rɪˈpel.ənt/" },
          { speaker: "Camper 2", text: "Everything is loaded in the trunk. Stargazing by the lake will be surreal.", ipa: "/ˈev.ri.θɪŋ ɪz ˈləʊ.dɪd ɪn ðə trʌŋk. ˈstɑːˌɡeɪ.zɪŋ baɪ ðə leɪk wɪl biː səˈrɪəl/" }
        ]
      },
      {
        id: "fr-8",
        title: "Surprise Birthday Celebration",
        speakerA: "Crowd",
        speakerB: "Birthday Friend",
        turns: [
          { speaker: "Crowd", text: "Surprise! Happy birthday to our favorite person in the entire world!", ipa: "/səˈpraɪz! ˈhæp.i ˈbɜːθ.deɪ tuː ˈaʊə ˈfeɪ.vər.ɪt ˈpɜː.sən ɪn ði ɪnˈtaɪə wɜːld/" },
          { speaker: "Birthday Friend", text: "I'm completely speechless! You guys planned this secret party behind my back?", ipa: "/aɪm kəmˈpliːt.li ˈspiːtʃ.ləs! juː ɡaɪz plænd ðɪs ˈsiː.krət ˈpɑː.ti bɪˈhaɪnd maɪ bæk/" }
        ]
      },
      {
        id: "fr-9",
        title: "Workout Gym Accountability",
        speakerA: "Buddy A",
        speakerB: "Buddy B",
        turns: [
          { speaker: "Buddy A", text: "Be my workout accountability partner; we hit weights three times every week.", ipa: "/biː maɪ ˈwɜːk.aʊt əˌkaʊn.təˈbɪl.ə.ti ˈpɑːt.nər; wiː hɪt weɪts θriː taɪmz ˈev.ri wiːk/" },
          { speaker: "Buddy B", text: "Deal! Having mutual motivation ensures we never skip leg days.", ipa: "/diːl! ˈhæv.ɪŋ ˈmjuː.tʃu.əl ˌməʊ.tɪˈveɪ.ʃən ɪnˈʃɔːz wiː ˈnev.ər skɪp leɡ deɪz/" }
        ]
      },
      {
        id: "fr-10",
        title: "Welcoming Abroad Returnee",
        speakerA: "Traveler Friend",
        speakerB: "Local Friend",
        turns: [
          { speaker: "Traveler Friend", text: "I'll be returning from my semester abroad next month. Let's feast together!", ipa: "/aɪl biː rɪˈtɜː.nɪŋ frɒm maɪ sɪˈmes.tər əˈbrɔːd nekst mʌnθ. lets fiːst təˈɡeð.ər/" },
          { speaker: "Local Friend", text: "I've already bookmarked three new gourmet restaurants for your homecoming banquet.", ipa: "/aɪv ɔːlˈred.i ˈbʊk.mɑːkt θriː njuː ˈɡʊə.meɪ ˈres.trɒnts fɔː jɔː ˈhəʊmˌkʌm.ɪŋ ˈbæŋ.kwɪt/" }
        ]
      }
    ]
  }
];

const dictationItems = [
    {
      sentence: "The local library will extend its opening hours during the final exam period.",
      ipa: "/ðə ˈləʊ.kəl ˈlaɪ.brər.i wɪl ɪkˈstend ɪts ˈəʊ.pən.ɪŋ ˈaʊəz ˈdjʊə.rɪŋ ðə ˈfaɪ.nəl ɪɡˈzæm ˈpɪə.ri.əd/"
    },
    {
      sentence: "Renewable power generation reduced municipal carbon emissions significantly.",
      ipa: "/rɪˈnjuː.ə.bəl paʊər ˌdʒen.əˈreɪ.ʃən rɪˈdʒuːst mjuːˈnɪs.ɪ.pəl ˈkɑː.bən ɪˈmɪʃ.ənz sɪɡˈnɪf.ɪ.kənt.li/"
    }
  ];

const readingData = {
    b1b2: {
      title: "Urban Green Spaces and Well-being",
      passage: "Recent studies indicate that urban residents living near green public spaces report lower stress levels and improved cardiovascular health. Urban planners increasingly prioritize accessible parks to foster community cohesion and enhance physical vitality.",
      questions: [
        {
          q: "What is a proven benefit of living near public parks?",
          options: ["Lower stress levels", "Reduced rental costs", "Free transport access", "Higher income"],
          correct: 0
        }
      ]
    },
    thpt: {
      items: [
        {
          q: "Choose the word whose underlined part differs from the other three in pronunciation:",
          options: ["A. decided", "B. looked", "C. watched", "D. stopped"],
          explain: "Đáp án A: phát âm là /ɪd/, còn lại đều phát âm là /t/."
        }
      ]
    },
    cam: {
      book: "18",
      title: "The Roman Concrete Revolution",
      passage: "Ancient Roman concrete possessed an extraordinary durability due to the combination of quicklime, volcanic ash, and seawater. Over centuries, chemical interactions fostered the growth of rare interlocking crystals that self-healed micro-fractures.",
      questions: [
        {
          q: "Roman concrete was weaker than modern industrial cement formulations.",
          answer: "FALSE"
        }
      ]
    }
  };

window.AUTOEXAM_DATA = {
  sampleIpaDict: sampleIpaDict,
  flashcards: flashcards,
  shadowingTopicsData: shadowingTopicsData,
  dictationItems: dictationItems,
  readingData: readingData
};
})();
