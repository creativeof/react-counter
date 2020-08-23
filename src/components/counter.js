import React from 'react'
import CounterContext from '../contexts/counter'

// このコンポーネントはstate lessコンポーネントで状態をもたないので関数で記載
// コンポーネントをリターンしたいので{}ではなく、()
const Counter = () => (
  // ProviderでラップされてるのでConsumerを使うことができる（CounterContextに対応するConsumer）
  // ConsumerというContextは中に関数を書く（引数にProviderでvalueに設定した値や関数を受け取ることができる）
  // Consumerは値を受け取ることを前提とした設計になっている
  <CounterContext.Consumer>
    {
      ({ count, increment, decrement }) => {
        return (
          <React.Fragment>
            <div>count: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
          </React.Fragment>
        )
      }
    }
  </CounterContext.Consumer>
)

// このコンポーネントをexport
export default Counter