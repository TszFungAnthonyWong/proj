import axios from 'axios';

export const getapi = () => {
    return dispatch => {
        let request = axios({
            method: 'GET',
            url: '/Api/api',
        })

        return request.then(res => {

            console.log(typeof res.data)
            console.log(res.data.data)
            // dispatch(STORE_API(res.data.data));
            dispatch(STORE_API(
                [
                    {
                        PROJECT_ID: 123,
                        PROJECT: "Project_RX782",
                        PHASE: "Development",
                        schedule: {
                            start_date: "1/1/2020",
                            end_date: "2/2/2020",
                            Dev_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            Development: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            System_Test: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            SIT_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            PT_Execution: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CRR_Executaion: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CVT_PVT_Go_Live: { start_date: "1/1/2020", end_date: "2/2/2020" },
                        },
                        cost: {
                            STATUS: "close",
                            DEV_ST: 2000,
                            SIT_AUTO: 8000,
                            PERF_TEST: 4000,
                            OOS: 1600,
                            NPE: 3000,
                            OTHERS: 2000
                        },
                        member: {
                            VHA: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            TCS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            OTHER: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            DMS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            }
                        }
                    },
                    {
                        PROJECT_ID: 555,
                        PROJECT: "Project_X102A",
                        PHASE: "Dev Planning",
                        schedule: {
                            start_date: "1/1/2020",
                            end_date: "2/2/2020",
                            Dev_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            Development: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            System_Test: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            SIT_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            PT_Execution: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CRR_Executaion: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CVT_PVT_Go_Live: { start_date: "1/1/2020", end_date: "2/2/2020" },
                        },
                        cost: {
                            STATUS: "close",
                            DEV_ST: 2000,
                            SIT_AUTO: 8000,
                            PERF_TEST: 12312,
                            OOS: 1600,
                            NPE: 3000,
                            OTHERS: 2000
                        },
                        member: {
                            VHA: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            TCS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            OTHER: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            DMS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            }
                        }
                    },
                ]
            ));

        })
    }
}

export const STORE_API = (data) => {
    return {
        type: "STORE_API",
        data
    };
};

export const getSchedule = () => {
    return dispatch => {
        let request = axios({
            method: 'GET',
            url: '/Api/api',
        })

        return request.then(res => {

            console.log(typeof res.data)
            console.log(res.data.data)
            // dispatch(STORE_API(res.data.data));
            dispatch(STORE_SCHEDULE(
                [
                    {
                        PROJECT_ID: 123,
                        PROJECT: "Project_RX782",
                        PHASE: "Development",
                        schedule: {
                            start_date: "1/1/2020",
                            end_date: "12/12/2020",
                            Dev_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            Development: { start_date: "2/2/2020", end_date: "3/3/2020" },
                            System_Test: { start_date: "3/3/2020", end_date: "4/4/2020" },
                            SIT_Planning: { start_date: "4/4/2020", end_date: "5/5/2020" },
                            SIT_Execution: { start_date: "5/5/2020", end_date: "6/6/2020" },
                            PT_Execution: { start_date: "6/6/2020", end_date: "7/7/2020" },
                            CRR_Executaion: { start_date: "7/7/2020", end_date: "9/9/2020" },
                            CVT_PVT_Go_Live: { start_date: "8/8/2020", end_date: "12/12/2020" },
                        },

                    },
                    {
                        PROJECT_ID: 555,
                        PROJECT: "Project_X102A",
                        PHASE: "Dev Planning",
                        schedule: {
                            start_date: "1/1/2020",
                            end_date: "2/2/2020",
                            Dev_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            Development: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            System_Test: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            SIT_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            PT_Execution: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CRR_Executaion: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CVT_PVT_Go_Live: { start_date: "1/1/2020", end_date: "2/2/2020" },
                        },
                        cost: {
                            STATUS: "close",
                            DEV_ST: 2000,
                            SIT_AUTO: 8000,
                            PERF_TEST: 12312,
                            OOS: 1600,
                            NPE: 3000,
                            OTHERS: 2000
                        },
                        member: {
                            VHA: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            TCS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            OTHER: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            DMS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            }
                        }
                    },
                ]
            ));

        })
    }
}

export const STORE_SCHEDULE = (data) => {
    return {
        type: "STORE_SCHEDULE",
        data
    };
};

