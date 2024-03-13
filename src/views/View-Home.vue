<template>
    <div class="home">
        <table class="t1">
            <thead>
                <tr>
                    <th>SELECT experience FROM my_life;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Leadership and Team Management</td>
                </tr>
                <tr>
                    <td>Financial and Office Administration</td>
                </tr>
                <tr>
                    <td>E-commerce Sales / Customers Service</td>
                </tr>
            </tbody>
        </table>
        <table class="t2">
            <thead>
                <tr>
                    <th>SELECT traits FROM my_personality<br />LIMIT 3;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Adaptability</td>
                </tr>
                <tr>
                    <td>Empathy</td>
                </tr>
                <tr>
                    <td>Initiative</td>
                </tr>
            </tbody>
        </table>
        <table class="t3">
            <thead>
                <tr>
                    <th>SELECT favorite FROM my_personality;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Personal manners</td>
                </tr>
                <tr>
                    <td>Swimming</td>
                </tr>
                <tr>
                    <td>Volvos</td>
                </tr>
            </tbody>
        </table>
        <table class="t4 twoColumns">
            <thead>
                <th colspan="2">SELECT goal, progress FROM my_roadmap<br />ORDER BY progress DESC LIMIT 3;</th>
            </thead>
            <tbody>
                <tr>
                    <td>Self-learning English from scratch.</td>
                    <td>66%</td>
                </tr>
                <tr>
                    <td>Refresh German language</td>
                    <td>44%</td>
                </tr>
                <tr>
                    <td>Code perfect App</td>
                    <td>33%</td>
                </tr>
            </tbody>
        </table>
        <table class="t5">
            <thead>
                <tr>
                    <th>SELECT dream FROM my_imagination<br />ORDER BY rating DESC LIMIT 1;</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Swimming in a large lake<br />in the middle of a dense wild forest<br />surrounded by happy
                        people.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
}

table {
    border-collapse: collapse;
    border-radius: 15px;
    margin: auto;
    overflow: hidden;
    transition: transform 0.3s ease;
    width: 90%;
}

table:hover {
    transform: scale(1.05);
}

thead {
    background-color: var(--hover-bg);
    border-bottom: 2px solid var(--green);
}

th {
    font-size: min(2.8vmin, 20px);
    font-weight: bold;
    padding: 0.8em 0.6em;
}

td {
    color: var(--text);
    font-size: min(2.6vmin, 18px); /* Responsywne dostosowanie rozmiaru czcionki dla komórek */
    padding: 0.3em;
    text-align: center;
}

@media (min-width: 980px) {
    table {
        width: 100%;
    }
}
</style>
