
var horizontalStatus = {
    rainy: {
        ios:"ios-rainy",
        android: "md-rainy"
    },
    nang: "sunny",
    nhieumay: "md-cloud",
    dong: "thunderstorm",
    
};

var horizontalFlatListData = [
    {
        hour:"01:00",
        status:horizontalStatus.rainy,
        degrees: 25
    },
    {
        hour:"02:00",
        status :horizontalStatus.nhieumay,
        degrees: 25
    },    {
        hour:"03:00",
        status :horizontalStatus.mua,
        degrees: 25
    },    {
        hour:"04:00",
        status :horizontalStatus.nhieumay,
        degrees: 24
    },    {
        hour:"05:00",
        status :horizontalStatus.mua,
        degrees: 24
    },    {
        hour:"06:00",
        status :horizontalStatus.mua,
        degrees: 25
    },    {
        hour:"07:00",
        status :horizontalStatus.dong,
        degrees: 26
    },    {
        hour:"08:00",
        status :horizontalStatus.mua,
        degrees: 26
    },    {
        hour:"09:00",
        status :horizontalStatus.mua,
        degrees: 26
    },    {
        hour:"10:00",
        status :horizontalStatus.nang,
        degrees: 27
    },    {
        hour:"11:00",
        status :horizontalStatus.nang,
        degrees: 28
    },    {
        hour:"12:00",
        status :horizontalStatus.nang,
        degrees: 29
    },    {
        hour:"13:00",
        status :horizontalStatus.nang,
        degrees: 29
    },    {
        hour:"14:00",
        status :horizontalStatus.nang,
        degrees: 30
    },    {
        hour:"15:00",
        status :horizontalStatus.nang,
        degrees: 30
    },    {
        hour:"16:00",
        status :horizontalStatus.nang,
        degrees: 30
    },    {
        hour:"17:00",
        status :horizontalStatus.nang,
        degrees: 29
    },    {
        hour:"18:00",
        status :horizontalStatus.nhieumay,
        degrees: 28
    },    {
        hour:"19:00",
        status :horizontalStatus.nhieumay,
        degrees: 27
    },    {
        hour:"20:00",
        status :horizontalStatus.nhieumay,
        degrees: 27
    },    {
        hour:"21:00",
        status :horizontalStatus.nhieumay,
        degrees: 26
    },    {
        hour:"22:00",
        status :horizontalStatus.nhieumay,
        degrees: 26
    },    {
        hour:"23:00",
        status :horizontalStatus.nhieumay,
        degrees: 25
    },    {
        hour:"00:00",
        status :horizontalStatus.mua,
        degrees: 25
    },
];

export {horizontalFlatListData};
export {horizontalStatus};