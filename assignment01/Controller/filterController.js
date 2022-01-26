const axios = require('axios');
let allData = []

async function getEvent() {
    try {
        await axios.get('https://www.gov.uk/bank-holidays.json').then((response) => {
            allData = response.data
        })
            .catch((error) => {
                console.log(error);
            })
    } catch (error) {
        console.error(error);
    }
}



exports.getDataByFilter = async (req, res) => {
    await getEvent();
    const country = req.body.country;
    const event = req.body.event;
    const eventsByCountry = allData[country]
    const currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()
    month = month + 1
    let day = currentDate.getDate()
    try {
        if (event === "yesterday") {
            const eventYesterday = await eventsByCountry.events.filter((obj) => {
                if (day - 1 < 1) {
                    day = 30
                    month = month -1
                    if(month == 0){
                        year = year -1
                    }
                }
                if (obj.date.slice(0, 4) == year && obj.date.slice(5, 7) == month && obj.date.slice(7, 10) == day - 1) {
                    return obj
                }
            })
            res.send({
                success: true,
                data: {
                    division: country,
                    events: eventYesterday
                }
            })
        }
        if (event === "last7Day") {
            if(day-7 <1){
                day = 30
                month = month -1
            }
            const eventYesterday = await eventsByCountry.events.filter((obj) => {
                if (obj.date.slice(0, 4) == year && obj.date.slice(5, 7) == month && parseInt(obj.date.slice(7, 10)) < day && parseInt(obj.date.slice(7, 10)) >= day - 7) {
                    return obj
                }
            })
            res.send({
                success: true,
                data: {
                    division: country,
                    events: eventYesterday
                }
            })
        }
        if (event === "Last30Days") {
            const eventYesterday = await eventsByCountry.events.filter((obj) => {
                if (month - 1 == 0) {
                    month = 12
                    year = year -1
                }
                if (obj.date.slice(0, 4) == year && parseInt(obj.date.slice(5, 7)) == month) {
                    return obj
                }
            })
            res.send({
                success: true,
                data: {
                    division: country,
                    events: eventYesterday
                }
            })
        }
        res.send({
            success: true,
            data: eventsByCountry
        })
    } catch (err) {
        console.log(err)
    }

}