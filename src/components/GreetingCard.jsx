export default function GreetingCard({firstName, age}) {
// export default function GreetingCard(props){
    // const { firstName } = props **destructuring method1
    return (
        <div className="GreetingCard">
            <h3>Hello {firstName} ({age})! </h3> 
            {/* 2nd cb indicates js */}
        </div>
            
    )
}