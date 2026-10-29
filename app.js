// ============================================================================
// IPA Master AI — Core Application Logic
// Supports: Google Gemini API, OpenAI API, and Free Dictionary + Translate Fallback
// ============================================================================

const BUILTIN_IPA_DICT = {
  although: { us: "ɔːlˈðoʊ", uk: "ɔːlˈðəʊ", pos: "conj", vi: "mặc dù", syllables: "al·though", tip: "Âm 'th' rung cổ họng /ð/, nhấn âm tiết thứ 2." },
  learning: { us: "ˈlɜːrnɪŋ", uk: "ˈlɜːnɪŋ", pos: "noun/verb", vi: "việc học", syllables: "learn·ing", tip: "Giọng Mỹ cong lưỡi ở âm /ɜːr/." },
  english: { us: "ˈɪŋɡlɪʃ", uk: "ˈɪŋɡlɪʃ", pos: "noun", vi: "tiếng Anh", syllables: "Eng·lish", tip: "Chữ E đầu đọc là /ɪ/ (như 'in'), kết thúc bằng âm chu môi /ʃ/." },
  pronunciation: { us: "prəˌnʌnsiˈeɪʃn", uk: "prəˌnʌnsiˈeɪʃn", pos: "noun", vi: "sự phát âm", syllables: "pro·nun·ci·a·tion", tip: "Lưu ý âm thứ 2 là /nʌn/ (không phải noun!), trọng âm chính ở 'a' /ˈeɪ/." },
  can: { us: "kæn", uk: "kæn", pos: "modal", vi: "có thể", syllables: "can", tip: "Khi đọc lướt trong câu thường giảm âm thành /kən/." },
  be: { us: "biː", uk: "biː", pos: "verb", vi: "là / thì", syllables: "be", tip: "Nguyên âm dài /iː/." },
  challenging: { us: "ˈtʃælɪndʒɪŋ", uk: "ˈtʃælɪndʒɪŋ", pos: "adj", vi: "đầy thử thách", syllables: "chal·leng·ing", tip: "Nhấn trọng âm đầu /ˈtʃæl/, chú ý âm /dʒ/ ở giữa." },
  at: { us: "æt", uk: "æt", pos: "prep", vi: "ở / vào lúc", syllables: "at", tip: "Trong cụm 'at first' thường đọc nhẹ thành /ət/." },
  first: { us: "fɜːrst", uk: "fɜːst", pos: "adv", vi: "lúc đầu", syllables: "first", tip: "Bật rõ cụm phụ âm cuối /st/." },
  understanding: { us: "ˌʌndərˈstændɪŋ", uk: "ˌʌndəˈstændɪŋ", pos: "noun/verb", vi: "việc hiểu rõ", syllables: "un·der·stand·ing", tip: "Trọng âm chính rơi vào âm thứ 3 /ˈstænd/." },
  the: { us: "ðə", uk: "ðə", pos: "det", vi: "(mạo từ)", syllables: "the", tip: "Đọc là /ðiː/ khi đứng trước nguyên âm (như 'the International')." },
  international: { us: "ˌɪntərˈnæʃnəl", uk: "ˌɪntəˈnæʃnəl", pos: "adj", vi: "quốc tế", syllables: "in·ter·na·tion·al", tip: "Nhấn trọng âm vào 'na' /ˈnæʃ/." },
  phonetic: { us: "fəˈnetɪk", uk: "fəˈnetɪk", pos: "adj", vi: "ngữ âm", syllables: "pho·net·ic", tip: "Nhấn âm 2 /ˈnet/, giọng Mỹ có thể đọc âm /t/ thành flap T nhẹ." },
  alphabet: { us: "ˈælfəbet", uk: "ˈælfəbet", pos: "noun", vi: "bảng chữ cái", syllables: "al·pha·bet", tip: "Nhấn trọng âm đầu /ˈæl/." },
  helps: { us: "helps", uk: "helps", pos: "verb", vi: "giúp đỡ", syllables: "helps", tip: "Nhớ phát âm cụm /lps/ ở cuối từ." },
  you: { us: "juː", uk: "juː", pos: "pron", vi: "bạn", syllables: "you", tip: "Khi nối âm 'helps you' có thể tạo âm /helps ju/ mượt mà." },
  speak: { us: "spiːk", uk: "spiːk", pos: "verb", vi: "nói", syllables: "speak", tip: "Nguyên âm /iː/ kéo dài nhẹ, bật âm /k/ cuối." },
  clearly: { us: "ˈklɪrli", uk: "ˈklɪəli", pos: "adv", vi: "rõ ràng", syllables: "clear·ly", tip: "US đọc /ˈklɪrli/ (cong lưỡi), UK đọc /ˈklɪəli/." },
  and: { us: "ænd", uk: "ænd", pos: "conj", vi: "và", syllables: "and", tip: "Trong văn nói tự nhiên thường giảm âm thành /ənd/ hoặc /ən/." },
  confidently: { us: "ˈkɑːnfɪdəntli", uk: "ˈkɒnfɪdəntli", pos: "adv", vi: "một cách tự tin", syllables: "con·fi·dent·ly", tip: "Nhấn âm đầu: US mở rộng miệng /ˈkɑːn/, UK tròn môi /ˈkɒn/." },
  serendipity: { us: "ˌserənˈdɪpəti", uk: "ˌserənˈdɪpɪti", pos: "noun", vi: "cơ duyên tình cờ may mắn", syllables: "ser·en·dip·i·ty", tip: "Trọng âm chính rơi vào âm thứ 3 /ˈdɪp/." },
  practice: { us: "ˈpræktɪs", uk: "ˈpræktɪs", pos: "noun", vi: "sự luyện tập", syllables: "prac·tice", tip: "Nhấn âm đầu /ˈpræk/, phát âm rõ âm /s/ cuối." },
  makes: { us: "meɪks", uk: "meɪks", pos: "verb", vi: "tạo nên", syllables: "makes", tip: "Nguyên âm đôi /eɪ/ kết thúc bằng /ks/." },
  perfect: { us: "ˈpɜːrfɪkt", uk: "ˈpɜːfɪkt", pos: "adj", vi: "hoàn hảo", syllables: "per·fect", tip: "Tính từ nhấn âm 1 /ˈpɜːr/, bật nhẹ âm /kt/ cuối." },
  consistency: { us: "kənˈsɪstənsi", uk: "kənˈsɪstənsi", pos: "noun", vi: "sự kiên trì, nhất quán", syllables: "con·sis·ten·cy", tip: "Nhấn trọng âm vào âm tiết thứ 2 /ˈsɪs/." },
  is: { us: "ɪz", uk: "ɪz", pos: "verb", vi: "là", syllables: "is", tip: "Âm cuối là /z/ hữu thanh (rung cổ họng)." },
  key: { us: "kiː", uk: "kiː", pos: "noun", vi: "chìa khóa", syllables: "key", tip: "Nguyên âm dài /iː/." },
  to: { us: "tuː", uk: "tuː", pos: "prep", vi: "để / tới", syllables: "to", tip: "Thường đọc lướt là /tə/ trước phụ âm." },
  mastering: { us: "ˈmæstərɪŋ", uk: "ˈmɑːstərɪŋ", pos: "verb", vi: "làm chủ, thông thạo", syllables: "mas·ter·ing", tip: "US đọc /ˈmæs/, UK đọc âm /ˈmɑːs/." },
  // High-frequency English core vocabulary for 0ms instant lookup
  i: { us: "aɪ", uk: "aɪ", pos: "pron", vi: "tôi", syllables: "I" },
  a: { us: "ə", uk: "ə", pos: "det", vi: "một", syllables: "a" },
  an: { us: "æn", uk: "æn", pos: "det", vi: "một", syllables: "an" },
  in: { us: "ɪn", uk: "ɪn", pos: "prep", vi: "trong", syllables: "in" },
  on: { us: "ɑːn", uk: "ɒn", pos: "prep", vi: "trên", syllables: "on" },
  of: { us: "ʌv", uk: "ɒv", pos: "prep", vi: "của", syllables: "of" },
  for: { us: "fɔːr", uk: "fɔː", pos: "prep", vi: "cho / vì", syllables: "for" },
  with: { us: "wɪð", uk: "wɪð", pos: "prep", vi: "với", syllables: "with" },
  by: { us: "baɪ", uk: "baɪ", pos: "prep", vi: "bởi / bằng", syllables: "by" },
  from: { us: "frʌm", uk: "frɒm", pos: "prep", vi: "từ", syllables: "from" },
  about: { us: "əˈbaʊt", uk: "əˈbaʊt", pos: "prep", vi: "về / khoảng", syllables: "a·bout" },
  into: { us: "ˈɪntuː", uk: "ˈɪntuː", pos: "prep", vi: "vào trong", syllables: "in·to" },
  through: { us: "θruː", uk: "θruː", pos: "prep", vi: "xuyên qua", syllables: "through" },
  after: { us: "ˈæftər", uk: "ˈɑːftə", pos: "prep", vi: "sau khi", syllables: "af·ter" },
  over: { us: "ˈoʊvər", uk: "ˈəʊvə", pos: "prep", vi: "hơn / qua", syllables: "o·ver" },
  between: { us: "bɪˈtwiːn", uk: "bɪˈtwiːn", pos: "prep", vi: "ở giữa", syllables: "be·tween" },
  out: { us: "aʊt", uk: "aʊt", pos: "adv", vi: "ngoài", syllables: "out" },
  against: { us: "əˈɡenst", uk: "əˈɡenst", pos: "prep", vi: "chống lại", syllables: "a·gainst" },
  during: { us: "ˈdʊrɪŋ", uk: "ˈdjʊərɪŋ", pos: "prep", vi: "trong suốt", syllables: "dur·ing" },
  without: { us: "wɪˈðaʊt", uk: "wɪˈðaʊt", pos: "prep", vi: "không có", syllables: "with·out" },
  before: { us: "bɪˈfɔːr", uk: "bɪˈfɔː", pos: "prep", vi: "trước khi", syllables: "be·fore" },
  under: { us: "ˈʌndər", uk: "ˈʌndə", pos: "prep", vi: "dưới", syllables: "un·der" },
  around: { us: "əˈraʊnd", uk: "əˈraʊnd", pos: "prep", vi: "xung quanh", syllables: "a·round" },
  among: { us: "əˈmʌŋ", uk: "əˈmʌŋ", pos: "prep", vi: "trong số", syllables: "a·mong" },
  he: { us: "hiː", uk: "hiː", pos: "pron", vi: "anh ấy", syllables: "he" },
  she: { us: "ʃiː", uk: "ʃiː", pos: "pron", vi: "cô ấy", syllables: "she" },
  it: { us: "ɪt", uk: "ɪt", pos: "pron", vi: "nó", syllables: "it" },
  we: { us: "wiː", uk: "wiː", pos: "pron", vi: "chúng tôi", syllables: "we" },
  they: { us: "ðeɪ", uk: "ðeɪ", pos: "pron", vi: "họ / chúng", syllables: "they" },
  me: { us: "miː", uk: "miː", pos: "pron", vi: "tôi", syllables: "me" },
  him: { us: "hɪm", uk: "hɪm", pos: "pron", vi: "anh ấy", syllables: "him" },
  her: { us: "hɜːr", uk: "hɜː", pos: "pron", vi: "cô ấy / của cô ấy", syllables: "her" },
  us: { us: "ʌs", uk: "ʌs", pos: "pron", vi: "chúng tôi", syllables: "us" },
  them: { us: "ðem", uk: "ðem", pos: "pron", vi: "họ", syllables: "them" },
  my: { us: "maɪ", uk: "maɪ", pos: "det", vi: "của tôi", syllables: "my" },
  your: { us: "jʊr", uk: "jɔː", pos: "det", vi: "của bạn", syllables: "your" },
  his: { us: "hɪz", uk: "hɪz", pos: "det", vi: "của anh ấy", syllables: "his" },
  our: { us: "ˈaʊər", uk: "ˈaʊə", pos: "det", vi: "của chúng tôi", syllables: "our" },
  their: { us: "ðer", uk: "ðeə", pos: "det", vi: "của họ", syllables: "their" },
  its: { us: "ɪts", uk: "ɪts", pos: "det", vi: "của nó", syllables: "its" },
  this: { us: "ðɪs", uk: "ðɪs", pos: "det", vi: "này", syllables: "this" },
  that: { us: "ðæt", uk: "ðæt", pos: "conj/det", vi: "đó / rằng", syllables: "that" },
  these: { us: "ðiːz", uk: "ðiːz", pos: "det", vi: "những cái này", syllables: "these" },
  those: { us: "ðoʊz", uk: "ðəʊz", pos: "det", vi: "những cái đó", syllables: "those" },
  who: { us: "huː", uk: "huː", pos: "pron", vi: "ai / người mà", syllables: "who" },
  what: { us: "wʌt", uk: "wɒt", pos: "pron", vi: "cái gì", syllables: "what" },
  which: { us: "wɪtʃ", uk: "wɪtʃ", pos: "pron", vi: "cái nào", syllables: "which" },
  where: { us: "wer", uk: "weə", pos: "adv", vi: "ở đâu", syllables: "where" },
  when: { us: "wen", uk: "wen", pos: "adv", vi: "khi nào", syllables: "when" },
  why: { us: "waɪ", uk: "waɪ", pos: "adv", vi: "tại sao", syllables: "why" },
  how: { us: "haʊ", uk: "haʊ", pos: "adv", vi: "như thế nào", syllables: "how" },
  are: { us: "ɑːr", uk: "ɑː", pos: "verb", vi: "là", syllables: "are" },
  was: { us: "wʌz", uk: "wɒz", pos: "verb", vi: "đã là", syllables: "was" },
  were: { us: "wɜːr", uk: "wɜː", pos: "verb", vi: "đã là", syllables: "were" },
  been: { us: "bɪn", uk: "biːn", pos: "verb", vi: "đã từng", syllables: "been" },
  have: { us: "hæv", uk: "hæv", pos: "verb", vi: "có", syllables: "have" },
  has: { us: "hæz", uk: "hæz", pos: "verb", vi: "có", syllables: "has" },
  had: { us: "hæd", uk: "hæd", pos: "verb", vi: "đã có", syllables: "had" },
  do: { us: "duː", uk: "duː", pos: "verb", vi: "làm", syllables: "do" },
  does: { us: "dʌz", uk: "dʌz", pos: "verb", vi: "làm", syllables: "does" },
  did: { us: "dɪd", uk: "dɪd", pos: "verb", vi: "đã làm", syllables: "did" },
  will: { us: "wɪl", uk: "wɪl", pos: "modal", vi: "sẽ", syllables: "will" },
  would: { us: "wʊd", uk: "wʊd", pos: "modal", vi: "sẽ", syllables: "would" },
  should: { us: "ʃʊd", uk: "ʃʊd", pos: "modal", vi: "nên", syllables: "should" },
  could: { us: "kʊd", uk: "kʊd", pos: "modal", vi: "có thể", syllables: "could" },
  may: { us: "meɪ", uk: "meɪ", pos: "modal", vi: "có thể", syllables: "may" },
  might: { us: "maɪt", uk: "maɪt", pos: "modal", vi: "có lẽ", syllables: "might" },
  must: { us: "mʌst", uk: "mʌst", pos: "modal", vi: "phải", syllables: "must" },
  not: { us: "nɑːt", uk: "nɒt", pos: "adv", vi: "không", syllables: "not" },
  no: { us: "noʊ", uk: "nəʊ", pos: "det", vi: "không", syllables: "no" },
  yes: { us: "jes", uk: "jes", pos: "adv", vi: "vâng / có", syllables: "yes" },
  but: { us: "bʌt", uk: "bʌt", pos: "conj", vi: "nhưng", syllables: "but" },
  or: { us: "ɔːr", uk: "ɔː", pos: "conj", vi: "hoặc", syllables: "or" },
  if: { us: "ɪf", uk: "ɪf", pos: "conj", vi: "nếu", syllables: "if" },
  because: { us: "bɪˈkɔːz", uk: "bɪˈkɒz", pos: "conj", vi: "bởi vì", syllables: "be·cause" },
  as: { us: "æz", uk: "æz", pos: "conj", vi: "như / khi", syllables: "as" },
  so: { us: "soʊ", uk: "səʊ", pos: "adv", vi: "vì vậy / rất", syllables: "so" },
  than: { us: "ðæn", uk: "ðæn", pos: "conj", vi: "hơn", syllables: "than" },
  too: { us: "tuː", uk: "tuː", pos: "adv", vi: "quá / cũng", syllables: "too" },
  very: { us: "ˈveri", uk: "ˈveri", pos: "adv", vi: "rất", syllables: "ver·y" },
  just: { us: "dʒʌst", uk: "dʒʌst", pos: "adv", vi: "chỉ / vừa mới", syllables: "just" },
  now: { us: "naʊ", uk: "naʊ", pos: "adv", vi: "bây giờ", syllables: "now" },
  also: { us: "ˈɔːlsoʊ", uk: "ˈɔːlsəʊ", pos: "adv", vi: "cũng", syllables: "al·so" },
  more: { us: "mɔːr", uk: "mɔː", pos: "adv", vi: "nhiều hơn", syllables: "more" },
  most: { us: "moʊst", uk: "məʊst", pos: "adv", vi: "nhất / hầu hết", syllables: "most" },
  other: { us: "ˈʌðər", uk: "ˈʌðə", pos: "adj", vi: "khác", syllables: "oth·er" },
  some: { us: "sʌm", uk: "sʌm", pos: "det", vi: "một số", syllables: "some" },
  any: { us: "ˈeni", uk: "ˈeni", pos: "det", vi: "bất kỳ", syllables: "an·y" },
  all: { us: "ɔːl", uk: "ɔːl", pos: "det", vi: "tất cả", syllables: "all" },
  many: { us: "ˈmeni", uk: "ˈmeni", pos: "det", vi: "nhiều", syllables: "man·y" },
  much: { us: "mʌtʃ", uk: "mʌtʃ", pos: "det", vi: "nhiều", syllables: "much" },
  well: { us: "wel", uk: "wel", pos: "adv", vi: "tốt", syllables: "well" },
  only: { us: "ˈoʊnli", uk: "ˈəʊnli", pos: "adv", vi: "chỉ", syllables: "on·ly" },
  then: { us: "ðen", uk: "ðen", pos: "adv", vi: "sau đó", syllables: "then" },
  there: { us: "ðer", uk: "ðeə", pos: "adv", vi: "ở đó", syllables: "there" },
  here: { us: "hɪr", uk: "hɪə", pos: "adv", vi: "ở đây", syllables: "here" },
  even: { us: "ˈiːvn", uk: "ˈiːvn", pos: "adv", vi: "thậm chí", syllables: "e·ven" },
  back: { us: "bæk", uk: "bæk", pos: "adv", vi: "quay lại", syllables: "back" },
  still: { us: "stɪl", uk: "stɪl", pos: "adv", vi: "vẫn", syllables: "still" },
  way: { us: "weɪ", uk: "weɪ", pos: "noun", vi: "cách / đường", syllables: "way" },
  new: { us: "nuː", uk: "njuː", pos: "adj", vi: "mới", syllables: "new" },
  good: { us: "ɡʊd", uk: "ɡʊd", pos: "adj", vi: "tốt", syllables: "good" },
  great: { us: "ɡreɪt", uk: "ɡreɪt", pos: "adj", vi: "tuyệt vời", syllables: "great" },
  time: { us: "taɪm", uk: "taɪm", pos: "noun", vi: "thời gian", syllables: "time" },
  day: { us: "deɪ", uk: "deɪ", pos: "noun", vi: "ngày", syllables: "day" },
  year: { us: "jɪr", uk: "jɪə", pos: "noun", vi: "năm", syllables: "year" },
  work: { us: "wɜːrk", uk: "wɜːk", pos: "noun/verb", vi: "công việc / làm việc", syllables: "work" },
  life: { us: "laɪf", uk: "laɪf", pos: "noun", vi: "cuộc sống", syllables: "life" },
  world: { us: "wɜːrld", uk: "wɜːld", pos: "noun", vi: "thế giới", syllables: "world" },
  people: { us: "ˈpiːpl", uk: "ˈpiːpl", pos: "noun", vi: "mọi người", syllables: "peo·ple" },
  know: { us: "noʊ", uk: "nəʊ", pos: "verb", vi: "biết", syllables: "know" },
  think: { us: "θɪŋk", uk: "θɪŋk", pos: "verb", vi: "nghĩ", syllables: "think" },
  take: { us: "teɪk", uk: "teɪk", pos: "verb", vi: "lấy / mang", syllables: "take" },
  see: { us: "siː", uk: "siː", pos: "verb", vi: "nhìn thấy", syllables: "see" },
  come: { us: "kʌm", uk: "kʌm", pos: "verb", vi: "đến", syllables: "come" },
  want: { us: "wɑːnt", uk: "wɒnt", pos: "verb", vi: "muốn", syllables: "want" },
  use: { us: "juːz", uk: "juːz", pos: "verb", vi: "sử dụng", syllables: "use" },
  find: { us: "faɪnd", uk: "faɪnd", pos: "verb", vi: "tìm thấy", syllables: "find" },
  give: { us: "ɡɪv", uk: "ɡɪv", pos: "verb", vi: "đưa / cho", syllables: "give" },
  tell: { us: "tel", uk: "tel", pos: "verb", vi: "kể / bảo", syllables: "tell" },
  need: { us: "niːd", uk: "niːd", pos: "verb", vi: "cần", syllables: "need" },
  feel: { us: "fiːl", uk: "fiːl", pos: "verb", vi: "cảm thấy", syllables: "feel" },
  become: { us: "bɪˈkʌm", uk: "bɪˈkʌm", pos: "verb", vi: "trở thành", syllables: "be·come" },
  make: { us: "meɪk", uk: "meɪk", pos: "verb", vi: "làm / tạo ra", syllables: "make" },
  go: { us: "ɡoʊ", uk: "ɡəʊ", pos: "verb", vi: "đi", syllables: "go" },
  get: { us: "ɡet", uk: "ɡet", pos: "verb", vi: "nhận / có được", syllables: "get" },
  help: { us: "help", uk: "help", pos: "verb", vi: "giúp đỡ", syllables: "help" },
  learn: { us: "lɜːrn", uk: "lɜːn", pos: "verb", vi: "học", syllables: "learn" },
  schedule: { us: "ˈskedʒuːl", uk: "ˈʃedjuːl", pos: "noun/verb", vi: "lịch trình", syllables: "sched·ule", tip: "US đọc /ˈskedʒ-/, UK đọc /ˈʃed-/" },
  entrepreneur: { us: "ˌɑːntrəprəˈnɜːr", uk: "ˌɒntrəprəˈnɜː", pos: "noun", vi: "doanh nhân khởi nghiệp", syllables: "en·tre·pre·neur", tip: "Trọng âm rơi vào âm tiết cuối /-ˈnɜːr/." },
  // News & Long-Passage Vocabulary
  decision: { us: "dɪˈsɪʒn", uk: "dɪˈsɪʒn", pos: "noun", vi: "quyết định", syllables: "de·ci·sion", tip: "Âm giữa đọc là /ʒ/ (rung nhẹ như 'vision'), nhấn âm 2." },
  latest: { us: "ˈleɪtɪst", uk: "ˈleɪtɪst", pos: "adj", vi: "mới nhất", syllables: "lat·est", tip: "Nhấn âm đầu /ˈleɪt/." },
  legal: { us: "ˈliːɡl", uk: "ˈliːɡl", pos: "adj", vi: "pháp lý", syllables: "le·gal", tip: "Nguyên âm dài /iː/, kết thúc bằng âm /l/." },
  setback: { us: "ˈsetbæk", uk: "ˈsetbæk", pos: "noun", vi: "bước lùi / thất bại", syllables: "set·back", tip: "Danh từ ghép nhấn trọng âm ở âm đầu /ˈset/." },
  president: { us: "ˈprezɪdənt", uk: "ˈprezɪdənt", pos: "noun", vi: "tổng thống / chủ tịch", syllables: "pres·i·dent", tip: "Chữ 's' đọc là âm hữu thanh /z/, nhấn âm đầu." },
  donald: { us: "ˈdɑːnld", uk: "ˈdɒnld", pos: "noun", vi: "Donald", syllables: "Don·ald" },
  trump: { us: "trʌmp", uk: "trʌmp", pos: "noun", vi: "Trump", syllables: "Trump" },
  effort: { us: "ˈefərt", uk: "ˈefət", pos: "noun", vi: "nỗ lực", syllables: "ef·fort", tip: "Nhấn âm đầu /ˈef/." },
  efforts: { us: "ˈefərts", uk: "ˈefəts", pos: "noun", vi: "những nỗ lực", syllables: "ef·forts", tip: "Kết thúc bằng cụm phụ âm vô thanh /ts/." },
  expand: { us: "ɪkˈspænd", uk: "ɪkˈspænd", pos: "verb", vi: "mở rộng", syllables: "ex·pand", tip: "Nhấn âm thứ 2 /ˈspænd/." },
  federal: { us: "ˈfedərəl", uk: "ˈfedərəl", pos: "adj", vi: "liên bang", syllables: "fed·er·al", tip: "Thường đọc gọn thành 2 âm tiết /ˈfedrəl/." },
  control: { us: "kənˈtroʊl", uk: "kənˈtrəʊl", pos: "noun/verb", vi: "quyền kiểm soát", syllables: "con·trol", tip: "Nhấn âm thứ 2 /ˈtroʊl/, âm đầu giảm thành /kən/." },
  state: { us: "steɪt", uk: "steɪt", pos: "noun", vi: "bang / nhà nước", syllables: "state" },
  run: { us: "rʌn", uk: "rʌn", pos: "verb", vi: "điều hành / chạy", syllables: "run" },
  election: { us: "ɪˈlekʃn", uk: "ɪˈlekʃn", pos: "noun", vi: "cuộc bầu cử", syllables: "e·lec·tion", tip: "Nhấn âm 2 /ˈlek/, đuôi -tion đọc là /ʃn/." },
  elections: { us: "ɪˈlekʃnz", uk: "ɪˈlekʃnz", pos: "noun", vi: "các cuộc bầu cử", syllables: "e·lec·tions", tip: "Âm 's' sau /n/ đọc là âm hữu thanh /z/." },
  ahead: { us: "əˈhed", uk: "əˈhed", pos: "adv", vi: "trước / phía trước", syllables: "a·head", tip: "Nhấn âm 2 /ˈhed/." },
  vote: { us: "voʊt", uk: "vəʊt", pos: "noun/verb", vi: "bỏ phiếu", syllables: "vote" },
  voting: { us: "ˈvoʊtɪŋ", uk: "ˈvəʊtɪŋ", pos: "noun", vi: "việc bỏ phiếu", syllables: "vot·ing", tip: "Giọng Mỹ âm /t/ giữa 2 nguyên âm đọc thành flap T nhẹ." },
  decide: { us: "dɪˈsaɪd", uk: "dɪˈsaɪd", pos: "verb", vi: "quyết định", syllables: "de·cide", tip: "Nhấn âm 2 /ˈsaɪd/." },
  congress: { us: "ˈkɑːŋɡrəs", uk: "ˈkɒŋɡres", pos: "noun", vi: "Quốc hội", syllables: "Con·gress", tip: "Nhấn âm đầu /ˈkɑːŋ/." },
  rest: { us: "rest", uk: "rest", pos: "noun", vi: "phần còn lại", syllables: "rest" },
  term: { us: "tɜːrm", uk: "tɜːm", pos: "noun", vi: "nhiệm kỳ / kỳ hạn", syllables: "term" },
  republican: { us: "rɪˈpʌblɪkən", uk: "rɪˈpʌblɪkən", pos: "adj/noun", vi: "Đảng Cộng hòa", syllables: "Re·pub·li·can", tip: "Nhấn trọng âm vào âm tiết thứ 2 /ˈpʌb/." },
  administration: { us: "ədˌmɪnɪˈstreɪʃn", uk: "ədˌmɪnɪˈstreɪʃn", pos: "noun", vi: "chính quyền", syllables: "ad·min·is·tra·tion", tip: "Trọng âm chính rơi vào âm thứ 4 /ˈstreɪ/." },
  sue: { us: "suː", uk: "sjuː", pos: "verb", vi: "kiện", syllables: "sue" },
  sued: { us: "suːd", uk: "sjuːd", pos: "verb", vi: "đã kiện", syllables: "sued", tip: "Nguyên âm dài /uː/ kết thúc bằng âm /d/." },
  official: { us: "əˈfɪʃl", uk: "əˈfɪʃl", pos: "noun/adj", vi: "quan chức / chính thức", syllables: "of·fi·cial", tip: "Nhấn âm 2 /ˈfɪʃ/." },
  officials: { us: "əˈfɪʃlz", uk: "əˈfɪʃlz", pos: "noun", vi: "các quan chức", syllables: "of·fi·cials", tip: "Nhấn âm 2 /ˈfɪʃ/, đuôi -s đọc là /z/." },
  democratic: { us: "ˌdeməˈkrætɪk", uk: "ˌdeməˈkrætɪk", pos: "adj", vi: "Dân chủ", syllables: "Dem·o·crat·ic", tip: "Trọng âm chính rơi vào âm 3 /ˈkræt/." },
  mid: { us: "mɪd", uk: "mɪd", pos: "adj", vi: "giữa", syllables: "mid" },
  october: { us: "ɑːkˈtoʊbər", uk: "ɒkˈtəʊbə", pos: "noun", vi: "tháng Mười", syllables: "Oc·to·ber", tip: "Nhấn âm 2 /ˈtoʊ/." },
  accuse: { us: "əˈkjuːz", uk: "əˈkjuːz", pos: "verb", vi: "cáo buộc", syllables: "ac·cuse" },
  accusing: { us: "əˈkjuːzɪŋ", uk: "əˈkjuːzɪŋ", pos: "verb", vi: "cáo buộc", syllables: "ac·cus·ing", tip: "Nhấn âm 2 /ˈkjuːz/." },
  fail: { us: "feɪl", uk: "feɪl", pos: "verb", vi: "thất bại / không làm được", syllables: "fail" },
  failing: { us: "ˈfeɪlɪŋ", uk: "ˈfeɪlɪŋ", pos: "verb", vi: "không đạt / thất bại", syllables: "fail·ing" },
  meet: { us: "miːt", uk: "miːt", pos: "verb", vi: "đáp ứng / gặp", syllables: "meet" },
  hour: { us: "ˈaʊər", uk: "ˈaʊə", pos: "noun", vi: "giờ", syllables: "hour", tip: "Âm 'h' đầu là âm câm, đọc giống từ 'our'." },
  deadline: { us: "ˈdedlaɪn", uk: "ˈdedlaɪn", pos: "noun", vi: "hạn chót", syllables: "dead·line", tip: "Nhấn âm đầu /ˈded/." },
  review: { us: "rɪˈvjuː", uk: "rɪˈvjuː", pos: "verb/noun", vi: "rà soát / xem xét", syllables: "re·view", tip: "Nhấn âm 2 /ˈvjuː/." },
  list: { us: "lɪst", uk: "lɪst", pos: "noun", vi: "danh sách", syllables: "list" },
  allege: { us: "əˈledʒ", uk: "əˈledʒ", pos: "verb", vi: "cáo buộc", syllables: "al·lege" },
  alleged: { us: "əˈledʒd", uk: "əˈledʒd", pos: "verb/adj", vi: "cáo buộc / bị cho là", syllables: "al·leged", tip: "Chữ 'g' đọc là /dʒ/, kết thúc bằng /d/." },
  likely: { us: "ˈlaɪkli", uk: "ˈlaɪkli", pos: "adj/adv", vi: "có khả năng", syllables: "like·ly" },
  noncitizen: { us: "ˌnɑːnˈsɪtɪzn", uk: "ˌnɒnˈsɪtɪzn", pos: "noun", vi: "người không phải công dân", syllables: "non·cit·i·zen" },
  noncitizens: { us: "ˌnɑːnˈsɪtɪznz", uk: "ˌnɒnˈsɪtɪznz", pos: "noun", vi: "những người không phải công dân", syllables: "non·cit·i·zens" },
  voter: { us: "ˈvoʊtər", uk: "ˈvəʊtə", pos: "noun", vi: "cử tri", syllables: "vot·er" },
  voters: { us: "ˈvoʊtərz", uk: "ˈvəʊtəz", pos: "noun", vi: "các cử tri", syllables: "vot·ers" },
  roll: { us: "roʊl", uk: "rəʊl", pos: "noun", vi: "danh sách / cuộn", syllables: "roll" },
  rolls: { us: "roʊlz", uk: "rəʊlz", pos: "noun", vi: "danh sách đăng ký", syllables: "rolls" },
  ask: { us: "æsk", uk: "ɑːsk", pos: "verb", vi: "yêu cầu / hỏi", syllables: "ask" },
  asked: { us: "æskt", uk: "ɑːskt", pos: "verb", vi: "đã yêu cầu", syllables: "asked", tip: "Đuôi -ed sau /k/ đọc là âm vô thanh /t/ (/æskt/)." },
  judge: { us: "dʒʌdʒ", uk: "dʒʌdʒ", pos: "noun", vi: "thẩm phán", syllables: "judge", tip: "Bắt đầu và kết thúc đều bằng âm /dʒ/." },
  require: { us: "rɪˈkwaɪər", uk: "rɪˈkwaɪə", pos: "verb", vi: "yêu cầu / bắt buộc", syllables: "re·quire", tip: "Nhấn âm 2 /ˈkwaɪər/." },
  wait: { us: "weɪt", uk: "weɪt", pos: "verb", vi: "chờ đợi", syllables: "wait" },
  count: { us: "kaʊnt", uk: "kaʊnt", pos: "verb", vi: "kiểm đếm", syllables: "count" },
  ballot: { us: "ˈbælət", uk: "ˈbælət", pos: "noun", vi: "lá phiếu", syllables: "bal·lot" },
  ballots: { us: "ˈbæləts", uk: "ˈbæləts", pos: "noun", vi: "các lá phiếu", syllables: "bal·lots", tip: "Nhấn âm đầu /ˈbæl/, kết thúc bằng /ts/." },
  until: { us: "ənˈtɪl", uk: "ənˈtɪl", pos: "prep/conj", vi: "cho đến khi", syllables: "un·til", tip: "Nhấn âm 2 /ˈtɪl/." },
  immigration: { us: "ˌɪmɪˈɡreɪʃn", uk: "ˌɪmɪˈɡreɪʃn", pos: "noun", vi: "nhập cư / di trú", syllables: "im·mi·gra·tion", tip: "Trọng âm chính rơi vào âm thứ 3 /ˈɡreɪ/." },
  status: { us: "ˈsteɪtəs", uk: "ˈsteɪtəs", pos: "noun", vi: "tình trạng / tư cách", syllables: "sta·tus", tip: "Có thể đọc /ˈsteɪtəs/ hoặc /ˈstætəs/." },
  verify: { us: "ˈverɪfaɪ", uk: "ˈverɪfaɪ", pos: "verb", vi: "xác minh", syllables: "ver·i·fy" },
  verified: { us: "ˈverɪfaɪd", uk: "ˈverɪfaɪd", pos: "verb", vi: "được xác minh", syllables: "ver·i·fied", tip: "Nhấn âm đầu /ˈver/, kết thúc bằng /d/." }
};

