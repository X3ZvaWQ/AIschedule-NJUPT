function scheduleHtmlParser(parm) {
    let valid_tds = parm.split('@@##@@')
    let generateWeeks = (start, end, odd) => Array(end-start+1).fill(start).map((el,i)=>start+i).filter((x) => odd==-1||(x%2-odd))
    let day2int = {一:1, 二:2, 三:3, 四:4, 五:5, 六:6, 日:7};
    let generateSections = (text) => {
        let int_sections = text.split(',');
        let arr_sections = [];
        for(let i in int_sections) {
            arr_sections.push({
                section: int_sections[i]
            });
        }
        return arr_sections;
    }
    let courseInfos = [];
    for(let i in valid_tds) {
        let matches = valid_tds[i].match(/(\S+)\<br\>周(\S)第(\S+)节\{第(\d+)\-(\d+)周\|?(单周|双周)?\}\<br\>(\S+)\<br\>(\S+)/);
        let courseInfo = {
           name: matches[1],
           position: matches[8],
           teacher: matches[7],
           weeks: generateWeeks(Number(matches[4]), Number(matches[5]), 
                    matches[6] == undefined ? -1 : (
                    matches[6] == '单周' ? 0 : 1)),
           day: day2int[matches[2]],
           sections: generateSections(matches[3])
        };
        courseInfos.push(courseInfo);
    }
    let returnValue = {
        courseInfos: courseInfos,
        sectionTimes: [
          {
            section: 1,
            startTime: "08:00",
            endTime: "08:45"
          },
          {
            section: 2,
            startTime: "08:50",
            endTime: "09:35"
          },
          {
            section: 3,
            startTime: "09:50",
            endTime: "10:35"
          },
          {
            section: 4,
            startTime: "10:40",
            endTime: "11:25"
          },
          {
            section: 5,
            startTime: "11:30",
            endTime: "12:15"
          },
          {
            section: 6,
            startTime: "13:45",
            endTime: "14:30"
          },
          {
            section: 7,
            startTime: "14:35",
            endTime: "15:20"
          },
          {
            section: 8,
            startTime: "15:35",
            endTime: "16:20"
          },
          {
            section: 9,
            startTime: "16:25",
            endTime: "17:10"
          },
          {
            section: 10,
            startTime: "18:30",
            endTime: "19:15"
          },
          {
            section: 11,
            startTime: "19:25",
            endTime: "20:10"
          },
          {
            section: 12,
            startTime: "20:20",
            endTime: "21:05"
          }
        ]
    };
    return returnValue;
}