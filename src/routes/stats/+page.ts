import { env as publicEnv } from '$env/dynamic/public';
import { dev } from '$app/environment';
import { DefaultService, OpenAPI, type PoolMetricsResponse, type PoolSummary, type VolumesResponse } from '$lib/api';
import type { PageLoad } from './$types';

// Prefer user-provided env; otherwise default to your local Flask dev server
const API_BASE =
	publicEnv.PUBLIC_API_BASE ?? (dev ? 'http://127.0.0.1:5000' : 'https://api-placeholder.example.com');
const LOOKBACK_DAYS = 30;

export const ssr = false;

export const load: PageLoad = async () => {
	OpenAPI.BASE = API_BASE;

	let volumes: VolumesResponse | null = null;
	let pools: PoolSummary[] = [];
	let poolMetrics: PoolMetricsResponse | null = null;
	let error: string | null = null;

	try {
		[volumes, pools] = await Promise.all([DefaultService.getVolumes(), DefaultService.listPools()]);

		const primaryPool = pools.at(0);
		if (primaryPool) {
			const end = new Date();
			const start = new Date(end);
			start.setDate(end.getDate() - LOOKBACK_DAYS);

			poolMetrics = await DefaultService.getPoolMetrics(
				primaryPool.id,
				start.toISOString(),
				end.toISOString(),
				'1d'
			);
		}
	} catch (err) {
		error = err instanceof Error ? err.message : 'Failed to load stats data';
	}

	return {
		apiBase: API_BASE,
		volumes,
		pools,
		poolMetrics,
		error
	};
};
