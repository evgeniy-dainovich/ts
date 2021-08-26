// Record<Keys,Type> - упрощает создание mapped типа, если все ключи однотипные

type Dictionary1 = {[key: string]: string | number}

const dic1: Dictionary1 = {}
const dic2: Dictionary1 = {name: 'Garry', level: 3}

type Dictionary2 = Record<string, string | number>

const dic3: Dictionary2 = {name: 'Garry', level: 4}
