import React from 'react'

class Imgcontainer extends React.Component{
    constructor(props){
      super(props)
      this.imgref = React.createRef()
      this.state = {span:0}
    }
    componentDidMount(){
      this.imgref.current.addEventListener('load',this.setSpan)
    }
    setSpan = () => {
      const height = this.imgref.current.clientHeight
      const spans = Math.ceil(height/10)
      this.setState({span:spans})
    }
    render(){
        const {description,urls} = this.props.image
  return (
    <div style={{gridRowEnd:`span ${this.state.span}`}}>
      <img alt={description} src={urls.regular} ref={this.imgref}/>
    </div>
  )
}
}

export default Imgcontainer;
