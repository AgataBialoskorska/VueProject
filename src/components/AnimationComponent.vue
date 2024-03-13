<script>
const aHover = (e) => {
    e.target.classList.add('animation')
}

const aNotHover = (e) => {
    e.target.classList.remove('animation')
}

export { aHover, aNotHover }
</script>
<style>
.animation {
    animation: scaleAnimation 2s linear infinite;
}
</style>