export const getMember = () => {
    return dispatch => {
        let request = axios({
            method: 'GET',
            url: '/Api/api',
        })

        return request.then(res => {

            console.log(typeof res.data)
            console.log(res.data.data)
            // dispatch(STORE_API(res.data.data));
            dispatch(STORE_MEMBER(
                [
                    {
                        PROJECT_ID: 123,
                        PROJECT: "Project_RX782",
                        member: {
                            VHA: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA'],
                                testManager: []
                            },
                            TCS: {
                                projectManager: ['pmA'],
                                architect: [],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            OTHER: {
                                projectManager: [],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA']
                            },
                            DMS: {
                                projectManager: [],
                                architect: [],
                                testManager: ['tmA', 'tmB', 'tmC']
                            }
                        }
                    },
                    {
                        PROJECT_ID: 555,
                        PROJECT: "Project_X102A",
                        member: {
                            VHA: {
                                projectManager: ['Anthony Wong', 'Benson Bech', 'Rumble karriha'],
                                architect: ['arA'],
                                testManager: []
                            },
                            TCS: {
                                projectManager: ['pmA'],
                                architect: [],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            OTHER: {
                                projectManager: [],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA']
                            },
                            DMS: {
                                projectManager: [],
                                architect: [],
                                testManager: ['tmA', 'tmB', 'tmC']
                            }
                        }
                    },
                ]
            ));

        })
    }
}
export const STORE_MEMBER = (data) => {
    return {
        type: "STORE_MEMBER",
        data
    };
};

export const getCost = () => {
    return dispatch => {
        let request = axios({
            method: 'GET',
            url: '/Api/api',
        })

        return request.then(res => {

            console.log(typeof res.data)
            console.log(res.data.data)
            // dispatch(STORE_API(res.data.data));
            dispatch(STORE_COST(
                [
                    {
                        PROJECT_ID: 123,
                        PROJECT: "Project_RX782",
                        PHASE: "Development",
                        schedule: {
                            start_date: "1/1/2020",
                            end_date: "2/2/2020",
                            Dev_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            Development: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            System_Test: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            SIT_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            PT_Execution: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CRR_Executaion: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CVT_PVT_Go_Live: { start_date: "1/1/2020", end_date: "2/2/2020" },
                        },
                        cost: {
                            STATUS: "close",
                            DEV_ST: 2000,
                            SIT_AUTO: 8000,
                            PERF_TEST: 4000,
                            OOS: 1600,
                            NPE: 3000,
                            OTHERS: 2000
                        },
                        member: {
                            VHA: {
                                projectManager: ['Anthony Wong', 'Benson Bech', 'Rumble karriha'],
                                architect: ['arA'],
                                testManager: []
                            },
                            TCS: {
                                projectManager: ['pmA'],
                                architect: [],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            OTHER: {
                                projectManager: [],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA']
                            },
                            DMS: {
                                projectManager: [],
                                architect: [],
                                testManager: ['tmA', 'tmB', 'tmC']
                            }
                        }
                    },
                    {
                        PROJECT_ID: 555,
                        PROJECT: "Project_X102A",
                        PHASE: "Dev Planning",
                        schedule: {
                            start_date: "1/1/2020",
                            end_date: "2/2/2020",
                            Dev_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            Development: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            System_Test: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            SIT_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            PT_Execution: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CRR_Executaion: { start_date: "1/1/2020", end_date: "2/2/2020" },
                            CVT_PVT_Go_Live: { start_date: "1/1/2020", end_date: "2/2/2020" },
                        },
                        cost: {
                            STATUS: "close",
                            DEV_ST: 2000,
                            SIT_AUTO: 8000,
                            PERF_TEST: 12312,
                            OOS: 1600,
                            NPE: 3000,
                            OTHERS: 2000
                        },
                        member: {
                            VHA: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            TCS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            OTHER: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            },
                            DMS: {
                                projectManager: ['pmA', 'pmB', 'pmC'],
                                architect: ['arA', 'arB', 'arC'],
                                testManager: ['tmA', 'tmB', 'tmC']
                            }
                        }
                    },
                ]
            ));

        })
    }
}
export const STORE_COST = (data) => {
    return {
        type: "STORE_COST",
        data
    };
};


export const getProject = (projectName) => {
    return dispatch => {
        let request = axios({
            method: 'GET',
            url: '/Api/api',
            params: {
                projectName: projectName
            }
        })

        return request.then(res => {
            console.log(typeof res.data)
            console.log(res.data.data)
            // dispatch(STORE_API(res.data.data));
            dispatch(STORE_PROJECT(
                {
                    PROJECT_ID: 123,
                    PROJECT: projectName,
                    PHASE: "Development",
                    schedule: {
                        start_date: "1/1/2020",
                        end_date: "12/12/2020",
                        Dev_Planning: { start_date: "1/1/2020", end_date: "2/2/2020" },
                        Development: { start_date: "2/2/2020", end_date: "3/3/2020" },
                        System_Test: { start_date: "3/3/2020", end_date: "4/4/2020" },
                        SIT_Planning: { start_date: "4/4/2020", end_date: "5/5/2020" },
                        SIT_Execution: { start_date: "5/5/2020", end_date: "6/6/2020" },
                        PT_Execution: { start_date: "6/6/2020", end_date: "7/7/2020" },
                        CRR_Executaion: { start_date: "7/7/2020", end_date: "9/9/2020" },
                        CVT_PVT_Go_Live: { start_date: "8/8/2020", end_date: "12/12/2020" },
                    },
                    cost: {
                        STATUS: "close",
                        DEV_ST: 2000,
                        SIT_AUTO: 8000,
                        PERF_TEST: 4000,
                        OOS: 1600,
                        NPE: 3000,
                        OTHERS: 2000
                    },
                    member: {
                        VHA: {
                            projectManager: ['pmA', 'pmB', 'pmC'],
                            architect: ['arA', 'arB', 'arC'],
                            testManager: ['tmA', 'tmB', 'tmC']
                        },
                        TCS: {
                            projectManager: ['pmA', 'pmB', 'pmC'],
                            architect: ['arA', 'arB', 'arC'],
                            testManager: ['tmA', 'tmB', 'tmC']
                        },
                        OTHER: {
                            projectManager: ['pmA', 'pmB', 'pmC'],
                            architect: ['arA', 'arB', 'arC'],
                            testManager: ['tmA', 'tmB', 'tmC']
                        },
                        DMS: {
                            projectManager: ['pmA', 'pmB', 'pmC'],
                            architect: ['arA', 'arB', 'arC'],
                            testManager: ['tmA', 'tmB', 'tmC']
                        }
                    }
                },


            ));
        })
    }
}

export const STORE_PROJECT = (data) => {
    return {
        type: "STORE_PROJECT",
        data
    };
}

// export const getProjectName = () => {
//     return dispatch => {

//         let request = axios({
//             method: 'post',
//             url: host + '/api/getProjectName',
//             data: {
//                 accessToken: "1e1b76178cc2f8d1280b4b42adc6c289"
//             }
//         })

//         return request.then(res => {
//             dispatch(STORE_PROJECTNAME(res.data.data));
//         })
//     }
// }
// export const STORE_PROJECTNAME = (data) => {
//     return {
//         type: "STORE_PROJECTNAME",
//         data
//     };
// };


// export const getPhase = (projectName) => {
//     return dispatch => {

//         let request = axios({
//             method: 'post',
//             url: host + '/api/getPhase',
//             params: {
//                 projectName: projectName
//             },
//             data: {
//                 accessToken: "1e1b76178cc2f8d1280b4b42adc6c289"
//             }
//         })

//         return request.then(res => {
//             dispatch(STORE_PHASE(res.data.data));
//         })
//     }
// }
// export const STORE_PHASE = (data) => {
//     return {
//         type: "STORE_PHASE",
//         data
//     };
// };



// export const getIterationId = (projectName, phase) => {
//     return dispatch => {

//         let request = axios({
//             method: 'post',
//             url: host + '/api/getIterationId',
//             params: {
//                 projectName: projectName,
//                 phase: phase
//             },
//             data: {
//                 accessToken: "1e1b76178cc2f8d1280b4b42adc6c289"
//             }
//         })

//         return request.then(res => {
//             dispatch(STORE_ITERATIONID(res.data.data));
//         })
//     }
// }
// export const STORE_ITERATIONID = (data) => {
//     return {
//         type: "STORE_ITERATIONID",
//         data
//     };
// };



// export const getData = (projectName, phase, iterationId) => {
//     return dispatch => {

//         let request = axios({
//             method: 'post',
//             url: host + '/api/getData',
//             params: {
//                 projectName: projectName,
//                 phase: phase,
//                 iterationId: iterationId
//             },
//             data: {
//                 accessToken: "1e1b76178cc2f8d1280b4b42adc6c289"
//             }
//         })

//         return request.then(res => {
//             dispatch(STORE_DATA(res.data.data));
//         })
//     }
// }
// export const STORE_DATA = (data) => {
//     return {
//         type: "STORE_DATA",
//         data
//     };
// };