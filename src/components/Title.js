const Title = ({title,subbTitle}) => {
  return (
<div className="section-title">
    <h2>
        {title} <span>{subbTitle}</span>
    </h2>
</div>
)
}

export default Title;