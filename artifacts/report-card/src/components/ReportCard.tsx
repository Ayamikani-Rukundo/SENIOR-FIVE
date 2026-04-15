import React from 'react';

export default function ReportCard() {
  return (
    <div className="report-sheet" style={{ width: '920px', backgroundColor: '#ffffff', padding: '20px 22px 0' }}>
    <div
      style={{
        width: '100%',
        fontFamily: "'Times New Roman', Times, serif",
        fontSize: '12px',
        padding: '18px 22px 18px',
        lineHeight: 1.3,
        backgroundColor: '#ffffff',
        color: '#000000',
        border: '1.5px solid #000000',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', gap: '24px' }}>
        <div>
          <p style={{ fontWeight: 'bold', fontSize: '13px', margin: 0 }}>REPUBLIC OF RWANDA</p>
          <p style={{ fontWeight: 'bold', fontSize: '13px', margin: 0 }}>MINISTRY OF EDUCATION</p>
          <p style={{ fontWeight: 'bold', fontSize: '13px', margin: 0 }}>NYAGATARE SECONDARY SCHOOL</p>
          <img
            src="/school-logo.png"
            alt="Nyagatare Secondary School Logo"
            style={{
              display: 'block',
              margin: '2px 0 2px',
              width: '105px',
              height: '105px',
              objectFit: 'contain',
            }}
          />
          <p style={{ fontSize: '11px', margin: 0, fontWeight: 'bold' }}>P.O.Box : 25.NYAGATARE</p>
          <p style={{ fontSize: '11px', margin: 0, fontWeight: 'bold' }}>Tel: +250788761944</p>
          <p style={{ fontSize: '11px', margin: 0, fontWeight: 'bold' }}>Email: nshekeschool@yahoo.com</p>
        </div>
        <div style={{ paddingTop: '20px', minWidth: '420px' }}>
          <table style={{ fontSize: '12px', borderCollapse: 'collapse' }}>
            <tbody>
              <InfoRow label="OPTION" value="Mathematics-Physics-Computer Science" />
              <InfoRow label="YEAR" value="2023/24" />
              <InfoRow label="CLASS" value="S4 MPC" />
              <InfoRow label="NAMES" value="EMMANUEL RUKUNDO AYAMIKANI" />
              <InfoRow label="REG N°" value="20232485648" />
            </tbody>
          </table>
        </div>
      </div>

      {/* Title */}
      <div style={{ border: '2px solid #000000', margin: '8px 0 10px', padding: '2px 10px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '14px', fontWeight: 'bold', margin: 0, letterSpacing: '0.2px' }}>
          STUDENT ACADEMIC REPORT
        </h2>
      </div>

      {/* Main Table */}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '11px',
          textAlign: 'center',
          borderTop: '2px solid #000000',
          borderBottom: '2px solid #000000',
          borderLeft: '3px solid #000000',
          borderRight: '3px solid #000000',
        }}
      >
        <thead>
          {/* Row 1: top-level group headers */}
          <tr>
            <TH
              rowSpan={3}
              style={{
                textAlign: 'left',
                width: '130px',
                paddingLeft: '4px',
                fontSize: '11px',
                fontWeight: 'bold',
                backgroundColor: HEADER_GRAY,
                ...cellBorder,
              }}
            >
              SUBJECTS
            </TH>
            <TH colSpan={3} style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>MAXIMUM</TH>
            <TH colSpan={4} style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>1<sup>st</sup> Term</TH>
            <TH colSpan={4} style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>2<sup>nd</sup> Term</TH>
            <TH colSpan={4} style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>3<sup>rd</sup> Term</TH>
            <TH colSpan={4} style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>GENERAL TOTAL</TH>
            <TH
              rowSpan={3}
              style={{ fontSize: '9px', width: '28px', backgroundColor: HEADER_GRAY, ...cellBorder, lineHeight: 1.2 }}
            >
              2<sup>nd</sup><br />Sittin<br />%
            </TH>
          </tr>

          {/* Row 2: sub-column headers */}
          <tr>
            <TH rowSpan={2} style={{ width: '26px', backgroundColor: HEADER_GRAY, ...cellBorder }}>CAT</TH>
            <TH rowSpan={2} style={{ width: '26px', backgroundColor: HEADER_GRAY, ...cellBorder }}>EX</TH>
            <TH rowSpan={2} style={{ width: '30px', backgroundColor: HEADER_GRAY, ...cellBorder }}>TOT</TH>

            <TH style={{ width: '28px', backgroundColor: HEADER_GRAY, ...cellBorder }}>CAT</TH>
            <TH style={{ width: '26px', backgroundColor: HEADER_GRAY, ...cellBorder }}>EX</TH>
            <TH rowSpan={2} style={{ width: '32px', backgroundColor: HEADER_GRAY, ...cellBorder }}>TOT</TH>
            <TH rowSpan={2} style={{ width: '22px', backgroundColor: HEADER_GRAY, ...cellBorder }}>GR</TH>

            <TH style={{ width: '28px', backgroundColor: HEADER_GRAY, ...cellBorder }}>CAT</TH>
            <TH style={{ width: '26px', backgroundColor: HEADER_GRAY, ...cellBorder }}>EX</TH>
            <TH rowSpan={2} style={{ width: '32px', backgroundColor: HEADER_GRAY, ...cellBorder }}>TOT</TH>
            <TH rowSpan={2} style={{ width: '22px', backgroundColor: HEADER_GRAY, ...cellBorder }}>GR</TH>

            <TH style={{ width: '28px', backgroundColor: HEADER_GRAY, ...cellBorder }}>CAT</TH>
            <TH style={{ width: '26px', backgroundColor: HEADER_GRAY, ...cellBorder }}>EX</TH>
            <TH rowSpan={2} style={{ width: '32px', backgroundColor: HEADER_GRAY, ...cellBorder }}>TOT</TH>
            <TH rowSpan={2} style={{ width: '22px', backgroundColor: HEADER_GRAY, ...cellBorder }}>GR</TH>

            <TH style={{ width: '28px', backgroundColor: HEADER_GRAY, ...cellBorder }}>MAX</TH>
            <TH style={{ width: '32px', backgroundColor: HEADER_GRAY, ...cellBorder }}>TOT</TH>
            <TH style={{ width: '32px', backgroundColor: HEADER_GRAY, ...cellBorder }}>%</TH>
            <TH style={{ width: '22px', backgroundColor: HEADER_GRAY, ...cellBorder }}>GR</TH>
          </tr>

          {/* Row 3: max values row */}
          <tr>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>40</TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>40</TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>40</TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>120</TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>120</TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>100.0</TH>
            <TH style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TH>
          </tr>
        </thead>

        <tbody>
          {/* BEHAVIOUR row */}
          <tr style={{ backgroundColor: HEADER_GRAY }}>
            <TD left bold style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>
              BEHAVIOUR
            </TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD bold style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}>40</TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
            <TD style={{ backgroundColor: HEADER_GRAY, ...cellBorder }}></TD>
          </tr>

          {/* CORE */}
          <SectionHeader label="CORE" cols={21} />
          <SubjectRow name="MATHEMATICS"      max={[70,70,140]} t1={[65.0,64.4,129.4,'A']} t2={[62.3,56.0,118.3,'B']} t3={[59.1,65.1,124.3,'A']} gen={[420,372.0,88.6,'A']} />
          <SubjectRow name="PHYSICS"          max={[70,70,140]} t1={[63.0,55.3,118.3,'B']} t2={[51.5,51.7,103.1,'C']} t3={[58.1,60.3,118.4,'B']} gen={[420,339.8,80.9,'B']} />
          <SubjectRow name="COMPUTER SCIENCE" max={[70,70,140]} t1={[67.7,65.1,132.8,'A']} t2={[54.1,51.8,105.9,'C']} t3={[63.0,65.8,128.8,'A']} gen={[420,367.5,87.5,'A']} />

          {/* SUBSIDIARY */}
          <SectionHeader label="SUBSIDIARY" cols={21} />
          <SubjectRow name="ENTREPRENEURSHIP"               max={[30,30,60]} t1={[25.2,29.0,54.2,'A']} t2={[27.4,20.7,48.0,'B']} t3={[22.5,24.6,47.1,'C']} gen={[180,149.3,82.9,'B']} />
          <SubjectRow name={'GENERAL STUDIES &\nCOMM. SKILLS'} max={[30,30,60]} t1={[30.0,29.7,59.7,'A']} t2={[27.0,29.0,56.0,'A']} t3={[27.6,29.7,57.3,'A']} gen={[180,173.0,96.1,'A']} />

          {/* NON CORE SUBJECT */}
          <SectionHeader label="NON CORE SUBJECT" cols={21} />
          <SubjectRow name="KINYARWANDA" max={[30,30,60]} t1={[25.0,26.0,51.0,'A']} t2={[22.0,20.0,42.0,'C']} t3={[26.0,24.0,50.0,'B']} gen={[180,143.0,79.4,'C']} />
          <SubjectRow name="ENGLISH"     max={[30,30,60]} t1={[21.5,27.5,49.0,'B']} t2={[21.6,25.0,46.6,'C']} t3={[26.3,18.5,44.8,'C']} gen={[180,140.4,78.0,'C']} />
          <SubjectRow name="FRENCH"      max={[30,30,60]} t1={[18.0,17.0,35.0,'E']} t2={[15.8,18.0,33.8,'E']} t3={[18.0,18.0,36.0,'D']} gen={[180,104.8,58.2,'E']} />

          {/* Gray separator between last subject and totals */}
          <SectionDivider cols={21} />

          {/* GENERAL TOTAL row */}
          <tr>
            <TD bold left style={{ ...cellBorder }}>GENERAL TOTAL</TD>
            <TD bold style={cellBorder}>360</TD>
            <TD bold style={cellBorder}>360</TD>
            <TD bold style={{ ...cellBorder }}>720</TD>
            <TD bold style={cellBorder}>315.4</TD>
            <TD bold style={cellBorder}>314.0</TD>
            <TD bold style={cellBorder}>629.4</TD>
            <TD bold style={{ ...cellBorder }}></TD>
            <TD bold style={cellBorder}>281.7</TD>
            <TD bold style={cellBorder}>272.2</TD>
            <TD bold style={cellBorder}>553.7</TD>
            <TD bold style={{ ...cellBorder }}></TD>
            <TD bold style={cellBorder}>300.6</TD>
            <TD bold style={cellBorder}>306.0</TD>
            <TD bold style={cellBorder}>606.7</TD>
            <TD bold style={{ ...cellBorder }}></TD>
            <TD bold style={cellBorder}>2160</TD>
            <TD bold style={cellBorder}>1789.8</TD>
            <TD bold style={cellBorder}>82.8</TD>
            <TD bold style={{ ...cellBorder }}></TD>
            <TD style={cellBorder}></TD>
          </tr>

          {/* PERCENTAGE */}
          <tr>
            <TD bold left style={{ ...cellBorder }}>PERCENTAGE</TD>
            <TD colSpan={3} style={{ ...cellBorder }}></TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>87.4%</TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>76.9%</TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>84.2%</TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>82.8%</TD>
            <TD style={cellBorder}></TD>
          </tr>

          {/* POSITION */}
          <tr>
            <TD bold left style={{ ...cellBorder }}>POSITION</TD>
            <TD colSpan={3} style={{ ...cellBorder }}></TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>1 out of 41</TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>1 out of 42</TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>1 out of 42</TD>
            <TD bold colSpan={4} style={{ ...cellBorder, textAlign: 'right', paddingRight: '4px' }}>1 out of 42</TD>
            <TD style={cellBorder}></TD>
          </tr>

          {/* Teacher's Remarks */}
          <tr>
            <TD bold left colSpan={4} style={{ ...cellBorder }}>Teacher's Remarks<br />&amp; Signature</TD>
            <TD colSpan={4} style={{ ...cellBorder }}></TD>
            <TD colSpan={4} style={{ ...cellBorder }}></TD>
            <TD colSpan={4} style={{ ...cellBorder }}></TD>
            <TD colSpan={5} style={{ ...cellBorder }}></TD>
          </tr>

          {/* Parents Signature */}
          <tr>
            <TD bold left colSpan={4} style={{ ...cellBorder }}>Parents Signature</TD>
            <TD colSpan={4} style={{ ...cellBorder }}></TD>
            <TD colSpan={4} style={{ ...cellBorder }}></TD>
            <TD colSpan={4} style={{ ...cellBorder }}></TD>
            <TD colSpan={5} style={{ ...cellBorder }}></TD>
          </tr>
        </tbody>
      </table>

      {/* Decision Taken */}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '18px',
          border: '1px solid #000000',
          fontSize: '11px',
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                border: '1px solid #000000',
                padding: '6px 10px',
                fontWeight: 'bold',
                textDecoration: 'underline',
                width: '30%',
                verticalAlign: 'middle',
                fontSize: '12px',
                whiteSpace: 'nowrap',
              }}
            >
              DECISION TAKEN
            </td>

            <td
              style={{
                border: '1px solid #000000',
                padding: '4px 10px',
                verticalAlign: 'top',
                width: '20%',
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                1<sup>st</sup> <span style={{ textDecoration: 'underline' }}>SITTING</span>
              </div>
              {[
                { label: 'PROMOTED', checked: true },
                { label: 'TRY ELSEWHERE', checked: false },
                { label: 'REPEAT', checked: false },
                { label: 'EXCLUDED', checked: false },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1px', paddingRight: '20px' }}>
                  <span style={{ fontWeight: 'bold' }}>{item.label}{item.checked ? ' ✓' : ''}</span>
                  <span style={{ display: 'inline-block', width: '13px', height: '13px', border: '1px solid #000000', flexShrink: 0 }}></span>
                </div>
              ))}
            </td>

            <td
              style={{
                border: '1px solid #000000',
                padding: '4px 10px',
                verticalAlign: 'top',
                width: '18%',
              }}
            >
              <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                2<sup>nd</sup> <span style={{ textDecoration: 'underline' }}>SITTING</span>
              </div>
              {[
                { label: 'PROMOTED', checked: false },
                { label: 'REPEAT', checked: false },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1px', paddingRight: '20px' }}>
                  <span style={{ fontWeight: 'bold' }}>{item.label}</span>
                  <span style={{ display: 'inline-block', width: '13px', height: '13px', border: '1px solid #000000', flexShrink: 0 }}></span>
                </div>
              ))}
            </td>

            <td
              style={{
                border: '1px solid #000000',
                padding: '4px 8px',
                verticalAlign: 'top',
                textAlign: 'left',
                fontSize: '11px',
                height: '70px',
                position: 'relative',
              }}
            >
              <div style={{ fontWeight: 'bold', lineHeight: 1.3, margin: 0 }}>MUSHATSI Claver</div>
              <div style={{ fontWeight: 'normal', lineHeight: 1.3, marginTop: '4px' }}>SCHOOL HEADTEACHER</div>
              <div style={{ fontSize: '10px', lineHeight: 1.3, margin: 0, position: 'absolute', bottom: '12px', left: '8px' }}>SIGNATURE &amp; STAMP</div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Grade Scale */}
      <div style={{ border: '1px solid #000000', marginTop: '18px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <tbody>
            {[
              ['GRADE',   'A',         'B',         'C',         'D',      'E',       'S',       'F'],
              ['RANGE',   '100 - 85',  '84 - 80',   '79 - 70',   '69 - 60','59 - 50', '49 - 40', '39 - 0'],
              ['REMARKS', 'EXCELLENT', 'VERY GOOD', 'VERY GOOD', 'GOOD',   'AVERAGE', 'FAIR',    'FAIL'],
            ].map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, colIdx) => (
                  <td
                    key={colIdx}
                    style={{
                      padding: '2px 6px',
                      fontWeight: 'bold',
                      fontSize: '11px',
                      borderTop: rowIdx === 0 ? 'none' : '1px solid #000000',
                      borderBottom: 'none',
                      borderLeft: colIdx === 0 ? 'none' : '3px double #000000',
                      borderRight: 'none',
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <p style={{ textAlign: 'right', fontSize: '9px', margin: '4px 0 0', fontStyle: 'italic', fontWeight: 'bold', color: '#000' }}>
      Generated by Urubuto Education Software / Product of BK Techous
    </p>
    <div style={{ height: '8cm' }}></div>
    </div>
  );
}

/* ─── Constants ─── */
const HEADER_GRAY = '#cccccc';
const SECTION_DARK = '#8c8c8c';

const cellBorder: React.CSSProperties = {
  borderTop: '1px solid #000000',
  borderBottom: '1px solid #000000',
  borderLeft: '2px double #000000',
  borderRight: '2px double #000000',
};

const cellBase: React.CSSProperties = {
  ...cellBorder,
  padding: '1px 3px',
  fontSize: '11px',
  verticalAlign: 'middle',
};

function TH({
  children,
  style,
  ...rest
}: React.ThHTMLAttributes<HTMLTableCellElement> & { style?: React.CSSProperties }) {
  return (
    <th
      {...rest}
      style={{
        ...cellBase,
        fontWeight: 'bold',
        fontSize: '10px',
        backgroundColor: '#ffffff',
        ...style,
      }}
    >
      {children}
    </th>
  );
}

function TD({
  children,
  bold,
  left,
  style,
  ...rest
}: React.TdHTMLAttributes<HTMLTableCellElement> & { bold?: boolean; left?: boolean }) {
  return (
    <td
      {...rest}
      style={{
        ...cellBase,
        textAlign: left ? 'left' : 'center',
        paddingLeft: left ? '4px' : '3px',
        fontWeight: bold ? 'bold' : 'normal',
        ...style,
      }}
    >
      {children}
    </td>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td style={{ fontWeight: 'bold', paddingRight: '10px', fontSize: '12px', whiteSpace: 'nowrap' }}>{label}</td>
      <td style={{ fontSize: '12px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>: {value}</td>
    </tr>
  );
}

function SectionHeader({ label, cols }: { label: string; cols: number }) {
  return (
    <tr>
      <td
        colSpan={cols}
        style={{
          ...cellBase,
          textAlign: 'left',
          paddingLeft: '4px',
          fontWeight: 'bold',
          backgroundColor: SECTION_DARK,
          borderTop: '2px solid #000000',
          borderBottom: '2px solid #000000',
          color: '#000000',
        }}
      >
        {label}
      </td>
    </tr>
  );
}

function SectionDivider({ cols }: { cols: number }) {
  return (
    <tr>
      <td
        colSpan={cols}
        style={{
          ...cellBase,
          backgroundColor: SECTION_DARK,
          borderTop: '2px solid #000000',
          borderBottom: '2px solid #000000',
          height: '18px',
          padding: '2px 0',
        }}
      />
    </tr>
  );
}

function SubjectRow({
  name,
  max,
  t1,
  t2,
  t3,
  gen,
}: {
  name: string;
  max: number[];
  t1: (number | string)[];
  t2: (number | string)[];
  t3: (number | string)[];
  gen: (number | string)[];
}) {
  return (
    <tr>
      <TD bold left style={{ ...cellBorder }}>
        {name.includes('\n')
          ? name.split('\n').map((l, i, arr) => (
              <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
            ))
          : name}
      </TD>

      <TD bold style={cellBorder}>{max[0]}</TD>
      <TD bold style={cellBorder}>{max[1]}</TD>
      <TD bold style={{ ...cellBorder }}>{max[2]}</TD>

      <TD style={cellBorder}>{t1[0]}</TD>
      <TD style={cellBorder}>{t1[1]}</TD>
      <TD style={cellBorder}>{t1[2]}</TD>
      <TD style={{ ...cellBorder }}>{t1[3]}</TD>

      <TD style={cellBorder}>{t2[0]}</TD>
      <TD style={cellBorder}>{t2[1]}</TD>
      <TD style={cellBorder}>{t2[2]}</TD>
      <TD style={{ ...cellBorder }}>{t2[3]}</TD>

      <TD style={cellBorder}>{t3[0]}</TD>
      <TD style={cellBorder}>{t3[1]}</TD>
      <TD style={cellBorder}>{t3[2]}</TD>
      <TD style={{ ...cellBorder }}>{t3[3]}</TD>

      <TD bold style={cellBorder}>{gen[0]}</TD>
      <TD bold style={cellBorder}>{gen[1]}</TD>
      <TD bold style={cellBorder}>{gen[2]}</TD>
      <TD bold style={{ ...cellBorder }}>{gen[3]}</TD>

      <TD style={cellBorder}></TD>
    </tr>
  );
}