// Persistent Word IPA Cache & Full Analysis Cache for Sub-100ms Speed
const WORD_CACHE = (() => {
  try {
    return JSON.parse(localStorage.getItem("ipa_word_cache_v2") || "{}");
  } catch (_) {
    return {};
  }
})();

function saveWordCache() {
  try {
    localStorage.setItem("ipa_word_cache_v2", JSON.stringify(WORD_CACHE));
  } catch (_) {}
}

const ANALYSIS_MEMORY_CACHE = new Map();
let currentAnalyzeJobId = 0;

// State
const state = {
  accent: "US", // 'US' | 'UK'
  provider: localStorage.getItem("ipa_ai_provider") || "gemini",
  geminiKey: localStorage.getItem("ipa_gemini_key") || "",
  openaiKey: localStorage.getItem("ipa_openai_key") || "",
  useOpenAiTts: localStorage.getItem("ipa_openai_tts") !== "false",
  currentAnalysis: null,
  selectedTokenIndex: 0,
  activeSentenceIndex: -1, // -1 = All sentences, 0..N = specific sentence index
  voices: [],
  isPlaying: false,
  currentAudio: null,
  isRecording: false,
  recognition: null,
  mediaRecorder: null,
  recordedChunks: [],
  recordedAudioUrl: null,
  spokenTranscript: "",
  lastPronunciationResult: null
};

// DOM Elements
const els = {
  textInput: document.getElementById("textInput"),
  textareaDropZone: document.getElementById("textareaDropZone"),
  btnClear: document.getElementById("btnClear"),
  btnPasteClipboard: document.getElementById("btnPasteClipboard"),
  btnUploadImage: document.getElementById("btnUploadImage"),
  imageFileInput: document.getElementById("imageFileInput"),
  ocrStatusBanner: document.getElementById("ocrStatusBanner"),
  ocrPreviewImg: document.getElementById("ocrPreviewImg"),
  ocrStatusTitle: document.getElementById("ocrStatusTitle"),
  ocrStatusSub: document.getElementById("ocrStatusSub"),
  btnCloseOcrBanner: document.getElementById("btnCloseOcrBanner"),
  textStats: document.getElementById("textStats"),
  btnAnalyze: document.getElementById("btnAnalyze"),
  btnPlayAll: document.getElementById("btnPlayAll"),
  playIcon: document.getElementById("playIcon"),
  playText: document.getElementById("playText"),
  btnStopAudio: document.getElementById("btnStopAudio"),
  btnRecord: document.getElementById("btnRecord"),
  recordIcon: document.getElementById("recordIcon"),
  recordText: document.getElementById("recordText"),
  btnPlayRecorded: document.getElementById("btnPlayRecorded"),
  scoreQuickBadge: document.getElementById("scoreQuickBadge"),
  scoreQuickValue: document.getElementById("scoreQuickValue"),
  pronResultPanel: document.getElementById("pronResultPanel"),
  pronScoreCircle: document.getElementById("pronScoreCircle"),
  pronScorePercent: document.getElementById("pronScorePercent"),
  pronFeedbackTitle: document.getElementById("pronFeedbackTitle"),
  pronSpokenText: document.getElementById("pronSpokenText"),
  pronWordList: document.getElementById("pronWordList"),
  btnRetryRecord: document.getElementById("btnRetryRecord"),
  btnClosePronPanel: document.getElementById("btnClosePronPanel"),
  speedSelect: document.getElementById("speedSelect"),
  voiceSelect: document.getElementById("voiceSelect"),
  loadingState: document.getElementById("loadingState"),
  loadingMessage: document.getElementById("loadingMessage"),
  sentenceFilterBar: document.getElementById("sentenceFilterBar"),
  rubyContainer: document.getElementById("rubyContainer"),
  fullIpaContainer: document.getElementById("fullIpaContainer"),
  fullIpaUS: document.getElementById("fullIpaUS"),
  fullIpaUK: document.getElementById("fullIpaUK"),
  btnViewRuby: document.getElementById("btnViewRuby"),
  btnViewFullIpa: document.getElementById("btnViewFullIpa"),
  wordDetailCard: document.getElementById("wordDetailCard"),
  detailWord: document.getElementById("detailWord"),
  detailPos: document.getElementById("detailPos"),
  detailIpaUS: document.getElementById("detailIpaUS"),
  detailIpaUK: document.getElementById("detailIpaUK"),
  detailMeaning: document.getElementById("detailMeaning"),
  detailSyllables: document.getElementById("detailSyllables"),
  detailTip: document.getElementById("detailTip"),
  btnSpeakWordUS: document.getElementById("btnSpeakWordUS"),
  btnSpeakWordUK: document.getElementById("btnSpeakWordUK"),
  btnSpeakWordSlow: document.getElementById("btnSpeakWordSlow"),
  translationOutput: document.getElementById("translationOutput"),
  btnCopyTranslation: document.getElementById("btnCopyTranslation"),
  coachingList: document.getElementById("coachingList"),
  btnApiStatus: document.getElementById("btnApiStatus"),
  apiStatusDot: document.getElementById("apiStatusDot"),
  apiStatusText: document.getElementById("apiStatusText"),
  settingsModal: document.getElementById("settingsModal"),
  btnCloseModal: document.getElementById("btnCloseModal"),
  providerSelect: document.getElementById("providerSelect"),
  geminiKeyGroup: document.getElementById("geminiKeyGroup"),
  openaiKeyGroup: document.getElementById("openaiKeyGroup"),
  geminiKeyInput: document.getElementById("geminiKeyInput"),
  openaiKeyInput: document.getElementById("openaiKeyInput"),
  useOpenAiTts: document.getElementById("useOpenAiTts"),
  btnSaveSettings: document.getElementById("btnSaveSettings")
};

// ============================================================================
// Initialization
// ============================================================================
function init() {
  updateApiStatusUI();
  updateStats();
  initSpeechVoices();
  bindEvents();
  // Analyze initial sample text automatically
  analyzeCurrentText();
}

function bindEvents() {
  els.textInput.addEventListener("input", updateStats);

  els.textInput.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      analyzeCurrentText();
    }
  });

  els.btnClear.addEventListener("click", () => {
    els.textInput.value = "";
    updateStats();
    els.textInput.focus();
  });

  // Paste from Clipboard button (supports both Image and Text)
  els.btnPasteClipboard.addEventListener("click", handlePasteFromClipboardButton);

  // Upload Image button for OCR
  els.btnUploadImage.addEventListener("click", () => {
    els.imageFileInput.click();
  });

  els.imageFileInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageToText(file);
      els.imageFileInput.value = "";
    }
  });

  els.btnCloseOcrBanner.addEventListener("click", () => {
    els.ocrStatusBanner.classList.add("hidden");
  });

  // Global & Textarea Paste listener (Ctrl+V / Cmd+V for Image or Text)
  document.addEventListener("paste", (e) => {
    // Ignore paste inside API key modal inputs
    if (e.target && (e.target.id === "geminiKeyInput" || e.target.id === "openaiKeyInput")) {
      return;
    }

    const items = e.clipboardData?.items || [];
    for (const item of items) {
      if (item.type && item.type.startsWith("image/")) {
        e.preventDefault();
        const blob = item.getAsFile();
        if (blob) processImageToText(blob);
        return;
      }
    }

    // If pasting plain text outside the textarea, put it into textInput & analyze
    if (e.target !== els.textInput) {
      const pastedText = e.clipboardData?.getData("text/plain")?.trim();
      if (pastedText) {
        e.preventDefault();
        els.textInput.value = cleanExtractedText(pastedText);
        updateStats();
        analyzeCurrentText();
      }
    } else {
      // Pasting text directly inside textInput -> auto-update stats & analyze
      setTimeout(() => {
        updateStats();
        analyzeCurrentText();
      }, 60);
    }
  });

  // Drag & Drop Image onto Textarea
  els.textareaDropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    els.textareaDropZone.classList.add("drag-over");
  });

  els.textareaDropZone.addEventListener("dragleave", () => {
    els.textareaDropZone.classList.remove("drag-over");
  });

  els.textareaDropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    els.textareaDropZone.classList.remove("drag-over");
    const file = e.dataTransfer?.files?.[0];
    if (file && file.type.startsWith("image/")) {
      processImageToText(file);
    }
  });

  // Sample buttons
  document.querySelectorAll("[data-sample]").forEach((btn) => {
    btn.addEventListener("click", () => {
      els.textInput.value = btn.getAttribute("data-sample");
      updateStats();
      analyzeCurrentText();
    });
  });

  // Accent toggle
  document.querySelectorAll(".segment[data-accent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".segment[data-accent]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.accent = btn.getAttribute("data-accent");
      populateVoiceSelect();
      renderRubyTokens();
    });
  });

  // Analyze button
  els.btnAnalyze.addEventListener("click", analyzeCurrentText);

  // Audio controls
  els.btnPlayAll.addEventListener("click", () => {
    if (state.isPlaying) {
      stopAllAudio();
    } else {
      const text = getActiveTargetText();
      if (text) speakText(text, state.accent, parseFloat(els.speedSelect.value), true);
    }
  });

  els.btnStopAudio.addEventListener("click", stopAllAudio);

  // Pronunciation Recording & Accuracy Scoring controls
  els.btnRecord.addEventListener("click", toggleRecording);

  els.btnRetryRecord.addEventListener("click", () => {
    startRecording();
  });

  els.btnPlayRecorded.addEventListener("click", () => {
    if (!state.recordedAudioUrl) return;
    stopAllAudio();
    const audio = new Audio(state.recordedAudioUrl);
    state.currentAudio = audio;
    audio.play().catch(() => {});
  });

  els.scoreQuickBadge.addEventListener("click", () => {
    els.pronResultPanel.classList.toggle("hidden");
  });

  els.btnClosePronPanel.addEventListener("click", () => {
    els.pronResultPanel.classList.add("hidden");
  });

  // View toggle (Ruby vs Full IPA)
  els.btnViewRuby.addEventListener("click", () => {
    els.btnViewRuby.classList.add("active");
    els.btnViewFullIpa.classList.remove("active");
    els.rubyContainer.classList.remove("hidden");
    els.fullIpaContainer.classList.add("hidden");
  });

  els.btnViewFullIpa.addEventListener("click", () => {
    els.btnViewFullIpa.classList.add("active");
    els.btnViewRuby.classList.remove("active");
    els.fullIpaContainer.classList.remove("hidden");
    els.rubyContainer.classList.add("hidden");
  });

  // Selected word audio buttons
  els.btnSpeakWordUS.addEventListener("click", () => {
    const token = getSelectedToken();
    if (token) speakSingleWord(token.cleanWord || token.word, "US", 1.0, token.audioUrlUS);
  });

  els.btnSpeakWordUK.addEventListener("click", () => {
    const token = getSelectedToken();
    if (token) speakSingleWord(token.cleanWord || token.word, "UK", 1.0, token.audioUrlUK);
  });

  els.btnSpeakWordSlow.addEventListener("click", () => {
    const token = getSelectedToken();
    if (token) speakSingleWord(token.cleanWord || token.word, state.accent, 0.55);
  });

  // Copy translation
  els.btnCopyTranslation.addEventListener("click", () => {
    const text = els.translationOutput.innerText;
    navigator.clipboard.writeText(text);
    const orig = els.btnCopyTranslation.innerText;
    els.btnCopyTranslation.innerText = "✓ Đã chép";
    setTimeout(() => (els.btnCopyTranslation.innerText = orig), 1500);
  });

  // Modal settings
  els.btnApiStatus.addEventListener("click", openSettingsModal);
  els.btnCloseModal.addEventListener("click", closeSettingsModal);
  els.settingsModal.addEventListener("click", (e) => {
    if (e.target === els.settingsModal) closeSettingsModal();
  });

  els.providerSelect.addEventListener("change", updateModalProviderFields);
  els.btnSaveSettings.addEventListener("click", saveSettings);
}

function updateStats() {
  const raw = els.textInput.value.trim();
  const words = raw ? raw.split(/\s+/).length : 0;
  els.textStats.textContent = `${words} từ • ${raw.length} ký tự`;
}

// ============================================================================
// Settings & AI Provider Management
// ============================================================================
function openSettingsModal() {
  els.providerSelect.value = state.provider;
  els.geminiKeyInput.value = state.geminiKey;
  els.openaiKeyInput.value = state.openaiKey;
  els.useOpenAiTts.checked = state.useOpenAiTts;
  updateModalProviderFields();
  els.settingsModal.classList.remove("hidden");
}

function closeSettingsModal() {
  els.settingsModal.classList.add("hidden");
}

function updateModalProviderFields() {
  const p = els.providerSelect.value;
  els.geminiKeyGroup.classList.toggle("hidden", p !== "gemini");
  els.openaiKeyGroup.classList.toggle("hidden", p !== "openai");
}

function saveSettings() {
  state.provider = els.providerSelect.value;
  state.geminiKey = els.geminiKeyInput.value.trim();
  state.openaiKey = els.openaiKeyInput.value.trim();
  state.useOpenAiTts = els.useOpenAiTts.checked;

  localStorage.setItem("ipa_ai_provider", state.provider);
  localStorage.setItem("ipa_gemini_key", state.geminiKey);
  localStorage.setItem("ipa_openai_key", state.openaiKey);
  localStorage.setItem("ipa_openai_tts", String(state.useOpenAiTts));

  updateApiStatusUI();
  closeSettingsModal();
  analyzeCurrentText();
}

function updateApiStatusUI() {
  const hasGemini = state.provider === "gemini" && state.geminiKey.length > 10;
  const hasOpenAI = state.provider === "openai" && state.openaiKey.length > 10;

  if (hasGemini) {
    els.apiStatusDot.classList.add("connected");
    els.apiStatusText.textContent = "Gemini AI: Đã kết nối";
  } else if (hasOpenAI) {
    els.apiStatusDot.classList.add("connected");
    els.apiStatusText.textContent = "OpenAI: Đã kết nối";
  } else {
    els.apiStatusDot.classList.remove("connected");
    els.apiStatusText.textContent = "Chế độ: Từ điển + Dịch (Nhấn để thêm AI Key)";
  }
}

// ============================================================================
// Ultra-Fast Core Analysis Pipeline (Optimized for Long Multi-Paragraph Texts)
// ============================================================================
const PRESET_TRANSLATIONS = {
  "Although learning English pronunciation can be challenging at first, understanding the International Phonetic Alphabet helps you speak clearly and confidently.":
    "Mặc dù việc học phát âm tiếng Anh ban đầu có thể đầy thử thách, nhưng việc hiểu Bảng chữ cái Ngữ âm Quốc tế (IPA) sẽ giúp bạn nói rõ ràng và tự tin.",
  "Practice makes perfect. Consistency is the key to mastering English pronunciation.":
    "Có công mài sắt có ngày nên kim. Sự kiên trì chính là chìa khóa để làm chủ phát âm tiếng Anh.",
  serendipity: "Cơ duyên tình cờ may mắn (sự phát hiện tình cờ những điều thú vị, tốt đẹp).",
  "The decision is the latest legal setback for President Donald Trump in his efforts to expand federal control over state-run elections ahead of voting that will decide control of Congress for the rest of his term.\n\nThe Republican administration sued election officials in the Democratic state in mid-October, accusing the officials of failing to meet a 48-hour deadline to review a list of 20,000 people it alleged were likely noncitizens on the state's voter rolls. The administration had asked the judge to require the state to wait to count those ballots until the voters' immigration status could be verified.":
    "Phán quyết này là bước lùi pháp lý mới nhất đối với Tổng thống Donald Trump trong nỗ lực mở rộng quyền kiểm soát liên bang đối với các cuộc bầu cử do tiểu bang điều hành, trước thềm cuộc bỏ phiếu quyết định quyền kiểm soát Quốc hội trong phần còn lại của nhiệm kỳ của ông.\n\nChính quyền Đảng Cộng hòa đã kiện các quan chức bầu cử tại tiểu bang Đảng Dân chủ vào giữa tháng 10, cáo buộc các quan chức này không đáp ứng thời hạn 48 giờ để rà soát danh sách 20.000 người bị cho là có khả năng không phải công dân trong danh sách cử tri của bang. Chính quyền đã yêu cầu thẩm phán buộc tiểu bang phải chờ kiểm đếm các lá phiếu đó cho đến khi tình trạng di trú của cử tri được xác minh."
};

const NUMBER_IPA_MAP = {
  "0": { us: "ˈzɪroʊ", uk: "ˈzɪərəʊ", vi: "0" },
  "1": { us: "wʌn", uk: "wʌn", vi: "1" },
  "2": { us: "tuː", uk: "tuː", vi: "2" },
  "3": { us: "θriː", uk: "θriː", vi: "3" },
  "4": { us: "fɔːr", uk: "fɔː", vi: "4" },
  "5": { us: "faɪv", uk: "faɪv", vi: "5" },
  "6": { us: "sɪks", uk: "sɪks", vi: "6" },
  "7": { us: "ˈsevn", uk: "ˈsevn", vi: "7" },
  "8": { us: "eɪt", uk: "eɪt", vi: "8" },
  "9": { us: "naɪn", uk: "naɪn", vi: "9" },
  "10": { us: "ten", uk: "ten", vi: "10" },
  "20": { us: "ˈtwenti", uk: "ˈtwenti", vi: "20" },
  "30": { us: "ˈθɜːrti", uk: "ˈθɜːti", vi: "30" },
  "40": { us: "ˈfɔːrti", uk: "ˈfɔːti", vi: "40" },
  "48": { us: "ˈfɔːrti eɪt", uk: "ˈfɔːti eɪt", vi: "48" },
  "50": { us: "ˈfɪfti", uk: "ˈfɪfti", vi: "50" },
  "100": { us: "ˈhʌndrəd", uk: "ˈhʌndrəd", vi: "100" },
  "1000": { us: "ˈθaʊznd", uk: "ˈθaʊznd", vi: "1.000" },
  "20000": { us: "ˈtwenti ˈθaʊznd", uk: "ˈtwenti ˈθaʊznd", vi: "20.000" }
};

function fetchWithTimeout(url, options = {}, timeoutMs = 2000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal }).finally(() => clearTimeout(timer));
}

function getCachedWordEntry(cleanWord) {
  if (!cleanWord) return null;
  if (BUILTIN_IPA_DICT[cleanWord]) return BUILTIN_IPA_DICT[cleanWord];
  if (WORD_CACHE[cleanWord]) return WORD_CACHE[cleanWord];
  return null;
}

// Instant Morphological Stemmer + Rule-based G2P Resolver (< 0.1ms per word)
function resolveWordIpaSync(rawCleanWord) {
  const cleanWord = rawCleanWord.replace(/^'+|'+$/g, "");
  if (!cleanWord) return null;

  // 1. Direct cache or builtin hit
  const direct = getCachedWordEntry(cleanWord);
  if (direct) return { ...direct, exact: true };

  // 2. Numeric tokens (e.g., 20,000 -> 20000, 48)
  const digitsOnly = cleanWord.replace(/,/g, "");
  if (/^\d+$/.test(digitsOnly)) {
    if (NUMBER_IPA_MAP[digitsOnly]) {
      const n = NUMBER_IPA_MAP[digitsOnly];
      return { us: n.us, uk: n.uk, pos: "num", vi: cleanWord, syllables: cleanWord, exact: true };
    }
    return { us: cleanWord, uk: cleanWord, pos: "num", vi: cleanWord, syllables: cleanWord, exact: true };
  }

  // 3. Hyphenated compound words (e.g., state-run, 48-hour, mid-october)
  if (cleanWord.includes("-")) {
    const parts = cleanWord.split("-").filter(Boolean);
    if (parts.length > 1) {
      const resolvedParts = parts.map((p) => resolveWordIpaSync(p));
      const allExact = resolvedParts.every((r) => r && r.exact);
      return {
        us: resolvedParts.map((r, i) => r?.us || parts[i]).join(" "),
        uk: resolvedParts.map((r, i) => r?.uk || parts[i]).join(" "),
        pos: "compound",
        vi: resolvedParts.map((r) => r?.vi || "").filter(Boolean).join(" "),
        syllables: parts.join("·"),
        tip: "Từ ghép có gạch nối: phát âm rõ từng thành phần và nhấn trọng âm ở từ đầu.",
        exact: allExact
      };
    }
  }

  // 4. Possessive 's (e.g., state's -> state + z/s)
  if (cleanWord.endsWith("'s")) {
    const base = cleanWord.slice(0, -2);
    const baseEntry = getCachedWordEntry(base);
    if (baseEntry) {
      const sfx = getPluralSfxIpa(baseEntry.us);
      return {
        us: baseEntry.us + sfx,
        uk: (baseEntry.uk || baseEntry.us) + sfx,
        pos: baseEntry.pos || "noun",
        vi: baseEntry.vi ? `của ${baseEntry.vi}` : "",
        syllables: baseEntry.syllables || cleanWord,
        tip: `Sở hữu cách ('s) đọc là /${sfx}/.`,
        exact: true
      };
    }
  }

  // 5. Plural / 3rd person -s, -es, -ies
  if (cleanWord.length > 3 && cleanWord.endsWith("s") && !cleanWord.endsWith("ss")) {
    const candidates = [];
    if (cleanWord.endsWith("ies")) candidates.push(cleanWord.slice(0, -3) + "y");
    if (cleanWord.endsWith("es")) candidates.push(cleanWord.slice(0, -2));
    candidates.push(cleanWord.slice(0, -1));

    for (const lemma of candidates) {
      const baseEntry = getCachedWordEntry(lemma);
      if (baseEntry) {
        const sfx = getPluralSfxIpa(baseEntry.us);
        return {
          us: baseEntry.us + sfx,
          uk: (baseEntry.uk || baseEntry.us) + sfx,
          pos: baseEntry.pos || "noun/verb",
          vi: baseEntry.vi || "",
          syllables: (baseEntry.syllables || lemma) + "s",
          tip: `Đuôi -s/-es phát âm là /${sfx}/ dựa vào âm cuối của từ gốc '${lemma}'.`,
          exact: true
        };
      }
    }
  }

  // 6. Past tense -ed, -d, -ied
  if (cleanWord.length > 3 && cleanWord.endsWith("ed")) {
    const candidates = [];
    if (cleanWord.endsWith("ied")) candidates.push(cleanWord.slice(0, -3) + "y");
    candidates.push(cleanWord.slice(0, -2));
    candidates.push(cleanWord.slice(0, -1));

    for (const lemma of candidates) {
      const baseEntry = getCachedWordEntry(lemma);
      if (baseEntry) {
        const sfx = getPastEdSfxIpa(baseEntry.us);
        return {
          us: baseEntry.us + sfx,
          uk: (baseEntry.uk || baseEntry.us) + sfx,
          pos: "verb/adj",
          vi: baseEntry.vi ? `đã ${baseEntry.vi}` : "",
          syllables: (baseEntry.syllables || lemma) + "·ed",
          tip: `Đuôi -ed phát âm là /${sfx}/ dựa vào âm cuối của từ gốc '${lemma}'.`,
          exact: true
        };
      }
    }
  }

  // 7. Present participle / Gerund -ing
  if (cleanWord.length > 4 && cleanWord.endsWith("ing")) {
    const stem = cleanWord.slice(0, -3);
    const candidates = [stem, stem + "e"];
    for (const lemma of candidates) {
      const baseEntry = getCachedWordEntry(lemma);
      if (baseEntry) {
        return {
          us: baseEntry.us + "ɪŋ",
          uk: (baseEntry.uk || baseEntry.us) + "ɪŋ",
          pos: "verb/noun",
          vi: baseEntry.vi || "",
          syllables: (baseEntry.syllables || lemma) + "·ing",
          tip: "Đuôi -ing phát âm là /ɪŋ/.",
          exact: true
        };
      }
    }
  }

  // 8. Fast Rule-based English Grapheme-to-Phoneme (G2P) approximation so long texts NEVER show "..."
  const g2p = estimateEnglishIpa(cleanWord);
  return {
    us: g2p.us,
    uk: g2p.uk,
    pos: "word",
    vi: "",
    syllables: cleanWord,
    tip: "Chú ý nhấn trọng âm chính đứng sau dấu ˈ.",
    exact: false
  };
}

function getPluralSfxIpa(baseIpa) {
  if (!baseIpa) return "s";
  if (/(s|z|ʃ|ʒ|tʃ|dʒ)$/.test(baseIpa)) return "ɪz";
  if (/(p|t|k|f|θ)$/.test(baseIpa)) return "s";
  return "z";
}

function getPastEdSfxIpa(baseIpa) {
  if (!baseIpa) return "d";
  if (/(t|d)$/.test(baseIpa)) return "ɪd";
  if (/(p|k|f|s|ʃ|tʃ|θ)$/.test(baseIpa)) return "t";
  return "d";
}

function estimateEnglishIpa(word) {
  let w = word.toLowerCase();
  w = w
    .replace(/tion$/g, "ʃn")
    .replace(/sion$/g, "ʒn")
    .replace(/cious$|tious$/g, "ʃəs")
    .replace(/ture$/g, "tʃər")
    .replace(/ment$/g, "mənt")
    .replace(/ness$/g, "nəs")
    .replace(/able$|ible$/g, "əbl")
    .replace(/igh/g, "aɪ")
    .replace(/ph/g, "f")
    .replace(/sh/g, "ʃ")
    .replace(/ch/g, "tʃ")
    .replace(/th/g, "θ")
    .replace(/qu/g, "kw")
    .replace(/ee|ea/g, "iː")
    .replace(/oo/g, "uː")
    .replace(/ou|ow/g, "aʊ")
    .replace(/ai|ay/g, "eɪ")
    .replace(/oi|oy/g, "ɔɪ")
    .replace(/ar/g, "ɑːr")
    .replace(/er|ir|ur/g, "ɜːr")
    .replace(/or/g, "ɔːr")
    .replace(/c(?=[eiy])/g, "s")
    .replace(/c/g, "k")
    .replace(/j/g, "dʒ")
    .replace(/y$/g, "i")
    .replace(/e$/g, "");
  if (!w) w = word;
  const uk = w.replace(/ɑːr/g, "ɑː").replace(/ɜːr/g, "ɜː").replace(/ɔːr/g, "ɔː");
  return { us: w, uk };
}

// Tokenize passage while preserving paragraph breaks and sentence indices
function tokenizePassage(text) {
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
  const tokens = [];
  const sentences = [];
  let currentSentenceTokens = [];
  let currentSentenceWords = [];
  let sentenceIdx = 0;

  paragraphs.forEach((para, pIdx) => {
    const rawWords = para.trim().split(/\s+/).filter(Boolean);
    rawWords.forEach((surfaceWord, wIdxInPara) => {
      const cleanWord = surfaceWord
        .replace(/^[^a-zA-Z0-9']+|[^a-zA-Z0-9']+$/g, "")
        .replace(/’/g, "'")
        .toLowerCase();
      const punctSuffix = surfaceWord.match(/[^a-zA-Z0-9'’]+$/)?.[0] || "";
      const resolved = resolveWordIpaSync(cleanWord);

      const tokenObj = {
        word: surfaceWord,
        cleanWord: cleanWord.replace(/^'+|'+$|\'s$/g, "") || cleanWord,
        lookupKey: cleanWord.replace(/^'+|'+$|\'s$/g, ""),
        ipaUS: ((resolved?.us || cleanWord || surfaceWord) + punctSuffix).trim(),
        ipaUK: ((resolved?.uk || resolved?.us || cleanWord || surfaceWord) + punctSuffix).trim(),
        pos: resolved?.pos || "word",
        vi: resolved?.vi || "",
        syllables: resolved?.syllables || cleanWord || surfaceWord,
        tip: resolved?.tip || "Chú ý nhấn trọng âm chính đứng sau dấu ˈ.",
        audioUrlUS: resolved?.audioUrlUS || "",
        audioUrlUK: resolved?.audioUrlUK || "",
        exact: Boolean(resolved?.exact),
        paragraphIndex: pIdx,
        isParagraphStart: pIdx > 0 && wIdxInPara === 0,
        sentenceIndex: sentenceIdx
      };

      const globalTokenIdx = tokens.length;
      tokens.push(tokenObj);
      currentSentenceTokens.push(globalTokenIdx);
      currentSentenceWords.push(surfaceWord);

      // Detect end of sentence (. ! ?)
      const isEndOfPara = wIdxInPara === rawWords.length - 1;
      const endsWithSentencePunct = /[.!?]["'”’)]*$/.test(surfaceWord) && !/^(mr|mrs|ms|dr|vs|st|u\.s)\./i.test(surfaceWord);
      if (endsWithSentencePunct || isEndOfPara) {
        sentences.push({
          index: sentenceIdx,
          text: currentSentenceWords.join(" "),
          tokenIndices: [...currentSentenceTokens]
        });
        sentenceIdx++;
        currentSentenceTokens = [];
        currentSentenceWords = [];
      }
    });
  });

  return { tokens, sentences };
}

function buildInstantPreview(text) {
  const { tokens, sentences } = tokenizePassage(text);
  const allKnown = tokens.every((t) => t.exact);
  const fullIpaUS = tokens.map((t) => (t.isParagraphStart ? "\n\n" : "") + t.ipaUS).join(" ").replace(/ \n\n /g, "\n\n");
  const fullIpaUK = tokens.map((t) => (t.isParagraphStart ? "\n\n" : "") + t.ipaUK).join(" ").replace(/ \n\n /g, "\n\n");

  return {
    allKnown,
    result: {
      translation: PRESET_TRANSLATIONS[text] || "⚡ Đang dịch nhanh đoạn văn sang tiếng Việt...",
      fullIpaUS,
      fullIpaUK,
      tokens,
      sentences,
      coachingTips: [
        "Với đoạn văn dài: Bạn có thể chọn từng câu (Câu 1, Câu 2...) trên thanh công cụ mục 2 để nghe mẫu và ghi âm chấm điểm từng câu.",
        "Dấu ˈ trong IPA báo hiệu âm tiết ngay sau nó mang trọng âm chính (đọc cao và mạnh hơn).",
        "Dấu ː (như /iː/, /ɜː/, /ɔː/) báo hiệu nguyên âm dài — hãy ngân dài hơi hơn nguyên âm ngắn."
      ]
    }
  };
}

function getActiveTargetText() {
  const sentences = state.currentAnalysis?.sentences || [];
  if (state.activeSentenceIndex >= 0 && sentences[state.activeSentenceIndex]) {
    return sentences[state.activeSentenceIndex].text;
  }
  return els.textInput.value.trim();
}

async function analyzeCurrentText() {
  const text = els.textInput.value.trim();
  if (!text) return;

  const jobId = ++currentAnalyzeJobId;
  const startTime = performance.now();

  if (state.isRecording) stopRecording();
  state.lastPronunciationResult = null;
  state.activeSentenceIndex = -1;
  els.scoreQuickBadge.classList.add("hidden");
  els.pronResultPanel.classList.add("hidden");

  const cacheKey = `${state.provider}:${text}`;
  if (ANALYSIS_MEMORY_CACHE.has(cacheKey)) {
    const cached = ANALYSIS_MEMORY_CACHE.get(cacheKey);
    state.currentAnalysis = cached;
    renderAnalysisResult(cached);
    setAnalyzeButtonStatus(`✨ Phân tích IPA & Dịch ⚡ 0ms`);
    return;
  }

  // PHASE 1: Instant 0ms synchronous render (Builtin + Cache + Morphological Stemmer + G2P)
  const { allKnown, result: instantResult } = buildInstantPreview(text);
  state.currentAnalysis = instantResult;
  renderAnalysisResult(instantResult);

  const hasGemini = state.provider === "gemini" && state.geminiKey;
  const hasOpenAI = state.provider === "openai" && state.openaiKey;
  if (allKnown && PRESET_TRANSLATIONS[text] && !hasGemini && !hasOpenAI) {
    ANALYSIS_MEMORY_CACHE.set(cacheKey, instantResult);
    setAnalyzeButtonStatus(`✨ Phân tích IPA & Dịch ⚡ Tức thì`);
    return;
  }

  setAnalyzeButtonStatus(`⏳ Đang dịch nhanh...`, true);

  try {
    // PHASE 2: Ultra-fast Translation (< 250ms) + Non-blocking Background Dictionary Enrichment
    const fastPromise = analyzeWithFreeApis(text, instantResult, jobId);

    if (!hasGemini && !hasOpenAI) {
      const fastResult = await fastResultOrNull(fastPromise);
      if (jobId !== currentAnalyzeJobId) return;
      if (fastResult) {
        ANALYSIS_MEMORY_CACHE.set(cacheKey, fastResult);
        state.currentAnalysis = fastResult;
        renderAnalysisResult(fastResult);
      }
      const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
      setAnalyzeButtonStatus(`✨ Phân tích IPA & Dịch ⚡ ${elapsed}s`);
      return;
    }

    // When AI API is enabled: show fast translation at ~250ms first, then upgrade with compact AI analysis
    fastPromise
      .then((fastRes) => {
        if (jobId === currentAnalyzeJobId && fastRes && !ANALYSIS_MEMORY_CACHE.has(cacheKey)) {
          state.currentAnalysis = fastRes;
          renderAnalysisResult(fastRes);
        }
      })
      .catch(() => {});

    const aiResult = hasGemini
      ? await analyzeWithGemini(text, state.geminiKey, instantResult)
      : await analyzeWithOpenAI(text, state.openaiKey, instantResult);

    if (jobId !== currentAnalyzeJobId) return;

    ANALYSIS_MEMORY_CACHE.set(cacheKey, aiResult);
    state.currentAnalysis = aiResult;
    renderAnalysisResult(aiResult);
    const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
    setAnalyzeButtonStatus(`✨ Phân tích IPA & Dịch ⚡ ${elapsed}s`);
  } catch (err) {
    if (jobId !== currentAnalyzeJobId) return;
    console.warn("AI API fallback triggered:", err);
    const fallbackResult = await analyzeWithFreeApis(text, instantResult, jobId);
    fallbackResult.coachingTips.unshift(
      `⚠️ Lưu ý: Không thể gọi AI API (${err.message || "Kiểm tra lại API Key"}). Đang hiển thị kết quả tốc độ cao.`
    );
    state.currentAnalysis = fallbackResult;
    renderAnalysisResult(fallbackResult);
    setAnalyzeButtonStatus(`✨ Phân tích IPA & Dịch`);
  } finally {
    if (jobId === currentAnalyzeJobId) {
      els.loadingState.classList.add("hidden");
    }
  }
}

async function fastResultOrNull(promise) {
  try {
    return await promise;
  } catch (_) {
    return null;
  }
}

function setAnalyzeButtonStatus(label, busy = false) {
  els.btnAnalyze.innerHTML = `<span class="btn-icon">${busy ? "⏳" : "✨"}</span> ${label.replace(/^[⏳✨]\s*/, "")}`;
}

// Compact AI Prompt for both short & long passages (80% fewer output tokens on long passages!)
function buildCompactAiPrompt(unknownWordsList) {
  const wordsHint =
    unknownWordsList.length > 0
      ? `Focus the "vocab" dictionary on these words: ${unknownWordsList.slice(0, 45).join(", ")}.`
      : `Include 5-10 key content words from the input in "vocab".`;

  return `You are an expert English phonetics (IPA) teacher and English-to-Vietnamese translator.
${wordsHint}
Return ONLY valid JSON matching this compact schema:
{
  "translation": "Natural Vietnamese translation of the entire input (preserve paragraph breaks \\n\\n)",
  "vocab": {
    "lowercase_word": {
      "us": "US IPA without slashes",
      "uk": "UK IPA without slashes",
      "pos": "noun/verb/adj/adv",
      "vi": "1-3 word Vietnamese meaning",
      "tip": "Short Vietnamese pronunciation tip"
    }
  },
  "coachingTips": [
    "3 concise Vietnamese tips on linking sounds, stress, and intonation for this passage"
  ]
}`;
}

function mergeCompactAiResponse(baseResult, aiJson) {
  const vocab = aiJson?.vocab || {};
  Object.keys(vocab).forEach((w) => {
    const key = w.toLowerCase();
    const v = vocab[w];
    if (v && v.us) {
      WORD_CACHE[key] = {
        us: String(v.us).replace(/^\/|\/$/g, ""),
        uk: String(v.uk || v.us).replace(/^\/|\/$/g, ""),
        pos: v.pos || "word",
        vi: v.vi || "",
        syllables: v.syllables || key,
        tip: v.tip || "Chú ý nhấn trọng âm chính đứng sau dấu ˈ."
      };
    }
  });
  saveWordCache();

  const updatedTokens = baseResult.tokens.map((t) => {
    const resolved = resolveWordIpaSync(t.cleanWord);
    const punctSuffix = t.word.match(/[^a-zA-Z0-9'’]+$/)?.[0] || "";
    if (resolved) {
      return {
        ...t,
        ipaUS: (resolved.us || t.cleanWord) + punctSuffix,
        ipaUK: (resolved.uk || resolved.us || t.cleanWord) + punctSuffix,
        pos: resolved.pos || t.pos,
        vi: resolved.vi || t.vi,
        tip: resolved.tip || t.tip,
        exact: true
      };
    }
    return t;
  });

  const fullIpaUS = updatedTokens.map((t) => (t.isParagraphStart ? "\n\n" : "") + t.ipaUS).join(" ").replace(/ \n\n /g, "\n\n");
  const fullIpaUK = updatedTokens.map((t) => (t.isParagraphStart ? "\n\n" : "") + t.ipaUK).join(" ").replace(/ \n\n /g, "\n\n");

  return {
    translation: aiJson.translation || baseResult.translation,
    fullIpaUS,
    fullIpaUK,
    tokens: updatedTokens,
    sentences: baseResult.sentences,
    coachingTips: aiJson.coachingTips?.length ? aiJson.coachingTips : baseResult.coachingTips
  };
}

async function analyzeWithGemini(text, apiKey, baseResult) {
  const unknownWords = Array.from(new Set(baseResult.tokens.filter((t) => !t.exact && t.lookupKey).map((t) => t.lookupKey)));
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: `${buildCompactAiPrompt(unknownWords)}\n\nInput:\n${text}` }]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: "application/json",
        thinkingConfig: { thinkingBudget: 0 }
      }
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  const rawJson = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawJson) throw new Error("Empty response from Gemini");
  return mergeCompactAiResponse(baseResult, JSON.parse(rawJson));
}

async function analyzeWithOpenAI(text, apiKey, baseResult) {
  const unknownWords = Array.from(new Set(baseResult.tokens.filter((t) => !t.exact && t.lookupKey).map((t) => t.lookupKey)));
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.1,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: buildCompactAiPrompt(unknownWords) },
        { role: "user", content: text }
      ]
    })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `HTTP ${response.status}`);
  }

  const data = await response.json();
  return mergeCompactAiResponse(baseResult, JSON.parse(data.choices[0].message.content));
}

