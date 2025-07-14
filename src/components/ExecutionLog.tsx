import React from 'react';
import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

interface LogEntry {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  timestamp: Date;
}

interface ExecutionLogProps {
  logs: LogEntry[];
  onClear: () => void;
}

export const ExecutionLog: React.FC<ExecutionLogProps> = ({ logs, onClear }) => {
  const getIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getTextColor = (type: LogEntry['type']) => {
    switch (type) {
      case 'success':
        return 'text-green-700';
      case 'warning':
        return 'text-yellow-700';
      case 'error':
        return 'text-red-700';
      default:
        return 'text-blue-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">Execution Log</h3>
        <button
          onClick={onClear}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md transition-colors"
        >
          Clear
        </button>
      </div>
      
      <div className="h-48 overflow-y-auto p-4">
        {logs.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <Info className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p>No execution logs yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start space-x-3 p-2 rounded-md bg-gray-50">
                {getIcon(log.type)}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${getTextColor(log.type)}`}>
                    {log.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {log.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};