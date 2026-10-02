/* ============================================================
   TANIA AYALA SCULPTING
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  hideExpiredPromos();
  initNavbar();
  initMobileMenu();
  initBeforeAfterSliders();
  initTreatmentVideos();
  initCarousel();
  initLanguage();
});

/* Seasonal offers remove themselves once their end date passes */
function hideExpiredPromos() {
  document.querySelectorAll('[data-expires]').forEach(el => {
    const end = new Date(el.getAttribute('data-expires'));
    if (!isNaN(end) && new Date() >= end) el.remove();
  });
}

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
const translations = {
  en: {
    /* ── Nav ── */
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.care':     'After Care',
    'nav.shop':     'Spa Shop',
    'nav.reviews':  'Reviews',
    'nav.contact':  'Contact',
    'nav.book':     'Book Now',

    /* ── Hero ── */
    'hero.eyebrow':   'Máster Body Sculptor',
    'hero.tagline':   'Wood Therapy · Metal Therapy · Drainage Massage · Brazilian Drainage<br>BBL Recovery · Anti‑Cellulite Massage · Face Sculpt · Body Detox · Post‑Operation',
    'hero.btn.book':  'Request an Appointment',
    'hero.btn.explore':'Explore Services',

    /* ── Brand strip ── */
    'brand.wood':      'Wood Body Sculpting',
    'brand.manual':    'Manual Sculpting',
    'brand.face':      'Face Sculpting',
    'brand.lymphatic': 'Brazilian & European Lymphatic Drainage',
    'brand.detox':     'Wood Therapy',
    'brand.anticell':  'Anti-Cellulite',
    'brand.bbl':       'BBL Recovery',

    /* ── October special ── */
    'promo.eyebrow':     'Limited-Time Offer · October Only',
    'promo.sub':         'Body Sculpting + Wood Therapy',
    'promo.per':         'per session',
    'promo.bonus.label': 'Bonus',
    'promo.bonus':       'Reductive enzyme included',
    'promo.f1':          'Personalized treatment',
    'promo.f2':          'Non-invasive',
    'promo.f3':          'Results from the first session',
    'promo.btn':         'Book the October Special',
    'promo.valid':       'Valid through October 31, 2026',

    /* ── Spotlight ── */
    'spot.lymph.label':  'Lymphatic<br>Drainage',
    'spot.lymph.sub':    'Flush toxins · reduce swelling',
    'spot.face.label':   'Face<br>Sculpting',
    'spot.face.sub':     'Lift · contour · rejuvenate',
    'spot.wood.label':   'Wood<br>Therapy',
    'spot.wood.sub':     'Sculpt · tone · detox',
    'spot.preop.label':  'Pre-Op<br>Preparation',
    'spot.preop.sub':    'Prepare your body for surgery',
    'spot.postop.label': 'Post-Op<br>Recovery',
    'spot.postop.sub':   'Heal faster · prevent fibrosis',

    /* ── About ── */
    'about.eyebrow': 'Meet Your Specialist',
    'about.h2':      'Get the Body You Want — Naturally, Without Surgery',
    'about.p1':      'With <strong>over 10 years of experience</strong>, <strong>Tania Ayala</strong> is a certified Máster Body Sculptor dedicated to helping you achieve the sexy, sculpted body you desire — <strong>100% naturally, without any procedures</strong>. Specializing in <strong>wood body sculpting</strong>, <strong>manual sculpting</strong>, <strong>face &amp; jawline sculpting</strong>, and <strong>Brazilian &amp; European lymphatic drainage</strong>, Tania has helped hundreds of clients transform their bodies and feel confident in their skin.',
    'about.p2':      'Wood therapy breaks down stubborn fat, eliminates cellulite, tightens skin, and defines your curves. Lymphatic drainage flushes toxins, reduces inflammation, and accelerates healing from the inside out. Whether you want to reshape your body, lift your face, define your jawline, or recover from a BBL, lipo, or tummy tuck — Tania\'s personalized protocols deliver <strong>real, visible results</strong> that last.',
    'about.stat1':   'Happy Clients',
    'about.stat2':   'Years Experience',
    'about.stat3':   'Natural Methods',
    'about.btn':     'Start Your Journey',

    /* ── Services heading ── */
    'svc.eyebrow': 'Our Treatments',
    'svc.h2':      'Lymphatic Drainage & Wood Sculpting',
    'svc.sub':     'Each technique is tailored to your body and goals. Watch real sessions and drag the slider on each photo to compare real before & after results.',

    /* ── Treatment 1 ── */
    't1.h3':  'Reductive Body Massage',
    't1.sub': 'Fat-Burning Slimming Treatment',
    't1.desc':'A powerful, targeted technique that penetrates deep into fatty tissue to break down stubborn deposits, flush toxins, and visibly slim your body. Tania applies firm, rhythmic pressure to activate fat-burning circulation, melt cellulite, and sculpt your waistline, thighs, and abdomen — with visible results from the very first session.',
    't1.b1':  'Breaks down stubborn fat deposits',
    't1.b2':  'Reduces cellulite & firms the skin',
    't1.b3':  'Slims & contours waist, thighs & abdomen',
    't1.b4':  'Activates circulation & lymphatic drainage',

    /* ── Treatment 2 ── */
    't2.h3':  'Wood Body Sculpting',
    't2.sub': 'Raqueta Corporal',
    't2.desc':'The flat wooden paddle applies firm, sweeping strokes across the waist, hips, and abdomen to break down stubborn fat deposits and sculpt an hourglass silhouette. This technique activates collagen production and tightens loose skin for a firmer, more defined shape.',
    't2.b1':  'Defines waist & sculpts hips',
    't2.b2':  'Breaks down deep fat deposits',
    't2.b3':  'Tightens and tones loose skin',
    't2.b4':  'Stimulates collagen production',

    /* ── Treatment 3 ── */
    't3.h3':  'Manual Belly Sculpting',
    't3.sub': 'Hand Sculpting Massage',
    't3.desc':'Tania\'s trained hands become the ultimate sculpting tool — kneading, lifting, and contouring every inch of your belly with a precision no machine can replicate. Manual belly sculpting breaks up stubborn fat, releases deep fascial tension stored in your gut, flattens your midsection, and redefines your waistline through intentional expert touch. You\'ll feel lighter after session one. You\'ll see the shape change after session three.',
    't3.b1':  'Sculpts & defines the waist by hand',
    't3.b2':  'Breaks up stubborn belly fat manually',
    't3.b3':  'Relieves gut bloating & digestive tension',
    't3.b4':  'Firms skin & tightens the core',

    /* ── Treatment 4 ── */
    't4.h3':  'Fibrosis Post-Operatoria',
    't4.sub': 'Manual Fibrosis Treatment',
    't4.desc':'A specialized hands-on treatment to break down and dissolve fibrosis — the hardened, irregular tissue that develops after liposuction, tummy tuck, BBL, or C-section. Tania uses precise manual pressure to soften lumps, smooth uneven skin, restore circulation, and reshape your contour after surgery. Visible results in as few as 6 sessions.',
    't4.b1':  'Breaks down post-surgical fibrosis & lumps',
    't4.b2':  'Smooths uneven skin after lipo or tummy tuck',
    't4.b3':  'Restores circulation & softness to hardened tissue',
    't4.b4':  '100% by hand — no machines, no needles',

    /* ── Treatment 5 ── */
    't5.h3':  'Levantamiento de Glúteos',
    't5.sub': 'Glute Lifting & Anti-Cellulite',
    't5.desc':'A powerful sculpting treatment targeting the glutes, thighs, and hips to lift, firm, and smooth. Tania combines deep tissue techniques with anti-cellulite work to reshape the posterior, reduce orange-peel texture, and define curves — leaving you visibly more lifted and contoured from the very first session.',
    't5.b1':  'Lifts & firms the glutes naturally',
    't5.b2':  'Reduces cellulite & smooths skin texture',
    't5.b3':  'Sculpts & defines the hips and thighs',
    't5.b4':  'Activates circulation for faster visible results',

    /* ── Treatment 6 ── */
    't6.h3':  'Post-Op Hand Massage',
    't6.sub': 'Hands-On Post-Surgical Recovery',
    't6.desc':'A specialized post-operative massage performed by Tania\'s expert hands — no machines, no devices. This targeted hands-on technique stimulates lymphatic drainage, breaks down early fibrosis, reduces swelling and fluid retention, and promotes faster healing after liposuction, tummy tuck, BBL, or any body contouring procedure. Visible improvement in just 1 session.',
    't6.b1':  'Reduces post-op swelling & fluid retention',
    't6.b2':  'Prevents & breaks down early fibrosis',
    't6.b3':  'Stimulates lymphatic drainage by hand',
    't6.b4':  '100% manual — no machines, no devices',

    /* ── Treatment 7 ── */
    't7.h3':  'Booty Lift Sculpt',
    't7.sub': 'Non-Surgical Glute Lift & Contouring',
    't7.desc':'A non-surgical booty lift that lifts, rounds, and sculpts the glutes in a single session. Tania combines hands-on sculpting massage with wood therapy — rollers, cups, and paddles — to break down stubborn fat and cellulite, then uses a skin-tightening device and lymphatic techniques to firm the skin and drain fluid. The result is a rounder, firmer, more lifted booty with smoother, tighter skin — no surgery, no needles, no downtime.',
    't7.b1':  'Lifts, rounds & shapes the glutes',
    't7.b2':  'Breaks down fat & cellulite on hips and thighs',
    't7.b3':  'Firms, tightens & smooths the skin',
    't7.b4':  'Non-surgical — no needles, no downtime',

    /* ── Treatment 8 ── */
    't8.h3':  'Face Sculpt & Rejuvenation',
    't8.sub': 'Advanced Facial Lifting',
    't8.desc':'Tania\'s expert hands manually lift, firm, and smooth the facial tissue — reducing wrinkles, sagging, and deep creasing without any injections or surgery. This non-invasive technique stimulates collagen, tightens the skin, and restores a youthful, lifted contour to the face and neck. Visible results from the very first session.',
    't8.b1':  'Reduces fine lines & deep wrinkles',
    't8.b2':  'Lifts sagging skin naturally',
    't8.b3':  'Stimulates collagen & skin elasticity',
    't8.b4':  'No needles, no surgery, no downtime',

    /* ── Treatment 9 ── */
    't9.h3':  'Jaw Line Sculpting',
    't9.sub': 'Chin & Jawline Contouring',
    't9.desc':'A precise manual technique targeting the jaw, chin, and neck to eliminate double chin, define the jawline, and restore a sharp, lifted profile. Tania sculpts with targeted pressure along the mandibular line to reduce excess tissue, firm the skin, and create a naturally defined contour — results visible from session one.',
    't9.b1':  'Eliminates double chin & jowls',
    't9.b2':  'Defines & sharpens the jawline',
    't9.b3':  'Lifts & firms the neck skin',
    't9.b4':  '100% manual — no surgery, no fillers',

    /* ── Care ── */
    'care.eyebrow': 'Maximize Your Results',
    'care.h2':      'After-Treatment Care',
    'care.sub':     'Follow these simple guidelines after each session to get the best results and help your body heal and sculpt faster.',
    'care1.h3':     'Drink Plenty of Water',
    'care1.p':      'Drink at least 8–10 glasses of water after every session. Hydration is essential for flushing the toxins and fat your body releases during treatment. Herbal teas and coconut water also count — avoid alcohol for 24 hours.',
    'care2.h3':     'Wear Your Faja or Waist Trainer',
    'care2.p':      'Put on your faja or waist trainer immediately after each session and wear it consistently — ideally 6–8 hours per day. Compression holds the tissue in its new shape, accelerates lymphatic flow, and dramatically improves your sculpting results.',
    'care3.h3':     'Stay Consistent',
    'care3.p':      'Results build session by session. Avoid heavy meals, excess sodium, and alcohol for the first 24 hours after treatment. Light walking or gentle movement helps stimulate lymphatic drainage. The more consistent you are, the more dramatic your transformation.',

    /* ── Pricing ── */
    'p1.name':  'Single Session',     'p1.note': 'per session',
    'p1.f1':    '60-minute treatment','p1.f2': '1 wood tool technique',
    'p1.f3':    'Body consultation included','p1.f4': 'Post-care guidance',
    'p2.badge': 'Most Popular',       'p2.name': 'Sculpting Package',
    'p2.note':  '5 sessions',
    'p2.f1':    '5 × 75-min treatments','p2.f2': 'Full tool combination',
    'p2.f3':    'Progress photo tracking','p2.f4': 'Faja fitting included',
    'p2.f5':    'Priority scheduling',
    'p3.name':  'VIP Package',        'p3.note': '10 sessions',
    'p3.f1':    '10 × 90-min treatments','p3.f2': 'Full tool combination',
    'p3.f3':    'Before &amp; after photos','p3.f4': 'Faja colombiana included',
    'p3.f5':    'Priority scheduling', 'p3.f6': 'Monthly progress report',

    /* ── Shop ── */
    'shop.eyebrow':     'Available at Our Spa',
    'shop.h2':          'Fajas & Body Shapers',
    'shop.sub':         'We carry a curated selection of authentic Colombian fajas and waist trainers in-spa — the perfect complement to your sculpting sessions for faster, longer-lasting results.',
    'shop.addphoto':    'Add Product Photo',
    'shop.buy':         'Buy Now',
    'shop.ask':         'Ask About It',
    'shop.badge.new':   'New',
    'shop.badge.hot':   'Best Seller',
    'shop.badge.sale15':'Save 15%',
    'shop.badge.sale10':'Save 10%',
    's1.cat':  'Colombian Faja',  's1.desc': 'Ideal for hourglass figures. Controls and shapes the back, abdomen, and waist. Great for daily & post-op wear.',
    's2.cat':  'Colombian Faja',  's2.desc': 'For curvy figures with full hips and glutes. High compression, full back coverage, wide padded adjustable straps.',
    's3.cat':  'Colombian Faja',  's3.desc': 'Strapless design for any outfit. Adjustable straps and bottom closure. Ideal for daily and post-surgery use.',
    's4.cat':  'Colombian Faja',  's4.desc': 'Comfortable and secure for daily & post-op use. The perfect complement after your surgery under any look.',
    's5.cat':  'Colombian Faja',  's5.desc': 'For daily, post-op, or postpartum use. Comfortable and secure under any outfit. Perfect after surgery.',
    's6.cat':  'Shapewear',       's6.desc': 'Great for daily use. Small boning in the waistband keeps the garment in place and prevents rolling.',
    's7.cat':  'Shapewear',       's7.desc': 'Ideal for shaping and slimming the waist and glutes. Medium compression for comfortable all-day wear.',
    's8.cat':  'Shapewear',       's8.desc': 'Hourglass-shaped shorts with front closure. High waist, medium compression. Ideal for curvy figures.',
    's9.cat':  'Waist Trainer',   's9.desc': 'High compression strapless cincher with 4-level hooks and diagonal back bones. Shapes abdomen and slims the figure.',
    's10.cat': 'Waist Trainer',   's10.desc': 'Made for workouts. Latex inside for faster results, durable hooks. Increases heat concentration with the same effort.',
    's11.cat': 'Waist Trainer',   's11.desc': 'Designed for a more defined, flattering silhouette. Achieves a spectacular hourglass figure.',
    'shop.cta.h3':  'Not sure which <em>faja is right</em> for you?',
    'shop.cta.p':   'Message us on WhatsApp — we\'ll recommend the perfect style and size for your body, goals, and treatment plan.',
    'shop.cta.btn': 'Chat with Us',

    /* ── Booking ── */
    'booking.eyebrow':    'Ready to Transform?',
    'booking.h2':         'Request Your Appointment',
    'booking.sub':        'Send us a message on WhatsApp and we will confirm your appointment date and time.',
    'booking.card.h3':    'Message Us to Book',
    'booking.card.p':     'Ready to begin your transformation? Send us a WhatsApp or text message with your name, preferred dates, and which treatment you\'re interested in. We respond to confirm your spot.',
    'booking.deposit':    'A <strong>$10 evaluation deposit</strong> is required to book your appointment. This $10 goes toward your first treatment — we will send you payment instructions when we confirm your booking.',
    'shop.shipping':      'All prices include shipping',
    'booking.wa.btn':     'Message on WhatsApp',
    'booking.contact.btn':'See Contact Info',

    /* ── Testimonials ── */
    'reviews.eyebrow': 'Client Love',
    'reviews.h2':      'What Our Clients Say',

    /* ── Contact ── */
    'contact.eyebrow':     'Find Us',
    'contact.h2':          'Contact & Location',
    'contact.addr.label':  'Address',
    'contact.phone.label': 'Phone & WhatsApp',
    'contact.email.label': 'Email',
    'contact.hours.label': 'Hours',
    'contact.hours.text':  'Mon – Fri: 9:00 AM – 6:00 PM<br>Saturday: Closed<br>Sunday: Closed',

    /* ── Footer ── */
    'footer.desc':     'Wood therapy, manual body sculpting, Brazilian lymphatic drainage, post-op fibrosis care, glute lift, face & jawline sculpting, and authentic Colombian fajas — Chula Vista, CA.',
    'footer.links':    'Quick Links',
    'footer.services': 'Our Services',
    'footer.copy':     '© 2026 Tania Ayala Body Sculpting. All rights reserved.',
    'footer.s1': 'Reductive Body Massage',
    'footer.s2': 'Wood Body Sculpting',
    'footer.s3': 'Brazilian Lymphatic Drainage',
    'footer.s4': 'Post-Op Fibrosis Care',
    'footer.s5': 'Glute Lift & Anti-Cellulite',
    'footer.s6': 'Face & Jaw Line Sculpting',

    /* ── Before / After ── */
    'ba.before': 'Before',
    'ba.after':  'After',
  },

  es: {
    /* ── Nav ── */
    'nav.about':    'Nosotros',
    'nav.services': 'Servicios',
    'nav.care':     'Cuidados',
    'nav.shop':     'Tienda',
    'nav.reviews':  'Reseñas',
    'nav.contact':  'Contacto',
    'nav.book':     'Reservar',

    /* ── Hero ── */
    'hero.eyebrow':    'Máster Body Sculptor',
    'hero.tagline':    'Terapia de Madera · Terapia de Metal · Masaje de Drenaje · Drenaje Brasileño<br>Recuperación BBL · Masaje Anticelulitis · Escultura Facial · Detox Corporal · Post‑Operatorio',
    'hero.btn.book':   'Solicitar Cita',
    'hero.btn.explore':'Ver Servicios',

    /* ── Brand strip ── */
    'brand.wood':      'Escultura Corporal con Madera',
    'brand.manual':    'Escultura Manual',
    'brand.face':      'Escultura Facial',
    'brand.lymphatic': 'Drenaje Linfático Brasileño y Europeo',
    'brand.detox':     'Terapia de Madera',
    'brand.anticell':  'Anticelulitis',
    'brand.bbl':       'Recuperación BBL',

    /* ── October special ── */
    'promo.eyebrow':     'Oferta Limitada · Solo en Octubre',
    'promo.sub':         'Bodysculpting + Maderoterapia',
    'promo.per':         'por sesión',
    'promo.bonus.label': 'Bonus',
    'promo.bonus':       'Enzima reductiva incluida',
    'promo.f1':          'Tratamiento personalizado',
    'promo.f2':          'No invasivo',
    'promo.f3':          'Resultados desde la primera sesión',
    'promo.btn':         'Reservar la Oferta de Octubre',
    'promo.valid':       'Válido hasta el 31 de octubre de 2026',

    /* ── Spotlight ── */
    'spot.lymph.label':  'Drenaje<br>Linfático',
    'spot.lymph.sub':    'Elimina toxinas · reduce inflamación',
    'spot.face.label':   'Escultura<br>Facial',
    'spot.face.sub':     'Levanta · contornea · rejuvenece',
    'spot.wood.label':   'Terapia<br>de Madera',
    'spot.wood.sub':     'Esculpe · tonifica · desintoxica',
    'spot.preop.label':  'Preparación<br>Pre-Op',
    'spot.preop.sub':    'Prepara tu cuerpo para la cirugía',
    'spot.postop.label': 'Recuperación<br>Post-Op',
    'spot.postop.sub':   'Sana más rápido · previene fibrosis',

    /* ── About ── */
    'about.eyebrow': 'Conoce a Tu Especialista',
    'about.h2':      'Consigue el Cuerpo que Deseas — Natural, Sin Cirugía',
    'about.p1':      'Con <strong>más de 10 años de experiencia</strong>, <strong>Tania Ayala</strong> es una Máster Body Sculptor certificada dedicada a ayudarte a conseguir el cuerpo sexy y esculpido que deseas — <strong>100% natural, sin ningún procedimiento</strong>. Especializada en <strong>escultura corporal con madera</strong>, <strong>escultura manual</strong>, <strong>escultura facial y de mandíbula</strong> y <strong>drenaje linfático brasileño y europeo</strong>, Tania ha ayudado a cientos de clientes a transformar su cuerpo y sentirse seguras en su piel.',
    'about.p2':      'La terapia de madera elimina la grasa resistente, reduce la celulitis, tensa la piel y define tus curvas. El drenaje linfático elimina toxinas, reduce la inflamación y acelera la recuperación desde adentro. Ya sea que quieras remodelar tu cuerpo, levantar tu rostro, definir tu mandíbula o recuperarte de un BBL, lipo o abdominoplastia — los protocolos personalizados de Tania brindan <strong>resultados reales y visibles</strong> que perduran.',
    'about.stat1':   'Clientes Satisfechas',
    'about.stat2':   'Años de Experiencia',
    'about.stat3':   'Métodos Naturales',
    'about.btn':     'Comienza Tu Proceso',

    /* ── Services heading ── */
    'svc.eyebrow': 'Nuestros Tratamientos',
    'svc.h2':      'Linfático y Escultura con Madera',
    'svc.sub':     'Cada técnica se adapta a tu cuerpo y tus metas. Mira sesiones reales y desliza el control en cada foto para comparar resultados reales de antes y después.',

    /* ── Treatment 1 ── */
    't1.h3':  'Masaje Reductivo Corporal',
    't1.sub': 'Tratamiento Anticelulitis y Reductor',
    't1.desc':'Una técnica potente y dirigida que penetra en el tejido adiposo para desintegrar depósitos rebeldes, eliminar toxinas y estilizar tu cuerpo visiblemente. Tania aplica una presión firme y rítmica para activar la circulación quema-grasas, disolver la celulitis y esculpir tu cintura, muslos y abdomen — con resultados visibles desde la primera sesión.',
    't1.b1':  'Desintegra depósitos de grasa rebelde',
    't1.b2':  'Reduce la celulitis & firma la piel',
    't1.b3':  'Adelgaza & contornea cintura, muslos & abdomen',
    't1.b4':  'Activa la circulación y el drenaje linfático',

    /* ── Treatment 2 ── */
    't2.h3':  'Escultura Corporal con Madera',
    't2.sub': 'Raqueta Corporal',
    't2.desc':'La pala de madera plana aplica golpes firmes y amplios en la cintura, caderas y abdomen para desintegrar depósitos de grasa resistente y esculpir una silueta de reloj de arena. Esta técnica activa la producción de colágeno y tensa la piel flácida para una figura más firme y definida.',
    't2.b1':  'Define la cintura y esculpe las caderas',
    't2.b2':  'Desintegra depósitos de grasa profunda',
    't2.b3':  'Tensa y tonifica la piel flácida',
    't2.b4':  'Estimula la producción de colágeno',

    /* ── Treatment 3 ── */
    't3.h3':  'Escultura Abdominal Manual',
    't3.sub': 'Masaje Escultor a Mano',
    't3.desc':'Las manos entrenadas de Tania se convierten en la herramienta de escultura definitiva — amasando, levantando y contorneando cada centímetro de tu vientre con una precisión que ninguna máquina puede igualar. La escultura manual abdominal desintegra la grasa rebelde, libera la tensión profunda de la fascia acumulada en tu intestino, aplana el abdomen y redefine tu cintura con un toque experto e intencional. Lo sentirás desde la primera sesión. Lo verás desde la tercera.',
    't3.b1':  'Esculpe y define la cintura a mano',
    't3.b2':  'Desintegra la grasa abdominal manualmente',
    't3.b3':  'Alivia la hinchazón y la tensión digestiva',
    't3.b4':  'Firma la piel y tonifica el core',

    /* ── Treatment 4 ── */
    't4.h3':  'Fibrosis Post-Operatoria',
    't4.sub': 'Tratamiento Manual de Fibrosis',
    't4.desc':'Un tratamiento especializado a mano para desintegrar y disolver la fibrosis — el tejido endurecido e irregular que se desarrolla después de liposucción, abdominoplastia, BBL o cesárea. Tania usa presión manual precisa para suavizar nódulos, alisar la piel irregular, restaurar la circulación y redefinir tu contorno post-cirugía. Resultados visibles en tan solo 6 sesiones.',
    't4.b1':  'Desintegra la fibrosis post-quirúrgica y nódulos',
    't4.b2':  'Alisa la piel irregular post-lipo o abdominoplastia',
    't4.b3':  'Restaura la circulación y suavidad del tejido endurecido',
    't4.b4':  '100% a mano — sin máquinas, sin agujas',

    /* ── Treatment 5 ── */
    't5.h3':  'Levantamiento de Glúteos',
    't5.sub': 'Lifting y Anticelulítico',
    't5.desc':'Un poderoso tratamiento escultor que trabaja los glúteos, muslos y caderas para levantar, firmar y suavizar. Tania combina técnicas de tejido profundo con trabajo anticelulítico para remodelar la zona posterior, reducir la textura de piel de naranja y definir las curvas — resultados visibles desde la primera sesión.',
    't5.b1':  'Levanta y firma los glúteos de forma natural',
    't5.b2':  'Reduce la celulitis y suaviza la textura de la piel',
    't5.b3':  'Esculpe y define las caderas y muslos',
    't5.b4':  'Activa la circulación para resultados visibles más rápidos',

    /* ── Treatment 6 ── */
    't6.h3':  'Masaje Post-Op a Mano',
    't6.sub': 'Recuperación Post-Quirúrgica Manual',
    't6.desc':'Un masaje post-operatorio especializado realizado con las expertas manos de Tania — sin máquinas, sin dispositivos. Esta técnica a mano estimula el drenaje linfático, desintegra la fibrosis temprana, reduce la hinchazón y retención de líquidos, y promueve una cicatrización más rápida después de liposucción, abdominoplastia, BBL o cualquier procedimiento de contorno corporal. Mejora visible en solo 1 sesión.',
    't6.b1':  'Reduce hinchazón y retención de líquidos post-op',
    't6.b2':  'Previene y desintegra la fibrosis temprana',
    't6.b3':  'Estimula el drenaje linfático a mano',
    't6.b4':  '100% manual — sin máquinas, sin dispositivos',

    /* ── Treatment 7 ── */
    't7.h3':  'Booty Lift Sculpt',
    't7.sub': 'Levantamiento de Glúteos sin Cirugía',
    't7.desc':'Un levantamiento de glúteos sin cirugía que levanta, redondea y esculpe los glúteos en una sola sesión. Tania combina masaje escultor a mano con maderoterapia — rodillos, copas y paletas — para eliminar la grasa resistente y la celulitis, y luego usa un equipo reafirmante y técnicas linfáticas para tensar la piel y drenar líquidos. El resultado: glúteos más redondos, firmes y levantados, con una piel más lisa y tersa — sin cirugía, sin agujas y sin tiempo de recuperación.',
    't7.b1':  'Levanta, redondea y moldea los glúteos',
    't7.b2':  'Elimina grasa y celulitis en caderas y muslos',
    't7.b3':  'Reafirma, tensa y suaviza la piel',
    't7.b4':  'Sin cirugía — sin agujas, sin tiempo de recuperación',

    /* ── Treatment 8 ── */
    't8.h3':  'Escultura y Rejuvenecimiento Facial',
    't8.sub': 'Lifting Facial Avanzado',
    't8.desc':'Las expertas manos de Tania levantan, firman y suavizan el tejido facial de forma manual — reduciendo arrugas, flacidez y pliegues profundos sin inyecciones ni cirugía. Esta técnica no invasiva estimula el colágeno, tensa la piel y restaura un contorno juvenil y levantado en el rostro y el cuello. Resultados visibles desde la primera sesión.',
    't8.b1':  'Reduce las líneas finas y arrugas profundas',
    't8.b2':  'Levanta la piel flácida de forma natural',
    't8.b3':  'Estimula el colágeno y la elasticidad de la piel',
    't8.b4':  'Sin agujas, sin cirugía, sin tiempo de recuperación',

    /* ── Treatment 9 ── */
    't9.h3':  'Escultura de Mandíbula',
    't9.sub': 'Contorno de Barbilla y Mandíbula',
    't9.desc':'Una técnica manual precisa que trabaja la mandíbula, la barbilla y el cuello para eliminar la papada, definir la línea mandibular y restaurar un perfil marcado y levantado. Tania esculpe con presión dirigida a lo largo de la línea de la mandíbula para reducir el exceso de tejido, firmar la piel y crear un contorno naturalmente definido — resultados visibles desde la primera sesión.',
    't9.b1':  'Elimina la papada y la flacidez de la mandíbula',
    't9.b2':  'Define y afila la línea mandibular',
    't9.b3':  'Levanta y firma la piel del cuello',
    't9.b4':  '100% manual — sin cirugía, sin rellenos',

    /* ── Care ── */
    'care.eyebrow': 'Maximiza Tus Resultados',
    'care.h2':      'Cuidados Post-Tratamiento',
    'care.sub':     'Sigue estas sencillas pautas después de cada sesión para obtener los mejores resultados y ayudar a tu cuerpo a sanar y esculpirse más rápido.',
    'care1.h3':     'Bebe Suficiente Agua',
    'care1.p':      'Bebe al menos 8–10 vasos de agua después de cada sesión. La hidratación es esencial para eliminar las toxinas y la grasa que tu cuerpo libera durante el tratamiento. Los tés de hierbas y el agua de coco también cuentan — evita el alcohol por 24 horas.',
    'care2.h3':     'Usa Tu Faja o Cinturilla',
    'care2.p':      'Ponte tu faja o cinturilla inmediatamente después de cada sesión y úsala de manera consistente — idealmente 6–8 horas al día. La compresión mantiene el tejido en su nueva forma, acelera el flujo linfático y mejora dramáticamente tus resultados de escultura.',
    'care3.h3':     'Mantén la Constancia',
    'care3.p':      'Los resultados se acumulan sesión a sesión. Evita comidas pesadas, exceso de sodio y alcohol durante las primeras 24 horas después del tratamiento. Caminar suavemente ayuda a estimular el drenaje linfático. Cuanto más constante seas, más dramática será tu transformación.',

    /* ── Pricing ── */
    'p1.name':  'Sesión Individual',       'p1.note': 'por sesión',
    'p1.f1':    'Tratamiento de 60 minutos','p1.f2': '1 técnica de herramienta de madera',
    'p1.f3':    'Consulta corporal incluida','p1.f4': 'Orientación de cuidados posteriores',
    'p2.badge': 'Más Popular',             'p2.name': 'Paquete de Escultura',
    'p2.note':  '5 sesiones',
    'p2.f1':    '5 × 75 min de tratamientos','p2.f2': 'Combinación completa de herramientas',
    'p2.f3':    'Seguimiento fotográfico de progreso','p2.f4': 'Ajuste de faja incluido',
    'p2.f5':    'Programación prioritaria',
    'p3.name':  'Paquete VIP',             'p3.note': '10 sesiones',
    'p3.f1':    '10 × 90 min de tratamientos','p3.f2': 'Combinación completa de herramientas',
    'p3.f3':    'Fotos de antes y después', 'p3.f4': 'Faja colombiana incluida',
    'p3.f5':    'Programación prioritaria', 'p3.f6': 'Informe mensual de progreso',

    /* ── Shop ── */
    'shop.eyebrow':     'Disponible en Nuestro Spa',
    'shop.h2':          'Fajas y Moldeadores Corporales',
    'shop.sub':         'Ofrecemos una selección de fajas colombianas auténticas y cinturillas en nuestro spa — el complemento perfecto para tus sesiones de escultura con resultados más rápidos y duraderos.',
    'shop.addphoto':    'Agregar Foto del Producto',
    'shop.buy':         'Comprar Ahora',
    'shop.ask':         'Preguntar',
    'shop.badge.new':   'Nuevo',
    'shop.badge.hot':   'Más Vendido',
    'shop.badge.sale15':'Ahorra 15%',
    'shop.badge.sale10':'Ahorra 10%',
    's1.cat':  'Faja Colombiana',     's1.desc': 'Ideal para realzar la figura de reloj de arena, controla y moldea la espalda, abdomen y cintura. Uso diario y posquirúrgico.',
    's2.cat':  'Faja Colombiana',     's2.desc': 'Para mujeres con mucha cadera y glúteos voluptuosos. Alta compresión, espalda cubierta, tiras anchas y acolchadas ajustables.',
    's3.cat':  'Faja Colombiana',     's3.desc': 'Ideal para uso diario y posquirúrgico. Strapless para cualquier vestido, tiras ajustables y cierre en la parte inferior.',
    's4.cat':  'Faja Colombiana',     's4.desc': 'Ideal para uso diario y posquirúrgico. Cómoda, segura y diseñada para lucir bajo cualquier look. El complemento perfecto después de tu cirugía.',
    's5.cat':  'Faja Colombiana',     's5.desc': 'Para uso diario, posquirúrgico o posparto. Cómoda y segura bajo cualquier look. El complemento perfecto después de tu cirugía.',
    's6.cat':  'Moldeador',           's6.desc': 'Ideal para uso diario. Varillas en el elástico mantienen la prenda en su sitio y evita que se enrolle. Comodidad todo el día.',
    's7.cat':  'Moldeador',           's7.desc': 'Ideal para moldear y estilizar la cintura y glúteos. Compresión media para un uso cómodo todo el día.',
    's8.cat':  'Moldeador',           's8.desc': 'Short tipo reloj de arena con abrochadura frontal. Talle alto, compresión media. Ideal para mujeres con mucha cadera y glúteos voluptuosos.',
    's9.cat':  'Cinturilla',          's9.desc': 'Alta compresión, strapless, con ganchos de cuatro niveles y varillas traseras diagonales. Moldea el abdomen y estiliza la figura.',
    's10.cat': 'Cinturilla',          's10.desc': 'Ideal para el ejercicio. Con látex para resultados más rápidos, ganchos duraderos. Aumenta la concentración de calor con el mismo esfuerzo.',
    's11.cat': 'Cinturilla',          's11.desc': 'Diseñada para darte una silueta más definida y favorecedora. Te ayudará a lograr una figura de reloj de arena espectacular.',
    'shop.cta.h3':  '¿No sabes cuál <em>faja es la correcta</em> para ti?',
    'shop.cta.p':   'Escríbenos por WhatsApp — te recomendaremos el estilo y talla perfectos para tu cuerpo, metas y plan de tratamiento.',
    'shop.cta.btn': 'Chatea con Nosotros',

    /* ── Booking ── */
    'booking.eyebrow':    '¿Lista para Transformarte?',
    'booking.h2':         'Solicita Tu Cita',
    'booking.sub':        'Envíanos un mensaje por WhatsApp y te confirmaremos la fecha y hora de tu cita.',
    'booking.card.h3':    'Escríbenos para Reservar',
    'booking.card.p':     '¿Lista para comenzar tu transformación? Envíanos un WhatsApp o mensaje de texto con tu nombre, fechas preferidas y el tratamiento que te interesa. Respondemos para confirmar tu lugar.',
    'booking.deposit':    'Se requiere un <strong>depósito de evaluación de $10</strong> para reservar tu cita. Estos $10 se aplican a tu primer tratamiento — te enviaremos instrucciones de pago cuando confirmemos tu reserva.',
    'shop.shipping':      'Todos los precios incluyen envío',
    'booking.wa.btn':     'Escribir por WhatsApp',
    'booking.contact.btn':'Ver Información de Contacto',

    /* ── Testimonials ── */
    'reviews.eyebrow': 'Amor de Clientes',
    'reviews.h2':      'Lo Que Dicen Nuestras Clientes',

    /* ── Contact ── */
    'contact.eyebrow':     'Encuéntranos',
    'contact.h2':          'Contacto & Ubicación',
    'contact.addr.label':  'Dirección',
    'contact.phone.label': 'Teléfono y WhatsApp',
    'contact.email.label': 'Correo Electrónico',
    'contact.hours.label': 'Horario',
    'contact.hours.text':  'Lun – Vie: 9:00 AM – 6:00 PM<br>Sábado: Cerrado<br>Domingo: Cerrado',

    /* ── Footer ── */
    'footer.desc':     'Maderoterapia, escultura corporal manual, drenaje linfático brasileño, tratamiento de fibrosis post-operatoria, levantamiento de glúteos, escultura facial y de mandíbula, y fajas colombianas auténticas — Chula Vista, CA.',
    'footer.links':    'Enlaces Rápidos',
    'footer.services': 'Nuestros Servicios',
    'footer.copy':     '© 2026 Tania Ayala Body Sculpting. Todos los derechos reservados.',
    'footer.s1': 'Masaje Reductivo Corporal',
    'footer.s2': 'Escultura Corporal con Madera',
    'footer.s3': 'Drenaje Linfático Brasileño',
    'footer.s4': 'Tratamiento de Fibrosis Post-Op',
    'footer.s5': 'Levantamiento de Glúteos y Anticelulitis',
    'footer.s6': 'Escultura Facial y de Mandíbula',

    /* ── Before / After ── */
    'ba.before': 'Antes',
    'ba.after':  'Después',
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function initLanguage() {
  let saved = 'en';
  try { saved = localStorage.getItem('lang') === 'es' ? 'es' : 'en'; } catch (e) {}
  setLanguage(saved);
}

/* ============================================================
   AMBIENT MUSIC PLAYER
   ============================================================ */
function toggleMusic() {
  const audio  = document.getElementById('bgMusic');
  const btn    = document.getElementById('musicBtn');
  const play   = document.getElementById('musicIconPlay');
  const pause  = document.getElementById('musicIconPause');
  if (!audio) return;

  if (audio.paused) {
    audio.volume = 0.18;
    audio.play().then(() => {
      btn.classList.add('playing');
      play.style.display  = 'none';
      pause.style.display = 'block';
    }).catch(() => {
      // Browser blocked autoplay — show helpful tooltip
      btn.title = 'Please allow audio in your browser';
    });
  } else {
    audio.pause();
    btn.classList.remove('playing');
    play.style.display  = 'block';
    pause.style.display = 'none';
  }
}

/* ============================================================
   NAVBAR — add .scrolled class on scroll
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  function update() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   MOBILE HAMBURGER MENU
   ============================================================ */
function initMobileMenu() {
  const toggle  = document.getElementById('navToggle');
  const links   = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-label', 'Open menu');
    if (overlay) overlay.classList.remove('visible');
  }

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (overlay) overlay.classList.toggle('visible', open);
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Close on overlay click
  if (overlay) overlay.addEventListener('click', closeMenu);
}

/* ============================================================
   BEFORE / AFTER SLIDERS
   ============================================================ */
function initBeforeAfterSliders() {
  document.querySelectorAll('.ba-wrap').forEach(wrap => {
    const before = wrap.querySelector('.ba-before');
    const handle = wrap.querySelector('.ba-handle');
    if (!before || !handle) return;

    let pct = 50;
    let dragging = false;

    function render() {
      before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = `${pct}%`;
      wrap.setAttribute('aria-valuenow', Math.round(pct));
    }
    function setFromX(clientX) {
      const rect = wrap.getBoundingClientRect();
      pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
      render();
    }

    wrap.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragging = true;
      try { wrap.setPointerCapture(e.pointerId); } catch (err) {}
      setFromX(e.clientX);
    });
    wrap.addEventListener('pointermove', e => { if (dragging) setFromX(e.clientX); });
    const stop = () => { dragging = false; };
    wrap.addEventListener('pointerup', stop);
    wrap.addEventListener('pointercancel', stop);
    wrap.addEventListener('lostpointercapture', stop);
    wrap.addEventListener('dragstart', e => e.preventDefault());

    wrap.addEventListener('keydown', e => {
      const step = e.shiftKey ? 10 : 4;
      if (e.key === 'ArrowLeft')  pct = Math.max(2, pct - step);
      else if (e.key === 'ArrowRight') pct = Math.min(98, pct + step);
      else if (e.key === 'Home') pct = 2;
      else if (e.key === 'End')  pct = 98;
      else return;
      e.preventDefault();
      render();
    });

    render();
  });
}

