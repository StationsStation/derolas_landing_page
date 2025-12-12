from datetime import datetime
from flask import Flask, jsonify
from flask_cors import CORS
from .generated.models import PoolSummary, VolumesResponse, VolumesSeriesPoint, PoolMetricsResponse, ExchangesResponse
app = Flask(__name__)
CORS(app)
PARAMETERS = {'max_connections': {'key': 'max_connections', 'value': '10', 'description': 'Maximum number of allowed connections', 'type': 'integer'}, 'timeout': {'key': 'timeout', 'value': '30', 'description': 'Timeout in seconds', 'type': 'integer'}}

@app.get('/volumes')
def stub_get_volumes():
    """
    Stub function for GET /volumes
    """
    return jsonify(VolumesResponse(
        series={
            'venue1': [
                VolumesSeriesPoint(
                    exchange_id="thalex",
                    total_volume=1000.0,
                    derolas_volume=200.0,
                    derolas_volume_share_pct=20.0,
                    timestamp_start=datetime.now(),
                    timestamp_end=datetime.now()
                ),
                VolumesSeriesPoint(
                    exchange_id="thalex",
                    total_volume=1500.0,
                    derolas_volume=300.0,
                    derolas_volume_share_pct=20.0,
                    timestamp_start=datetime.now(),
                    timestamp_end=datetime.now()
                ),
                VolumesSeriesPoint(
                    exchange_id="thalex",
                    total_volume=2000.0,
                    derolas_volume=400.0,
                    derolas_volume_share_pct=20.0,
                    timestamp_start=datetime.now(),
                    timestamp_end=datetime.now()
                ),
            ],
            'venue2': [
                VolumesSeriesPoint(
                    exchange_id="derive",
                    total_volume=500.0,
                    derolas_volume=50.0,
                    derolas_volume_share_pct=10.0,
                    timestamp_start=datetime.now(),
                    timestamp_end=datetime.now()
                ),
                VolumesSeriesPoint(
                    exchange_id="derive",
                    total_volume=800.0,
                    derolas_volume=80.0,
                    derolas_volume_share_pct=10.0,
                    timestamp_start=datetime.now(),
                    timestamp_end=datetime.now()
                ),
                VolumesSeriesPoint(
                    exchange_id="derive",
                    total_volume=1200.0,
                    derolas_volume=120.0,
                    derolas_volume_share_pct=10.0,
                    timestamp_start=datetime.now(),
                    timestamp_end=datetime.now()
                ),
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
    return jsonify(
        PoolMetricsResponse(
            pool_id='pool1',
            current_apr=5.0,
            fees_24h_usd=150.0,
            total_shares=1000.0,
            tvl_usd=500000.0,
            current_share_price_usd=500.0,
            current_roi_pct=2.0,
            share_price_series=[],
            asset_cumulative_roi_series=[],
            tvl_series=[],
            fees_series=[],
            lp_shares_series=[]
        ).model_dump()
    )

@app.get("/exchanges")
def get_exchanges():
    return jsonify(
        ExchangesResponse(exchanges=[]).model_dump())



