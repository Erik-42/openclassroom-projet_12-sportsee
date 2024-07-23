// export class UserMainDataSanitized {
//     constructor(data){
//         this.userId = (data && data.userId)? data.userId : 0;
//         this.userInfos={}
//         this.userInfos.firstName=(data && data.userInfos && data.userInfos.firstName)? data.userInfos.firstName : '';
//          this.userInfos.lastName=(data && data.userInfos && data.userInfos.lastName)? data.userInfos.lastName : '';
//           this.userInfos.age=(data && data.userInfos && data.userInfos.age)? data.userInfos.age : 0;
//           this.todayScore = (data && data.todayScore)? data.todayScore : 0;
//           this.keyData={}
//           this.keyData.calorieCount=(data && data.keyData && data.keyData.calorieCount)? data.keyData.calorieCount : '';
//           this.keyData.proteinCount=(data && data.keyData && data.keyData.proteinCount)? data.keyData.proteinCount : '';
//           this.keyData.carbohydrateCount=(data && data.keyData && data.keyData.carbohydrateCount)? data.keyData.carbohydrateCount : '';
//           this.keyData.lipidCount=(data && data.keyData && data.keyData.lipidCount)? data.keyData.lipidCount : '';
//     }
// }

export class UserMainDataSanitized {
    constructor(data) {
        this.userId = data?.userId || 0;
        this.userInfos = {
            firstName: data?.userInfos?.firstName || '',
            lastName: data?.userInfos?.lastName || '',
            age: data?.userInfos?.age || 0
        };
        this.todayScore = data?.todayScore || data?.score || 0;
        this.keyData = {
            calorieCount: data?.keyData?.calorieCount || 0,
            proteinCount: data?.keyData?.proteinCount || 0,
            carbohydrateCount: data?.keyData?.carbohydrateCount || 0,
            lipidCount: data?.keyData?.lipidCount || 0
        };
    }
}

export class UserActivitySanitized {
    constructor(data) {
        this.userId = data?.userId || 0;
        this.sessions = Array.isArray(data?.sessions) ? data.sessions.map(session => ({
            day: session?.day || '',
            kilogram: session?.kilogram || 0,
            calories: session?.calories || 0
        })) : [];
    }
}

export class UserAverageSessionSanitized {
    constructor(data) {
        this.userId = data?.userId || 0;
        this.sessions = Array.isArray(data?.sessions) ? data.sessions.map(session => ({
            day: session?.day || 0,
            sessionLength: session?.sessionLength || 0
        })) : [];
    }
}

export class UserPerformanceSanitized {
    constructor(data) {
        this.userId = data?.userId || 0;
        this.kind = data?.kind || {};
        this.data = Array.isArray(data?.data) ? data.data.map(item => ({
            value: item?.value || 0,
            kind: item?.kind || 0
        })) : [];
    }
}