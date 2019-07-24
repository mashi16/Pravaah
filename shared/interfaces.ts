export interface ICompany {
    id: number;
    name: string;
    address: string;
    mapUrl: string;
    issue: string;
    resolution: string;
}

export interface ITrasaction {
    category: 'home', 'transport', 'communication', 'cleanliness', 'restaurant', 'road', 'health', 'water', 'corruption';
    ammount: number;
    companyId: number;
    status: 'Completed' | 'Pending' | 'Invalid' | 'Validation Request';
    date: Date;
}

export interface IListTrasactionItem extends ITrasaction {
    itemType: string;
}

export interface IListTrasactionHeader {
    itemType: string;
    date: Date;
}