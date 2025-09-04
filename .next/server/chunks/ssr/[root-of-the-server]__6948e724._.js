module.exports = {

"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/dns [external] (dns, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addAppointment": (()=>addAppointment),
    "addOffer": (()=>addOffer),
    "deleteOffer": (()=>deleteOffer),
    "getAppointmentsByStudentId": (()=>getAppointmentsByStudentId),
    "getOfferById": (()=>getOfferById),
    "getOffers": (()=>getOffers),
    "getOffersByStudentId": (()=>getOffersByStudentId),
    "getReviewsByStudentId": (()=>getReviewsByStudentId),
    "getStudentById": (()=>getStudentById),
    "getStudentByUserId": (()=>getStudentByUserId),
    "getStudents": (()=>getStudents),
    "getUserByStudentId": (()=>getUserByStudentId),
    "getUserByUsername": (()=>getUserByUsername),
    "updateOffer": (()=>updateOffer),
    "users": (()=>users)
});
const users = [
    {
        id: 'user-admin',
        username: 'Admin'
    },
    {
        id: 'user-1',
        username: 'Ana García',
        studentId: '1'
    },
    {
        id: 'user-2',
        username: 'Ben Allen',
        studentId: '2'
    },
    {
        id: 'user-3',
        username: 'Carla Lima',
        studentId: '3'
    },
    {
        id: 'user-4',
        username: 'Daniel Sato',
        studentId: '4'
    },
    {
        id: 'user-5',
        username: 'Elena Rodriguez',
        studentId: '5'
    }
];
let reviews = [
    {
        id: '1',
        studentId: '1',
        author: 'John Doe',
        rating: 5,
        comment: 'Amazing service, very professional and gentle.',
        date: '2024-05-10'
    },
    {
        id: '2',
        studentId: '1',
        author: 'Jane Smith',
        rating: 4,
        comment: 'Good experience, but the waiting time was a bit long.',
        date: '2024-05-12'
    },
    {
        id: '3',
        studentId: '2',
        author: 'Peter Jones',
        rating: 5,
        comment: 'Dr. Allen was fantastic with my kids. Highly recommended!',
        date: '2024-05-15'
    },
    {
        id: '4',
        studentId: '3',
        author: 'Emily White',
        rating: 5,
        comment: 'The best teeth whitening I have ever had.',
        date: '2024-05-18'
    },
    {
        id: '5',
        studentId: '3',
        author: 'Michael Brown',
        rating: 3,
        comment: 'The result was good, but the student seemed a bit nervous.',
        date: '2024-05-20'
    },
    {
        id: '6',
        studentId: '4',
        author: 'Sarah Green',
        rating: 5,
        comment: 'Very thorough and explained everything clearly.',
        date: '2024-05-21'
    },
    {
        id: '7',
        studentId: '1',
        author: 'David Williams',
        rating: 5,
        comment: 'I\'m very happy with my cleaning. Will come back for sure.',
        date: '2024-05-22'
    },
    {
        id: '8',
        studentId: '2',
        author: 'Laura Taylor',
        rating: 4,
        comment: 'Friendly and professional, a great combination.',
        date: '2024-05-23'
    }
];
let offers = [
    {
        id: '1',
        studentId: '1',
        title: 'Standard Dental Cleaning',
        description: 'Comprehensive cleaning including plaque removal, tarter removal, and polishing.',
        price: 50,
        category: 'Cleaning'
    },
    {
        id: '2',
        studentId: '1',
        title: 'Basic Check-up',
        description: 'A complete dental check-up to assess your oral health.',
        price: 30,
        category: 'Check-up'
    },
    {
        id: '3',
        studentId: '2',
        title: 'Professional Teeth Whitening',
        description: 'Get a brighter smile with our professional-grade whitening treatment.',
        price: 120,
        category: 'Whitening'
    },
    {
        id: '4',
        studentId: '3',
        title: 'Advanced Teeth Whitening',
        description: 'In-office laser whitening for immediate and dramatic results.',
        price: 200,
        category: 'Whitening'
    },
    {
        id: '5',
        studentId: '3',
        title: 'Full Mouth X-Ray & Check-up',
        description: 'Includes a full set of x-rays and a comprehensive exam.',
        price: 75,
        category: 'Check-up'
    },
    {
        id: '6',
        studentId: '4',
        title: 'Orthodontic Consultation',
        description: 'Consultation for braces and other orthodontic treatments.',
        price: 25,
        category: 'Orthodontics'
    },
    {
        id: '7',
        studentId: '4',
        title: 'Deep Cleaning',
        description: 'Scaling and root planing for patients with gum disease.',
        price: 150,
        category: 'Cleaning'
    }
];
let appointments = [
    {
        id: 'appt-1',
        studentId: '1',
        offerId: '1',
        patientName: 'Client Example',
        patientEmail: 'client@example.com',
        patientPhone: '555-1234',
        status: 'pending'
    },
    {
        id: 'appt-2',
        studentId: '1',
        offerId: '2',
        patientName: 'Another Client',
        patientEmail: 'another@example.com',
        patientPhone: '555-5678',
        status: 'confirmed'
    }
];
let students = [
    {
        id: '1',
        userId: 'user-1',
        name: 'Ana García',
        university: 'University of Dental Sciences',
        bio: 'A passionate 4th-year dental student specializing in preventative care. I am dedicated to providing gentle and thorough treatments to ensure my patients leave with a sparkling smile. I believe in patient education and always take the time to explain procedures and proper oral hygiene techniques.',
        avatarUrl: `https://picsum.photos/400/400?random=1`,
        skills: [
            'Preventative Care',
            'Dental Cleanings',
            'Patient Education',
            'Digital X-Rays'
        ],
        location: 'New York, NY',
        rating: 4.7,
        status: 'approved',
        gallery: [
            {
                url: 'https://picsum.photos/800/600?random=11',
                description: 'Our modern and clean treatment room.'
            },
            {
                url: 'https://picsum.photos/800/600?random=12',
                description: 'State-of-the-art dental equipment.'
            }
        ]
    },
    {
        id: '2',
        userId: 'user-2',
        name: 'Ben Allen',
        university: 'Metropolitan School of Dentistry',
        bio: '5th-year dental student with a focus on pediatric and cosmetic dentistry. My goal is to create a positive and comfortable experience for every patient, especially children. I enjoy transforming smiles and boosting my patients\' confidence through aesthetic treatments.',
        avatarUrl: `https://picsum.photos/400/400?random=2`,
        skills: [
            'Pediatric Dentistry',
            'Teeth Whitening',
            'Veneers',
            'Cosmetic Bonding'
        ],
        location: 'Los Angeles, CA',
        rating: 4.8,
        status: 'approved'
    },
    {
        id: '3',
        userId: 'user-3',
        name: 'Carla Lima',
        university: 'State Dental College',
        bio: 'I am a final year dental student with a keen interest in restorative dentistry and endodontics. I am proficient in modern techniques for fillings, crowns, and root canals. My meticulous approach ensures long-lasting and aesthetically pleasing results for my patients.',
        avatarUrl: `https://picsum.photos/400/400?random=3`,
        skills: [
            'Restorative Dentistry',
            'Endodontics (Root Canals)',
            'Crowns & Bridges',
            'Fillings'
        ],
        location: 'Chicago, IL',
        rating: 4.2,
        status: 'pending'
    },
    {
        id: '4',
        userId: 'user-4',
        name: 'Daniel Sato',
        university: 'Advanced Oral Health Institute',
        bio: 'A detail-oriented dental student specializing in orthodontics and periodontics. I am committed to helping patients achieve optimal gum health and perfectly aligned teeth. I have experience with traditional braces, clear aligners, and periodontal maintenance.',
        avatarUrl: `https://picsum.photos/400/400?random=4`,
        skills: [
            'Orthodontics',
            'Periodontics',
            'Braces',
            'Invisalign'
        ],
        location: 'Houston, TX',
        rating: 5.0,
        status: 'pending'
    },
    {
        id: '5',
        userId: 'user-5',
        name: 'Elena Rodriguez',
        university: 'University of Dental Sciences',
        bio: 'A bright and enthusiastic 3rd-year student, eager to learn and help patients. I am currently focusing on. I am currently focusing on general dentistry and am excited to apply my knowledge in a clinical setting.',
        avatarUrl: `https://picsum.photos/400/400?random=5`,
        skills: [
            'General Dentistry',
            'Patient Care',
            'Oral Hygiene'
        ],
        location: 'New York, NY',
        rating: 0,
        status: 'pending'
    }
].map((student)=>({
        ...student,
        reviews: reviews.filter((r)=>r.studentId === student.id),
        offers: offers.filter((o)=>o.studentId === student.id)
    }));
