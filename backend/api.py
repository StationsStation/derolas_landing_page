from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
from .model import (
    PoolSummary,
    VolumesResponse,
    VolumesSeriesPoint,
    PoolMetricsResponse,
    SharePricePoint,
    AssetRoiPoint,
    AssetRoiSeries,
    TvlPoint,
    FeesPoint,
    LpSharesPoint,
)
app = Flask(__name__)
CORS(app)
PARAMETERS = {'max_connections': {'key': 'max_connections', 'value': '10', 'description': 'Maximum number of allowed connections', 'type': 'integer'}, 'timeout': {'key': 'timeout', 'value': '30', 'description': 'Timeout in seconds', 'type': 'integer'}}


def _days_ago(days: int) -> datetime:
    return datetime.utcnow() - timedelta(days=days)


def _series(last_n: int, fn):
    return [fn(i) for i in range(last_n)]


@app.get('/volumes')
def stub_get_volumes():
    """
    Stub function for GET /volumes
    """
    return jsonify(VolumesResponse(
        series={
            'balancer': [
                VolumesSeriesPoint(
                    total_volume=15278212.90 + i * 150000,
                    derolas_volume=108195.24 + i * 5000,
                    derolas_volume_share_pct=0.71,
                    timestamp_start=_days_ago(3 - i),
                    timestamp_end=_days_ago(2 - i),
                )
                for i in range(3)
            ],
            'derive': [
                VolumesSeriesPoint(
                    total_volume=5000000.0 + i * 100000,
                    derolas_volume=50000.0 + i * 1000,
                    derolas_volume_share_pct=1.0,
                    timestamp_start=_days_ago(3 - i),
                    timestamp_end=_days_ago(2 - i),
                )
                for i in range(3)
            ],
            'cow_swap': [
                VolumesSeriesPoint(
                    total_volume=3000000.0 + i * 80000,
                    derolas_volume=30000.0 + i * 800,
                    derolas_volume_share_pct=1.0,
                    timestamp_start=_days_ago(3 - i),
                    timestamp_end=_days_ago(2 - i),
                )
                for i in range(3)
            ],
            'ethereal': [
                VolumesSeriesPoint(
                    total_volume=2000000.0 + i * 60000,
                    derolas_volume=20000.0 + i * 600,
                    derolas_volume_share_pct=1.0,
                    timestamp_start=_days_ago(3 - i),
                    timestamp_end=_days_ago(2 - i),
                )
                for i in range(3)
            ],
            'hyperliquid': [
                VolumesSeriesPoint(
                    total_volume=4000000.0 + i * 90000,
                    derolas_volume=40000.0 + i * 900,
                    derolas_volume_share_pct=1.0,
                    timestamp_start=_days_ago(3 - i),
                    timestamp_end=_days_ago(2 - i),
                )
                for i in range(3)
            ],
            'thalex': [
                VolumesSeriesPoint(
                    total_volume=1500000.0 + i * 50000,
                    derolas_volume=15000.0 + i * 500,
                    derolas_volume_share_pct=1.0,
                    timestamp_start=_days_ago(3 - i),
                    timestamp_end=_days_ago(2 - i),
                )
                for i in range(3)
            ],
        }
    ).model_dump())

@app.get('/pools')
def stub_get_pools():
    """
    Stub function for GET /pools
    """
    return jsonify([i.model_dump() for i in [
        PoolSummary(
            id='pool1',
            name='Main Pool',
            chain='Ethereum',
            address='0x1234567890abcdef',
            symbol='ETH',
            current_roi_pct=2.0
        ),
        PoolSummary(
            id='pool2',
            name='Secondary Pool',
            chain='Polygon',
            address='0xabcdef1234567890',
            symbol='MATIC',
            current_roi_pct=3.5
        )
    ]])

@app.get('/pools/<poolId>/metrics')
def stub_get_pools_poolId_metrics(poolId):
    """
    Stub function for GET /pools/{poolId}/metrics
    """
    import random
    now = datetime.utcnow()
    
    # Generate more realistic data with some variation
    base_price = 480.0
    share_price_series = _series(30, lambda i: SharePricePoint(
        timestamp=now - timedelta(days=29 - i),
        share_price_usd=base_price + i * 2.5 + random.uniform(-5, 5),
    ))
    
    base_tvl = 450000.0
    tvl_series = _series(30, lambda i: TvlPoint(
        timestamp=now - timedelta(days=29 - i),
        tvl_usd=base_tvl + i * 5000 + random.uniform(-10000, 10000),
    ))
    
    base_fees = 120.0
    fees_series = _series(30, lambda i: FeesPoint(
        timestamp=now - timedelta(days=29 - i),
        fees_usd=max(10.0, base_fees + i * 4 + random.uniform(-10, 10)),
    ))
    
    base_shares = 800.0
    lp_shares_series = _series(30, lambda i: LpSharesPoint(
        timestamp=now - timedelta(days=29 - i),
        shares=base_shares + i * 12 + random.uniform(-5, 5),
    ))
    
    roi_assets = [
        AssetRoiSeries(
            asset_symbol='weETH',
            asset_name='Wrapped EigenLayer ETH',
            series=_series(30, lambda i: AssetRoiPoint(
                timestamp=now - timedelta(days=29 - i),
                cumulative_roi_pct=-5 + i * 0.1 + random.uniform(-0.5, 0.5),
            ))
        ),
        AssetRoiSeries(
            asset_symbol='DEROLAS',
            series=_series(30, lambda i: AssetRoiPoint(
                timestamp=now - timedelta(days=29 - i),
                cumulative_roi_pct=-12 + i * 0.18 + random.uniform(-1, 1),
            ))
        ),
        AssetRoiSeries(
            asset_symbol='DAI',
            series=_series(30, lambda i: AssetRoiPoint(
                timestamp=now - timedelta(days=29 - i),
                cumulative_roi_pct=-2 + i * 0.05 + random.uniform(-0.3, 0.3),
            ))
        )
    ]

    response = PoolMetricsResponse(
        pool_id=poolId,
        current_apr=5.0,
        fees_24h_usd=150.0,
        total_shares=1000.0,
        tvl_usd=500000.0,
        current_share_price_usd=share_price_series[-1].share_price_usd,
        current_roi_pct=roi_assets[1].series[-1].cumulative_roi_pct,
        share_price_series=share_price_series,
        asset_cumulative_roi_series=roi_assets,
        tvl_series=tvl_series,
        fees_series=fees_series,
        lp_shares_series=lp_shares_series
    )
    # Use mode='json' to ensure datetime objects are serialized as ISO strings
    return jsonify(response.model_dump(mode='json'))

