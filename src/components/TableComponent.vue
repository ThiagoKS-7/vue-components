<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: ()=> "Default Title",
  },
  columns: {
    type: Array,
    required: false,
    default: () =>['Id', 'Name', 'Poles', 'Podiums', 'Wins', 'Points', 'Championships'],
  },
  data: {
    type: Array,
    required: false,
    default: () =>[
    {'id': 1, 'name': 'Verstappen', 'poles': 37, 'podiums': 54, 'wins': 4, 'points': 2065.4, 'championships':6},
    {'id': 2, 'name': 'Verstappen', 'poles': 37, 'podiums': 54, 'wins': 4, 'points': 565.56, 'championships':6},
    {'id': 3, 'name': 'Verstappen', 'poles': 37, 'podiums': 54, 'wins': 4, 'points': 5432.2, 'championships':6}
    ]
  }
})
</script>
<template>
    <table>
        <caption>
            {{ title }}
        </caption>

        <tr>
            <th v-for="heading in columns" :key="heading">{{ heading }}</th>
        </tr>

        <tr v-for="object in data" :key="object.id">
            <td v-for="key in Object.keys(object)" :key="object[key]" :data-cell="key">
                {{ object[key] }}
            </td>
        </tr>
    </table>
</template>
<script>
export default {
  name: "TableComponent",
}
</script>

<style scoped>
table {
    width:100%;
    border-collapse: collapse;
    background: #323232;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

caption, th,td {
    text-align: left;
    padding: 1rem;
}

caption {
    width: inherit;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
}


th {
    background: hsl(231, 85%, 18%);
}
th:hover {
    cursor: pointer;
    background: hsl(231, 79%, 26%);
    color: rgb(206, 202, 202);
}
th:first-of-type {
    border-top-left-radius: 1rem;
}
th:last-of-type {
    border-top-right-radius: 1rem;
}


td:hover {
    opacity: 1;
    cursor: pointer;
    color: white;
}
tr:nth-of-type(even) {
    background: hsl(0 0% 0%/0.1);
}
tr:hover, tr:nth-of-type(even):hover {
    background: hsl(0 0% 0%/0.3);
}
</style>