export default function Dashboard(props){
    console.log(props);
    return<>
        <div>Dashboard {props.match.params.id}</div>
    </>
}