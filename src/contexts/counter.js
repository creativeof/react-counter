import { createContext } from 'react'

// createContextを使ってcontextを作成
const CounterContext = createContext()
// createContextはデフォルト値を与えることもできる
// const CounterContext = createContext({age: 10})

// 外部のファイルでも使えるようにexportする
export default CounterContext