// ============================================================================
// High-Speed Long-Passage Engine:
// 1 Single Translate Call (~200ms) + Non-Blocking Background Dictionary Pool
// ============================================================================
async function analyzeWithFreeApis(text, basePreview, jobId) {
  const preview = basePreview || buildInstantPreview(text).result;
  const tokens = preview.tokens.map((t) => ({ ...t }));

  // Identify unique unknown words (cap to 25 per batch so URL stays short & fast)
  const uniqueUnknownSet = new Set();
  tokens.forEach((t) => {
    if (!t.exact && t.lookupKey && /^[a-z]+$/.test(t.lookupKey)) {
      uniqueUnknownSet.add(t.lookupKey);
    }
  });
  const uniqueUnknownWords = Array.from(uniqueUnknownSet).slice(0, 35);

  // Only await the 1 single Google Translate request (~180-280ms even for long paragraphs!)
  let fullTranslation = PRESET_TRANSLATIONS[text] || "";
  const wordViMap = {};

  if (!fullTranslation || uniqueUnknownWords.length > 0) {
    try {
      const payload =
        uniqueUnknownWords.length > 0
          ? `${text}\n|||\n${uniqueUnknownWords.join("\n")}`
          : text;

      const gtUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(payload)}`;
      const gtRes = await fetchWithTimeout(gtUrl, {}, 2500);
      if (gtRes.ok) {
        const gtData = await gtRes.json();
        const combinedVi = gtData[0].map((seg) => seg[0]).join("");
        const parts = combinedVi.split(/\n*\|\|\|\n*/);
        fullTranslation = (parts[0] || "").trim() || fullTranslation;

        if (parts[1] && uniqueUnknownWords.length > 0) {
          const viLines = parts[1].split("\n").map((s) => s.trim().toLowerCase());
          uniqueUnknownWords.forEach((w, idx) => {
            if (viLines[idx]) wordViMap[w] = viLines[idx];
          });
        }
      }
    } catch (_) {
      if (!fullTranslation) {
        fullTranslation = PRESET_TRANSLATIONS[text] || "Không thể kết nối máy chủ dịch tự động.";
      }
    }
  }

  // Apply translated Vietnamese word meanings immediately
  tokens.forEach((t) => {
    if (!t.vi && wordViMap[t.lookupKey]) {
      t.vi = wordViMap[t.lookupKey];
    }
  });

  // Trigger non-blocking background dictionary enrichment for any remaining unknown words
  if (uniqueUnknownWords.length > 0) {
    enrichUnknownWordsInBackground(uniqueUnknownWords, wordViMap, jobId);
  }

  const fullIpaUS = tokens.map((t) => (t.isParagraphStart ? "\n\n" : "") + t.ipaUS).join(" ").replace(/ \n\n /g, "\n\n");
  const fullIpaUK = tokens.map((t) => (t.isParagraphStart ? "\n\n" : "") + t.ipaUK).join(" ").replace(/ \n\n /g, "\n\n");

  return {
    translation: fullTranslation,
    fullIpaUS,
    fullIpaUK,
    tokens,
    sentences: preview.sentences,
    coachingTips: preview.coachingTips
  };
}

// Background worker: fetches dictionary IPA in small concurrency batches (max 5 at a time)
// and updates DOM tokens in-place without blocking the UI!
async function enrichUnknownWordsInBackground(words, wordViMap, jobId) {
  const CONCURRENCY = 5;
  let updatedAny = false;

  for (let i = 0; i < words.length; i += CONCURRENCY) {
    if (jobId !== currentAnalyzeJobId) return;
    const batch = words.slice(i, i + CONCURRENCY);

    await Promise.all(
      batch.map(async (cleanWord) => {
        try {
          const dictRes = await fetchWithTimeout(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`,
            {},
            1800
          );
          if (!dictRes.ok) return;
          const dictJson = await dictRes.json();
          const firstEntry = dictJson[0];
          const pos = firstEntry?.meanings?.[0]?.partOfSpeech || "word";
          const definitionEn = firstEntry?.meanings?.[0]?.definitions?.[0]?.definition || "";
          const phonetics = firstEntry?.phonetics || [];
          const generalText = (firstEntry?.phonetic || phonetics.find((p) => p.text)?.text || "").replace(/^\/|\/$/g, "");
          const usPho = phonetics.find((p) => p.audio?.includes("-us")) || phonetics.find((p) => p.text);
          const ukPho = phonetics.find((p) => p.audio?.includes("-uk")) || phonetics.find((p) => p.text);

          const us = (usPho?.text || generalText || "").replace(/^\/|\/$/g, "");
          const uk = (ukPho?.text || generalText || us).replace(/^\/|\/$/g, "");
          const audioUrlUS = phonetics.find((p) => p.audio?.includes("-us"))?.audio || phonetics.find((p) => p.audio)?.audio || "";
          const audioUrlUK = phonetics.find((p) => p.audio?.includes("-uk"))?.audio || audioUrlUS;

          if (us) {
            WORD_CACHE[cleanWord] = {
              us,
              uk: uk || us,
              pos,
              vi: wordViMap[cleanWord] || definitionEn.slice(0, 35),
              syllables: cleanWord,
              tip: definitionEn
                ? `Nghĩa gốc (EN): ${definitionEn}. Nhấn dấu ˈ trước âm tiết mang trọng âm chính.`
                : "Chú ý dấu trọng âm (ˈ) đứng trước âm tiết cần nhấn mạnh.",
              audioUrlUS,
              audioUrlUK
            };
            updatedAny = true;
          }
        } catch (_) {}
      })
    );

    if (jobId !== currentAnalyzeJobId) return;
    if (updatedAny && state.currentAnalysis) {
      // Update tokens in-place
      state.currentAnalysis.tokens.forEach((t, idx) => {
        const entry = WORD_CACHE[t.lookupKey];
        if (entry) {
          const punctSuffix = t.word.match(/[^a-zA-Z0-9'’]+$/)?.[0] || "";
          t.ipaUS = entry.us + punctSuffix;
          t.ipaUK = (entry.uk || entry.us) + punctSuffix;
          t.pos = entry.pos || t.pos;
          t.vi = entry.vi || t.vi;
          t.tip = entry.tip || t.tip;
          t.audioUrlUS = entry.audioUrlUS || "";
          t.audioUrlUK = entry.audioUrlUK || "";
          t.exact = true;

          // Update DOM node in-place without full re-render
          const domNode = els.rubyContainer.querySelector(`.word-token[data-index="${idx}"] .token-ipa`);
          if (domNode) {
            const ipaToShow = state.accent === "UK" ? t.ipaUK : t.ipaUS;
            domNode.textContent = `/${ipaToShow}/`;
          }
        }
      });
    }
  }

  if (updatedAny) {
    saveWordCache();
  }
}

// ============================================================================
// Rendering UI (With Sentence Filter Bar & Paragraph Breaks for Long Passages)
// ============================================================================
function renderAnalysisResult(result) {
  if (!result) return;

  // 1. Render Sentence Navigator Bar (for passages with >= 2 sentences)
  renderSentenceFilterBar(result.sentences || []);

  // 2. Render Ruby Word Tokens
  renderRubyTokens();

  // 3. Render Full IPA
  els.fullIpaUS.textContent = `/${result.fullIpaUS}/`;
  els.fullIpaUK.textContent = `/${result.fullIpaUK}/`;

  // 4. Render Translation
  els.translationOutput.textContent = result.translation || "";

  // 5. Render Coaching Tips
  const tipFrag = document.createDocumentFragment();
  (result.coachingTips || []).forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    tipFrag.appendChild(li);
  });
  els.coachingList.innerHTML = "";
  els.coachingList.appendChild(tipFrag);

  // 6. Select first visible token by default to show detailed breakdown card
  if (result.tokens && result.tokens.length > 0) {
    const safeIdx = Math.min(state.selectedTokenIndex, result.tokens.length - 1);
    selectWordToken(safeIdx >= 0 ? safeIdx : 0, false);
  }
}

function renderSentenceFilterBar(sentences) {
  if (!els.sentenceFilterBar) return;
  if (!sentences || sentences.length <= 1) {
    els.sentenceFilterBar.classList.add("hidden");
    els.sentenceFilterBar.innerHTML = "";
    return;
  }

  els.sentenceFilterBar.classList.remove("hidden");
  const frag = document.createDocumentFragment();

  const label = document.createElement("span");
  label.className = "sentence-filter-label";
  label.textContent = "📑 Chia nhỏ đoạn dài:";
  frag.appendChild(label);

  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = "chip" + (state.activeSentenceIndex === -1 ? " active" : "");
  allBtn.textContent = `Tất cả (${sentences.length} câu)`;
  allBtn.addEventListener("click", () => {
    state.activeSentenceIndex = -1;
    renderSentenceFilterBar(sentences);
    renderRubyTokens();
  });
  frag.appendChild(allBtn);

  sentences.forEach((s, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (state.activeSentenceIndex === idx ? " active" : "");
    const wordCount = s.tokenIndices.length;
    btn.textContent = `Câu ${idx + 1} (${wordCount} từ)`;
    btn.title = s.text;
    btn.addEventListener("click", () => {
      state.activeSentenceIndex = idx;
      renderSentenceFilterBar(sentences);
      renderRubyTokens();
      if (s.tokenIndices.length > 0) {
        selectWordToken(s.tokenIndices[0], false);
      }
    });
    frag.appendChild(btn);
  });

  els.sentenceFilterBar.innerHTML = "";
  els.sentenceFilterBar.appendChild(frag);
}

function renderRubyTokens() {
  const result = state.currentAnalysis;
  if (!result || !result.tokens) return;

  const frag = document.createDocumentFragment();
  const activeSent = state.activeSentenceIndex;

  result.tokens.forEach((token, idx) => {
    if (activeSent >= 0 && token.sentenceIndex !== activeSent) {
      return;
    }

    if (activeSent === -1 && token.isParagraphStart) {
      const br = document.createElement("div");
      br.className = "ruby-paragraph-break";
      frag.appendChild(br);
    }

    const div = document.createElement("div");
    div.className = "word-token" + (idx === state.selectedTokenIndex ? " selected" : "");
    div.setAttribute("data-index", idx);
    div.setAttribute("data-accent-mode", state.accent);

    const ipaToShow = state.accent === "UK" ? token.ipaUK : token.ipaUS;

    div.innerHTML = `
      <span class="token-surface">${escapeHtml(token.word)}</span>
      <span class="token-ipa">/${escapeHtml(ipaToShow || "")}/</span>
      ${token.vi ? `<span class="token-vi">${escapeHtml(token.vi)}</span>` : ""}
    `;

    div.addEventListener("click", () => {
      selectWordToken(idx, true);
    });

    frag.appendChild(div);
  });

  els.rubyContainer.innerHTML = "";
  els.rubyContainer.appendChild(frag);

  applyPronunciationHighlightsToRuby();
}

function selectWordToken(index, autoSpeak = true) {
  const tokens = state.currentAnalysis?.tokens || [];
  if (!tokens[index]) return;

  state.selectedTokenIndex = index;

  document.querySelectorAll(".word-token").forEach((el, idx) => {
    el.classList.toggle("selected", idx === index);
  });

  const t = tokens[index];
  els.wordDetailCard.classList.remove("hidden");
  els.detailWord.textContent = t.cleanWord || t.word;
  els.detailPos.textContent = t.pos || "word";
  els.detailIpaUS.textContent = `🇺🇸 /${(t.ipaUS || "").replace(/[.,!?;:]+$/, "")}/`;
  els.detailIpaUK.textContent = `🇬🇧 /${(t.ipaUK || "").replace(/[.,!?;:]+$/, "")}/`;
  els.detailMeaning.textContent = t.vi || "Xem trong bản dịch toàn câu bên dưới";
  els.detailSyllables.textContent = t.syllables || t.cleanWord;
  els.detailTip.textContent = t.tip || "Chú ý trọng âm và âm cuối của từ.";

  if (autoSpeak) {
    const audioUrl = state.accent === "UK" ? t.audioUrlUK : t.audioUrlUS;
    speakSingleWord(t.cleanWord || t.word, state.accent, parseFloat(els.speedSelect.value), audioUrl);
  }
}

function getSelectedToken() {
  return state.currentAnalysis?.tokens?.[state.selectedTokenIndex] || null;
}

// ============================================================================
// Speech & Audio Engine (Web Speech API + Dictionary Audio + OpenAI TTS)
// ============================================================================
function initSpeechVoices() {
  if (!("speechSynthesis" in window)) return;

  const loadVoices = () => {
    const allVoices = window.speechSynthesis.getVoices();
    state.voices = allVoices.filter((v) => v.lang.startsWith("en"));
    populateVoiceSelect();
  };

  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function populateVoiceSelect() {
  els.voiceSelect.innerHTML = "";
  if (state.voices.length === 0) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "Giọng mặc định hệ thống";
    els.voiceSelect.appendChild(opt);
    return;
  }

  const targetLangPrefix = state.accent === "UK" ? "en-GB" : "en-US";

  // Sort voices: preferred accent & high quality voices first
  const sorted = [...state.voices].sort((a, b) => {
    const aMatch = a.lang.replace("_", "-").startsWith(targetLangPrefix) ? 1 : 0;
    const bMatch = b.lang.replace("_", "-").startsWith(targetLangPrefix) ? 1 : 0;
    if (aMatch !== bMatch) return bMatch - aMatch;
    const aPremium = /Samantha|Daniel|Google|Natural|Alex|Ava|Siri/i.test(a.name) ? 1 : 0;
    const bPremium = /Samantha|Daniel|Google|Natural|Alex|Ava|Siri/i.test(b.name) ? 1 : 0;
    return bPremium - aPremium;
  });

  sorted.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v.name;
    opt.textContent = `${v.name} (${v.lang})`;
    els.voiceSelect.appendChild(opt);
  });
}

function stopAllAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (state.currentAudio) {
    state.currentAudio.pause();
    state.currentAudio = null;
  }
  setPlayingUI(false);
  clearWordHighlights();
}

function setPlayingUI(playing) {
  state.isPlaying = playing;
  els.btnPlayAll.classList.toggle("playing", playing);
  els.playIcon.textContent = playing ? "⏸" : "▶";
  els.playText.textContent = playing ? "Đang phát âm..." : "Phát âm toàn bộ";
  els.btnStopAudio.disabled = !playing;
}

function clearWordHighlights() {
  document.querySelectorAll(".word-token.speaking").forEach((el) => el.classList.remove("speaking"));
}

async function speakSingleWord(word, accent, rate = 1.0, dictionaryAudioUrl = "") {
  stopAllAudio();

  // If normal speed and dictionary human audio exists, use it
  if (dictionaryAudioUrl && rate === 1.0) {
    try {
      const audio = new Audio(dictionaryAudioUrl);
      state.currentAudio = audio;
      await audio.play();
      return;
    } catch (_) {}
  }

  speakText(word, accent, rate, false);
}

async function speakText(text, accent = "US", rate = 1.0, highlightWords = true) {
  stopAllAudio();

  // Check if OpenAI TTS is enabled and configured
  if (state.provider === "openai" && state.openaiKey && state.useOpenAiTts) {
    try {
      setPlayingUI(true);
      const voice = accent === "UK" ? "fable" : "alloy";
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.openaiKey}`
        },
        body: JSON.stringify({
          model: "tts-1",
          input: text,
          voice,
          speed: rate
        })
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        state.currentAudio = audio;
        audio.onended = () => setPlayingUI(false);
        await audio.play();
        return;
      }
    } catch (e) {
      console.warn("OpenAI TTS fallback to Web Speech:", e);
    }
  }

  if (!("speechSynthesis" in window)) {
    alert("Trình duyệt của bạn không hỗ trợ Web Speech API.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.lang = accent === "UK" ? "en-GB" : "en-US";

  // Pick selected voice or best matching voice for accent
  const selectedVoiceName = els.voiceSelect.value;
  const chosenVoice =
    state.voices.find((v) => v.name === selectedVoiceName && v.lang.replace("_", "-").startsWith(utterance.lang)) ||
    state.voices.find((v) => v.lang.replace("_", "-").startsWith(utterance.lang)) ||
    state.voices.find((v) => v.name === selectedVoiceName);

  if (chosenVoice) {
    utterance.voice = chosenVoice;
  }

  // Word boundary highlighting for full text reading
  if (highlightWords) {
    const tokenEls = Array.from(document.querySelectorAll(".word-token"));
    // Precompute character offsets of each word in `text`
    const offsets = [];
    let cursor = 0;
    const rawWords = text.split(/\s+/).filter(Boolean);
    rawWords.forEach((w, idx) => {
      const pos = text.indexOf(w, cursor);
      if (pos !== -1) {
        offsets.push({ idx, start: pos, end: pos + w.length });
        cursor = pos + w.length;
      }
    });

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const charIndex = event.charIndex;
        const match = offsets.find((o) => charIndex >= o.start - 1 && charIndex < o.end + 1);
        clearWordHighlights();
        if (match && tokenEls[match.idx]) {
          tokenEls[match.idx].classList.add("speaking");
        }
      }
    };
  }

  utterance.onstart = () => setPlayingUI(true);
  utterance.onend = () => {
    setPlayingUI(false);
    clearWordHighlights();
  };
  utterance.onerror = () => {
    setPlayingUI(false);
    clearWordHighlights();
  };

  window.speechSynthesis.speak(utterance);
}

// ============================================================================
// Pronunciation Recording & Accuracy Scoring Engine (%)
// ============================================================================
function toggleRecording() {
  if (state.isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

async function startRecording() {
  const targetText = getActiveTargetText();
  if (!targetText) {
    alert("Vui lòng nhập từ vựng hoặc đoạn văn tiếng Anh trước khi ghi âm kiểm tra.");
    return;
  }

  stopAllAudio();

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói (SpeechRecognition). Vui lòng mở bằng Google Chrome, Microsoft Edge hoặc Safari.");
    return;
  }

  state.spokenTranscript = "";
  state.isRecording = true;
  setRecordingUI(true);

  // Show live listening state in the panel
  els.pronResultPanel.classList.remove("hidden");
  els.pronScorePercent.textContent = "...";
  els.pronScoreCircle.className = "pron-score-circle";
  els.pronFeedbackTitle.textContent = "🎙️ Đang lắng nghe bạn đọc...";
  els.pronSpokenText.textContent = "Hãy đọc to nội dung tiếng Anh ở khung trên...";
  els.pronWordList.innerHTML = "";

  // Optional MediaRecorder to allow user to replay their own recorded voice
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.recordedChunks = [];
    const recorder = new MediaRecorder(stream);
    state.mediaRecorder = recorder;

    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        state.recordedChunks.push(e.data);
      }
    };

    recorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      if (state.recordedChunks.length > 0) {
        if (state.recordedAudioUrl) URL.revokeObjectURL(state.recordedAudioUrl);
        const blob = new Blob(state.recordedChunks, { type: "audio/webm" });
        state.recordedAudioUrl = URL.createObjectURL(blob);
        els.btnPlayRecorded.classList.remove("hidden");
      }
    };

    recorder.start();
  } catch (err) {
    console.warn("MediaRecorder optional capture skipped:", err);
  }

  const recognition = new SpeechRecognition();
  state.recognition = recognition;
  recognition.lang = state.accent === "UK" ? "en-GB" : "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let finalTranscript = "";

  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const piece = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += piece + " ";
      } else {
        interimTranscript += piece;
      }
    }

    state.spokenTranscript = (finalTranscript + interimTranscript).trim();
    if (state.spokenTranscript) {
      els.pronSpokenText.textContent = `Đang nghe được: "${state.spokenTranscript}"`;
      const liveEval = evaluatePronunciation(targetText, state.spokenTranscript);
      renderPronunciationResult(liveEval, true);
    }
  };

  recognition.onerror = (event) => {
    console.warn("SpeechRecognition error:", event.error);
    if (event.error === "not-allowed") {
      alert("Vui lòng cấp quyền truy cập Microphone (Ghi âm) cho trình duyệt để chấm điểm phát âm.");
      stopRecording();
    }
  };

  recognition.onend = () => {
    if (state.isRecording) {
      finishRecordingSession();
    }
  };

  try {
    recognition.start();
  } catch (e) {
    console.error("Failed to start SpeechRecognition:", e);
    finishRecordingSession();
  }
}

function stopRecording() {
  if (!state.isRecording) return;
  state.isRecording = false;

  if (state.recognition) {
    try {
      state.recognition.stop();
    } catch (_) {}
  }

  finishRecordingSession();
}

function finishRecordingSession() {
  state.isRecording = false;
  setRecordingUI(false);

  if (state.mediaRecorder && state.mediaRecorder.state !== "inactive") {
    try {
      state.mediaRecorder.stop();
    } catch (_) {}
  }

  const targetText = getActiveTargetText();
  const evaluation = evaluatePronunciation(targetText, state.spokenTranscript);
  state.lastPronunciationResult = evaluation;
  renderPronunciationResult(evaluation, false);
  applyPronunciationHighlightsToRuby();
}

function setRecordingUI(recording) {
  els.btnRecord.classList.toggle("recording", recording);
  els.recordIcon.textContent = recording ? "⏹" : "🎙️";
  els.recordText.textContent = recording ? "Dừng & Chấm điểm" : "Ghi âm";
}

function normalizeWord(word) {
  return String(word || "")
    .toLowerCase()
    .replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, "")
    .replace(/'/g, "");
}

function calculateWordSimilarity(a, b) {
  if (!a && !b) return 1;
  if (!a || !b) return 0;
  if (a === b) return 1;

  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }

  const distance = dp[m][n];
  return Math.max(0, 1 - distance / Math.max(m, n));
}

function evaluatePronunciation(targetText, spokenText) {
  const targetSurfaceWords = targetText.split(/\s+/).filter(Boolean);
  const targetCleanWords = targetSurfaceWords.map(normalizeWord);
  const spokenCleanWords = (spokenText || "")
    .split(/\s+/)
    .map(normalizeWord)
    .filter(Boolean);

  if (targetCleanWords.length === 0) {
    return { accuracy: 0, spokenText: "", wordResults: [] };
  }

  if (spokenCleanWords.length === 0) {
    return {
      accuracy: 0,
      spokenText: "",
      wordResults: targetSurfaceWords.map((w, idx) => ({
        index: idx,
        surface: w,
        clean: targetCleanWords[idx],
        spokenMatch: "",
        similarity: 0,
        status: "wrong"
      }))
    };
  }

  // Sequence alignment (Dynamic Programming) between target words and spoken words
  const N = targetCleanWords.length;
  const M = spokenCleanWords.length;
  const gapPenalty = -0.35;

  const scoreMatrix = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));
  const traceMatrix = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(""));

  for (let i = 1; i <= N; i++) {
    scoreMatrix[i][0] = i * gapPenalty;
    traceMatrix[i][0] = "UP";
  }
  for (let j = 1; j <= M; j++) {
    scoreMatrix[0][j] = j * gapPenalty;
    traceMatrix[0][j] = "LEFT";
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      const sim = calculateWordSimilarity(targetCleanWords[i - 1], spokenCleanWords[j - 1]);
      const matchGain = sim >= 0.55 ? sim : -0.4;
      const diag = scoreMatrix[i - 1][j - 1] + matchGain;
      const up = scoreMatrix[i - 1][j] + gapPenalty;
      const left = scoreMatrix[i][j - 1] + gapPenalty;

      if (diag >= up && diag >= left) {
        scoreMatrix[i][j] = diag;
        traceMatrix[i][j] = "DIAG";
      } else if (up >= left) {
        scoreMatrix[i][j] = up;
        traceMatrix[i][j] = "UP";
      } else {
        scoreMatrix[i][j] = left;
        traceMatrix[i][j] = "LEFT";
      }
    }
  }

  // Backtrack to find best matched spoken word for each target word
  const matchedSpokenIndex = new Array(N).fill(-1);
  let i = N;
  let j = M;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && traceMatrix[i][j] === "DIAG") {
      matchedSpokenIndex[i - 1] = j - 1;
      i--;
      j--;
    } else if (i > 0 && (j === 0 || traceMatrix[i][j] === "UP")) {
      i--;
    } else {
      j--;
    }
  }

  let totalScore = 0;
  const wordResults = targetSurfaceWords.map((surface, idx) => {
    const clean = targetCleanWords[idx];
    if (!clean) {
      totalScore += 1;
      return { index: idx, surface, clean, spokenMatch: surface, similarity: 1, status: "correct" };
    }

    const sIdx = matchedSpokenIndex[idx];
    const spokenWord = sIdx !== -1 ? spokenCleanWords[sIdx] : "";
    const sim = spokenWord ? calculateWordSimilarity(clean, spokenWord) : 0;

    let status = "wrong";
    let credit = 0;

    if (sim >= 0.92) {
      status = "correct";
      credit = 1;
    } else if (sim >= 0.6) {
      status = "partial";
      credit = sim;
    } else {
      status = "wrong";
      credit = 0;
    }

    totalScore += credit;

    return {
      index: idx,
      surface,
      clean,
      spokenMatch: spokenWord,
      similarity: Math.round(sim * 100),
      status
    };
  });

  const accuracy = Math.round((totalScore / N) * 100);
  return {
    accuracy,
    spokenText,
    wordResults
  };
}

function renderPronunciationResult(evaluation, isLive = false) {
  if (!evaluation) return;

  const { accuracy, spokenText, wordResults } = evaluation;

  // Update Quick Score Badge right next to the Record button
  els.scoreQuickBadge.classList.remove("hidden", "score-medium", "score-low");
  els.scoreQuickValue.textContent = `${accuracy}%`;

  // Update Circle in Panel
  els.pronScoreCircle.classList.remove("score-medium", "score-low");
  els.pronScorePercent.textContent = `${accuracy}%`;

  if (accuracy < 50) {
    els.scoreQuickBadge.classList.add("score-low");
    els.pronScoreCircle.classList.add("score-low");
  } else if (accuracy < 80) {
    els.scoreQuickBadge.classList.add("score-medium");
    els.pronScoreCircle.classList.add("score-medium");
  }

  const correctCount = wordResults.filter((w) => w.status === "correct").length;
  const totalWords = wordResults.length;

  if (isLive) {
    els.pronFeedbackTitle.textContent = `🎙️ Đang chấm điểm trực tiếp: Đúng ${correctCount}/${totalWords} từ (${accuracy}%)`;
  } else if (!spokenText) {
    els.pronFeedbackTitle.textContent = `⚠️ Chưa nhận diện được giọng đọc (0%)`;
    els.pronSpokenText.textContent = "Hãy kiểm tra micro và đọc to, rõ ràng hơn.";
  } else if (accuracy >= 90) {
    els.pronFeedbackTitle.textContent = `🌟 Xuất sắc! Bạn đọc chuẩn ${accuracy}% (${correctCount}/${totalWords} từ)`;
  } else if (accuracy >= 75) {
    els.pronFeedbackTitle.textContent = `👍 Khá tốt! Độ chính xác đạt ${accuracy}% (${correctCount}/${totalWords} từ)`;
  } else if (accuracy >= 50) {
    els.pronFeedbackTitle.textContent = `💪 Cố gắng lên! Bạn đọc đúng ${accuracy}% (${correctCount}/${totalWords} từ)`;
  } else {
    els.pronFeedbackTitle.textContent = `🎯 Cần luyện thêm — Độ chính xác ${accuracy}% (${correctCount}/${totalWords} từ)`;
  }

  if (spokenText) {
    els.pronSpokenText.textContent = `Hệ thống nghe được: "${spokenText}"`;
  }

  // Render clickable word chips in breakdown
  els.pronWordList.innerHTML = "";
  wordResults.forEach((item) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `pron-word-chip ${item.status}`;

    const icon = item.status === "correct" ? "✓" : item.status === "partial" ? "≈" : "✗";
    const tooltip =
      item.status === "correct"
        ? `Đọc chuẩn (${item.similarity}%)`
        : item.spokenMatch
        ? `Nghe thành: "${item.spokenMatch}" (${item.similarity}%) — Nhấn để nghe phát âm chuẩn`
        : `Chưa đọc hoặc bị bỏ sót — Nhấn để nghe phát âm chuẩn`;

    chip.title = tooltip;
    chip.innerHTML = `<span>${escapeHtml(item.surface)}</span> <small>${icon}</small>`;

    chip.addEventListener("click", () => {
      selectWordToken(item.index, true);
    });

    els.pronWordList.appendChild(chip);
  });
}

function applyPronunciationHighlightsToRuby() {
  const evalResult = state.lastPronunciationResult;
  const tokenEls = document.querySelectorAll(".word-token");
  tokenEls.forEach((el, idx) => {
    el.classList.remove("pron-correct", "pron-partial", "pron-wrong");
    const wordEval = evalResult?.wordResults?.[idx];
    if (wordEval) {
      el.classList.add(`pron-${wordEval.status}`);
    }
  });
}

// ============================================================================
// Clipboard Paste (Text / Image) & Image-to-Text OCR API Engine
// ============================================================================
async function handlePasteFromClipboardButton() {
  try {
    // 1. Try reading rich clipboard items (images or text)
    if (navigator.clipboard && navigator.clipboard.read) {
      const clipboardItems = await navigator.clipboard.read();
      for (const item of clipboardItems) {
        const imageType = item.types.find((t) => t.startsWith("image/"));
        if (imageType) {
          const blob = await item.getType(imageType);
          await processImageToText(blob);
          return;
        }
      }
    }

    // 2. Fallback to reading plain text from clipboard
    if (navigator.clipboard && navigator.clipboard.readText) {
      const text = await navigator.clipboard.readText();
      if (text && text.trim()) {
        els.textInput.value = cleanExtractedText(text);
        updateStats();
        analyzeCurrentText();
        return;
      }
    }

    alert("Bộ nhớ tạm (Clipboard) đang trống hoặc trình duyệt chặn quyền đọc. Bạn có thể nhấn trực tiếp Ctrl+V (hoặc ⌘+V) vào ô nhập liệu!");
  } catch (err) {
    console.warn("Clipboard API read fallback:", err);
    els.textInput.focus();
    alert("Hãy nhấn tổ hợp phím Ctrl+V (hoặc ⌘+V trên Mac) để dán trực tiếp hình ảnh hoặc đoạn văn vào ô văn bản!");
  }
}

async function processImageToText(imageBlob) {
  if (!imageBlob) return;

  // Show preview banner
  const previewUrl = URL.createObjectURL(imageBlob);
  els.ocrPreviewImg.src = previewUrl;
  els.ocrStatusBanner.classList.remove("hidden");
  els.ocrStatusTitle.textContent = "⏳ Đang nén ảnh & nhận diện văn bản (AI OCR)...";
  els.ocrStatusSub.textContent = "Đang tối ưu kích thước ảnh để đọc nhanh nhất...";

  try {
    // Compress/downscale large screenshots to max 1400px JPEG (<100KB) for 5x faster OCR upload
    const { dataUrl, mimeType } = await compressImageForOcr(imageBlob);
    const base64Data = dataUrl.split(",")[1];

    let extractedText = "";
    let engineUsed = "";

    // Priority 1: Google Gemini Vision API (if configured)
    if (state.provider === "gemini" && state.geminiKey) {
      els.ocrStatusSub.textContent = "Đang trích xuất chữ tốc độ cao bằng Google Gemini Vision...";
      extractedText = await extractTextWithGeminiVision(base64Data, mimeType, state.geminiKey);
      engineUsed = "Gemini Vision AI";
    }
    // Priority 2: OpenAI Vision API (if configured)
    else if (state.provider === "openai" && state.openaiKey) {
      els.ocrStatusSub.textContent = "Đang trích xuất chữ bằng OpenAI GPT-4o Vision API...";
      extractedText = await extractTextWithOpenAIVision(dataUrl, state.openaiKey);
      engineUsed = "OpenAI Vision AI";
    }
    // Priority 3: Free OCR API (OCR.space + Tesseract.js Fallback)
    else {
      els.ocrStatusSub.textContent = "Đang trích xuất chữ bằng OCR API miễn phí...";
      extractedText = await extractTextWithFreeOcr(dataUrl, imageBlob);
      engineUsed = "Free OCR API";
    }

    const cleaned = cleanExtractedText(extractedText);
    if (!cleaned) {
      els.ocrStatusTitle.textContent = "⚠️ Không tìm thấy chữ tiếng Anh rõ ràng trong ảnh";
      els.ocrStatusSub.textContent = "Vui lòng thử cắt ảnh rõ nét hơn hoặc thêm Gemini/OpenAI API Key để nhận diện chính xác hơn.";
      return;
    }

    els.textInput.value = cleaned;
    updateStats();
    els.ocrStatusTitle.textContent = `✓ Đã chuyển ảnh sang chữ thành công (${engineUsed})`;
    els.ocrStatusSub.textContent = `Trích xuất được ${cleaned.split(/\s+/).length} từ • Đang phân tích IPA & dịch nghĩa...`;

    await analyzeCurrentText();
  } catch (err) {
    console.error("OCR Error:", err);
    els.ocrStatusTitle.textContent = `⚠️ Lỗi khi đọc chữ từ ảnh: ${err.message || "Không xác định"}`;
    els.ocrStatusSub.textContent = "Hãy thử lại với ảnh khác hoặc kiểm tra kết nối mạng / API Key.";
  }
}

async function extractTextWithGeminiVision(base64Data, mimeType, apiKey) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "Extract all English text from this image accurately. Return ONLY the plain extracted text without markdown formatting, explanations, or quotes. Rejoin hyphenated line-wraps and preserve paragraph breaks."
            },
            {
              inlineData: {
                mimeType,
                data: base64Data
              }
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        thinkingConfig: { thinkingBudget: 0 }
      }
    })
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Gemini OCR HTTP ${res.status}`);
  }

  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

