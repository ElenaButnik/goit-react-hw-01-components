import PropTypes from 'prop-types';

export default function StatList({stats, title}){
return (<section class="statistics">
<h2 class="title">{title && 'Upload stats'}</h2>
 <ul>
{stats.map(({id, label, percentage}) => {
    return (
    <li key={id} class="item">
    <span class="label">{label}</span>
    <span class="percentage">{percentage}</span>
  </li>    
    ) 
} 
)} 
</ul>
</section>
)};

StatList.propTypes = {
    title:PropTypes.bool,
    stats:PropTypes.arrayOf(PropTypes.object),
}