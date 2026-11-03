import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  MicOff,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  Bookmark,
  Search,
  Headphones,
  BookOpen,
  VolumeX,
  RefreshCw,
  Send,
  Zap,
  Target,
  GraduationCap,
  Languages,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Repeat,
  BookMarked,
  Image as ImageIcon,
  Upload,
  Camera,
  FileUp,
  Loader2
} from "lucide-react";

// --- DICTIONARY DATA FOR IPA BREAKDOWN ---
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

export default function App() {
  const [activeTab, setActiveTab] = useState("ipa"); // ipa | shadowing | listening | reading | flashcard | writing

  // --- 1. IPA STATE ---
  const [ipaInput, setIpaInput] = useState(
    "The development of artificial intelligence has revolutionized modern education and technology."
  );
  // Default selected word on load: 'development'
  const [selectedWord, setSelectedWord] = useState({
    clean: "development",
    ...sampleIpaDict["development"]
  });
  const [isRecordingIpa, setIsRecordingIpa] = useState(false);
  const [ipaScore, setIpaScore] = useState(null);
  const [isProcessingFile, setIsProcessingFile] = useState(false);

  // Hidden file inputs
  const imageInputRef = useRef(null);
  const docInputRef = useRef(null);

  // Helper to resolve word data (with fallback for any entered word)
  const resolveWordDetails = (rawWord) => {
    const clean = rawWord.toLowerCase().replace(/[^a-z]/g, "");
    if (!clean) return null;
    if (sampleIpaDict[clean]) {
      return { clean, ...sampleIpaDict[clean] };
    }
    // Fallback for custom user input words
    return {
      clean,
      ipa: `/${clean}/`,
      vi: "từ vựng (tra cứu trực tuyến)",
      pos: "word",
      cefr: "General",
      example: `Understanding '${clean}' helps improve overall English comprehension.`,
      exampleVi: `Hiểu rõ từ '${clean}' giúp nâng cao khả năng đọc hiểu tiếng Anh.`
    };
  };

  // Toggle IPA Record
  const handleToggleIpaRecord = () => {
    if (isRecordingIpa) {
      setIsRecordingIpa(false);
      // Generate realistic score breakdown and per-word precision scores
      const randomOverall = Math.floor(Math.random() * 25) + 72; // e.g. 72 - 96%
      const words = ipaInput.trim().split(/\s+/).filter(Boolean);
      const wordScores = {};
      words.forEach((w) => {
        const clean = w.toLowerCase().replace(/[^a-z]/g, "");
        // Variance around overall score
        const variance = Math.floor(Math.random() * 20) - 10;
        wordScores[clean] = Math.max(50, Math.min(99, randomOverall + variance));
      });

      setIpaScore({
        overall: randomOverall,
        fluency: Math.min(98, randomOverall + 3),
        accuracy: randomOverall,
        wordScores
      });
    } else {
      setIsRecordingIpa(true);
      setIpaScore(null);
    }
  };

  // Helper for color coding accuracy level
  const getScoreColor = (percent) => {
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
  };

  // Shadowing state & data
  const [selectedTopicId, setSelectedTopicId] = useState("workplace");
  const [selectedDialogueIndex, setSelectedDialogueIndex] = useState(0);
  const [shadowingTurnIdx, setShadowingTurnIdx] = useState(0);
  const [isRecordingShadow, setIsRecordingShadow] = useState(false);
  const [shadowScore, setShadowScore] = useState(null);
  const [audioRate, setAudioRate] = useState(1.0);
  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  // Track which sentence has IPA toggled visible
  const [activeIpaTurnIdx, setActiveIpaTurnIdx] = useState(null);

  // Active topic object & active dialogue
  const currentTopic = shadowingTopicsData.find((t) => t.id === selectedTopicId) || shadowingTopicsData[0];
  const currentDialogue = currentTopic.dialogues[selectedDialogueIndex] || currentTopic.dialogues[0];

  const handleToggleShadowRecord = (turnIdx) => {
    if (isRecordingShadow && shadowingTurnIdx === turnIdx) {
      setIsRecordingShadow(false);
      setShadowScore({
        turnIdx,
        percent: Math.floor(Math.random() * 15) + 84, // 84 - 98%
        fluency: Math.floor(Math.random() * 10) + 88
      });
    } else {
      setShadowingTurnIdx(turnIdx);
      setIsRecordingShadow(true);
      setShadowScore(null);
    }
  };

  // Listening state & data
  const [listenSubTab, setListenSubTab] = useState("bands");
  const [selectedCam, setSelectedCam] = useState("18");
  const [camAnswer1, setCamAnswer1] = useState("");
  const cambridgeBooks = ["15", "16", "17", "18", "19", "20", "21"];

  const [dictIdx, setDictIdx] = useState(0);
  const [dictInput, setDictInput] = useState("");
  const [dictScore, setDictScore] = useState(null);

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

  const handleCheckDictation = () => {
    const target = dictationItems[dictIdx].sentence.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const user = dictInput.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    if (!user) return;
    const targetWords = target.split(/\s+/);
    const userWords = user.split(/\s+/);
    let matches = 0;
    userWords.forEach((uw) => {
      if (targetWords.includes(uw)) matches++;
    });
    const percent = Math.min(100, Math.round((matches / targetWords.length) * 100));
    setDictScore({ percent, standard: dictationItems[dictIdx].sentence });
  };

  // Reading state & data
  const [readSubTab, setReadSubTab] = useState("b1b2");
  const [readAnswers, setReadAnswers] = useState({});
  const [readResultShown, setReadResultShown] = useState(false);

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

  // Flashcard state
  const [cardTopic, setCardTopic] = useState("All");
  const [cardIdx, setCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Writing state
  const [writingTask, setWritingTask] = useState("task1");
  const [essayText, setEssayText] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [writingScore, setWritingScore] = useState(null);

  const handleEvalWriting = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setWritingScore({
        overall: 7.0,
        tr: 7.0,
        cc: 7.5,
        lr: 7.0,
        gra: 6.5
      });
    }, 1200);
  };

  // Web Speech API
  const speak = (text, rate = 1.0) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  // Handle Image OCR Upload
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsProcessingFile(true);
    // Simulate smart OCR parsing from photograph / textbook snapshot
    setTimeout(() => {
      const ocrSample = "Artificial intelligence enables personalized education and interactive language learning systems worldwide.";
      setIpaInput(ocrSample);
      setSelectedWord(resolveWordDetails("artificial"));
      setIpaScore(null);
      setIsProcessingFile(false);
      e.target.value = "";
    }, 1100);
  };

  // Handle Document / Audio file upload
  const handleDocUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsProcessingFile(true);
    setTimeout(() => {
      const docSample = "Sustainable technology and renewable energy sources create modern environmental solutions.";
      setIpaInput(docSample);
      setSelectedWord(resolveWordDetails("sustainable"));
      setIpaScore(null);
      setIsProcessingFile(false);
      e.target.value = "";
    }, 900);
  };

  return (
    <div className="flex h-screen w-full bg-[#0B0F19] text-slate-100 font-sans antialiased overflow-hidden select-none">
      {/* Hidden File Inputs for OCR & Documents */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleImageUpload}
      />
      <input
        ref={docInputRef}
        type="file"
        accept=".txt,.pdf,.doc,.docx,audio/*"
        className="hidden"
        onChange={handleDocUpload}
      />

      {/* ================= SIDEBAR ================= */}
      <aside className="w-56 flex-shrink-0 bg-[#0F172A] border-r border-slate-800/80 flex flex-col justify-between">
        <div>
          {/* Brand */}
          <div className="h-14 px-5 flex items-center gap-2.5 border-b border-slate-800">
            <div className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-md shadow-indigo-600/30">
              AE
            </div>
            <span className="font-bold text-sm text-white tracking-tight">AutoExam.ai</span>
          </div>

          {/* Navigation - Exact 6 items */}
          <nav className="p-2.5 space-y-1">
            {[
              { id: "ipa", label: "IPA", icon: Languages },
              { id: "shadowing", label: "Shadowing", icon: Repeat },
              { id: "listening", label: "Listening", icon: Headphones },
              { id: "reading", label: "Reading", icon: BookOpen },
              { id: "flashcard", label: "Flash card", icon: Bookmark },
              { id: "writing", label: "Writing", icon: FileText }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedWord(null);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile */}
        <div className="p-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Target 7.5+</span>
          <div className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            <Zap className="w-3 h-3 fill-emerald-400" /> 14d
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#0B0F19] overflow-hidden">
        {/* Top Minimal Bar */}
        <div className="h-12 px-6 border-b border-slate-800/80 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {activeTab === "flashcard" ? "Flash card" : activeTab.toUpperCase()}
            </span>

            {/* Quick Upload Buttons (When in IPA tab) */}
            {activeTab === "ipa" && (
              <div className="flex items-center gap-1.5 ml-1">
                <button
                  type="button"
                  onClick={() => imageInputRef.current?.click()}
                  disabled={isProcessingFile}
                  title="Tải ảnh chụp đề bài / sách để quét chữ tự động (OCR)"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[11px] font-semibold text-slate-300 hover:text-white transition shadow-sm active:scale-95 disabled:opacity-50"
                >
                  {isProcessingFile ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                  ) : (
                    <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                  )}
                  <span>Thêm ảnh (OCR)</span>
                </button>

                <button
                  type="button"
                  onClick={() => docInputRef.current?.click()}
                  disabled={isProcessingFile}
                  title="Nhập file văn bản hoặc file âm thanh"
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F172A] hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500 text-[11px] font-semibold text-slate-300 hover:text-white transition shadow-sm active:scale-95 disabled:opacity-50"
                >
                  <FileUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tải file</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (activeTab === "ipa") speak(ipaInput);
              if (activeTab === "shadowing") speak(shadowingList[selectedShadowIndex].sentences[shadowingSentenceIdx].text);
            }}
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-indigo-400 transition"
          >
            <Volume2 className="w-3.5 h-3.5" /> Native Audio
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 max-w-5xl w-full mx-auto space-y-3">
          {/* ================= 1. IPA ================= */}
          {activeTab === "ipa" && (
            <div className="space-y-3">
              {/* Text Input Block */}
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2">
                <textarea
                  value={ipaInput}
                  onChange={(e) => {
                    const text = e.target.value;
                    setIpaInput(text);
                    const words = text.trim().split(/\s+/);
                    if (words.length > 0 && words[0]) {
                      const resolved = resolveWordDetails(words[0]);
                      if (resolved) setSelectedWord(resolved);
                    }
                  }}
                  rows={2}
                  placeholder="Nhập đoạn văn tiếng Anh..."
                  className="w-full bg-[#0B0F19] border border-slate-700/60 rounded-lg p-2.5 text-xs text-slate-100 focus:outline-none focus:border-indigo-500 resize-none font-sans"
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const newSample = "Sustainable energy sources mitigate global warming risks.";
                        setIpaInput(newSample);
                        setSelectedWord(resolveWordDetails("sustainable"));
                        setIpaScore(null);
                      }}
                      className="text-[11px] text-slate-400 hover:text-indigo-400 flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" /> Mẫu khác
                    </button>
                    <button
                      onClick={() => {
                        setIpaInput("");
                        setSelectedWord(null);
                        setIpaScore(null);
                      }}
                      className="text-[11px] text-slate-500 hover:text-rose-400"
                    >
                      Xóa
                    </button>
                  </div>

                  {/* Audio, Mic, and Percentage Accuracy Badges */}
                  <div className="flex items-center gap-2">
                    {/* Native Audio button (Square icon) */}
                    <button
                      onClick={() => speak(ipaInput)}
                      title="Nghe phát âm chuẩn Native"
                      className="h-9 w-9 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-200 flex items-center justify-center transition active:scale-95 shadow-sm"
                    >
                      <Volume2 className="w-4 h-4 text-slate-300" />
                    </button>

                    {/* Microphone button (Square icon) */}
                    <button
                      onClick={handleToggleIpaRecord}
                      title={isRecordingIpa ? "Bấm để dừng ghi âm và chấm điểm" : "Bấm để ghi âm"}
                      className={`h-9 w-9 rounded-xl flex items-center justify-center transition active:scale-95 shadow-md ${
                        isRecordingIpa
                          ? "bg-rose-600 text-white animate-pulse shadow-rose-600/40"
                          : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30"
                      }`}
                    >
                      {isRecordingIpa ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>

                    {/* Accurate Percentage Pill Badge with Color Levels */}
                    {ipaScore && (
                      <div
                        className={`h-9 px-3 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition-all animate-in fade-in zoom-in-95 duration-200 ${
                          getScoreColor(ipaScore.overall).badgeBg
                        }`}
                      >
                        <span className="text-sm font-black">{ipaScore.overall}%</span>
                        <span className="text-[10px] font-semibold opacity-90">
                          • {getScoreColor(ipaScore.overall).label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Word by word IPA container */}
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4">
                <div className="flex flex-wrap gap-2">
                  {ipaInput
                    .split(/\s+/)
                    .filter(Boolean)
                    .map((w, idx) => {
                      const clean = w.toLowerCase().replace(/[^a-z]/g, "");
                      const dict = sampleIpaDict[clean];
                      const isSelected = selectedWord?.clean === clean;
                      const wordScore = ipaScore?.wordScores?.[clean];
                      const colorStyle = wordScore !== undefined ? getScoreColor(wordScore) : null;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            const details = resolveWordDetails(w);
                            if (details) {
                              setSelectedWord(details);
                              speak(details.clean);
                            }
                          }}
                          className={`cursor-pointer px-3 py-1.5 rounded-lg border text-center transition-all ${
                            isSelected
                              ? "bg-indigo-600/25 border-indigo-500 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400"
                              : colorStyle
                              ? `${colorStyle.pillBg}`
                              : "bg-[#0B0F19] hover:border-slate-600 hover:bg-slate-800/40 border-slate-800 text-slate-300"
                          }`}
                        >
                          <div className="flex items-center justify-center gap-1">
                            <span className={`text-xs font-bold ${isSelected ? "text-white" : "text-slate-200"}`}>
                              {w}
                            </span>
                            {/* Individual Word Score badge if evaluated */}
                            {wordScore !== undefined && (
                              <span className="text-[9px] font-bold opacity-80">
                                {wordScore}%
                              </span>
                            )}
                          </div>
                          <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? "text-indigo-300" : "text-indigo-400"}`}>
                            {dict ? dict.ipa : `/${clean || "..."}/`}
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* DEDICATED WORD BREAKDOWN PANEL (Phiên âm - Nghĩa - Cách đọc - Ví dụ cách dùng) */}
              {selectedWord && (
                <div className="bg-[#0F172A] border border-indigo-500/40 rounded-xl p-4 shadow-lg shadow-black/40 space-y-3.5 transition-all animate-in fade-in duration-200">
                  {/* Row 1: Word + Part of Speech + CEFR + Pronunciation Button */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-xl font-black text-white tracking-tight">
                        {selectedWord.clean}
                      </span>
                      <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/25">
                        {selectedWord.ipa}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 italic bg-slate-800 px-2 py-0.5 rounded">
                        {selectedWord.pos}
                      </span>
                      {selectedWord.cefr && (
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/25">
                          {selectedWord.cefr}
                        </span>
                      )}
                    </div>

                    {/* Cách đọc audio */}
                    <button
                      onClick={() => speak(selectedWord.clean)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-indigo-600/30 transition active:scale-95"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Cách đọc</span>
                    </button>
                  </div>

                  {/* Row 2: Nghĩa của từ */}
                  <div className="bg-[#0B0F19] border border-slate-800/80 rounded-lg p-3 flex items-start gap-2.5">
                    <div className="text-[10px] uppercase font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded mt-0.5 flex-shrink-0">
                      Nghĩa
                    </div>
                    <div className="text-xs text-slate-100 font-semibold leading-relaxed">
                      {selectedWord.vi}
                    </div>
                  </div>

                  {/* Row 3: Ví dụ cách dùng (English sentence + Vietnamese translation) */}
                  {selectedWord.example && (
                    <div className="bg-[#0B0F19] border border-slate-800/80 rounded-lg p-3 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded w-fit">
                          <span>Ví dụ cách dùng</span>
                        </div>
                        <button
                          onClick={() => speak(selectedWord.example)}
                          className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition"
                        >
                          <Volume2 className="w-3 h-3" /> Nghe ví dụ
                        </button>
                      </div>

                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                        {/* Highlight selected word in example */}
                        {(() => {
                          const regex = new RegExp(`(${selectedWord.clean})`, "gi");
                          const parts = selectedWord.example.split(regex);
                          return parts.map((part, pIdx) =>
                            part.toLowerCase() === selectedWord.clean.toLowerCase() ? (
                              <span key={pIdx} className="text-indigo-400 font-bold underline decoration-indigo-500 underline-offset-2">
                                {part}
                              </span>
                            ) : (
                              part
                            )
                          );
                        })()}
                      </p>

                      {selectedWord.exampleVi && (
                        <p className="text-[11px] text-slate-400 italic">
                          → {selectedWord.exampleVi}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ================= 2. SHADOWING ================= */}
          {activeTab === "shadowing" && (
            <div className="space-y-3">
              {/* Top Row: Single Topic Dropdown + Speed Controls */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2 relative">
                {/* Topic Dropdown Box */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTopicDropdownOpen(!isTopicDropdownOpen)}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition active:scale-95 border border-indigo-400/40"
                  >
                    <span className="text-[11px] uppercase tracking-wider text-indigo-200 font-bold">TOPIC:</span>
                    <span>{currentTopic.title}</span>
                    <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-white/20 text-white">
                      {currentTopic.dialogues.length}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 text-indigo-200 ${
                        isTopicDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isTopicDropdownOpen && (
                    <>
                      {/* Backdrop to close */}
                      <div
                        className="fixed inset-0 z-30"
                        onClick={() => setIsTopicDropdownOpen(false)}
                      />
                      <div className="absolute left-0 top-full mt-1.5 w-72 bg-[#0F172A] border border-slate-700/80 rounded-xl shadow-2xl z-40 py-1.5 max-h-80 overflow-y-auto backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
                        {shadowingTopicsData.map((topic) => {
                          const isSelected = selectedTopicId === topic.id;
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => {
                                setSelectedTopicId(topic.id);
                                setSelectedDialogueIndex(0);
                                setShadowingTurnIdx(0);
                                setShadowScore(null);
                                setActiveIpaTurnIdx(null);
                                setIsTopicDropdownOpen(false);
                              }}
                              className={`w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium text-left transition ${
                                isSelected
                                  ? "bg-indigo-600/25 text-white font-bold border-l-2 border-indigo-500"
                                  : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                              }`}
                            >
                              <span>{topic.title}</span>
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                  isSelected
                                    ? "bg-indigo-500/30 text-indigo-300"
                                    : "bg-slate-800 text-slate-400"
                                }`}
                              >
                                {topic.dialogues.length}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>

                {/* Speed Controls */}
                <div className="flex items-center gap-1 flex-shrink-0 bg-[#0F172A] p-1 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 px-1 font-medium">Tốc độ:</span>
                  {[0.75, 1.0].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setAudioRate(rate)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
                        audioRate === rate ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>

              {/* BƯỚC 1: CHỌN 1 TRONG 10 ĐOẠN HỘI THOẠI CỦA CHỦ ĐỀ */}
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300 px-1 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <BookMarked className="w-4 h-4 text-indigo-400" />
                    <span>Select Dialogue ({currentTopic.title}):</span>
                  </span>
                  <span className="text-indigo-400 font-mono text-[11px] bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Dialogue #{selectedDialogueIndex + 1} / {currentTopic.dialogues.length}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                  {currentTopic.dialogues.map((dlg, idx) => {
                    const isCurDlg = selectedDialogueIndex === idx;
                    return (
                      <button
                        key={dlg.id}
                        onClick={() => {
                          setSelectedDialogueIndex(idx);
                          setShadowingTurnIdx(0);
                          setShadowScore(null);
                          setActiveIpaTurnIdx(null);
                        }}
                        className={`p-2 rounded-lg text-left transition border ${
                          isCurDlg
                            ? "bg-indigo-600/25 border-indigo-500 text-white shadow-md shadow-indigo-600/20 ring-1 ring-indigo-400"
                            : "bg-[#0B0F19] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                        }`}
                      >
                        <div className="text-[10px] font-mono text-indigo-400 font-bold">#{idx + 1}</div>
                        <div className="text-[11px] font-semibold truncate text-slate-200">{dlg.title}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* BƯỚC 2: KHU VỰC HIỂN THỊ ĐẦY ĐỦ ĐOẠN HỘI THOẠI */}
              <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20 uppercase tracking-wider">
                      Dialogue #{selectedDialogueIndex + 1}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-1">
                      {currentDialogue.title}
                    </h3>
                  </div>

                  {/* Play entire dialogue */}
                  <button
                    onClick={() => {
                      const fullText = currentDialogue.turns.map(t => `${t.speaker} says: ${t.text}`).join(". ");
                      speak(fullText, audioRate);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm active:scale-95 transition"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Play All</span>
                  </button>
                </div>

                {/* Turns: Conversational Flow */}
                <div className="space-y-3">
                  {currentDialogue.turns.map((turn, tIdx) => {
                    const isRecordingThis = isRecordingShadow && shadowingTurnIdx === tIdx;
                    const turnEvaluation = shadowScore && shadowScore.turnIdx === tIdx ? shadowScore : null;
                    const isSpeakerA = tIdx % 2 === 0;
                    const isIpaVisible = activeIpaTurnIdx === tIdx;

                    return (
                      <div
                        key={tIdx}
                        className={`p-3.5 rounded-xl border transition-all space-y-2.5 ${
                          isSpeakerA
                            ? "bg-[#0B0F19] border-slate-800/90"
                            : "bg-[#0B0F19]/90 border-indigo-900/40"
                        }`}
                      >
                        {/* Speaker Tag + Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black ${
                                isSpeakerA
                                  ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40"
                                  : "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                              }`}
                            >
                              {turn.speaker.charAt(0)}
                            </div>
                            <span className="text-xs font-bold text-slate-200">
                              {turn.speaker}
                            </span>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-1.5">
                            {/* Toggle IPA Button */}
                            <button
                              onClick={() => setActiveIpaTurnIdx(isIpaVisible ? null : tIdx)}
                              title={isIpaVisible ? "Ẩn phiên âm IPA" : "Xem phiên âm IPA"}
                              className={`h-8 px-2 rounded-lg text-[11px] font-mono font-bold transition active:scale-95 border ${
                                isIpaVisible
                                  ? "bg-indigo-600 text-white border-indigo-500"
                                  : "bg-slate-800/80 text-indigo-400 border-slate-700/80 hover:bg-slate-700"
                              }`}
                            >
                              IPA
                            </button>

                            {/* Listen Single Turn */}
                            <button
                              onClick={() => speak(turn.text, audioRate)}
                              title="Nghe câu này"
                              className="h-8 w-8 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-300 flex items-center justify-center transition active:scale-95"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>

                            {/* Shadowing Record Button */}
                            <button
                              onClick={() => handleToggleShadowRecord(tIdx)}
                              title={isRecordingThis ? "Dừng ghi âm & chấm điểm" : "Nhại lại câu này (Shadowing)"}
                              className={`h-8 px-2.5 rounded-lg flex items-center gap-1.5 text-xs font-semibold transition active:scale-95 shadow-sm ${
                                isRecordingThis
                                  ? "bg-rose-600 text-white animate-pulse"
                                  : "bg-indigo-600 hover:bg-indigo-500 text-white"
                              }`}
                            >
                              {isRecordingThis ? (
                                <>
                                  <MicOff className="w-3.5 h-3.5" />
                                  <span>Dừng</span>
                                </>
                              ) : (
                                <>
                                  <Mic className="w-3.5 h-3.5" />
                                  <span>Tập nói</span>
                                </>
                              )}
                            </button>

                            {/* Accuracy score pill */}
                            {turnEvaluation && (
                              <div
                                className={`h-8 px-2.5 rounded-lg border flex items-center gap-1 text-xs font-bold ${
                                  getScoreColor(turnEvaluation.percent).badgeBg
                                }`}
                              >
                                <span>{turnEvaluation.percent}%</span>
                                <span className="text-[10px] opacity-80 font-normal">
                                  ({getScoreColor(turnEvaluation.percent).label})
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Dialogue Full Sentence Text */}
                        <p
                          onClick={() => setActiveIpaTurnIdx(isIpaVisible ? null : tIdx)}
                          className="text-xs font-medium text-slate-100 leading-relaxed pl-8 cursor-pointer hover:text-indigo-200 transition"
                          title="Bấm vào câu để bật/tắt phiên âm IPA"
                        >
                          "{turn.text}"
                        </p>

                        {/* On-demand IPA (Only appears if user clicks IPA button or sentence) */}
                        {isIpaVisible && (
                          <div className="pl-8 animate-in fade-in slide-in-from-top-1 duration-150">
                            <p className="text-[11px] font-mono text-indigo-400 bg-[#0F172A] px-2.5 py-1 rounded-md border border-indigo-500/30 w-fit">
                              {turn.ipa}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* --- PHẦN BỔ SUNG 1: TỪ VỰNG THÔNG DỤNG (LIỆT KÊ) --- */}
                <div className="pt-3 border-t border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                        Từ vựng thông dụng
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {currentDialogue.keyVocab?.length || 4} từ khóa
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {(currentDialogue.keyVocab || [
                      { word: "walk through", ipa: "/wɔːk θruː/", pos: "phr v", def: "giải thích chi tiết từng bước" },
                      { word: "highlights", ipa: "/ˈhaɪ.laɪts/", pos: "n", def: "những điểm nổi bật chính" },
                      { word: "proposal", ipa: "/prəˈpəʊ.zəl/", pos: "n", def: "bản đề xuất kế hoạch" },
                      { word: "implementation", ipa: "/ˌɪm.plɪ.menˈteɪ.ʃən/", pos: "n", def: "sự triển khai, thực thi" }
                    ]).map((vItem, vIdx) => (
                      <div
                        key={vIdx}
                        className="bg-[#0B0F19] border border-slate-800/90 rounded-lg p-2.5 flex items-center justify-between hover:border-slate-700 transition"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs font-bold text-white">{vItem.word}</span>
                            <span className="text-[10px] font-mono text-indigo-400">{vItem.ipa}</span>
                            <span className="text-[9px] text-slate-400 italic bg-slate-800 px-1 rounded">
                              {vItem.pos}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-300 font-medium">{vItem.def}</p>
                        </div>
                        <button
                          onClick={() => speak(vItem.word)}
                          title="Nghe phát âm từ"
                          className="h-7 w-7 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition active:scale-95 flex-shrink-0 ml-2"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- PHẦN BỔ SUNG 2: MẪU CÂU THÔNG DỤNG (LIỆT KÊ) --- */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                        Mẫu câu thông dụng
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {currentDialogue.keyPatterns?.length || 2} cấu trúc
                    </span>
                  </div>

                  <div className="space-y-2">
                    {(currentDialogue.keyPatterns || [
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
                    ]).map((pat, pIdx) => (
                      <div
                        key={pIdx}
                        className="bg-[#0B0F19] border border-slate-800/90 rounded-lg p-2.5 space-y-1 hover:border-slate-700 transition"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-400 font-mono">
                            {pat.pattern}
                          </span>
                          <button
                            onClick={() => speak(pat.example || pat.pattern)}
                            title="Nghe câu ví dụ"
                            className="h-6 px-2 rounded bg-slate-800/80 hover:bg-slate-700 text-[11px] text-slate-300 hover:text-white flex items-center gap-1 transition active:scale-95"
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>Nghe ví dụ</span>
                          </button>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          → <span className="text-slate-200 font-medium">{pat.meaning}</span>
                        </p>
                        {pat.example && (
                          <p className="text-[11px] text-slate-400 italic bg-[#0F172A]/70 px-2 py-1 rounded border border-slate-800/60 font-sans">
                            Eg: "{pat.example}"
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ================= 3. LISTENING ================= */}
          {activeTab === "listening" && (
            <div className="space-y-3">
              {/* Sub-tabs */}
              <div className="flex gap-2 border-b border-slate-800 pb-2">
                {[
                  { id: "bands", label: "Band 5.0 - 6.5" },
                  { id: "cam", label: "Cam 15 - 21" },
                  { id: "dictation", label: "Chép chính tả" }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setListenSubTab(st.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                      listenSubTab === st.id
                        ? "bg-indigo-600 text-white"
                        : "bg-[#0F172A] border border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Subtab 1: Band */}
              {listenSubTab === "bands" && (
                <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Section 1: Accommodation Inquiries</span>
                    <button
                      onClick={() =>
                        speak(
                          "I am calling about the flat. Does the rent include water and broadband? Yes, both are covered."
                        )
                      }
                      className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Nghe audio
                    </button>
                  </div>

                  <div className="p-3 bg-[#0B0F19] rounded-lg border border-slate-800 space-y-2 text-xs">
                    <p className="font-semibold text-slate-200">1. What is included in the monthly rent?</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Water & Broadband", "Electricity only", "Gas & Tax", "Parking only"].map(
                        (opt, i) => (
                          <button
                            key={i}
                            className="text-left p-2 rounded bg-[#0F172A] hover:bg-indigo-600/20 border border-slate-800 text-slate-300"
                          >
                            {opt}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Subtab 2: Cam 15-21 */}
              {listenSubTab === "cam" && (
                <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
                    {cambridgeBooks.map((bk) => (
                      <button
                        key={bk}
                        onClick={() => setSelectedCam(bk)}
                        className={`px-2 py-0.5 rounded text-xs font-bold ${
                          selectedCam === bk ? "bg-indigo-600 text-white" : "bg-[#0B0F19] text-slate-400"
                        }`}
                      >
                        Cam {bk}
                      </button>
                    ))}
                  </div>

                  <div className="p-3 bg-[#0B0F19] rounded-lg border border-slate-800 space-y-2 text-xs">
                    <span className="text-slate-400 font-mono">Test 1 - Question 1-2:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white">1. Name of contact person:</span>
                      <input
                        type="text"
                        value={camAnswer1}
                        onChange={(e) => setCamAnswer1(e.target.value)}
                        placeholder="Điền đáp án..."
                        className="bg-[#0F172A] border border-slate-700 rounded px-2 py-1 text-white w-36 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Subtab 3: Dictation */}
              {listenSubTab === "dictation" && (
                <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">
                      Câu {dictIdx + 1} / {dictationItems.length}
                    </span>
                    <button
                      onClick={() => speak(dictationItems[dictIdx].sentence)}
                      className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Nghe câu
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-indigo-400">{dictationItems[dictIdx].ipa}</p>

                  <textarea
                    value={dictInput}
                    onChange={(e) => setDictInput(e.target.value)}
                    rows={2}
                    placeholder="Gõ lại câu nghe được..."
                    className="w-full bg-[#0B0F19] border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none"
                  />

                  <div className="flex justify-between items-center">
                    <button
                      onClick={handleCheckDictation}
                      className="px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                    >
                      Kiểm tra
                    </button>
                    {dictIdx < dictationItems.length - 1 && (
                      <button
                        onClick={() => {
                          setDictIdx(dictIdx + 1);
                          setDictInput("");
                          setDictScore(null);
                        }}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Câu kế →
                      </button>
                    )}
                  </div>

                  {dictScore && (
                    <div className="p-2.5 rounded bg-[#0B0F19] border border-slate-800 text-xs space-y-1">
                      <div className="flex justify-between font-bold">
                        <span>Độ khớp:</span>
                        <span className={dictScore.percent >= 80 ? "text-emerald-400" : "text-amber-400"}>
                          {dictScore.percent}%
                        </span>
                      </div>
                      <p className="text-slate-400">
                        Chuẩn: <span className="text-emerald-400">{dictScore.standard}</span>
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ================= 4. READING ================= */}
          {activeTab === "reading" && (
            <div className="space-y-3">
              {/* Sub-tabs */}
              <div className="flex gap-2 border-b border-slate-800 pb-2">
                {[
                  { id: "b1b2", label: "B1 - B2" },
                  { id: "thpt", label: "THPT Quốc Gia" },
                  { id: "cam", label: "IELTS Cam" }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setReadSubTab(st.id);
                      setReadResultShown(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                      readSubTab === st.id
                        ? "bg-indigo-600 text-white"
                        : "bg-[#0F172A] border border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* B1/B2 content */}
              {readSubTab === "b1b2" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2">
                    <span className="text-xs font-bold text-white">{readingData.b1b2.title}</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-serif bg-[#0B0F19] p-3 rounded-lg border border-slate-800/80">
                      {readingData.b1b2.passage}
                    </p>
                  </div>

                  <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-3">
                    {readingData.b1b2.questions.map((q, idx) => (
                      <div key={idx} className="space-y-1.5 text-xs">
                        <p className="font-semibold text-white">
                          {idx + 1}. {q.q}
                        </p>
                        <div className="grid grid-cols-1 gap-1">
                          {q.options.map((opt, oIdx) => {
                            const selected = readAnswers[`b1-${idx}`] === oIdx;
                            const isCorrect = oIdx === q.correct;
                            return (
                              <button
                                key={oIdx}
                                onClick={() =>
                                  setReadAnswers((p) => ({ ...p, [`b1-${idx}`]: oIdx }))
                                }
                                className={`text-left p-2 rounded border transition text-xs ${
                                  selected
                                    ? "bg-indigo-600 border-indigo-400 text-white"
                                    : "bg-[#0B0F19] border-slate-800 text-slate-300"
                                } ${readResultShown && isCorrect ? "border-emerald-400 text-emerald-300 font-bold" : ""}`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <button
                      onClick={() => setReadResultShown(!readResultShown)}
                      className="w-full py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                    >
                      Kiểm tra đáp án
                    </button>
                  </div>
                </div>
              )}

              {/* THPT */}
              {readSubTab === "thpt" && (
                <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-4 space-y-3">
                  {readingData.thpt.items.map((item, idx) => (
                    <div key={idx} className="space-y-2 text-xs border-b border-slate-800/80 pb-3">
                      <p className="font-semibold text-white">
                        Câu {idx + 1}: {item.q}
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {item.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => setReadAnswers((p) => ({ ...p, [`thpt-${idx}`]: oIdx }))}
                            className={`text-left p-2 rounded border text-xs ${
                              readAnswers[`thpt-${idx}`] === oIdx
                                ? "bg-indigo-600 border-indigo-400 text-white"
                                : "bg-[#0B0F19] border-slate-800 text-slate-300"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {readAnswers[`thpt-${idx}`] !== undefined && (
                        <p className="text-[11px] text-emerald-400">{item.explain}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* IELTS Cam */}
              {readSubTab === "cam" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2">
                    <span className="text-xs font-bold text-white">Cam {readingData.cam.book}: {readingData.cam.title}</span>
                    <p className="text-xs text-slate-300 leading-relaxed font-serif bg-[#0B0F19] p-3 rounded-lg border border-slate-800/80">
                      {readingData.cam.passage}
                    </p>
                  </div>

                  <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-3">
                    {readingData.cam.questions.map((q, idx) => (
                      <div key={idx} className="space-y-1.5 text-xs">
                        <p className="font-semibold text-white">"{q.q}"</p>
                        <div className="flex gap-2">
                          {["TRUE", "FALSE", "NOT GIVEN"].map((val) => (
                            <button
                              key={val}
                              onClick={() => setReadAnswers((p) => ({ ...p, [`cam-${idx}`]: val }))}
                              className={`flex-1 py-1 rounded border text-xs font-bold ${
                                readAnswers[`cam-${idx}`] === val
                                  ? val === q.answer
                                    ? "bg-emerald-600 border-emerald-400 text-white"
                                    : "bg-rose-600 border-rose-400 text-white"
                                  : "bg-[#0B0F19] border-slate-800 text-slate-300"
                              }`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ================= 5. FLASHCARD ================= */}
          {activeTab === "flashcard" && (
            <div className="space-y-3 max-w-lg mx-auto">
              {/* Category Pills */}
              <div className="flex justify-center gap-1.5 border-b border-slate-800 pb-2">
                {["All", "IELTS Vocab", "THPT", "Giao tiếp"].map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setCardTopic(c);
                      setCardIdx(0);
                      setIsFlipped(false);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      cardTopic === c ? "bg-indigo-600 text-white" : "bg-[#0F172A] text-slate-400"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Card Container */}
              {(() => {
                const list = flashcards.filter((f) => cardTopic === "All" || f.topic === cardTopic);
                const cur = list[cardIdx] || flashcards[0];
                return (
                  <div className="space-y-3">
                    <div
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="cursor-pointer h-60 w-full rounded-2xl bg-[#0F172A] border border-slate-800 p-6 flex flex-col justify-between shadow-xl transition-all hover:border-slate-700"
                    >
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                          {cur.topic}
                        </span>
                        <span className="font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                          {cur.cefr}
                        </span>
                      </div>

                      {!isFlipped ? (
                        <div className="text-center space-y-1">
                          <h2 className="text-3xl font-extrabold text-white tracking-tight">{cur.word}</h2>
                          <p className="text-xs font-mono text-indigo-400">{cur.ipa}</p>
                          <span className="text-[10px] text-slate-500 block pt-2">(Chạm để lật)</span>
                        </div>
                      ) : (
                        <div className="space-y-2 text-xs">
                          <p className="text-base font-bold text-emerald-400">{cur.def}</p>
                          <p className="text-slate-300 font-mono">Collocation: {cur.collocation}</p>
                          <p className="text-slate-400 italic">"{cur.example}"</p>
                        </div>
                      )}

                      <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-800">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speak(cur.word);
                          }}
                          className="p-1 rounded bg-[#0B0F19] text-slate-300 hover:text-white"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-slate-500">
                          {cardIdx + 1} / {list.length}
                        </span>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          if (cardIdx > 0) {
                            setCardIdx(cardIdx - 1);
                            setIsFlipped(false);
                          }
                        }}
                        disabled={cardIdx === 0}
                        className="px-3 py-1.5 rounded bg-[#0F172A] border border-slate-800 text-xs font-semibold text-slate-300 disabled:opacity-40"
                      >
                        Trước
                      </button>
                      <button
                        onClick={() => {
                          if (cardIdx < list.length - 1) {
                            setCardIdx(cardIdx + 1);
                            setIsFlipped(false);
                          }
                        }}
                        disabled={cardIdx === list.length - 1}
                        className="px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white disabled:opacity-40"
                      >
                        Tiếp theo
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* ================= 6. WRITING ================= */}
          {activeTab === "writing" && (
            <div className="space-y-3">
              {/* Task switcher */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setWritingTask("task1");
                      setWritingScore(null);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      writingTask === "task1" ? "bg-indigo-600 text-white" : "bg-[#0F172A] text-slate-400"
                    }`}
                  >
                    Task 1
                  </button>
                  <button
                    onClick={() => {
                      setWritingTask("task2");
                      setWritingScore(null);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                      writingTask === "task2" ? "bg-indigo-600 text-white" : "bg-[#0F172A] text-slate-400"
                    }`}
                  >
                    Task 2
                  </button>
                </div>

                <span className="text-xs font-mono text-slate-400">
                  Số từ: <strong className="text-white">{essayText.trim() ? essayText.trim().split(/\s+/).length : 0}</strong>
                </span>
              </div>

              {/* Workspace */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-3.5 space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {writingTask === "task1" ? "Renewable Electricity 2024" : "AI & Global Employment"}
                  </span>
                  <p className="text-xs text-white font-medium">
                    {writingTask === "task1"
                      ? "The chart displays the proportion of renewable electricity across Germany (54%), UK (42%), and Japan (28%). Summarize by selecting key features."
                      : "Some people believe that AI will eliminate more jobs than it creates. To what extent do you agree or disagree?"}
                  </p>
                </div>

                <div className="space-y-2">
                  <textarea
                    value={essayText}
                    onChange={(e) => setEssayText(e.target.value)}
                    rows={8}
                    placeholder="Nhập bài viết của bạn tại đây..."
                    className="w-full bg-[#0F172A] border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-indigo-500 resize-none leading-relaxed"
                  />
                  <button
                    onClick={handleEvalWriting}
                    disabled={isEvaluating}
                    className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    {isEvaluating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                    Chấm điểm AI
                  </button>
                </div>
              </div>

              {/* Quick Score */}
              {writingScore && (
                <div className="bg-[#0F172A] border border-indigo-500/30 rounded-xl p-3 flex items-center justify-around text-xs animate-in fade-in">
                  <div>Band tổng: <strong className="text-indigo-400 text-sm">Band {writingScore.overall}</strong></div>
                  <div>TR: <strong className="text-white">{writingScore.tr}</strong></div>
                  <div>CC: <strong className="text-white">{writingScore.cc}</strong></div>
                  <div>LR: <strong className="text-white">{writingScore.lr}</strong></div>
                  <div>GRA: <strong className="text-white">{writingScore.gra}</strong></div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}