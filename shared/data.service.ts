import { ICompany } from "./interfaces";

export class DataService {
    getCompanies(): ICompany[] {
        return [
            {
                id: 1,
                name: 'Karnataka State Road Transport Corporation',
                address: '5th cross road,BTM Layout , Bangalore 560015, Karnataka',
                issue: 'Outer Ring Road is blocked near BTM because of heavy rains and storm which is blocking roads and causing huge traffic jam and delays. Some low areas are frequent victims of water logging and need attention. Please help.',
                resolution: 'Thanks for putting into our notice. New drainage system is being implemented in prone areas along with road repair works. The local traffic police has been informed.',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.638974309039!2d77.60381382833897!3d12.91352225358815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fc91a93031%3A0xf0afe62576cbdc3f!2sBTM+Layout%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1563891783892!5m2!1sen!2sin'
            },
            {
                id: 2,
                name: 'Bangalore Metropolitan Transport Corporation',
                address: 'Neeladri road, Electronic City,  Bangalore 560100, Karnataka',
                issue: 'Road is too narrow for the traffic and full of Pot holes. It gets even messier during Rainy seasons.',
                resolution: '',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.031220063833!2d77.64676205091628!3d12.841259090897042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b642c92f001%3A0x8160e28e32005054!2sNeeladri+Rd%2C+Karuna+Nagar%2C+Electronics+City+Phase+1%2C+Electronic+City%2C+Bengaluru%2C+Karnataka+560100!5e0!3m2!1sen!2sin!4v1563892142137!5m2!1sen!2sin'
            },
            {
                id: 3,
                name: 'Consumer Forum',
                address: 'Bellandur, Bengaluru 560105, Karnataka',
                issue: 'Local shopkeepers deny to give proper bill and some do not except Rs 10 coin. The practice is common in the locality.',
                resolution: 'People have marked the ticket as invalid.',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.470569081359!2d77.66605727834153!3d12.932278853390118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13752e34e92f%3A0xc2b234a66f986aae!2sBellandur%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1563892301128!5m2!1sen!2sin'
            },
            {
                id: 4,
                name: 'Bangalore City Municipal Corporation Layout',
                address: 'Bellandur, Bengaluru 560105, Karnataka',
                issue: 'From mast few weeks it has been observed that the garbage on streets are on rise in Green Glen Layout. The garbage truck is skipping most of the days. This has lead to foul smell in the area.',
                resolution: '',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.470569081359!2d77.66605727834153!3d12.932278853390118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13752e34e92f%3A0xc2b234a66f986aae!2sBellandur%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1563892301128!5m2!1sen!2sin'
            },
            {
                id: 5,
                name: 'Bangalore Metro Transport Corperation',
                address: '4333 Amon Carter Blvd, Fort Worth, TX 76155, USA',
                issue: 'Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times. Whether at it unknown warrant herself winding if. Him same none name sake had post love. An busy feel form hand am up help. Parties it brother amongst an fortune of. Twenty behind wicket why age now itself ten.',
                resolution: 'o they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy. Considered imprudence of he friendship boisterous.',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.648772640394!2d-97.05290258549!3d32.8280699886891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e80fd681a33d1%3A0x7e6337906b583dc6!2sAmerican+Airlines!5e0!3m2!1sen!2sve!4v1543197294609'
            },
            {
                id: 6,
                name: 'Bangalore City Municipal Corporation Layout',
                address: 'Neeladri road, Electronic City,  Bangalore 560100, Karnataka',
                issue: 'Not far stuff she think the jokes. Going as by do known noise he wrote round leave. Warmly put branch people narrow see. Winding its waiting yet parlors married own feeling. Marry fruit do spite jokes an times. Whether at it unknown warrant herself winding if. Him same none name sake had post love. An busy feel form hand am up help. Parties it brother amongst an fortune of. Twenty behind wicket why age now itself ten.',
                resolution: 'o they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy. Considered imprudence of he friendship boisterous.',
                mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.031220063833!2d77.64676205091628!3d12.841259090897042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b642c92f001%3A0x8160e28e32005054!2sNeeladri+Rd%2C+Karuna+Nagar%2C+Electronics+City+Phase+1%2C+Electronic+City%2C+Bengaluru%2C+Karnataka+560100!5e0!3m2!1sen!2sin!4v1563892142137!5m2!1sen!2sin'
            }
        ]
    }

    getTransactions(): any[] {
        return [
            {
                itemType: 'header',
                date: new Date('Nov 23 2018')
            },
            {
                itemType: 'transaction',
                category: 'road',
                ammount: 12.34,
                companyId: 1,
                status: 'Completed',
                date: new Date('Nov 23 2018 16:37:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'transport',
                ammount: -9.45,
                companyId: 2,
                status: 'Pending',
                date: new Date('Nov 23 2018 16:22:34 EST')
            },
            {
                itemType: 'transaction',
                category: 'corruption',
                ammount: 0,
                companyId: 3,
                status: 'Invalid',
                date: new Date('Nov 23 2018 10:43:38 EST')
            },
            {
                itemType: 'header',
                date: new Date('Nov 22 2018')
            },
            {
                itemType: 'transaction',
                category: 'cleanliness',
                ammount: -1,
                companyId: 4,
                status: 'Validation Request',
                date: new Date('Nov 22 2018 7:26:38 EST')
            },
            {
                itemType: 'header',
                date: new Date('Nov 21 2018')
            },
            {
                itemType: 'transaction',
                category: 'restaurant',
                ammount: 25.34,
                companyId: 6,
                status: 'Completed',
                date: new Date('Nov 21 2018 10:34:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'transport',
                ammount: 25.34,
                companyId: 1,
                status: 'Completed',
                date: new Date('Nov 21 2018 10:34:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'corruption',
                ammount: 325.65,
                companyId: 5,
                status: 'Completed',
                date: new Date('Nov 21 2018 9:46:38 EST')
            },
            {
                itemType: 'header',
                date: new Date('Nov 20 2018')
            },
            {
                itemType: 'transaction',
                category: 'water',
                ammount: 12.34,
                companyId: 1,
                status: 'Completed',
                date: new Date('Nov 20 2018 16:37:28 EST')
            },
            {
                itemType: 'transaction',
                category: 'transport',
                ammount: -9.45,
                companyId: 2,
                status: 'Pending',
                date: new Date('Nov 20 2018 16:22:34 EST')
            },
            {
                itemType: 'transaction',
                category: 'health',
                ammount: 12.34,
                companyId: 1,
                status: 'Completed',
                date: new Date('Nov 20 2018 10:43:38 EST')
            },
        ]
    }

    getCategoriesIcons() {
        return {
            home: '\ue902',
            transport: '\uebbd',
            road: '\uebbd',
            cleanliness: '\ue677',
            health: '\uecdc',
            restaurant: '\uebbc',
            water: '\ue902',
            corruption: '\ue902',
        }
    }
}