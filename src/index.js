import React from 'react';
import ReactDOM from 'react-dom';
import CounterContext from './contexts/counter';
import Counter from './components/counter'; // インクリメント、デクリメントボタン

class App extends React.Component {
  constructor(props) {
    super(props)

    // このコンポーネントでインクリメント、デクリメントの挙動を定義するのでバインディングする
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

    // stateの初期化
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <Counter />
      </CounterContext.Provider>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