async function extractTextWithOpenAIVision(dataUrl, apiKey) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.1,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Extract all English text from this image accurately. Return ONLY the plain extracted text without markdown formatting or commentary. Rejoin hyphenated line-wraps and preserve paragraph breaks."
            },
            {
              type: "image_url",
              image_url: { url: dataUrl }
            }
          ]
        }
      ]
    })
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `OpenAI OCR HTTP ${res.status}`);
  }

  const data = await res.json();
  return data?.choices?.[0]?.message?.content || "";
}

async function extractTextWithFreeOcr(dataUrl, imageBlob) {
  // 1. Try public OCR.space API first (fast cloud OCR)
  try {
    const formData = new FormData();
    formData.append("apikey", "helloworld");
    formData.append("language", "eng");
    formData.append("isOverlayRequired", "false");
    formData.append("scale", "true");
    formData.append("OCREngine", "2");
    formData.append("base64Image", dataUrl);

    const res = await fetchWithTimeout(
      "https://api.ocr.space/parse/image",
      {
        method: "POST",
        body: formData
      },
      4500
    );

    if (res.ok) {
      const data = await res.json();
      const parsedText = data?.ParsedResults?.[0]?.ParsedText?.trim();
      if (parsedText) return parsedText;
    }
  } catch (e) {
    console.warn("OCR.space fallback to Tesseract.js:", e);
  }

  // 2. Fallback to Tesseract.js loaded dynamically in browser
  if (!window.Tesseract) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
      script.onload = resolve;
      script.onerror = () => reject(new Error("Không thể tải thư viện OCR"));
      document.head.appendChild(script);
    });
  }

  const result = await window.Tesseract.recognize(imageBlob, "eng");
  return result?.data?.text || "";
}

