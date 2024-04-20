import config from '../config'

function Category({ title, details}) {
  return (
    <div
      style={{ display: 'inline-block', marginRight: 20, textAlign: 'center' }}
    >
     
      <div style={{ fontWeight: '600', fontSize: 15 }}><h4>{title}</h4></div>
      <div style={{ fontWeight: '600', fontSize: 15 }}>{details}</div>
    </div>
  )
}

export default Category
