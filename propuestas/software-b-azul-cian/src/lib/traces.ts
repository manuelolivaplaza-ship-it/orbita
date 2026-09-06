export type SpanStatus = "ok" | "warn";

export type Span = {
  id: string;
  service: string;
  op: string;
  start: number;
  duration: number;
  status: SpanStatus;
  detail: string;
};

export type Trace = {
  id: string;
  title: string;
  subject: string;
  place: string;
  total: number;
  spans: readonly Span[];
};

export const traces = {
  puerto: {
    id: "tr_sv_4418",
    title: "Ingreso de camión",
    subject: "PAT-4418 · TCLU-88421",
    place: "Puerto San Vicente",
    total: 233,
    spans: [
      {
        id: "s1",
        service: "gate.ocr",
        op: "leer_patente",
        start: 0,
        duration: 18,
        status: "ok",
        detail:
          "Pórtico 2. Patente PAT-4418 leída al primer frame. Conductor RUT ya conocido en el padrón del turno.",
      },
      {
        id: "s2",
        service: "auth.token",
        op: "habilitar",
        start: 14,
        duration: 14,
        status: "ok",
        detail:
          "ISO vigente, lista negra vacía. Token de patio con vencimiento al cierre de turno, no a las 24 h genéricas.",
      },
      {
        id: "s3",
        service: "yard.slot",
        op: "asignar",
        start: 28,
        duration: 46,
        status: "ok",
        detail:
          "Posición C-14, stack 4B. El slot sale del patio real, no de un plano que nadie actualiza los sábados.",
      },
      {
        id: "s4",
        service: "weigh.bridge",
        op: "pesar",
        start: 90,
        duration: 52,
        status: "ok",
        detail:
          "28,4 t. Dentro de tolerancia. El peso viaja con el contenedor; no se reescribe en packing.",
      },
      {
        id: "s5",
        service: "tos.stack",
        op: "confirmar",
        start: 52,
        duration: 116,
        status: "ok",
        detail:
          "TCLU-88421 queda en 4B. El TOS y el patio leen el mismo identificador. El grupo de WhatsApp no es el canal.",
      },
      {
        id: "s6",
        service: "notify.cabina",
        op: "avisar",
        start: 168,
        duration: 33,
        status: "ok",
        detail:
          "Mensaje al tablet de cabina: C-14, 4B, sin desvío. Se entiende con el sol de frente.",
      },
      {
        id: "s7",
        service: "audit.write",
        op: "firmar",
        start: 188,
        duration: 45,
        status: "ok",
        detail:
          "Evento firmado, hora Santiago. Autor, span padre, resultado. Cuando cambia el turno, la traza no se reinicia.",
      },
    ],
  },
  mutual: {
    id: "tr_ms_90211",
    title: "Reembolso de prestación",
    subject: "Folio 90.211 · Isapre en tramo",
    place: "Mutual del Sur",
    total: 412,
    spans: [
      {
        id: "m1",
        service: "mesa.ingreso",
        op: "recibir",
        start: 0,
        duration: 36,
        status: "ok",
        detail:
          "Boleta y orden leídas. El afiliado no vuelve a dictar el RUT: ya está en la ficha, con dígito verificador.",
      },
      {
        id: "m2",
        service: "clinica.validar",
        op: "prestacion",
        start: 28,
        duration: 64,
        status: "ok",
        detail:
          "Prestación 0301041 coincide con la orden. Prestador en convenio. Sin doble cobro en los últimos 12 meses.",
      },
      {
        id: "m3",
        service: "cobertura.topear",
        op: "calcular",
        start: 88,
        duration: 96,
        status: "warn",
        detail:
          "Tope anual al 78%. El sistema no esconde el recorte: lo muestra en la misma línea, con el saldo que queda.",
      },
      {
        id: "m4",
        service: "caja.liquidar",
        op: "armar",
        start: 178,
        duration: 84,
        status: "ok",
        detail:
          "Monto líquido $86.420. Una sola liquidación. El Excel de tesorería deja de ser la fuente.",
      },
      {
        id: "m5",
        service: "banco.transferir",
        op: "pagar",
        start: 252,
        duration: 110,
        status: "ok",
        detail:
          "Transferencia encolada al banco del afiliado. Reintento automático si el core no responde antes de las 16:00.",
      },
      {
        id: "m6",
        service: "aviso.afiliado",
        op: "notificar",
        start: 348,
        duration: 40,
        status: "ok",
        detail:
          "Correo y SMS con folio, monto y fecha de abono. Sin “su solicitud está en proceso” eterno.",
      },
      {
        id: "m7",
        service: "audit.write",
        op: "firmar",
        start: 372,
        duration: 40,
        status: "ok",
        detail:
          "Traza completa, de la mesa al banco. Un inspector puede seguirla sin pedir una carpeta.",
      },
    ],
  },
  faena: {
    id: "tr_cl_774",
    title: "Orden de trabajo",
    subject: "OT-774 · pala 12 · turno B",
    place: "Cobre Loa",
    total: 318,
    spans: [
      {
        id: "f1",
        service: "pit.dispatch",
        op: "emitir",
        start: 0,
        duration: 42,
        status: "ok",
        detail:
          "OT-774 a pala 12, banco 4. Sale del despacho, no de un radio que se pierde entre el polvo.",
      },
      {
        id: "f2",
        service: "radio.ack",
        op: "confirmar",
        start: 38,
        duration: 54,
        status: "ok",
        detail:
          "Acuse del operador, con señal intermitente. Primero el hecho; después la sincronización. El software no le pide wifi al pit.",
      },
      {
        id: "f3",
        service: "planta.recibir",
        op: "entrada",
        start: 96,
        duration: 70,
        status: "ok",
        detail:
          "Tolva 2 confirma el camión. El lote no cambia de nombre entre el pit y la planta.",
      },
      {
        id: "f4",
        service: "ley.ensayar",
        op: "muestra",
        start: 150,
        duration: 88,
        status: "ok",
        detail:
          "Muestra 774-B. Ley tentativa en el mismo identificador. El laboratorio no abre otra planilla.",
      },
      {
        id: "f5",
        service: "acopio.ubicar",
        op: "asignar",
        start: 210,
        duration: 64,
        status: "ok",
        detail:
          "Stockpile norte, calle 3. El acopio y el turno leen la misma figura.",
      },
      {
        id: "f6",
        service: "turno.cerrar",
        op: "bitacora",
        start: 268,
        duration: 50,
        status: "ok",
        detail:
          "Cierre de OT-774 en bitácora de turno B. Autor, hora Santiago, spans hijos. El relevo no pregunta por radio qué quedó pendiente.",
      },
    ],
  },
} as const satisfies Record<string, Trace>;

export type TraceKey = keyof typeof traces;
