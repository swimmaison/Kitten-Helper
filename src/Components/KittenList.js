import React from 'react'


const KittenList = (props) =>{
console.log(props)
return <h1>
   <article class="panel is-primary">
    <div class="pannel-block is-active">
<span class="panel-icon">
<i class="fas fa-book"></i>
Current Kitties:
<button> 
    {props.name}, {props.dob} months old
        
    </button>
</span>
</div>

</article>
</h1>
}

export default KittenList