# Lazy Loading
- Suppose Dashboard has
```
Charts

Map

Reports
```
No Need to load everything Immediatly.

Chart.jsx
```
export default function Chart(){

return(

<h1>

Employee Chart

</h1>

)

}

```
- Dashboard/page.jsx
```
 import dynamic from "next/dynamic";
const Chart=dynamic(
  ()=>import("../components/chart.jsx"),{
    loading:()=><p>Chart is Loading....</p>
  }
);
export const metadata={
  title:"Employee Dashboard",
  description:"This page will Give you an idea about Details of an Employees"
}
export default function Dashboard() {

  return (

    <div>

      <h1>Dashboard</h1>

      <p>
        Protected Page
      </p>
      <Chart/>

    </div>
  );
}
```
### Conclusion
```
initially Dashboard Loads Immediately and Chart Downloads Later.
```