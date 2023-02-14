<script lang="ts">
	import { Section } from '@smui/top-app-bar';
	import Fab, { Icon } from '@smui/fab';
	import { AX__CONST__homeUrl } from '@app/domain/DATA/clientend/ui-frame/AX__CONST__homeUrl';
</script>

<!-- #######################################################  -->
<!-- HEADER CMS -->
<!-- ####################################################### -->
<!-- TODO - BUG - align=START -> car sinon, en END, il me le fait disparaitre a cause du drawer -->
<!-- <Section align="end"> -->
<Section a>
	<a href={AX__CONST__homeUrl} rel="prefetch">
		<Fab mini>
			<!-- <img src="media/ax/3.jpg" alt="" /> -->
			<Icon class="material-icons">login</Icon>
		</Fab>
	</a>
</Section>
<!-- mdc-top-app-bar__ -->
