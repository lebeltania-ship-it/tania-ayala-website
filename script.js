/* ============================================================
   TANIA AYALA SCULPTING
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initBeforeAfterSliders();
  initCarousel();
  initLanguage();
});

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
const translations = {
  en: {
    /* ── Nav ── */
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.care':     'After Care',
    'nav.pricing':  'Pricing',
    'nav.shop':     'Spa Shop',
    'nav.reviews':  'Reviews',
    'nav.contact':  'Contact',
    'nav.book':     'Book Now',

    /* ── Hero ── */
    'hero.eyebrow':   'Máster Body Sculptor',
    'hero.tagline':   'Wood Body Sculpting · Manual Sculpting · Face Sculpting · Turkey Neck<br>Brazilian &amp; European Lymphatic Drainage · BBL Recovery · Anti-Cellulite',
    'hero.btn.book':  'Request an Appointment',
    'hero.btn.explore':'Explore Services',

    /* ── Brand strip ── */
    'brand.wood':      'Wood Body Sculpting',
    'brand.manual':    'Manual Sculpting',
    'brand.face':      'Face Sculpting',
    'brand.lymphatic': 'Brazilian &amp; European Lymphatic Drainage',
    'brand.detox':     'Wood Therapy',
    'brand.anticell':  'Anti-Cellulite',
    'brand.bbl':       'BBL Recovery',
    'brand.preop':     'Pre &amp; Post-Op Care',
    'brand.tummy':     'Tummy Tuck Recovery',
    'brand.breast':    'Breast Surgery Aftercare',
    'brand.turkey':    'Turkey Neck Treatment',

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
    'about.p1':      'With <strong>over 10 years of experience</strong>, <strong>Tania Ayala</strong> is a certified Máster Body Sculptor dedicated to helping you achieve the sexy, sculpted body you desire — <strong>100% naturally, without any procedures</strong>. Specializing in <strong>wood body sculpting</strong>, <strong>manual sculpting</strong>, <strong>face &amp; turkey neck sculpting</strong>, and <strong>Brazilian &amp; European lymphatic drainage</strong>, Tania has helped hundreds of clients transform their bodies and feel confident in their skin.',
    'about.p2':      'Wood therapy breaks down stubborn fat, eliminates cellulite, tightens skin, and defines your curves. Lymphatic drainage flushes toxins, reduces inflammation, and accelerates healing from the inside out. Whether you want to reshape your body, slim your face, smooth your neck, or recover from a BBL or tummy tuck — Tania\'s personalized protocols deliver <strong>real, visible results</strong> that last.',
    'about.stat1':   'Happy Clients',
    'about.stat2':   'Years Experience',
    'about.stat3':   'Natural Methods',
    'about.btn':     'Start Your Journey',

    /* ── Services heading ── */
    'svc.eyebrow': 'Our Treatments',
    'svc.h2':      'Lymphatic Drainage & Wood Sculpting',
    'svc.sub':     'Each technique is tailored to your body and goals. Drag the slider on each photo to see real before &amp; after results.',

    /* ── Treatment 1 ── */
    't1.h3':  'Lymphatic Drainage Massage',
    't1.sub': 'Rodillo Linfático',
    't1.desc':'A gentle yet deeply effective technique using the cylindrical lymphatic roller along the legs, thighs, and abdomen. It stimulates the lymphatic system to flush toxins, reduce fluid retention, relieve post-surgery swelling, and visibly smooth cellulite — leaving skin lighter and refreshed.',
    't1.b1':  'Reduces inflammation &amp; fluid retention',
    't1.b2':  'Boosts lymph flow &amp; blood circulation',
    't1.b3':  'Smooths cellulite appearance',
    't1.b4':  'Ideal for post-surgery recovery',

    /* ── Treatment 2 ── */
    't2.h3':  'Wood Body Sculpting',
    't2.sub': 'Raqueta Corporal',
    't2.desc':'The flat wooden paddle applies firm, sweeping strokes across the waist, hips, and abdomen to break down stubborn fat deposits and sculpt an hourglass silhouette. This technique activates collagen production and tightens loose skin for a firmer, more defined shape.',
    't2.b1':  'Defines waist &amp; sculpts hips',
    't2.b2':  'Breaks down deep fat deposits',
    't2.b3':  'Tightens and tones loose skin',
    't2.b4':  'Stimulates collagen production',

    /* ── Treatment 3 ── */
    't3.h3':  'Wood Cupping Therapy',
    't3.sub': 'Ventosas de Madera',
    't3.desc':'Wooden vacuum cups create gentle negative pressure that lifts the skin and underlying tissue — drawing out toxins, breaking adhesions, and increasing oxygen-rich blood flow to the area. The result is firmer, more elastic skin with improved tone and reduced stretch marks.',
    't3.b1':  'Lifts and firms sagging skin',
    't3.b2':  'Breaks down scar tissue &amp; adhesions',
    't3.b3':  'Fades stretch marks over time',
    't3.b4':  'Detoxifying &amp; deeply restorative',

    /* ── Treatment 4 ── */
    't4.h3':  'Post-Surgery Contouring',
    't4.sub': 'Tabla Reductora',
    't4.desc':'The flat reducing board is essential for post-surgical recovery (BBL, liposuction, tummy tuck) and general body contouring. It redistributes fat evenly, flattens the abdomen, and treats fibrosis and lumps — accelerating healing and optimizing your surgical results.',
    't4.b1':  'Post-lipo, BBL &amp; tummy tuck recovery',
    't4.b2':  'Flattens abdomen &amp; treats fibrosis',
    't4.b3':  'Redistributes fat evenly',
    't4.b4':  'Speeds up healing &amp; reduces bruising',

    /* ── Treatment 5 ── */
    't5.h3':  'Deep Spot Sculpting',
    't5.sub': 'Hongo de Madera',
    't5.desc':'The mushroom-shaped wood tool delivers deep, targeted pressure on specific problem areas — flanks, inner thighs, back rolls, and arms. Perfect for precise spot contouring and breaking up deep fat pockets that resist diet and exercise alone.',
    't5.b1':  'Deep targeted pressure therapy',
    't5.b2':  'Sculpts flanks, back &amp; inner thighs',
    't5.b3':  'Breaks up stubborn fat pockets',
    't5.b4':  'Precise, customized contouring',

    /* ── Treatment 6 ── */
    't6.h3':  'Pre-Op Preparation Massage',
    't6.sub': 'Before Your Surgery',
    't6.desc':'A lymphatic preparation massage performed 1–2 weeks before your scheduled surgery. This gentle treatment activates your lymphatic system, reduces baseline inflammation, improves skin elasticity, and primes your body for a faster, smoother recovery. Many surgeons recommend it before tummy tucks, BBL, liposuction, and breast procedures.',
    't6.b1':  'Activates lymphatic flow before surgery',
    't6.b2':  'Reduces baseline inflammation',
    't6.b3':  'Improves skin elasticity &amp; healing capacity',
    't6.b4':  'Recommended 1–2 sessions pre-surgery',

    /* ── Treatment 7 ── */
    't7.h3':  'Tummy Tuck Aftercare',
    't7.sub': 'Abdominoplasty Recovery Massage',
    't7.desc':'A specialized post-abdominoplasty massage protocol to accelerate healing after your tummy tuck. We use ultra-gentle lymphatic drainage to reduce swelling, seroma risk, and bruising, followed by soft tissue work to prevent fibrosis, smooth lumps, and help your skin adhere beautifully to your new contour.',
    't7.b1':  'Reduces post-surgical swelling &amp; seroma',
    't7.b2':  'Prevents and treats fibrosis',
    't7.b3':  'Smooths skin to new abdominal contour',
    't7.b4':  'Safe from week 1 post-op (with surgeon approval)',

    /* ── Treatment 8 ── */
    't8.h3':  'Breast Surgery Recovery',
    't8.sub': 'Post-Op Breast Massage',
    't8.desc':'Gentle post-operative massage for breast augmentation, breast reduction, breast lift, and implant revision. This specialized technique reduces firmness around implants, prevents capsular contracture, drains excess fluid from the axillary lymph nodes, and restores natural movement and softness to the surrounding tissue.',
    't8.b1':  'Softens implants &amp; reduces firmness',
    't8.b2':  'Helps prevent capsular contracture',
    't8.b3':  'Drains axillary lymph nodes &amp; reduces swelling',
    't8.b4':  'Safe for augmentation, reduction &amp; lift recovery',

    /* ── Surgical banner ── */
    'surgical.eyebrow': 'Specialized Care',
    'surgical.h2':      'Pre-Op & Post-Op Massage',
    'surgical.p':       'Preparing for or recovering from plastic surgery? Our specialized massage protocols are designed to optimize your results, reduce swelling, prevent fibrosis, and help you heal faster — safely and gently.',

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
    'pricing.eyebrow': 'Transparent Pricing',
    'pricing.h2':      'Choose Your Package',
    'pricing.sub':     'All sessions include a personal consultation and a custom treatment plan.',
    'pricing.contact': 'Contact for Pricing',
    'pricing.btn':     'Book Now',
    'pricing.disc':    '* Prices available upon request.',
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
    'shop.ask':         'Ask About It',
    'shop.badge.new':   'New',
    'shop.badge.hot':   'Best Seller',
    'shop.badge.sale15':'Save 15%',
    'shop.badge.sale10':'Save 10%',
    's1.cat':  'Post-Surgery',  's1.desc': 'Specially designed for BBL &amp; lipo recovery. Maximum compression with open-bust design and adjustable straps. Available in-spa.',
    's2.cat':  'Daily Wear',    's2.desc': 'Full-body slimming shaper for everyday use. Flattens tummy, lifts glutes, and smooths love handles. Ask about sizing at your appointment.',
    's3.cat':  'Waist Trainer', 's3.desc': 'Latex waist trainer for maximum sweat and compression. Pair with your sculpting sessions for faster, more visible results.',
    's4.cat':  'Post-Surgery',  's4.desc': 'High-compression abdominal binder for post-liposuction recovery. Reduces swelling and prevents fibrosis. Available in-spa by appointment.',
    's5.cat':  'Body Shaper',   's5.desc': 'Full-body shaper with butt-lifting design. Seamless under clothing, perfect for daily use. Visit us to find your perfect fit.',
    's6.cat':  'Shapewear',     's6.desc': 'High-waisted compression shorts for thighs and glutes. Ideal for wearing during maderotherapy for enhanced sculpting results.',
    'shop.cta.h3':  'Not sure which <em>faja is right</em> for you?',
    'shop.cta.p':   'Message us on WhatsApp — we\'ll recommend the perfect style and size for your body, goals, and treatment plan.',
    'shop.cta.btn': 'Chat with Us',

    /* ── Booking ── */
    'booking.eyebrow':    'Ready to Transform?',
    'booking.h2':         'Request Your Appointment',
    'booking.sub':        'Send us a message and we will respond within <strong>24 hours</strong> to confirm your appointment date and time.',
    'booking.badge1':     'We Reply Within 24 Hours',
    'booking.badge2':     '24-Hour Appointment Reminder',
    'booking.badge3':     'Free Consultation Included',
    'booking.card.h3':    'Message Us to Book',
    'booking.card.p':     'Ready to begin your transformation? Send us a WhatsApp or text message with your name, preferred dates, and which treatment you\'re interested in. We respond within 24 hours to confirm your spot.',
    'booking.deposit':    '<strong>$10 Consultation Deposit Required</strong> — A small $10 deposit is collected to reserve your first appointment slot and consultation. This ensures your time is held just for you and goes toward your session balance. We\'ll send you payment instructions when we confirm your booking.',
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
    'footer.desc':     'Wood body sculpting, manual sculpting, face &amp; turkey neck sculpting, Brazilian &amp; European lymphatic drainage, BBL recovery, anti-cellulite wood therapy, and pre &amp; post-op care.',
    'footer.links':    'Quick Links',
    'footer.services': 'Our Services',
    'footer.copy':     '© 2026 Tania Ayala Body Sculpting. All rights reserved.',
    'footer.s1': 'Lymphatic Drainage Massage',
    'footer.s2': 'Wood Body Sculpting',
    'footer.s3': 'Wood Cupping Therapy',
    'footer.s4': 'Deep Spot Sculpting',
    'footer.s5': 'Pre-Op Preparation',
    'footer.s6': 'Tummy Tuck Aftercare',
    'footer.s7': 'Breast Surgery Recovery',

    /* ── Before / After ── */
    'ba.before': 'Before',
    'ba.after':  'After',
  },

  es: {
    /* ── Nav ── */
    'nav.about':    'Nosotros',
    'nav.services': 'Servicios',
    'nav.care':     'Cuidados',
    'nav.pricing':  'Precios',
    'nav.shop':     'Tienda',
    'nav.reviews':  'Reseñas',
    'nav.contact':  'Contacto',
    'nav.book':     'Reservar',

    /* ── Hero ── */
    'hero.eyebrow':    'Máster Body Sculptor',
    'hero.tagline':    'Escultura Corporal con Madera · Escultura Manual · Escultura Facial · Cuello de Pavo<br>Drenaje Linfático Brasileño y Europeo · Recuperación BBL · Anticelulitis',
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
    'brand.preop':     'Cuidados Pre y Post-Op',
    'brand.tummy':     'Recuperación de Abdominoplastia',
    'brand.breast':    'Cuidados Post-Cirugía de Senos',
    'brand.turkey':    'Tratamiento Cuello de Pavo',

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
    'about.p1':      'Con <strong>más de 10 años de experiencia</strong>, <strong>Tania Ayala</strong> es una Máster Body Sculptor certificada dedicada a ayudarte a conseguir el cuerpo sexy y esculpido que deseas — <strong>100% natural, sin ningún procedimiento</strong>. Especializada en <strong>escultura corporal con madera</strong>, <strong>escultura manual</strong>, <strong>escultura facial y cuello de pavo</strong> y <strong>drenaje linfático brasileño y europeo</strong>, Tania ha ayudado a cientos de clientes a transformar su cuerpo y sentirse seguros de su piel.',
    'about.p2':      'La terapia de madera elimina la grasa resistente, reduce la celulitis, tensa la piel y define tus curvas. El drenaje linfático elimina toxinas, reduce la inflamación y acelera la recuperación desde adentro. Ya sea que quieras remodelar tu cuerpo, adelgazar tu rostro, suavizar el cuello o recuperarte de un BBL o abdominoplastia — los protocolos personalizados de Tania brindan <strong>resultados reales y visibles</strong> que perduran.',
    'about.stat1':   'Clientes Satisfechas',
    'about.stat2':   'Años de Experiencia',
    'about.stat3':   'Métodos Naturales',
    'about.btn':     'Comienza Tu Proceso',

    /* ── Services heading ── */
    'svc.eyebrow': 'Nuestros Tratamientos',
    'svc.h2':      'Linfático y Escultura con Madera',
    'svc.sub':     'Cada técnica es adaptada a tu cuerpo y metas. Desliza el control en cada foto para ver resultados reales de antes y después.',

    /* ── Treatment 1 ── */
    't1.h3':  'Masaje de Drenaje Linfático',
    't1.sub': 'Rodillo Linfático',
    't1.desc':'Una técnica suave pero profundamente efectiva que usa el rodillo linfático cilíndrico a lo largo de las piernas, muslos y abdomen. Estimula el sistema linfático para eliminar toxinas, reducir la retención de líquidos, aliviar la inflamación post-cirugía y suavizar visiblemente la celulitis — dejando la piel más ligera y fresca.',
    't1.b1':  'Reduce inflamación y retención de líquidos',
    't1.b2':  'Activa el flujo linfático y la circulación',
    't1.b3':  'Suaviza la apariencia de la celulitis',
    't1.b4':  'Ideal para recuperación post-cirugía',

    /* ── Treatment 2 ── */
    't2.h3':  'Escultura Corporal con Madera',
    't2.sub': 'Raqueta Corporal',
    't2.desc':'La pala de madera plana aplica golpes firmes y amplios en la cintura, caderas y abdomen para desintegrar depósitos de grasa resistente y esculpir una silueta de reloj de arena. Esta técnica activa la producción de colágeno y tensa la piel flácida para una figura más firme y definida.',
    't2.b1':  'Define la cintura y esculpe las caderas',
    't2.b2':  'Desintegra depósitos de grasa profunda',
    't2.b3':  'Tensa y tonifica la piel flácida',
    't2.b4':  'Estimula la producción de colágeno',

    /* ── Treatment 3 ── */
    't3.h3':  'Terapia de Ventosas de Madera',
    't3.sub': 'Ventosas de Madera',
    't3.desc':'Las ventosas de madera crean una suave presión negativa que levanta la piel y el tejido subyacente — extrayendo toxinas, rompiendo adherencias y aumentando el flujo sanguíneo rico en oxígeno hacia la zona. El resultado es una piel más firme y elástica con mejor tono y estrías reducidas.',
    't3.b1':  'Levanta y firma la piel caída',
    't3.b2':  'Desintegra tejido cicatricial y adherencias',
    't3.b3':  'Reduce las estrías con el tiempo',
    't3.b4':  'Desintoxicante y profundamente restaurador',

    /* ── Treatment 4 ── */
    't4.h3':  'Contorno Post-Cirugía',
    't4.sub': 'Tabla Reductora',
    't4.desc':'La tabla reductora plana es esencial para la recuperación post-quirúrgica (BBL, liposucción, abdominoplastia) y el contorno corporal general. Redistribuye la grasa de manera uniforme, aplana el abdomen y trata la fibrosis y los nódulos — acelerando la sanación y optimizando tus resultados quirúrgicos.',
    't4.b1':  'Recuperación post-lipo, BBL y abdominoplastia',
    't4.b2':  'Aplana el abdomen y trata la fibrosis',
    't4.b3':  'Redistribuye la grasa de manera uniforme',
    't4.b4':  'Acelera la sanación y reduce moretones',

    /* ── Treatment 5 ── */
    't5.h3':  'Escultura Puntual Profunda',
    't5.sub': 'Hongo de Madera',
    't5.desc':'El hongo de madera aplica presión profunda y dirigida en áreas problemáticas específicas — costados, muslos internos, rollitos de la espalda y brazos. Perfecto para el contorno puntual y para desintegrar bolsas de grasa profunda que resisten la dieta y el ejercicio.',
    't5.b1':  'Terapia de presión profunda y dirigida',
    't5.b2':  'Esculpe costados, espalda y muslos internos',
    't5.b3':  'Desintegra bolsas de grasa resistentes',
    't5.b4':  'Contorno preciso y personalizado',

    /* ── Treatment 6 ── */
    't6.h3':  'Masaje de Preparación Pre-Op',
    't6.sub': 'Antes de Tu Cirugía',
    't6.desc':'Un masaje de preparación linfática realizado 1–2 semanas antes de tu cirugía programada. Este suave tratamiento activa tu sistema linfático, reduce la inflamación basal, mejora la elasticidad de la piel y prepara tu cuerpo para una recuperación más rápida y suave. Muchos cirujanos lo recomiendan antes de abdominoplastias, BBL, liposucción y procedimientos de senos.',
    't6.b1':  'Activa el flujo linfático antes de la cirugía',
    't6.b2':  'Reduce la inflamación basal',
    't6.b3':  'Mejora la elasticidad de la piel y capacidad de sanación',
    't6.b4':  'Recomendado 1–2 sesiones pre-cirugía',

    /* ── Treatment 7 ── */
    't7.h3':  'Cuidados Post-Abdominoplastia',
    't7.sub': 'Masaje de Recuperación de Abdominoplastia',
    't7.desc':'Un protocolo especializado de masaje post-abdominoplastia para acelerar la sanación después de tu cirugía. Usamos drenaje linfático ultra-suave para reducir la inflamación, el riesgo de seroma y los moretones, seguido de trabajo de tejido blando para prevenir la fibrosis, suavizar nódulos y ayudar a que tu piel se adapte perfectamente a tu nuevo contorno.',
    't7.b1':  'Reduce la inflamación post-quirúrgica y seroma',
    't7.b2':  'Previene y trata la fibrosis',
    't7.b3':  'Adapta la piel al nuevo contorno abdominal',
    't7.b4':  'Seguro desde la semana 1 post-op (con aprobación del cirujano)',

    /* ── Treatment 8 ── */
    't8.h3':  'Recuperación Post-Cirugía de Senos',
    't8.sub': 'Masaje Post-Op de Senos',
    't8.desc':'Masaje post-operatorio suave para aumento de senos, reducción de senos, levantamiento de senos y revisión de implantes. Esta técnica especializada reduce la firmeza alrededor de los implantes, previene la contractura capsular, drena el exceso de líquido de los ganglios linfáticos axilares y restaura el movimiento natural y la suavidad del tejido circundante.',
    't8.b1':  'Suaviza los implantes y reduce la firmeza',
    't8.b2':  'Ayuda a prevenir la contractura capsular',
    't8.b3':  'Drena ganglios axilares y reduce la inflamación',
    't8.b4':  'Seguro para recuperación de aumento, reducción y levantamiento',

    /* ── Surgical banner ── */
    'surgical.eyebrow': 'Cuidado Especializado',
    'surgical.h2':      'Masaje Pre-Op y Post-Op',
    'surgical.p':       '¿Te estás preparando o recuperando de una cirugía plástica? Nuestros protocolos especializados están diseñados para optimizar tus resultados, reducir la inflamación, prevenir la fibrosis y ayudarte a sanar más rápido — de forma segura y suave.',

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
    'pricing.contact': 'Consultar Precio',
    'pricing.eyebrow': 'Precios Transparentes',
    'pricing.h2':      'Elige Tu Paquete',
    'pricing.sub':     'Todas las sesiones incluyen una consulta personal y un plan de tratamiento personalizado.',
    'pricing.btn':     'Reservar Ahora',
    'pricing.disc':    '* Precios disponibles bajo consulta.',
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
    'shop.ask':         'Preguntar',
    'shop.badge.new':   'Nuevo',
    'shop.badge.hot':   'Más Vendido',
    'shop.badge.sale15':'Ahorra 15%',
    'shop.badge.sale10':'Ahorra 10%',
    's1.cat':  'Post-Cirugía',       's1.desc': 'Diseñada especialmente para recuperación de BBL y lipo. Compresión máxima con diseño de busto abierto y tirantes ajustables. Disponible en el spa.',
    's2.cat':  'Uso Diario',         's2.desc': 'Moldeador de cuerpo completo para uso diario. Aplana el abdomen, levanta los glúteos y suaviza los costados. Consulta sobre tallas en tu cita.',
    's3.cat':  'Cinturilla',         's3.desc': 'Cinturilla de látex para máxima sudoración y compresión. Combínala con tus sesiones de escultura para resultados más rápidos y visibles.',
    's4.cat':  'Post-Cirugía',       's4.desc': 'Faja abdominal de alta compresión para recuperación post-liposucción. Reduce la inflamación y previene la fibrosis. Disponible en el spa con cita.',
    's5.cat':  'Moldeador Corporal', 's5.desc': 'Moldeador de cuerpo completo con diseño levanta cola. Sin costuras bajo la ropa, perfecto para uso diario. Visítanos para encontrar tu talla perfecta.',
    's6.cat':  'Ropa Moldeadora',    's6.desc': 'Shorts de compresión de cintura alta para muslos y glúteos. Ideales para usar durante la maderoterapia para mejores resultados de escultura.',
    'shop.cta.h3':  '¿No sabes cuál <em>faja es la correcta</em> para ti?',
    'shop.cta.p':   'Escríbenos por WhatsApp — te recomendaremos el estilo y talla perfectos para tu cuerpo, metas y plan de tratamiento.',
    'shop.cta.btn': 'Chatea con Nosotros',

    /* ── Booking ── */
    'booking.eyebrow':    '¿Lista para Transformarte?',
    'booking.h2':         'Solicita Tu Cita',
    'booking.sub':        'Envíanos un mensaje y responderemos en <strong>24 horas</strong> para confirmar la fecha y hora de tu cita.',
    'booking.badge1':     'Respondemos en 24 Horas',
    'booking.badge2':     'Recordatorio de Cita 24 Horas Antes',
    'booking.badge3':     'Consulta Gratuita Incluida',
    'booking.card.h3':    'Escríbenos para Reservar',
    'booking.card.p':     '¿Lista para comenzar tu transformación? Envíanos un WhatsApp o mensaje de texto con tu nombre, fechas preferidas y el tratamiento que te interesa. Respondemos en 24 horas para confirmar tu lugar.',
    'booking.deposit':    '<strong>Depósito de Consulta de $10 Requerido</strong> — Se cobra un pequeño depósito de $10 para reservar tu primer turno de cita y consulta. Esto garantiza que tu tiempo sea reservado solo para ti y se aplica a tu saldo de sesión. Te enviaremos instrucciones de pago cuando confirmemos tu reserva.',
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
    'contact.hours.text':  'Lun – Vie: 9:00 AM – 7:00 PM<br>Sábado: 9:00 AM – 5:00 PM<br>Domingo: Solo con cita previa',

    /* ── Footer ── */
    'footer.desc':     'Escultura glútea, moldeado corporal, recuperación de BBL, detox linfático brasileño y europeo, anticelulitis y cuidados post-op.',
    'footer.links':    'Enlaces Rápidos',
    'footer.services': 'Nuestros Servicios',
    'footer.copy':     '© 2026 Tania Ayala Body Sculpting. Todos los derechos reservados.',
    'footer.s1': 'Masaje de Drenaje Linfático',
    'footer.s2': 'Escultura Corporal con Madera',
    'footer.s3': 'Terapia de Ventosas de Madera',
    'footer.s4': 'Escultura Puntual Profunda',
    'footer.s5': 'Preparación Pre-Op',
    'footer.s6': 'Cuidados Post-Abdominoplastia',
    'footer.s7': 'Recuperación Post-Cirugía de Senos',

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
  localStorage.setItem('lang', lang);
}

function initLanguage() {
  setLanguage('en');
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

    let dragging = false;

    function setPos(clientX) {
      const rect = wrap.getBoundingClientRect();
      const pct  = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
      before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left     = `${pct}%`;
    }

    // Mouse
    wrap.addEventListener('mousedown', e => { dragging = true; setPos(e.clientX); });
    document.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
    document.addEventListener('mouseup', () => { dragging = false; });

    // Touch
    wrap.addEventListener('touchstart', e => {
      dragging = true;
      setPos(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchmove', e => {
      if (dragging) setPos(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchend', () => { dragging = false; });

    // Start at 50%
    setPos(wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width * 0.5);

    // Re-init on resize
    window.addEventListener('resize', () => {
      setPos(wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width * 0.5);
    }, { passive: true });
  });
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
