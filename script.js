// ZP Upper Primary School Yerla - Interactive & Multi-Language Script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MULTI-LANGUAGE TRANSLATIONS DICTIONARY (EN / MR / HI)
    const translations = {
        en: {
            top_govt: "Govt. of Maharashtra - Zilla Parishad Education Department",
            select_lang: "Language:",
            school_name: "ZP UPPER PRIMARY SCHOOL",
            school_location_tag: "YERLA, MAHARASHTRA",
            nav_home: "Home",
            nav_about: "About Us",
            nav_facilities: "Facilities",
            nav_contact: "Contact Us",
            nav_gallery: "Gallery",
            hero_badge1: "Welcome to School",
            hero_title1: "Z.P. Upper Primary School, Yerla",
            hero_sub1: "Empowering Tomorrow's Leaders with Quality Education in Yerla village, Maharashtra.",
            hero_badge2: "Student Excellence",
            hero_title2: "Inclusive & Value-Based Learning",
            hero_sub2: "Fostering teamwork, critical thinking, and strong values for every child.",
            hero_badge3: "Modern Tech",
            hero_title3: "Digital & Smart TV Classrooms",
            hero_sub3: "Equipped with interactive TV teaching aids and multimedia learning tools.",
            loc_tag: "School Location",
            loc_title: "We Are Here",
            loc_badge: "Yerla, MH",
            loc_desc: "Centrally located in Yerla village, Maharashtra with clear roads and easy access for all students.",
            map_pin_label: "ZP School, Yerla",
            full_address: "Z.P. Upper Primary School, At Post Yerla, Kalameshwar, District Nagpur, Maharashtra 441501",
            map_btn: "Open Directions on Google Maps",
            features_tag: "School Highlights",
            features_title: "Our Key Features",
            features_badge: "4 Cards Grid",
            card1_title: "Digital & Smart TV Class",
            card1_desc: "Audio-visual education equipped with smart TVs and video modules for easy understanding.",
            card1_link: "Digital Learning",
            card2_title: "CCTV Secured Campus",
            card2_desc: "24/7 camera surveillance ensuring maximum security and a safe environment for all children.",
            card2_link: "Campus Safety",
            card3_title: "Sports & Physical Fitness",
            card3_desc: "Spacious playground encouraging sports, physical training exercises, and outdoor fun.",
            card3_link: "Sports Activities",
            card4_title: "Open-Air Eco Campus",
            card4_desc: "Green open classrooms promoting interactive learning amidst nature and fresh surroundings.",
            card4_link: "Eco Initiatives",
            footer_school_title: "Z.P. Upper Primary School",
            footer_school_sub: "Yerla, Maharashtra",
            footer_about_text: "Dedicated to providing quality primary education with smart digital classrooms, safe campus facilities, and sports activities.",
            footer_nav_heading: "Quick Navigation",
            footer_contact_heading: "Contact Details",
            footer_address: "At Post Yerla, Kalameshwar, Nagpur, MH 441501",
            footer_hours: "Mon - Sat: 10:30 AM - 5:00 PM",
            footer_phone: "+91 90961 08602 (K.R. Mondekar)",
            copyright_text: "© ZP Upper Primary School Yerla, Maharashtra. All Rights Reserved.",
            copyright_sub: "Government of Maharashtra - Zilla Parishad Education Department",

            // About Us Page Translations
            about_hero_tag: "About Our School",
            about_hero_title: "Empowering Education & Shaping Futures in Yerla",
            about_hero_sub: "Discover our legacy, mission, vision, and dedication to nurturing young minds through modern digital learning and value-based education.",
            stat_students: "67 Students",
            stat_students_sub: "Enrolled",
            stat_standards: "1st to 7th Std",
            stat_standards_sub: "Classes",
            stat_timings: "10:30 AM - 5 PM",
            stat_timings_sub: "School Timings",
            stat_teachers: "Expert Faculty",
            stat_digital: "Smart TV Classes",
            stat_campus: "CCTV Safe Campus",
            stat_campus_sub: "24/7 Security",
            story_tag: "Our Heritage & Journey",
            story_title: "Nurturing Rural Talent in Yerla Village",
            story_p1: "Zilla Parishad Upper Primary School, Yerla is located in Kalameshwar Block, District Nagpur, Maharashtra. Established with a profound dedication to providing high-quality, inclusive, and accessible elementary education from 1st to 7th standard to all 67 students in the community.",
            story_p2: "Over the years, our school has evolved into a vibrant educational sanctuary. We combine traditional Maharashtrian cultural values with modern technology—featuring Interactive Smart Digital TVs, 24/7 CCTV security surveillance, pure drinking water facilities, and expansive green playgrounds.",
            vision_title: "Our Vision",
            vision_desc: "To empower every student with knowledge, critical thinking, and character so they can become compassionate leaders and responsible citizens.",
            mission_title: "Our Mission",
            mission_desc: "To deliver student-centric education using modern digital tools, sports, eco-friendly learning environments, and strong moral values.",
            values_title: "Core Values",
            values_desc: "Integrity, Inclusivity, Environmental Stewardship, Respect, and Continuous Curiosity in every classroom experience.",
            headmaster_tag: "Leadership Message",
            headmaster_title: "Message from the Headmaster",
            headmaster_quote: "“Education is the most powerful tool to transform lives. At Z.P. Upper Primary School Yerla, we are committed to unlocking every child's potential through interactive digital technology, individual attention, and a supportive environment.”",
            headmaster_name: "K.R. Mondekar",
            headmaster_role: "Headmaster / Principal, Z.P. Upper Primary School Yerla",
            pillars_tag: "School Highlights",
            pillars_title: "Four Pillars of Excellence",
            pillar1_title: "Interactive Smart TVs",
            pillar1_desc: "Audio-visual learning that brings subjects to life with engaging educational videos and animations.",
            pillar2_title: "CCTV Surveillance",
            pillar2_desc: "24/7 campus monitoring ensuring complete peace of mind and security for students and parents.",
            pillar3_title: "Pure Drinking Water",
            pillar3_desc: "Dedicated clean water tank system ensuring hygienic, safe drinking water for all children daily.",
            pillar4_title: "Green Outdoor Campus",
            pillar4_desc: "Spacious sports playground and open-air eco classrooms fostering physical health and nature connection.",

            // Facilities Page Translations (Concise & Clean)
            fac_hero_badge: "Campus Infrastructure",
            fac_hero_title: "Modern, Safe & Inspiring Facilities",
            fac_hero_sub: "Discover the key campus facilities providing a safe, digital, and healthy environment for every child.",
            fac_badge_count: "6 Core Facilities",
            
            fac_filter_all: "All Facilities",
            fac_filter_safety: "Safety & Infra",
            fac_filter_digital: "Digital Learning",
            fac_filter_outdoor: "Outdoor & Sports",
            fac_filter_health: "Water & Health",
            
            fac1_badge: "Security & Safety",
            fac1_title: "24/7 CCTV Camera Security",
            fac1_sub: "Continuous HD Camera Surveillance",
            fac1_desc: "High-definition 24/7 CCTV cameras monitor gates, corridors, and classrooms to ensure complete child safety and peace of mind.",
            fac1_feat1: "HD 24/7 Monitoring",
            fac1_feat2: "Full Campus Coverage",
            fac1_feat3: "Child Safety Focus",

            fac2_badge: "Accessibility & Roads",
            fac2_title: "Good Transportation Roads",
            fac2_sub: "Smooth All-Weather Access Roads",
            fac2_desc: "Wide, paved asphalt roads connect Yerla village directly to main highway corridors for easy, safe daily commuting.",
            fac2_feat1: "Wide Paved Asphalt Roads",
            fac2_feat2: "Easy Bus & Cycle Commute",
            fac2_feat3: "Safe Pedestrian Access",

            fac3_badge: "Smart Education",
            fac3_title: "Digital TV in Classrooms",
            fac3_sub: "Interactive Smart AV Modules",
            fac3_desc: "Interactive Smart TVs in classrooms bring lessons to life with educational videos and animated visual learning modules.",
            fac3_feat1: "Interactive Smart TVs",
            fac3_feat2: "Visual Animated Lessons",
            fac3_feat3: "Interactive E-Learning",

            fac4_badge: "Eco Learning",
            fac4_title: "Open-Air Eco Classrooms",
            fac4_sub: "Outdoor Learning amidst Green Trees",
            fac4_desc: "Shady tree-filled open classrooms offer fresh air for interactive group discussions, storytelling, and practical nature study.",
            fac4_feat1: "Fresh Air & Tree Shade",
            fac4_feat2: "Practical Nature Study",
            fac4_feat3: "Group Discussions",

            fac5_badge: "Sports & Fitness",
            fac5_title: "Huge Sports Playground",
            fac5_sub: "Spacious Field for Games & PT",
            fac5_desc: "A spacious open playground dedicated to Kho-Kho, Kabaddi, Volleyball, athletics, and morning fitness drills.",
            fac5_feat1: "Spacious Sports Turf",
            fac5_feat2: "Kho-Kho & Kabaddi Courts",
            fac5_feat3: "Daily Fitness Drills",

            fac6_badge: "Health & Hygiene",
            fac6_title: "24-Hour Pure Water Supply",
            fac6_sub: "Clean Drinking Water & Sanitation",
            fac6_desc: "Overhead water storage tank and filtration system providing continuous purified drinking water and hygienic washrooms.",
            fac6_feat1: "24/7 Purified Water",
            fac6_feat2: "Storage Tank System",
            fac6_feat3: "Hygienic Clean Washrooms",

            fac_table_title: "Facility Highlights",
            fac_table_sub: "Essential infrastructure standards at Z.P. Upper Primary School Yerla",
            fac_table_col1: "Facility",
            fac_table_col2: "Specification",
            fac_table_col3: "Status",
            
            fac_btn_view: "View Details",
            fac_modal_close: "Close Window",
            fac_cta_title: "Experience Our School Campus",
            fac_cta_sub: "Visit Z.P. Upper Primary School Yerla or get directions to see our facilities firsthand.",
            fac_cta_btn1: "Contact School Office",
            fac_cta_btn2: "Get Directions on Google Maps",

            // Contact Us Page (English)
            contact_hero_badge: "Get In Touch",
            contact_hero_title: "Contact Z.P. Upper Primary School Yerla",
            contact_hero_sub: "Have questions about admissions, school curriculum, or facilities? We are always here to assist parents and students.",
            contact_form_title: "Send Us a Message",
            contact_form_sub: "Fill out the form below and our school office will get back to you promptly.",
            contact_label_name: "Full Name",
            contact_label_phone: "Phone Number",
            contact_label_email: "Email Address",
            contact_label_subject: "Inquiry Type",
            contact_opt_admission: "New Admission Inquiry",
            contact_opt_academic: "Academic & Curriculum",
            contact_opt_facility: "Campus & Facilities",
            contact_opt_general: "General Inquiry",
            contact_label_message: "Your Message / Question",
            contact_btn_send: "Send Message Now",
            contact_info_title: "School Office Details",
            contact_info_address_title: "School Campus Address",
            contact_info_address: "Z.P. Upper Primary School, At Post Yerla, Kalameshwar, District Nagpur, Maharashtra 441501",
            contact_info_hours_title: "School & Office Hours",
            contact_info_hours: "Monday - Saturday: 10:30 AM to 5:00 PM (Sunday Closed)",
            contact_info_phone_title: "Principal & Contact Phone",
            contact_info_phone: "+91 90961 08602",
            contact_faq_title: "Frequently Asked Questions",
            contact_faq1_q: "What is the admission procedure for new students?",
            contact_faq1_a: "Admissions are open throughout the academic year. Parents can visit the school office with the child's birth certificate and previous school leaving certificate.",
            contact_faq2_q: "Are the smart digital classes available for all grades?",
            contact_faq2_a: "Yes, all 67 students across 1st to 7th standard have access to interactive digital TV classes and audio-visual educational modules.",
            contact_faq3_q: "How is student security maintained on campus?",
            contact_faq3_a: "The entire school campus, entry gates, and corridors are monitored 24/7 by high-definition CCTV cameras with trained school staff supervision.",

            // Gallery Page (English)
            gallery_hero_badge: "Campus Memories & Life",
            gallery_hero_title: "School Photo & Activity Gallery",
            gallery_hero_sub: "Explore moments from our smart classrooms, playground sports, environmental sessions, and vibrant campus life.",
            gallery_filter_all: "All Photos",
            gallery_filter_campus: "Campus & Entrance",
            gallery_filter_classrooms: "Smart Classrooms",
            gallery_filter_sports: "Sports & Grounds",
            gallery_filter_infra: "Infrastructure & Roads",
            gallery_caption1: "Main School Entrance & Gate",
            gallery_caption2: "School Campus Gateway",
            gallery_caption3: "Enthusiastic Students in Uniform",
            gallery_caption4: "Well-Ventilated Classroom",
            gallery_caption5: "Traditional Blackboard Learning",
            gallery_caption6: "Natural Open-Air Eco Classroom",
            gallery_caption7: "Interactive Smart Digital TV",
            gallery_caption8: "24/7 CCTV Surveillance Camera",
            gallery_caption9: "Safe Drinking Water Storage Tank",
            gallery_caption10: "Green Open Playground",
            gallery_caption11: "Sports & Athletics Turf Ground",
            gallery_caption12: "Administrative School Office",
            gallery_caption13: "Paved Village Access Road",
            gallery_caption14: "Connecting Highway Approach Road"
        },
        mr: {
            top_govt: "महाराष्ट्र शासन - जिल्हा परिषद शिक्षण विभाग",
            select_lang: "भाषा निवडा:",
            school_name: "जि. प. उच्च प्राथमिक शाळा",
            school_location_tag: "येरला, महाराष्ट्र",
            nav_home: "मुख्य पृष्ठ",
            nav_about: "आमच्याबद्दल",
            nav_facilities: "सुविधा",
            nav_contact: "संपर्क साधाहून",
            nav_gallery: "गॅलरी",
            hero_badge1: "शाळेत आपले स्वागत आहे",
            hero_title1: "जिल्हा परिषद उच्च प्राथमिक शाळा, येरला",
            hero_sub1: "येरला गावात गुणवत्तेच्या शिक्षणाने उद्याचे सुजाण नागरिक व नेते घडवत आहोत.",
            hero_badge2: "विद्यार्थी गुणवत्ता",
            hero_title2: "सर्वसमावेशक व मूल्यवर्धित शिक्षण",
            hero_sub2: "प्रत्येक विद्यार्थ्यामध्ये संघभावना, विचारशक्ती आणि मूल्यांची रुजवणूक.",
            hero_badge3: "आधुनिक तंत्रज्ञान",
            hero_title3: "डिजिटल व स्मार्ट टीव्ही वर्ग खोल्या",
            hero_sub3: "डिजिटल टीव्ही, व्हिडिओ धडे आणि आधुनिक शैक्षणिक साधनांनी सुसज्ज वर्ग.",
            loc_tag: "शाळेचा पत्ता",
            loc_title: "आम्ही येथे आहोत",
            loc_badge: "येरला, नागपूर",
            loc_desc: "येरला गावात मध्यवर्ती ठिकाणी शाळा स्थित असून सर्व विद्यार्थ्यांसाठी सुलभ रस्ता आहे.",
            map_pin_label: "जि. प. शाळा, येरला",
            full_address: "जिल्हा परिषद उच्च प्राथमिक शाळा, मु. पो. येरला, ता. कळमेश्वर, जि. नागपूर, महाराष्ट्र ४४१५०१",
            map_btn: "गुगल मॅप्सवर दिशा मार्ग पहा",
            features_tag: "शाळेची वैशिष्ट्ये",
            features_title: "प्रमुख सुविधा व वैशिष्ट्ये",
            features_badge: "४ प्रमुख विभाग",
            card1_title: "डिजिटल स्मार्ट टीव्ही वर्ग",
            card1_desc: "स्मार्ट टीव्ही आणि शैक्षणिक व्हिडिओद्वारे सोप्या भाषेत आधुनिक ऑडिओ-व्हिज्युअल शिक्षण.",
            card1_link: "डिजिटल शिक्षण",
            card2_title: "सीसीटीव्ही सुरक्षित परिसर",
            card2_desc: "विद्यार्थ्यांच्या संपूर्ण सुरक्षेसाठी २४/७ सीसीटीव्ही कॅमेऱ्यांची पाळत.",
            card2_link: "सुरक्षित परिसर",
            card3_title: "क्रीडा व शारीरिक शिक्षण",
            card3_desc: "खेळ, शारीरिक शिक्षण, व्यायाम आणि मैदानी खेळांसाठी भव्य क्रीडांगण.",
            card3_link: "क्रीडा उपक्रम",
            card4_title: "पर्यावरणपूरक परिसर",
            card4_desc: "निसर्गाच्या सानिध्यात मोकळ्या हवेत आनंदी व पर्यावरणपूरक शिक्षण.",
            card4_link: "पर्यावरण उपक्रम",
            footer_school_title: "जिल्हा परिषद उच्च प्राथमिक शाळा",
            footer_school_sub: "येरला, महाराष्ट्र",
            footer_about_text: "डिजिटल वर्गखोल्या, सुरक्षित परिसर आणि क्रीडा उपक्रमांद्वारे गुणवत्तेचे प्राथमिक शिक्षण देणे हा आमचा उद्देश आहे.",
            footer_nav_heading: "महत्वाच्या लिंक्स",
            footer_contact_heading: "संपर्क माहिती",
            footer_address: "मु. पो. येरला, ता. कळमेश्वर, जि. नागपूर, महाराष्ट्र ४४१५०१",
            footer_hours: "सोम - शनि: सकाळी १०:३० ते संध्याकाळी ५:००",
            footer_phone: "+९१ ९०९६१ ०८६०२ (के. आर. मोंडेकर)",
            copyright_text: "© जिल्हा परिषद उच्च प्राथमिक शाळा येरला, महाराष्ट्र. सर्व हक्क राखीव.",
            copyright_sub: "महाराष्ट्र शासन - जिल्हा परिषद शिक्षण विभाग",

            // About Us Page Translations
            about_hero_tag: "शाळेविषयी माहिती",
            about_hero_title: "येरला गावात गुणवत्तेचे शिक्षण आणि उज्ज्वल भविष्य",
            about_hero_sub: "डिजिटल शिक्षण, संस्कार आणि क्रीडा उपक्रमांद्वारे बालकांच्या सर्वांगीण विकासासाठी आमची कटिबद्धता.",
            stat_students: "६७ विद्यार्थी",
            stat_students_sub: "प्रवेशित",
            stat_standards: "१ ली ते ७ वी",
            stat_standards_sub: "इयत्ता",
            stat_timings: "१०:३० - ५:००",
            stat_timings_sub: "शाळेची वेळ",
            stat_teachers: "अनुभवी शिक्षक",
            stat_digital: "डिजिटल वर्ग",
            stat_campus: "सुरक्षित परिसर",
            stat_campus_sub: "२४/७ सीसीटीव्ही",
            story_tag: "आमचा इतिहास व प्रवास",
            story_title: "ग्रामीण भागातील गुणवत्तेला आकार देणारी शाळा",
            story_p1: "जिल्हा परिषद उच्च प्राथमिक शाळा, येरला ता. कळमेश्वर, जि. नागपूर येथे स्थित आहे. समाजातील प्रत्येक घटकातील इयत्ता १ ली ते ७ वी पर्यंतच्या ६७ बालकांना मोफत, सुलभ व दर्जात्मक प्राथमिक शिक्षण देण्याच्या ध्येयाने शाळा समर्पित आहे.",
            story_p2: "काळाच्या ओघात शाळेने आधुनिकतेची कास धरली असून आज शाळा डिजिटल स्मार्ट टीव्ही, २४/७ सीसीटीव्ही सुरक्षा, शुद्ध पिण्याचे पाणी, हिरवागार निसर्गरम्य परिसर आणि खेळाच्या मैदानासह सज्ज आहे.",
            vision_title: "आमची दृष्टी (Vision)",
            vision_desc: "प्रत्येक विद्यार्थ्यातील सुप्त गुणांचा शोध घेऊन त्यांचा शैक्षणिक व बौद्धिक विकास करणे आणि त्यांना एक जबाबदार नागरिक बनवणे.",
            mission_title: "आमचे ध्येय (Mission)",
            mission_desc: "डिजिटल तंत्रज्ञान, नैतिक मूल्ये, क्रीडा आणि पर्यावरण संरक्षणाचा मेळ घालून विद्यार्थ्यांचा सर्वांगीण विकास साधणे.",
            values_title: "मूलभूत मूल्ये (Values)",
            values_desc: "उत्कृष्टता, शिस्त, सर्वांगीण सहभाग, निसर्गरक्षण आणि जिज्ञासा ही आमची मुख्य मूल्ये आहेत.",
            headmaster_tag: "शाळा नेतृत्व",
            headmaster_title: "मुख्याध्यापकांचा संदेश",
            headmaster_quote: "“शिक्षण म्हणजे केवळ पुस्तकी ज्ञान नव्हे, तर बालकांच्या मनात उत्सुकता, आत्मविश्वास आणि नैतिक मूल्यांची ज्योत प्रज्वलित करणे होय. आमच्या शाळेत प्रत्येक विद्यार्थ्याकडे विशेष लक्ष दिले जाते.”",
            headmaster_name: "के. आर. मोंडेकर",
            headmaster_role: "मुख्याध्यापक, जि. प. उच्च प्राथमिक शाळा येरला",
            pillars_tag: "शाळेची वैशिष्ट्ये",
            pillars_title: "उत्कृष्टतेचे चार मुख्य स्तंभ",
            pillar1_title: "डिजिटल स्मार्ट टीव्ही",
            pillar1_desc: "ऑडिओ-व्हिज्युअल धड्यांद्वारे सोप्या भाषेत आधुनिक आणि रंजक शिक्षण.",
            pillar2_title: "सीसीटीव्ही सुरक्षितता",
            pillar2_desc: "विद्यार्थ्यांच्या संपूर्ण सुरक्षेसाठी २४/७ सीसीटीव्ही कॅमेऱ्यांची पाळत.",
            pillar3_title: "शुद्ध पिण्याचे पाणी",
            pillar3_desc: "विद्यार्थ्यांच्या आरोग्यासाठी स्वच्छ व शुद्ध पिण्याच्या पाण्याची सोय.",
            pillar4_title: "पर्यावरणपूरक परिसर",
            pillar4_desc: "निसर्गाच्या सानिध्यात मोकळ्या हवेत आनंदी शिक्षण व भव्य क्रीडांगण.",

            // Facilities Page Translations (Marathi Concise)
            fac_hero_badge: "शाळेची पायाभूत सुविधा",
            fac_hero_title: "सुरक्षित, आधुनिक व प्रेरणादायी परिसर",
            fac_hero_sub: "विद्यार्थ्यांच्या सुरक्षितता, क्रीडा व आधुनिक शिक्षणासाठी शाळेतील प्रमुख सुविधा.",
            fac_badge_count: "६ प्रमुख सुविधा",
            
            fac_filter_all: "सर्व सुविधा",
            fac_filter_safety: "सुरक्षा व रस्ते",
            fac_filter_digital: "डिजिटल शिक्षण",
            fac_filter_outdoor: "क्रीडा व निसर्ग",
            fac_filter_health: "पाणी व आरोग्य",
            
            fac1_badge: "सुरक्षा व पाळत",
            fac1_title: "२४/७ सीसीटीव्ही सुरक्षा",
            fac1_sub: "शाळा परिसरात एचडी कॅमेऱ्यांची पाळत",
            fac1_desc: "प्रवेशद्वार, वर्ग आणि संपूर्ण परिसरावर २४ तास एचडी सीसीटीव्ही कॅमेऱ्यांची पाळत.",
            fac1_feat1: "एचडी २४/७ पाळत",
            fac1_feat2: "संपूर्ण परिसर देखरेख",
            fac1_feat3: "विद्यार्थी सुरक्षितता",

            fac2_badge: "वाहतूक व रस्ते",
            fac2_title: "उत्तम वाहतूक व पक्के रस्ते",
            fac2_sub: "शाळेसाठी सुलभ पक्का रस्ता",
            fac2_desc: "येरला गावाला मुख्य रस्त्याशी जोडणारे रुंद व सुरक्षित पक्के डांबरी रस्ते.",
            fac2_feat1: "रुंद डांबरी रस्ते",
            fac2_feat2: "सायकल व बससाठी सुलभ",
            fac2_feat3: "सुरक्षित पादचारी मार्ग",

            fac3_badge: "स्मार्ट शिक्षण",
            fac3_title: "वर्गखोल्यांमध्ये डिजिटल टीव्ही",
            fac3_sub: "ऑडिओ-व्हिज्युअल स्मार्ट वर्ग",
            fac3_desc: "स्मार्ट टीव्ही आणि व्हिडिओ धड्यांद्वारे सोप्या भाषेत ई-लर्निंग शिक्षण.",
            fac3_feat1: "इंटरॅक्टिव्ह स्मार्ट टीव्ही",
            fac3_feat2: "चित्रमय व्हिडिओ धडे",
            fac3_feat3: "सोपे ई-लर्निंग शिक्षण",

            fac4_badge: "पर्यावरणपूरक शिक्षण",
            fac4_title: "मोकळ्या हवेतील निसर्गरम्य वर्ग",
            fac4_sub: "झाडांच्या शितल छायेत शिक्षण",
            fac4_desc: "झाडांच्या सावलीत मोकळ्या हवेतील आनंदी व निसर्गरम्य वर्गखोल्या.",
            fac4_feat1: "ताजी हवा व सावली",
            fac4_feat2: "प्रत्यक्ष निसर्ग अभ्यास",
            fac4_feat3: "आनंददायी गटचर्चा",

            fac5_badge: "क्रीडा व आरोग्य",
            fac5_title: "भव्य व प्रशस्त क्रीडांगण",
            fac5_sub: "मैदानी खेळांसाठी मोठे मैदान",
            fac5_desc: "खो-खो, कबड्डी, खेळ व रोजच्या व्यायामासाठी भव्य व प्रशस्त क्रीडांगण.",
            fac5_feat1: "प्रशस्त क्रीडा मैदान",
            fac5_feat2: "खो-खो व कबड्डी कोर्ट",
            fac5_feat3: "दररोजचा व्यायाम व पीटी",

            fac6_badge: "आरोग्य व स्वच्छता",
            fac6_title: "२४ तास शुद्ध पाणी पुरवठा",
            fac6_sub: "पाण्याची टाकी व स्वच्छ पाणी",
            fac6_desc: "पाण्याची टाकी व फिल्टर यंत्रणेद्वारे २४ तास स्वच्छ पिण्याचे पाणी आणि स्वच्छतागृहे.",
            fac6_feat1: "२४/७ अखंडित पाणी",
            fac6_feat2: "शुद्ध पाण्याची टाकी",
            fac6_feat3: "स्वच्छ स्वच्छतागृहे",

            fac_table_title: "सुविधांचा आढावा",
            fac_table_sub: "जि. प. उच्च प्राथमिक शाळा येरला येथील सुविधांची माहिती",
            fac_table_col1: "सुविधा",
            fac_table_col2: "तपशील",
            fac_table_col3: "स्थिती",
            
            fac_btn_view: "सविस्तर माहिती",
            fac_modal_close: "खिडकी बंद करा",
            fac_cta_title: "शाळेच्या परिसराला भेट द्या",
            fac_cta_sub: "जि. प. उच्च प्राथमिक शाळा येरला येथील सुविधा प्रत्यक्ष पाहण्यासाठी संपर्क साधा.",
            fac_cta_btn1: "शाळा कार्यालयाशी संपर्क",
            fac_cta_btn2: "गूगल मॅप्सवर रस्ता पहा",

            // Contact Us Page (Marathi)
            contact_hero_badge: "संपर्क साधा",
            contact_hero_title: "जि. प. उच्च प्राथमिक शाळा येरला यांच्याशी संपर्क साधा",
            contact_hero_sub: "प्रवेश, अभ्यासक्रम किंवा सुविधांविषयी प्रश्न आहेत का? पालक आणि विद्यार्थ्यांच्या मदतीसाठी आम्ही सदैव तत्पर आहोत.",
            contact_form_title: "आम्हाला संदेश पाठवा",
            contact_form_sub: "खालील फॉर्म भरा, आमचे शाळा कार्यालय आपल्याशी लवकरच संपर्क साधेल.",
            contact_label_name: "पूर्ण नाव",
            contact_label_phone: "फोन नंबर",
            contact_label_email: "ईमेल पत्ता",
            contact_label_subject: "चौकशीचा प्रकार",
            contact_opt_admission: "नवीन प्रवेश चौकशी",
            contact_opt_academic: "शैक्षणिक व अभ्यासक्रम",
            contact_opt_facility: "परिसर व सुविधा",
            contact_opt_general: "सामान्य चौकशी",
            contact_label_message: "आपला संदेश / प्रश्न",
            contact_btn_send: "संदेश पाठवा",
            contact_info_title: "शाळा कार्यालय तपशील",
            contact_info_address_title: "शाळेचा पत्ता",
            contact_info_address: "जिल्हा परिषद उच्च प्राथमिक शाळा, मु. पो. येरला, ता. कळमेश्वर, जि. नागपूर, महाराष्ट्र ४४१५०१",
            contact_info_hours_title: "शाळा व कार्यालयीन वेळ",
            contact_info_hours: "सोमवार - शनिवार: सकाळी १०:३० ते संध्याकाळी ५:०० (रविवार सुट्टी)",
            contact_info_phone_title: "मुख्याध्यापक व थेट फोन नंबर",
            contact_info_phone: "+९१ ९०९६१ ०८६०२",
            contact_faq_title: "नेहमी विचारले जाणारे प्रश्न (FAQ)",
            contact_faq1_q: "नवीन विद्यार्थ्यांसाठी प्रवेश प्रक्रिया काय आहे?",
            contact_faq1_a: "प्रवेश प्रक्रिया अत्यंत सोपी व विनामूल्य आहे. पालकांनी विद्यार्थ्याचा जन्म दाखला व मागील शाळेचा दाखला घेऊन कार्यालयात यावे.",
            contact_faq2_q: "डिजिटल स्मार्ट टीव्ही वर्ग सर्व इयत्तांसाठी आहेत का?",
            contact_faq2_a: "होय, इयत्ता १ ली ते ७ वीतील सर्व ६७ विद्यार्थ्यांना डिजिटल स्मार्ट टीव्ही आणि ऑडिओ-व्हिज्युअल शैक्षणिक तंत्रज्ञानाचा लाभ मिळतो.",
            contact_faq3_q: "परिसरात विद्यार्थ्यांच्या सुरक्षिततेची कशी काळजी घेतली जाते?",
            contact_faq3_a: "शाळेच्या मुख्य प्रवेशद्वारावर आणि संपूर्ण परिसरात २४/७ सीसीटीव्ही कॅमेरे आणि शिक्षकांची देखरेख असते.",

            // Gallery Page (Marathi)
            gallery_hero_badge: "शालेय आठवणी व परिसर",
            gallery_hero_title: "शाळा फोटो व उपक्रम गॅलरी",
            gallery_hero_sub: "स्मार्ट वर्गखोल्या, खेळाचे मैदान, पर्यावरणपूरक परिसर आणि विद्यार्थ्यांच्या आनंदी क्षणांची छायाचित्रे.",
            gallery_filter_all: "सर्व फोटो",
            gallery_filter_campus: "परिसर व प्रवेशद्वार",
            gallery_filter_classrooms: "स्मार्ट वर्गखोल्या",
            gallery_filter_sports: "क्रीडा व मैदान",
            gallery_filter_infra: "पायाभूत सुविधा व रस्ते",
            gallery_caption1: "शाळेचे मुख्य प्रवेशद्वार",
            gallery_caption2: "शाळा परिसर कमान",
            gallery_caption3: "आनंदी व सुसंस्कृत विद्यार्थी",
            gallery_caption4: "हवेशीर व सुंदर वर्गखोली",
            gallery_caption5: "पारंपरिक फळा व अध्यापन",
            gallery_caption6: "निसर्गाच्या सानिध्यातील खुली शाळा",
            gallery_caption7: "इंटरॅक्टिव्ह स्मार्ट डिजिटल टीव्ही",
            gallery_caption8: "२४/७ सीसीटीव्ही सुरक्षा कॅमेरा",
            gallery_caption9: "शुद्ध पिण्याच्या पाण्याची टाकी",
            gallery_caption10: "हिरवेगार खेळाचे मैदान",
            gallery_caption11: "क्रीडा व व्यायाम मैदान",
            gallery_caption12: "शाळा प्रशासकीय कार्यालय",
            gallery_caption13: "गावातील पक्का डांबरी रस्ता",
            gallery_caption14: "शाळेकडे जाणारा प्रशस्त रस्ता"
        },
        hi: {
            top_govt: "महाराष्ट्र सरकार - जिला परिषद शिक्षा विभाग",
            select_lang: "भाषा चुनें:",
            school_name: "जि. प. उच्च प्राथमिक विद्यालय",
            school_location_tag: "येरला, महाराष्ट्र",
            nav_home: "मुख्य पृष्ठ",
            nav_about: "हमारे बारे में",
            nav_facilities: "सुविधाएं",
            nav_contact: "संपर्क करें",
            nav_gallery: "गैलरी",
            hero_badge1: "विद्यालय में आपका स्वागत है",
            hero_title1: "जिला परिषद उच्च प्राथमिक विद्यालय, येरला",
            hero_sub1: "गुणवत्तापूर्ण शिक्षा के साथ येरला गांव में भविष्य के नेताओं का निर्माण।",
            hero_badge2: "छात्र उत्कृष्टता",
            hero_title2: "समावेशी और मूल्य आधारित शिक्षा",
            hero_sub2: "हर बच्चे में टीम वर्क, रचनात्मक सोच और नैतिक मूल्यों का विकास।",
            hero_badge3: "आधुनिक तकनीक",
            hero_title3: "डिजिटल और स्मार्ट टीवी कक्षाएं",
            hero_sub3: "इंटरैक्टिव टीवी शिक्षण सामग्री और आधुनिक डिजिटल उपकरणों से लैस कक्षाएं।",
            loc_tag: "स्कूल का पता",
            loc_title: "हम यहाँ हैं",
            loc_badge: "येरला, नागपुर",
            loc_desc: "येरला गांव के केंद्र में स्थित विद्यालय, जहाँ पहुँचने के लिए सुलभ रास्ते हैं।",
            map_pin_label: "जि. प. स्कूल, येरला",
            full_address: "जिला परिषद उच्च प्राथमिक विद्यालय, पोस्ट येरला, तहसील कलमेश्वर, जिला नागपुर, महाराष्ट्र 441501",
            map_btn: "गूगल मैप्स पर दिशा-निर्देश देखें",
            features_tag: "विद्यालय की विशेषताएं",
            features_title: "हमारी प्रमुख विशेषताएं",
            features_badge: "4 प्रमुख कार्ड",
            card1_title: "डिजिटल स्मार्ट टीवी क्लास",
            card1_desc: "स्मार्ट टीवी और वीडियो पाठों के माध्यम से सरल और प्रभावी ऑडियो-विजुअल शिक्षा।",
            card1_link: "डिजिटल शिक्षा",
            card2_title: "सीसीटीवी सुरक्षित परिसर",
            card2_desc: "बच्चों की सुरक्षा और मन की शांति के लिए 24/7 सीसीटीवी कैमरा निगरानी।",
            card2_link: "सुरक्षित परिसर",
            card3_title: "खेल और शारीरिक शिक्षा",
            card3_desc: "खेल-कूद, शारीरिक व्यायाम और बाहरी गतिविधियों के लिए विशाल मैदान।",
            card3_link: "खेल गतिविधियां",
            card4_title: "पर्यावरण के अनुकूल परिसर",
            card4_desc: "प्रकृति के बीच ताजी हवा में आनंददायक और पर्यावरण के अनुकूल शिक्षा।",
            card4_link: "पर्यावरण पहल",
            footer_school_title: "जिला परिषद उच्च प्राथमिक विद्यालय",
            footer_school_sub: "येरला, महाराष्ट्र",
            footer_about_text: "स्मार्ट डिजिटल कक्षाओं, सुरक्षित परिसर और खेल गतिविधियों के माध्यम से गुणवत्तापूर्ण प्राथमिक शिक्षा प्रदान करना।",
            footer_nav_heading: "त्वरित नेविगेशन",
            footer_contact_heading: "संपर्क विवरण",
            footer_address: "पोस्ट येरला, कलमेश्वर, नागपुर, महाराष्ट्र 441501",
            footer_hours: "सोम - शनि: सुबह 10:30 से शाम 5:00 तक",
            footer_phone: "+91 90961 08602 (के. आर. मोंडेकर)",
            copyright_text: "© जिला परिषद उच्च प्राथमिक विद्यालय येरला, महाराष्ट्र। सर्वाधिकार सुरक्षित।",
            copyright_sub: "महाराष्ट्र सरकार - जिला परिषद शिक्षा विभाग",

            // About Us Page Translations
            about_hero_tag: "हमारे स्कूल के बारे में",
            about_hero_title: "येरला में शिक्षा का सशक्तिकरण और उज्ज्वल भविष्य",
            about_hero_sub: "आधुनिक डिजिटल शिक्षा, नैतिक मूल्यों और खेल गतिविधियों के माध्यम से बच्चों के सर्वांगीण विकास के लिए समर्पित।",
            stat_students: "67 विद्यार्थी",
            stat_students_sub: "नामांकित",
            stat_standards: "कक्षा 1 से 7",
            stat_standards_sub: "कक्षाएं",
            stat_timings: "10:30 - 5:00",
            stat_timings_sub: "स्कूल का समय",
            stat_teachers: "अनुभवी शिक्षक",
            stat_digital: "स्मार्ट टीवी क्लास",
            stat_campus: "सुरक्षित परिसर",
            stat_campus_sub: "24/7 सुरक्षा",
            story_tag: "हमारी विरासत और यात्रा",
            story_title: "ग्रामीण प्रतिभा को निखारता हमारा विद्यालय",
            story_p1: "जिला परिषद उच्च प्राथमिक विद्यालय, येरला, तहसील कलमेश्वर, जिला नागपुर में स्थित है। कक्षा 1 से 7 तक के 67 विद्यार्थियों को गुणवत्तापूर्ण प्राथमिक शिक्षा प्रदान करने के उद्देश्य से विद्यालय समर्पित है।",
            story_p2: "वर्षों से, हमारा विद्यालय आधुनिक तकनीक के साथ आगे बढ़ा है। आज यहाँ स्मार्ट टीवी, 24/7 सीसीटीवी सुरक्षा, शुद्ध पेयजल और हरा-भरा खेल का मैदान उपलब्ध है।",
            vision_title: "हमारा दृष्टिकोण (Vision)",
            vision_desc: "प्रत्येक बच्चे की क्षमताओं को पहचानकर उसका शैक्षणिक और मानसिक विकास करना और उसे जिम्मेदार नागरिक बनाना।",
            mission_title: "हमारा मिशन (Mission)",
            mission_desc: "डिजिटल तकनीक, नैतिक मूल्यों, खेल और पर्यावरण संरक्षण के साथ बच्चों का समग्र विकास करना।",
            values_title: "मूलभूत मूल्य (Values)",
            values_desc: "उत्कृष्टता, अनुशासन, समावेशिता, पर्यावरण संरक्षण और जिज्ञासा हमारे मुख्य मूल्य हैं।",
            headmaster_tag: "विद्यालय नेतृत्व",
            headmaster_title: "प्रधानाध्यापक का संदेश",
            headmaster_quote: "“शिक्षा केवल पुस्तकों तक सीमित नहीं है, बल्कि बच्चों में जिज्ञासा, आत्मविश्वास और नैतिक मूल्यों का विकास करना है। हमारे स्कूल में हर बच्चे पर विशेष ध्यान दिया जाता है।”",
            headmaster_name: "के. आर. मोंडेकर",
            headmaster_role: "प्रधानाध्यापक, जि. प. उच्च प्राथमिक विद्यालय येरला",
            pillars_tag: "हमारी विशेषताएं",
            pillars_title: "उत्कृष्टता के चार मुख्य स्तंभ",
            pillar1_title: "डिजिटल स्मार्ट टीवी",
            pillar1_desc: "ऑडियो-विजुअल पाठों द्वारा कठिन विषयों को आसान और मजेदार बनाया जाता है।",
            pillar2_title: "सीसीटीवी सुरक्षा",
            pillar2_desc: "विद्यार्थियों की सुरक्षा के लिए 24/7 सीसीटीवी कैमरा निगरानी।",
            pillar3_title: "शुद्ध पीने का पानी",
            pillar3_desc: "छात्रों के स्वास्थ्य के लिए स्वच्छ और शुद्ध पीने के पानी की व्यवस्था।",
            pillar4_title: "हरा-भरा परिसर",
            pillar4_desc: "प्रकृति के बीच ताजी हवा में आनंददायक शिक्षा और विशाल खेल का मैदान।",

            // Facilities Page Translations (Hindi Concise)
            fac_hero_badge: "विद्यालय का इंफ्रास्ट्रक्चर",
            fac_hero_title: "सुरक्षित, आधुनिक एवं प्रेरणादायक परिसर",
            fac_hero_sub: "छात्रों की सुरक्षा, खेल और आधुनिक शिक्षा के लिए विद्यालय की प्रमुख सुविधाएं।",
            fac_badge_count: "6 प्रमुख सुविधाएं",
            
            fac_filter_all: "सभी सुविधाएं",
            fac_filter_safety: "सुरक्षा और मार्ग",
            fac_filter_digital: "डिजिटल शिक्षा",
            fac_filter_outdoor: "खेल और प्रकृति",
            fac_filter_health: "जल और स्वास्थ्य",
            
            fac1_badge: "सुरक्षा एवं निगरानी",
            fac1_title: "24/7 सीसीटीवी सुरक्षा",
            fac1_sub: "HD कैमरा निगरानी",
            fac1_desc: "मुख्य द्वार, कक्षाओं और परिसर में 24 घंटे एचडी सीसीटीवी कैमरों की निगरानी।",
            fac1_feat1: "HD 24/7 निगरानी",
            fac1_feat2: "संपूर्ण परिसर कवरेज",
            fac1_feat3: "छात्र सुरक्षा",

            fac2_badge: "परिवहन एवं मार्ग",
            fac2_title: "उत्तम परिवहन एवं पक्की सड़कें",
            fac2_sub: "सुरक्षित ऑल-वेदर रास्ता",
            fac2_desc: "येरला गांव को मुख्य मार्ग से जोड़ने वाली चौड़ी और पक्की डामर सड़कें।",
            fac2_feat1: "चौड़ी डामर सड़कें",
            fac2_feat2: "बस और साइकिल हेतु सुलभ",
            fac2_feat3: "सुरक्षित पैदल मार्ग",

            fac3_badge: "स्मार्ट शिक्षा",
            fac3_title: "कक्षाओं में डिजिटल टीवी",
            fac3_sub: "इंटरैक्टिव स्मार्ट AV मॉड्यूल",
            fac3_desc: "स्मार्ट टीवी और वीडियो पाठों के माध्यम से ऑडियो-विजुअल डिजिटल शिक्षा।",
            fac3_feat1: "इंटरैक्टिव स्मार्ट टीवी",
            fac3_feat2: "एनिमेटेड वीडियो पाठ",
            fac3_feat3: "आसान ई-लर्निंग शिक्षा",

            fac4_badge: "पर्यावरण के अनुकूल शिक्षा",
            fac4_title: "खुली हवा में प्राकृतिक कक्षाएं",
            fac4_sub: "पेड़ों की छांव में पढ़ाई",
            fac4_desc: "पेड़ों की छांव में ताजी हवा के साथ खुली कक्षाओं में आनंददायक पढ़ाई।",
            fac4_feat1: "ताजी हवा और छांव",
            fac4_feat2: "व्यावहारिक प्रकृति अध्ययन",
            fac4_feat3: "समूह चर्चा",

            fac5_badge: "खेल एवं स्वास्थ्य",
            fac5_title: "विशाल एवं भव्य खेल का मैदान",
            fac5_sub: "मैदानी खेलों हेतु बड़ा मैदान",
            fac5_desc: "खो-खो, कबड्डी, खेलों और दैनिक व्यायाम के लिए विशाल खेल का मैदान।",
            fac5_feat1: "विशाल खेल मैदान",
            fac5_feat2: "खो-खो और कबड्डी कोर्ट",
            fac5_feat3: "दैनिक पीटी एवं व्यायाम",

            fac6_badge: "स्वास्थ्य एवं स्वच्छता",
            fac6_title: "24 घंटे शुद्ध पानी आपूर्ति",
            fac6_sub: "स्वच्छ पेयजल और शौचालय",
            fac6_desc: "पानी की टंकी और शोधन प्रणाली द्वारा 24 घंटे स्वच्छ पेयजल और स्वच्छता।",
            fac6_feat1: "24/7 निरंतर जल आपूर्ति",
            fac6_feat2: "शुद्ध पानी की टंकी",
            fac6_feat3: "स्वच्छ शौचालय",

            fac_table_title: "सुविधाओं का अवलोकन",
            fac_table_sub: "जि. प. उच्च प्राथमिक विद्यालय येरला की मुख्य विशेषताएं",
            fac_table_col1: "सुविधा",
            fac_table_col2: "विवरण",
            fac_table_col3: "स्थिति",
            
            fac_btn_view: "विस्तृत विवरण",
            fac_modal_close: "खिड़की बंद करें",
            fac_cta_title: "हमारे विद्यालय परिसर में पधारें",
            fac_cta_sub: "जि. प. उच्च प्राथमिक विद्यालय येरला की सुविधाओं को देखने हेतु संपर्क करें।",
            fac_cta_btn1: "स्कूल कार्यालय से संपर्क करें",
            fac_cta_btn2: "गूगल मैप्स पर दिशा देखें",

            // Contact Us Page (Hindi)
            contact_hero_badge: "संपर्क करें",
            contact_hero_title: "जि. प. उच्च प्राथमिक विद्यालय येरला से संपर्क करें",
            contact_hero_sub: "प्रवेश, पाठ्यक्रम या सुविधाओं के संबंध में कोई भी प्रश्न हो, हम माता-पिता और छात्रों की सहायता के लिए सदैव उपलब्ध हैं।",
            contact_form_title: "हमें संदेश भेजें",
            contact_form_sub: "नीचे दिया गया फॉर्म भरें, विद्यालय कार्यालय शीघ्र ही आपसे संपर्क करेगा।",
            contact_label_name: "पूरा नाम",
            contact_label_phone: "फोन नंबर",
            contact_label_email: "ईमेल पता",
            contact_label_subject: "पूछताछ का प्रकार",
            contact_opt_admission: "नवीन प्रवेश पूछताछ",
            contact_opt_academic: "शैक्षणिक और पाठ्यक्रम",
            contact_opt_facility: "परिसर और सुविधाएं",
            contact_opt_general: "सामान्य पूछताछ",
            contact_label_message: "आपका संदेश / प्रश्न",
            contact_btn_send: "संदेश भेजें",
            contact_info_title: "विद्यालय कार्यालय विवरण",
            contact_info_address_title: "विद्यालय का पता",
            contact_info_address: "जिला परिषद उच्च प्राथमिक विद्यालय, मु. पो. येरला, ता. कलमेश्वर, जि. नागपुर, महाराष्ट्र 441501",
            contact_info_hours_title: "स्कूल एवं कार्यालय समय",
            contact_info_hours: "सोमवार - शनिवार: सुबह 10:30 से शाम 5:00 तक (रविवार अवकाश)",
            contact_info_phone_title: "प्रधानाध्यापक एवं सीधा फोन नंबर",
            contact_info_phone: "+91 90961 08602",
            contact_faq_title: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
            contact_faq1_q: "नए विद्यार्थियों के लिए प्रवेश प्रक्रिया क्या है?",
            contact_faq1_a: "प्रवेश प्रक्रिया अत्यंत सरल और निःशुल्क है। अभिभावक जन्म प्रमाण पत्र और पिछली कक्षा की टीसी के साथ कार्यालय में संपर्क करें।",
            contact_faq2_q: "क्या स्मार्ट डिजिटल कक्षाएं सभी कक्षाओं के लिए हैं?",
            contact_faq2_a: "हाँ, कक्षा 1 से 7 तक के सभी 67 छात्रों को डिजिटल स्मार्ट टीवी और ऑडियो-विजुअल शिक्षा का पूरा लाभ मिलता है।",
            contact_faq3_q: "परिसर में छात्र सुरक्षा की क्या व्यवस्था है?",
            contact_faq3_a: "मुख्य द्वार और पूरे परिसर में 24/7 सीसीटीवी कैमरे लगे हैं तथा शिक्षकों द्वारा निरंतर निगरानी रखी जाती है।",

            // Gallery Page (Hindi)
            gallery_hero_badge: "विद्यालय की स्मृतियां",
            gallery_hero_title: "फोटो और गतिविधि गैलरी",
            gallery_hero_sub: "स्मार्ट कक्षाओं, खेल के मैदान, प्राकृतिक परिसर और छात्र गतिविधियों की प्रमुख तस्वीरें।",
            gallery_filter_all: "सभी तस्वीरें",
            gallery_filter_campus: "परिसर और मुख्य द्वार",
            gallery_filter_classrooms: "स्मार्ट कक्षाएं",
            gallery_filter_sports: "खेल और मैदान",
            gallery_filter_infra: "बुनियादी ढांचा और मार्ग",
            gallery_caption1: "विद्यालय का मुख्य प्रवेश द्वार",
            gallery_caption2: "विद्यालय परिसर गेट",
            gallery_caption3: "उत्साही एवं अनुशासित छात्र",
            gallery_caption4: "हवादार एवं सुंदर कक्षा",
            gallery_caption5: "पारंपरिक श्यामपट्ट शिक्षण",
            gallery_caption6: "प्रकृति की छांव में खुली कक्षा",
            gallery_caption7: "इंटरैक्टिव स्मार्ट डिजिटल टीवी",
            gallery_caption8: "24/7 सीसीटीवी सुरक्षा कैमरा",
            gallery_caption9: "शुद्ध पेयजल भंडारण टैंक",
            gallery_caption10: "हरा-भरा विशाल खेल का मैदान",
            gallery_caption11: "खेलकूद एवं पीटी मैदान",
            gallery_caption12: "विद्यालय प्रशासनिक कार्यालय",
            gallery_caption13: "पक्की डामर सड़क",
            gallery_caption14: "हाईवे संपर्क मार्ग"
        }
    };

    function setLanguage(lang) {
        if (!translations[lang]) lang = 'en';
        localStorage.setItem('lang', lang);

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update button states
        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('bg-white', 'text-slate-900', 'shadow');
                btn.classList.remove('hover:bg-white/20', 'text-white');
            } else {
                btn.classList.remove('bg-white', 'text-slate-900', 'shadow');
                btn.classList.add('hover:bg-white/20', 'text-white');
            }
        });
    }

    // Initialize Language
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    // Language button click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // 2. LIGHT / DARK MODE TOGGLE LOGIC
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    function applyTheme(isDark) {
        if (isDark) {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
            if (sunIcon) sunIcon.classList.remove('hidden');
            if (moonIcon) moonIcon.classList.add('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.classList.remove('dark');
            htmlElement.classList.add('light');
            if (sunIcon) sunIcon.ariaHidden = "true";
            if (sunIcon) sunIcon.classList.add('hidden');
            if (moonIcon) moonIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.classList.contains('dark');
            applyTheme(!isDark);
        });
    }

    // 3. MOBILE NAVIGATION MENU TOGGLE
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 4. AUTOMATIC 3-IMAGE CAROUSEL SLIDER
    const slides = document.querySelectorAll('.carousel-slide');
    const carouselContainer = document.getElementById('carouselContainer');

    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        function showNextSlide() {
            slides.forEach((slide, idx) => {
                if (idx === currentSlide) {
                    slide.classList.remove('opacity-100', 'z-10');
                    slide.classList.add('opacity-0', 'z-0');
                }
            });

            currentSlide = (currentSlide + 1) % slides.length;

            slides.forEach((slide, idx) => {
                if (idx === currentSlide) {
                    slide.classList.remove('opacity-0', 'z-0');
                    slide.classList.add('opacity-100', 'z-10');
                }
            });
        }

        function startAutoPlay() {
            slideInterval = setInterval(showNextSlide, 3500);
        }

        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carouselContainer.addEventListener('mouseleave', startAutoPlay);
        }

        startAutoPlay();
    }

    // 5. FACILITIES CATEGORY FILTERING & MODAL POPUP LOGIC
    const facFilterBtns = document.querySelectorAll('.fac-filter-btn');
    const facCards = document.querySelectorAll('.facility-card');

    if (facFilterBtns.length > 0 && facCards.length > 0) {
        facFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-filter');

                // Update active state of filter buttons
                facFilterBtns.forEach(b => {
                    b.classList.remove('bg-orange-600', 'text-white', 'shadow-lg');
                    b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'hover:bg-orange-100', 'dark:hover:bg-slate-700');
                });

                btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'hover:bg-orange-100', 'dark:hover:bg-slate-700');
                btn.classList.add('bg-orange-600', 'text-white', 'shadow-lg');

                // Show/hide cards
                facCards.forEach(card => {
                    const cardCat = card.getAttribute('data-category');
                    if (category === 'all' || cardCat === category) {
                        card.style.display = 'flex';
                        card.classList.add('animate-fadeIn');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Facility Modal Handlers
    const facModal = document.getElementById('facilityModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalSub = document.getElementById('modalSub');
    const modalDesc = document.getElementById('modalDesc');
    const modalBadge = document.getElementById('modalBadge');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');

    const viewDetailBtns = document.querySelectorAll('.view-facility-modal');
    if (viewDetailBtns.length > 0 && facModal) {
        viewDetailBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const card = btn.closest('.facility-card');
                if (!card) return;

                const img = card.querySelector('img')?.src;
                const titleKey = card.querySelector('[data-i18n^="fac"][data-i18n$="_title"]')?.getAttribute('data-i18n');
                const subKey = card.querySelector('[data-i18n^="fac"][data-i18n$="_sub"]')?.getAttribute('data-i18n');
                const descKey = card.querySelector('[data-i18n^="fac"][data-i18n$="_desc"]')?.getAttribute('data-i18n');
                const badgeKey = card.querySelector('[data-i18n^="fac"][data-i18n$="_badge"]')?.getAttribute('data-i18n');

                const currentLang = localStorage.getItem('lang') || 'en';

                if (modalImage && img) modalImage.src = img;
                if (modalTitle && titleKey && translations[currentLang][titleKey]) modalTitle.textContent = translations[currentLang][titleKey];
                if (modalSub && subKey && translations[currentLang][subKey]) modalSub.textContent = translations[currentLang][subKey];
                if (modalDesc && descKey && translations[currentLang][descKey]) modalDesc.textContent = translations[currentLang][descKey];
                if (modalBadge && badgeKey && translations[currentLang][badgeKey]) modalBadge.textContent = translations[currentLang][badgeKey];

                facModal.classList.remove('hidden');
                facModal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeModal() {
            if (facModal) {
                facModal.classList.add('hidden');
                facModal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        }

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    }

    // 6. GALLERY CATEGORY FILTERING & LIGHTBOX MODAL LOGIC
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    if (galleryFilterBtns.length > 0 && galleryCards.length > 0) {
        galleryFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');

                // Active button styling
                galleryFilterBtns.forEach(b => {
                    b.classList.remove('bg-orange-600', 'text-white', 'shadow-lg');
                    b.classList.add('bg-white', 'dark:bg-slate-900', 'text-slate-700', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-800');
                });
                btn.classList.remove('bg-white', 'dark:bg-slate-900', 'text-slate-700', 'dark:text-slate-300', 'border', 'border-slate-200', 'dark:border-slate-800');
                btn.classList.add('bg-orange-600', 'text-white', 'shadow-lg');

                // Filter cards
                galleryCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filter === 'all' || cardCategory === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Gallery Lightbox Modal
    const galleryModal = document.getElementById('galleryModal');
    const galleryModalImg = document.getElementById('galleryModalImg');
    const galleryModalTitle = document.getElementById('galleryModalTitle');
    const galleryModalClose = document.getElementById('galleryModalClose');
    const galleryModalBackdrop = document.getElementById('galleryModalBackdrop');

    if (galleryModal) {
        document.querySelectorAll('.open-gallery-lightbox').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const card = trigger.closest('.gallery-card');
                if (!card) return;

                const img = card.querySelector('img');
                const titleEl = card.querySelector('[data-i18n^="gallery_caption"]');
                const currentLang = localStorage.getItem('lang') || 'en';

                if (galleryModalImg && img) {
                    galleryModalImg.src = img.src;
                    galleryModalImg.alt = img.alt || 'School Gallery Photo';
                }

                if (galleryModalTitle && titleEl) {
                    const i18nKey = titleEl.getAttribute('data-i18n');
                    galleryModalTitle.textContent = (translations[currentLang] && translations[currentLang][i18nKey]) 
                        ? translations[currentLang][i18nKey] 
                        : (titleEl.textContent || 'ZP Upper Primary School Yerla');
                }

                galleryModal.classList.remove('hidden');
                galleryModal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeGalleryModal() {
            galleryModal.classList.add('hidden');
            galleryModal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }

        if (galleryModalClose) galleryModalClose.addEventListener('click', closeGalleryModal);
        if (galleryModalBackdrop) galleryModalBackdrop.addEventListener('click', closeGalleryModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !galleryModal.classList.contains('hidden')) {
                closeGalleryModal();
            }
        });
    }

    // 7. CONTACT FORM SUBMISSION WITH FEEDBACK TOAST
    const contactForm = document.getElementById('contactForm');
    const formFeedbackToast = document.getElementById('formFeedbackToast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('contactName');
            const phoneInput = document.getElementById('contactPhone');
            const messageInput = document.getElementById('contactMessage');

            if (!nameInput.value.trim() || !phoneInput.value.trim() || !messageInput.value.trim()) {
                alert('Please fill in your name, phone number, and message.');
                return;
            }

            // Show success toast
            if (formFeedbackToast) {
                formFeedbackToast.classList.remove('hidden');
                formFeedbackToast.classList.add('flex', 'animate-fadeIn');
                setTimeout(() => {
                    formFeedbackToast.classList.add('hidden');
                    formFeedbackToast.classList.remove('flex');
                }, 5000);
            } else {
                alert('Thank you! Your message has been sent to the school office.');
            }

            contactForm.reset();
        });
    }
});