// Downscale large Retina screenshots on an offscreen canvas so OCR upload is <100KB
async function compressImageForOcr(blob) {
  try {
    const imgUrl = URL.createObjectURL(blob);
    const img = await new Promise((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = imgUrl;
    });
    URL.revokeObjectURL(imgUrl);

    const maxDim = 1400;
    let { width, height } = img;
    if (width > maxDim || height > maxDim) {
      const scale = maxDim / Math.max(width, height);
      width = Math.round(width * scale);
      height = Math.round(height * scale);
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/jpeg", 0.84);
    return { dataUrl, mimeType: "image/jpeg" };
  } catch (_) {
    const dataUrl = await fileToDataUrl(blob);
    return { dataUrl, mimeType: blob.type || "image/png" };
  }
}

function fileToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Rejoin hyphenated line-wraps (e.g. "mid-\nOctober" -> "mid-October") and preserve paragraph breaks
function cleanExtractedText(rawText) {
  return String(rawText || "")
    .replace(/\r\n/g, "\n")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    // Rejoin hyphenated line breaks like "mid-\nOctober" or "state-\nrun"
    .replace(/([a-zA-Z0-9])-\s*\n\s*([a-zA-Z0-9])/g, "$1-$2")
    // Preserve double newlines as paragraph markers
    .replace(/\n\s*\n+/g, "\n\n")
    // Convert single line wraps within a paragraph into spaces
    .replace(/([^\n])\n([^\n])/g, "$1 $2")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ============================================================================
// LEXISPRO AI STUDIO — MULTI-MODULE ECOSYSTEM CONTROLLER
// (Speaking Lab • Reading Studio • Vocabulary Vault • IELTS Cambridge Center)
// ============================================================================
const SPEAKING_TOPICS_DB = {
  part1: [
    {
      id: "p1_work",
      category: "Part 1 • Work & Studies",
      timerSec: 60,
      question: "Do you work or are you a student? What do you enjoy most about your daily routine?",
      bullets: [
        "Mention your current occupation or major",
        "Highlight one key aspect that keeps you motivated",
        "Use natural linking phrases (To be honest, What I find most rewarding is...)"
      ],
      topicKeywords: ["work", "job", "student", "study", "university", "school", "office", "company", "colleague", "teacher", "major", "learn", "project", "routine", "career", "engineer", "developer", "manager", "business"],
      tiers: {
        "5.5": {
          idea: "Band 5.5: Trả lời trực tiếp nghề nghiệp/ngành học + nêu 1 điều bạn thích bằng câu ghép với 'because' và 'so'.",
          sample:
            "Right now, I work as a software developer in a small company. The thing I enjoy most every day is working with my friendly teammates because we always help each other solve difficult tasks.",
          phrases: [
            "work as a... (làm nghề...)",
            "the thing I enjoy most is (điều tôi thích nhất là)",
            "solve difficult tasks (giải quyết công việc khó)"
          ]
        },
        "6.5": {
          idea: "Band 6.5: Mở rộng bằng mệnh đề quan hệ ('which') + dùng cụm động từ (phrasal verb) và tính từ miêu tả cảm xúc.",
          sample:
            "Currently, I am working full-time as a software engineer. What I really like about my daily routine is carrying out new tech projects with my team, which allows me to learn practical skills every week.",
          phrases: [
            "work full-time as (làm toàn thời gian ở vị trí)",
            "carry out new projects (triển khai dự án mới)",
            "learn practical skills (học kỹ năng thực tế)"
          ]
        },
        "7.5": {
          idea: "Band 7.5: Sử dụng cấu trúc nhấn mạnh 'What I find most rewarding is...' + Collocations học thuật C1.",
          sample:
            "Currently, I work as a software engineer at a tech company. What I find most rewarding about my daily routine is the opportunity to tackle complex problems and collaborate with like-minded colleagues. It keeps me intellectually stimulated every single day.",
          phrases: [
            "find most rewarding (thấy xứng đáng/thú vị nhất)",
            "tackle complex problems (giải quyết vấn đề phức tạp)",
            "intellectually stimulated (kích thích tư duy)"
          ]
        }
      }
    },
    {
      id: "p1_reading",
      category: "Part 1 • Reading Habits (Cam 16–21)",
      timerSec: 60,
      question: "Do you prefer reading physical books or e-books? Why?",
      bullets: [
        "Compare convenience vs sensory experience",
        "Give a specific example of when you read",
        "Use C1 adjectives (portable, tactile, immersive)"
      ],
      topicKeywords: ["book", "read", "ebook", "kindle", "paper", "page", "screen", "phone", "ipad", "library", "carry", "convenient", "cheap", "story", "novel", "news"],
      tiers: {
        "5.5": {
          idea: "Band 5.5: Chọn rõ 1 loại sách + đưa ra 2 lý do thực tế (nhẹ, dễ mang theo hoặc đỡ mỏi mắt) với 'Although'.",
          sample:
            "To be honest, I prefer reading e-books on my tablet. Although paper books feel nice to hold, e-books are much lighter and easier to carry when I go to school or travel on the bus.",
          phrases: [
            "to be honest (thành thật mà nói)",
            "much lighter and easier to carry (nhẹ và dễ mang theo hơn nhiều)",
            "feel nice to hold (cầm trên tay rất thích)"
          ]
        },
        "6.5": {
          idea: "Band 6.5: So sánh đối lập hai hình thức đọc + nêu tình huống cụ thể (đọc khi đi làm/đi học).",
          sample:
            "Even though I still enjoy the smell and feel of printed books, I tend to read e-books more often nowadays. They allow me to store hundreds of titles on a single device, which saves a lot of space in my backpack.",
          phrases: [
            "tend to read... more often (có xu hướng đọc... thường xuyên hơn)",
            "store hundreds of titles (lưu trữ hàng trăm đầu sách)",
            "save a lot of space (tiết kiệm nhiều diện tích)"
          ]
        },
        "7.5": {
          idea: "Band 7.5: Dùng động từ C1 'gravitate towards' + danh từ ghép học thuật 'unmatched portability'.",
          sample:
            "While I appreciate the tactile feel of a traditional hardcover book, I mostly gravitate towards e-books nowadays simply because of their unmatched portability. Having an entire library at my fingertips during my daily commute is incredibly convenient.",
          phrases: [
            "gravitate towards (nghiêng về / yêu thích hơn)",
            "unmatched portability (tính di động vượt trội)",
            "at my fingertips (ngay trong tầm tay)"
          ]
        }
      }
    }
  ],
  part2: [
    {
      id: "p2_tech",
      category: "Part 2 • Cue Card (Technology)",
      timerSec: 120,
      question: "Describe a piece of technology (not a phone) that you find particularly useful in your daily life.",
      bullets: [
        "What the technology is and when you got it",
        "How often you use it and for what purposes",
        "How it compares to other similar devices",
        "And explain why it has made your life easier or more productive."
      ],
      topicKeywords: ["laptop", "computer", "ipad", "tablet", "headphone", "earphone", "watch", "smartwatch", "kindle", "camera", "robot", "vacuum", "air fryer", "tv", "device", "gadget", "machine", "work", "study", "music", "battery", "screen", "convenient", "time", "productive", "useful"],
      tiers: {
        "5.5": {
          idea: "Band 5.5: Giới thiệu thiết bị (tai nghe / laptop / iPad...) + mua khi nào + dùng làm gì hằng ngày + vì sao nó hữu ích.",
          sample:
            "I would like to talk about my wireless headphones, which I bought last year. I use them every day when I study English and listen to music on the bus. Compared to normal earphones, they block noise much better. They are very useful because they help me focus on my lessons even in a noisy coffee shop.",
          phrases: [
            "I would like to talk about (Tôi muốn kể về)",
            "block noise much better (chặn tiếng ồn tốt hơn nhiều)",
            "help me focus on my lessons (giúp tôi tập trung vào bài học)"
          ]
        },
        "6.5": {
          idea: "Band 6.5: Bổ sung ngữ cảnh công việc/học tập + dùng mệnh đề phân từ & Collocations chỉ hiệu suất ('boost my productivity').",
          sample:
            "A piece of technology that plays a vital role in my daily routine is my pair of noise-cancelling headphones, which I bought about a year ago. Since I often study and work in crowded cafes, I wear them for several hours a day. They tune out background chatter effectively, helping me stay focused and boost my daily productivity.",
          phrases: [
            "play a vital role in (đóng vai trò quan trọng trong)",
            "tune out background chatter (lọc bỏ tiếng ồn trò chuyện xung quanh)",
            "boost my daily productivity (tăng năng suất làm việc mỗi ngày)"
          ]
        },
        "7.5": {
          idea: "Band 7.5: Mở bài bằng tính từ C1 'indispensable' + thành ngữ 'a complete game-changer' + cấu trúc đảo ngữ 'Not only... but also...'.",
          sample:
            "One indispensable piece of technology I rely on daily is my noise-cancelling wireless headphones, which I purchased about a year ago. As someone who works in a bustling environment, they have been a complete game-changer for my concentration and productivity. Not only do they block out ambient distractions effortlessly, but they also allow me to immerse myself in English podcasts during my daily commute.",
          phrases: [
            "indispensable /ˌɪndɪˈspensəbl/ (không thể thiếu)",
            "a complete game-changer (bước ngoặt lớn)",
            "block out ambient distractions (chặn tiếng ồn xung quanh)"
          ]
        }
      }
    },
    {
      id: "p2_journey",
      category: "Part 2 • Cue Card (Memorable Journey)",
      timerSec: 120,
      question: "Describe an unforgettable journey or trip you have taken recently.",
      bullets: [
        "Where you went and who accompanied you",
        "What breathtaking scenery or culture you experienced",
        "What unexpected challenge happened along the way",
        "And explain why this journey left a lasting impression on you."
      ],
      topicKeywords: ["trip", "journey", "travel", "visit", "beach", "mountain", "city", "island", "da nang", "da lat", "ha long", "sapa", "hue", "hoi an", "family", "friend", "food", "hotel", "flight", "train", "car", "motorbike", "view", "weather", "relax", "memorable", "photo"],
      tiers: {
        "5.5": {
          idea: "Band 5.5: Kể theo trình tự thời gian (Đi đâu, với ai → Cảnh đẹp & đồ ăn → Cảm xúc sau chuyến đi).",
          sample:
            "Last summer, I went on a wonderful trip to Da Nang with my close friends. We traveled along the coast by motorbike and saw beautiful beaches and mountains. Although it rained heavily on the second day, we still enjoyed delicious local seafood. This trip was unforgettable because it helped me relax after my busy exams.",
          phrases: [
            "went on a wonderful trip to (có một chuyến đi tuyệt vời tới)",
            "delicious local seafood (hải sản địa phương ngon tuyệt)",
            "relax after my busy exams (thư giãn sau kỳ thi bận rộn)"
          ]
        },
        "6.5": {
          idea: "Band 6.5: Kết hợp tính từ miêu tả phong cảnh ('stunning coastal views') + cụm thành ngữ ('take a break from the hustle and bustle').",
          sample:
            "One of the most memorable trips I have ever taken was my coastal journey to central Vietnam last summer with my university friends. Riding along the mountain pass, we were amazed by the stunning views of the blue ocean. Taking a break from the hustle and bustle of city life really helped me refresh my mind.",
          phrases: [
            "stunning views of the ocean (khung cảnh đại dương tuyệt đẹp)",
            "the hustle and bustle of city life (sự ồn ào hối hả nơi phố thị)",
            "refresh my mind (làm mới lại tinh thần)"
          ]
        },
        "7.5": {
          idea: "Band 7.5: Dùng Collocation C1 'etched in my memory', 'breathtaking panoramic views' và thành ngữ 'recharge my batteries'.",
          sample:
            "A trip that remains etched in my memory is my coastal road trip to central Vietnam last summer. The breathtaking panoramic views of the ocean winding alongside dramatic mountain passes were truly awe-inspiring. Stepping away from the hectic pace of city life allowed me to recharge my batteries and gain a fresh perspective.",
          phrases: [
            "etched in my memory (khắc sâu trong tâm trí)",
            "breathtaking panoramic views (toàn cảnh đẹp ngoạn mục)",
            "recharge my batteries (nạp lại năng lượng)"
          ]
        }
      }
    }
  ],
  part3: [
    {
      id: "p3_ai",
      category: "Part 3 • Artificial Intelligence & Society",
      timerSec: 90,
      question: "To what extent do you think artificial intelligence will replace human workers in the next decade?",
      bullets: [
        "Distinguish between repetitive tasks and creative/empathetic roles",
        "Provide a balanced argument (While it is undeniable that..., I firmly believe...)",
        "Discuss workforce adaptation and upskilling"
      ],
      topicKeywords: ["ai", "artificial", "intelligence", "robot", "machine", "automation", "replace", "human", "worker", "job", "future", "creative", "emotion", "teacher", "doctor", "factory", "skill", "learn", "technology"],
      tiers: {
        "5.5": {
          idea: "Band 5.5: Chia làm 2 vế rõ ràng: AI sẽ thay thế việc lặp đi lặp lại, nhưng không thể thay thế công việc cần cảm xúc con người.",
          sample:
            "In my opinion, AI will replace some simple jobs like factory workers or cashiers because machines can work faster without getting tired. However, I don't think AI can replace teachers or doctors because computers do not have human feelings or creativity.",
          phrases: [
            "work faster without getting tired (làm nhanh hơn mà không biết mệt)",
            "human feelings or creativity (cảm xúc hoặc sự sáng tạo của con người)",
            "in my opinion (theo quan điểm của tôi)"
          ]
        },
        "6.5": {
          idea: "Band 6.5: Dùng cấu trúc nhượng bộ 'Although AI is becoming more advanced...' + nêu giải pháp học nâng cao kỹ năng.",
          sample:
            "Although AI is becoming increasingly powerful and will likely take over repetitive office tasks, I believe it cannot fully replace human workers. Jobs that require empathy, critical thinking, and complex communication will still need humans. Instead, workers will learn to use AI as a helpful tool.",
          phrases: [
            "take over repetitive tasks (tiếp quản các công việc lặp đi lặp lại)",
            "empathy and critical thinking (sự thấu cảm và tư duy phản biện)",
            "use AI as a helpful tool (sử dụng AI như một công cụ hỗ trợ)"
          ]
        },
        "7.5": {
          idea: "Band 7.5: Lập luận cân bằng học thuật 'While it is undeniable that...' + động từ C1 'phase out', 'augment human intelligence'.",
          sample:
            "While it is undeniable that automation will phase out many routine, repetitive jobs, I firmly believe that AI will augment rather than completely replace human intelligence. Professions requiring emotional intelligence, ethical judgment, and creative innovation will still rely heavily on human oversight.",
          phrases: [
            "phase out routine jobs (dần thay thế các công việc lặp lại)",
            "augment human intelligence (bổ trợ trí tuệ con người)",
            "emotional intelligence & oversight (trí tuệ cảm xúc & sự giám sát)"
          ]
        }
      }
    }
  ],
  shadowing: [
    {
      id: "sh_rhythm",
      category: "Shadowing • Native Intonation & Linking",
      timerSec: 60,
      question: "Nghe mẫu và nhại lại (Shadowing) đúng tốc độ, nối âm và ngữ điệu của câu dưới đây:",
      bullets: [
        "Chú ý nối âm: 'not_only', 'block_out', 'immerse_myself_in'",
        "Nhấn trọng âm câu vào các từ khóa: indispensable, game-changer, concentration"
      ],
      topicKeywords: ["consistency", "secret", "fluent", "pronunciation", "shadowing", "practice", "rhythm", "stress", "connected", "speech"],
      tiers: {
        "5.5": {
          idea: "Band 5.5 Shadowing: Tập đọc chậm, rõ từng âm cuối (/s/, /t/, /d/) và giữ nhịp đều đặn.",
          sample:
            "Practicing English every day is the best way to improve your pronunciation. If you listen carefully and repeat after native speakers, your speaking will sound much clearer and more natural.",
          phrases: [
            "improve your pronunciation (cải thiện phát âm)",
            "repeat after native speakers (lặp lại theo người bản xứ)",
            "clearer and more natural (rõ ràng và tự nhiên hơn)"
          ]
        },
        "6.5": {
          idea: "Band 6.5 Shadowing: Luyện nhấn đúng trọng âm từ (word stress) và nối âm phụ âm + nguyên âm.",
          sample:
            "Regular shadowing practice helps you develop a natural flow when speaking English. By mimicking native speakers for ten minutes daily, you can noticeably improve your intonation and confidence.",
          phrases: [
            "develop a natural flow (tạo độ trôi chảy tự nhiên)",
            "mimicking native speakers (bắt chước ngữ điệu bản xứ)",
            "improve your intonation (cải thiện ngữ điệu)"
          ]
        },
        "7.5": {
          idea: "Band 7.5 Shadowing: Làm chủ nhịp điệu câu (sentence stress), giảm âm (weak forms) và nối âm mượt mà.",
          sample:
            "Consistency is the secret to mastering fluent English pronunciation. By practicing shadowing for just ten minutes a day, you naturally absorb native rhythm, stress patterns, and connected speech.",
          phrases: [
            "stress patterns (quy tắc trọng âm)",
            "connected speech (nối âm tự nhiên)",
            "absorb native rhythm (thấm nhuần nhịp điệu bản xứ)"
          ]
        }
      }
    }
  ]
};

const READING_PASSAGES_DB = {
  ai_work: {
    category: "📚 Cambridge IELTS 19 • Passage 1",
    title: "Artificial Intelligence and the Transformation of Global Labor Markets",
    paragraphs: [
      {
        en: "Over the past decade, rapid advancements in machine learning and generative algorithms have reshaped the landscape of modern industry. Unlike previous waves of automation that primarily affected manual manufacturing, contemporary artificial intelligence is capable of performing cognitive tasks ranging from financial forecasting to software synthesis.",
        vi: "Trong thập kỷ qua, những tiến bộ nhanh chóng trong học máy và các thuật toán tạo sinh đã định hình lại bức tranh của nền công nghiệp hiện đại. Không giống như các làn sóng tự động hóa trước đây chủ yếu ảnh hưởng đến sản xuất thủ công, trí tuệ nhân tạo đương đại có khả năng thực hiện các tác vụ nhận thức từ dự báo tài chính đến tổng hợp phần mềm."
      },
      {
        en: "However, economists emphasize that technological disruption rarely leads to permanent mass unemployment. Instead, historical evidence suggests a gradual transition in which obsolete roles are superseded by newly created professions that demand higher-order analytical skills and interdisciplinary collaboration.",
        vi: "Tuy nhiên, các nhà kinh tế nhấn mạnh rằng sự đột phá công nghệ hiếm khi dẫn đến tình trạng thất nghiệp hàng loạt vĩnh viễn. Thay vào đó, bằng chứng lịch sử cho thấy một sự chuyển dịch dần dần, trong đó các vai trò lỗi thời được thay thế bởi những ngành nghề mới đòi hỏi kỹ năng phân tích bậc cao và sự hợp tác liên ngành."
      },
      {
        en: "Consequently, educational institutions and policymakers face an urgent imperative to redesign curricula. Prioritizing lifelong adaptability and critical thinking will determine whether the workforce thrives alongside intelligent systems.",
        vi: "Do đó, các tổ chức giáo dục và các nhà hoạch định chính sách phải đối mặt với một yêu cầu cấp bách là thiết kế lại chương trình giảng dạy. Việc ưu tiên khả năng thích ứng suốt đời và tư duy phản biện sẽ quyết định liệu lực lượng lao động có phát triển thịnh vượng cùng với các hệ thống thông minh hay không."
      }
    ],
    academicTerms: ["advancements", "contemporary", "cognitive", "disruption", "obsolete", "superseded", "interdisciplinary", "imperative"],
    questions: [
      {
        q: "1. Previous waves of automation mainly impacted cognitive and financial sectors.",
        answer: "FALSE",
        explanation: "Đoạn 1 nêu rõ: 'Unlike previous waves of automation that primarily affected manual manufacturing...' (Trước đây chủ yếu ảnh hưởng sản xuất thủ công, không phải nhận thức/tài chính)."
      },
      {
        q: "2. Economists believe that technological disruption inevitably causes permanent mass unemployment.",
        answer: "FALSE",
        explanation: "Đoạn 2 nêu rõ: 'technological disruption rarely leads to permanent mass unemployment' (hiếm khi dẫn đến thất nghiệp hàng loạt vĩnh viễn)."
      },
      {
        q: "3. Every university in the world has already completed redesigning its curriculum for AI.",
        answer: "NOT GIVEN",
        explanation: "Đoạn 3 chỉ nói các trường đối mặt với yêu cầu cấp bách ('urgent imperative') cần thiết kế lại, không có thông tin nói mọi trường đã hoàn thành."
      },
      {
        q: "4. Newly created professions require analytical skills and collaboration across disciplines.",
        answer: "TRUE",
        explanation: "Đoạn 2 xác nhận: '...newly created professions that demand higher-order analytical skills and interdisciplinary collaboration.'"
      }
    ]
  },
  neuro_sleep: {
    category: "📚 Cambridge IELTS 18 • Passage 2",
    title: "The Neuroscience of Sleep and Memory Consolidation",
    paragraphs: [
      {
        en: "Far from being a passive state of dormancy, sleep is an active neurological process essential for memory consolidation. During slow-wave sleep, the hippocampus replays newly acquired experiences and transfers them to the cerebral cortex for long-term storage.",
        vi: "Khác xa với trạng thái nghỉ ngơi thụ động, giấc ngủ là một quá trình thần kinh chủ động thiết yếu để củng cố trí nhớ. Trong giấc ngủ sóng chậm, hồi hải mã phát lại những trải nghiệm mới tiếp thu và chuyển chúng đến vỏ não để lưu trữ dài hạn."
      },
      {
        en: "Furthermore, recent neuroimaging studies have revealed the existence of the glymphatic system, a waste-clearance mechanism that becomes tenfold more active during sleep, flushing out metabolic neurotoxins accumulated throughout waking hours.",
        vi: "Hơn nữa, các nghiên cứu hình ảnh thần kinh gần đây đã phát hiện ra sự tồn tại của hệ thống glymphatic, một cơ chế dọn dẹp chất thải hoạt động mạnh gấp mười lần trong khi ngủ, giúp đào thải các độc tố thần kinh tích tụ suốt những giờ thức."
      }
    ],
    academicTerms: ["dormancy", "consolidation", "hippocampus", "acquired", "cerebral", "neuroimaging", "accumulated"],
    questions: [
      {
        q: "1. Sleep is a completely passive state where the brain stops all neurological activity.",
        answer: "FALSE",
        explanation: "Đoạn 1 nêu: 'Far from being a passive state of dormancy, sleep is an active neurological process...'"
      },
      {
        q: "2. The glymphatic system operates ten times more actively during sleep than during wakefulness.",
        answer: "TRUE",
        explanation: "Đoạn 2 nêu: '...becomes tenfold more active during sleep, flushing out metabolic neurotoxins...'"
      }
    ]
  },
  green_cities: {
    category: "📙 Cambridge IELTS 17 • Test 1 Passage 2",
    title: "Stadiums: Past, Present and Future & Sustainable Urban Architecture",
    paragraphs: [
      {
        en: "As metropolitan populations burgeon globally, architects are pioneering sustainable stadiums and vertical forests—high-rise structures integrated with solar canopies and thousands of indigenous trees. These living facades mitigate the urban heat island effect while absorbing tons of carbon dioxide annually.",
        vi: "Khi dân số đô thị bùng nổ trên toàn cầu, các kiến trúc sư đang tiên phong xây dựng các sân vận động bền vững và khu rừng thẳng đứng—các công trình tích hợp mái vòm năng lượng mặt trời cùng hàng ngàn cây bản địa. Những mặt tiền sống động này làm giảm hiệu ứng đảo nhiệt đô thị đồng thời hấp thụ hàng tấn khí CO2 mỗi năm."
      },
      {
        en: "Beyond environmental metrics, modern stadiums are being redesigned as mixed-use community hubs rather than single-purpose arenas, ensuring economic viability and biodiversity throughout the year.",
        vi: "Vượt ra ngoài các chỉ số môi trường, các sân vận động hiện đại đang được thiết kế lại thành các trung tâm cộng đồng đa năng thay vì chỉ phục vụ một mục đích duy nhất, đảm bảo tính khả thi về kinh tế và đa dạng sinh học quanh năm."
      }
    ],
    academicTerms: ["metropolitan", "burgeon", "pioneering", "indigenous", "mitigate", "biodiversity", "viability"],
    questions: [
      {
        q: "1. Modern sustainable stadiums and vertical facades help mitigate the urban heat island effect.",
        answer: "TRUE",
        explanation: "Đoạn 1 nêu: 'These living facades mitigate the urban heat island effect while absorbing tons of carbon dioxide annually.'"
      },
      {
        q: "2. Modern stadiums are designed exclusively for sporting events and remain closed on non-match days.",
        answer: "FALSE",
        explanation: "Đoạn 2 nêu: '...modern stadiums are being redesigned as mixed-use community hubs rather than single-purpose arenas...'"
      }
    ]
  },
  cam18_urban: {
    category: "📗 Cambridge IELTS 18 • Test 1 Passage 1",
    title: "Urban Farming: Vertical & Soil-Free Aeroponic Agriculture in Paris",
    paragraphs: [
      {
        en: "On top of a striking exhibition hall in southern Paris, the world's largest urban rooftop farm is thriving. Using soil-free aeroponic columns, strawberries and lettuces grow suspended in the air while nutrient-rich mist is sprayed directly onto their roots, consuming ninety percent less water than classic intensive farming.",
        vi: "Trên nóc một khu triển lãm nổi bật ở phía nam Paris, trang trại sân thượng đô thị lớn nhất thế giới đang phát triển mạnh mẽ. Sử dụng các cột khí canh không cần đất, dâu tây và xà lách mọc lơ lửng trong không trung khi sương mù giàu dinh dưỡng được phun trực tiếp vào rễ, tiêu thụ ít hơn 90% lượng nước so với canh tác thâm canh cổ điển."
      },
      {
        en: "Because produce is harvested and delivered to local Parisian households on the same day, urban farming virtually eliminates long-haul refrigerated transport and drastically reduces carbon emissions.",
        vi: "Bởi vì nông sản được thu hoạch và giao đến các hộ gia đình ở Paris ngay trong ngày, nông nghiệp đô thị gần như loại bỏ hoàn toàn vận chuyển đông lạnh đường dài và cắt giảm mạnh lượng khí thải carbon."
      }
    ],
    academicTerms: ["thriving", "aeroponic", "suspended", "intensive", "harvested", "eliminates", "emissions"],
    questions: [
      {
        q: "1. Aeroponic urban farming in Paris uses 90% less water than traditional intensive agriculture.",
        answer: "TRUE",
        explanation: "Đoạn 1 nêu rõ: '...consuming ninety percent less water than classic intensive farming.'"
      },
      {
        q: "2. Rooftop farms can already supply 100% of the grain and wheat consumed by urban residents.",
        answer: "NOT GIVEN",
        explanation: "Bài đọc chỉ đề cập đến rau quả (strawberries, lettuces) và giảm vận chuyển, không nói cung cấp 100% ngũ cốc/lúa mì."
      }
    ]
  },
  cam19_misinfo: {
    category: "📘 Cambridge IELTS 19 • Test 1 Passage 3",
    title: "The Persistence and Peril of Misinformation",
    paragraphs: [
      {
        en: "Misinformation—both deliberate falsehoods and inadvertent inaccuracies—has become an inescapable feature of the digital information ecosystem. Psychological research reveals that once a false claim is encoded into human memory, subsequent retractions rarely eradicate its lingering influence, a phenomenon known as the continued influence effect.",
        vi: "Thông tin sai lệch—bao gồm cả những lời bịa đặt cố ý lẫn những sai sót vô tình—đã trở thành một đặc điểm khó tránh khỏi của hệ sinh thái thông tin số. Nghiên cứu tâm lý học chỉ ra rằng một khi tuyên bố sai sự thật đã được mã hóa vào trí nhớ con người, những lời đính chính sau đó hiếm khi xóa bỏ được ảnh hưởng dai dẳng của nó, một hiện tượng được gọi là hiệu ứng ảnh hưởng tiếp diễn."
      },
      {
        en: "To counter this cognitive vulnerability, scientists advocate prebunking: exposing citizens to weakened doses of manipulative rhetoric beforehand so they develop mental antibodies against deceptive narratives.",
        vi: "Để chống lại điểm yếu nhận thức này, các nhà khoa học ủng hộ phương pháp 'tiêm phòng thông tin' (prebunking): cho người dân tiếp xúc trước với các liều lượng nhỏ của thuật hùng biện thao túng để họ hình thành kháng thể tinh thần chống lại các luận điệu lừa dối."
      }
    ],
    academicTerms: ["inadvertent", "inescapable", "retractions", "eradicate", "vulnerability", "manipulative", "rhetoric"],
    questions: [
      {
        q: "1. Simply issuing a retraction immediately removes the influence of false information from human memory.",
        answer: "FALSE",
        explanation: "Đoạn 1 nêu: '...subsequent retractions rarely eradicate its lingering influence, a phenomenon known as the continued influence effect.'"
      },
      {
        q: "2. Prebunking helps people build mental resistance by exposing them to mild examples of manipulation in advance.",
        answer: "TRUE",
        explanation: "Đoạn 2 nêu: '...exposing citizens to weakened doses of manipulative rhetoric beforehand so they develop mental antibodies...'"
      }
    ]
  },
  cam20_kakapo: {
    category: "⚡ Cambridge IELTS 20 • Test 1 Passage 1",
    title: "The Kākāpō: Saving New Zealand's Critically Endangered Flightless Parrot",
    paragraphs: [
      {
        en: "The kākāpō is a nocturnal, flightless parrot endemic to New Zealand and one of the longest-living birds on Earth. Prior to human arrival, the species inhabited forests across both main islands, relying on its mottled moss-green plumage to freeze and blend seamlessly into the foliage when aerial predators hovered overhead.",
        vi: "Kākāpō là loài vẹt kiếm ăn đêm, không biết bay, đặc hữu của New Zealand và là một trong những loài chim sống thọ nhất Trái Đất. Trước khi con người đặt chân đến, loài này sinh sống khắp các khu rừng trên cả hai đảo chính, dựa vào bộ lông màu xanh rêu lốm đốm để đứng bất động và hòa lẫn hoàn toàn vào tán lá khi kẻ săn mồi trên không lượn phía trên."
      },
      {
        en: "However, this evolutionary defense proved catastrophic against introduced mammalian predators such as stoats and feral cats, which hunt by scent rather than sight. Intensive translocation to predator-free offshore islands has since rescued the kākāpō from imminent extinction.",
        vi: "Tuy nhiên, cơ chế phòng vệ tiến hóa này lại trở thành thảm họa trước các loài thú săn mồi du nhập như chồn ecmin và mèo hoang, vốn săn mồi bằng khứu giác thay vì thị giác. Chương trình di dời chuyên sâu sang các hòn đảo xa bờ không có thú săn mồi đã cứu loài kākāpō khỏi nguy cơ tuyệt chủng cận kề."
      }
    ],
    academicTerms: ["nocturnal", "endemic", "plumage", "foliage", "catastrophic", "mammalian", "translocation"],
    questions: [
      {
        q: "1. The kākāpō's camouflage strategy was highly effective against introduced mammalian predators like feral cats.",
        answer: "FALSE",
        explanation: "Đoạn 2 nêu: '...this evolutionary defense proved catastrophic against introduced mammalian predators... which hunt by scent rather than sight.'"
      },
      {
        q: "2. Relocating kākāpō populations to predator-free islands has helped prevent their extinction.",
        answer: "TRUE",
        explanation: "Đoạn 2 nêu: 'Intensive translocation to predator-free offshore islands has since rescued the kākāpō from imminent extinction.'"
      }
    ]
  },
  cam21_silence: {
    category: "🔥 Cambridge IELTS 21 (2026 Mới nhất) • Test 1 Passage 2",
    title: "Why We Need Silence: Acoustic Ecology and the Overstimulated Brain",
    paragraphs: [
      {
        en: "In an era dominated by incessant urban traffic, industrial hum, and digital notifications, genuine acoustic silence has become a scarce ecological resource. Neuroscientists investigating auditory overstimulation have demonstrated that chronic background noise elevates cortisol secretion and impairs executive cognitive functioning.",
        vi: "Trong kỷ nguyên bị thống trị bởi giao thông đô thị không ngừng nghỉ, tiếng ồn công nghiệp và thông báo kỹ thuật số, sự tĩnh lặng âm thanh thực sự đã trở thành một nguồn tài nguyên sinh thái khan hiếm. Các nhà thần kinh học nghiên cứu về sự kích thích thính giác quá mức đã chứng minh rằng tiếng ồn nền mãn tính làm tăng tiết hormone căng thẳng cortisol và làm suy giảm chức năng nhận thức điều hành."
      },
      {
        en: "Conversely, periods of deliberate silence stimulate neurogenesis in the hippocampus—the brain region governing memory consolidation and emotional equilibrium—suggesting that preserving quiet zones in metropolitan planning is a public health imperative.",
        vi: "Ngược lại, những khoảng thời gian tĩnh lặng chủ đích kích thích sự hình thành tế bào thần kinh mới ở hồi hải mã—vùng não điều khiển việc củng cố trí nhớ và cân bằng cảm xúc—cho thấy việc bảo tồn các vùng yên tĩnh trong quy hoạch đô thị là một yêu cầu cấp thiết về y tế cộng đồng."
      }
    ],
    academicTerms: ["incessant", "scarce", "auditory", "overstimulation", "secretion", "neurogenesis", "imperative"],
    questions: [
      {
        q: "1. Chronic exposure to background noise increases stress hormones and negatively affects cognitive performance.",
        answer: "TRUE",
        explanation: "Đoạn 1 nêu: '...chronic background noise elevates cortisol secretion and impairs executive cognitive functioning.'"
      },
      {
        q: "2. Silence has been shown to stimulate the growth of new brain cells in the hippocampus.",
        answer: "TRUE",
        explanation: "Đoạn 2 nêu: '...periods of deliberate silence stimulate neurogenesis in the hippocampus...'"
      }
    ]
  }
};

const ROOT_WORDS_DB = [
  {
    id: "spect",
    root: "spect / spec / spic",
    origin: "LATIN ROOT",
    meaning: "Nhìn, quan sát, xem xét (to look, see, observe)",
    tip: "💡 Khi gặp từ chứa 'spect' hoặc 'spic', 95% nghĩa của từ xoay quanh hành động NHÌN hoặc GÓC NHÌN.",
    derivatives: [
      {
        word: "perspective",
        level: "C1",
        us: "pərˈspektɪv",
        uk: "pəˈspektɪv",
        pos: "noun",
        formula: "per- (xuyên qua) + spect (nhìn) + -ive",
        vi: "góc nhìn, quan điểm, viễn cảnh",
        example: "Traveling abroad gives you a broader perspective on global cultures."
      },
      {
        word: "retrospect",
        level: "C1",
        us: "ˈretrəspekt",
        uk: "ˈretrəspekt",
        pos: "noun",
        formula: "retro- (ngược về sau) + spect (nhìn)",
        vi: "sự nhìn lại quá khứ (in retrospect)",
        example: "In retrospect, transitioning to renewable energy was a wise decision."
      },
      {
        word: "conspicuous",
        level: "C2",
        us: "kənˈspɪkjuəs",
        uk: "kənˈspɪkjuəs",
        pos: "adj",
        formula: "con- (rõ/cùng) + spic (nhìn) + -uous",
        vi: "dễ thấy, đập vào mắt, nổi bật",
        example: "There was a conspicuous absence of empirical evidence in the report."
      },
      {
        word: "speculate",
        level: "C1",
        us: "ˈspekjuleɪt",
        uk: "ˈspekjuleɪt",
        pos: "verb",
        formula: "spec (quan sát) + -ulate (động từ)",
        vi: "suy đoán, đầu cơ",
        example: "Economists continue to speculate about the future of digital currencies."
      }
    ]
  },
  {
    id: "dict",
    root: "dict",
    origin: "LATIN ROOT",
    meaning: "Nói, tuyên bố, ra lệnh (to say, speak, declare)",
    tip: "💡 Gốc 'dict' (như trong dictionary) luôn mang nghĩa liên quan đến LỜI NÓI hoặc PHÁN QUYẾT.",
    derivatives: [
      {
        word: "contradict",
        level: "C1",
        us: "ˌkɑːntrəˈdɪkt",
        uk: "ˌkɒntrəˈdɪkt",
        pos: "verb",
        formula: "contra- (ngược lại) + dict (nói)",
        vi: "mâu thuẫn, phản bác lại",
        example: "Recent satellite data directly contradicts the initial hypothesis."
      },
      {
        word: "jurisdiction",
        level: "C2",
        us: "ˌdʒʊrɪsˈdɪkʃn",
        uk: "ˌdʒʊərɪsˈdɪkʃn",
        pos: "noun",
        formula: "juris (luật pháp) + dict (tuyên bố) + -ion",
        vi: "quyền tài phán, thẩm quyền pháp lý",
        example: "The federal court ruled that the matter fell outside its jurisdiction."
      },
      {
        word: "verdict",
        level: "B2+",
        us: "ˈvɜːrdɪkt",
        uk: "ˈvɜːdɪkt",
        pos: "noun",
        formula: "ver- (sự thật) + dict (nói/phán)",
        vi: "phán quyết (của tòa án / hội đồng)",
        example: "The jury reached a unanimous verdict after days of deliberation."
      },
      {
        word: "predictable",
        level: "B2",
        us: "prɪˈdɪktəbl",
        uk: "prɪˈdɪktəbl",
        pos: "adj",
        formula: "pre- (trước) + dict (nói) + -able",
        vi: "có thể dự đoán trước",
        example: "Climate patterns have become increasingly less predictable."
      }
    ]
  },
  {
    id: "struct",
    root: "struct",
    origin: "LATIN ROOT",
    meaning: "Xây dựng, sắp xếp, lắp ghép (to build, put together)",
    tip: "💡 Kết hợp 'struct' với các tiền tố in- (bên trong), de- (phá hủy), ob- (cản trở), re- (lại) tạo ra hàng loạt từ IELTS Writing Task 2!",
    derivatives: [
      {
        word: "infrastructure",
        level: "C1",
        us: "ˈɪnfrəstrʌktʃər",
        uk: "ˈɪnfrəstrʌktʃə",
        pos: "noun",
        formula: "infra- (bên dưới) + struct (xây dựng) + -ure",
        vi: "cơ sở hạ tầng",
        example: "Investing in public transport infrastructure reduces urban congestion."
      },
      {
        word: "constructive",
        level: "B2+",
        us: "kənˈstrʌktɪv",
        uk: "kənˈstrʌktɪv",
        pos: "adj",
        formula: "con- (cùng nhau) + struct (xây) + -ive",
        vi: "mang tính xây dựng, đóng góp hữu ích",
        example: "Teachers should provide constructive feedback to help students improve."
      },
      {
        word: "obstruct",
        level: "C1",
        us: "əbˈstrʌkt",
        uk: "əbˈstrʌkt",
        pos: "verb",
        formula: "ob- (chống lại/chắn) + struct (xây)",
        vi: "cản trở, làm tắc nghẽn",
        example: "Bureaucratic red tape often obstructs technological innovation."
      },
      {
        word: "restructure",
        level: "C1",
        us: "ˌriːˈstrʌktʃər",
        uk: "ˌriːˈstrʌktʃə",
        pos: "verb",
        formula: "re- (làm lại) + struct (cấu trúc) + -ure",
        vi: "tái cơ cấu, tổ chức lại",
        example: "Many corporations had to restructure their operations after the pandemic."
      }
    ]
  },
  {
    id: "tract",
    root: "tract",
    origin: "LATIN ROOT",
    meaning: "Kéo, lôi cuốn, rút ra (to pull, draw, drag)",
    tip: "💡 'tract' (như tractor - máy kéo): ex- (kéo ra = chiết xuất), dis- (kéo lệch = làm xao nhãng), pro- (kéo dài).",
    derivatives: [
      {
        word: "protracted",
        level: "C2",
        us: "proʊˈtræktɪd",
        uk: "prəˈtræktɪd",
        pos: "adj",
        formula: "pro- (về phía trước) + tract (kéo dài) + -ed",
        vi: "kéo dài dai dẳng (cuộc đàm phán/tranh chấp)",
        example: "The two nations engaged in protracted negotiations over trade tariffs."
      },
      {
        word: "extract",
        level: "B2+",
        us: "ɪkˈstrækt",
        uk: "ɪkˈstrækt",
        pos: "verb",
        formula: "ex- (ra ngoài) + tract (kéo/rút)",
        vi: "chiết xuất, khai thác, trích xuất",
        example: "Algorithms can extract valuable insights from massive datasets."
      },
      {
        word: "distraction",
        level: "B2",
        us: "dɪˈstrækʃn",
        uk: "dɪˈstrækʃn",
        pos: "noun",
        formula: "dis- (ra xa) + tract (kéo) + -ion",
        vi: "sự xao nhãng, yếu tố gây phân tâm",
        example: "Noise-cancelling headphones help eliminate ambient distractions."
      },
      {
        word: "intractable",
        level: "C2",
        us: "ɪnˈtræktəbl",
        uk: "ɪnˈtræktəbl",
        pos: "adj",
        formula: "in- (không thể) + tract (điều khiển/kéo) + -able",
        vi: "nan giải, cực kỳ khó giải quyết",
        example: "Poverty and climate change remain intractable global challenges."
      }
    ]
  },
  {
    id: "rupt",
    root: "rupt",
    origin: "LATIN ROOT",
    meaning: "Phá vỡ, làm đứt gãy, nổ tung (to break, burst)",
    tip: "💡 'rupt' xuất hiện trong eruption (núi lửa phun vỡ), disruption (đứt gãy/đột phá), bankrupt (vỡ nợ).",
    derivatives: [
      {
        word: "disruption",
        level: "C1",
        us: "dɪsˈrʌpʃn",
        uk: "dɪsˈrʌpʃn",
        pos: "noun",
        formula: "dis- (tách rời) + rupt (phá vỡ) + -ion",
        vi: "sự gián đoạn, sự đột phá làm thay đổi",
        example: "Technological disruption is transforming traditional banking."
      },
      {
        word: "abrupt",
        level: "C1",
        us: "əˈbrʌpt",
        uk: "əˈbrʌpt",
        pos: "adj",
        formula: "ab- (rời khỏi) + rupt (đứt gãy)",
        vi: "đột ngột, bất ngờ",
        example: "The project came to an abrupt halt due to funding shortages."
      },
      {
        word: "uninterrupted",
        level: "C1",
        us: "ˌʌnɪntəˈrʌptɪd",
        uk: "ˌʌnɪntəˈrʌptɪd",
        pos: "adj",
        formula: "un- (không) + inter- (giữa) + rupt (cắt ngang) + -ed",
        vi: "liên tục, không bị gián đoạn",
        example: "Deep focus requires at least two hours of uninterrupted work."
      },
      {
        word: "corrupt",
        level: "B2+",
        us: "kəˈrʌpt",
        uk: "kəˈrʌpt",
        pos: "adj/verb",
        formula: "cor- (hoàn toàn) + rupt (hư hỏng/vỡ)",
        vi: "tham nhũng, làm sai lệch (dữ liệu)",
        example: "Power tends to corrupt when there is no transparency."
      }
    ]
  },
  {
    id: "mit",
    root: "mit / miss",
    origin: "LATIN ROOT",
    meaning: "Gửi đi, phát đi, cho phép (to send, let go)",
    tip: "💡 'mit/miss' có mặt trong transmit (truyền đi), emission (khí thải phát ra), submit, intermittent.",
    derivatives: [
      {
        word: "emission",
        level: "B2+",
        us: "ɪˈmɪʃn",
        uk: "ɪˈmɪʃn",
        pos: "noun",
        formula: "e- (ra ngoài) + miss (phát/gửi đi) + -ion",
        vi: "sự phát thải, khí thải (carbon emissions)",
        example: "Governments pledged to curb greenhouse gas emissions by 2030."
      },
      {
        word: "intermittent",
        level: "C2",
        us: "ˌɪntərˈmɪtənt",
        uk: "ˌɪntəˈmɪtənt",
        pos: "adj",
        formula: "inter- (xen giữa) + mit (gửi/ngắt) + -ent",
        vi: "ngắt quãng, không liên tục (nắng mưa/năng lượng)",
        example: "Solar and wind power are intermittent energy sources."
      },
      {
        word: "transmit",
        level: "B2+",
        us: "trænzˈmɪt",
        uk: "trænzˈmɪt",
        pos: "verb",
        formula: "trans- (qua/vượt) + mit (gửi đi)",
        vi: "truyền tải (tín hiệu, kiến thức, bệnh)",
        example: "Fiber-optic cables transmit data at the speed of light."
      },
      {
        word: "omit",
        level: "C1",
        us: "oʊˈmɪt",
        uk: "əʊˈmɪt",
        pos: "verb",
        formula: "o- (bỏ qua) + mit (thả đi)",
        vi: "bỏ sót, lược bỏ",
        example: "You may omit minor details when summarizing the academic passage."
      }
    ]
  },
  {
    id: "cred",
    root: "cred",
    origin: "LATIN ROOT",
    meaning: "Tin tưởng, tín nhiệm (to believe, trust)",
    tip: "💡 'cred' là gốc của credit (tín dụng), credible (đáng tin), credentials (bằng cấp chứng nhận).",
    derivatives: [
      {
        word: "credible",
        level: "C1",
        us: "ˈkredəbl",
        uk: "ˈkredəbl",
        pos: "adj",
        formula: "cred (tin tưởng) + -ible (có thể)",
        vi: "đáng tin cậy, thuyết phục",
        example: "Researchers must cite credible peer-reviewed journals."
      },
      {
        word: "credentials",
        level: "C1",
        us: "krəˈdenʃlz",
        uk: "krəˈdenʃlz",
        pos: "noun",
        formula: "cred (tín nhiệm) + -ential + -s",
        vi: "bằng cấp, giấy thông hành, năng lực chứng nhận",
        example: "She has impeccable academic credentials in computational linguistics."
      },
      {
        word: "incredulous",
        level: "C2",
        us: "ɪnˈkredʒələs",
        uk: "ɪnˈkredjələs",
        pos: "adj",
        formula: "in- (không) + cred (tin) + -ulous",
        vi: "hoài nghi, không thể tin nổi (thái độ)",
        example: "Investors were incredulous when the startup announced record profits."
      },
      {
        word: "accreditation",
        level: "C1",
        us: "əˌkredɪˈteɪʃn",
        uk: "əˌkredɪˈteɪʃn",
        pos: "noun",
        formula: "ac- + cred (công nhận) + -itation",
        vi: "sự kiểm định và công nhận chất lượng",
        example: "The university received international accreditation for its MBA program."
      }
    ]
  },
  {
    id: "chron",
    root: "chron",
    origin: "GREEK ROOT",
    meaning: "Thời gian (time)",
    tip: "💡 'chron' (Hy Lạp: thời gian) tạo nên chronic (mãn tính/kéo dài), chronological (theo trình tự thời gian), synchronize (đồng bộ).",
    derivatives: [
      {
        word: "chronic",
        level: "C1",
        us: "ˈkrɑːnɪk",
        uk: "ˈkrɒnɪk",
        pos: "adj",
        formula: "chron (thời gian dài) + -ic",
        vi: "mãn tính, kinh niên, kéo dài (bệnh / vấn đề)",
        example: "Sleep deprivation can lead to chronic health conditions."
      },
      {
        word: "synchronize",
        level: "C1",
        us: "ˈsɪŋkrənaɪz",
        uk: "ˈsɪŋkrənaɪz",
        pos: "verb",
        formula: "syn- (cùng nhau) + chron (thời gian) + -ize",
        vi: "đồng bộ hóa",
        example: "Cloud software allows teams to synchronize files across all devices."
      },
      {
        word: "chronological",
        level: "C1",
        us: "ˌkrɑːnəˈlɑːdʒɪkl",
        uk: "ˌkrɒnəˈlɒdʒɪkl",
        pos: "adj",
        formula: "chron (thời gian) + log (logic) + -ical",
        vi: "theo trình tự thời gian",
        example: "The historian arranged the archival documents in chronological order."
      },
      {
        word: "anachronism",
        level: "C2",
        us: "əˈnækrənɪzəm",
        uk: "əˈnækrənɪzəm",
        pos: "noun",
        formula: "ana- (ngược/sai) + chron (thời đại) + -ism",
        vi: "sự lỗi thời, chi tiết sai lệch thời đại",
        example: "Using fax machines in the age of AI feels like an anachronism."
      }
    ]
  }
];

const DEFAULT_VOCAB_LIST = [
  {
    word: "ubiquitous",
    level: "C1",
    deck: "academic",
    us: "juːˈbɪkwɪtəs",
    uk: "juːˈbɪkwɪtəs",
    pos: "adj",
    vi: "có mặt ở khắp mọi nơi, phổ biến",
    rootBreakdown: "ubique (Latin: khắp mọi nơi) + -ous (adj)",
    collocation: "become ubiquitous in modern life",
    example: "Smartphones have become ubiquitous in everyday communication.",
    saved: true
  },
  {
    word: "indispensable",
    level: "C1",
    deck: "academic",
    us: "ˌɪndɪˈspensəbl",
    uk: "ˌɪndɪˈspensəbl",
    pos: "adj",
    vi: "không thể thiếu, tối quan trọng",
    rootBreakdown: "in- (không) + dis- + pend/pens (cân nhắc/bỏ qua) + -able",
    collocation: "an indispensable tool for...",
    example: "A good dictionary is indispensable for mastering English phonetics.",
    saved: true
  },
  {
    word: "mitigate",
    level: "C1",
    deck: "academic",
    us: "ˈmɪtɪɡeɪt",
    uk: "ˈmɪtɪɡeɪt",
    pos: "verb",
    vi: "làm giảm nhẹ, xoa dịu (rủi ro/hậu quả)",
    rootBreakdown: "mitis (Latin: dịu nhẹ, mềm) + -gate (làm cho)",
    collocation: "mitigate the negative impacts of...",
    example: "Planting urban trees helps mitigate the effects of climate change.",
    saved: true
  },
  {
    word: "perspective",
    level: "C1",
    deck: "roots",
    us: "pərˈspektɪv",
    uk: "pəˈspektɪv",
    pos: "noun",
    vi: "góc nhìn, quan điểm, viễn cảnh",
    rootBreakdown: "per- (xuyên qua) + spect (nhìn) + -ive",
    collocation: "gain a broader perspective on...",
    example: "Studying history provides a fresh perspective on contemporary issues.",
    saved: true
  },
  {
    word: "infrastructure",
    level: "C1",
    deck: "roots",
    us: "ˈɪnfrəstrʌktʃər",
    uk: "ˈɪnfrəstrʌktʃə",
    pos: "noun",
    vi: "cơ sở hạ tầng",
    rootBreakdown: "infra- (bên dưới) + struct (xây dựng) + -ure",
    collocation: "upgrade public infrastructure",
    example: "Investing in green infrastructure is vital for sustainable cities.",
    saved: true
  },
  {
    word: "unprecedented",
    level: "C1",
    deck: "news",
    us: "ʌnˈpresɪdentɪd",
    uk: "ʌnˈpresɪdentɪd",
    pos: "adj",
    vi: "chưa từng có tiền lệ",
    rootBreakdown: "un- (không) + pre- (trước) + ced (đi) + -ent + -ed",
    collocation: "at an unprecedented rate",
    example: "Renewable energy technology is advancing at an unprecedented pace.",
    saved: true
  },
  {
    word: "disruption",
    level: "C1",
    deck: "roots",
    us: "dɪsˈrʌpʃn",
    uk: "dɪsˈrʌpʃn",
    pos: "noun",
    vi: "sự gián đoạn, sự đột phá làm thay đổi",
    rootBreakdown: "dis- (tách rời) + rupt (phá vỡ) + -ion",
    collocation: "technological disruption in industry",
    example: "Technological disruption rarely leads to permanent unemployment.",
    saved: true
  },
  {
    word: "contradict",
    level: "C1",
    deck: "roots",
    us: "ˌkɑːntrəˈdɪkt",
    uk: "ˌkɒntrəˈdɪkt",
    pos: "verb",
    vi: "mâu thuẫn, đi ngược lại, phản bác",
    rootBreakdown: "contra- (chống lại/ngược) + dict (nói)",
    collocation: "directly contradict the evidence",
    example: "The new findings directly contradict earlier assumptions.",
    saved: false
  },
  {
    word: "interdisciplinary",
    level: "C1",
    deck: "academic",
    us: "ˌɪntərdɪsəˈplɪneri",
    uk: "ˌɪntədɪsəˈplɪnəri",
    pos: "adj",
    vi: "liên ngành, đa lĩnh vực",
    rootBreakdown: "inter- (giữa các) + discipline (ngành học) + -ary",
    collocation: "interdisciplinary research & collaboration",
    example: "Solving global warming requires interdisciplinary collaboration.",
    saved: true
  }
];

const CAMBRIDGE_BOOKS_DB = {
  "21": {
    year: "2026 (Mới nhất)",
    writingTask2:
      "In an increasingly noisy and digitally connected world, people have fewer opportunities to experience quiet environments. Why is this happening, and how does it affect individuals and society?",
    tests: [
      {
        id: 1,
        title: "Cambridge IELTS 21 — Test 1",
        topic: "Modern Art Patronage & Acoustic Ecology (Silence)",
        passages: [
          "P1: The Davies Sisters (Collectors of Modern Art)",
          "P2: Why We Need Silence",
          "P3: Rethinking Scientific Innovation"
        ],
        keyVocab: ["auditory overstimulation", "philanthropic patronage", "neurogenesis"],
        writingPrompt:
          "In an increasingly noisy and digitally connected world, people have fewer opportunities to experience quiet environments. Why is this happening, and how does it affect individuals and society?",
        readingKey: "cam21_silence",
        speakingPart: "part2"
      },
      {
        id: 2,
        title: "Cambridge IELTS 21 — Test 2",
        topic: "Corporate Social Responsibility & Biogas Energy",
        passages: [
          "P1: Corporate Social Responsibility (Ben & Jerry's / Body Shop)",
          "P2: Biogas Generation from Water Hyacinth",
          "P3: Cognitive Load & Decision Making"
        ],
        keyVocab: ["corporate social responsibility", "scale up", "cognitive bias"],
        writingPrompt:
          "As well as making money, businesses also have social responsibilities towards the community and the environment. To what extent do you agree or disagree?",
        readingKey: "cam21_silence",
        speakingPart: "part3"
      },
      {
        id: 3,
        title: "Cambridge IELTS 21 — Test 3",
        topic: "Peter Bellerby Handmade Globes & Urban Rewilding",
        passages: [
          "P1: Peter Bellerby & The Art of Handmade Globes",
          "P2: Rewilding Urban Waterways",
          "P3: The Evolution of Human Language Syntax"
        ],
        keyVocab: ["artisanal craftsmanship", "biodiversity", "indigenous"],
        writingPrompt:
          "Traditional handcrafts and artisanal skills are dying out as machine-made goods dominate the global market. Do the benefits of mass production outweigh the loss of traditional crafts?",
        readingKey: "cam21_silence",
        speakingPart: "part1"
      },
      {
        id: 4,
        title: "Cambridge IELTS 21 — Test 4",
        topic: "Autonomous Shipping & Adult Neuroplasticity",
        passages: [
          "P1: Ancient Salt Trade Routes",
          "P2: Autonomous Maritime Shipping",
          "P3: Neuroplasticity in Adulthood"
        ],
        keyVocab: ["algorithmic automation", "consolidation", "hippocampus"],
        writingPrompt:
          "More and more transport vehicles, including ships and lorries, are being operated without human drivers. Do the advantages of driverless transport outweigh the disadvantages?",
        readingKey: "neuro_sleep",
        speakingPart: "part2"
      }
    ]
  },
  "20": {
    year: "2025",
    writingTask2:
      "Access to clean water is a basic human right. Therefore every home should have a water supply that is provided free of charge. To what extent do you agree or disagree?",
    tests: [
      {
        id: 1,
        title: "Cambridge IELTS 20 — Test 1",
        topic: "The Kākāpō, British Elms & Stress on Judgement",
        passages: [
          "P1: The Kākāpō (Flightless Parrot Conservation)",
          "P2: Returning Elms to Britain",
          "P3: How Stress Affects Our Judgement"
        ],
        keyVocab: ["critically endangered", "cognitive bias", "translocation"],
        writingPrompt:
          "Access to clean water is a basic human right. Therefore every home should have a water supply that is provided free of charge. To what extent do you agree or disagree?",
        readingKey: "cam20_kakapo",
        speakingPart: "part1"
      },
      {
        id: 2,
        title: "Cambridge IELTS 20 — Test 2",
        topic: "Manatees, Procrastination & Robot Umpires",
        passages: [
          "P1: Manatees (Aquatic Mammals)",
          "P2: The Science of Procrastination",
          "P3: Invasion of the Robot Umpires"
        ],
        keyVocab: ["chronic procrastination", "put off", "algorithmic automation"],
        writingPrompt:
          "In many professional sports, human referees and umpires are being replaced by automated video and AI systems. Do you think this is a positive or negative development?",
        readingKey: "cam20_kakapo",
        speakingPart: "part2"
      },
      {
        id: 3,
        title: "Cambridge IELTS 20 — Test 3",
        topic: "Frozen Food History, Coral Reefs & Robots and Us",
        passages: [
          "P1: Frozen Food (US Frozen Food Industry)",
          "P2: Can the Planet's Coral Reefs Be Saved?",
          "P3: Robots and Us"
        ],
        keyVocab: ["coral bleaching", "preserve endangered species", "mitigate"],
        writingPrompt:
          "Nowadays, people consume far more processed and frozen food than in the past. What are the causes of this trend, and what measures can be taken to encourage healthier eating?",
        readingKey: "cam20_kakapo",
        speakingPart: "part3"
      },
      {
        id: 4,
        title: "Cambridge IELTS 20 — Test 4",
        topic: "Georgia O'Keeffe, Climate Adaptation & Guard Dogs",
        passages: [
          "P1: Georgia O’Keeffe (American Modernist Artist)",
          "P2: Adapting to the Effects of Climate Change",
          "P3: A New Role for Livestock Guard Dogs"
        ],
        keyVocab: ["ward off", "combat the greenhouse effect", "biodiversity"],
        writingPrompt:
          "Many aspects of the way people dress and live today are influenced by global fashion and media trends. Has this made the world too uniform, or does it bring positive cultural exchange?",
        readingKey: "cam20_kakapo",
        speakingPart: "part2"
      }
    ]
  },
  "19": {
    year: "2024",
    writingTask2:
      "Some people think that competition at work, at school and in daily life is a good thing. Others believe that we should try to cooperate more, rather than competing against each other. Discuss both views and give your opinion.",
    tests: [
      {
        id: 1,
        title: "Cambridge IELTS 19 — Test 1",
        topic: "Tennis Rackets, Ancient Pirates & Misinformation",
        passages: [
          "P1: How Tennis Rackets Have Changed",
          "P2: The Pirates of the Ancient Mediterranean",
          "P3: The Persistence and Peril of Misinformation"
        ],
        keyVocab: ["spread of misinformation", "stamp out", "retractions"],
        writingPrompt:
          "Some people think that competition at work, at school and in daily life is a good thing. Others believe that we should try to cooperate more, rather than competing against each other. Discuss both views and give your opinion.",
        readingKey: "cam19_misinfo",
        speakingPart: "part2"
      },
      {
        id: 2,
        title: "Cambridge IELTS 19 — Test 2",
        topic: "Industrial Revolution, Athletes & Stress, Gifted Child",
        passages: [
          "P1: The Industrial Revolution in Britain",
          "P2: Athletes and Stress",
          "P3: An Inquiry into the Existence of the Gifted Child"
        ],
        keyVocab: ["challenge versus threat mindset", "burn out", "performance"],
        writingPrompt:
          "The working week should be shorter and workers should have a longer weekend. Do you agree or disagree?",
        readingKey: "cam19_misinfo",
        speakingPart: "part1"
      },
      {
        id: 3,
        title: "Cambridge IELTS 19 — Test 3",
        topic: "Prehistoric Island Settlers, Wetlands & AI Speech Translation",
        passages: [
          "P1: Archaeologists Discover Prehistoric Island Settlers",
          "P2: The Global Importance of Wetlands",
          "P3: Is the Era of Artificial Speech Translation Upon Us?"
        ],
        keyVocab: ["carbon sequestration", "soil erosion", "synchronize"],
        writingPrompt:
          "It is important for everyone, including young people, to save money for their future. To what extent do you agree or disagree with this statement?",
        readingKey: "cam19_misinfo",
        speakingPart: "part3"
      },
      {
        id: 4,
        title: "Cambridge IELTS 19 — Test 4",
        topic: "British Butterflies, Deep-Sea Mining & The Unselfish Gene",
        passages: [
          "P1: The Impact of Climate Change on Butterflies in Britain",
          "P2: Deep-Sea Mining",
          "P3: The Unselfish Gene"
        ],
        keyVocab: ["deep-sea polymetallic nodules", "wipe out", "endangered species"],
        writingPrompt:
          "In many countries, supermarkets give customers a wide choice of food imported from all over the world. Do you think this is a positive or a negative development?",
        readingKey: "cam19_misinfo",
        speakingPart: "part2"
      }
    ]
  },
  "18": {
    year: "2023",
    writingTask2:
      "The most important aim of science should be to improve people's lives. To what extent do you agree or disagree with this statement?",
    tests: [
      {
        id: 1,
        title: "Cambridge IELTS 18 — Test 1",
        topic: "Urban Farming, Forest Management & Space Junk",
        passages: [
          "P1: Urban Farming (Vertical & Aeroponic Agriculture)",
          "P2: Forest Management in Pennsylvania, USA",
          "P3: Conquering Earth's Space Junk Problem"
        ],
        keyVocab: ["vertical aeroponic farming", "orbital debris", "protection forest"],
        writingPrompt:
          "The most important aim of science should be to improve people's lives. To what extent do you agree or disagree with this statement?",
        readingKey: "cam18_urban",
        speakingPart: "part1"
      },
      {
        id: 2,
        title: "Cambridge IELTS 18 — Test 2",
        topic: "Stonehenge, Living with AI & An Ideal City",
        passages: [
          "P1: Stonehenge",
          "P2: Living with Artificial Intelligence",
          "P3: An Ideal City (Leonardo da Vinci)"
        ],
        keyVocab: ["algorithmic automation", "infrastructure", "unprecedented"],
        writingPrompt:
          "Some university students want to learn about other subjects in addition to their main subjects. Others believe it is more important to give all their time and attention to studying for a qualification. Discuss both views.",
        readingKey: "cam18_urban",
        speakingPart: "part3"
      },
      {
        id: 3,
        title: "Cambridge IELTS 18 — Test 3",
        topic: "Beyond Concrete, The Steam Car & Mixed-Ability Classes",
        passages: [
          "P1: Materials to Take Us Beyond Concrete",
          "P2: The Steam Car",
          "P3: The Case for Mixed-Ability Classes"
        ],
        keyVocab: ["mixed-ability classes", "reduce one's carbon footprint", "phase out"],
        writingPrompt:
          "In many countries around the world, rural people are moving to cities, so the population in the countryside is decreasing. Do you think this is a positive or a negative development?",
        readingKey: "cam18_urban",
        speakingPart: "part2"
      },
      {
        id: 4,
        title: "Cambridge IELTS 18 — Test 4",
        topic: "Green Roofs, The Growth Mindset & Alfred Wegener",
        passages: [
          "P1: Green Roofs",
          "P2: The Growth Mindset",
          "P3: Alfred Wegener: Continental Drift"
        ],
        keyVocab: ["growth mindset", "solar power", "mitigate"],
        writingPrompt:
          "In many countries, people are now living longer than ever before. Some people say an ageing population creates problems for governments. Other people think there are benefits. Discuss both views.",
        readingKey: "cam18_urban",
        speakingPart: "part2"
      }
    ]
  },
  "17": {
    year: "2022",
    writingTask2:
      "It is important for people to take risks, both in their professional lives and their personal lives. Do you think the advantages of taking risks outweigh the disadvantages?",
    tests: [
      {
        id: 1,
        title: "Cambridge IELTS 17 — Test 1",
        topic: "London Underground, Stadiums & To Catch a King",
        passages: [
          "P1: The Development of the London Underground Railway",
          "P2: Stadiums: Past, Present and Future",
          "P3: To Catch a King"
        ],
        keyVocab: ["cut-and-cover technique", "infrastructure", "spectator"],
        writingPrompt:
          "It is important for people to take risks, both in their professional lives and their personal lives. Do you think the advantages of taking risks outweigh the disadvantages?",
        readingKey: "green_cities",
        speakingPart: "part1"
      },
      {
        id: 2,
        title: "Cambridge IELTS 17 — Test 2",
        topic: "Dead Sea Scrolls, Wild Tomatoes & Scientific Discovery",
        passages: [
          "P1: The Dead Sea Scrolls",
          "P2: A Second Attempt at Domesticating the Tomato",
          "P3: Insight or Evolution? (Scientific Discovery)"
        ],
        keyVocab: ["genetic bottleneck", "carry out", "botanist"],
        writingPrompt:
          "Some children spend hours every day on their smartphones. Why is this the case? Do you think this is a positive or a negative development?",
        readingKey: "green_cities",
        speakingPart: "part2"
      },
      {
        id: 3,
        title: "Cambridge IELTS 17 — Test 3",
        topic: "The Thylacine, Palm Oil & Manhattan's Skyscrapers",
        passages: [
          "P1: The Thylacine (Extinct Tasmanian Tiger)",
          "P2: Palm Oil",
          "P3: Building the Skyline: Manhattan's Skyscrapers"
        ],
        keyVocab: ["die out", "endangered species", "architect"],
        writingPrompt:
          "Some people believe that professionals, such as doctors and engineers, should be required to work in the country where they did their training. Others believe they should be free to work in another country. Discuss both views.",
        readingKey: "green_cities",
        speakingPart: "part3"
      },
      {
        id: 4,
        title: "Cambridge IELTS 17 — Test 4",
        topic: "Bats in Madagascar, Medieval Trade & Blindfold Chess",
        passages: [
          "P1: Bats to the Rescue (Madagascar Agriculture)",
          "P2: Does Education Fuel Economic Growth?",
          "P3: Timur Gareyev – Blindfold Chess Champion"
        ],
        keyVocab: ["pesticide", "consolidation", "economist"],
        writingPrompt:
          "Nowadays, a growing number of people with health problems are trying alternative medicines and treatments instead of visiting their usual doctor. Do you think this is a positive or a negative development?",
        readingKey: "neuro_sleep",
        speakingPart: "part2"
      }
    ]
  },
  "16": {
    year: "2021",
    writingTask2:
      "In their advertising, businesses nowadays usually emphasize that their products are new in some way. Why is this? Do you think it is a positive or negative development?",
    tests: [
      {
        id: 1,
        title: "Cambridge IELTS 16 — Test 1",
        topic: "Polar Bears, Step Pyramid of Djoser & Future of Work",
        passages: [
          "P1: Why We Need to Protect Polar Bears",
          "P2: The Step Pyramid of Djoser",
          "P3: The Future of Work (AI & Automation)"
        ],
        keyVocab: ["hypercarnivorous apex predator", "algorithmic automation", "take over"],
        writingPrompt:
          "In some countries, more and more people are becoming interested in finding out about the history of the house or building they live in. What are the reasons for this? How can people research this?",
        readingKey: "ai_work",
        speakingPart: "part1"
      },
      {
        id: 2,
        title: "Cambridge IELTS 16 — Test 2",
        topic: "White Horse of Uffington, Microbes & Wise Decisions",
        passages: [
          "P1: The White Horse of Uffington",
          "P2: I Contain Multitudes (Microbes)",
          "P3: How to Make Wise Decisions"
        ],
        keyVocab: ["biologist", "perspective", "speculate"],
        writingPrompt:
          "In their advertising, businesses nowadays usually emphasize that their products are new in some way. Why is this? Do you think it is a positive or negative development?",
        readingKey: "ai_work",
        speakingPart: "part2"
      },
      {
        id: 3,
        title: "Cambridge IELTS 16 — Test 3",
        topic: "Roman Shipbuilding, Melting Glaciers & Plant Thermometer",
        passages: [
          "P1: Roman Shipbuilding and Navigation",
          "P2: Climate Change Reveals Ancient Artefacts in Norway's Glaciers",
          "P3: Plant Thermometer"
        ],
        keyVocab: ["cargo ship", "greenhouse effect", "botanist"],
        writingPrompt:
          "Many manufactured food and drink products contain high levels of sugar, which causes many health problems. Sugary products should be made more expensive to encourage people to consume less sugar. Do you agree or disagree?",
        readingKey: "ai_work",
        speakingPart: "part3"
      },
      {
        id: 4,
        title: "Cambridge IELTS 16 — Test 4",
        topic: "Roman Tunnels, Reading Habits on Screens & Attitudes to AI",
        passages: [
          "P1: Roman Tunnels",
          "P2: Changes in Reading Habits",
          "P3: Attitudes Towards Artificial Intelligence"
        ],
        keyVocab: ["skim through", "ubiquitous", "disruption"],
        writingPrompt:
          "In the future, all cars, buses and trucks will be driverless. The only people clarity travelling inside these vehicles will be passengers. Do you think the advantages of driverless vehicles outweigh the disadvantages?",
        readingKey: "ai_work",
        speakingPart: "part2"
      }
    ]
  }
};

function buildMerged10kVocabList() {
  let srsMap = {};
  let customItems = [];
  try {
    srsMap = JSON.parse(localStorage.getItem("lexispro_srs_v2") || "{}") || {};
    customItems = JSON.parse(localStorage.getItem("lexispro_custom_vocab_v2") || "[]") || [];
  } catch (_) {}

  const pdfDb = Array.isArray(window.PDF_10K_VOCAB_DB) ? window.PDF_10K_VOCAB_DB : [];
  const merged = [];
  const seen = new Set();

  const normalizeEntry = (raw, isAcademicDefault = false) => {
    const key = String(raw.word || "").toLowerCase().trim();
    if (!key || seen.has(key)) return;
    seen.add(key);

    const srs = srsMap[key] || {};
    const type = raw.type || (key.includes(" ") ? "collocation" : "word");
    const topic = raw.topic || (isAcademicDefault ? "academic" : "jobs");

    merged.push({
      word: raw.word,
      level: raw.level || (isAcademicDefault ? "C1" : type === "phrasal_verb" ? "B2+" : "B2"),
      deck: raw.deck || (isAcademicDefault ? "academic" : type),
      topic,
      type,
      us: raw.us || raw.ipa || "",
      uk: raw.uk || raw.ipa || "",
      pos: raw.pos || (type === "phrasal_verb" ? "phrasal verb" : type === "collocation" ? "collocation" : "noun/verb"),
      vi: raw.vi || "",
      rootBreakdown: raw.rootBreakdown || "",
      collocation: raw.collocation || raw.word,
      synonym: raw.synonym || "",
      particle: raw.particle || "",
      example: raw.example || `Practice using "${raw.word}" in daily sentences.`,
      saved: srs.saved !== undefined ? Boolean(srs.saved) : Boolean(raw.saved),
      srsBox: Number(srs.srsBox || 0), // 0=New, 1=Due/Again, 2=Hard(1d), 3=Good(3-7d), 4-5=Mastered(14-30d)
      intervalDays: Number(srs.intervalDays || 0),
      nextReview: Number(srs.nextReview || 0),
      reps: Number(srs.reps || 0)
    });
  };

  // 1. Custom imported items first
  customItems.forEach((item) => normalizeEntry(item, false));
  // 2. Core Academic & Root Word items
  DEFAULT_VOCAB_LIST.forEach((item) => normalizeEntry(item, true));
  // 3. Full 10K PDF Dataset (Single Words, Collocations, Phrasal Verbs across 8 topics)
  pdfDb.forEach((item) => normalizeEntry(item, false));

  return merged;
}

const studioState = {
  activeTab: "ipa",
  speakingPart: "part2",
  speakingTopicIdx: 0,
  speakingTimerRemaining: 120,
  speakingTimerInterval: null,
  speakingIsRecording: false,
  speakingRecognition: null,
  readingKey: "cam21_silence",
  readingBilingual: true,
  readingUserAnswers: {},
  vocabItems: buildMerged10kVocabList(),
  vocabDeck: "all",
  vocabTopic: "all",
  vocabSrsFilter: "",
  vocabSearch: "",
  vocabRenderLimit: 48,
  flashcardIndex: 0,
  camBook: "21"
};

function saveVocabVault() {
  try {
    const srsMap = {};
    studioState.vocabItems.forEach((item) => {
      if (item.saved || item.srsBox > 0 || item.nextReview > 0) {
        srsMap[item.word.toLowerCase().trim()] = {
          saved: Boolean(item.saved),
          srsBox: item.srsBox || 0,
          intervalDays: item.intervalDays || 0,
          nextReview: item.nextReview || 0,
          reps: item.reps || 0
        };
      }
    });
    localStorage.setItem("lexispro_srs_v2", JSON.stringify(srsMap));
  } catch (_) {}
  updateSavedWordsBadge();
}

function updateSavedWordsBadge() {
  const badge = document.getElementById("savedWordsCountBadge");
  if (badge) {
    const count = studioState.vocabItems.filter((v) => v.saved).length;
    badge.textContent = String(count);
  }
}

function switchModuleTab(tabName) {
  studioState.activeTab = tabName;
  document.querySelectorAll(".module-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });

  ["ipa", "speaking", "reading", "vocabulary", "cambridge"].forEach((id) => {
    const panel = document.getElementById(`module-${id}`);
    if (panel) {
      panel.classList.toggle("hidden", id !== tabName);
    }
  });
}

function sendTextToIpaStudio(textToAnalyze) {
  if (!textToAnalyze) return;
  switchModuleTab("ipa");
  els.textInput.value = textToAnalyze.trim();
  updateStats();
  analyzeCurrentText();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initProModules() {
  updateSavedWordsBadge();

  // Top Module Tabs
  document.querySelectorAll(".module-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchModuleTab(btn.getAttribute("data-tab"));
    });
  });

  const btnHeaderSavedWords = document.getElementById("btnHeaderSavedWords");
  if (btnHeaderSavedWords) {
    btnHeaderSavedWords.addEventListener("click", () => {
      studioState.vocabDeck = "saved";
      document.querySelectorAll("#vocabDeckFilter .chip").forEach((c) => {
        c.classList.toggle("active", c.getAttribute("data-deck") === "saved");
      });
      if (typeof switchVocabWorkspace === "function") {
        switchVocabWorkspace("library");
      }
      renderVocabularyModule();
      switchModuleTab("vocabulary");
    });
  }

  // Save Word button inside IPA Studio Word Detail Card
  const btnSaveWordToVault = document.getElementById("btnSaveWordToVault");
  if (btnSaveWordToVault) {
    btnSaveWordToVault.addEventListener("click", () => {
      const token = getSelectedToken();
      if (!token) return;
      addWordToVocabularyVault({
        word: token.cleanWord || token.word,
        us: (token.ipaUS || "").replace(/[.,!?;:]+$/, ""),
        uk: (token.ipaUK || "").replace(/[.,!?;:]+$/, ""),
        pos: token.pos || "word",
        vi: token.vi || "Từ đã lưu từ IPA Studio"
      });
      btnSaveWordToVault.textContent = "✓ Đã lưu vào Kho";
      setTimeout(() => {
        btnSaveWordToVault.textContent = "⭐ Lưu từ";
      }, 1400);
    });
  }

  initSpeakingModule();
  initReadingModule();
  initVocabularyModule();
  initCambridgeModule();
}

function addWordToVocabularyVault({ word, us, uk, pos, vi }) {
  const clean = String(word || "").toLowerCase().trim();
  if (!clean) return;
  const existing = studioState.vocabItems.find((item) => item.word.toLowerCase() === clean);
  if (existing) {
    existing.saved = true;
    if (vi && !existing.vi) existing.vi = vi;
  } else {
    studioState.vocabItems.unshift({
      word: clean,
      level: "B2+",
      deck: "saved",
      us: us || clean,
      uk: uk || us || clean,
      pos: pos || "word",
      vi: vi || "Từ vựng đã lưu",
      collocation: `${clean} (in context)`,
      example: `Practice pronouncing "${clean}" clearly in sentences.`,
      saved: true
    });
  }
  saveVocabVault();
  renderVocabularyModule();
}

// ============================================================================
// 1. SPEAKING LAB CONTROLLER (BAND 5.5 -> 7.5 TIERS & 4-SKILL EXAMINER)
// ============================================================================
function getSpeakingCustomExpansions() {
  try {
    return JSON.parse(localStorage.getItem("lexispro_speaking_expansions_v1") || "{}") || {};
  } catch (_) {
    return {};
  }
}

function saveSpeakingCustomExpansion(topicId, bandTier, data) {
  const all = getSpeakingCustomExpansions();
  if (!all[topicId]) all[topicId] = {};
  all[topicId][bandTier] = data;
  try {
    localStorage.setItem("lexispro_speaking_expansions_v1", JSON.stringify(all));
  } catch (_) {}
}

function getActiveSpeakingTopicItem() {
  const list = SPEAKING_TOPICS_DB[studioState.speakingPart] || SPEAKING_TOPICS_DB.part2;
  return list[studioState.speakingTopicIdx % list.length];
}

function getSpeakingTierData(item, tierKey) {
  const customMap = getSpeakingCustomExpansions();
  const topicId = item.id || `${studioState.speakingPart}_${studioState.speakingTopicIdx}`;
  const customTier = customMap[topicId]?.[tierKey];
  if (customTier && customTier.sample) {
    return customTier;
  }
  if (tierKey === "custom") {
    return (
      customMap[topicId]?.custom || {
        idea: "✍️ Gợi ý mở rộng của riêng bạn: Hãy bấm nút '➕ Mở rộng gợi ý' ở góc trên để thêm dàn ý, bài mẫu và từ vựng riêng cho câu hỏi này!",
        sample: item.tiers?.["7.5"]?.sample || item.sample || "",
        phrases: item.tiers?.["7.5"]?.phrases || item.phrases || []
      }
    );
  }
  return item.tiers?.[tierKey] || item.tiers?.["7.5"] || {
    idea: "Triển khai câu trả lời rõ ràng kèm lý do và ví dụ cụ thể.",
    sample: item.sample || "",
    phrases: item.phrases || []
  };
}

function initSpeakingModule() {
  studioState.speakingBandTier = studioState.speakingBandTier || "7.5";
  studioState.speakingAudioUrl = null;
  studioState.speakingDurationSec = 0;

  document.querySelectorAll("#speakingPartTabs .segment").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#speakingPartTabs .segment").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.speakingPart = btn.getAttribute("data-speak-part");
      studioState.speakingTopicIdx = 0;
      renderSpeakingPrompt();
    });
  });

  // Band 5.5 -> 6.5 -> 7.5 -> Custom Tier Selector
  document.querySelectorAll("#speakingBandTierTabs .segment").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#speakingBandTierTabs .segment").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.speakingBandTier = btn.getAttribute("data-band-tier") || "7.5";
      renderSpeakingTierSample();
    });
  });

  document.getElementById("btnToggleExpandSample")?.addEventListener("click", () => {
    const panel = document.getElementById("speakingExpandPanel");
    if (!panel) return;
    panel.classList.toggle("hidden");
    if (!panel.classList.contains("hidden")) {
      const item = getActiveSpeakingTopicItem();
      const tier = studioState.speakingBandTier || "7.5";
      const tierData = getSpeakingTierData(item, tier);
      document.getElementById("expandTargetBandLabel").textContent =
        tier === "custom" ? "Mở rộng riêng" : `Band ${tier}`;
      document.getElementById("expandIdeaInput").value = tierData.idea || "";
      document.getElementById("expandSampleTextarea").value = tierData.sample || "";
      document.getElementById("expandPhrasesInput").value = (tierData.phrases || []).join(", ");
    }
  });

  document.getElementById("btnCloseExpandSample")?.addEventListener("click", () => {
    document.getElementById("speakingExpandPanel")?.classList.add("hidden");
  });

  document.getElementById("btnSaveExpandedSample")?.addEventListener("click", () => {
    const item = getActiveSpeakingTopicItem();
    if (!item) return;
    const topicId = item.id || `${studioState.speakingPart}_${studioState.speakingTopicIdx}`;
    const tier = studioState.speakingBandTier || "7.5";
    const idea = document.getElementById("expandIdeaInput")?.value.trim() || "";
    const sample = document.getElementById("expandSampleTextarea")?.value.trim() || "";
    const phrasesRaw = document.getElementById("expandPhrasesInput")?.value.trim() || "";
    if (!sample) {
      alert("Vui lòng nhập nội dung bài mẫu gợi ý!");
      return;
    }
    const phrases = phrasesRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    saveSpeakingCustomExpansion(topicId, tier, { idea, sample, phrases });
    document.getElementById("speakingExpandPanel")?.classList.add("hidden");
    renderSpeakingTierSample();
  });

  document.getElementById("btnNextSpeakingTopic")?.addEventListener("click", () => {
    const list = SPEAKING_TOPICS_DB[studioState.speakingPart] || [];
    studioState.speakingTopicIdx = (studioState.speakingTopicIdx + 1) % Math.max(1, list.length);
    renderSpeakingPrompt();
  });

  document.getElementById("btnSpeakExaminerPrompt")?.addEventListener("click", () => {
    const q = document.getElementById("speakingQuestionTitle")?.textContent;
    if (q) speakText(q, state.accent, 1.0, false);
  });

  document.getElementById("btnListenSpeakingSample")?.addEventListener("click", () => {
    const sample = document.getElementById("speakingSampleText")?.textContent;
    if (sample) speakText(sample, state.accent, parseFloat(els.speedSelect.value) || 1.0, false);
  });

  document.getElementById("btnSendSampleToIpa")?.addEventListener("click", () => {
    const sample = document.getElementById("speakingSampleText")?.textContent;
    if (sample) sendTextToIpaStudio(sample);
  });

  document.getElementById("btnSendStudentSpeechToIpa")?.addEventListener("click", () => {
    const studentText = document.getElementById("speakingTranscriptInput")?.value.trim();
    if (!studentText) {
      alert("Hãy ghi âm hoặc nhập câu trả lời của bạn trước khi đưa sang IPA Studio!");
      return;
    }
    sendTextToIpaStudio(studentText);
  });

  document.getElementById("btnPlayStudentSpeakingAudio")?.addEventListener("click", () => {
    if (!studioState.speakingAudioUrl) return;
    stopAllAudio();
    const audio = new Audio(studioState.speakingAudioUrl);
    state.currentAudio = audio;
    audio.play().catch(() => {});
  });

  // Timer controls
  document.getElementById("btnSpeakingTimerToggle")?.addEventListener("click", toggleSpeakingTimer);
  document.getElementById("btnSpeakingTimerReset")?.addEventListener("click", resetSpeakingTimer);

  // Speaking Recording & AI Band Evaluation
  const transcriptInput = document.getElementById("speakingTranscriptInput");
  transcriptInput?.addEventListener("input", updateSpeakingWordCount);

  document.getElementById("btnSpeakingRecord")?.addEventListener("click", toggleSpeakingLabRecording);
  document.getElementById("btnEvaluateSpeaking")?.addEventListener("click", evaluateSpeakingLabResponse);

  renderSpeakingPrompt();
}

