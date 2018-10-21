
export function replace(svg = '', map = []){
    let pos = 0;
    svg = svg.replace(/>(#)(?=<\/tspan>)/ig, (match, p1) => {
        let text = '>' + (map[pos] === undefined ?  pos : map[pos]);
        pos ++;
        return text
    });
    return svg
}


const pageOne = [
    '张三',
    '√',
    '',
    '',
    '√',
    '', // 5
    //事故信息
    '',
    '√',
    '1',
    '1000',
    '瑞金医院', //10
    '',
    '230004567',
    '',
    '13544445555',
    '2020/10/10', //15
    'zhang',
    'qq.com',
    '2018/09/17',
    '2017/03/22',
    '√',//20
    '',
    '2',
    '2340',
    '瑞金医院',
    '甲状腺肿瘤',//25
    //申请人信息
    '',
    '√',
    '',
    '张三',
    '17723456543',//30
    '',
    '',
    '√',
    '',
    '',//35
    ...('2300221978112756193'.split('')),
    'zhang',//55
    'qq.com',
    '张三',
    ...('22222222222222222226'.split('')),
    '浦东支行',
    '工商银行',//79
    ...('2300221978112756193'.split('')),
]

const pageTwo = [];

const pageThree = [
    '2018',
    '10',
    '15'
]

export const maps = [pageOne, pageTwo, pageThree];