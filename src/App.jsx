import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Search, ArrowLeft, ArrowRight, Instagram, Twitter, 
  Youtube, ChevronRight, Star, Camera, Zap, Globe, Share2, MessageCircle,
  Bell, CheckCircle2, Settings, Mail, Plus, LayoutDashboard, PenTool, Users, LogOut,
  Image as ImageIcon, UploadCloud, Edit3, Trash2, ChevronLeft, FileText, Lock, Key, ShieldCheck,
  Check, Save, StarOff, ExternalLink, UserCircle, Layout, UserPlus, Shield, Type, AlignLeft, FileEdit,
  Baseline, Bold, Palette, Video, Link as LinkIcon, Printer, Facebook, Download, Home, Smartphone, TrendingUp, Send
} from 'lucide-react';

const LOGO_PLACE_HOLDER = "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200&auto=format&fit=crop"; 

const App = () => {
  const initialArticles = [
    {
      id: 1,
      category: 'NEWS',
      title: 'THE NEW ERA OF DIGITAL MEDIA: HOW WE DEFINE CELEBRITY IN 2026',
      subtitle: '셀러브리티 매거진이 제안하는 새로운 미디어 패러다임과 가치 제언.',
      summary: '디지털 시대의 셀러브리티는 단순한 명성을 넘어 문화적 자산으로 진화하고 있습니다. 미디어의 변화가 가져온 새로운 기회와 위기를 분석합니다.',
      author: '매거진 기자',
      authorEmail: 'reporter@celebritymag.co.kr',
      date: '2026-03-01 17:53',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '사업가, 청년정치인이라는 비교적 안정적이고 사회적 영향력이 큰 경로를 걸어온 한 인물이 전혀 다른 길을 택했다. 전문가는 최근 청년 세대 사이에서 심리 상담, 명상, 영성 콘텐츠에 대한 관심이 높아지는 흐름과 무관하지 않다고 분석한다.\n\n우리는 명성을 넘어 우리 문화에 남기는 발자국과 유산에 주목합니다.',
      size: 'large',
      lang: 'KR',
      isFeatured: true,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'sans-serif' }
    },
    {
      id: 2,
      category: 'FASHION',
      title: 'MINIMALISM IS THE NEW LOUD: SILENT LUXURY',
      subtitle: '가장 조용한 럭셔리가 만드는 가장 강력한 파장.',
      summary: '2026년 파리 패션위크에서 보여준 미니멀리즘의 정수. 덜어냄의 미학이 어떻게 럭셔리 시장을 재편하고 있는지 확인해 보세요.',
      author: 'ELENA PARK',
      authorEmail: 'elena@celebritymag.co.kr',
      date: '2026-03-01 12:30',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: 'The 2026 fashion week in Paris showcased a dramatic shift towards essentialism. Designers are stripping back the noise and focusing on the purity of form and material.\n\n화려한 로고와 과장된 실루엣의 시대가 저물고, 소재 본연의 아름다움과 정교한 테일러링이 돋보이는 콰이어트 럭셔리(Quiet Luxury)가 런웨이를 장악했습니다.',
      size: 'medium',
      lang: 'EN',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'serif' }
    },
    {
      id: 3,
      category: 'INTERVIEW',
      title: '아티스트 JUNO: 보이지 않는 소리를 그리다',
      subtitle: '네오 소울의 새로운 지평을 여는 그의 음악 세계.',
      summary: '천재적인 감각으로 글로벌 차트를 석권한 아티스트 JUNO. 서울의 개인 스튜디오에서 나눈 그의 심도 깊은 음악 이야기.',
      author: 'DAVID KIM',
      authorEmail: 'david@celebritymag.co.kr',
      date: '2026-02-28 09:15',
      image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: 'JUNO는 서울에 위치한 자신의 스튜디오에서 재즈, 소울, 그리고 디지털 합성의 접점에 대해 이야기합니다. "가보지 못한 곳에 대한 기억처럼 느껴지는 음악을 만들고 싶었습니다."\n\n그의 최근 앨범은 전 세계 비평가들로부터 극찬을 받으며 새로운 장르의 개척자로 평가받고 있습니다.',
      size: 'small',
      lang: 'KR',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'sans-serif' }
    },
    {
      id: 4,
      category: 'LIFE',
      title: 'URBAN RETREAT: SEOUL HIDDEN GEMS',
      subtitle: '복잡한 도시 속에서 찾은 나만의 평온한 휴식처.',
      summary: '콘크리트 정글 서울, 그 이면에 숨겨진 고요한 힐링 스팟 5곳을 에디터가 직접 방문하고 큐레이션 했습니다.',
      author: '매거진 기자',
      authorEmail: 'reporter@celebritymag.co.kr',
      date: '2026-02-26 14:20',
      image: 'https://images.unsplash.com/photo-1531971589569-0d93a595c891?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '도시의 소음에서 한 발자국만 벗어나면, 우리가 미처 몰랐던 평온한 공간들이 나타납니다. 이번 호에서는 바쁜 일상 속 현대인들에게 쉼표가 되어줄 서울의 숨겨진 명소들을 소개합니다.\n\n한옥의 정취를 살린 모던 티 하우스부터 숲속에 자리 잡은 프라이빗 갤러리까지, 주말에 떠나기 좋은 도심 속 휴양지들을 확인해 보세요.',
      size: 'medium',
      lang: 'KR',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'serif' }
    },
    {
      id: 5,
      category: 'FASHION',
      title: 'VINTAGE REVIVAL: THE 90S ARE BACK',
      subtitle: '시간을 초월한 클래식, 90년대 빈티지의 화려한 귀환.',
      summary: 'Y2K에 이어 다시금 패션계를 강타한 90년대 미니멀 빈티지. 셀럽들의 스트릿 룩에서 영감을 받아보세요.',
      author: 'SARAH LEE',
      authorEmail: 'sarah@celebritymag.co.kr',
      date: '2026-02-24 11:00',
      image: 'https://images.unsplash.com/photo-1550614000-4b95d4ed6df9?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '낡은 가죽 자켓, 오버사이즈 데님, 그리고 스키니 선글라스. 90년대를 지배했던 아이템들이 다시 길거리로 쏟아져 나오고 있습니다.\n\n단순한 유행의 반복이 아닌, 현대적인 감각으로 재해석된 빈티지 룩은 세대를 불문하고 강력한 매력을 발산합니다. 지속 가능성(Sustainability)에 대한 관심이 높아진 것도 이러한 트렌드의 큰 원동력입니다.',
      size: 'medium',
      lang: 'EN',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'sans-serif' }
    },
    {
      id: 6,
      category: 'INTERVIEW',
      title: 'ACTOR\'S JOURNEY: 무대에서 스크린으로',
      subtitle: '독립 영화계의 샛별에서 할리우드를 사로잡기까지.',
      summary: '최근 글로벌 프로젝트 주인공으로 캐스팅되며 화제를 모은 배우 김지연. 그녀가 말하는 연기에 대한 철학과 미래.',
      author: '매거진 기자',
      authorEmail: 'reporter@celebritymag.co.kr',
      date: '2026-02-22 16:45',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '"처음 카메라 앞에 섰을 때의 떨림을 아직도 기억합니다. 작은 역할부터 시작해 지금의 자리에 오기까지 단 한 번도 연기가 지루했던 적은 없었어요."\n\n수많은 오디션 낙방을 거쳐 마침내 대체 불가능한 배우로 성장한 그녀의 치열하고도 아름다운 여정을 들여다봅니다.',
      size: 'small',
      lang: 'KR',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'serif' }
    },
    {
      id: 7,
      category: 'LIFE',
      title: 'ECO-LUXURY: THE SUSTAINABLE MANSIONS',
      subtitle: '자연과 완벽하게 조화를 이루는 미래형 하이엔드 주거 공간.',
      summary: '사치스러움의 기준이 변하고 있습니다. 환경을 파괴하지 않고도 최고급 라이프스타일을 누릴 수 있는 에코 맨션들을 취재했습니다.',
      author: 'ALEX CHUNG',
      authorEmail: 'alex@celebritymag.co.kr',
      date: '2026-02-20 10:30',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '태양광 패널, 빗물 재활용 시스템, 친환경 자재로 지어진 거대한 맨션들. 디자인적인 아름다움은 물론이고 자연과의 상생을 최우선으로 고려한 건축물들이 늘어나고 있습니다.\n\n우리는 환경을 해치지 않으면서도 미학적 완성도를 극한으로 끌어올린 차세대 주거 문화를 엿볼 수 있었습니다.',
      size: 'medium',
      lang: 'EN',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'sans-serif' }
    },
    {
      id: 8,
      category: 'ARCHIVE',
      title: 'IN FOCUS: ICONIC MOMENTS OF 2025',
      subtitle: '카메라 렌즈 너머로 포착한 작년 한 해의 가장 찬란했던 순간들.',
      summary: '우리를 울고 웃게 했던 2025년의 문화계 핫이슈. 역사에 남을 명장면들을 매거진 아카이브에서 다시 꺼내봅니다.',
      author: '매거진 기자',
      authorEmail: 'reporter@celebritymag.co.kr',
      date: '2026-02-15 19:00',
      image: 'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '매년 수많은 별들이 뜨고 지지만, 유독 강렬한 빛을 낸 순간들이 있습니다. 글로벌 시상식을 휩쓸었던 아티스트의 눈물, 파격적인 패션으로 레드카펫을 지배한 셀럽의 당당한 미소까지.\n\n사진 한 장이 담고 있는 수만 가지의 감정과 이야기들을 셀러브리티 매거진의 시선으로 다시 회고합니다.',
      size: 'small',
      lang: 'KR',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'serif' }
    },
    {
      id: 9,
      category: 'NEWS',
      title: 'THE NEW PARADIGM OF ENTERTAINMENT AGENCIES',
      subtitle: '아티스트와 에이전시의 관계, 그 전통적 룰이 깨지다.',
      summary: '1인 기획사의 증가와 IT 기업들의 엔터테인먼트 산업 진출. 2026년 엔터 산업의 지형도는 어떻게 변하고 있을까요?',
      author: 'JAMES YOON',
      authorEmail: 'james@celebritymag.co.kr',
      date: '2026-02-12 08:45',
      image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '과거 대형 기획사에 종속되어 있던 아티스트들이 이제는 직접 자신의 브랜드를 구축하고 독립적인 시스템을 마련하고 있습니다.\n\n전문가들은 이러한 현상이 아티스트의 자율성을 보장하는 동시에 콘텐츠의 다양성을 폭발적으로 증가시킬 것이라 전망합니다. 플랫폼과 크리에이터의 새로운 공생 관계를 조명합니다.',
      size: 'medium',
      lang: 'EN',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'sans-serif' }
    },
    {
      id: 10,
      category: 'FASHION',
      title: 'BOLD COLORS FOR SPRING 2026',
      subtitle: '무채색의 겨울을 밀어내고 다가온 강렬한 원색의 계절.',
      summary: '에메랄드 그린, 마젠타 핑크, 코발트 블루. 올봄 거리를 가득 채울 가장 압도적인 컬러 팔레트를 제안합니다.',
      author: '매거진 기자',
      authorEmail: 'reporter@celebritymag.co.kr',
      date: '2026-02-10 13:20',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200',
      mediaType: 'image', 
      content: '기나긴 미니멀리즘의 유행 속에서도 화려한 색채에 대한 인간의 갈망은 사라지지 않았습니다. 디자이너들은 이번 봄 컬렉션에서 눈이 시릴 정도로 쨍하고 다채로운 컬러들을 캔버스 위에 쏟아냈습니다.\n\n과감한 컬러 블로킹과 패턴의 믹스매치를 통해 자신만의 독창적인 아이덴티티를 표현하는 스타일링 팁을 전해드립니다.',
      size: 'small',
      lang: 'KR',
      isFeatured: false,
      style: { fontSize: '18px', fontWeight: '400', fontFamily: 'serif' }
    }
  ];

  const [view, setView] = useState('MAGAZINE'); 
  const [adminTab, setAdminTab] = useState('DASHBOARD'); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const sliderRef = useRef(null);
  
  // --- 기존에 있던 코드 (이 줄을 찾으세요) ---
  const sliderRef = useRef(null);

  // ▼▼▼ 여기서부터 아래로 복사해서 새로 붙여넣으세요 ▼▼▼
  // --- 마우스 드래그 스크롤 상태 및 함수 ---
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragMove, setIsDragMove] = useState(false);

  const handleDragStart = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setIsDragMove(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    setIsDragMove(true); // 드래그가 발생했음을 기록 (클릭 오작동 방지)
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 이동 속도
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  // ▲▲▲ 여기까지 ▲▲▲

  // --- 기존에 있던 코드 ---
  const [articlesList, setArticlesList] = useState(() => {
  const [articlesList, setArticlesList] = useState(() => {
    const saved = localStorage.getItem('mag_final_prod_data_v32');
    return (saved && JSON.parse(saved).length > 0) ? JSON.parse(saved) : initialArticles;
  });

  const [subscribers, setSubscribers] = useState(() => {
    const saved = localStorage.getItem('mag_final_prod_subs_v32');
    return saved ? JSON.parse(saved) : [];
  });

  const [adminAccounts, setAdminAccounts] = useState(() => {
    const saved = localStorage.getItem('mag_final_prod_admins_v32');
    return saved ? JSON.parse(saved) : [
      { id: 'admin', pw: '1234', name: 'Master Admin', role: 'admin', email: 'admin@celebritymag.com' },
      { id: 'reporter', pw: '1234', name: '매거진 기자', role: 'reporter', email: 'reporter@celebritymag.co.kr' }
    ];
  });

  useEffect(() => { localStorage.setItem('mag_final_prod_data_v32', JSON.stringify(articlesList)); }, [articlesList]);
  useEffect(() => { localStorage.setItem('mag_final_prod_subs_v32', JSON.stringify(subscribers)); }, [subscribers]);
  useEffect(() => { localStorage.setItem('mag_final_prod_admins_v32', JSON.stringify(adminAccounts)); }, [adminAccounts]);

  const [toasts, setToasts] = useState([]);
  const [loginInput, setLoginInput] = useState({ id: '', pw: '' });
  const [newAccInput, setNewAccInput] = useState({ id: '', pw: '', name: '', role: 'reporter', email: '' });

  const [editingId, setEditingId] = useState(null);
  const [isSendingNewsletter, setIsSendingNewsletter] = useState(false);
  const resetForm = { 
    category: 'NEWS', lang: 'KR', title: '', subtitle: '', summary: '', author: '', image: '', videoUrl: '', mediaType: 'image', content: '', isFeatured: false, sendNewsletter: false,
    style: { fontSize: '18px', fontWeight: '400', fontFamily: 'sans-serif' }
  };
  const [cmsForm, setCmsForm] = useState(resetForm);

  const getReadTime = (text) => {
    if (!text) return '1 Min Read';
    const words = text.trim().split(/\s+/).length;
    return `${Math.ceil(words / 150)} Min Read`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    const checkRoute = () => {
      if (window.location.hash === '#admin') setView('ADMIN');
      else if (!selectedArticle) setView('MAGAZINE');
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', checkRoute);
    checkRoute();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, [selectedArticle]);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedArticle) setSelectedArticle(null);
      else if (view !== 'MAGAZINE') {
        setView('MAGAZINE');
        window.location.hash = '';
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedArticle, view]);

  const openArticle = (article) => {
    window.history.pushState({ articleId: article.id }, '');
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const goHome = () => {
    window.location.hash = '';
    setView('MAGAZINE');
    setSelectedArticle(null);
    setActiveTab('ALL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const handleShare = (platform, article) => {
    const url = window.location.href;
    const title = article.title;
    switch (platform) {
      case 'facebook': window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank'); break;
      case 'twitter': window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank'); break;
      case 'link': 
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        addToast('🔗 링크가 복사되었습니다.'); 
        break;
      case 'native': if (navigator.share) navigator.share({ title, url }).catch(() => {}); break;
      default: break;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = adminAccounts.find(acc => acc.id === loginInput.id && acc.pw === loginInput.pw);
    if (user) {
      setIsAuthenticated(true);
      setLoggedInUser(user);
      addToast(`🗝️ ${user.name}님 환영합니다.`);
      if (user.role === 'reporter') setView('STUDIO');
      else setAdminTab('DASHBOARD');
    } else {
      addToast('❌ 로그인 정보가 일치하지 않습니다.');
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      if (!subscribers.some(sub => sub.email === subscribeEmail)) {
        setSubscribers([{ email: subscribeEmail, date: new Date().toLocaleString() }, ...subscribers]);
      }
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribeOpen(false);
        setIsSubscribed(false);
        setSubscribeEmail('');
      }, 2500);
    }
  };

  const handleRemoveSubscriber = (emailToRemove) => {
    if (window.confirm(`${emailToRemove} 구독자를 삭제하시겠습니까?`)) {
      setSubscribers(subscribers.filter(sub => sub.email !== emailToRemove));
      addToast('🗑️ 구독자가 삭제되었습니다.');
    }
  };

  const handleCMSPublish = async () => {
    if (!cmsForm.title || !cmsForm.content) { addToast('⚠️ 제목과 본문을 입력해주세요.'); return; }
    
    // 이메일 실제 발송 연동 (EmailJS REST API 사용)
    if (cmsForm.sendNewsletter && subscribers.length > 0) {
      setIsSendingNewsletter(true);
      try {
        const EMAILJS_SERVICE_ID = 'service_dpao45r'; 
        const EMAILJS_TEMPLATE_ID = 'template_85s3ver'; 
        const EMAILJS_PUBLIC_KEY = '7qZcX4ZGdWHBCnNwo'; 

        const emailPromises = subscribers.map(sub => {
          return fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              service_id: EMAILJS_SERVICE_ID,
              template_id: EMAILJS_TEMPLATE_ID,
              user_id: EMAILJS_PUBLIC_KEY,
              template_params: {
                to_email: sub.email,
                article_title: cmsForm.title,
                article_summary: cmsForm.summary || cmsForm.subtitle,
                read_more_link: window.location.origin
              }
            })
          });
        });

        await Promise.all(emailPromises);
        addToast(`📧 구독자 ${subscribers.length}명에게 뉴스레터가 성공적으로 발송되었습니다.`);
      } catch (error) {
        console.error("이메일 발송 오류:", error);
        addToast('⚠️ 이메일 발송에 실패했습니다. (API 키 상태를 확인해주세요)');
      }
      setIsSendingNewsletter(false);
    } else if (cmsForm.sendNewsletter && subscribers.length === 0) {
      addToast('⚠️ 등록된 구독자가 없어 뉴스레터를 발송하지 않았습니다.');
    }

    let updatedList = [...articlesList];
    const finalFeatured = (loggedInUser?.role === 'admin') ? cmsForm.isFeatured : false;
    if (finalFeatured) updatedList = updatedList.map(a => ({ ...a, isFeatured: false }));
    
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')} ${String(today.getHours()).padStart(2,'0')}:${String(today.getMinutes()).padStart(2,'0')}`;
    const finalImage = cmsForm.image || LOGO_PLACE_HOLDER;

    if (editingId) {
      updatedList = updatedList.map(a => a.id === editingId ? { ...a, ...cmsForm, image: finalImage, isFeatured: finalFeatured } : a);
      setArticlesList(updatedList);
      addToast('✅ 기사가 수정되었습니다.');
    } else {
      const newArt = {
        ...cmsForm, id: Date.now(), image: finalImage,
        author: loggedInUser?.name || '매거진 기자',
        authorEmail: loggedInUser?.email || 'reporter@celebritymag.co.kr',
        date: formattedDate, isFeatured: finalFeatured,
        size: finalFeatured ? 'large' : 'small'
      };
      setArticlesList([newArt, ...updatedList]);
      addToast(finalFeatured ? '🚀 메인 커버 발행!' : '✅ 새 기사 업로드 완료');
    }
    setEditingId(null); setCmsForm(resetForm); 
    if (loggedInUser?.role === 'admin') { setView('ADMIN'); setAdminTab('ARTICLES'); } 
    else goHome();
  };

  const handleDeleteArticle = (id) => {
    if (window.confirm('정말 이 기사를 삭제하시겠습니까?')) {
      setArticlesList(articlesList.filter(a => a.id !== id));
      addToast('🗑️ 기사가 삭제되었습니다.');
    }
  };

  const handleToggleFeatured = (id) => {
    const updated = articlesList.map(a => ({
      ...a,
      isFeatured: a.id === id ? !a.isFeatured : false
    }));
    setArticlesList(updated);
    addToast('📍 피처 기사가 변경되었습니다.');
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'image') setCmsForm({ ...cmsForm, image: reader.result, mediaType: 'image' });
        else setCmsForm({ ...cmsForm, videoUrl: reader.result, mediaType: 'video' });
      };
      reader.readAsDataURL(file);
    }
  };

  const getYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const exportManagementData = () => {
    const data = { articles: articlesList, staff: adminAccounts, subscribers };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `backup_${Date.now()}.json`;
    link.click();
  };

  const featuredArticle = articlesList.find(a => a.isFeatured) || articlesList[0];
  const gridArticles = articlesList.filter(a => a.id !== (featuredArticle?.id || 0));

  if (view === 'STUDIO') {
    return (
      <div className="min-h-screen bg-[#F8F9FA] text-black font-sans flex flex-col">
        <header className="px-10 py-6 border-b bg-white flex justify-between items-center sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-10">
            <button onClick={goHome} className="text-2xl font-black italic tracking-tighter flex items-center gap-2 group transition-transform hover:scale-105">
              CELEBRITY <span className="text-yellow-400">MAG.</span><ExternalLink size={16} className="text-gray-400" />
            </button>
            <div className="h-8 w-[1px] bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-black text-yellow-400 flex items-center justify-center text-sm font-black shadow-lg">{loggedInUser?.name?.[0]}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500">Writing Studio | {loggedInUser?.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
              <input type="checkbox" className="w-4 h-4" checked={cmsForm.sendNewsletter || false} onChange={e => setCmsForm({...cmsForm, sendNewsletter: e.target.checked})} />
              <span className="text-[11px] font-bold flex items-center gap-1"><Send size={14}/> 구독자에게 뉴스레터 발송</span>
            </label>
            <button onClick={handleCMSPublish} disabled={isSendingNewsletter} className={`bg-yellow-400 text-black px-12 py-3.5 rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-3 ${isSendingNewsletter ? 'opacity-50 cursor-not-allowed' : ''}`}>
              <Save size={18} /> {isSendingNewsletter ? '발송 중...' : (editingId ? '수정 완료' : '기사 발행하기')}
            </button>
          </div>
        </header>

        <main className="flex-1 bg-white max-w-5xl mx-auto w-full p-12 md:p-24 animate-in fade-in slide-in-from-bottom-8 my-10 rounded-[60px] shadow-2xl border border-gray-100">
          <div className="space-y-16">
            <div className="flex flex-wrap gap-8 border-b pb-12">
              <div className="flex-1 min-w-[200px]">
                <label className="text-[11px] font-black uppercase text-gray-400 tracking-widest mb-4 block">Section</label>
                <select className="w-full bg-gray-50 border-2 border-gray-100 px-6 py-4 rounded-2xl font-black text-xs cursor-pointer focus:border-black" value={cmsForm.category} onChange={e => setCmsForm({...cmsForm, category: e.target.value})}>
                  {['NEWS', 'FASHION', 'INTERVIEW', 'LIFE', 'ARCHIVE'].map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="space-y-4">
               <label className="flex items-center gap-2 text-[11px] font-black uppercase text-black tracking-widest bg-yellow-400 w-fit px-3 py-1 rounded-full"><Type size={14}/> 1. 기사 제목</label>
               <textarea placeholder="Headline..." className="w-full text-5xl md:text-6xl font-black italic border-none focus:ring-0 placeholder:text-gray-100 resize-none h-auto p-0 uppercase" value={cmsForm.title} onChange={e => setCmsForm({...cmsForm, title: e.target.value})} rows={2} />
            </div>
            
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[11px] font-black uppercase text-black tracking-widest bg-yellow-400 w-fit px-3 py-1 rounded-full"><AlignLeft size={14}/> 2. 부제목 및 요약 작성</label>
              <input type="text" placeholder="Subtitle..." className="w-full text-2xl font-medium border-none focus:ring-0 italic p-0" value={cmsForm.subtitle} onChange={e => setCmsForm({...cmsForm, subtitle: e.target.value})} />
              <textarea placeholder="핵심 요약 리포트 내용..." className="w-full text-sm bg-gray-50 p-6 rounded-2xl border-none focus:ring-1 focus:ring-black mt-4" value={cmsForm.summary} onChange={e => setCmsForm({...cmsForm, summary: e.target.value})} rows={3} />
            </div>
            
            <div className="space-y-6">
              <label className="flex items-center gap-2 text-[11px] font-black uppercase text-black tracking-widest bg-yellow-400 w-fit px-3 py-1 rounded-full"><ImageIcon size={14}/> 3. 시각 자료 첨부</label>
              <div className="flex gap-4 mb-6">
                 {['image', 'video', 'youtube'].map(type => (
                   <button key={type} onClick={() => setCmsForm({...cmsForm, mediaType: type})} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${cmsForm.mediaType === type ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'}`}>{type}</button>
                 ))}
              </div>
              <div className="relative aspect-[21/9] bg-[#F8F9FA] rounded-[40px] border-4 border-dashed border-gray-200 flex items-center justify-center transition-all hover:border-black group overflow-hidden shadow-inner">
                {cmsForm.mediaType === 'image' && (
                  <>
                    {cmsForm.image && cmsForm.image !== LOGO_PLACE_HOLDER ? <img src={cmsForm.image} className="w-full h-full object-cover" alt="Preview" /> : <label htmlFor="img-upload" className="cursor-pointer flex flex-col items-center gap-4"><UploadCloud size={32} /><p className="font-black text-[10px] uppercase tracking-widest">이미지 업로드</p></label>}
                    <input type="file" id="img-upload" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} />
                  </>
                )}
                {cmsForm.mediaType === 'video' && (
                  <>
                    {cmsForm.videoUrl ? <video src={cmsForm.videoUrl} controls className="w-full h-full object-cover" /> : <label htmlFor="vid-upload" className="cursor-pointer flex flex-col items-center gap-4"><Video size={32} /><p className="font-black text-[10px] uppercase tracking-widest">MP4 영상 업로드</p></label>}
                    <input type="file" id="vid-upload" className="hidden" accept="video/*" onChange={(e) => handleFileUpload(e, 'video')} />
                  </>
                )}
                {cmsForm.mediaType === 'youtube' && (
                  <input type="text" placeholder="유튜브 링크 입력..." className="w-full max-w-xl bg-white border-2 border-gray-100 p-5 rounded-2xl text-center font-bold" value={cmsForm.videoUrl} onChange={e => setCmsForm({...cmsForm, videoUrl: e.target.value, mediaType: 'youtube'})} />
                )}
              </div>
            </div>

            <div className="space-y-6 pt-12 border-t">
              <label className="flex items-center gap-2 text-[11px] font-black uppercase text-black tracking-widest bg-yellow-400 w-fit px-3 py-1 rounded-full"><FileEdit size={14}/> 4. 기사 본문 작성</label>
              
              <div className="border-2 border-gray-100 rounded-[40px] overflow-hidden bg-white">
                <div className="bg-gray-50 border-b-2 border-gray-100 p-6 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-3 border-r-2 border-gray-200 pr-6">
                    <Baseline size={16} className="text-gray-400"/>
                    <input type="range" min="14" max="40" step="1" className="w-24 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black" value={parseInt(cmsForm.style.fontSize)} onChange={e => setCmsForm({...cmsForm, style: {...cmsForm.style, fontSize: `${e.target.value}px`}})} />
                    <div className="flex items-center gap-1">
                      <input type="number" className="w-14 bg-white border border-gray-200 py-1.5 px-2 rounded-lg text-center font-bold text-xs" value={parseInt(cmsForm.style.fontSize)} onChange={e => setCmsForm({...cmsForm, style: {...cmsForm.style, fontSize: `${e.target.value}px`}})} />
                      <span className="text-[10px] font-black text-gray-400">PX</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-r-2 border-gray-200 pr-6">
                    <Bold size={16} className="text-gray-400"/>
                    <select className="bg-white border border-gray-200 py-1.5 px-3 rounded-lg text-xs font-bold focus:outline-none focus:ring-1 focus:ring-black" value={cmsForm.style.fontWeight} onChange={e => setCmsForm({...cmsForm, style: {...cmsForm.style, fontWeight: e.target.value}})}>
                      <option value="300">Light</option><option value="400">Regular</option><option value="600">Semi-Bold</option><option value="900">Black</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => setCmsForm({...cmsForm, style: {...cmsForm.style, fontFamily: 'serif'}})} className={`px-4 py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${cmsForm.style.fontFamily === 'serif' ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>Serif</button>
                    <button type="button" onClick={() => setCmsForm({...cmsForm, style: {...cmsForm.style, fontFamily: 'sans-serif'}})} className={`px-4 py-1.5 rounded-lg text-[10px] font-bold border transition-colors ${cmsForm.style.fontFamily === 'sans-serif' ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'}`}>Sans</button>
                  </div>
                </div>
                <textarea style={{ ...cmsForm.style }} placeholder="본문을 자유롭게 작성하세요..." className="w-full leading-relaxed border-none focus:ring-0 min-h-[600px] p-10 bg-transparent resize-y" value={cmsForm.content} onChange={e => setCmsForm({...cmsForm, content: e.target.value})} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (view === 'ADMIN') {
    if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8 font-sans">
          <div className="max-w-md w-full bg-white rounded-[60px] p-16 shadow-2xl border-t-[16px] border-yellow-400 animate-in fade-in zoom-in duration-500">
            <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-4 text-center leading-none">CMS<br/>LOGIN</h1>
            <form onSubmit={handleLogin} className="space-y-6 mt-12">
              <input required type="text" placeholder="ID" className="w-full bg-gray-50 border-2 border-gray-100 p-5 rounded-2xl font-bold focus:border-black" value={loginInput.id} onChange={e => setLoginInput({...loginInput, id: e.target.value})} />
              <input required type="password" placeholder="PW" className="w-full bg-gray-50 border-2 border-gray-100 p-5 rounded-2xl font-bold focus:border-black" value={loginInput.pw} onChange={e => setLoginInput({...loginInput, pw: e.target.value})} />
              <button type="submit" className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all active:scale-95 shadow-2xl">Sign In</button>
            </form>
            <button onClick={goHome} className="w-full mt-10 text-gray-400 font-black text-[10px] tracking-widest uppercase hover:text-black">← Back to Site</button>
          </div>
        </div>
      );
    }
    return (
      <div className="min-h-screen flex bg-gray-50 text-gray-900 font-sans selection:bg-black selection:text-white">
        <aside className="w-80 bg-black text-white flex flex-col min-h-screen sticky top-0 shadow-2xl">
          <div className="p-12 border-b border-gray-800"><h1 className="text-4xl font-black italic tracking-tighter cursor-pointer" onClick={goHome}>CELEBRITY <span className="text-yellow-400">MAG.</span></h1></div>
          <nav className="flex-1 p-8 space-y-3">
            {[ { id: 'DASHBOARD', icon: LayoutDashboard, label: 'Analytics' }, { id: 'ARTICLES', icon: FileText, label: 'Manage Articles' }, { id: 'SUBSCRIBERS', icon: Users, label: 'Audience' }, ...(loggedInUser?.role === 'admin' ? [{ id: 'STAFF', icon: Shield, label: 'Staff Accounts' }] : []) ].map(tab => (
              <button key={tab.id} onClick={() => setAdminTab(tab.id)} className={`w-full flex items-center gap-5 px-6 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all ${adminTab === tab.id ? 'bg-yellow-400 text-black shadow-xl scale-105' : 'text-gray-500 hover:bg-gray-800 hover:text-white'}`}><tab.icon size={20} /> {tab.label}</button>
            ))}
            <div className="pt-10 space-y-4">
              <button onClick={() => {setEditingId(null); setCmsForm(resetForm); setView('STUDIO');}} className="w-full flex items-center justify-center gap-3 py-6 bg-white text-black rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-yellow-400 shadow-2xl transition-all"><PenTool size={18} /> Writing Studio</button>
              <button onClick={exportManagementData} className="w-full flex items-center justify-center gap-3 py-4 bg-gray-900 text-gray-400 rounded-2xl font-black uppercase tracking-widest text-[9px] hover:bg-gray-800 hover:text-white transition-all"><Download size={14} /> Export Data</button>
            </div>
          </nav>
          <div className="p-10 border-t border-gray-800"><button onClick={() => {setIsAuthenticated(false); setLoggedInUser(null);}} className="text-gray-500 hover:text-white font-black uppercase text-[10px] tracking-widest flex items-center gap-2 transition-colors"><LogOut size={16}/> Logout</button></div>
        </aside>
        <main className="flex-1 p-20 max-w-7xl mx-auto overflow-y-auto">
          {adminTab === 'ARTICLES' ? (
             <div className="animate-in fade-in slide-in-from-bottom-8"><h2 className="text-6xl font-black uppercase italic mb-16 tracking-tighter leading-none">Content Hub</h2><div className="bg-white rounded-[50px] shadow-sm border border-gray-100 overflow-hidden"><table className="w-full text-left"><thead><tr className="bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b"><th className="p-10">Visual & Headline</th><th className="p-10 text-center">Featured Status</th><th className="p-10 text-center">Actions</th></tr></thead><tbody>{articlesList.map(a => (<tr key={a.id} className="border-b last:border-0 hover:bg-gray-50 transition-colors"><td className="p-10 flex items-center gap-8"><img src={a.image} className="w-24 h-24 rounded-[30px] object-cover grayscale shadow-sm" alt="" /><div><span className="font-black text-2xl italic tracking-tighter block uppercase">{a.title}</span><span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2 block">Writer: {a.author} • {a.date}</span></div></td><td className="p-10"><button onClick={() => handleToggleFeatured(a.id)} disabled={loggedInUser?.role !== 'admin'} className={`mx-auto flex items-center gap-2 px-5 py-3 rounded-full text-[10px] font-black transition-all ${a.isFeatured ? 'bg-yellow-400 text-black shadow-lg scale-105' : 'bg-gray-100 text-gray-400'}`}>{a.isFeatured ? <Star size={12} fill="currentColor"/> : <StarOff size={12}/>} {a.isFeatured ? 'COVER PINNED' : 'STANDARD'}</button></td><td className="p-10 flex justify-center gap-4"><button onClick={() => { setEditingId(a.id); setCmsForm(a); setView('STUDIO'); }} className="p-4 bg-gray-900 text-white rounded-2xl hover:bg-yellow-400 hover:text-black transition-all shadow-md"><Edit3 size={18}/></button><button onClick={() => handleDeleteArticle(a.id)} className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-md"><Trash2 size={18}/></button></td></tr>))}</tbody></table></div></div>
          ) : adminTab === 'STAFF' ? (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-6xl font-black uppercase italic mb-16 tracking-tighter leading-none">Staff Management</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 bg-white p-10 rounded-[40px] shadow-sm border h-fit sticky top-0">
                  <h3 className="font-black uppercase mb-8 flex items-center gap-2 tracking-widest text-sm"><UserPlus size={20}/> New Account</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if(adminAccounts.find(a => a.id === newAccInput.id)) return addToast('⚠️ ID exists.');
                    setAdminAccounts([...adminAccounts, { ...newAccInput }]);
                    setNewAccInput({ id: '', pw: '', name: '', role: 'reporter', email: '' });
                    addToast('✅ 계정 생성 완료');
                  }} className="space-y-6">
                    <input required type="text" placeholder="ID" className="w-full bg-gray-50 p-4 rounded-xl font-bold border-none" value={newAccInput.id} onChange={e => setNewAccInput({...newAccInput, id: e.target.value})} />
                    <input required type="password" placeholder="PW" className="w-full bg-gray-50 p-4 rounded-xl font-bold border-none" value={newAccInput.pw} onChange={e => setNewAccInput({...newAccInput, pw: e.target.value})} />
                    <input required type="text" placeholder="NAME" className="w-full bg-gray-50 p-4 rounded-xl font-bold border-none" value={newAccInput.name} onChange={e => setNewAccInput({...newAccInput, name: e.target.value})} />
                    <select className="w-full bg-gray-50 p-4 rounded-xl font-bold border-none" value={newAccInput.role} onChange={e => setNewAccInput({...newAccInput, role: e.target.value})}><option value="reporter">Reporter</option><option value="admin">Admin</option></select>
                    <button type="submit" className="w-full bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all">Add Staff</button>
                  </form>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  {adminAccounts.map(acc => (
                    <div key={acc.id} className="bg-white p-8 rounded-[35px] shadow-sm border flex items-center justify-between group hover:border-yellow-400 transition-all">
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black ${acc.role === 'admin' ? 'bg-yellow-400 text-black shadow-lg' : 'bg-gray-100 text-black'}`}>{acc.name?.[0] || 'U'}</div>
                        <div><p className="font-black text-xl uppercase tracking-tighter">{acc.name} <span className="text-[9px] font-black uppercase text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-2">{acc.role}</span></p><p className="text-[10px] text-gray-400 font-mono mt-1">ID: {acc.id}</p></div>
                      </div>
                      {acc.id !== 'admin' && <button onClick={() => setAdminAccounts(adminAccounts.filter(a => a.id !== acc.id))} className="p-4 text-red-100 group-hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"><Trash2 size={24}/></button>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : adminTab === 'SUBSCRIBERS' ? (
            <div className="animate-in fade-in slide-in-from-bottom-8">
              <h2 className="text-6xl font-black uppercase italic mb-16 tracking-tighter leading-none">Audience</h2>
              <div className="bg-white rounded-[50px] shadow-sm border border-gray-100 overflow-hidden p-10">
                <div className="mb-8 flex justify-between items-center">
                  <p className="text-xl font-bold">Total Subscribers: <span className="text-yellow-500">{subscribers.length}</span></p>
                </div>
                {subscribers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subscribers.map((sub, i) => (
                      <div key={i} className="flex items-center justify-between p-6 border border-gray-100 rounded-3xl bg-gray-50">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">{sub.email[0].toUpperCase()}</div>
                          <div>
                            <p className="font-bold text-gray-800">{sub.email}</p>
                            <p className="text-xs text-gray-500">{sub.date}</p>
                          </div>
                        </div>
                        {loggedInUser?.role === 'admin' && (
                           <button onClick={() => handleRemoveSubscriber(sub.email)} className="p-3 text-red-400 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors"><Trash2 size={18}/></button>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-gray-400 font-bold">아직 구독자가 없습니다.</div>
                )}
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-8 space-y-16">
              <h2 className="text-7xl font-black uppercase italic tracking-tighter leading-none">System Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-white p-14 rounded-[60px] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2"><p className="text-[11px] font-black text-gray-400 tracking-widest mb-6 uppercase">Published Assets</p><p className="text-9xl font-black italic tracking-tighter leading-none">{articlesList.length}</p></div>
                <div className="bg-white p-14 rounded-[60px] shadow-sm border border-gray-100 transition-transform hover:-translate-y-2"><p className="text-[11px] font-black text-gray-400 tracking-widest mb-6 uppercase">Total Audience</p><p className="text-9xl font-black italic tracking-tighter leading-none">{subscribers.length}</p></div>
                <div className="bg-black p-14 rounded-[60px] shadow-2xl text-white flex flex-col justify-between border-t-[20px] border-yellow-400 transition-transform hover:-translate-y-2"><p className="text-[11px] font-black uppercase text-yellow-400 tracking-widest mb-8">Connectivity</p><p className="text-5xl font-black italic leading-[0.9] uppercase">ONLINE &<br/>BROADCASTING</p></div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  if (selectedArticle) {
    const youtubeId = getYouTubeID(selectedArticle.videoUrl || '');
    return (
      <div className="animate-in fade-in duration-700 bg-white text-[#111] min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
        <nav className="fixed top-0 w-full z-50 bg-black px-12 py-6 flex justify-between items-center shadow-2xl">
          <div className="text-3xl font-black cursor-pointer tracking-tighter italic text-white" onClick={goHome}>
            CELEBRITY <span className="text-yellow-400">MAG.</span>
          </div>
          <button onClick={() => setIsSubscribeOpen(true)} className="bg-white text-black px-8 py-2.5 rounded-full font-black text-[10px] hover:bg-yellow-400 transition-all uppercase tracking-widest shadow-xl">Subscribe</button>
        </nav>

        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
          <div className="h-full bg-yellow-400 transition-all shadow-[0_0_10px_#facc15]" style={{ width: `${scrollProgress}%` }} />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-12 gap-12 pt-48 pb-40">
          <div className="hidden xl:block col-span-2 sticky top-48 h-[600px] bg-[#f9f9f9] border border-gray-100 rounded-3xl flex flex-col items-center justify-center p-6 text-center shadow-inner">
             <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-4">Official Sponsor</p>
             <div className="flex-1 w-full bg-white border border-gray-200 rounded-2xl flex items-center justify-center italic text-gray-200 font-bold text-[10px]">PLACE YOUR AD</div>
          </div>

          <div className="col-span-12 lg:col-span-8 xl:col-span-7 pr-0 lg:pr-10 border-r-0 lg:border-r border-gray-100">
            <button onClick={() => setSelectedArticle(null)} className="group flex items-center gap-2 mb-12 text-[11px] font-black text-gray-400 hover:text-black transition-all uppercase tracking-widest">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Edition
            </button>
            <h1 className="text-4xl md:text-[54px] font-black leading-[1.05] mb-10 tracking-tighter text-gray-900 uppercase italic">{selectedArticle.title}</h1>
            <div className="flex items-center justify-between border-y border-gray-100 py-6 mb-12 text-gray-500 text-xs font-bold">
              <div className="flex items-center gap-6">
                <span className="bg-black text-white px-3 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase">{selectedArticle.category}</span>
                <span className="text-gray-300">|</span><span>{selectedArticle.date}</span>
                <span className="text-gray-300">|</span><span className="text-yellow-600 font-black">{getReadTime(selectedArticle.content)}</span>
                <span className="text-gray-300">|</span><span className="text-black font-black uppercase flex items-center gap-2"><UserCircle size={14}/> {selectedArticle.author}</span>
              </div>
              <div className="flex items-center gap-5">
                 <button onClick={() => handleShare('facebook', selectedArticle)} className="text-gray-400 hover:text-[#1877F2] transition-colors"><Facebook size={20}/></button>
                 <button onClick={() => handleShare('twitter', selectedArticle)} className="text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={20}/></button>
                 <button onClick={() => handleShare('native', selectedArticle)} className="text-gray-400 hover:text-green-600 transition-colors"><MessageCircle size={20}/></button>
                 <button onClick={() => handleShare('link', selectedArticle)} className="text-gray-400 hover:text-black transition-colors"><LinkIcon size={20}/></button>
              </div>
            </div>

            {selectedArticle.summary && (
              <div className="bg-[#fcfcfc] border-2 border-gray-100 rounded-[35px] p-10 mb-14 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
                <div className="flex items-center gap-3 mb-6"><div className="w-8 h-8 bg-black text-yellow-400 rounded-xl flex items-center justify-center font-black text-xs">AI</div><span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900">핵심 요약 리포트</span></div>
                <p className="text-[18px] font-bold text-gray-700 leading-relaxed whitespace-pre-line italic">"{selectedArticle.summary}"</p>
              </div>
            )}

            <div className="mb-14 rounded-[40px] overflow-hidden shadow-2xl relative bg-black border border-gray-100">
               {selectedArticle.mediaType === 'youtube' && youtubeId ? (
                 <div className="aspect-video w-full"><iframe className="w-full h-full" src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`} frameBorder="0" allowFullScreen></iframe></div>
               ) : selectedArticle.mediaType === 'video' ? (
                 <video src={selectedArticle.videoUrl} controls className="w-full aspect-video object-contain" />
               ) : (
                 <img src={selectedArticle.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt="Visual" />
               )}
            </div>

            <div className="prose prose-xl max-w-none text-[#222] whitespace-pre-line leading-[1.9] pb-24" style={{ ...(selectedArticle.style || {fontSize: '18px'}) }}>
              {selectedArticle.content}
            </div>

            <div className="flex items-center gap-8 p-12 bg-[#f9f9f9] rounded-[50px] mb-24 border border-gray-100 relative group">
               <div className="w-24 h-24 rounded-[30px] bg-black flex items-center justify-center text-yellow-400 font-black text-3xl shadow-xl transform group-hover:rotate-12 transition-transform duration-500">{selectedArticle.author?.[0] || 'M'}</div>
               <div><p className="text-3xl font-black text-gray-900 flex items-center gap-3 italic">{selectedArticle.author}</p><p className="text-md font-medium text-gray-500 font-mono mt-2 underline decoration-yellow-400 decoration-4 underline-offset-8">{selectedArticle.authorEmail || 'reporter@celebritymag.co.kr'}</p></div>
            </div>
          </div>

          <div className="hidden lg:block col-span-4 xl:col-span-3 space-y-20 sticky top-48 h-fit">
             <div className="bg-[#111] rounded-[50px] p-10 shadow-2xl border border-white/5 overflow-hidden relative group">
                <h4 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-yellow-400 border-b border-white/10 pb-5 mb-10">
                  <TrendingUp size={16}/> Top Trends
                </h4>
                <div className="space-y-8">
                   {articlesList.filter(a => a.id !== selectedArticle?.id).slice(0,3).map((trend, i) => (
                     <div key={trend.id} onClick={() => openArticle(trend)} className="flex gap-4 group cursor-pointer items-start">
                        <span className="text-4xl font-black text-white/10 group-hover:text-yellow-400/50 transition-colors italic leading-none">{i+1}</span>
                        <div>
                          <p className="text-[13px] font-bold text-gray-300 leading-snug group-hover:text-white transition-colors line-clamp-2">"{trend.title}"</p>
                          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-2">in {trend.category}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Article View - Subscribe Modal */}
        {isSubscribeOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsSubscribeOpen(false)} />
            <div className="relative bg-[#0a0a0a] border border-white/10 text-white max-w-2xl w-full p-20 md:p-24 rounded-[60px] shadow-[0_0_100px_rgba(250,204,21,0.15)] text-center">
              {isSubscribed ? (
                <div className="animate-in zoom-in duration-500"><CheckCircle2 size={100} className="mx-auto text-yellow-400 mb-10" /><h2 className="text-5xl font-black italic tracking-tighter uppercase mb-6 leading-none">Welcome to<br/>the inner circle.</h2><p className="text-gray-400">구독이 완료되었습니다.</p></div>
              ) : (
                <div>
                  <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">JOIN THE<br/><span className="text-yellow-400">CIRCLE.</span></h2>
                  <p className="text-gray-400 text-sm mb-12 font-medium tracking-tight">가장 앞선 트렌드와 독점 기사를 매주 이메일로 받아보세요.</p>
                  <form onSubmit={handleSubscribe} className="space-y-8">
                    <input value={subscribeEmail} onChange={(e) => setSubscribeEmail(e.target.value)} required type="email" placeholder="이메일 주소를 입력하세요" className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-yellow-400 text-center tracking-tight placeholder:text-gray-600 transition-colors" />
                    <button type="submit" className="w-full bg-yellow-400 text-black py-6 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white transition-all shadow-xl active:scale-95">Subscribe Now</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,900&display=swap');
        body { font-family: 'Montserrat', sans-serif; overflow-x: hidden; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <nav className={`fixed w-full z-50 transition-all px-12 py-8 flex justify-between items-center ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="text-4xl font-black cursor-pointer tracking-tighter italic hover:scale-105 transition-transform" onClick={goHome}>
          CELEBRITY <span className="text-yellow-400">MAG.</span>
        </div>
        <div className="flex items-center gap-12">
          <button onClick={() => setIsSubscribeOpen(true)} className="bg-white text-black px-10 py-3 rounded-full font-black text-[10px] hover:bg-yellow-400 transition-all uppercase tracking-widest shadow-xl">Subscribe</button>
        </div>
      </nav>

      <header className="relative h-screen flex items-center justify-center p-12 overflow-hidden bg-[#0a0a0a]">
        <img src={featuredArticle?.image} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale scale-110 hover:scale-100 transition-transform duration-[4000ms] ease-out" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="relative z-10 text-center max-w-6xl">
           <span className="inline-block px-4 py-1 bg-yellow-400 text-black font-black text-[9px] uppercase tracking-widest mb-10 shadow-2xl">Cover Story • Issue #12</span>
           <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter italic uppercase mb-12 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {featuredArticle?.title}
           </h1>
           <p className="text-2xl md:text-3xl font-medium italic text-gray-300 mb-16 max-w-3xl mx-auto leading-tight">"{featuredArticle?.subtitle}"</p>
           <button onClick={() => openArticle(featuredArticle)} className="bg-white text-black px-20 py-6 rounded-full font-black uppercase text-xs tracking-[0.4em] hover:bg-yellow-400 hover:scale-110 transition-all shadow-2xl">Explore Narrative</button>
        </div>
      </header>

      <div className="bg-white text-black py-6 overflow-hidden border-y border-white whitespace-nowrap italic font-black uppercase text-5xl md:text-6xl tracking-tighter leading-none relative z-10 shadow-2xl">
        <div className="inline-block animate-marquee">• <span className="text-red-500 animate-pulse">●</span> LIVE • {featuredArticle?.title} • THE STUDIO IS OPEN • NEW EDITION • TRENDING IN {activeTab} </div>
        <div className="inline-block animate-marquee">• <span className="text-red-500 animate-pulse">●</span> LIVE • {featuredArticle?.title} • THE STUDIO IS OPEN • NEW EDITION • TRENDING IN {activeTab} </div>
      </div>

      <section className="py-40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
           <h2 className="text-[80px] font-black italic tracking-tighter uppercase leading-none">The<br/><span className="text-yellow-400">Hot List.</span></h2>
           <div className="flex flex-col items-end gap-8">
              <div className="flex flex-wrap gap-6 justify-end">
                {['ALL', 'NEWS', 'FASHION', 'INTERVIEW', 'LIFE'].map(c => (
                  <button key={c} onClick={() => setActiveTab(c)} className={`text-[12px] font-black uppercase tracking-[0.4em] transition-all hover:scale-110 ${activeTab === c ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1' : 'text-gray-500 hover:text-white'}`}>
                    {c}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <button onClick={() => sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' })} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><ChevronLeft size={24}/></button>
                <button onClick={() => sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' })} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"><ChevronRight size={24}/></button>
              </div>
           </div>
        </div>
        
        <div 
          ref={sliderRef} 
          onMouseDown={handleDragStart}
          onMouseLeave={handleDragEnd}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDragMove}
          className={`flex gap-12 overflow-x-auto no-scrollbar px-6 lg:px-12 pb-20 select-none ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory scroll-smooth'}`}
        >
            {gridArticles.filter(a => activeTab === 'ALL' || a.category === activeTab).length > 0 ? (
              gridArticles.filter(a => activeTab === 'ALL' || a.category === activeTab).map((article) => (
                <div 
                  key={article.id} 
                  onClick={(e) => {
                    if (isDragMove) {
                      e.preventDefault(); // 드래그 중이었다면 클릭 무시
                      return;
                    }
                    openArticle(article);
                  }} 
                  className="min-w-[400px] md:min-w-[600px] aspect-[4/5] bg-[#111] rounded-[50px] relative overflow-hidden group snap-center border border-white/5"
                >
                   <img src={article.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1s]" alt="Slider Item" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                   <div className="absolute bottom-12 left-12 right-12">
                      <span className="text-[10px] font-black uppercase text-yellow-400 tracking-widest block mb-4">{article.category}</span>
                      <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-white group-hover:text-yellow-400 transition-colors">{article.title}</h3>
                   </div>
                </div>
              ))
            ) : (
              <div className="w-full py-20 text-center text-gray-500 font-black italic tracking-widest text-xl uppercase">해당 카테고리의 기사가 아직 없습니다.</div>
            )}
        </div>
      </section>

      <footer className="bg-white text-black pt-60 pb-20 px-12 text-center border-t border-black">
        <h2 className="text-[25vw] font-black italic tracking-tighter leading-[0.7] mb-24 uppercase">CELEBRITY <span className="text-yellow-400">MAG.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center border-t border-black/5 pt-24">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-left opacity-30 italic">Built for the Bold Visionary.</p>
          <div className="flex justify-center gap-16 font-black uppercase text-[10px] tracking-[0.5em]">
            <a href="#" className="hover:text-yellow-500 transition-all">Instagram</a>
            <a href="/#admin" className="hover:text-yellow-500 transition-all">Staff Portal</a>
            <a href="#" className="hover:text-yellow-500 transition-all">Youtube</a>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-right opacity-30 italic">© 2026 Studio Publishing.</p>
        </div>
      </footer>

      {isSubscribeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsSubscribeOpen(false)} />
          <div className="relative bg-[#0a0a0a] border border-white/10 text-white max-w-2xl w-full p-20 md:p-24 rounded-[60px] shadow-[0_0_100px_rgba(250,204,21,0.15)] text-center">
            {isSubscribed ? (
              <div className="animate-in zoom-in duration-500"><CheckCircle2 size={100} className="mx-auto text-yellow-400 mb-10" /><h2 className="text-5xl font-black italic tracking-tighter uppercase mb-6 leading-none">Welcome to<br/>the inner circle.</h2><p className="text-gray-400">구독이 완료되었습니다.</p></div>
            ) : (
              <div>
                <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase mb-6 leading-none">JOIN THE<br/><span className="text-yellow-400">CIRCLE.</span></h2>
                <p className="text-gray-400 text-sm mb-12 font-medium tracking-tight">가장 앞선 트렌드와 독점 기사를 매주 이메일로 받아보세요.</p>
                <form onSubmit={handleSubscribe} className="space-y-8">
                  <input value={subscribeEmail} onChange={(e) => setSubscribeEmail(e.target.value)} required type="email" placeholder="이메일 주소를 입력하세요" className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-yellow-400 text-center tracking-tight placeholder:text-gray-600 transition-colors" />
                  <button type="submit" className="w-full bg-yellow-400 text-black py-6 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white transition-all shadow-xl active:scale-95">Subscribe Now</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="fixed bottom-16 right-16 z-[60] flex flex-col gap-6">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(250,204,21,0.3)] hover:bg-white transition-all hover:scale-110 active:scale-90 group relative">
          <Zap size={32} fill="currentColor"/>
          <span className="absolute right-24 bg-black text-white text-[9px] font-black uppercase px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest whitespace-nowrap">TOP</span>
        </button>
      </div>

      <div className="fixed top-28 right-12 z-[250] flex flex-col gap-4">
        {toasts.map(t => (
          <div key={t.id} className="bg-black text-white px-12 py-7 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] font-black border-l-[16px] border-yellow-400 animate-in slide-in-from-right-12 fade-in text-sm tracking-tight">{t.message}</div>
        ))}
      </div>
    </div>
  );
};

export default App;