function renderSpeakingTierSample() {
  const item = getActiveSpeakingTopicItem();
  if (!item) return;
  const tier = studioState.speakingBandTier || "7.5";
  const tierData = getSpeakingTierData(item, tier);

  const ideaEl = document.getElementById("speakingTierIdeaText");
  if (ideaEl) ideaEl.textContent = tierData.idea || "";

  const sampleEl = document.getElementById("speakingSampleText");
  if (sampleEl) sampleEl.textContent = tierData.sample || "";

  const phrasesEl = document.getElementById("speakingKeyPhrases");
  if (phrasesEl) {
    phrasesEl.innerHTML = (tierData.phrases || [])
      .map((p) => `<span class="vocab-tag">${escapeHtml(p)}</span>`)
      .join("");
  }
}

function renderSpeakingPrompt() {
  const item = getActiveSpeakingTopicItem();
  if (!item) return;

  document.getElementById("speakingTopicCategory").textContent = item.category;
  document.getElementById("speakingQuestionTitle").textContent = item.question;

  const bulletsEl = document.getElementById("speakingCueBullets");
  bulletsEl.innerHTML = item.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("");

  renderSpeakingTierSample();

  studioState.speakingTimerRemaining = item.timerSec || 120;
  stopSpeakingTimer();
  updateSpeakingTimerUI();
}

function updateSpeakingTimerUI() {
  const mins = String(Math.floor(studioState.speakingTimerRemaining / 60)).padStart(2, "0");
  const secs = String(studioState.speakingTimerRemaining % 60).padStart(2, "0");
  const disp = document.getElementById("speakingTimerDisplay");
  if (disp) disp.textContent = `${mins}:${secs}`;
}

function toggleSpeakingTimer() {
  const btn = document.getElementById("btnSpeakingTimerToggle");
  if (studioState.speakingTimerInterval) {
    stopSpeakingTimer();
    return;
  }
  if (btn) btn.textContent = "⏸ Tạm dừng";
  studioState.speakingTimerInterval = setInterval(() => {
    if (studioState.speakingTimerRemaining > 0) {
      studioState.speakingTimerRemaining--;
      updateSpeakingTimerUI();
    } else {
      stopSpeakingTimer();
    }
  }, 1000);
}

function stopSpeakingTimer() {
  if (studioState.speakingTimerInterval) {
    clearInterval(studioState.speakingTimerInterval);
    studioState.speakingTimerInterval = null;
  }
  const btn = document.getElementById("btnSpeakingTimerToggle");
  if (btn) btn.textContent = "⏱️ Bắt đầu";
}

function resetSpeakingTimer() {
  stopSpeakingTimer();
  const item = getActiveSpeakingTopicItem();
  studioState.speakingTimerRemaining = item?.timerSec || 120;
  updateSpeakingTimerUI();
}

function updateSpeakingWordCount() {
  const val = document.getElementById("speakingTranscriptInput")?.value.trim() || "";
  const count = val ? val.split(/\s+/).length : 0;
  const el = document.getElementById("speakingWordCount");
  if (el) el.textContent = `${count} từ • Tốc độ chuẩn: 120–150 từ/phút`;
}

async function toggleSpeakingLabRecording() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Trình duyệt không hỗ trợ SpeechRecognition. Vui lòng sử dụng Chrome, Edge hoặc Safari.");
    return;
  }

  const btn = document.getElementById("btnSpeakingRecord");
  const icon = document.getElementById("speakingRecordIcon");
  const textEl = document.getElementById("speakingRecordText");
  const input = document.getElementById("speakingTranscriptInput");

  if (studioState.speakingIsRecording) {
    studioState.speakingIsRecording = false;
    studioState.speakingDurationSec = Math.max(
      1,
      Math.round((Date.now() - (studioState.speakingRecordStartMs || Date.now())) / 1000)
    );
    try {
      studioState.speakingRecognition?.stop();
    } catch (_) {}
    if (studioState.speakingMediaRecorder && studioState.speakingMediaRecorder.state !== "inactive") {
      try {
        studioState.speakingMediaRecorder.stop();
      } catch (_) {}
    }
    btn?.classList.remove("recording");
    if (icon) icon.textContent = "🎙️";
    if (textEl) textEl.textContent = "Bắt đầu trả lời (Ghi âm)";
    evaluateSpeakingLabResponse();
    return;
  }

  stopAllAudio();
  studioState.speakingIsRecording = true;
  studioState.speakingRecordStartMs = Date.now();
  btn?.classList.add("recording");
  if (icon) icon.textContent = "⏹";
  if (textEl) textEl.textContent = "Dừng & Chấm 4 Kỹ năng";

  // Capture student's actual voice audio for playback
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      studioState.speakingAudioChunks = [];
      const mr = new MediaRecorder(stream);
      studioState.speakingMediaRecorder = mr;
      mr.ondataavailable = (ev) => {
        if (ev.data && ev.data.size > 0) studioState.speakingAudioChunks.push(ev.data);
      };
      mr.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        if (studioState.speakingAudioChunks?.length) {
          const blob = new Blob(studioState.speakingAudioChunks, { type: "audio/webm" });
          if (studioState.speakingAudioUrl) URL.revokeObjectURL(studioState.speakingAudioUrl);
          studioState.speakingAudioUrl = URL.createObjectURL(blob);
          document.getElementById("btnPlayStudentSpeakingAudio")?.classList.remove("hidden");
        }
      };
      mr.start();
    } catch (_) {}
  }

  const rec = new SpeechRecognition();
  studioState.speakingRecognition = rec;
  rec.lang = state.accent === "UK" ? "en-GB" : "en-US";
  rec.continuous = true;
  rec.interimResults = true;

  let finalStr = input.value ? input.value + " " : "";
  rec.onresult = (e) => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalStr += e.results[i][0].transcript + " ";
      else interim += e.results[i][0].transcript;
    }
    input.value = (finalStr + interim).trim();
    updateSpeakingWordCount();
  };

  rec.onend = () => {
    if (studioState.speakingIsRecording) {
      studioState.speakingIsRecording = false;
      studioState.speakingDurationSec = Math.max(
        1,
        Math.round((Date.now() - (studioState.speakingRecordStartMs || Date.now())) / 1000)
      );
      if (studioState.speakingMediaRecorder && studioState.speakingMediaRecorder.state !== "inactive") {
        try {
          studioState.speakingMediaRecorder.stop();
        } catch (_) {}
      }
      btn?.classList.remove("recording");
      if (icon) icon.textContent = "🎙️";
      if (textEl) textEl.textContent = "Bắt đầu trả lời (Ghi âm)";
    }
  };

  try {
    rec.start();
  } catch (_) {}
}

