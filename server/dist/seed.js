"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("./prismaClient"));
async function main() {
    console.log('Starting database seed...');
    // Clear existing data
    await prismaClient_1.default.user.deleteMany({});
    await prismaClient_1.default.incidentReport.deleteMany({});
    await prismaClient_1.default.evacCenter.deleteMany({});
    await prismaClient_1.default.barangay.deleteMany({});
    // All 51 barangays from Surigao City
    const barangaysData = [
        { id: 'brgy-alang-alang', displayName: 'Brgy. Alang-alang', address: 'Alang-alang, Surigao City', lat: 9.7400, lng: 125.4200 },
        { id: 'brgy-alegria', displayName: 'Brgy. Alegria', address: 'Alegria, Surigao City', lat: 9.7650, lng: 125.4100 },
        { id: 'brgy-anomar', displayName: 'Brgy. Anomar', address: 'Anomar, Surigao City', lat: 9.7800, lng: 125.4000 },
        { id: 'brgy-aurora', displayName: 'Brgy. Aurora', address: 'Aurora, Surigao City', lat: 9.7500, lng: 125.4300 },
        { id: 'brgy-balibayon', displayName: 'Brgy. Balibayon', address: 'Balibayon, Surigao City', lat: 9.8200, lng: 125.5200 },
        { id: 'brgy-baybay', displayName: 'Brgy. Baybay', address: 'Baybay, Surigao City', lat: 9.8400, lng: 125.5300 },
        { id: 'brgy-bilabid', displayName: 'Brgy. Bilabid', address: 'Bilabid, Surigao City', lat: 9.8500, lng: 125.5100 },
        { id: 'brgy-bitaugan', displayName: 'Brgy. Bitaugan', address: 'Bitaugan, Surigao City', lat: 9.7900, lng: 125.4100 },
        { id: 'brgy-bonifacio', displayName: 'Brgy. Bonifacio', address: 'Bonifacio, Surigao City', lat: 9.7500, lng: 125.4650 },
        { id: 'brgy-buenavista', displayName: 'Brgy. Buenavista', address: 'Buenavista, Surigao City', lat: 9.7350, lng: 125.4500 },
        { id: 'brgy-cabongbongan', displayName: 'Brgy. Cabongbongan', address: 'Cabongbongan, Surigao City', lat: 9.8050, lng: 125.5400 },
        { id: 'brgy-cagniog', displayName: 'Brgy. Cagniog', address: 'Cagniog, Surigao City', lat: 9.8100, lng: 125.4800 },
        { id: 'brgy-cagutsan', displayName: 'Brgy. Cagutsan', address: 'Cagutsan, Surigao City', lat: 9.8300, lng: 125.4900 },
        { id: 'brgy-canlanipa', displayName: 'Brgy. Canlanipa', address: 'Canlanipa, Surigao City', lat: 9.8200, lng: 125.4700 },
        { id: 'brgy-cantiasay', displayName: 'Brgy. Cantiasay', address: 'Cantiasay, Surigao City', lat: 9.7950, lng: 125.4450 },
        { id: 'brgy-capalayan', displayName: 'Brgy. Capalayan', address: 'Capalayan, Surigao City', lat: 9.7700, lng: 125.4400 },
        { id: 'brgy-catadman', displayName: 'Brgy. Catadman', address: 'Catadman, Surigao City', lat: 9.8150, lng: 125.5250 },
        { id: 'brgy-danao', displayName: 'Brgy. Danao', address: 'Danao, Surigao City', lat: 9.7850, lng: 125.5150 },
        { id: 'brgy-danawan', displayName: 'Brgy. Danawan', address: 'Danawan, Surigao City', lat: 9.7950, lng: 125.5050 },
        { id: 'brgy-day-asan', displayName: 'Brgy. Day-asan', address: 'Day-asan, Surigao City', lat: 9.8000, lng: 125.4550 },
        { id: 'brgy-ipil', displayName: 'Brgy. Ipil', address: 'Ipil, Surigao City', lat: 9.7600, lng: 125.4700 },
        { id: 'brgy-libuac', displayName: 'Brgy. Libuac', address: 'Libuac, Surigao City', lat: 9.7450, lng: 125.4800 },
        { id: 'brgy-lipata', displayName: 'Brgy. Lipata', address: 'Lipata, Surigao City', lat: 9.7550, lng: 125.5000 },
        { id: 'brgy-lisondra', displayName: 'Brgy. Lisondra', address: 'Lisondra, Surigao City', lat: 9.7500, lng: 125.4900 },
        { id: 'brgy-luna', displayName: 'Brgy. Luna', address: 'Luna, Surigao City', lat: 9.7400, lng: 125.4600 },
        { id: 'brgy-mabini', displayName: 'Brgy. Mabini', address: 'Mabini, Surigao City', lat: 9.7650, lng: 125.4800 },
        { id: 'brgy-mabua', displayName: 'Brgy. Mabua', address: 'Mabua, Surigao City', lat: 9.7550, lng: 125.4300 },
        { id: 'brgy-manyagao', displayName: 'Brgy. Manyagao', address: 'Manyagao, Surigao City', lat: 9.7700, lng: 125.4200 },
        { id: 'brgy-mapawa', displayName: 'Brgy. Mapawa', address: 'Mapawa, Surigao City', lat: 9.7800, lng: 125.4300 },
        { id: 'brgy-mat-i', displayName: 'Brgy. Mat-i', address: 'Mat-i, Surigao City', lat: 9.7620, lng: 125.4380 },
        { id: 'brgy-nabago', displayName: 'Brgy. Nabago', address: 'Nabago, Surigao City', lat: 9.8000, lng: 125.4650 },
        { id: 'brgy-nonoc', displayName: 'Brgy. Nonoc', address: 'Nonoc, Surigao City', lat: 9.8250, lng: 125.5500 },
        { id: 'brgy-orok', displayName: 'Brgy. Orok', address: 'Orok, Surigao City', lat: 9.7300, lng: 125.4400 },
        { id: 'brgy-poctoy', displayName: 'Brgy. Poctoy', address: 'Poctoy, Surigao City', lat: 9.7350, lng: 125.4700 },
        { id: 'brgy-punta-bilar', displayName: 'Brgy. Punta Bilar', address: 'Punta Bilar, Surigao City', lat: 9.7250, lng: 125.4500 },
        { id: 'brgy-quezon', displayName: 'Brgy. Quezon', address: 'Quezon, Surigao City', lat: 9.7400, lng: 125.4500 },
        { id: 'brgy-rizal', displayName: 'Brgy. Rizal', address: 'Rizal, Surigao City', lat: 9.7650, lng: 125.4550 },
        { id: 'brgy-sabang', displayName: 'Brgy. Sabang', address: 'Sabang, Surigao City', lat: 9.7800, lng: 125.4550 },
        { id: 'brgy-san-isidro', displayName: 'Brgy. San Isidro', address: 'San Isidro, Surigao City', lat: 9.7500, lng: 125.4750 },
        { id: 'brgy-san-jose', displayName: 'Brgy. San Jose', address: 'San Jose, Surigao City', lat: 9.7700, lng: 125.4900 },
        { id: 'brgy-san-juan', displayName: 'Brgy. San Juan', address: 'San Juan, Surigao City', lat: 9.7750, lng: 125.4700 },
        { id: 'brgy-san-pedro', displayName: 'Brgy. San Pedro', address: 'San Pedro, Surigao City', lat: 9.7850, lng: 125.4750 },
        { id: 'brgy-san-roque', displayName: 'Brgy. San Roque', address: 'San Roque, Surigao City', lat: 9.7720, lng: 125.4880 },
        { id: 'brgy-serna', displayName: 'Brgy. Serna', address: 'Serna, Surigao City', lat: 9.7600, lng: 125.4400 },
        { id: 'brgy-sidlakan', displayName: 'Brgy. Sidlakan', address: 'Sidlakan, Surigao City', lat: 9.7950, lng: 125.5200 },
        { id: 'brgy-silop', displayName: 'Brgy. Silop', address: 'Silop, Surigao City', lat: 9.7850, lng: 125.4900 },
        { id: 'brgy-sugbay', displayName: 'Brgy. Sugbay', address: 'Sugbay, Surigao City', lat: 9.7500, lng: 125.4350 },
        { id: 'brgy-sukailang', displayName: 'Brgy. Sukailang', address: 'Sukailang, Surigao City', lat: 9.7650, lng: 125.4250 },
        { id: 'brgy-taft', displayName: 'Brgy. Taft', address: 'Taft, Surigao City', lat: 9.7700, lng: 125.4750 },
        { id: 'brgy-talisay', displayName: 'Brgy. Talisay', address: 'Talisay, Surigao City', lat: 9.7300, lng: 125.4700 },
        { id: 'brgy-togbongon', displayName: 'Brgy. Togbongon', address: 'Togbongon, Surigao City', lat: 9.8150, lng: 125.4600 },
        { id: 'brgy-trinidad', displayName: 'Brgy. Trinidad', address: 'Trinidad, Surigao City', lat: 9.7550, lng: 125.4550 },
        { id: 'brgy-washington', displayName: 'Brgy. Washington', address: 'Washington, Surigao City', lat: 9.7800, lng: 125.4850 },
        { id: 'brgy-zaragoza', displayName: 'Brgy. Zaragoza', address: 'Zaragoza, Surigao City', lat: 9.8000, lng: 125.4400 },
    ];
    // Create all barangays
    const barangays = await Promise.all(barangaysData.map(b => prismaClient_1.default.barangay.create({ data: b })));
    console.log(`✅ Seeded ${barangays.length} barangays`);
    // Create default users
    const adminUser = await prismaClient_1.default.user.create({
        data: {
            username: 'admin@example.com',
            email: 'admin@example.com',
            password: 'password123',
            role: 'admin',
            barangayId: null,
        },
    });
    console.log('✅ Created admin user:', adminUser.username);
    const barangayUser = await prismaClient_1.default.user.create({
        data: {
            username: 'barangay@example.com',
            email: 'barangay@example.com',
            password: 'password123',
            role: 'barangay',
            barangayId: 'brgy-serna',
        },
    });
    console.log('✅ Created barangay user:', barangayUser.username, 'assigned to brgy-serna');
    const guestUser = await prismaClient_1.default.user.create({
        data: {
            username: 'guest@example.com',
            email: 'guest@example.com',
            password: 'password123',
            role: 'guest',
            barangayId: null,
        },
    });
    console.log('✅ Created guest user:', guestUser.username);
    console.log('✅ Database seeded successfully!');
}
main()
    .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
})
    .finally(async () => {
    await prismaClient_1.default.$disconnect();
});
