import MetaTrader5 as mt5
from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.post('/connect')
def connect(server: str, login: int, password: str):
    if not mt5.initialize():
        return {'success': False, 'error': 'MT5 initialization failed'}

    result = mt5.login(login, password=password, server=server)
    if not result:
        return {'success': False, 'error': mt5.last_error()}
    return {'success': True}

@app.get('/account')
def get_account():
    info = mt5.account_info()
    return info._asdict() if info else {'error': 'No account info available'}

@app.get('/positions')
def get_positions():
    positions = mt5.positions_get()
    return [p._asdict() for p in positions] if positions else []

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