function evaluateSpeakingLabResponse() {
  const text = document.getElementById("speakingTranscriptInput")?.value.trim() || "";
  if (!text) {
    alert("Hãy ghi âm câu trả lời hoặc nhập nội dung câu trả lời của bạn để hệ thống chấm Giọng đọc • Phát âm • Ngữ pháp • Ý tưởng!");
    return;
  }

  const item = getActiveSpeakingTopicItem();
  const words = text.split(/\s+/).filter(Boolean);
  const cleanWords = words.map((w) => w.toLowerCase().replace(/[^a-z']/g, "")).filter(Boolean);
  const uniqueWords = new Set(cleanWords);
  const longWords = cleanWords.filter((w) => w.length >= 7);

  // 1. Check if student answered with their own idea vs following sample
  const sample75 = item?.tiers?.["7.5"]?.sample || item?.sample || "";
  const sampleSimilarity = evaluatePronunciation(sample75, text).accuracy;
  const isDifferentPersonalAnswer = sampleSimilarity < 55;

  const modeBadge = document.getElementById("studentResponseModeBadge");
  if (modeBadge) {
    modeBadge.textContent = isDifferentPersonalAnswer
      ? "🌟 Trả lời tự do theo Ý riêng của Học viên"
      : `🎯 Luyện đọc theo Bài mẫu (${sampleSimilarity}% khớp mẫu)`;
  }

  // 2. IDEAS & LEXICAL RESOURCE ANALYSIS
  const topicKw = new Set(item?.topicKeywords || []);
  const matchedTopicWords = [...uniqueWords].filter((w) => topicKw.has(w));
  const hasTimeAspect = /\b(ago|last|year|month|day|daily|every|when|since|recently|summer|morning|week|always|often)\b/i.test(text);
  const hasReasonAspect = /\b(because|since|as|so|therefore|reason|help|allow|make|enable|useful|important|convenient)\b/i.test(text);
  const hasExampleOrDetail = /\b(for example|such as|like|especially|instance|compare|than|actually|honestly)\b/i.test(text);

  const UPGRADE_MAP = {
    useful: "indispensable / versatile (không thể thiếu / đa năng - Band 7.5)",
    good: "beneficial / rewarding (hữu ích / đáng giá - Band 7.0)",
    important: "pivotal / crucial (then chốt - Band 7.5)",
    help: "enable / facilitate (tạo điều kiện giúp - Band 7.0)",
    helps: "enables / facilitates (giúp tăng cường - Band 7.0)",
    easy: "effortless / straightforward (dễ dàng, tốn ít công sức - Band 7.0)",
    easier: "much more manageable / streamlined (gọn nhẹ, tối ưu hơn - Band 7.5)",
    very: "remarkably / exceptionally (cực kỳ - Band 7.5)",
    many: "a wide range of / numerous (nhiều, đa dạng - Band 6.5)",
    like: "gravitate towards / be fond of (yêu thích, nghiêng về - Band 7.5)",
    use: "rely on / utilize (tin dùng hàng ngày - Band 7.0)",
    fast: "rapid / time-efficient (nhanh chóng, tiết kiệm thời gian - Band 7.0)",
    busy: "hectic / bustling (bận rộn, nhộn nhịp - Band 7.5)",
    tired: "exhausted / burned out (kiệt sức - Band 7.0)",
    think: "firmly believe / reckon (tin chắc rằng - Band 7.0)"
  };

  const upgradeSuggestions = [];
  uniqueWords.forEach((w) => {
    if (UPGRADE_MAP[w]) {
      upgradeSuggestions.push(`<span class="spk-upgrade-pill"><strong>"${escapeHtml(w)}"</strong> ➔ ${escapeHtml(UPGRADE_MAP[w])}</span>`);
    }
  });

  // 3. GRAMMAR & AUTO-CORRECTION ANALYSIS
  const grammarChecks = [
    {
      regex: /\bi\s+very\s+(like|love|enjoy|want|need)\b/i,
      fix: 'Lỗi trật tự từ: "I very like/enjoy..." ➔ Sửa chuẩn Band 6.5+: "I really enjoy..." hoặc "I am particularly fond of..."'
    },
    {
      regex: /\bmore\s+(easier|better|faster|cheaper|convenient)\b/i,
      fix: 'Lỗi so sánh kép: "more easier/better" ➔ Sửa chuẩn: "much easier / far more convenient"'
    },
    {
      regex: /\b(it|he|she|this|that)\s+(help|make|allow|give|take|keep)\b/i,
      fix: 'Lưu ý chia động từ ngôi thứ 3 số ít: "it help/make..." ➔ Sửa chuẩn: "it helps / it makes / it allows..."'
    },
    {
      regex: /\b(informations|equipments|advices|knowledges|furnitures)\b/i,
      fix: 'Danh từ không đếm được: Không thêm "-s" vào information / equipment / advice / knowledge.'
    },
    {
      regex: /\bdepend\s+(in|of)\b/i,
      fix: 'Giới từ đi kèm: "depend in/of" ➔ Sửa chuẩn: "depend on / rely on"'
    },
    {
      regex: /\ballow\s+to\s+\w+/i,
      fix: 'Cấu trúc với allow: "allow to V" ➔ Sửa chuẩn: "allow me to + V" hoặc "enable me to + V"'
    }
  ];

  const grammarFixesFound = [];
  grammarChecks.forEach((rule) => {
    if (rule.regex.test(text)) {
      grammarFixesFound.push(`<span class="spk-grammar-fix">⚠️ ${escapeHtml(rule.fix)}</span>`);
    }
  });

  const complexConnectors = text.match(
    /\b(although|even though|while|whereas|which|who|where|not only|because|since|whenever|if|unless|compared to|instead of|in order to)\b/gi
  ) || [];

  // 4. PRONUNCIATION & IPA FOCUS ON STUDENT'S WORDS
  const pronTargetWords = [...uniqueWords]
    .filter((w) => w.length >= 6 || /(tion|sion|ture|ough|igh|th|str|spr|spl|sch|able|ible|ous|ive)$/.test(w))
    .slice(0, 10);

  // 5. VOICE DELIVERY & FLUENCY (WPM & Discourse Markers)
  const targetWordsCount = studioState.speakingPart === "part2" ? 130 : studioState.speakingPart === "part3" ? 65 : 40;
  const estDurationSec = studioState.speakingDurationSec > 2 ? studioState.speakingDurationSec : Math.round((words.length / 125) * 60);
  const wpm = Math.round((words.length / Math.max(1, estDurationSec)) * 60);
  const discourseMarkers = text.match(
    /\b(to be honest|actually|well|in my opinion|personally|for example|for instance|moreover|furthermore|however|on the other hand|firstly|finally|as a result)\b/gi
  ) || [];

  // Calculate 4 Criteria Bands (5.0 -> 8.5 scale)
  const roundHalf = (n) => Math.max(4.5, Math.min(9.0, Math.round(n * 2) / 2));
  const lengthRatio = Math.min(1.25, words.length / Math.max(25, targetWordsCount));
  const fcRaw = 5.2 + lengthRatio * 1.6 + Math.min(1.2, discourseMarkers.length * 0.35);
  const lrRaw = 5.3 + (longWords.length / Math.max(1, words.length)) * 10 + (uniqueWords.size / Math.max(1, words.length)) * 1.6 + Math.min(0.8, matchedTopicWords.length * 0.15);
  const graRaw = 5.3 + Math.min(1.8, complexConnectors.length * 0.4) + (words.length >= 35 ? 0.6 : 0.2) - grammarFixesFound.length * 0.35;
  const prRaw = isDifferentPersonalAnswer
    ? (fcRaw + lrRaw) / 2
    : 5.0 + (sampleSimilarity / 100) * 3.5;

  const fc = roundHalf(fcRaw);
  const lr = roundHalf(lrRaw);
  const gra = roundHalf(graRaw);
  const pr = roundHalf(prRaw);
  const overall = roundHalf((fc + lr + gra + pr) / 4);

  document.getElementById("speakingOverallBand").textContent = overall.toFixed(1);
  document.getElementById("critFC").textContent = fc.toFixed(1);
  document.getElementById("critLR").textContent = lr.toFixed(1);
  document.getElementById("critGRA").textContent = gra.toFixed(1);
  document.getElementById("critPR").textContent = pr.toFixed(1);

  document.getElementById("barFC").style.width = `${Math.round((fc / 9) * 100)}%`;
  document.getElementById("barLR").style.width = `${Math.round((lr / 9) * 100)}%`;
  document.getElementById("barGRA").style.width = `${Math.round((gra / 9) * 100)}%`;
  document.getElementById("barPR").style.width = `${Math.round((pr / 9) * 100)}%`;

  document.getElementById("speakingEvaluationHeadline").textContent = `🎉 Kết quả chấm bài nói: IELTS Band ${overall.toFixed(1)} (${words.length} từ • ~${wpm} từ/phút)`;
  document.getElementById("speakingEvaluationSub").textContent = isDifferentPersonalAnswer
    ? "✓ Đã ghi nhận câu trả lời theo ý tưởng riêng của học viên! Xem chi tiết nhận xét Giọng đọc, Phát âm, Ngữ pháp & Ý tưởng bên dưới."
    : `✓ Bạn đang luyện theo bài mẫu (Độ khớp từ vựng & phát âm: ${sampleSimilarity}%).`;

  // Populate 4-Dimension Analysis Box
  const analysisBox = document.getElementById("speakingStudentAnalysisBox");
  analysisBox?.classList.remove("hidden");

  // Box 1: Ideas & Lexical
  const ideasChecklist = [
    hasTimeAspect ? "✅ Đã nêu bối cảnh thời gian / tần suất" : "💡 Gợi ý thêm: Nêu rõ thời điểm/tần suất (e.g. 'Over the past year, on a daily basis...')",
    hasReasonAspect ? "✅ Đã giải thích lý do / lợi ích cốt lõi" : "💡 Gợi ý thêm: Giải thích sâu hơn lý do (e.g. 'The main reason I rely on it is that...')",
    hasExampleOrDetail ? "✅ Có chi tiết / ví dụ hoặc so sánh" : "💡 Gợi ý thêm: Đưa 1 tình huống cụ thể (e.g. 'For instance, whenever I commute...')"
  ];

  document.getElementById("fbIdeasContent").innerHTML = `
    <div><strong>🎯 Mức độ bám sát đề &amp; Phát triển ý:</strong> ${
      matchedTopicWords.length > 0
        ? `Ghi nhận tốt ý tưởng riêng với các từ khóa chủ đề (<em>${escapeHtml(matchedTopicWords.slice(0, 8).join(", "))}</em>).`
        : `Đã ghi nhận câu trả lời tự do của bạn (${words.length} từ).`
    }</div>
    <div style="margin: 5px 0;">${ideasChecklist.join(" • ")}</div>
    ${
      upgradeSuggestions.length > 0
        ? `<div style="margin-top:6px;"><strong>🚀 Nâng cấp từ vựng bạn vừa dùng lên Band 6.5–7.5:</strong><br/>${upgradeSuggestions.join(" ")}</div>`
        : `<div style="margin-top:4px; color:#6ee7b7;">🌟 Bạn đã sử dụng từ vựng rất tự nhiên! Có thể kết hợp thêm 1–2 cụm từ ở khung Gợi ý Band 6.5 / 7.5 bên phải.</div>`
    }
  `;

  // Box 2: Grammar
  document.getElementById("fbGrammarContent").innerHTML = `
    <div><strong>🔗 Cấu trúc câu phức / Từ nối đã dùng (${complexConnectors.length}):</strong> ${
      complexConnectors.length > 0
        ? `<span style="color:#6ee7b7;">${escapeHtml([...new Set(complexConnectors.map((c) => c.toLowerCase()))].join(", "))}</span>`
        : `<span style="color:#fcd34d;">Chưa có nhiều mệnh đề phức. Hãy thêm 'which', 'although', 'not only... but also...' để nâng điểm Grammar lên 6.5–7.5!</span>`
    }</div>
    ${
      grammarFixesFound.length > 0
        ? `<div style="margin-top:6px;"><strong>🛠️ Gợi ý sửa lỗi Ngữ pháp phát hiện trong bài:</strong>${grammarFixesFound.join("")}</div>`
        : `<div style="margin-top:4px; color:#6ee7b7;">✓ Không phát hiện lỗi ngữ pháp cơ bản. Để đạt Band 7.5, hãy thử dùng câu điều kiện hoặc mệnh đề phân từ (V-ing).</div>`
    }
  `;

  // Box 3: Pronunciation & IPA
  const pronEl = document.getElementById("fbPronContent");
  if (pronEl) {
    pronEl.innerHTML = `
      <div style="margin-bottom:6px;">
        <strong>🔬 Các từ đa âm tiết / trọng âm cần lưu ý trong câu trả lời của bạn</strong> (Bấm vào từng từ để nghe phát âm chuẩn):
      </div>
      <div id="studentPronChipsContainer"></div>
    `;
    const chipsBox = document.getElementById("studentPronChipsContainer");
    const wordsToShow = pronTargetWords.length > 0 ? pronTargetWords : cleanWords.slice(0, 6);
    wordsToShow.forEach((w) => {
      const resolved = resolveWordIpaSync(w);
      const ipa = resolved?.us || w;
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "spk-pron-chip";
      chip.innerHTML = `<span>🔊 <strong>${escapeHtml(w)}</strong></span> <small>/${escapeHtml(ipa)}/</small>`;
      chip.addEventListener("click", () => speakSingleWord(w, state.accent, 0.95));
      chipsBox?.appendChild(chip);
    });
  }

  // Box 4: Voice Delivery & Fluency
  document.getElementById("fbVoiceContent").innerHTML = `
    <div><strong>⏱️ Độ dài &amp; Tốc độ nói:</strong> <strong>${words.length} từ</strong> (Mục tiêu phần này: ~${targetWordsCount} từ) • Tốc độ ước tính: <strong>~${wpm} từ/phút</strong> ${
    wpm >= 110 && wpm <= 160
      ? '<span style="color:#6ee7b7;">(Tốc độ chuẩn tự nhiên)</span>'
      : wpm < 110
      ? '<span style="color:#fcd34d;">(Hơi chậm — Hãy luyện nối âm để nói trôi chảy hơn)</span>'
      : '<span style="color:#fcd34d;">(Khá nhanh — Chú ý ngắt nghỉ ở dấu câu và nhấn trọng âm)</span>'
  }</div>
    <div style="margin-top:4px;"><strong>🗣️ Từ nối tự nhiên (Discourse Markers):</strong> ${
      discourseMarkers.length > 0
        ? `Đã dùng tốt: <em>${escapeHtml([...new Set(discourseMarkers)].join(", "))}</em>`
        : `Hãy mở đầu câu trả lời bằng <em>"To be honest...", "Well, personally...", "What I find most impressive is..."</em> để tăng điểm Fluency.`
    }</div>
  `;
}

// ============================================================================
// 2. READING STUDIO CONTROLLER
// ============================================================================
function initReadingModule() {
  const select = document.getElementById("readingPassageSelect");
  select?.addEventListener("change", () => {
    studioState.readingKey = select.value;
    studioState.readingUserAnswers = {};
    renderReadingPassage();
  });

  document.getElementById("btnToggleBilingual")?.addEventListener("click", () => {
    studioState.readingBilingual = !studioState.readingBilingual;
    renderReadingPassage();
  });

  document.getElementById("btnSendReadingToIpa")?.addEventListener("click", () => {
    const passage = READING_PASSAGES_DB[studioState.readingKey];
    if (!passage) return;
    const fullEn = passage.paragraphs.map((p) => p.en).join("\n\n");
    sendTextToIpaStudio(fullEn);
  });

  document.getElementById("btnReadingSpeakWord")?.addEventListener("click", () => {
    const w = document.getElementById("readingLookupWord")?.textContent;
    if (w) speakSingleWord(w, state.accent, 1.0);
  });

  document.getElementById("btnReadingSaveWord")?.addEventListener("click", () => {
    const w = document.getElementById("readingLookupWord")?.textContent || "";
    const ipa = (document.getElementById("readingLookupIpa")?.textContent || "").replace(/^\/|\/$/g, "");
    const vi = (document.getElementById("readingLookupMeaning")?.textContent || "").replace(/^Nghĩa:\s*/i, "");
    addWordToVocabularyVault({ word: w, us: ipa, uk: ipa, pos: "academic", vi });
    const btn = document.getElementById("btnReadingSaveWord");
    if (btn) {
      btn.textContent = "✓ Đã lưu";
      setTimeout(() => (btn.textContent = "⭐ Lưu từ"), 1200);
    }
  });

  document.getElementById("btnCheckReadingAnswers")?.addEventListener("click", checkReadingComprehension);

  renderReadingPassage();
}

function renderReadingPassage() {
  const data = READING_PASSAGES_DB[studioState.readingKey] || READING_PASSAGES_DB.ai_work;
  document.getElementById("readingCategoryBadge").textContent = data.category;
  document.getElementById("readingPassageTitle").textContent = data.title;

  const bodyEl = document.getElementById("readingPassageBody");
  bodyEl.innerHTML = "";

  const termsSet = new Set((data.academicTerms || []).map((t) => t.toLowerCase()));

  data.paragraphs.forEach((para) => {
    const block = document.createElement("div");
    block.className = "reading-para-block";

    const enDiv = document.createElement("div");
    const words = para.en.split(/\s+/);
    words.forEach((surface, i) => {
      const clean = surface.replace(/^[^a-zA-Z0-9-]+|[^a-zA-Z0-9-]+$/g, "").toLowerCase();
      const span = document.createElement("span");
      span.className = "reading-word" + (termsSet.has(clean) ? " academic-term" : "");
      span.textContent = surface;
      span.addEventListener("click", () => inspectReadingWord(clean, surface));
      enDiv.appendChild(span);
      if (i < words.length - 1) enDiv.appendChild(document.createTextNode(" "));
    });
    block.appendChild(enDiv);

    if (studioState.readingBilingual && para.vi) {
      const viDiv = document.createElement("div");
      viDiv.className = "reading-para-vi";
      viDiv.textContent = `🇻🇳 ${para.vi}`;
      block.appendChild(viDiv);
    }

    bodyEl.appendChild(block);
  });

  // Render Questions
  const qList = document.getElementById("readingQuestionsList");
  qList.innerHTML = "";
  document.getElementById("readingScoreBanner")?.classList.add("hidden");

  data.questions.forEach((qItem, qIdx) => {
    const card = document.createElement("div");
    card.className = "reading-q-card";
    card.innerHTML = `
      <div class="reading-q-text">${escapeHtml(qItem.q)}</div>
      <div class="reading-q-options" data-q-idx="${qIdx}">
        ${["TRUE", "FALSE", "NOT GIVEN"]
          .map(
            (opt) =>
              `<button type="button" class="tf-option ${
                studioState.readingUserAnswers[qIdx] === opt ? "selected" : ""
              }" data-opt="${opt}">${opt}</button>`
          )
          .join("")}
      </div>
      <div class="reading-q-explanation hidden" id="readingExp-${qIdx}"></div>
    `;

    card.querySelectorAll(".tf-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        studioState.readingUserAnswers[qIdx] = btn.getAttribute("data-opt");
        card.querySelectorAll(".tf-option").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });

    qList.appendChild(card);
  });
}

async function inspectReadingWord(cleanWord, surfaceWord) {
  if (!cleanWord) return;
  const resolved = resolveWordIpaSync(cleanWord);
  const ipa = resolved?.us || cleanWord;
  let vi = resolved?.vi || "";

  document.getElementById("readingLookupWord").textContent = cleanWord;
  document.getElementById("readingLookupIpa").textContent = `/${ipa}/`;
  document.getElementById("readingLookupMeaning").textContent = `Nghĩa: ${vi || "Đang tra nhanh..."}`;
  speakSingleWord(cleanWord, state.accent, 1.0);

  if (!vi) {
    try {
      const gtUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(cleanWord)}`;
      const res = await fetchWithTimeout(gtUrl, {}, 1800);
      if (res.ok) {
        const d = await res.json();
        vi = d[0]?.[0]?.[0]?.toLowerCase() || "";
        if (vi) {
          document.getElementById("readingLookupMeaning").textContent = `Nghĩa: ${vi}`;
        }
      }
    } catch (_) {}
  }
}

function checkReadingComprehension() {
  const data = READING_PASSAGES_DB[studioState.readingKey] || READING_PASSAGES_DB.ai_work;
  let correct = 0;

  data.questions.forEach((qItem, idx) => {
    const userAns = studioState.readingUserAnswers[idx] || "";
    const isRight = userAns === qItem.answer;
    if (isRight) correct++;

    const expEl = document.getElementById(`readingExp-${idx}`);
    if (expEl) {
      expEl.classList.remove("hidden", "wrong");
      if (!isRight) expEl.classList.add("wrong");
      expEl.innerHTML = `${isRight ? "✓ Chính xác!" : `✗ Đáp án đúng: <strong>${qItem.answer}</strong>`} — ${escapeHtml(
        qItem.explanation
      )}`;
    }
  });

  const banner = document.getElementById("readingScoreBanner");
  if (banner) {
    banner.classList.remove("hidden");
    banner.textContent = `🎯 Kết quả Reading: Đúng ${correct} / ${data.questions.length} câu (${Math.round(
      (correct / data.questions.length) * 100
    )}%)`;
  }
}

// ============================================================================
// 3. VOCABULARY VAULT, ROOT WORD TREE & 3D FLASHCARD CONTROLLER
// ============================================================================
function inferRootBreakdown(word) {
  const w = String(word || "").toLowerCase();
  const prefixes = [
    ["inter", "inter- (giữa/liên)"],
    ["trans", "trans- (xuyên qua)"],
    ["contra", "contra- (ngược lại)"],
    ["retro", "retro- (quay lại)"],
    ["infra", "infra- (bên dưới)"],
    ["super", "super- (vượt trên)"],
    ["pre", "pre- (trước)"],
    ["pro", "pro- (về phía trước)"],
    ["re", "re- (lại)"],
    ["dis", "dis- (tách rời/không)"],
    ["un", "un- (không)"],
    ["in", "in- (vào/không)"],
    ["im", "im- (vào/không)"],
    ["ex", "ex- (ra ngoài)"],
    ["con", "con- (cùng nhau)"],
    ["de", "de- (giảm/tách)"],
    ["sub", "sub- (dưới)"]
  ];
  const roots = [
    ["spect", "spect (nhìn)"],
    ["spic", "spic (nhìn)"],
    ["dict", "dict (nói)"],
    ["struct", "struct (xây dựng)"],
    ["tract", "tract (kéo)"],
    ["rupt", "rupt (phá vỡ)"],
    ["mit", "mit (gửi đi)"],
    ["miss", "miss (gửi đi)"],
    ["cred", "cred (tin tưởng)"],
    ["chron", "chron (thời gian)"],
    ["phon", "phon (âm thanh)"],
    ["port", "port (mang/chuyển)"],
    ["scrib", "scrib (viết)"],
    ["script", "script (viết)"],
    ["duc", "duc (dẫn dắt)"],
    ["form", "form (hình thái)"],
    ["pend", "pend (treo/cân nhắc)"],
    ["pens", "pens (cân nhắc)"]
  ];
  const suffixes = [
    ["tion", "-tion (danh từ)"],
    ["sion", "-sion (danh từ)"],
    ["ment", "-ment (danh từ)"],
    ["able", "-able (có thể - adj)"],
    ["ible", "-ible (có thể - adj)"],
    ["ive", "-ive (tính chất - adj)"],
    ["ous", "-ous (đầy - adj)"],
    ["al", "-al (thuộc về - adj)"],
    ["ic", "-ic (thuộc về - adj)"],
    ["ize", "-ize (làm cho - verb)"],
    ["ate", "-ate (động từ/tính từ)"]
  ];

  const parts = [];
  for (const [p, label] of prefixes) {
    if (w.startsWith(p) && w.length > p.length + 2) {
      parts.push(label);
      break;
    }
  }
  for (const [r, label] of roots) {
    if (w.includes(r)) {
      parts.push(label);
      break;
    }
  }
  for (const [s, label] of suffixes) {
    if (w.endsWith(s) && w.length > s.length + 2) {
      parts.push(label);
      break;
    }
  }

  return parts.length > 0 ? parts.join(" + ") : `Root/Stem: ${w}`;
}

function computeItemIpaPair(item) {
  if (item.us && item.us !== item.word) {
    return { us: item.us, uk: item.uk || item.us };
  }
  const parts = String(item.word || "")
    .split(/[\s/-]+/)
    .filter(Boolean);
  const usParts = [];
  const ukParts = [];
  parts.forEach((p) => {
    const clean = p.toLowerCase().replace(/[^a-z']/g, "");
    if (!clean) return;
    const resolved = resolveWordIpaSync(clean);
    usParts.push(resolved?.us || clean);
    ukParts.push(resolved?.uk || resolved?.us || clean);
  });
  const us = usParts.join(" ") || item.word;
  const uk = ukParts.join(" ") || us;
  item.us = us;
  item.uk = uk;
  return { us, uk };
}

function getTopicLabel(topicId) {
  const topics = window.PDF_10K_TOPICS || [];
  const found = topics.find((t) => t.id === topicId);
  return found ? found.label : `📂 ${topicId || "Chung"}`;
}

function getSrsStatusInfo(item) {
  const box = Number(item.srsBox || 0);
  const now = Date.now();
  const isDue = box === 1 || (box > 0 && item.nextReview > 0 && item.nextReview <= now);
  if (box === 0) return { key: "new", label: "🆕 Từ mới (Hộp 0)" };
  if (isDue) return { key: "due", label: "🔥 Cần ôn ngay (Hộp 1)" };
  if (box >= 4) return { key: "mastered", label: `🏆 Đã thuộc (${item.intervalDays || 14}d)` };
  return { key: "learning", label: `🌱 Đang nhớ (${item.intervalDays || 3}d)` };
}

function gradeVocabItemSrs(item, grade) {
  if (!item) return;
  const now = Date.now();
  const prevBox = Number(item.srsBox || 0);
  const prevInterval = Number(item.intervalDays || 0);

  if (grade === 0) {
    // Again (< 10 mins)
    item.srsBox = 1;
    item.intervalDays = 0;
    item.nextReview = now; // Due immediately
  } else if (grade === 1) {
    // Hard (1 day)
    item.srsBox = 2;
    item.intervalDays = 1;
    item.nextReview = now + 1 * 86400000;
  } else if (grade === 2) {
    // Good (3 - 7 days)
    item.srsBox = prevBox < 3 ? 3 : 4;
    item.intervalDays = item.srsBox === 3 ? 3 : 7;
    item.nextReview = now + item.intervalDays * 86400000;
  } else {
    // Easy (14 - 30 days -> Mastered)
    item.srsBox = 5;
    item.intervalDays = Math.max(14, prevInterval * 2 || 14);
    item.nextReview = now + item.intervalDays * 86400000;
  }
  item.reps = (item.reps || 0) + 1;
  saveVocabVault();
}

const DAILY15_STORAGE_KEY = "lexispro_daily15_plan_v2";

function getTodayDateString() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function switchVocabWorkspace(viewMode) {
  studioState.vocabViewMode = viewMode || "daily";

  document.querySelectorAll("#vocabSubNav .vocab-subnav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-vocab-view") === studioState.vocabViewMode);
  });

  const dailyCard = document.getElementById("vocabDailyMissionCard");
  const srsWrap = document.getElementById("vocabSrsWorkspace");
  const libWrap = document.getElementById("vocabLibraryWorkspace");
  const rootCard = document.getElementById("rootWordExplorerCard");

  const showAll = studioState.vocabViewMode === "all";
  dailyCard?.classList.toggle("hidden", !showAll && studioState.vocabViewMode !== "daily");
  srsWrap?.classList.toggle("hidden", !showAll && studioState.vocabViewMode !== "srs");
  libWrap?.classList.toggle("hidden", !showAll && studioState.vocabViewMode !== "library");
  rootCard?.classList.toggle("hidden", !showAll && studioState.vocabViewMode !== "roots");
}

function loadOrGenerateDaily15Plan(forceRefresh = false) {
  const today = getTodayDateString();
  const selectedTopic = document.getElementById("dailyTopicSelect")?.value || studioState.dailyTopic || "mixed";
  studioState.dailyTopic = selectedTopic;

  if (!forceRefresh) {
    try {
      const saved = JSON.parse(localStorage.getItem(DAILY15_STORAGE_KEY) || "null");
      if (
        saved &&
        saved.dateKey === today &&
        saved.topic === selectedTopic &&
        Array.isArray(saved.words) &&
        saved.words.length > 0
      ) {
        studioState.dailyPlan = saved;
        return saved;
      }
    } catch (_) {}
  }

  const prevBatch = Number(studioState.dailyPlan?.batchIndex || 0);
  const nextBatch = forceRefresh ? prevBatch + 1 : 0;

  let pool = studioState.vocabItems.filter((item) => {
    if (selectedTopic !== "mixed" && item.topic !== selectedTopic) return false;
    return true;
  });
  if (pool.length < 15) {
    pool = [...studioState.vocabItems];
  }

  // Prefer unlearned / Box 0 words for the 15 New Words list
  const newCandidates = pool.filter((item) => Number(item.srsBox || 0) === 0);
  const sourcePool = newCandidates.length >= 15 ? newCandidates : pool;

  let picked = [];
  if (selectedTopic === "mixed") {
    // Scientific balance: 6 Single Words + 5 Collocations + 4 Phrasal Verbs = 15 items
    const wordsOnly = sourcePool.filter((i) => i.type === "word" || !i.type);
    const collocs = sourcePool.filter((i) => i.type === "collocation");
    const phrasals = sourcePool.filter((i) => i.type === "phrasal_verb");

    const pickSlice = (arr, count, offsetSeed) => {
      if (!arr.length) return [];
      const res = [];
      const start = (offsetSeed * count) % arr.length;
      for (let i = 0; i < Math.min(count, arr.length); i++) {
        res.push(arr[(start + i) % arr.length]);
      }
      return res;
    };

    picked = [
      ...pickSlice(wordsOnly, 6, nextBatch),
      ...pickSlice(collocs, 5, nextBatch),
      ...pickSlice(phrasals, 4, nextBatch)
    ];
  }

  if (picked.length < 15) {
    const startIdx = (nextBatch * 15) % Math.max(1, sourcePool.length);
    for (let i = 0; i < sourcePool.length && picked.length < 15; i++) {
      const candidate = sourcePool[(startIdx + i) % sourcePool.length];
      if (!picked.some((p) => p.word.toLowerCase() === candidate.word.toLowerCase())) {
        picked.push(candidate);
      }
    }
  }

  const plan = {
    dateKey: today,
    topic: selectedTopic,
    batchIndex: nextBatch,
    words: picked.slice(0, 15).map((item) => item.word),
    learnedMap: {},
    oldCheckedMap: studioState.dailyPlan?.oldCheckedMap || {}
  };

  studioState.dailyPlan = plan;
  saveDaily15Plan();
  return plan;
}

function saveDaily15Plan() {
  if (!studioState.dailyPlan) return;
  try {
    localStorage.setItem(DAILY15_STORAGE_KEY, JSON.stringify(studioState.dailyPlan));
  } catch (_) {}
}

function getDaily15NewItems() {
  const plan = studioState.dailyPlan || loadOrGenerateDaily15Plan(false);
  const wordSet = new Map(studioState.vocabItems.map((i) => [i.word.toLowerCase(), i]));
  const items = [];
  (plan.words || []).forEach((w) => {
    const found = wordSet.get(String(w).toLowerCase());
    if (found) items.push(found);
  });
  return items;
}

function getDailyOldReviewItems() {
  const plan = studioState.dailyPlan || loadOrGenerateDaily15Plan(false);
  const newWordKeys = new Set((plan.words || []).map((w) => String(w).toLowerCase()));

  // Words that were already studied (srsBox >= 1) or saved by the user, excluding today's 15 new words
  const studied = studioState.vocabItems.filter(
    (item) => !newWordKeys.has(item.word.toLowerCase()) && (Number(item.srsBox || 0) >= 1 || item.saved)
  );

  // Sort due words first
  studied.sort((a, b) => {
    const aDue = getSrsStatusInfo(a).key === "due" ? 0 : 1;
    const bDue = getSrsStatusInfo(b).key === "due" ? 0 : 1;
    return aDue - bDue;
  });

  if (studied.length >= 6) {
    return studied.slice(0, 10);
  }

  // Fallback starter check list if user hasn't studied enough old words yet
  const fallback = studioState.vocabItems.filter((item) => !newWordKeys.has(item.word.toLowerCase())).slice(0, 8);
  return [...studied, ...fallback].slice(0, 8);
}

function renderDailyMissionSection() {
  const plan = studioState.dailyPlan || loadOrGenerateDaily15Plan(false);
  const newItems = getDaily15NewItems();
  const oldItems = getDailyOldReviewItems();

  const learnedCount = newItems.filter((item) => plan.learnedMap?.[item.word.toLowerCase()]).length;
  const oldCheckedCount = Object.keys(plan.oldCheckedMap || {}).length;
  const pct = Math.round((learnedCount / Math.max(1, newItems.length)) * 100);

  const dateBadge = document.getElementById("dailyDateBadge");
  if (dateBadge) dateBadge.textContent = `📅 Hôm nay: ${plan.dateKey}`;

  const progBadge = document.getElementById("dailyProgressBadge");
  if (progBadge) progBadge.textContent = `🆕 Đã thuộc: ${learnedCount} / ${newItems.length} từ mới`;

  const oldBadge = document.getElementById("dailyOldCheckedBadge");
  if (oldBadge) oldBadge.textContent = `🔄 Đã check: ${oldCheckedCount} từ cũ`;

  const leftLbl = document.getElementById("dailyProgressLabelLeft");
  if (leftLbl) {
    leftLbl.innerHTML =
      learnedCount >= newItems.length
        ? `🎉 <strong>Xuất sắc! Bạn đã hoàn thành 100% mục tiêu 15 từ mới hôm nay!</strong>`
        : `Tiến độ hoàn thành 15 từ mới hôm nay: <strong>${pct}%</strong>`;
  }
  const rightLbl = document.getElementById("dailyProgressLabelRight");
  if (rightLbl) rightLbl.textContent = `${learnedCount} / ${newItems.length} từ đã thuộc`;

  const fillEl = document.getElementById("dailyProgressBarFill");
  if (fillEl) fillEl.style.width = `${pct}%`;

  const oldCountEl = document.getElementById("dailyOldListCount");
  if (oldCountEl) oldCountEl.textContent = String(oldItems.length);

  const newDoneEl = document.getElementById("dailyNewDoneCount");
  if (newDoneEl) newDoneEl.textContent = String(learnedCount);

  // Render Step 1: Old Words Check List
  const oldListEl = document.getElementById("dailyOldWordsList");
  if (oldListEl) {
    oldListEl.innerHTML = "";
    oldItems.forEach((item) => {
      const { us } = computeItemIpaPair(item);
      const isChecked = Boolean(plan.oldCheckedMap?.[item.word.toLowerCase()]);
      const srsInfo = getSrsStatusInfo(item);

      const div = document.createElement("div");
      div.className = "daily-old-item" + (isChecked ? " checked-ok" : "");
      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px;">
          <div>
            <strong style="color:#fff; font-size:0.95rem;">${escapeHtml(item.word)}</strong>
            <span class="ipa-pill us" style="font-size:0.72rem; margin-left:4px;">/${escapeHtml(us)}/</span>
          </div>
          <span class="srs-status-pill" style="font-size:0.68rem;">${isChecked ? "✓ Đã check hôm nay" : escapeHtml(srsInfo.label)}</span>
        </div>
        <div style="font-size:0.84rem; color:#34d399; font-weight:600;">${escapeHtml(item.vi)}</div>
        <div class="cue-actions" style="margin-top:2px;">
          <button type="button" class="btn-small btn-old-speak">🔊 Nghe</button>
          <button type="button" class="btn-small chip-action btn-old-ok">${isChecked ? "✓ Đã nhớ vững" : "✅ Nhớ vững (+SRS)"}</button>
          <button type="button" class="btn-small btn-old-again">🔴 Quên</button>
        </div>
      `;

      div.querySelector(".btn-old-speak")?.addEventListener("click", () => {
        speakText(item.word, state.accent, 1.0, false);
      });

      div.querySelector(".btn-old-ok")?.addEventListener("click", () => {
        plan.oldCheckedMap = plan.oldCheckedMap || {};
        plan.oldCheckedMap[item.word.toLowerCase()] = true;
        gradeVocabItemSrs(item, 2);
        saveDaily15Plan();
        renderVocabularyModule();
      });

      div.querySelector(".btn-old-again")?.addEventListener("click", () => {
        plan.oldCheckedMap = plan.oldCheckedMap || {};
        plan.oldCheckedMap[item.word.toLowerCase()] = true;
        gradeVocabItemSrs(item, 0);
        saveDaily15Plan();
        renderVocabularyModule();
      });

      oldListEl.appendChild(div);
    });
  }

  // Render Step 2: 15 New Words of the Day Grid
  const newGridEl = document.getElementById("dailyNewWordsGrid");
  if (newGridEl) {
    newGridEl.innerHTML = "";
    newItems.forEach((item, idx) => {
      const { us, uk } = computeItemIpaPair(item);
      const key = item.word.toLowerCase();
      const isLearned = Boolean(plan.learnedMap?.[key]);
      const typeLabel =
        item.type === "phrasal_verb"
          ? "🚀 Phrasal Verb"
          : item.type === "collocation"
          ? "🔗 Collocation"
          : "📖 Từ đơn";

      const card = document.createElement("div");
      card.className = "daily-word-card" + (isLearned ? " learned-today" : "");
      card.innerHTML = `
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; gap:6px; margin-bottom:6px;">
            <span class="daily-index-badge">#${String(idx + 1).padStart(2, "0")} / 15</span>
            <span class="vocab-type-pill type-${escapeHtml(item.type || "word")}">${typeLabel}</span>
          </div>
          <div style="font-size:1.12rem; font-weight:800; color:#fff; margin-bottom:4px;">
            ${escapeHtml(item.word)}
          </div>
          <div class="ipa-badges" style="margin-bottom:6px;">
            <span class="ipa-pill us">🇺🇸 /${escapeHtml(us)}/</span>
            <span class="ipa-pill uk">🇬🇧 /${escapeHtml(uk)}/</span>
          </div>
          <p class="vocab-card-meaning">${escapeHtml(item.vi)}</p>
          <p class="vocab-card-example" style="margin-top:4px;">🔗 ${escapeHtml(item.collocation || item.example || "")}</p>
        </div>
        <div class="vocab-card-footer">
          <button type="button" class="btn-small btn-d15-speak">🔊 Đọc</button>
          <button type="button" class="btn-small ${isLearned ? "chip-action" : "btn-primary"} btn-d15-learn">
            ${isLearned ? "✓ Đã thuộc hôm nay" : "✅ Thuộc từ này"}
          </button>
          <button type="button" class="btn-small btn-d15-ipa" title="Đưa sang IPA Studio">🎙️ IPA</button>
        </div>
      `;

      card.querySelector(".btn-d15-speak")?.addEventListener("click", () => {
        speakText(item.word, state.accent, 1.0, false);
      });

      card.querySelector(".btn-d15-learn")?.addEventListener("click", () => {
        plan.learnedMap = plan.learnedMap || {};
        if (plan.learnedMap[key]) {
          delete plan.learnedMap[key];
        } else {
          plan.learnedMap[key] = true;
          if (Number(item.srsBox || 0) < 2) {
            gradeVocabItemSrs(item, 2);
          }
        }
        saveDaily15Plan();
        renderVocabularyModule();
      });

      card.querySelector(".btn-d15-ipa")?.addEventListener("click", () => {
        sendTextToIpaStudio(item.example || item.word);
      });

      newGridEl.appendChild(card);
    });
  }

  if (!studioState.dailyQuizCurrentItem) {
    generateNextDailyQuizQuestion();
  }
}

function getDailyQuizPool() {
  const src = studioState.dailyQuizSource || "old";
  const oldItems = getDailyOldReviewItems();
  const newItems = getDaily15NewItems();
  if (src === "old") return oldItems.length > 0 ? oldItems : newItems;
  if (src === "new15") return newItems.length > 0 ? newItems : oldItems;
  return [...oldItems, ...newItems];
}

function generateNextDailyQuizQuestion() {
  const pool = getDailyQuizPool();
  if (!pool || pool.length === 0) return;

  const idx = (studioState.dailyQuizCursor || 0) % pool.length;
  studioState.dailyQuizCursor = idx + 1;
  const target = pool[idx];
  studioState.dailyQuizCurrentItem = target;

  const { us } = computeItemIpaPair(target);
  const mode = studioState.dailyQuizMode || "mc";
  const isOld = !getDaily15NewItems().some((i) => i.word.toLowerCase() === target.word.toLowerCase());

  const typeTag = document.getElementById("dailyQuizTypeTag");
  if (typeTag) {
    typeTag.className = `vocab-type-pill ${isOld ? "type-phrasal_verb" : "type-collocation"}`;
    typeTag.textContent = isOld ? "🔄 CHECK TỪ CŨ ĐÃ HỌC" : "🆕 CHECK 15 TỪ MỚI HÔM NAY";
  }

  const promptWordEl = document.getElementById("dailyQuizPromptWord");
  const promptIpaEl = document.getElementById("dailyQuizPromptIpa");
  const promptHintEl = document.getElementById("dailyQuizPromptHint");
  const optionsGrid = document.getElementById("dailyQuizOptionsGrid");
  const typingWrap = document.getElementById("dailyQuizTypingWrap");
  const feedbackEl = document.getElementById("dailyQuizFeedback");

  feedbackEl?.classList.add("hidden");

  if (mode === "type") {
    if (promptWordEl) promptWordEl.textContent = `🇻🇳 ${target.vi}`;
    if (promptIpaEl) promptIpaEl.textContent = `🇺🇸 /${us}/ • (${target.word.length} ký tự)`;
    if (promptHintEl) {
      promptHintEl.textContent = `Gợi ý ngữ cảnh: "${(target.collocation || target.example || "").replace(
        new RegExp(target.word, "gi"),
        "_____"
      )}"`;
    }
    optionsGrid?.classList.add("hidden");
    typingWrap?.classList.remove("hidden");
    const typeInput = document.getElementById("dailyQuizTypeInput");
    if (typeInput) {
      typeInput.value = "";
      typeInput.focus();
    }
  } else {
    if (promptWordEl) promptWordEl.textContent = target.word;
    if (promptIpaEl) promptIpaEl.textContent = `🇺🇸 /${us}/`;
    if (promptHintEl) promptHintEl.textContent = "Chọn nghĩa tiếng Việt chính xác nhất cho từ/cụm từ trên:";
    optionsGrid?.classList.remove("hidden");
    typingWrap?.classList.add("hidden");

    // Build 4 options (1 correct + 3 distractors)
    const distractors = studioState.vocabItems
      .filter((i) => i.word.toLowerCase() !== target.word.toLowerCase() && i.vi !== target.vi)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const choices = [target, ...distractors].sort(() => Math.random() - 0.5);
    if (optionsGrid) {
      optionsGrid.innerHTML = "";
      choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "daily-quiz-opt-btn";
        btn.textContent = choice.vi;
        btn.addEventListener("click", () => {
          handleDailyQuizAnswer(choice.word.toLowerCase() === target.word.toLowerCase(), btn);
        });
        optionsGrid.appendChild(btn);
      });
    }
  }
}

