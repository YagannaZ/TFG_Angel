<script lang="ts">
    export let src_img: string;
    export let src_audio: string;
</script>

    <div class="play">
            <img class="bandera" src={src_img} alt="Español">
            <audio controls  src={src_audio} id="aes"></audio>
    </div>

<style lang="scss">
  
        .bandera
        {
            width: 28%;
        }

        .play
        {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            >*
            {
                padding: 0.2cqw;
            }
        }

        audio::-webkit-media-controls-current-time-display, audio::-webkit-media-controls-time-remaining-display, audio::-webkit-media-controls-timeline,
        audio::-webkit-media-controls-volume-slider ,audio::-webkit-media-controls-mute-button, audio::-webkit-media-controls-volume-slider-container,
        audio::-webkit-media-controls-volume-slider
        {
            display: none !important;
        }

        audio
        {
            width: 50%;
        }

</style>