/* ============================================================
   TREATMENT VIDEOS — play only while visible on screen
   ============================================================ */
function initTreatmentVideos() {
  const videos = document.querySelectorAll('.treatment-video');
  if (!videos.length) return;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  videos.forEach(v => { v.muted = true; v.playsInline = true; });

  if (reduceMotion) {
    videos.forEach(v => { v.controls = true; v.preload = 'metadata'; });
    return;
  }
  if (!('IntersectionObserver' in window)) {
    videos.forEach(v => { v.preload = 'auto'; v.play().catch(() => { v.controls = true; }); });
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target: v, isIntersecting }) => {
      if (isIntersecting) {
        if (v.preload !== 'auto') { v.preload = 'auto'; v.load(); }
        const p = v.play();
        if (p && p.catch) p.catch(() => { v.controls = true; });
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { rootMargin: '200px 0px', threshold: 0.15 });
  videos.forEach(v => io.observe(v));
}

/* ============================================================
   TESTIMONIALS CAROUSEL
   ============================================================ */
function initCarousel() {
  const track    = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('cDots');
  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');
  if (!track) return;

  const cards = track.querySelectorAll('.t-card');
  const total  = cards.length;
  let current  = 0;
  let autoplay;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'c-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.c-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function startAuto() {
    clearInterval(autoplay);
    autoplay = setInterval(() => goTo(current + 1), 5000);
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  // Touch swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) { goTo(delta > 0 ? current + 1 : current - 1); startAuto(); }
  });

  startAuto();
}