const getStudents = ()=>students;
const getStudentById = (id)=>students.find((s)=>s.id === id);
const getStudentByUserId = (userId)=>students.find((s)=>s.userId === userId);
const getOffers = ()=>offers;
const getOfferById = (id)=>offers.find((o)=>o.id === id);
const getReviewsByStudentId = (studentId)=>reviews.filter((r)=>r.studentId === studentId);
const getUserByUsername = (username)=>users.find((u)=>u.username.toLowerCase() === username.toLowerCase());
const getUserByStudentId = (studentId)=>users.find((u)=>u.studentId === studentId);
const getOffersByStudentId = (studentId)=>offers.filter((o)=>o.studentId === studentId);
const getAppointmentsByStudentId = (studentId)=>appointments.filter((a)=>a.studentId === studentId);
const addAppointment = (appointmentData)=>{
    const newAppointment = {
        ...appointmentData,
        id: `appt-${Date.now()}`
    };
    appointments.unshift(newAppointment);
    return newAppointment;
};
const addOffer = (offerData)=>{
    const newOffer = {
        ...offerData,
        id: String(Date.now())
    };
    offers.push(newOffer);
    // Also add it to the student's offers list
    const student = students.find((s)=>s.id === newOffer.studentId);
    if (student) {
        student.offers.push(newOffer);
    }
    return newOffer;
};
const updateOffer = (offerId, offerData)=>{
    let offer = offers.find((o)=>o.id === offerId);
    if (offer) {
        offer = Object.assign(offer, offerData);
        // Also update the offer in the student's list
        const student = students.find((s)=>s.id === offer.studentId);
        if (student) {
            const offerIndex = student.offers.findIndex((o)=>o.id === offerId);
            if (offerIndex > -1) {
                student.offers[offerIndex] = {
                    ...student.offers[offerIndex],
                    ...offerData
                };
            }
        }
    }
    return offer;
};
const deleteOffer = (offerId)=>{
    const offerIndex = offers.findIndex((o)=>o.id === offerId);
    if (offerIndex > -1) {
        const studentId = offers[offerIndex].studentId;
        offers.splice(offerIndex, 1);
        // Also remove it from the student's offers list
        const student = students.find((s)=>s.id === studentId);
        if (student) {
            student.offers = student.offers.filter((o)=>o.id !== offerId);
        }
        return true;
    }
    return false;
};
}}),
"[project]/src/lib/email.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/email.ts
/* __next_internal_action_entry_do_not_use__ [{"60c63ba7ea295970b3c15e16bd4ca2fcc3bce26f9f":"sendProfileApprovedEmail","7018d9869b4a2f519887266d75ec1bb8bdbc1b7cbf":"sendNewAppointmentEmail"},"",""] */ __turbopack_context__.s({
    "sendNewAppointmentEmail": (()=>sendNewAppointmentEmail),
    "sendProfileApprovedEmail": (()=>sendProfileApprovedEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});
async function sendEmail({ to, subject, html }) {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to,
        subject,
        html
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to', to);
        return {
            success: true
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            error: 'Failed to send email'
        };
    }
}
async function sendProfileApprovedEmail(studentName, studentEmail) {
    if (!studentEmail) {
        console.error("No email address provided for student:", studentName);
        return;
    }
    const subject = '¡Tu perfil de OdontoLink ha sido aprobado!';
    const html = `
    <h1>¡Felicidades, ${studentName}!</h1>
    <p>Tu perfil en OdontoLink ha sido aprobado por nuestros administradores.</p>
    <p>Ya puedes iniciar sesión y comenzar a crear ofertas para clientes.</p>
    <p>¡Gracias por unirte a nuestra comunidad!</p>
    <p>Atentamente,</p>
    <p>El equipo de OdontoLink</p>
  `;
    return sendEmail({
        to: studentEmail,
        subject,
        html
    });
}
async function sendNewAppointmentEmail(student, appointment, offer) {
    // In a real app, you would fetch the student's actual email.
    // For this demo, we'll use a placeholder or the login email if available.
    const studentInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStudentById"])(student.id);
    const studentEmail = "octavioriv02@gmail.com";
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const subject = `Nueva Solicitud de Cita para "${offer.title}"`;
    const html = `
      <h1>¡Nueva Solicitud de Cita!</h1>
      <p>Hola ${student.username},</p>
      <p>Un nuevo cliente ha solicitado una cita para tu oferta: <strong>${offer.title}</strong>.</p>
      
      <h2>Detalles del Cliente:</h2>
      <ul>
        <li><strong>Nombre:</strong> ${appointment.patientName}</li>
        <li><strong>Email:</strong> ${appointment.patientEmail}</li>
        <li><strong>Teléfono:</strong> ${appointment.patientPhone}</li>
      </ul>
      
      <p>Por favor, contacta al cliente lo antes posible para confirmar los detalles.</p>
      <p>Puedes ver y gestionar tus citas en tu panel de perfil.</p>
      
      <p>Atentamente,</p>
      <p>El equipo de OdontoLink</p>
    `;
    return sendEmail({
        to: studentEmail,
        subject,
        html
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendProfileApprovedEmail,
    sendNewAppointmentEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendProfileApprovedEmail, "60c63ba7ea295970b3c15e16bd4ca2fcc3bce26f9f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendNewAppointmentEmail, "7018d9869b4a2f519887266d75ec1bb8bdbc1b7cbf", null);
}}),
"[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/email.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/email.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$offers$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/email.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/email.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7018d9869b4a2f519887266d75ec1bb8bdbc1b7cbf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendNewAppointmentEmail"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/email.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$offers$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/email.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/email.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "7018d9869b4a2f519887266d75ec1bb8bdbc1b7cbf": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$offers$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7018d9869b4a2f519887266d75ec1bb8bdbc1b7cbf"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$offers$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/email.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$offers$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$email$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/offers/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/email.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/offers/[id]/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/offers/[id]/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/offers/[id]/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/offers/[id]/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/offers/[id]/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/offers/[id]/page.tsx", "default");
}}),
"[project]/src/app/offers/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$offers$2f5b$id$5d2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/offers/[id]/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$offers$2f5b$id$5d2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/offers/[id]/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$offers$2f5b$id$5d2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/offers/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/offers/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6948e724._.js.map