function handleDailyQuizAnswer(isCorrect, clickedBtn = null) {
  const target = studioState.dailyQuizCurrentItem;
  if (!target) return;

  studioState.dailyQuizTotal = (studioState.dailyQuizTotal || 0) + 1;
  if (isCorrect) {
    studioState.dailyQuizCorrect = (studioState.dailyQuizCorrect || 0) + 1;
  }

  const scoreBadge = document.getElementById("dailyQuizScoreBadge");
  if (scoreBadge) {
    scoreBadge.textContent = `Đúng: ${studioState.dailyQuizCorrect || 0} / ${studioState.dailyQuizTotal || 0}`;
  }

  if (clickedBtn) {
    document.querySelectorAll("#dailyQuizOptionsGrid .daily-quiz-opt-btn").forEach((b) => {
      if (b.textContent === target.vi) b.classList.add("correct");
    });
    if (!isCorrect) clickedBtn.classList.add("wrong");
  }

  const plan = studioState.dailyPlan || loadOrGenerateDaily15Plan(false);
  const key = target.word.toLowerCase();
  const isNew15 = (plan.words || []).some((w) => String(w).toLowerCase() === key);

  if (isCorrect) {
    if (isNew15) {
      plan.learnedMap = plan.learnedMap || {};
      plan.learnedMap[key] = true;
    } else {
      plan.oldCheckedMap = plan.oldCheckedMap || {};
      plan.oldCheckedMap[key] = true;
    }
    gradeVocabItemSrs(target, 2);
    saveDaily15Plan();
    speakText(target.word, state.accent, 1.0, false);
  } else {
    gradeVocabItemSrs(target, 0);
  }

  const feedbackEl = document.getElementById("dailyQuizFeedback");
  if (feedbackEl) {
    feedbackEl.classList.remove("hidden", "wrong");
    if (!isCorrect) feedbackEl.classList.add("wrong");
    feedbackEl.innerHTML = isCorrect
      ? `✅ <strong>Chính xác!</strong> "${escapeHtml(target.word)}" = <strong>${escapeHtml(
          target.vi
        )}</strong> (Đã cộng điểm nhớ SRS & cập nhật tiến độ hôm nay)`
      : `❌ <strong>Chưa đúng!</strong> Đáp án chuẩn: <strong>${escapeHtml(target.word)}</strong> — ${escapeHtml(
          target.vi
        )} (Hệ thống đã đưa vào Hộp 1 để ôn lại)`;
  }

  renderDailyMissionSection();
  updateSrsDashboardStats();
}

function initVocabularyModule() {
  studioState.activeRootId = studioState.activeRootId || ROOT_WORDS_DB[0].id;
  studioState.vocabViewMode = studioState.vocabViewMode || "daily";
  studioState.dailyQuizSource = "old";
  studioState.dailyQuizMode = "mc";
  studioState.dailyQuizCursor = 0;
  studioState.dailyQuizCorrect = 0;
  studioState.dailyQuizTotal = 0;

  // Sub-Navigation Bar (4 Scientific Workspaces + All)
  document.querySelectorAll("#vocabSubNav .vocab-subnav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-vocab-view") || "daily";
      switchVocabWorkspace(view);
    });
  });

  // Daily 15-Word Mission Controls
  document.getElementById("dailyTopicSelect")?.addEventListener("change", () => {
    studioState.dailyQuizCurrentItem = null;
    loadOrGenerateDaily15Plan(true);
    renderVocabularyModule();
  });

  document.getElementById("btnRefreshDaily15")?.addEventListener("click", () => {
    studioState.dailyQuizCurrentItem = null;
    loadOrGenerateDaily15Plan(true);
    renderVocabularyModule();
  });

  document.getElementById("btnToggleDailyQuiz")?.addEventListener("click", () => {
    document.getElementById("dailyCheckQuizBox")?.classList.toggle("hidden");
  });

  document.getElementById("btnMarkAllDaily15")?.addEventListener("click", () => {
    const plan = studioState.dailyPlan || loadOrGenerateDaily15Plan(false);
    const items = getDaily15NewItems();
    plan.learnedMap = plan.learnedMap || {};
    items.forEach((item) => {
      plan.learnedMap[item.word.toLowerCase()] = true;
      if (Number(item.srsBox || 0) < 2) {
        gradeVocabItemSrs(item, 2);
      }
    });
    saveDaily15Plan();
    renderVocabularyModule();
  });

  // Daily Quiz Source & Mode Tabs
  document.querySelectorAll("#dailyQuizSourceTabs .segment").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#dailyQuizSourceTabs .segment").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.dailyQuizSource = btn.getAttribute("data-quiz-source") || "old";
      generateNextDailyQuizQuestion();
    });
  });

  document.querySelectorAll("#dailyQuizModeTabs .segment").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#dailyQuizModeTabs .segment").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.dailyQuizMode = btn.getAttribute("data-quiz-mode") || "mc";
      generateNextDailyQuizQuestion();
    });
  });

  document.getElementById("btnNextDailyQuiz")?.addEventListener("click", () => {
    generateNextDailyQuizQuestion();
  });

  document.getElementById("btnDailyQuizSpeak")?.addEventListener("click", () => {
    const item = studioState.dailyQuizCurrentItem;
    if (item) speakText(item.word, state.accent, 1.0, false);
  });

  document.getElementById("btnDailyQuizCheckType")?.addEventListener("click", () => {
    const item = studioState.dailyQuizCurrentItem;
    if (!item) return;
    const typed = (document.getElementById("dailyQuizTypeInput")?.value || "").trim().toLowerCase();
    if (!typed) return;
    handleDailyQuizAnswer(typed === item.word.toLowerCase(), null);
  });

  document.getElementById("dailyQuizTypeInput")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("btnDailyQuizCheckType")?.click();
    }
  });

  document.getElementById("btnDailyQuizHintType")?.addEventListener("click", () => {
    const item = studioState.dailyQuizCurrentItem;
    const input = document.getElementById("dailyQuizTypeInput");
    if (!item || !input) return;
    const w = item.word;
    input.value = w.slice(0, Math.min(w.length, Math.max(2, Math.ceil(w.length * 0.45))));
    input.focus();
  });

  document.getElementById("btnToggleBulkImport")?.addEventListener("click", () => {
    document.getElementById("vocabBulkImportPanel")?.classList.toggle("hidden");
  });

  document.getElementById("btnCloseBulkImport")?.addEventListener("click", () => {
    document.getElementById("vocabBulkImportPanel")?.classList.add("hidden");
  });

  document.getElementById("btnRunBulkImport")?.addEventListener("click", handleBulkVocabImport);

  document.getElementById("btnStartSrsSession")?.addEventListener("click", () => {
    studioState.vocabDeck = "srs_due";
    studioState.vocabSrsFilter = "";
    document.querySelectorAll("#vocabDeckFilter .chip").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-deck") === "srs_due");
    });
    studioState.flashcardIndex = 0;
    studioState.vocabRenderLimit = 48;
    switchVocabWorkspace("srs");
    renderVocabularyModule();
    document.getElementById("flashcardStage")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // SRS 4-Box filter cards
  document.querySelectorAll("#srsBoxesGrid .srs-box-card").forEach((boxBtn) => {
    boxBtn.addEventListener("click", () => {
      const targetFilter = boxBtn.getAttribute("data-srs-filter");
      if (studioState.vocabSrsFilter === targetFilter) {
        studioState.vocabSrsFilter = "";
        boxBtn.classList.remove("active");
      } else {
        studioState.vocabSrsFilter = targetFilter;
        document.querySelectorAll("#srsBoxesGrid .srs-box-card").forEach((b) => b.classList.remove("active"));
        boxBtn.classList.add("active");
      }
      studioState.flashcardIndex = 0;
      studioState.vocabRenderLimit = 48;
      renderVocabularyModule();
    });
  });

  // Pillar Deck Chips
  document.querySelectorAll("#vocabDeckFilter .chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#vocabDeckFilter .chip").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.vocabDeck = btn.getAttribute("data-deck");
      studioState.vocabSrsFilter = "";
      document.querySelectorAll("#srsBoxesGrid .srs-box-card").forEach((b) => b.classList.remove("active"));
      studioState.flashcardIndex = 0;
      studioState.vocabRenderLimit = 48;
      renderVocabularyModule();
    });
  });

  const searchInput = document.getElementById("vocabSearchInput");
  searchInput?.addEventListener("input", () => {
    studioState.vocabSearch = searchInput.value.trim().toLowerCase();
    if (studioState.vocabSearch && studioState.vocabViewMode !== "library" && studioState.vocabViewMode !== "all") {
      switchVocabWorkspace("library");
    }
    studioState.flashcardIndex = 0;
    studioState.vocabRenderLimit = 48;
    renderVocabularyModule();
  });

  const fcCard = document.getElementById("flashcardCard");
  fcCard?.addEventListener("click", () => {
    fcCard.classList.toggle("flipped");
  });

  document.getElementById("btnFlashcardPrev")?.addEventListener("click", () => {
    const filtered = getFilteredVocabList();
    if (!filtered.length) return;
    studioState.flashcardIndex = (studioState.flashcardIndex - 1 + filtered.length) % filtered.length;
    fcCard?.classList.remove("flipped");
    renderFlashcardStage(filtered);
  });

  document.getElementById("btnFlashcardNext")?.addEventListener("click", () => {
    const filtered = getFilteredVocabList();
    if (!filtered.length) return;
    studioState.flashcardIndex = (studioState.flashcardIndex + 1) % filtered.length;
    fcCard?.classList.remove("flipped");
    renderFlashcardStage(filtered);
  });

  document.getElementById("btnFlashcardSpeak")?.addEventListener("click", (e) => {
    e.stopPropagation();
    const filtered = getFilteredVocabList();
    const item = filtered[studioState.flashcardIndex % Math.max(1, filtered.length)];
    if (item) speakText(item.word, state.accent, 1.0, false);
  });

  // SM-2 Rating buttons inside Flashcard stage
  document.querySelectorAll("#srsRatingBar .srs-rate-btn").forEach((rateBtn) => {
    rateBtn.addEventListener("click", () => {
      const grade = Number(rateBtn.getAttribute("data-srs-grade") || 2);
      const filtered = getFilteredVocabList();
      if (!filtered.length) return;
      const currentItem = filtered[studioState.flashcardIndex % filtered.length];
      gradeVocabItemSrs(currentItem, grade);
      fcCard?.classList.remove("flipped");
      studioState.flashcardIndex = (studioState.flashcardIndex + 1) % Math.max(1, filtered.length);
      renderVocabularyModule();
    });
  });

  document.getElementById("btnVocabLoadMore")?.addEventListener("click", () => {
    studioState.vocabRenderLimit += 48;
    renderVocabularyModule();
  });

  loadOrGenerateDaily15Plan(false);
  switchVocabWorkspace(studioState.vocabViewMode || "daily");
  renderVocabTopicFilter();
  renderRootWordExplorer();
  renderVocabularyModule();
}

function renderVocabTopicFilter() {
  const bar = document.getElementById("vocabTopicFilter");
  if (!bar) return;
  const topics = window.PDF_10K_TOPICS || [
    { id: "all", label: "🌐 Tất cả Chủ đề" }
  ];
  bar.innerHTML = "";
  topics.forEach((t) => {
    const count =
      t.id === "all"
        ? studioState.vocabItems.length
        : studioState.vocabItems.filter((item) => item.topic === t.id).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip" + (studioState.vocabTopic === t.id ? " active" : "");
    btn.innerHTML = `${escapeHtml(t.label)} <small>(${count})</small>`;
    btn.addEventListener("click", () => {
      studioState.vocabTopic = t.id;
      studioState.flashcardIndex = 0;
      studioState.vocabRenderLimit = 48;
      renderVocabTopicFilter();
      renderVocabularyModule();
    });
    bar.appendChild(btn);
  });
}

function handleBulkVocabImport() {
  const rawText = document.getElementById("bulkImportTextarea")?.value.trim() || "";
  const selectedTopic = document.getElementById("bulkImportTopicSelect")?.value || "jobs";
  if (!rawText) {
    alert("Vui lòng dán danh sách từ vựng theo định dạng: Word: Nghĩa tiếng Việt");
    return;
  }

  const lines = rawText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  let added = 0;
  const phrasalParticles = new Set(["up", "down", "out", "in", "on", "off", "over", "away", "back", "through", "into", "about", "for", "with"]);

  let customList = [];
  try {
    customList = JSON.parse(localStorage.getItem("lexispro_custom_vocab_v2") || "[]") || [];
  } catch (_) {}

  lines.forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    let left = line.slice(0, colonIdx).trim();
    const vi = line.slice(colonIdx + 1).trim();
    if (!left || !vi) return;

    let ipa = "";
    const parenMatch = left.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
    if (parenMatch) {
      left = parenMatch[1].trim();
      ipa = parenMatch[2].replace(/^\/|\/$/g, "").trim();
    }

    const words = left.split(/\s+/);
    let type = "word";
    if (words.length >= 2) {
      const secondWord = words[1].toLowerCase();
      type = phrasalParticles.has(secondWord) || left.toLowerCase().startsWith("to ") ? "phrasal_verb" : "collocation";
    }

    const cleanWord = left.replace(/^to\s+/i, "").trim();
    const exists = studioState.vocabItems.some((v) => v.word.toLowerCase() === cleanWord.toLowerCase());
    if (!exists) {
      const newObj = {
        word: cleanWord,
        level: "B2+",
        deck: type,
        topic: selectedTopic,
        type,
        us: ipa,
        uk: ipa,
        pos: type === "phrasal_verb" ? "phrasal verb" : type === "collocation" ? "collocation" : "word",
        vi,
        collocation: type === "collocation" ? cleanWord : `use ${cleanWord.toLowerCase()} in context`,
        example: `Master the usage of "${cleanWord}" in daily communication.`,
        saved: true,
        srsBox: 1,
        intervalDays: 0,
        nextReview: Date.now(),
        reps: 0
      };
      computeItemIpaPair(newObj);
      studioState.vocabItems.unshift(newObj);
      customList.unshift(newObj);
      added++;
    }
  });

  try {
    localStorage.setItem("lexispro_custom_vocab_v2", JSON.stringify(customList));
  } catch (_) {}

  saveVocabVault();
  renderVocabTopicFilter();
  renderVocabularyModule();
  document.getElementById("bulkImportTextarea").value = "";
  alert(`🎉 Đã phân tích và thêm thành công ${added} từ/cụm từ mới vào Kho Spaced Repetition!`);
}

function updateSrsDashboardStats() {
  let countNew = 0;
  let countDue = 0;
  let countLearning = 0;
  let countMastered = 0;
  let countColloc = 0;
  let countPhrasal = 0;
  let countWord = 0;
  let countSaved = 0;

  studioState.vocabItems.forEach((item) => {
    const status = getSrsStatusInfo(item).key;
    if (status === "new") countNew++;
    else if (status === "due") countDue++;
    else if (status === "learning") countLearning++;
    else if (status === "mastered") countMastered++;

    if (item.type === "collocation") countColloc++;
    else if (item.type === "phrasal_verb") countPhrasal++;
    else countWord++;

    if (item.saved) countSaved++;
  });

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val);
  };

  setTxt("srsCountNew", countNew);
  setTxt("srsCountDue", countDue);
  setTxt("srsCountLearning", countLearning);
  setTxt("srsCountMastered", countMastered);
  setTxt("countAll", studioState.vocabItems.length);
  setTxt("countDue", countDue + Math.min(20, countNew));
  setTxt("countCollocation", countColloc);
  setTxt("countPhrasal", countPhrasal);
  setTxt("countSingleWord", countWord);
  setTxt("countSaved", countSaved);

  const totalBadge = document.getElementById("vocabTotalCountBadge");
  if (totalBadge) {
    totalBadge.textContent = `Tổng kho: ${studioState.vocabItems.length} mục (${countWord} Từ đơn • ${countColloc} Collocations • ${countPhrasal} Phrasal Verbs)`;
  }
}

function renderRootWordExplorer() {
  const pillsBar = document.getElementById("rootPillsBar");
  const grid = document.getElementById("rootDerivativesGrid");
  if (!pillsBar || !grid) return;

  const activeRoot = ROOT_WORDS_DB.find((r) => r.id === studioState.activeRootId) || ROOT_WORDS_DB[0];

  pillsBar.innerHTML = "";
  ROOT_WORDS_DB.forEach((rootItem) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "root-pill-btn" + (rootItem.id === activeRoot.id ? " active" : "");
    btn.innerHTML = `<span>🌱 <strong>${escapeHtml(rootItem.id)}</strong></span> <small>(${escapeHtml(
      rootItem.meaning.split("(")[0].trim()
    )})</small>`;
    btn.addEventListener("click", () => {
      studioState.activeRootId = rootItem.id;
      renderRootWordExplorer();
    });
    pillsBar.appendChild(btn);
  });

  document.getElementById("rootOriginTag").textContent = activeRoot.origin;
  document.getElementById("rootCoreName").textContent = activeRoot.root;
  document.getElementById("rootCoreMeaning").innerHTML = `Nghĩa gốc: <strong>${escapeHtml(activeRoot.meaning)}</strong>`;
  document.getElementById("rootCoreTip").textContent = activeRoot.tip;

  grid.innerHTML = "";
  activeRoot.derivatives.forEach((der) => {
    const card = document.createElement("div");
    card.className = "root-derivative-card";
    card.innerHTML = `
      <div>
        <div class="vocab-card-top">
          <div>
            <span class="vocab-card-word">${escapeHtml(der.word)}</span>
            <span class="pos-tag">${escapeHtml(der.pos)}</span>
          </div>
          <span class="cefr-badge">${escapeHtml(der.level)}</span>
        </div>
        <div class="morph-formula" style="margin: 6px 0;">🧩 ${escapeHtml(der.formula)}</div>
        <div class="ipa-badges" style="margin-bottom: 6px;">
          <span class="ipa-pill us">🇺🇸 /${escapeHtml(der.us)}/</span>
          <span class="ipa-pill uk">🇬🇧 /${escapeHtml(der.uk)}/</span>
        </div>
        <p class="vocab-card-meaning">${escapeHtml(der.vi)}</p>
        <p class="vocab-card-example" style="margin-top: 4px;">"${escapeHtml(der.example)}"</p>
      </div>
      <div class="vocab-card-footer">
        <button type="button" class="btn-small btn-der-speak">🔊 Đọc</button>
        <button type="button" class="btn-small btn-save-vocab btn-der-save">⭐ Lưu từ</button>
        <button type="button" class="btn-small chip-action btn-der-ipa">🎙️ IPA</button>
      </div>
    `;

    card.querySelector(".btn-der-speak")?.addEventListener("click", () => {
      speakSingleWord(der.word, state.accent, 1.0);
    });

    card.querySelector(".btn-der-save")?.addEventListener("click", (e) => {
      addWordToVocabularyVault({
        word: der.word,
        us: der.us,
        uk: der.uk,
        pos: der.pos,
        vi: der.vi
      });
      const targetBtn = e.currentTarget;
      targetBtn.textContent = "✓ Đã lưu";
      setTimeout(() => (targetBtn.textContent = "⭐ Lưu từ"), 1200);
    });

    card.querySelector(".btn-der-ipa")?.addEventListener("click", () => {
      sendTextToIpaStudio(der.example || der.word);
    });

    grid.appendChild(card);
  });
}

function getFilteredVocabList() {
  return studioState.vocabItems.filter((item) => {
    // 1. Topic Filter
    if (studioState.vocabTopic && studioState.vocabTopic !== "all" && item.topic !== studioState.vocabTopic) {
      return false;
    }

    // 2. SRS Box Filter (when user clicks 1 of the 4 SRS boxes)
    if (studioState.vocabSrsFilter) {
      const srsKey = getSrsStatusInfo(item).key;
      if (srsKey !== studioState.vocabSrsFilter) return false;
    }

    // 3. Pillar / Deck Filter
    const deck = studioState.vocabDeck;
    if (deck === "saved" && !item.saved) return false;
    if (deck === "srs_due") {
      const srsKey = getSrsStatusInfo(item).key;
      if (srsKey !== "due" && srsKey !== "new") return false;
    } else if (deck === "collocation" && item.type !== "collocation") {
      return false;
    } else if (deck === "phrasal_verb" && item.type !== "phrasal_verb") {
      return false;
    } else if (deck === "word" && item.type !== "word") {
      return false;
    } else if (deck === "roots" && item.deck !== "roots" && !item.rootBreakdown) {
      return false;
    }

    // 4. Search Query
    if (studioState.vocabSearch) {
      const q = studioState.vocabSearch;
      const rootInfo = (item.rootBreakdown || "").toLowerCase();
      const collInfo = (item.collocation || "").toLowerCase();
      const synInfo = (item.synonym || "").toLowerCase();
      return (
        item.word.toLowerCase().includes(q) ||
        (item.vi || "").toLowerCase().includes(q) ||
        rootInfo.includes(q) ||
        collInfo.includes(q) ||
        synInfo.includes(q)
      );
    }
    return true;
  });
}

function renderFlashcardStage(filtered) {
  if (!filtered || filtered.length === 0) return;
  const idx = studioState.flashcardIndex % filtered.length;
  const item = filtered[idx];
  const { us, uk } = computeItemIpaPair(item);
  const srsInfo = getSrsStatusInfo(item);

  const structureDetail =
    item.type === "phrasal_verb"
      ? `🚀 Tiểu từ: ${item.particle || "Verb + Particle"} • Đồng nghĩa C1: ${item.synonym || "Academic verb"}`
      : item.type === "collocation"
      ? `🔗 Cụm từ cố định (Collocation theo chủ đề)`
      : item.rootBreakdown || inferRootBreakdown(item.word);

  document.getElementById("flashcardCounter").textContent = `Thẻ ${idx + 1} / ${filtered.length}`;
  const typeBadge = document.getElementById("fcTypeBadge");
  if (typeBadge) {
    typeBadge.className = `vocab-type-pill type-${item.type || "word"}`;
    typeBadge.textContent =
      item.type === "phrasal_verb"
        ? "🚀 PHRASAL VERB"
        : item.type === "collocation"
        ? "🔗 COLLOCATION"
        : "📖 SINGLE WORD";
  }

  const topicBadge = document.getElementById("fcTopicBadge");
  if (topicBadge) topicBadge.textContent = getTopicLabel(item.topic);

  const srsBadge = document.getElementById("fcSrsBadge");
  if (srsBadge) srsBadge.textContent = srsInfo.label;

  document.getElementById("fcLevel").textContent = item.level || "B2+";
  document.getElementById("fcWord").textContent = item.word;
  document.getElementById("fcIpaUS").textContent = `🇺🇸 /${us}/`;
  document.getElementById("fcIpaUK").textContent = `🇬🇧 /${uk}/`;
  document.getElementById("fcPos").textContent = item.pos || item.type || "word";
  const fcRootFront = document.getElementById("fcRootFront");
  if (fcRootFront) fcRootFront.textContent = structureDetail;
  const fcRootBack = document.getElementById("fcRootBack");
  if (fcRootBack) fcRootBack.textContent = structureDetail;
  document.getElementById("fcMeaning").textContent = item.vi;
  document.getElementById("fcCollocation").textContent = item.collocation || item.word;
  document.getElementById("fcExample").textContent = `"${item.example || ""}"`;
}

function renderVocabularyModule() {
  updateSrsDashboardStats();
  renderDailyMissionSection();
  const filtered = getFilteredVocabList();
  renderFlashcardStage(filtered);

  const grid = document.getElementById("vocabGridContainer");
  if (!grid) return;
  grid.innerHTML = "";

  const sliceLimit = studioState.vocabRenderLimit || 48;
  const visibleItems = filtered.slice(0, sliceLimit);

  visibleItems.forEach((item) => {
    const { us, uk } = computeItemIpaPair(item);
    const srsInfo = getSrsStatusInfo(item);
    const typeLabel =
      item.type === "phrasal_verb"
        ? "🚀 Phrasal Verb"
        : item.type === "collocation"
        ? "🔗 Collocation"
        : "📖 Từ đơn";

    const extraStructureHtml =
      item.type === "phrasal_verb"
        ? `<div class="phrasal-synonym-box">🚀 ${escapeHtml(item.particle || "Cụm động từ")} ${
            item.synonym ? `• <strong>= ${escapeHtml(item.synonym)}</strong>` : ""
          }</div>`
        : item.type === "collocation"
        ? `<div class="vocab-root-box">🔗 Cụm Collocation • ${escapeHtml(getTopicLabel(item.topic))}</div>`
        : `<div class="vocab-root-box">🌱 ${escapeHtml(item.rootBreakdown || inferRootBreakdown(item.word))}</div>`;

    const card = document.createElement("div");
    card.className = "vocab-card-item";
    card.innerHTML = `
      <div>
        <div class="vocab-card-top">
          <div>
            <span class="vocab-card-word">${escapeHtml(item.word)}</span>
            <span class="vocab-type-pill type-${escapeHtml(item.type || "word")}">${typeLabel}</span>
          </div>
          <span class="srs-status-pill" title="Trạng thái Spaced Repetition">${escapeHtml(srsInfo.label)}</span>
        </div>
        ${extraStructureHtml}
        <div class="ipa-badges" style="margin: 6px 0;">
          <span class="ipa-pill us">🇺🇸 /${escapeHtml(us)}/</span>
          <span class="ipa-pill uk">🇬🇧 /${escapeHtml(uk)}/</span>
        </div>
        <p class="vocab-card-meaning">${escapeHtml(item.vi)}</p>
        <p class="vocab-card-example" style="margin-top: 4px;">🔗 ${escapeHtml(item.collocation || "")}</p>
      </div>
      <div class="vocab-card-footer">
        <button type="button" class="btn-small btn-vocab-speak">🔊 Đọc</button>
        <button type="button" class="btn-small btn-vocab-srs-good" title="Đánh dấu Nhớ tốt (SM-2)">✅ Thuộc (+SRS)</button>
        <button type="button" class="btn-small chip-action btn-vocab-ipa">🎙️ IPA</button>
      </div>
    `;

    card.querySelector(".btn-vocab-speak")?.addEventListener("click", () => {
      speakText(item.word, state.accent, 1.0, false);
    });

    card.querySelector(".btn-vocab-srs-good")?.addEventListener("click", () => {
      gradeVocabItemSrs(item, item.srsBox >= 3 ? 3 : 2);
      renderVocabularyModule();
    });

    card.querySelector(".btn-vocab-ipa")?.addEventListener("click", () => {
      sendTextToIpaStudio(item.example || item.word);
    });

    grid.appendChild(card);
  });

  const loadMoreWrap = document.getElementById("vocabLoadMoreWrap");
  const loadMoreBtn = document.getElementById("btnVocabLoadMore");
  if (loadMoreWrap && loadMoreBtn) {
    if (filtered.length > sliceLimit) {
      loadMoreWrap.classList.remove("hidden");
      loadMoreBtn.textContent = `👇 Xem thêm 48 mục tiếp theo (Đang hiển thị ${visibleItems.length} / ${filtered.length})`;
    } else {
      loadMoreWrap.classList.add("hidden");
    }
  }
}

// ============================================================================
// 4. IELTS CAMBRIDGE HUB & BAND SCORE CALCULATOR
// ============================================================================
function initCambridgeModule() {
  document.querySelectorAll("#camBookSelector .segment").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#camBookSelector .segment").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      studioState.camBook = btn.getAttribute("data-cam-book");
      renderCambridgeTests();
    });
  });

  ["calcListenRaw", "calcReadRaw", "calcWriteBand", "calcSpeakBand"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", updateCambridgeBandCalculator);
  });

  document.getElementById("btnSendCamWritingToIpa")?.addEventListener("click", () => {
    const prompt = document.getElementById("camWritingPromptText")?.textContent;
    if (prompt) sendTextToIpaStudio(prompt);
  });

  renderCambridgeTests();
  updateCambridgeBandCalculator();
}

function renderCambridgeTests() {
  const bookData = CAMBRIDGE_BOOKS_DB[studioState.camBook] || CAMBRIDGE_BOOKS_DB["21"];
  const container = document.getElementById("camTestsContainer");
  if (!container) return;

  document.getElementById("camWritingPromptText").textContent = bookData.writingTask2;
  container.innerHTML = "";

  bookData.tests.forEach((test) => {
    const passagesHtml = (test.passages || [])
      .map((p) => `<li class="cam-passage-item">📄 ${escapeHtml(p)}</li>`)
      .join("");
    const vocabHtml = (test.keyVocab || [])
      .map((v) => `<span class="vocab-tag">${escapeHtml(v)}</span>`)
      .join("");

    const card = document.createElement("div");
    card.className = "cam-test-card";
    card.innerHTML = `
      <div class="cam-test-header">
        <h4>${escapeHtml(test.title)}</h4>
        <span class="pos-tag">Cam ${escapeHtml(studioState.camBook)} • ${escapeHtml(bookData.year || "")}</span>
      </div>
      <p class="hint">Chủ đề: <strong>${escapeHtml(test.topic)}</strong></p>
      <ul class="cam-passages-list">${passagesHtml}</ul>
      <div class="cam-vocab-row">
        <small class="hint">🧠 Key Vocab &amp; Collocations:</small>
        <div class="phrase-tags" style="margin-top:4px;">${vocabHtml}</div>
      </div>
      <div class="cam-skills-pills">
        <span class="cam-skill-pill">🎧 Listening (4 Parts)</span>
        <span class="cam-skill-pill">📖 Reading (3 Passages)</span>
        <span class="cam-skill-pill">✍️ Writing (Task 1 &amp; 2)</span>
        <span class="cam-skill-pill">🗣️ Speaking</span>
      </div>
      <div class="cue-actions" style="margin-top: 6px; flex-wrap: wrap;">
        <button type="button" class="btn-small chip-action btn-cam-read">📖 Giải Reading</button>
        <button type="button" class="btn-small chip-action btn-cam-vocab">🧠 Từ vựng Cam</button>
        <button type="button" class="btn-small btn-cam-write">✍️ Đề Writing</button>
        <button type="button" class="btn-small btn-cam-speak">🗣️ Thi Speaking</button>
      </div>
    `;

    card.querySelector(".btn-cam-read")?.addEventListener("click", () => {
      studioState.readingKey = test.readingKey;
      const sel = document.getElementById("readingPassageSelect");
      if (sel) sel.value = test.readingKey;
      renderReadingPassage();
      switchModuleTab("reading");
    });

    card.querySelector(".btn-cam-vocab")?.addEventListener("click", () => {
      studioState.vocabDeck = "all";
      studioState.vocabTopic = "cambridge";
      studioState.vocabSearch = `Cam ${studioState.camBook}`;
      const searchInput = document.getElementById("vocabSearchInput");
      if (searchInput) searchInput.value = `Cam ${studioState.camBook}`;
      switchVocabWorkspace("library");
      renderVocabTopicFilter();
      renderVocabularyModule();
      switchModuleTab("vocabulary");
    });

    card.querySelector(".btn-cam-write")?.addEventListener("click", () => {
      const promptEl = document.getElementById("camWritingPromptText");
      if (promptEl && test.writingPrompt) {
        promptEl.textContent = `[${test.title} — Writing Task 2]: ${test.writingPrompt}`;
        promptEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    card.querySelector(".btn-cam-speak")?.addEventListener("click", () => {
      studioState.speakingPart = test.speakingPart;
      document.querySelectorAll("#speakingPartTabs .segment").forEach((b) => {
        b.classList.toggle("active", b.getAttribute("data-speak-part") === test.speakingPart);
      });
      renderSpeakingPrompt();
      switchModuleTab("speaking");
    });

    container.appendChild(card);
  });
}

function rawScoreToAcademicBand(raw) {
  const s = Math.max(0, Math.min(40, Number(raw) || 0));
  if (s >= 39) return 9.0;
  if (s >= 37) return 8.5;
  if (s >= 35) return 8.0;
  if (s >= 33) return 7.5;
  if (s >= 30) return 7.0;
  if (s >= 27) return 6.5;
  if (s >= 23) return 6.0;
  if (s >= 19) return 5.5;
  if (s >= 15) return 5.0;
  if (s >= 13) return 4.5;
  if (s >= 10) return 4.0;
  return 3.5;
}

function updateCambridgeBandCalculator() {
  const lRaw = document.getElementById("calcListenRaw")?.value || 35;
  const rRaw = document.getElementById("calcReadRaw")?.value || 36;
  const wBand = Math.max(0, Math.min(9, parseFloat(document.getElementById("calcWriteBand")?.value) || 7.0));
  const sBand = Math.max(0, Math.min(9, parseFloat(document.getElementById("calcSpeakBand")?.value) || 7.5));

  const lBand = rawScoreToAcademicBand(lRaw);
  const rBand = rawScoreToAcademicBand(rRaw);

  document.getElementById("calcListenBand").textContent = `Band ${lBand.toFixed(1)}`;
  document.getElementById("calcReadBand").textContent = `Band ${rBand.toFixed(1)}`;
  document.getElementById("calcWriteBandDisplay").textContent = `Band ${wBand.toFixed(1)}`;
  document.getElementById("calcSpeakBandDisplay").textContent = `Band ${sBand.toFixed(1)}`;

  // Official IELTS rounding rule (nearest 0.5: .25 -> .5, .75 -> next whole band)
  const avg = (lBand + rBand + wBand + sBand) / 4;
  const overall = Math.round(avg * 2) / 2;

  document.getElementById("calcOverallResult").textContent = overall.toFixed(1);
  const adviceEl = document.getElementById("overallBandAdvice");
  if (adviceEl) {
    if (overall >= 8.0) adviceEl.textContent = "🏆 C2 Proficient — Đạt chuẩn Học bổng Toàn phần & Chuyên gia Quốc tế";
    else if (overall >= 7.0) adviceEl.textContent = "🌟 C1 Advanced — Đạt chuẩn Du học Thạc sĩ/Đại học Top & Định cư";
    else if (overall >= 6.0) adviceEl.textContent = "👍 B2 Upper-Intermediate — Đạt chuẩn đầu vào Đại học Quốc tế";
    else adviceEl.textContent = "💪 Hãy tiếp tục luyện IPA, Reading và Vocabulary mỗi ngày để nâng Band!";
  }
}

// Start App
document.addEventListener("DOMContentLoaded", () => {
  init();
  initProModules();
});


