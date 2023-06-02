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
    {'id': 3, 'name': 'Verstappen', 'poles': 37, 'podiums': 54, 'wins': 4, 'points': 5432.2, 'championships':6},
    ]
  }
})
</script>
<template>
    <table aria-label="default-table" name="defaultTable" role="table">
        <caption aria-label="table-title" name="tableTitle" role="table-title">
            {{ title }}
        </caption>

        <div 
            aria-label="scrolling-wrapper" 
            class="scrolling-wrapper"
            role="wrapper" 
            name="scrollingWrapper" 
        >
            <tr
                aria-label="table-header" 
                role="table-header" 
                name="tableHeader" 
            >
                <th 
                    aria-label="table-heading" 
                    role="table-heading" 
                    name="tableHeading" 
                    v-for="columnName in columns" :key="columnName"
                    @click="emitOrder(columnName)"
                >
                    {{ columnName }}
                </th>
            </tr>

            <tbody aria-label="table-body" role="body" name="tableBody">
                <tr 
                    aria-label="content-row"
                    role="content-row" 
                    name="contentRow" 
                    v-for="jsonObj in data" :key="jsonObj.id"
                >
                    <td 
                        aria-label="table-cell" 
                        role="table-cell"
                        name="tableCell" 
                        v-for="key in Object.keys(jsonObj)" :key="jsonObj[key]" :data-cell="key"
                    >
                        {{ jsonObj[key] }}
                    </td>
                </tr>
            </tbody>
        </div>
    </table>
</template>
<script>
export default {
  name: "TableComponent",
  data() {
    return {
        currentOrder: "",
        orderJson: {
            column: "",
            order: ""
        }
    }
  }, 
  methods: {
    emitOrder(columnName) {
        this.orderJson.column = columnName;
        this.orderJson.order = this.toggleOrder();
        this.$emit("orderBy", this.orderJson);
    },
    toggleOrder() {
        switch (this.currentOrder) {
            case "asc":
                return "desc";
            case "desc":
                return "";
            default:
                return "asc";
        }
    }
  }
}
</script>

<style scoped>
.scrolling-wrapper {
    max-height: 500px;
    overflow-y: auto;
    padding: 0 1.5em;
}
table {
    width:100%;
    border-collapse: collapse;
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
    color: rgb(230, 228, 228);
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
th:first-of-type, th:first-of-type:hover {
    border-top-left-radius: 1rem;
}
th:last-of-type {
    border-top-right-radius: 1rem;
}

.body {
    max-height: 100px;
    overflow-y: scroll;
}

td:hover {
    opacity: 1;
    cursor: pointer;
    color: white;
    background: hsl(0 0% 0%/0.3);
}
tr:nth-of-type(even) {
    background: hsla(0, 0%, 32%, 0.1);
}

@media (max-width: 650px) {
    table {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    th {
        display: none;
    }
    caption {
        background: hsl(231, 85%, 18%);
        border-top-left-radius: 0.7rem;
        border-top-right-radius: 0.7rem;
    }

    td {
        display: grid;
        grid-template-columns: 20ch auto;
        padding: 0.75rem 1rem;
    }

    td::before {
        content: attr(data-cell) ": ";
        font-weight: 700;
        text-transform: capitalize;
        transition: all 1s ease-in-out;
    }
    .scrolling-wrapper {
        max-height: 500px;
        overflow-y: auto;
    }
}
</style>